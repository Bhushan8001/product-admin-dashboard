"use client";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ProductDetailClient from "@/components/products/ProductDetailClient";
export default function ProductDetailPage() { const params = useParams(); const id = Number(params.id); return <ProtectedRoute><main className="min-h-screen"><div className="mx-auto max-w-6xl px-4 py-8">{!Number.isInteger(id) || id < 1 ? <div className="rounded-xl border bg-white p-12 text-center">Product Not Found</div> : <ProductDetailClient id={id} />}</div></main></ProtectedRoute>; }
