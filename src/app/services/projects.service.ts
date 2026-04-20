import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    private readonly githubUsername = 'Arthur-Santos13';
    private readonly excludedRepos = ['portifolio'];
    private readonly githubApiUrl = `https://api.github.com/users/${this.githubUsername}/repos`;

    private readonly staticProjects: Project[] = [
        {
            id: 1,
            name: 'ecommerce-microservices-kafka',
            description: 'Plataforma de e-commerce com arquitetura de microsserviços, comunicação assíncrona via Apache Kafka, API Gateway e orquestrada via Docker Compose.',
            tags: ['Java', 'Spring Boot', 'Kafka', 'Docker', 'PostgreSQL', 'Microsserviços', 'API Gateway'],
            language: 'Java',
            githubUrl: 'https://github.com/Arthur-Santos13/ecommerce-microservices-kafka',
            featured: true
        },
        {
            id: 2,
            name: 'ecommerce-frontend',
            description: 'Frontend da plataforma ecommerce-microservices-kafka, responsável por interagir com o API Gateway e consumir os serviços backend.',
            tags: ['Angular', 'TypeScript', 'SCSS', 'REST API', 'Docker'],
            language: 'TypeScript',
            githubUrl: 'https://github.com/Arthur-Santos13/ecommerce-frontend',
            featured: true
        },
        {
            id: 3,
            name: 'leadflow-crm',
            description: 'CRM fullstack para gerenciamento de clientes, leads e pipelines de vendas. Backend REST e frontend responsivo com React.',
            tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
            language: 'TypeScript',
            githubUrl: 'https://github.com/Arthur-Santos13/leadflow-crm',
            liveUrl: 'https://leadflow-crm-frontend.vercel.app',
            featured: true
        },
        {
            id: 4,
            name: 'task-manager-app',
            description: 'Sistema completo de gerenciamento de tarefas com Spring Boot no backend, Angular no frontend e autenticação JWT.',
            tags: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'JWT', 'SCSS'],
            language: 'Java',
            githubUrl: 'https://github.com/Arthur-Santos13/task-manager-app',
            featured: false
        },
        {
            id: 5,
            name: 'sales-analytics-dashboard',
            description: 'Dashboard interativo para visualização de métricas de vendas com gráficos dinâmicos, filtros e exportação de dados.',
            tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Recharts', 'REST API'],
            language: 'TypeScript',
            githubUrl: 'https://github.com/Arthur-Santos13/sales-analytics-dashboard',
            featured: false
        },
        {
            id: 6,
            name: 'goledger-challenge-web',
            description: 'Solução para o desafio frontend GoLedger 2026: CRUD de artistas e álbuns integrado com API blockchain, com busca e navegação dinâmica.',
            tags: ['React', 'TypeScript', 'REST API', 'Context API'],
            language: 'TypeScript',
            githubUrl: 'https://github.com/Arthur-Santos13/goledger-challenge-web',
            liveUrl: 'https://goledger-challenge-web-nu.vercel.app',
            featured: false
        }
    ];

    constructor(private http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        return this.fetchFromGithub().pipe(
            catchError(() => of(this.staticProjects))
        );
    }

    private fetchFromGithub(): Observable<Project[]> {
        return this.http.get<any[]>(`${this.githubApiUrl}?sort=updated&per_page=30`).pipe(
            map(repos =>
                repos
                    .filter(r => !this.excludedRepos.includes(r.name) && r.name !== 'goledger-challenge-web' || r.full_name === `${this.githubUsername}/goledger-challenge-web`)
                    .filter(r => !this.excludedRepos.includes(r.name))
                    .map((r, index) => {
                        const staticMatch = this.staticProjects.find(p => p.name === r.name);
                        return {
                            id: index + 1,
                            name: r.name,
                            description: r.description || 'Projeto em desenvolvimento.',
                            tags: staticMatch?.tags || [r.language].filter(Boolean),
                            language: r.language || 'TypeScript',
                            githubUrl: r.html_url,
                            liveUrl: r.homepage || staticMatch?.liveUrl,
                            featured: staticMatch?.featured ?? false
                        } as Project;
                    })
            )
        );
    }
}
