import { Component, OnInit, ElementRef, QueryList, ViewChildren, AfterViewInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="hero__bg">
        <div class="hero__grid"></div>
        <div class="hero__glow"></div>
      </div>
      <div class="hero__container">
        <div class="hero__content reveal" #reveal>
          <p class="hero__greeting">{{ lang.t('home.greeting') }}</p>
          <h1 class="hero__title">
            Arthur Henrique<br>
            <span class="hero__title--accent">Software Developer</span>
          </h1>
          <p class="hero__subtitle">
            {{ lang.t('home.subtitle') }}<br>
            {{ lang.t('home.subtitle2') }}
          </p>
          <div class="hero__stack">
            <span class="stack-badge">Angular</span>
            <span class="stack-badge">React</span>
            <span class="stack-badge">Java</span>
            <span class="stack-badge">Spring Boot</span>
            <span class="stack-break"></span>
            <span class="stack-badge">Node.js</span>
            <span class="stack-badge">Microsserviços</span>
            <span class="stack-badge">Kafka</span>
          </div>
          <div class="hero__actions">
            <a routerLink="/projects" class="btn btn--primary">{{ lang.t('home.btn.projects') }}</a>
            <a routerLink="/contact" class="btn btn--outline">{{ lang.t('home.btn.contact') }}</a>
          </div>
          <div class="hero__social">
            <a href="https://github.com/Arthur-Santos13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/arthur-henrique-brito" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="hero__visual reveal" #reveal>
          <div class="hero__image-frame">
            <img src="images/developer.webp" alt="Arthur Henrique - Software Developer" class="hero__img" />
            <div class="hero__code-badge">
              <div class="code-badge__bar">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="code-badge__title">stack.ts</span>
              </div>
              <pre class="code-badge__body"><code><span class="kw">const</span> <span class="var">stack</span> <span class="op">=</span> &#123;
  <span class="key">frontend</span>: [<span class="str">'Angular'</span>, <span class="str">'React'</span>],
    <span class="key">backend</span>: [<span class="str">'Java'</span>, <span class="str">'Spring Boot'</span>, <span class="str">'Node.js'</span>],
    <span class="key">infra</span>: [<span class="str">'Microsserviços'</span>, <span class="str">'Kafka'</span>, <span class="str">'Docker'</span>],
  <span class="key">available</span>: <span class="bool">true</span>
&#125;;</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div class="hero__scroll-indicator">
        <span>{{ lang.t('home.scroll') }}</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- Services section -->
    <section class="services section-pad">
      <div class="container">
        <h2 class="section-title reveal" #reveal>{{ lang.t('home.services.title') }}</h2>
        <div class="services__grid">
          <div class="service-card reveal" #reveal *ngFor="let s of services">
            <div class="service-card__icon" [innerHTML]="s.icon"></div>
            <h3>{{ lang.t(s.titleKey) }}</h3>
            <p>{{ lang.t(s.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('reveal') revealElements!: QueryList<ElementRef>;

  lang = inject(LanguageService);

  services = [
    {
      icon: `<svg width="28" height="28" fill="none" stroke="#8b5cf6" stroke-width="1.5" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path stroke-linecap="round" d="M8 21h8M12 17v4"/></svg>`,
      titleKey: 'home.service1.title',
      descKey: 'home.service1.desc'
    },
    {
      icon: `<svg width="28" height="28" fill="none" stroke="#8b5cf6" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M5 12h14M12 5l7 7-7 7"/></svg>`,
      titleKey: 'home.service2.title',
      descKey: 'home.service2.desc'
    },
    {
      icon: `<svg width="28" height="28" fill="none" stroke="#8b5cf6" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>`,
      titleKey: 'home.service3.title',
      descKey: 'home.service3.desc'
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
      { threshold: 0.15 }
    );
    this.revealElements.changes.subscribe(() => {
      this.revealElements.forEach(el => {
        if (!el.nativeElement.classList.contains('revealed')) {
          observer.observe(el.nativeElement);
        }
      });
    });
    this.revealElements.forEach(el => observer.observe(el.nativeElement));
  }
}
