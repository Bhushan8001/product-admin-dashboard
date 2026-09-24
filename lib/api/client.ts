import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { clearStoredUser, getAccessToken } from "../auth-storage";
const api: AxiosInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL || "https://dummyjson.com", headers: { "Content-Type": "application/json" }, timeout: 15000 });
api.interceptors.request.use((config: InternalAxiosRequestConfig) => { const token = getAccessToken(); if (token) config.headers.Authorization = `Bearer ${token}`; return config; });
api.interceptors.response.use(response => response, (error: AxiosError<{ message?: string }>) => { if (error.response?.status === 401) { clearStoredUser(); if (typeof window !== "undefined" && window.location.pathname !== "/login") window.location.href = "/login"; } const normalized = new Error(error.response?.data?.message || error.message || "Something went wrong."); Object.assign(normalized, { status: error.response?.status, code: error.code, originalError: error }); return Promise.reject(normalized); });
export default api;
