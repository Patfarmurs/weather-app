import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="max-w-2xl mx-auto mb-6 bg-red-500/20 backdrop-blur-md border border-red-300/50 text-white px-6 py-4 rounded-2xl">
      {message}
    </div>
  );
};

export default ErrorMessage;