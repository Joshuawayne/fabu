import React from 'react';

interface PlusIconProps {
  className?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
};

export default PlusIcon;