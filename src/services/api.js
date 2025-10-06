// Simple localStorage-backed mock API for incidents
const STORAGE_KEY = 'dm_incidents_v1'

function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    return []
  }
}

function write(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

const API_URL = "http://localhost:5000/api/incidents";

const api = {
  async listIncidents() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch incidents");
    return await res.json();
  },

  async createIncident({ title, description }) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    });
    if (!res.ok) throw new Error("Failed to create incident");
    return await res.json();
  },

  // Optional: implement delete and getIncident if backend supports them
  async deleteIncident(id) {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete incident");
    return true;
  },

  async getIncident(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch incident");
    return await res.json();
  },
};

export default api
