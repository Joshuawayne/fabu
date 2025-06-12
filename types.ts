
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
