import axios from "axios";
import { API_URL } from "./vars";

// Axios instance
const api = axios.create({ baseURL: API_URL });

// Add Authorization header if token exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ========== AUTH ==========

export const register = async (name: string, password: string) => {
  return api.post("/auth/register", { name, password });
};

export const login = async (name: string, password: string) => {
  const response = await api.post("/auth/login", { name, password });
  const token = response.data.token;

  localStorage.setItem("token", token);

  return token;
};

// ========== PLAYERS ==========

export const getPlayers = async () => {
  const response = await api.get("/players");

  return response.data;
};

export const getPlayer = async (id: number) => {
  const response = await api.get(`/players/${id}`);

  return response.data;
};

export const updateScore = async (id: number, delta: number) => {
  const response = await api.patch(`/players/${id}/score`, { delta });

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
