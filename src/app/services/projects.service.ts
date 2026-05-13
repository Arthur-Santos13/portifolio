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

    /** Fallback when GitHub API fails; descriptions mirror the repo “About” field (English). */
    private readonly staticProjects: Project[] = [
        {
            id: 1,
            name: 'ecommerce-microservices-kafka',
            description:
                'Event-driven e-commerce platform built with Java and Spring Boot microservices, featuring Kafka-based communication, authentication, payment integration, order processing, and scalable distributed architecture.',
            tags: ['Java', 'Spring Boot', 'Kafka', 'Docker', 'PostgreSQL', 'Microsserviços', 'API Gateway'],
            language: 'Java',
            githubUrl: 'https://github.com/Arthur-Santos13/ecommerce-microservices-kafka',
            featured: true
        },
        {
            id: 2,
            name: 'ecommerce-frontend',
            description:
                'Angular frontend application for the ecommerce-microservices-kafka platform, featuring authentication, product catalog, shopping cart, checkout flow, and seamless integration with the API Gateway and backend services.',
            tags: ['Angular', 'TypeScript', 'SCSS', 'REST API', 'Docker'],
            language: 'TypeScript',
            githubUrl: 'https://github.com/Arthur-Santos13/ecommerce-frontend',
            featured: true
        },
        {
            id: 3,
            name: 'leadflow-crm',
            description:
                'A full-stack CRM platform for managing customers, leads, and sales pipelines, built with a scalable RESTful backend and a responsive frontend featuring authentication, dashboard analytics, and workflow management.',
            tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
            language: 'TypeScript',
            githubUrl: 'https://github.com/Arthur-Santos13/leadflow-crm',
            liveUrl: 'https://leadflow-crm-frontend.vercel.app',
            featured: true
        },
        {
            id: 4,
            name: 'task-manager-app',
            description:
                'Full-stack task management system built with Java and Spring Boot on the backend and Angular on the frontend, featuring JWT authentication, task filtering, responsive UI, and a scalable modular architecture.',
            tags: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'JWT', 'SCSS'],
            language: 'Java',
            githubUrl: 'https://github.com/Arthur-Santos13/task-manager-app',
            featured: false
        },
        {
            id: 5,
            name: 'sales-analytics-dashboard',
            description:
                'Interactive dashboard for visualizing sales metrics with charts and dynamic filters. Stack: React, Node.js, PostgreSQL, Recharts.',
            tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Recharts', 'REST API'],
            language: 'TypeScript',
            githubUrl: 'https://github.com/Arthur-Santos13/sales-analytics-dashboard',
            featured: false
        },
        {
            id: 6,
            name: 'goledger-challenge-web',
            description: 'Repositório para o desafio de front-end do processo seletivo de 1/2026.',
            tags: ['React', 'TypeScript', 'REST API', 'Context API'],
            language: 'TypeScript',
            githubUrl: 'https://github.com/Arthur-Santos13/goledger-challenge-web',
            liveUrl: 'https://goledger-challenge-web-nu.vercel.app',
            featured: false
        },
        {
            id: 7,
            name: 'smart-recommendation-api',
            description:
                'Recommendation system API built with FastAPI, combining content-based and collaborative filtering, with category-aware suggestions and explainable results.',
            tags: ['Python', 'FastAPI', 'REST API', 'Machine Learning'],
            language: 'Python',
            githubUrl: 'https://github.com/Arthur-Santos13/smart-recommendation-api',
            featured: false
        },
        {
            id: 8,
            name: 'smart-recommendation-frontend',
            description:
                'Frontend application for the smart-recommendation-api platform, responsible for interacting with the backend API and consuming recommendation services.',
            tags: ['React', 'TypeScript', 'REST API'],
            language: 'TypeScript',
            githubUrl: 'https://github.com/Arthur-Santos13/smart-recommendation-frontend',
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
        return this.http.get<any[]>(`${this.githubApiUrl}?sort=updated&per_page=100`).pipe(
            map(repos =>
                repos
                    .filter(r => !this.excludedRepos.includes(r.name))
                    .map((r, index) => {
                        const staticMatch = this.staticProjects.find(p => p.name === r.name);
                        const githubDescription = (r.description as string | null)?.trim() || '';
                        return {
                            id: index + 1,
                            name: r.name,
                            description: githubDescription || staticMatch?.description || '',
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
