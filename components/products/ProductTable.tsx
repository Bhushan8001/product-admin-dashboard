"use client";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatCategory, formatPrice } from "@/lib/utils";

export default function ProductTable({ products, onDelete }: { products: Product[]; onDelete: (product: Product) => void }) {
  return (
    <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-[0.14em] text-slate-500">
            <tr>
              {["Product", "Category", "Price", "Rating", "Stock", "Actions"].map((label) => (
                <th key={label} className="px-5 py-4 font-semibold">
                  {label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.id} className="align-middle transition hover:bg-slate-50/80">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-12 w-12 rounded-xl border border-slate-200 object-cover shadow-sm"
                    />
                    <div>
                      <Link href={`/products/${product.id}`} className="font-semibold text-slate-800 transition hover:text-blue-600">
                        {product.title}
                      </Link>
                      <p className="mt-1 text-xs text-slate-500">#{product.id}</p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-slate-600">{formatCategory(product.category)}</td>
                <td className="px-5 py-4 font-semibold text-slate-900">{formatPrice(product.price)}</td>
                <td className="px-5 py-4 text-slate-700">{product.rating.toFixed(1)}</td>
                <td className="px-5 py-4 text-slate-700">{product.stock}</td>

                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/products/${product.id}/edit`}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => onDelete(product)}
                      className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
