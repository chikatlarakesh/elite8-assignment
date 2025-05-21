import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;