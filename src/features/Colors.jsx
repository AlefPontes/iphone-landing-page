import React, { useState } from 'react';
import Button from '../components/Button';
import Title from '../components/Title';

const Colors = () => {
  const iphoneModels = [
    {
      id: 'blue',
      name: 'Titânio Azul',
      image: '/img/iphone-blue.jpg',
      colorClass: 'bg-blue-500',
    },
    {
      id: 'silver',
      name: 'Titânio Natural',
      image: '/img/iphone-silver.jpg',
      colorClass: 'bg-gray-300',
    },
    {
      id: 'orange',
      name: 'Titânio Laranja',
      image: '/img/iphone-orange.jpg',
      colorClass: 'bg-orange-500',
    },
  ];

  const models = [
    {
      name: 'Pro Max',
      screen: '6.9 polegadas',
      storage: '256GB, 512GB ou 1TB',
      battery: '33h de vídeo',
      weight: '221g',
    },
    {
      name: 'Pro',
      screen: '6.3 polegadas',
      storage: '128GB, 256GB ou 512GB',
      battery: '29h de vídeo',
      weight: '199g',
    },
  ];

  const [selectedColor, setColor] = useState('blue');

  return (
    <section id="cores" className="bg-black pt-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb:text-6xl font-bold mb-4">
            Escolha sua cor
          </h2>
          <p className="text-xl text-gray-400">
            Quatro acabamentos em titânio lindos
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center min-h-125">
              <img
                src={
                  iphoneModels.find((model) => model.id === selectedColor).image
                }
                alt="iPhone 17"
                className="max-w-full max-h[600px] mx-auto"
              />
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                <h3 className="text-2xl font-semibold">
                  {
                    iphoneModels.find((element) => element.id === selectedColor)
                      .name
                  }
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mb-20">
          {iphoneModels.map((color) => (
            <button
              key={color.id}
              onClick={() => setColor(color.id)}
              className="relative transition-all duration-300 cursor-pointer"
            >
              <div
                className={`transition-all duration-300 w-16 h-16 rounded-full border-4 ${color.colorClass} ${color.id === selectedColor ? 'border-red scale-105' : 'border-gray-600'}`}
              ></div>
            </button>
          ))}
        </div>
      </div>

      <section className="flex flex-col lg:flex-row gap-4 justify-center">
        {models.map((model, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-gray-900 to-transparent p-8 flex flex-col gap-1 rounded-3xl"
          >
            <span className="text-4xl">📱</span>
            <h2 className="font-bold text-2xl">{model.name}</h2>
            <p className="text-gray-400">
              Tela de {model.screen} com ProMotion de 120Hz e Always-On display
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>{model.storage}</li>
              <li>Bateria com até {model.battery}</li>
              <li>Peso: {model.weight}</li>
            </ul>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-center py-10">
        <Button
          children={'Compre agora a partir de R$ 9.299'}
          size="lg"
        ></Button>

        <Title
          childrens={'Ou em até 12x de R$ 774,92 sem juros'}
          variant="text"
          className="text-xs p-3"
        ></Title>
      </section>
    </section>
  );
};

export default Colors;
