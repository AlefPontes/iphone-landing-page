import React from 'react';
import Button from '../components/Button';
import Nav from '../components/Nav';

const links = [
  { text: 'Design', href: '#design' },
  { text: 'Performance', href: '#performance' },
  { text: 'Câmera', href: '#camera' },
  { text: 'Cores', href: '#cores' },
];

const NavBar = () => {
  return (
    <nav className="hidden sm:block fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 h-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-8">
        <Nav itemsList={links}></Nav>

        <Button children={'Comprar'}></Button>
      </div>
    </nav>
  );
};

export default NavBar;
