import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about section-pad">
      <div class="container">
        <div class="about__header reveal" #reveal>
          <p class="section-tag">{{ lang.t('about.tag') }}</p>
          <h1 class="section-title">Arthur Henrique</h1>
          <p class="section-subtitle">{{ lang.t('about.subtitle') }}</p>
        </div>

        <div class="about__profile reveal" #reveal>
          <div class="about__photo-frame">
            <img src="images/perfil.jpeg" alt="Arthur Henrique" class="about__photo" />
          </div>
        </div>

        <div class="about__grid">
          <div class="about__bio reveal" #reveal>
            <p [innerHTML]="lang.t('about.bio1')"></p>
            <p [innerHTML]="lang.t('about.bio2')"></p>
            <div class="about__info">
              <div class="info-item">
                <svg width="16" height="16" fill="none" stroke="#8b5cf6" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>{{ lang.t('about.location') }}</span>
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
            <h3>{{ lang.t('about.skillsTitle') }}</h3>
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
          <h2 class="section-title--sm">{{ lang.t('about.experienceTitle') }}</h2>
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

  lang = inject(LanguageService);

  get skillGroups() {
    return [
      {
        label: this.lang.t('about.skillGroup.frontend'),
        skills: ['React', 'Next.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS']
      },
      {
        label: this.lang.t('about.skillGroup.backend'),
        skills: ['Java', 'Spring Boot', 'Quarkus', 'Node.js', 'REST APIs', 'PostgreSQL']
      },
      {
        label: this.lang.t('about.skillGroup.integration'),
        skills: [this.lang.t('about.skill.microservices'), 'Apache Kafka', 'API Gateway', this.lang.t('about.skill.systemIntegration'), 'Docker']
      },
      {
        label: this.lang.t('about.skillGroup.tools'),
        skills: ['Git', 'Linux', 'JIRA', 'Bitbucket', 'Scrum', 'Figma']
      }
    ];
  }

  get experiences() {
    return [
      {
        role: this.lang.t('exp.mb.role'),
        period: this.lang.t('exp.mb.period'),
        company: this.lang.t('exp.mb.company'),
        items: [
          this.lang.t('exp.mb.item1'),
          this.lang.t('exp.mb.item2'),
          this.lang.t('exp.mb.item3'),
          this.lang.t('exp.mb.item4'),
          this.lang.t('exp.mb.item5'),
        ]
      },
      {
        role: this.lang.t('exp.sudoeste.role'),
        period: this.lang.t('exp.sudoeste.period'),
        company: this.lang.t('exp.sudoeste.company'),
        items: [
          this.lang.t('exp.sudoeste.item1'),
          this.lang.t('exp.sudoeste.item2'),
          this.lang.t('exp.sudoeste.item3'),
          this.lang.t('exp.sudoeste.item4'),
          this.lang.t('exp.sudoeste.item5'),
        ]
      }
    ];
  }

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
