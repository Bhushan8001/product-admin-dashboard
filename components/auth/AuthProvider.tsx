"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { login as loginRequest } from "@/lib/api/auth";
import { clearStoredUser, getStoredUser, setStoredUser } from "@/lib/auth-storage";
import { User } from "@/lib/types";
interface AuthContextValue { user: User | null; loading: boolean; login: (username: string, password: string) => Promise<void>; logout: () => void; }
const AuthContext = createContext<AuthContextValue | undefined>(undefined);
export function AuthProvider({ children }: { children: ReactNode }) { const [user, setUser] = useState<User | null>(null); const [loading, setLoading] = useState(true); useEffect(() => { setUser(getStoredUser()); setLoading(false); }, []); async function login(username: string, password: string) { const loggedInUser = await loginRequest(username, password); setStoredUser(loggedInUser); setUser(loggedInUser); } function logout() { clearStoredUser(); setUser(null); window.location.href = "/login"; } return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>; }
export function useAuth() { const context = useContext(AuthContext); if (!context) throw new Error("useAuth must be used inside AuthProvider"); return context; }
