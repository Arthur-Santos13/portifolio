import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, ProjectCardComponent],
    template: `
    <section class="projects section-pad">
      <div class="container">
        <div class="projects__header reveal" #reveal>
          <p class="section-tag">// projetos</p>
          <h1 class="section-title">Meus Projetos</h1>
          <p class="section-subtitle">
            Projetos reais construídos com foco em arquitetura, performance e boas práticas.
          </p>
        </div>

        <div class="projects__filter reveal" #reveal>
          <button
            *ngFor="let f of filters"
            class="filter-btn"
            [class.active]="activeFilter === f"
            (click)="setFilter(f)">
            {{ f }}
          </button>
        </div>

        <div *ngIf="filteredProjects.length === 0" class="projects__loading">
          <div class="spinner"></div>
          <p>Carregando projetos...</p>
        </div>

        <div class="projects__grid">
          <app-project-card
            *ngFor="let project of filteredProjects; let i = index"
            [project]="project"
            class="card-enter"
            [style.animation-delay]="i * 80 + 'ms'">
          </app-project-card>
        </div>

        <div class="projects__cta reveal" #reveal>
          <a href="https://github.com/Arthur-Santos13" target="_blank" rel="noopener noreferrer" class="btn btn--outline">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style="margin-right:8px"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  `,
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
    @ViewChildren('reveal') revealElements!: QueryList<ElementRef>;

    projects: Project[] = [];
    filteredProjects: Project[] = [];
    filters = ['Todos', 'React', 'Angular', 'Java', 'TypeScript', 'Destaques'];
    activeFilter = 'Todos';

    private observer!: IntersectionObserver;

    constructor(private projectsService: ProjectsService, private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.projectsService.getProjects().subscribe({
            next: projects => {
                this.projects = projects;
                this.applyFilter();
                this.cdr.detectChanges();
            },
            error: () => { }
        });
    }

    ngAfterViewInit(): void {
        this.observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('revealed');
                    this.observer.unobserve(e.target);
                }
            }),
            { threshold: 0.08 }
        );
        this.revealElements.changes.subscribe(() => {
            this.revealElements.forEach(el => {
                if (!el.nativeElement.classList.contains('revealed')) {
                    this.observer.observe(el.nativeElement);
                }
            });
        });
        this.revealElements.forEach(el => this.observer.observe(el.nativeElement));
    }

    setFilter(filter: string): void {
        this.activeFilter = filter;
        this.applyFilter();
    }

    private applyFilter(): void {
        if (this.activeFilter === 'Todos') {
            this.filteredProjects = this.projects;
        } else if (this.activeFilter === 'Destaques') {
            this.filteredProjects = this.projects.filter(p => p.featured);
        } else {
            this.filteredProjects = this.projects.filter(p =>
                p.language === this.activeFilter ||
                p.tags.includes(this.activeFilter)
            );
        }
    }
}
