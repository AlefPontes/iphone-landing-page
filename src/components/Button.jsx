import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    'rounded-full font-medium transition-all duration-300 hover:scale-103 shadow-md cursor-pointer flex items-center justify-center';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-800 shadow-blue-500/30',
    secondary:
      'border-2 border-white hover:bg-white/85 hover:text-black text-white/80 shadow-white-500/30',
  };

  const sizes = {
    md: 'px-6 py-2 text-md',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <>
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
