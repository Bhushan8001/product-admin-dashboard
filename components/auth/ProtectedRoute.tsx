"use client";
import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";
export default function ProtectedRoute({ children }: { children: ReactNode }) { const { user, loading } = useAuth(); const router = useRouter(); const pathname = usePathname(); useEffect(() => { if (!loading && !user) router.replace(`/login?next=${encodeURIComponent(pathname)}`); }, [loading, user, router, pathname]); if (loading || !user) return <div className="flex min-h-screen items-center justify-center"><div className="loader" /></div>; return <>{children}</>; }
