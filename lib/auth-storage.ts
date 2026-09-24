import { User } from "./types";
const AUTH_KEY = "product_admin_auth";
export function getStoredUser(): User | null { if (typeof window === "undefined") return null; try { const raw = localStorage.getItem(AUTH_KEY); return raw ? JSON.parse(raw) as User : null; } catch { localStorage.removeItem(AUTH_KEY); return null; } }
export function setStoredUser(user: User) { localStorage.setItem(AUTH_KEY, JSON.stringify(user)); }
export function clearStoredUser() { localStorage.removeItem(AUTH_KEY); }
export function getAccessToken() { return getStoredUser()?.accessToken ?? null; }
