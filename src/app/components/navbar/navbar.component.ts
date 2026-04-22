import { Component, OnInit, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled" [class.menu-open]="menuOpen">
      <div class="navbar__container">
        <a routerLink="/" class="navbar__logo">
          <span class="logo-bracket">&lt;</span>Arthur<span class="logo-accent">Santos</span><span class="logo-bracket">/&gt;</span>
        </a>

        <button class="navbar__burger" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>

        <ul class="navbar__links" [class.open]="menuOpen">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">{{ lang.t('nav.home') }}</a></li>
          <li><a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">{{ lang.t('nav.about') }}</a></li>
          <li><a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">{{ lang.t('nav.projects') }}</a></li>
          <li><a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">{{ lang.t('nav.contact') }}</a></li>
          <li>
            <button class="lang-toggle" (click)="lang.toggle()" [attr.aria-label]="lang.isEnglish() ? 'Mudar para Português' : 'Switch to English'">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
              </svg>
              <span>{{ lang.isEnglish() ? 'EN' : 'PT-BR' }}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  lang = inject(LanguageService);
  isScrolled = false;
  menuOpen = false;

  ngOnInit(): void { }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
