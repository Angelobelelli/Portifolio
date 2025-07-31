import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const projects = [
    {
      title: "Projeto XMEN",
      description: "Este é um projeto desenvolvido durante uma semana, utilizando fundamentos com foco em responsividade em todos os dispositivos do CSS.",
      longDescription: "O Projeto XMEN foi desenvolvido como um desafio pessoal para aprimorar minhas habilidades em CSS responsivo. Durante uma semana intensa de desenvolvimento, criei uma landing page interativa inspirada no universo dos X-Men, implementando técnicas avançadas de CSS Grid, Flexbox e media queries para garantir uma experiência perfeita em todos os dispositivos.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      images: [
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
      ],
      codeUrl: "#",
      demoUrl: "#",
      features: [
        "Design responsivo para todos os dispositivos",
        "Animações CSS personalizadas",
        "Layout moderno com CSS Grid",
        "Otimização de performance",
        "Compatibilidade cross-browser"
      ],
      challenges: [
        "Implementar animações complexas apenas com CSS",
        "Garantir compatibilidade em navegadores antigos",
        "Otimizar imagens para diferentes resoluções",
        "Criar um sistema de grid responsivo personalizado"
      ],
      duration: "1 semana",
      team: "Individual",
      status: "Concluído"
    },
    {
      title: "Tela De Login",
      description: "Esta tela de login traz uma inspiração de recursos do Curso DevQuest, criada com HTML e CSS.",
      longDescription: "Projeto focado em criar uma interface de login moderna e elegante, aplicando conceitos avançados de design UI/UX. A tela foi desenvolvida com foco na experiência do usuário, implementando validações visuais, micro-interações e um design system consistente que pode ser facilmente integrado a qualquer aplicação web.",
      technologies: ["HTML", "CSS"],
      image: "https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      images: [
        "https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
      ],
      codeUrl: "#",
      demoUrl: "#",
      features: [
        "Interface moderna e intuitiva",
        "Validação visual de campos",
        "Animações de transição suaves",
        "Design responsivo",
        "Acessibilidade otimizada"
      ],
      challenges: [
        "Criar validações apenas com CSS",
        "Implementar feedback visual sem JavaScript",
        "Garantir acessibilidade completa",
        "Desenvolver um design system reutilizável"
      ],
      duration: "3 dias",
      team: "Individual",
      status: "Concluído"
    },
    {
      title: "Landing Page",
      description: "Projeto feito com uma empresa, com um arquivo de Mobilidade Urbana utilizando JavaScript.",
      longDescription: "Landing page corporativa desenvolvida em parceria com uma empresa do setor de mobilidade urbana. O projeto envolveu a criação de uma interface moderna e informativa, com foco em conversão e experiência do usuário. Implementei funcionalidades interativas com JavaScript vanilla, garantindo performance otimizada e carregamento rápido.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      images: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
      ],
      codeUrl: "#",
      demoUrl: "#",
      features: [
        "Design corporativo profissional",
        "Formulários de contato funcionais",
        "Seções interativas com JavaScript",
        "Otimização SEO completa",
        "Integração com Google Analytics"
      ],
      challenges: [
        "Atender requisitos específicos do cliente",
        "Implementar funcionalidades complexas sem frameworks",
        "Otimizar para motores de busca",
        "Garantir compatibilidade com sistemas legados"
      ],
      duration: "2 semanas",
      team: "2 desenvolvedores",
      status: "Em produção"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            PROJETOS
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default Projects;