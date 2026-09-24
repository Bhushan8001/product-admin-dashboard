export function parsePositiveInt(value: string | null, fallback: number) { const parsed = Number(value); return value && Number.isInteger(parsed) && parsed >= 1 ? parsed : fallback; }
export function parsePageSize(value: string | null) { const parsed = Number(value); return [10, 20, 50].includes(parsed) ? parsed : 10; }
export function formatPrice(price: number) { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price); }
export function formatCategory(category: string) { return category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "); }
