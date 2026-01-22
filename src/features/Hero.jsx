import React from 'react';

const Hero = () => {
  return (
    <section className="relative xl:min-h-[calc(100vh-80px)] overflow-hidden bg-black">
      <div className="xl:absolute inset-0 z-0">
        <img
          src="img/hero.jpg"
          alt="Iphone 17 Pro"
          className="mx-auto h-full opacity-90 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80"></div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
