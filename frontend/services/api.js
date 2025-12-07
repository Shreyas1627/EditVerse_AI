// src/services/api.js
import axios from 'axios';

// CHANGE THIS if your backend runs on a different port
const API_BASE_URL = 'http://localhost:8000'; 

export const api = {
    // 1. Upload Video
    uploadVideo: async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await axios.post(`${API_BASE_URL}/jobs/upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data; // Returns { job_id, filename, status }
    },

    // 2. Submit Prompt
    submitPrompt: async (jobId, promptText) => {
        const response = await axios.post(`${API_BASE_URL}/jobs/${jobId}/prompt`, {
            prompt: promptText
        });
        return response.data;
    },

    // 3. Check Status
    getJobStatus: async (jobId) => {
        const response = await axios.get(`${API_BASE_URL}/jobs/${jobId}`);
        return response.data; // Returns { status, error, ... }
    },

    // 4. Get History
    getHistory: async () => {
        const response = await axios.get(`${API_BASE_URL}/jobs/history`);
        return response.data;
    },

    // Helper to construct Video URL
    getVideoUrl: (jobId) => {
        // We add a timestamp query param later to force React to reload the video
        return `${API_BASE_URL}/jobs/${jobId}/download`;
    }
};