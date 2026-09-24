"use client";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ProductsClient from "@/components/products/ProductsClient";
import { useAuth } from "@/components/auth/AuthProvider";
function ProductsLayout() { const { user, logout } = useAuth(); return <div className="min-h-screen"><header className="border-b bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6"><Link href="/products" className="text-xl font-bold">Product Admin</Link><div className="flex items-center gap-4"><span className="hidden text-sm text-gray-500 sm:block">{user?.firstName} {user?.lastName}</span><button type="button" onClick={logout} className="rounded-lg border px-3 py-2 text-sm">Logout</button></div></div></header><main className="mx-auto max-w-7xl px-4 py-6 md:px-6"><ProductsClient /></main></div>; }
export default function ProductsPage() { return <ProtectedRoute><ProductsLayout /></ProtectedRoute>; }
