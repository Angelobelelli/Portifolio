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
        title: "Projeto Integrador de Desenvolvimento Web",
        description: "Sistema web e landing page com impacto social, desenvolvidos por alunos com foco em saúde, educação e inclusão digital no Amapá.",
        longDescription: "O Projeto Integrador de Desenvolvimento Web foi realizado em parceria com uma turma de alunos, com o objetivo de aplicar conhecimentos teóricos em um contexto prático. O foco foi o desenvolvimento de um sistema web e uma landing page com impacto social, abordando temas relacionados à saúde, educação e inclusão digital no estado do Amapá. Durante o projeto, buscamos demonstrar os desafios tecnológicos enfrentados por algumas regiões do Brasil, propondo soluções acessíveis e funcionais mesmo com recursos limitados. O sistema inclui interações específicas para diferentes áreas temáticas, com design responsivo, acessível e voltado à experiência do usuário. Além disso, a aplicação foi construída em curto prazo, estimulando a criatividade e o trabalho em equipe dos alunos.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js"],
      image: "print1.png",
      images: [
        "print1.png",
        "print2.png"
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
      duration: "4 semanas",
      team: "Grupo",
      status: "Concluído"
    },
    {
      title: "AuxTeck",
      description: "Sistema web completo que conecta clientes a prestadores de serviços técnicos locais, com funcionalidades inspiradas em plataformas como OLX e GetNinjas.",
      longDescription: "Este projeto foi desenvolvido com foco em resolver problemas de acesso e organização de serviços locais. A plataforma permite que prestadores se cadastrem, completem seu perfil profissional e ofereçam serviços, enquanto clientes podem encontrar, contratar e avaliar esses serviços. Com uma arquitetura robusta baseada em Fastify e React, o sistema oferece controle de autenticação por perfil, upload de documentos, avaliações, painel administrativo e integração com meios de pagamento.",
      technologies: [
        "Fastify",
        "TypeScript",
        "Knex",
        "MySQL",
        "React",
        "TailwindCSS",
        "Axios",
        "JWT",
        "Zod"
      ],
      image: "tela1.png",
      images: [
        "tela1.png",
        "tela2.png"
      ],
      codeUrl: "https://github.com/F0RT-DEV/Service-Local",
      demoUrl: "",
      features: [
        "Sistema de cadastro e login com autenticação JWT e controle de acesso por role (cliente, prestador, admin).",
        "Fluxo completo de ordens de serviço: criação, agendamento, execução, finalização e avaliação.",
        "Perfis distintos com interface personalizada para cada tipo de usuário.",
        "Administração de usuários, serviços, categorias e documentos via painel administrativo.",
        "Geolocalização por CEP e estrutura de endereço detalhada.",
        "Integração futura com gateway de pagamento e histórico de transações.",
        "Validações com Zod e segurança na comunicação via JWT e bcrypt."
      ],
      challenges: [
        "Criar validações apenas com CSS",
        "Implementar feedback visual sem JavaScript",
        "Garantir acessibilidade completa",
        "Desenvolver um design system reutilizável"
      ],
      duration: "40 dias",
      team: "Time de 3 pessoas",
      status: "Concluído"
    },
    {
      title: "Dashboard Admin",
      description: "Painel administrativo moderno e responsivo para gestão de usuários, permissões e relatórios em tempo real.",
      longDescription: "Este projeto consiste em um dashboard administrativo completo, desenvolvido para facilitar o gerenciamento de dados em uma aplicação web. Possui autenticação segura, controle de permissões baseado em funções e visualização de dados em gráficos interativos. O design é responsivo, feito com foco em produtividade, usabilidade e acessibilidade. A aplicação foi desenvolvida utilizando React no frontend e Node.js no backend, com integração de APIs REST e persistência em banco de dados relacional.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "PostgreSQL", "Chart.js"],
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      images: [
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
      ],
      codeUrl: "https://github.com/usuario/dashboard-admin",
      demoUrl: "https://dashboard-admin.vercel.app",
      features: [
        "Autenticação com JWT e controle de sessão",
        "Dashboard responsivo com gráficos interativos (Chart.js)",
        "CRUD completo de usuários com validação e paginação",
        "Controle de permissões por tipo de usuário (admin/editor/viewer)",
        "Design limpo com TailwindCSS e dark mode",
        "Exportação de relatórios em PDF e CSV"
      ],
      challenges: [
        "Gerenciar permissões de forma escalável",
        "Criar componentes reutilizáveis com lógica desacoplada",
        "Otimizar o carregamento de dados com paginação e caching",
        "Integrar gráficos dinâmicos com dados atualizados em tempo real"
      ],
      duration: "3 semanas",
      team: "Individual",
      status: "Concluído"
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