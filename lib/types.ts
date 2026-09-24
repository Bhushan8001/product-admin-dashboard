export interface User { id: number; username: string; email: string; firstName: string; lastName: string; image?: string; accessToken: string; refreshToken?: string; }
export interface LoginResponse extends User {}
export interface Review { rating: number; comment: string; date: string; reviewerName: string; reviewerEmail: string; }
export interface Product { id: number; title: string; description: string; category: string; price: number; discountPercentage?: number; rating: number; stock: number; brand?: string; thumbnail: string; images: string[]; reviews?: Review[]; availabilityStatus?: string; }
export interface ProductsResponse { products: Product[]; total: number; skip: number; limit: number; }
export interface Category { slug: string; name: string; url: string; }
export interface ProductFormData { title: string; description: string; category: string; price: string; stock: string; thumbnail: string; }
export interface ProductOverrides { added: Product[]; updated: Record<number, Partial<Product>>; deleted: number[]; }
