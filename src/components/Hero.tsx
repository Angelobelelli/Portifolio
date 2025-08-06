import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex justify-center items-center pt-20">
      <div className="container flex justify-between mx-auto px-6">
        <div className="flex justify-around gap-12 items-center w-full">
          {/* Text Content */}
          <div className=" flex flex-col space-y-8 ">
            <div>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-2">Olá!</h2>
              <h1 className="text-3xl md:text-4xl text-gray-300 mb-2 h-12" >
                Meu nome é
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Angelo Belelli
              </h1>
            </div>

           

            <div className=" flex flex-row space-x-6 ">
              <div className=" flex flex-row">
                  <img src="svg/html.svg" alt=""/>
                  <img src="svg/css3.svg" alt=""/>                 
                  <img src="svg/javascript.svg" alt=""/>
                  <img src="svg/git.svg" alt=""/>
                  <img src="svg/figma.svg" alt=""/>   
                  <img src="svg/tailwind.svg" alt=""/>
            </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <img 
                  src=" minhaFoto.jpeg" 
                  alt="Angelo Belelli"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;