export type Lang = 'pt-BR' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
    'pt-BR': {
        // Navbar
        'nav.home': 'Home',
        'nav.about': 'Sobre',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',

        // Home
        'home.greeting': 'Olá, eu sou',
        'home.subtitle':
            'Desenvolvimento Full Stack com foco em interfaces modernas e backends escaláveis.',
        'home.subtitle2': 'Construindo soluções do conceito ao deploy.',
        'home.btn.projects': 'Ver Projetos',
        'home.btn.contact': 'Entre em Contato',
        'home.scroll': 'Scroll',
        'home.services.title': 'O que eu faço',
        'home.service1.title': 'Desenvolvimento Frontend',
        'home.service1.desc': 'Interfaces modernas e responsivas com Angular e React. Foco em performance, usabilidade e design limpo.',
        'home.service2.title': 'Desenvolvimento Backend & APIs',
        'home.service2.desc': 'APIs REST robustas com Spring Boot e Node.js. Integrações entre sistemas, segurança e escalabilidade.',
        'home.service3.title': 'Full Stack',
        'home.service3.desc': 'Aplicações completas do conceito ao deploy. Arquitetura limpa, microsserviços e CI/CD.',

        // About
        'about.tag': '// sobre mim',
        'about.subtitle': 'Software Developer Full Stack',
        'about.bio1':
            'Software Developer com experiência no desenvolvimento de aplicações web escaláveis utilizando <strong>React, Next.js, Node.js</strong> e <strong>Java (Spring Boot)</strong>. Atuação fullstack com foco em arquitetura de sistemas, microsserviços, performance e boas práticas de engenharia de software.',
        'about.bio2':
            'Experiência com containerização (<strong>Docker</strong>) e <strong>CI/CD</strong>. Forte atuação na construção de produtos digitais orientados a métricas, com preocupação em qualidade de código, testes automatizados e experiência do usuário.',
        'about.location': 'Feira de Santana, Bahia, Brasil',
        'about.skillsTitle': 'Stack técnica',
        'about.skillGroup.frontend': 'Frontend',
        'about.skillGroup.backend': 'Backend',
        'about.skillGroup.integration': 'Integrações & Arquitetura',
        'about.skillGroup.tools': 'Ferramentas & DevOps',
        'about.experienceTitle': 'Experiência',

        // Experiences
        'exp.mb.role': 'Software Developer',
        'exp.mb.period': 'Maio 2024 – Atualmente',
        'exp.mb.company': 'MB Company',
        'exp.mb.item1': 'Desenvolvimento de funcionalidades end-to-end, da análise à implementação e testes, contribuindo para a evolução contínua da aplicação.',
        'exp.mb.item2': 'Construção de interfaces modernas com React e Next.js, integradas a APIs REST com tratamento de erros e gerenciamento de estado.',
        'exp.mb.item3': 'Desenvolvimento de serviços backend com Node.js e TypeScript, focado em escalabilidade, manutenibilidade e boas práticas (incluindo microsserviços).',
        'exp.mb.item4': 'Containerização com Docker e deploy em Kubernetes/OpenShift, com pipelines de CI/CD para automação de build, testes e deploy.',
        'exp.mb.item5': 'Atuação em ambiente ágil (Scrum), com participação em code reviews, discussões técnicas e colaboração na evolução da base de código.',
        'exp.sudoeste.role': 'Software Developer',
        'exp.sudoeste.period': 'Abr 2022 – Abr 2024',
        'exp.sudoeste.company': 'Sudoeste Informática',
        'exp.sudoeste.item1': 'Desenvolvimento de APIs REST escaláveis com Node.js e Java (Spring Boot), aplicando boas práticas de arquitetura e engenharia de software.',
        'exp.sudoeste.item2': 'Implementação de funcionalidades completas a partir de requisitos de negócio, garantindo entregas consistentes em ciclos ágeis.',
        'exp.sudoeste.item3': 'Aplicação de conceitos de microsserviços, autenticação JWT, tratamento de erros e padronização de respostas.',
        'exp.sudoeste.item4': 'Implementação de testes automatizados (unitários e integração) e participação em decisões técnicas e code reviews.',
        'exp.sudoeste.item5': 'Atuação em ambiente ágil (Scrum), colaborando com equipe multidisciplinar na entrega de soluções.',

        // Projects
        'projects.tag': '// projetos',
        'projects.title': 'Meus Projetos',
        'projects.subtitle':
            'Projetos reais construídos com foco em arquitetura, performance e boas práticas.',
        'projects.filter.all': 'Todos',
        'projects.filter.featured': 'Destaques',
        'projects.loading': 'Carregando projetos...',
        'projects.github': 'Ver todos no GitHub',

        // Project descriptions
        'project.ecommerce-microservices-kafka':
            'Plataforma de e-commerce com arquitetura de microsserviços, comunicação assíncrona via Apache Kafka, API Gateway e orquestrada via Docker Compose.',
        'project.ecommerce-frontend':
            'Frontend da plataforma ecommerce-microservices-kafka, responsável por interagir com o API Gateway e consumir os serviços backend.',
        'project.leadflow-crm':
            'CRM fullstack para gerenciamento de clientes, leads e pipelines de vendas. Backend REST e frontend responsivo com React.',
        'project.task-manager-app':
            'Sistema completo de gerenciamento de tarefas com Spring Boot no backend, Angular no frontend e autenticação JWT.',
        'project.sales-analytics-dashboard':
            'Dashboard interativo para visualização de métricas de vendas com gráficos dinâmicos, filtros e exportação de dados.',
        'project.goledger-challenge-web':
            'Solução para o desafio frontend GoLedger 2026: CRUD de artistas e álbuns integrado com API blockchain, com busca e navegação dinâmica.',

        // Contact
        'contact.tag': '// contato',
        'contact.title': 'Vamos Conversar',
        'contact.subtitle':
            'Estou sempre aberto a conexões. Fique à vontade para entrar em contato com perguntas, ideias ou oportunidades.',
        'contact.location': 'Localização',
        'contact.phone': 'Telefone',
        'contact.social': 'Redes sociais',
        'contact.form.name': 'Nome',
        'contact.form.namePlaceholder': 'Seu nome',
        'contact.form.emailPlaceholder': 'seu@email.com',
        'contact.form.message': 'Mensagem',
        'contact.form.messagePlaceholder': 'Sua mensagem...',
        'contact.form.submit': 'Enviar Mensagem',
        'contact.form.submitting': 'Enviando...',
        'contact.form.error.name': 'Nome é obrigatório.',
        'contact.form.error.emailRequired': 'E-mail é obrigatório.',
        'contact.form.error.emailInvalid': 'E-mail inválido.',
        'contact.form.error.message': 'Mensagem é obrigatória (mín. 10 caracteres).',
        'contact.success': 'Mensagem enviada com sucesso! Responderei em breve.',
        'contact.error': 'Erro ao enviar. Tente contato direto: ahsantos1301@gmail.com',

        // Footer
        'footer.about': 'Sobre',
        'footer.projects': 'Projetos',
        'footer.contact': 'Contato',
        'footer.rights': 'Todos os direitos reservados.',
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Home
        'home.greeting': 'Hello, I am',
        'home.subtitle':
            'Full Stack Development focused on modern interfaces and scalable backends.',
        'home.subtitle2': 'Building solutions from concept to deployment.',
        'home.btn.projects': 'View Projects',
        'home.btn.contact': 'Get in Touch',
        'home.scroll': 'Scroll',
        'home.services.title': 'What I do',
        'home.service1.title': 'Frontend Development',
        'home.service1.desc': 'Modern and responsive interfaces with Angular and React. Focus on performance, usability and clean design.',
        'home.service2.title': 'Backend Development & APIs',
        'home.service2.desc': 'Robust REST APIs with Spring Boot and Node.js. System integrations, security and scalability.',
        'home.service3.title': 'Full Stack',
        'home.service3.desc': 'Complete applications from concept to deployment. Clean architecture, microservices and CI/CD.',

        // About
        'about.tag': '// about me',
        'about.subtitle': 'Full Stack Software Developer',
        'about.bio1':
            'Software Developer with experience building scalable web applications using <strong>React, Next.js, Node.js</strong> and <strong>Java (Spring Boot)</strong>. Fullstack focus on system architecture, microservices, performance and software engineering best practices.',
        'about.bio2':
            'Experience with containerization (<strong>Docker</strong>) and <strong>CI/CD</strong>. Strong background in building metrics-driven digital products, with focus on code quality, automated testing and user experience.',
        'about.location': 'Feira de Santana, Bahia, Brazil',
        'about.skillsTitle': 'Tech Stack',
        'about.skillGroup.frontend': 'Frontend',
        'about.skillGroup.backend': 'Backend',
        'about.skillGroup.integration': 'Integrations & Architecture',
        'about.skillGroup.tools': 'Tools & DevOps',
        'about.experienceTitle': 'Experience',

        // Experiences
        'exp.mb.role': 'Software Developer',
        'exp.mb.period': 'May 2024 – Present',
        'exp.mb.company': 'MB Company',
        'exp.mb.item1': 'End-to-end feature development, from analysis to implementation and testing, contributing to the continuous evolution and stability of the application.',
        'exp.mb.item2': 'Building modern interfaces with React and Next.js, integrated with REST APIs including error handling and state management.',
        'exp.mb.item3': 'Development of backend services using Node.js and TypeScript, focusing on scalability, maintainability, and best architectural practices (including microservices).',
        'exp.mb.item4': 'Containerization with Docker and deployment on Kubernetes/OpenShift, with CI/CD pipelines for automated build, testing, and deployment.',
        'exp.mb.item5': 'Working in an agile environment (Scrum), participating in code reviews, technical discussions, and contributing to codebase evolution.',
        'exp.sudoeste.role': 'Software Developer',
        'exp.sudoeste.period': 'Apr 2022 – Apr 2024',
        'exp.sudoeste.company': 'Sudoeste Informática',
        'exp.sudoeste.item1': 'Development of scalable REST APIs using Node.js and Java (Spring Boot), applying software engineering best practices and clean architecture principles.',
        'exp.sudoeste.item2': 'Implementation of end-to-end features based on business requirements, ensuring consistent delivery in agile cycles.',
        'exp.sudoeste.item3': 'Application of microservices concepts, JWT-based authentication, error handling, and standardized API responses.',
        'exp.sudoeste.item4': 'Implementation of automated tests (unit and integration) and participation in technical decisions, code reviews, and architectural improvements.',
        'exp.sudoeste.item5': 'Experience working in agile environments (Scrum), collaborating with cross-functional teams to deliver solutions.',

        // Projects
        'projects.tag': '// projects',
        'projects.title': 'My Projects',
        'projects.subtitle':
            'Real projects built with focus on architecture, performance and best practices.',
        'projects.filter.all': 'All',
        'projects.filter.featured': 'Featured',
        'projects.loading': 'Loading projects...',
        'projects.github': 'View all on GitHub',

        // Project descriptions
        'project.ecommerce-microservices-kafka':
            'E-commerce platform with microservices architecture, asynchronous communication via Apache Kafka, API Gateway orchestrated via Docker Compose.',
        'project.ecommerce-frontend':
            'Frontend for the ecommerce-microservices-kafka platform, responsible for interacting with the API Gateway and consuming backend services.',
        'project.leadflow-crm':
            'Fullstack CRM for managing clients, leads and sales pipelines. REST backend and responsive frontend with React.',
        'project.task-manager-app':
            'Complete task management system with Spring Boot backend, Angular frontend and JWT authentication.',
        'project.sales-analytics-dashboard':
            'Interactive dashboard for sales metrics visualization with dynamic charts, filters and data export.',
        'project.goledger-challenge-web':
            'Solution for the GoLedger 2026 frontend challenge: artist and album CRUD integrated with blockchain API, with search and dynamic navigation.',

        // Contact
        'contact.tag': '// contact',
        'contact.title': "Let's Talk",
        'contact.subtitle':
            "I'm always open to connections. Feel free to reach out with questions, ideas or opportunities.",
        'contact.location': 'Location',
        'contact.phone': 'Phone',
        'contact.social': 'Social networks',
        'contact.form.name': 'Name',
        'contact.form.namePlaceholder': 'Your name',
        'contact.form.emailPlaceholder': 'your@email.com',
        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Your message...',
        'contact.form.submit': 'Send Message',
        'contact.form.submitting': 'Sending...',
        'contact.form.error.name': 'Name is required.',
        'contact.form.error.emailRequired': 'Email is required.',
        'contact.form.error.emailInvalid': 'Invalid email.',
        'contact.form.error.message': 'Message is required (min. 10 characters).',
        'contact.success': 'Message sent successfully! I will reply soon.',
        'contact.error': 'Error sending. Try direct contact: ahsantos1301@gmail.com',

        // Footer
        'footer.about': 'About',
        'footer.projects': 'Projects',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved.',
    },
};
