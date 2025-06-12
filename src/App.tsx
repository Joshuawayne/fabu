
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import SectionTitle from './components/SectionTitle';
import Button from './components/Button';
import ReceiptModal from './components/ReceiptModal';
import CartModal from './components/CartModal';
import CheckoutReceiptModal from './components/CheckoutReceiptModal';
import OurStoryPage from './components/OurStoryPage'; // Import OurStoryPage
import { SAMPLE_PRODUCTS, APP_NAME } from './constants';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const featuredProducts = SAMPLE_PRODUCTS.slice(0, 3);
  const allProducts = SAMPLE_PRODUCTS;

  const [selectedProductForReceipt, setSelectedProductForReceipt] = useState<Product | null>(null);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutReceiptModalOpen, setIsCheckoutReceiptModalOpen] = useState(false);
  const [checkoutOrderDetails, setCheckoutOrderDetails] = useState<CartItem[] | null>(null);

  // State for managing active view based on hash
  const [activeView, setActiveView] = useState(determineActiveView());

  function determineActiveView() {
    // Ensure window.location is accessed only on client-side
    if (typeof window !== 'undefined') {
        switch (window.location.hash) {
        case '#our-story':
            return 'our-story';
        case '#shop':
            return 'shop'; // This will scroll to shop if on home view
        case '#contact':
            return 'contact'; // This will scroll to contact if on home view
        case '#home':
        default:
            return 'home';
        }
    }
    return 'home'; // Default for SSR or pre-hydration
  }

  useEffect(() => {
    const handleHashChange = () => {
      setActiveView(determineActiveView());
      if (window.location.hash === '#our-story' || window.location.hash === '#home' || window.location.hash === '') {
        window.scrollTo(0, 0); // Scroll to top for main page views
      }
    };

    window.addEventListener('hashchange', handleHashChange, false);
    // Set initial view correctly after component mounts
    handleHashChange(); 

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);


  const handleViewReceipt = (product: Product) => {
    setSelectedProductForReceipt(product);
    setIsReceiptModalOpen(true);
  };

  const handleCloseReceipt = () => {
    setIsReceiptModalOpen(false);
    setTimeout(() => {
      setSelectedProductForReceipt(null);
    }, 300);
  };

  const handleAddToCart = (productToAdd: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product: productToAdd, quantity: 1 }];
    });
  };
  
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);

  const handleRemoveCartItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const handleUpdateCartQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveCartItem(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.product.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) return;
    setCheckoutOrderDetails([...cartItems]);
    setIsCheckoutReceiptModalOpen(true);
    closeCartModal();
    setCartItems([]);
  };

  const handleCloseCheckoutReceipt = () => {
    setIsCheckoutReceiptModalOpen(false);
    setTimeout(() => {
      setCheckoutOrderDetails(null);
    }, 300);
  };

  const renderMainContent = () => {
    if (activeView === 'our-story') {
      return <OurStoryPage />;
    }
    // Default to 'home' view which includes all scrollable sections
    return (
      <>
        <HeroSection />

        <section id="featured" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Curated Selection" subtitle="Signature Pieces" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {featuredProducts.map((product: Product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onViewReceipt={handleViewReceipt}
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </div>
            <div className="text-center mt-16">
              <Button href="#shop" variant="primary" size="large" showArrow={true}>Explore All</Button>
            </div>
          </div>
        </section>

        <section id="shop" className="py-20 md:py-32 bg-luxury-bg">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="The Collection" subtitle="Discover Your Next Statement" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              {allProducts.map((product: Product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onViewReceipt={handleViewReceipt}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 'Our Philosophy' section removed, content moved to OurStoryPage */}

        <section id="contact" className="py-20 md:py-32 bg-luxury-bg border-t border-luxury-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Connect With Us" subtitle="Inquiries & Collaborations" />
            <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md border border-luxury-subtle/80">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-luxury-text/70 mb-1.5 tracking-wider uppercase">Full Name</label>
                  <input type="text" name="name" id="name" className="w-full bg-luxury-bg/50 border-luxury-subtle rounded p-3 focus:ring-1 focus:ring-luxury-accent focus:border-luxury-accent outline-none text-luxury-text text-sm placeholder:text-luxury-text/50" placeholder="Your Full Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-luxury-text/70 mb-1.5 tracking-wider uppercase">Email Address</label>
                  <input type="email" name="email" id="email" className="w-full bg-luxury-bg/50 border-luxury-subtle rounded p-3 focus:ring-1 focus:ring-luxury-accent focus:border-luxury-accent outline-none text-luxury-text text-sm placeholder:text-luxury-text/50" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-luxury-text/70 mb-1.5 tracking-wider uppercase">Message</label>
                  <textarea name="message" id="message" rows={5} className="w-full bg-luxury-bg/50 border-luxury-subtle rounded p-3 focus:ring-1 focus:ring-luxury-accent focus:border-luxury-accent outline-none text-luxury-text text-sm placeholder:text-luxury-text/50" placeholder="Share your thoughts..."></textarea>
                </div>
                <div className="text-center pt-2">
                  <Button type="submit" variant="primary" size="large" className="w-full sm:w-auto">Send Message</Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-luxury-bg text-luxury-text">
      <Header cartItemCount={totalCartItems} onCartIconClick={openCartModal} />
      <main className="flex-grow">
        {renderMainContent()}
      </main>
      <Footer />

      {selectedProductForReceipt && (
        <ReceiptModal
          product={selectedProductForReceipt}
          isOpen={isReceiptModalOpen}
          onClose={handleCloseReceipt}
        />
      )}

      <CartModal
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleProceedToCheckout}
      />

      {checkoutOrderDetails && (
          <CheckoutReceiptModal
            isOpen={isCheckoutReceiptModalOpen}
            onClose={handleCloseCheckoutReceipt}
            orderDetails={checkoutOrderDetails}
        />
      )}
    </div>
  );
};

export default App;