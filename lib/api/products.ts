import api from "./client";
import { Category, Product, ProductsResponse } from "../types";
export interface GetProductsParams { limit?: number; skip?: number; sortBy?: "price" | "rating" | "title"; order?: "asc" | "desc"; delay?: number; }
export async function getProducts(params: GetProductsParams = {}) { return (await api.get<ProductsResponse>("/products", { params })).data; }
export async function searchProducts(query: string, params: GetProductsParams = {}) { return (await api.get<ProductsResponse>("/products/search", { params: { q: query, ...params } })).data; }
export async function getProductsByCategory(category: string, params: GetProductsParams = {}) { return (await api.get<ProductsResponse>(`/products/category/${encodeURIComponent(category)}`, { params })).data; }
export async function getCategories() { return (await api.get<Category[]>("/products/categories")).data; }
export async function getProduct(id: number) { return (await api.get<Product>(`/products/${id}`)).data; }
export async function addProduct(product: Partial<Product>) { return (await api.post<Product>("/products/add", product)).data; }
export async function updateProduct(id: number, product: Partial<Product>) { return (await api.put<Product>(`/products/${id}`, product)).data; }
export async function deleteProduct(id: number) { return (await api.delete<Product>(`/products/${id}`)).data; }
