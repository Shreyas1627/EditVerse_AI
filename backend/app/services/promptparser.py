# backend/app/services/prompt_parser.py
import json
from openai import OpenAI
from backend.app.core.config import settings

# 1. Initialize Client
client = OpenAI(
    base_url=settings.SAMBANOVA_BASE_URL,
    api_key=settings.SAMBANOVA_API_KEY,
)

def parse_prompt(prompt_text: str) -> dict:
    """
    Uses Llama 3.1 (via SambaNova) to convert natural language into structured JSON actions.
    """
    print(f"🧠 [AI] Thinking about prompt: {prompt_text}")

    # 2. Define System Instructions
    system_instructions = """
    You are a video editing assistant. Your job is to translate user requests into a strict JSON format.
    
    OUTPUT FORMAT:
    You must return a JSON object with a key "actions", which is a list of actions.
    Example: {"actions": [{"type": "trim", "start": 0, "end": 10}, {"type": "fade", "kind": "in"}]}

    AVAILABLE MUSIC LIBRARY (Use ONLY these filenames):
    - "actiondrama_1.mp3"    (for action, intense, fast, hype)
    - "actiondrama_2.mp3"    (for gym, powerful, aggressive)
    - "comedy_1.mp3"         (for funny, light, goofy)
    - "comedy_2.mp3"         (for extra goofy, meme vibes)
    - "electric_1.mp3"       (for techno, energetic, modern)
    - "horror_1.mp3"         (for scary, dark tension)
    - "horror_2.mp3"         (for deeper horror, thriller)
    - "miscellaneous_1.mp3"  (for random, neutral, filler)
    - "miscellaneous_2.mp3"  (for mixed style, generic mood)
    - "positive_1.mp3"       (for happy, upbeat, vlog, fun)
    - "positive_2.mp3"       (for cheerful, energetic, viral)
    - "romantic_1.mp3"       (for love, soft romance)
    - "romantic_2.mp3"       (for deep emotional romance)
    - "scoring_1.mp3"        (for cinematic, emotional, sad)
    - "world_1.mp3"          (for cultural, outdoors, travel)
    - "world_2.mp3"          (for global, nature atmosphere)

    AUTO-EMOTION → TRACK MAPPING:
    - happy, vlog, fun, upbeat, viral  → "positive_1.mp3"
    - sad, emotional, cinematic, slow  → "scoring_1.mp3"
    - action, intense, fast, hype, gym → "actiondrama_1.mp3"
    - horror, scary, dark, thriller    → "horror_1.mp3"
    - romantic, love, soft             → "romantic_1.mp3"
    - funny, joking, meme              → "comedy_1.mp3"
    - electric, techno, energetic      → "electric_1.mp3"
    - world, travel, nature            → "world_1.mp3"
    - random, neutral, mixed vibe      → "miscellaneous_1.mp3"

    AVAILABLE ACTIONS:
    1. type: "trim" -> requires "start" (float), "end" (float)
    2. type: "speed" -> requires "value" (float, e.g., 0.5 for slow, 2.0 for fast)
    3. type: "filter" -> requires "name" (string, e.g., "grayscale")
    4. type: "add_text" -> requires "content" (string)
    4. type: "add_text" -> requires "content" (string), optional "position" ("top", "bottom", "center")
    5. type: "fade" -> requires "kind" ("in" or "out"), optional "duration" (float, default 1.0)
    6. type: "add_music" -> requires "track" (filename from library), optional "volume" (0.1 to 1.0, default 0.3)
    7. type: "auto_subtitles" -> no arguments needed.
    8. type: "aspect_ratio" -> ratio ("9:16", "1:1"), strategy ("center", "pad")
    9. type: "remove_silence" -> threshold (int, default -30), min_duration (float, default 0.5)

    RULES:
    - If the user mentions "funny" or "viral", assume they want 1.5x speed.
    - If the user mentions "sad" or "cinematic", assume they want 0.8x speed and grayscale.
    - If the user says "intro" or "start", add a "fade in".
    - If the user says "outro" or "end", add a "fade out".
    - If the user says "title" or "headline", set text position to "top".
    - If user says "add music" without specifying style/emotion, choose automatically using emotion/category matching.
    - If multiple moods match, choose the closest category.
    - Always mix music at low volume (0.2 - 0.4) unless user says "loud".
    - If user says "captions", "subtitles", or "words on screen", use "auto_subtitles".
    - Return ONLY raw JSON. No markdown formatting.
    - If user says "remove silence", "cut gaps", or "jump cuts", use "remove_silence".
    - If user says "shorts","reel", "instagram reel", or "tiktok", use aspect_ratio "9:16".
    - If user says "square" or "instagram", use aspect_ratio "1:1".
    """

    try:
        # 3. Call the API
        response = client.chat.completions.create(
            model=settings.SAMBANOVA_MODEL,
            messages=[
                {"role": "system", "content": system_instructions},
                {"role": "user", "content": prompt_text}
            ],
            temperature=0.1, # Low temperature for consistency
        )

        # 4. Parse Response
        content = response.choices[0].message.content.strip()
        print(f"🤖 [AI] Raw Response: {content}")
        
        # Clean up markdown if present
        if content.startswith("```json"):
            content = content.replace("```json", "").replace("```", "")
        
        return json.loads(content)

    except Exception as e:
        print(f"❌ [AI] Error: {e}")
        return {"actions": []}