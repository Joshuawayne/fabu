
import React from 'react';
import { Product } from '../types';
import Button from './Button'; // Import Button component

interface ProductCardProps {
  product: Product;
  onViewReceipt: (product: Product) => void;
  onAddToCart: (product: Product) => void; // Added prop for adding to cart
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewReceipt, onAddToCart }) => {
  return (
    <div className="bg-luxury-bg border border-luxury-subtle/70 rounded-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-md animate-fadeInUp">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <p className="text-xs text-luxury-text/60 mb-1 tracking-wider uppercase">{product.category}</p>
        <h3 className="text-lg md:text-xl font-medium text-luxury-text mb-2 truncate group-hover:text-luxury-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-base font-semibold text-luxury-accent mt-auto mb-4">${product.price.toFixed(2)}</p>
        
        <div className="space-y-2 mt-auto">
           <Button
            onClick={() => onAddToCart(product)}
            variant="secondary" // Primary action, e.g., solid accent
            className="w-full text-sm"
          >
            Add to Cart
          </Button>
          <button
            onClick={() => onViewReceipt(product)}
            className="w-full text-xs py-2 px-4 border border-luxury-subtle text-luxury-text hover:border-luxury-accent hover:text-luxury-accent transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-luxury-accent/70 rounded font-medium tracking-wide"
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
