"use client";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatCategory, formatPrice } from "@/lib/utils";

export default function ProductCard({ product, onDelete }: { product: Product; onDelete: (product: Product) => void }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:hidden">
      <div className="flex gap-4">
        <img src={product.thumbnail} alt={product.title} className="h-24 w-24 rounded-xl border border-slate-200 object-cover shadow-sm" />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/products/${product.id}`} className="text-base font-semibold text-slate-900 transition hover:text-blue-600">
              {product.title}
            </Link>
            <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-blue-600">
              {formatCategory(product.category)}
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
            <div className="rounded-lg bg-slate-50 px-2 py-2">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">Price</p>
              <p className="mt-1 font-semibold text-slate-900">{formatPrice(product.price)}</p>
            </div>
            <div className="rounded-lg bg-slate-50 px-2 py-2">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">Rating</p>
              <p className="mt-1 font-semibold text-slate-900">{product.rating.toFixed(1)}</p>
            </div>
            <div className="rounded-lg bg-slate-50 px-2 py-2">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">Stock</p>
              <p className="mt-1 font-semibold text-slate-900">{product.stock}</p>
            </div>
            <div className="rounded-lg bg-slate-50 px-2 py-2">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">ID</p>
              <p className="mt-1 font-semibold text-slate-900">#{product.id}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <Link
          href={`/products/${product.id}/edit`}
          className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          Edit
        </Link>
        <button
          type="button"
          onClick={() => onDelete(product)}
          className="flex-1 rounded-xl bg-red-50 px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
