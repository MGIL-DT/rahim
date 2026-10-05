export interface Product {
  id: number;
  name: string;
  nameEn?: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  category: string;
  categorySlug: string;
  description?: string;
  specifications?: Record<string, string>;
  colors?: string[];
  variants?: ProductVariant[];
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

export interface ProductVariant {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  image?: string;
  productCount: number;
  subcategories?: Category[];
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  logo: string;
  productCount: number;
}

export interface CartItem {
  id: number;
  productId: number;
  product: Product;
  quantity: number;
  variant?: ProductVariant;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'CUSTOMER' | 'ADMIN';
}
