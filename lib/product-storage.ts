import { Product, ProductOverrides } from "./types";
const STORAGE_KEY = "product_admin_overrides_v1";
function readOverrides(): ProductOverrides { if (typeof window === "undefined") return { added: [], updated: {}, deleted: [] }; try { const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); return { added: parsed.added ?? [], updated: parsed.updated ?? {}, deleted: parsed.deleted ?? [] }; } catch { return { added: [], updated: {}, deleted: [] }; } }
function saveOverrides(value: ProductOverrides) { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); }
export function applyLocalOverrides(products: Product[]) { const value = readOverrides(); const deleted = new Set(value.deleted); return [...products.filter(product => !deleted.has(product.id)).map(product => ({ ...product, ...(value.updated[product.id] ?? {}) })), ...value.added]; }
export function getLocalProduct(id: number) { const value = readOverrides(); if (value.deleted.includes(id)) return null; return value.added.find(product => product.id === id) ?? (value.updated[id] ? { id, ...value.updated[id] } as Product : null); }
export function isLocalOnlyProduct(id: number) { const value = readOverrides(); return value.added.some(product => product.id === id); }
export function saveAddedProduct(product: Product) { const value = readOverrides(); value.added = [product, ...value.added.filter(item => item.id !== product.id)]; saveOverrides(value); }
export function saveUpdatedProduct(id: number, changes: Partial<Product>) { const value = readOverrides(); const index = value.added.findIndex(item => item.id === id); if (index >= 0) value.added[index] = { ...value.added[index], ...changes }; else value.updated[id] = { ...(value.updated[id] ?? {}), ...changes }; saveOverrides(value); }
export function saveDeletedProduct(id: number) { const value = readOverrides(); value.added = value.added.filter(item => item.id !== id); if (!value.deleted.includes(id)) value.deleted.push(id); delete value.updated[id]; saveOverrides(value); }
export function getOverrides() { return readOverrides(); }
