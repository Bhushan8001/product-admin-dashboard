import api from "./client";
import { LoginResponse } from "../types";
export async function login(username: string, password: string) { const response = await api.post<LoginResponse>("/auth/login", { username, password, expiresInMins: 60 }); return response.data; }
