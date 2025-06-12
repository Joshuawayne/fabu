
import { Product, NavItem } from './types';

export const APP_NAME = "FABU";

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ethereal White Blouse',
    category: 'Tops',
    price: 79.99,
    imageUrl: 'https://res.cloudinary.com/ddfa67uba/image/upload/v1749713557/ac359f6b-3248-4431-aaa1-c3d745064312_zzi2i6.jpg',
    description: 'A light and airy blouse, perfect for any occasion. Crafted from sustainable organic cotton.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Ivory'],
  },
  {
    id: '2',
    name: 'Urban Flow Trousers',
    category: 'Bottoms',
    price: 119.99,
    imageUrl: 'https://res.cloudinary.com/ddfa67uba/image/upload/v1749713852/9bee35a0-64d1-4785-8c3c-74920310539a_vtffg0.jpg',
    description: 'Comfortable and stylish wide-leg trousers for the modern urbanite. Made with a blend of linen and tencel.',
    sizes: ['S', 'M', 'L'],
    colors: ['Charcoal', 'Beige'],
  },
  {
    id: '3',
    name: 'Celestial Silk Scarf',
    category: 'Accessories',
    price: 49.99,
    imageUrl: 'https://res.cloudinary.com/ddfa67uba/image/upload/v1749714024/bb5e139a-60bc-4a32-a3f3-fb30b7406088_glgcxg.jpg',
    description: 'A luxurious 100% silk scarf with an abstract celestial print. Adds a touch of elegance to any outfit.',
    sizes: ['One Size'],
    colors: ['Midnight Blue', 'Gold Accent'],
  },
  {
    id: '4',
    name: 'Geometric Knit Sweater',
    category: 'Knitwear',
    price: 149.99,
    imageUrl: 'https://res.cloudinary.com/ddfa67uba/image/upload/v1749714348/3a393c2e-2097-4271-af6c-f356dad9a30e_mcbzgj.jpg',
    description: 'A cozy and chic knit sweater featuring a subtle geometric pattern. Perfect for cooler days.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Forest Green', 'Cream'],
  },
   {
    id: '5',
    name: 'Avant-Garde Midi Dress',
    category: 'Dresses',
    price: 189.99,
    imageUrl: 'https://res.cloudinary.com/ddfa67uba/image/upload/v1749714601/Texturelabs_Fabric_161M_p2qo6g.png',
    description: 'Make a statement with this uniquely structured midi dress, blending art and fashion.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Deep Teal'],
  },
  {
    id: '6',
    name: 'Minimalist Leather Tote',
    category: 'Accessories',
    price: 220.00,
    imageUrl: 'https://picsum.photos/seed/p6/600/800',
    description: 'A timeless and spacious leather tote bag, designed for everyday elegance and functionality.',
    sizes: ['One Size'],
    colors: ['Tan', 'Black'],
  }
];

export const NAVIGATION_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Our Story', href: '#our-story' }, // Updated href
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', href: '#', icon: 'fabu-instagram' }, // Placeholder icon names
  { name: 'Pinterest', href: '#', icon: 'fabu-pinterest' },
  { name: 'Facebook', href: '#', icon: 'fabu-facebook' },
];