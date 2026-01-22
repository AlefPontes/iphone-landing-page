import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: 'Comprar e Saber Mais',
      links: [
        'iPhone 17 Pro',
        'iPhone 17 Pro Max',
        'Comparar modelos',
        'Acessórios',
      ],
    },
    {
      title: 'Especificações',
      links: ['Características técnicas', 'Câmera', 'Bateria', 'Display'],
    },
    {
      title: 'Suporte',
      links: ['Suporte ao iPhone', 'AppleCare+', 'iOS 19', 'Contato'],
    },
    {
      title: 'Apple',
      links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras'],
    },
  ];

  const buttonLinks = ['Política de privacidade', 'Termos de Uso', 'Vendas'];

  return (
    <footer className="bg-gray-900 pt-20 px-8">
      <div className="max-w-6xl mx-auto mb-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {sections.map((section) => (
            <div>
              <h3 className="mb-3 font-bold text-xl">{section.title}</h3>

              <div className="flex flex-col gap-1 text-gray-300/80">
                {section.links.map((link, index) => (
                  <a key={index} href="#" className="hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto border-t border-white/10 py-8">
          <p>Copyright © 2025 Apple Inc. Todos os direitos reservados.</p>
          <div className="flex flex-col md:flex-row gap-3">
            {buttonLinks.map((button, index) => (
              <a
                href="#"
                className="text-gray-400 cursor-pointer hover:text-white"
                key={index}
              >
                {button}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
