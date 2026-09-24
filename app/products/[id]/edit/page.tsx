"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ProductForm from "@/components/products/ProductForm";
export default function EditProductPage() { const params = useParams(); const id = Number(params.id); return <ProtectedRoute><main className="min-h-screen"><header className="border-b bg-white"><div className="mx-auto max-w-4xl px-4 py-4"><Link href={`/products/${id}`} className="text-sm text-blue-600">← Back to Product</Link></div></header><div className="mx-auto max-w-4xl px-4 py-8"><h1 className="mb-6 text-2xl font-bold">Edit Product</h1>{!Number.isInteger(id) || id < 1 ? <div>Invalid product ID.</div> : <ProductForm productId={id} />}</div></main></ProtectedRoute>; }
