import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="about section-pad">
      <div class="container">
        <div class="about__header reveal" #reveal>
          <p class="section-tag">// sobre mim</p>
          <h1 class="section-title">Arthur Henrique</h1>
          <p class="section-subtitle">Software Developer Full Stack</p>
        </div>

        <div class="about__profile reveal" #reveal>
          <div class="about__photo-frame">
            <img src="images/perfil.jpeg" alt="Arthur Henrique" class="about__photo" />
          </div>
        </div>

        <div class="about__grid">
          <div class="about__bio reveal" #reveal>
            <p>
              Software Developer com experiência no desenvolvimento de aplicações web
              escaláveis utilizando <strong>React, Next.js, Node.js</strong> e
              <strong>Java (Spring Boot)</strong>. Atuação fullstack com foco em
              arquitetura de sistemas, microsserviços, performance e boas práticas de
              engenharia de software.
            </p>
            <p>
              Experiência com containerização (<strong>Docker</strong>) e
              <strong>CI/CD</strong>. Forte atuação na construção de produtos digitais
              orientados a métricas, com preocupação em qualidade de código, testes
              automatizados e experiência do usuário.
            </p>
            <div class="about__info">
              <div class="info-item">
                <svg width="16" height="16" fill="none" stroke="#8b5cf6" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Feira de Santana, Bahia, Brasil</span>
              </div>
              <div class="info-item">
                <svg width="16" height="16" fill="none" stroke="#8b5cf6" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>ahsantos1301&#64;gmail.com</span>
              </div>
              <div class="info-item">
                <svg width="16" height="16" fill="none" stroke="#8b5cf6" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>75 98356 5658</span>
              </div>
            </div>
          </div>

          <div class="about__skills reveal" #reveal>
            <h3>Stack técnica</h3>
            <div class="skills-grid">
              <div class="skill-group" *ngFor="let group of skillGroups">
                <h4>{{ group.label }}</h4>
                <div class="skill-tags">
                  <span class="skill-tag" *ngFor="let s of group.skills">{{ s }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Timeline -->
        <div class="experience reveal" #reveal>
          <h2 class="section-title--sm">Experiência</h2>
          <div class="timeline">
            <div class="timeline__item" *ngFor="let exp of experiences">
              <div class="timeline__dot"></div>
              <div class="timeline__content">
                <div class="timeline__header">
                  <h3>{{ exp.role }}</h3>
                  <span class="timeline__period">{{ exp.period }}</span>
                </div>
                <p class="timeline__company">{{ exp.company }}</p>
                <ul>
                  <li *ngFor="let item of exp.items">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
    @ViewChildren('reveal') revealElements!: QueryList<ElementRef>;

    skillGroups = [
        {
            label: 'Frontend',
            skills: ['React', 'Next.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS']
        },
        {
            label: 'Backend',
            skills: ['Java', 'Spring Boot', 'Quarkus', 'Node.js', 'REST APIs', 'PostgreSQL']
        },
        {
            label: 'Integrações & Arquitetura',
            skills: ['Microsserviços', 'Apache Kafka', 'API Gateway', 'Integração entre sistemas', 'Docker']
        },
        {
            label: 'Ferramentas & DevOps',
            skills: ['Git', 'Linux', 'JIRA', 'Bitbucket', 'Scrum', 'Figma']
        }
    ];

    experiences = [
        {
            role: 'Software Developer',
            period: 'Maio 2024 – Atualmente',
            company: 'MB Company',
            items: [
                'Desenvolvimento e manutenção de aplicações web com React e Next.js',
                'Integração do frontend com APIs REST e serviços backend',
                'Desenvolvimento de integrações entre sistemas e serviços externos',
                'Apoio na criação e manutenção de serviços com Node.js',
                'Participação em decisões técnicas e arquitetura junto ao time'
            ]
        },
        {
            role: 'Software Developer',
            period: 'Abril 2022 – Abril 2024',
            company: 'Sudoeste Informática',
            items: [
                'Desenvolvimento de serviços backend com Java e Spring Boot',
                'Criação e manutenção de APIs REST para integração entre aplicações',
                'Automação de rotinas com cron jobs',
                'Administração e otimização de bancos PostgreSQL e MySQL',
                'Desenvolvimento em sistemas de Folha de Pagamento e Gestão de Terceirizados'
            ]
        }
    ];

    ngAfterViewInit(): void {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('revealed');
                    observer.unobserve(e.target);
                }
            }),
            { threshold: 0.1 }
        );
        this.revealElements.forEach(el => observer.observe(el.nativeElement));
    }
}
