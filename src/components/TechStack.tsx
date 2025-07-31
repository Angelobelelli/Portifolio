import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'HTML', color: 'bg-orange-500', icon: '5' },
    { name: 'CSS', color: 'bg-blue-500', icon: '3' },
    { name: 'JS', color: 'bg-yellow-500', icon: 'JS' },
    { name: 'React', color: 'bg-cyan-500', icon: '⚛' },
    { name: 'Figma', color: 'bg-pink-500', icon: 'F' },
    { name: 'Tailwind', color: 'bg-teal-500', icon: 'T' }
  ];

  return (
    <div>
      <h3 className="text-lg text-gray-400 mb-4">Techs:</h3>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            className={`${tech.color} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-transform duration-300 cursor-pointer`}
            title={tech.name}
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;