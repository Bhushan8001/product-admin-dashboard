"use client";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ProductsClient from "@/components/products/ProductsClient";
import { useAuth } from "@/components/auth/AuthProvider";

function ProductsLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-200">
              P
            </div>
            <div>
              <Link href="/products" className="text-lg font-bold tracking-tight text-slate-900">
                Product Admin
              </Link>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Inventory</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 sm:inline-flex">
              {user?.firstName} {user?.lastName}
            </span>
            <button
              type="button"
              onClick={logout}
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <ProductsClient />
      </main>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <ProtectedRoute>
      <ProductsLayout />
    </ProtectedRoute>
  );
}
