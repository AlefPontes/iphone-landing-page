import React from 'react';
import Title from './Title';

const Cards = ({
  specs,
  textAlign = 'text-center',
  padding = 'p-8',
  ...props
}) => {
  return (
    <>
      {specs.map((element, index) => (
        <div
          key={index}
          className={`${textAlign} bg-gray-900 ${padding} rounded-3xl`}
        >
          {element.img ? (
            <img
              src={element.img.src}
              alt={element.img.alt}
              className="rounded-2xl mb-4"
            />
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
          {element.text && (
            <Title as="p" childrens={element.text} variant="text"></Title>
          )}
        </div>
      ))}
    </>
  );
};

export default Cards;
