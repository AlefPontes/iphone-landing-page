import React from 'react';
import Title from '../components/Title';
import Cards from '../components/Card';

const Highlights = () => {
  const specs = [
    {
      img: {
        src: 'public/img/IPHONE - OUT - 2025/titanium-design.jpg',
        alt: 'iPhone Titanium',
      },
      title: { text: 'Titânio Premium', variant: 'secondary' },
      subtitle:
        'Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.',
    },
    {
      img: {
        src: 'public/img/IPHONE - OUT - 2025/ios-features.jpg',
        alt: 'IOS 26',
      },
      title: { text: 'IOS 26', variant: 'secondary' },
      subtitle:
        'O sistema operacional mais avançado do mundo com IA integrada.',
    },
    {
      img: {
        src: 'public/img/IPHONE - OUT - 2025/chip-a18-pro.jpg',
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
    },
  ];

  return (
    <section className="bg-black pb-20 px-6 " id="design">
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

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="public/img/IPHONE - OUT - 2025/titanium-design.jpg"
              alt="Iphone Titanium"
            ></img>
            <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
            <p className="text-gray-300">
              Estrutura em titânio de grau aeroespacial. O smartphone mais forte
              e leve.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="public/img/IPHONE - OUT - 2025/ios-features.jpg"
              alt="IOS 2025"
            ></img>
            <h3 className="font-bold mb-2 text-3xl">IOS 26</h3>
            <p className="text-gray-300">
              O sistema operacional mais avançado do mundo com IA integrada.
            </p>
          </div>
        </div>

        <div
          className="bg-gray-900 rounded-3xl p-12 mb-16 grid grid-cols-2"
          id="performance"
        >
          <div>
            <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
            <p className="text-gray-300 mb-6">
              O chip mais poderoso em um smartphone
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>CPU 20% mais rápida</li>
              <li>GPU 25% mais eficiente</li>
              <li>Neural Engine com 16 núcleos</li>
              <li>Ray Tracing acelerado por hardware</li>
            </ul>
          </div>

          <img
            className="w-full rounded-2xl mb-4"
            src="public/img/IPHONE - OUT - 2025/chip-a18-pro.jpg"
            alt="Chip A18"
          ></img>
        </div>

        <div id="camera" className="text-center">
          <h3 className="text-4xk font-bold mb-10">
            Sistema de câmera Pro avançado
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
              <h4 className="text-xl font-semibold mb-2">Principal</h4>
              <p className="text-gray-400">
                Sensor quad-pixel com foco automático
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="text-4xl font-bold text-orange-500 mb-4">
                12MP
              </div>
              <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
              <p className="text-gray-400">
                Campo de visão de 120° com modo noturno
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
              <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
              <p className="text-gray-400">
                Zoom óptico de 5x com estabilização
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
