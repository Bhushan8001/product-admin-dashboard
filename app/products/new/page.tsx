"use client";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ProductForm from "@/components/products/ProductForm";
export default function NewProductPage() { return <ProtectedRoute><main className="min-h-screen"><header className="border-b bg-white"><div className="mx-auto max-w-4xl px-4 py-4"><Link href="/products" className="text-sm text-blue-600">← Back to Products</Link></div></header><div className="mx-auto max-w-4xl px-4 py-8"><h1 className="mb-6 text-2xl font-bold">Add Product</h1><ProductForm /></div></main></ProtectedRoute>; }
