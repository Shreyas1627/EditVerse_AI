import React from 'react';
import { Sparkles, MessageCircle, Bot } from 'lucide-react';

export default function SmartphoneContent() {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      {/* Logo Content - Section 1 */}
      <div
        id="phone-content-logo"
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#38bdf8] flex items-center justify-center shadow-lg shadow-[#8b5cf6]/50">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl text-[#f8fafc]">Editverse Ai</h3>
          <p className="text-sm text-[#f8fafc]/60 px-8">Your AI Video Editor</p>
        </div>
      </div>

      {/* Chat Interface - Section 2 */}
      <div
        id="phone-content-chat"
        className="absolute inset-0 p-6 flex flex-col justify-end opacity-0"
      >
        <div className="space-y-3 mb-4">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-gradient-to-r from-[#8b5cf6] to-[#38bdf8] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
              <p className="text-sm text-white">Add a sunset effect to my video</p>
            </div>
          </div>
          
          {/* AI response */}
          <div className="flex justify-start">
            <div className="bg-[#1e293b] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
              <p className="text-sm text-[#f8fafc]">
                <MessageCircle className="w-4 h-4 inline mr-1" />
                Done! I've added a warm sunset filter with enhanced golden tones.
              </p>
            </div>
          </div>
        </div>
        
        {/* Input area */}
        <div className="bg-[#1e293b] rounded-full px-4 py-2 flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Type your edit request..."
            className="flex-1 bg-transparent text-[#f8fafc] text-sm outline-none placeholder:text-[#f8fafc]/40"
            disabled
          />
          <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
        </div>
      </div>

      {/* Robot Mascot - Section 3 */}
      <div
        id="phone-content-robot"
        className="absolute inset-0 flex items-center justify-center opacity-0"
      >
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-[#8b5cf6] to-[#38bdf8] flex items-center justify-center shadow-2xl shadow-[#8b5cf6]/50">
              <Bot className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#38bdf8] rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
          <h3 className="text-xl text-[#f8fafc]">AI Assistant</h3>
          <p className="text-xs text-[#f8fafc]/60 px-8">Ready to help you create amazing videos!</p>
        </div>
      </div>
    </div>
  );
}
