
import React, { useEffect, useMemo } from 'react';
import { CartItem } from '../types';
import FabuLogo from './icons/FabuLogo';
import CloseIcon from './icons/CloseIcon';
import Button from './Button'; // Assuming Button component is suitable
import { APP_NAME } from '../constants';

interface CheckoutReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: CartItem[] | null;
}

const CheckoutReceiptModal: React.FC<CheckoutReceiptModalProps> = ({
  isOpen,
  onClose,
  orderDetails,
}) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const subtotal = useMemo(() => {
    if (!orderDetails) return 0;
    return orderDetails.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [orderDetails]);

  // For now, shipping is free and tax is 0. These can be made dynamic later.
  const shippingCost = 0;
  const taxAmount = 0;
  const grandTotal = subtotal + shippingCost + taxAmount;

  const orderNumber = useMemo(() => `ORD-${Date.now().toString().slice(-8)}`, [orderDetails]); // Generate once when orderDetails are set
  const orderDate = useMemo(() => new Date().toLocaleString(), [orderDetails]);

  if (!isOpen || !orderDetails) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-receipt-title"
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose} // Optional: close on backdrop click
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-md" />
      <div
        className="text-neutral-800 font-mono p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg animate-fadeInUp relative overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        style={{ 
          animationDelay: '0.1s',
          backgroundImage: 'url(https://res.cloudinary.com/ddfa67uba/image/upload/v1749719181/downloaded_image_3_tfa4dq.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <button
          aria-label="Close receipt"
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800 transition-colors z-10"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 pt-4">
          <FabuLogo className="h-12 mx-auto mb-3" color="#333333" accentColor="#B08D57" />
          <h2 id="checkout-receipt-title" className="text-xl sm:text-2xl font-semibold tracking-wider text-luxury-text">
            THANK YOU FOR YOUR ORDER!
          </h2>
          <p className="text-xs text-neutral-600 mt-1">Order #{orderNumber}</p>
          <p className="text-xs text-neutral-500">{orderDate}</p>
        </div>
        
        <div className="border-t border-b border-dashed border-neutral-300 my-4 py-3 text-xs text-neutral-600">
            <p><span className="font-medium text-neutral-700">Billed To:</span> Valued FABU Customer</p>
            <p><span className="font-medium text-neutral-700">Shipping To:</span> Your Confirmed Address</p>
        </div>


        {/* Itemized List - Scrollable */}
        <div className="flex-grow overflow-y-auto mb-4 -mx-1 px-1 custom-scrollbar">
          <div className="grid grid-cols-12 gap-x-2 gap-y-1 py-2 border-b border-dashed border-neutral-300 text-xs font-medium text-neutral-700">
            <div className="col-span-6">ITEM</div>
            <div className="col-span-2 text-center">QTY</div>
            <div className="col-span-2 text-right">PRICE</div>
            <div className="col-span-2 text-right">TOTAL</div>
          </div>
          {orderDetails.map((item) => (
            <div key={item.product.id} className="grid grid-cols-12 gap-x-2 gap-y-1 py-2 text-xs border-b border-dotted border-neutral-300 last:border-b-0">
              <div className="col-span-6 truncate" title={item.product.name}>{item.product.name}</div>
              <div className="col-span-2 text-center">{item.quantity}</div>
              <div className="col-span-2 text-right">${item.product.price.toFixed(2)}</div>
              <div className="col-span-2 text-right font-medium">${(item.product.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="mt-auto pt-4 border-t border-dashed border-neutral-300 space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-neutral-600">
            <span>Shipping:</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-neutral-600">
            <span>Tax (0%):</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-base sm:text-lg text-luxury-text border-t border-neutral-400 pt-2 mt-2">
            <span>Grand Total:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-neutral-600">
          <p>A confirmation email has been (not really) sent to your address.</p>
          <p className="mt-1">Thank you for shopping with {APP_NAME}!</p>
          <div className="mt-6">
            <Button onClick={onClose} variant="secondary" className="w-full sm:w-auto">
                Continue Shopping
            </Button>
          </div>
        </div>
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #a1a1a1;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CheckoutReceiptModal;
