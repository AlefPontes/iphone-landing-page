import React from 'react';
import Title from '../components/Title';
import Cards from '../components/Cards';

const Cameras = () => {
  const cameras = [
    {
      title: { text: '48MP', variant: 'blue' },
      subtitle: 'Principal',
      text: 'Sensor quad-pixel com foco automático',
    },
    {
      title: { text: '12MP', variant: 'orange' },
      subtitle: 'Ultra Wide',
      text: 'Campo de visão de 120° com modo noturno',
    },
    {
      title: { text: '12MP', variant: 'blue' },
      subtitle: 'Telefoto 5x',
      text: 'Zoom óptico de 5x com estabilização',
    },
  ];

  return (
    <section id="camera" className='px-6'>
      <div className="text-center flex flex-col gap-12 mb-16 max-w-7xl mx-auto">
        <Title
          childrens={'Sistema de câmera Pro avançado'}
          variant="secondary"
        ></Title>

        <div className="grid grid-cols-3 gap-6">
          <Cards specs={cameras} textAlign="text-center"></Cards>
        </div>
      </div>
    </section>
  );
};

export default Cameras;
