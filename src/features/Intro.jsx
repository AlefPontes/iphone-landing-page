import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import Cards from '../components/Card';

const specs = [
  {
    title: { text: '6.3"', variant: 'blue' },
    subtitle: 'Display Super Retina XDR',
  },
  {
    title: { text: 'A18 Pro', variant: 'orange' },
    subtitle: 'Chip mais rápido',
  },
  {
    title: { text: '48MP', variant: 'blue' },
    subtitle: 'Sistema de câmera',
  },
  {
    title: { text: '29h', variant: 'orange' },
    subtitle: 'Bateria',
  },
];

const Intro = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <Title childrens={'iPhone 17 Pro'}></Title>
        <p className="text-2xl md:text-4xl mb-4 text-gradient font-bold">
          Titânio. Tão forte. Tão leve. Tão Pro.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          O design mais refinado que já criamos. Titânio de grau aeroespacial.
          Chip A18 Pro. Sistema de câmera Pro revolucionário.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <Button children={'Compre Agora'} size="lg"></Button>
          <Button
            children={'Saiba Mais'}
            variant="secondary"
            size="lg"
          ></Button>
        </div>
      </div>

      <Cards specs={specs}></Cards>
    </section>
  );
};

export default Intro;
