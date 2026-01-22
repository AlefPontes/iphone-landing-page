import React from 'react';
import Title from './Title';

const Cards = ({ specs, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl',
    secondary: '',
  };

  console.log(specs);

  return (
    <>
      <div className={`${variants[variant]}`}>
        {specs.map((element, index) => (
          <div key={index} className="text-center bg-gray-900 py-5 rounded-3xl">
            {element.img ? (
              <img src={element.img.src} alt={element.img.alt} />
            ) : null}
            <Title
              as="h3"
              variant={element.title.variant}
              childrens={element.title.text}
            ></Title>
            {element.subtitle && (
              <Title
                as="h4"
                childrens={element.subtitle}
                variant="subtitle"
              ></Title>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
