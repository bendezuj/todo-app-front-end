import React from 'react';


const Title: React.FC = () => {
  return (
    <div className="flex items-center mb-12">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
      <h1 className="text-5xl font-bold text-blue-500">TODO LIST</h1>
    </div>
  );
};

export default Title;
