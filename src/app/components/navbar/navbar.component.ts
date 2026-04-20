import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

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
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">Sobre</a></li>
          <li><a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">Projetos</a></li>
          <li><a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contato</a></li>
        </ul>
      </div>
    </nav>
  `,
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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
