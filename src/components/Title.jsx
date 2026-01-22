import React from 'react';

const Title = ({
  as: TitleTag = 'h1',
  variant = 'primary',
  childrens,
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'text-6xl md:text-8xl font-bold mb-6',
    secondary: 'text-4xl font-bold mb-2',
    subtitle: 'text-lg',
    gradient: 'text-4xl font-bold mb-4 text-gradient',
    blue: 'text-3xl font-bold mb-2 text-blue-600',
    orange: 'text-3xl font-bold mb-2 text-orange-500',
    text: 'text-gray-300'
  };

  return (
    <>
      <TitleTag {...props} className={`${variants[variant]} ${className}`}>
        {childrens}
      </TitleTag>
    </>
  );
};

export default Title;
