import React from 'react';
import { Download, Monitor } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Monitor className="text-purple-500 mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">Desenvolvedor </span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Front-End
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-lg mb-8">
            <div className="bg-black rounded-lg p-6">
              <div className="text-center mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  HTML, CSS, TAILWIND, JAVASCRIPT, REACT, GIT, FIGMA.
                </span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Eu sou um entusiasta do mundo da tecnologia com foco em desenvolvimento front-end. 
              Desde o início da minha jornada, tenho me dedicado a criar experiências interativas 
              e atraentes na web.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Atualmente estou cursando um curso Técnico de Desenvolvimento Web, 
              sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
            </p>

            <div className="pt-8">
              <p className="text-gray-400 mb-4">
                Abaixo está o meu <span className="text-purple-400 font-semibold">currículo</span> para download
              </p>
              
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center mx-auto space-x-2">
                <Download size={20} />
                <span>Currículo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;