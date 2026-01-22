import React from 'react';
import Title from '../components/Title';
import Cards from '../components/Cards';

const Highlights = () => {
  const specs1 = [
    {
      img: {
        src: '/img/titanium-design.jpg',
        alt: 'iPhone Titanium',
      },
      title: { text: 'Titânio Premium', variant: 'secondary' },
      text:
        'Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.',
    },
    {
      img: {
        src: '/img/ios-features.jpg',
        alt: 'IOS 26',
      },
      title: { text: 'IOS 26', variant: 'secondary' },
      text:
        'O sistema operacional mais avançado do mundo com IA integrada.',
    },
  ];
  const specs2 = {
    img: {
      src: '/img/chip-a18-pro.jpg',
      alt: 'Chip A18 Pro',
    },
    title: { text: 'A18 Pro', variant: 'gradient' },
    subtitle: 'O chip mais poderoso em um smartphone',
    list: [
      'CPU 20% mais rápida',
      'GPU 25% mais eficiente',
      'Neural Engine com 16 núcleos',
      'Ray Tracing acelerado por hardware',
    ],
  };

  return (
    <section className="bg-black px-6 " id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Title
            variant="secondary"
            as="h2"
            childrens={'Design revolucionário'}
          ></Title>
          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para criar a melhor experiência.
          </p>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 mb-16" 
            id="performance">
          <Cards
            specs={specs1}
            textAlign="text-left"
            textVariant="text"
          ></Cards>

          <div
            className="bg-gray-900 rounded-3xl p-12 col-span-2 grid md:grid-cols-2 gap-6"
          >
            <div>
              <Title childrens={'A18 Pro'} variant="gradient"></Title>
              <Title
                childrens={'O chip mais poderoso em um smartphone'}
                variant="text"
              ></Title>
              <ul className="text-left space-y-3 text-gray-300">
                <li>CPU 20% mais rápida</li>
                <li>GPU 25% mais eficiente</li>
                <li>Neural Engine com 16 núcleos</li>
                <li>Ray Tracing acelerado por hardware</li>
              </ul>
            </div>
            <div className='flex items-center'>
              <img
                className="w-full rounded-2xl"
                src="/img/chip-a18-pro.jpg"
                alt="Chip A18"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
