import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact section-pad">
      <div class="container">
        <div class="contact__header reveal" #reveal>
          <p class="section-tag">{{ lang.t('contact.tag') }}</p>
          <h1 class="section-title">{{ lang.t('contact.title') }}</h1>
          <p class="section-subtitle">{{ lang.t('contact.subtitle') }}</p>
        </div>

        <div class="contact__grid">
          <!-- Info -->
          <div class="contact__info reveal" #reveal>
            <div class="contact-item">
              <div class="contact-item__icon">
                <svg width="20" height="20" fill="none" stroke="#8b5cf6" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p class="contact-item__label">{{ lang.t('contact.location') }}</p>
                <p class="contact-item__value">Feira de Santana, Bahia, Brasil</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item__icon">
                <svg width="20" height="20" fill="none" stroke="#8b5cf6" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="contact-item__label">E-mail</p>
                <a href="mailto:ahsantos1301@gmail.com" class="contact-item__value contact-item__link">ahsantos1301&#64;gmail.com</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item__icon">
                <svg width="20" height="20" fill="none" stroke="#8b5cf6" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p class="contact-item__label">{{ lang.t('contact.phone') }}</p>
                <a href="tel:+5575983565658" class="contact-item__value contact-item__link">(75) 98356-5658</a>
              </div>
            </div>

            <div class="contact__social">
              <p class="social-label">{{ lang.t('contact.social') }}</p>
              <div class="social-links">
                <a href="https://github.com/Arthur-Santos13" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/arthur-henrique-brito" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="contact__form-wrap reveal" #reveal>
            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="contact-form" novalidate>
              <div class="form-field">
                <label for="name">{{ lang.t('contact.form.name') }}</label>
                <input id="name" type="text" formControlName="name" [placeholder]="lang.t('contact.form.namePlaceholder')" autocomplete="name">
                <span class="form-error" *ngIf="f['name'].touched && f['name'].invalid">{{ lang.t('contact.form.error.name') }}</span>
              </div>
              <div class="form-field">
                <label for="email">E-mail</label>
                <input id="email" type="email" formControlName="email" [placeholder]="lang.t('contact.form.emailPlaceholder')" autocomplete="email">
                <span class="form-error" *ngIf="f['email'].touched && f['email'].errors?.['required']">{{ lang.t('contact.form.error.emailRequired') }}</span>
                <span class="form-error" *ngIf="f['email'].touched && f['email'].errors?.['email']">{{ lang.t('contact.form.error.emailInvalid') }}</span>
              </div>
              <div class="form-field">
                <label for="message">{{ lang.t('contact.form.message') }}</label>
                <textarea id="message" formControlName="message" rows="5" [placeholder]="lang.t('contact.form.messagePlaceholder')"></textarea>
                <span class="form-error" *ngIf="f['message'].touched && f['message'].invalid">{{ lang.t('contact.form.error.message') }}</span>
              </div>

              <div *ngIf="successMsg" class="form-success">{{ successMsg }}</div>
              <div *ngIf="errorMsg" class="form-error-box">{{ errorMsg }}</div>

              <button type="submit" class="btn btn--primary" [disabled]="submitting">
                <span *ngIf="!submitting">{{ lang.t('contact.form.submit') }}</span>
                <span *ngIf="submitting">{{ lang.t('contact.form.submitting') }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('reveal') revealElements!: QueryList<ElementRef>;

  form: FormGroup;
  submitting = false;
  successMsg = '';
  errorMsg = '';

  contactItems = [];

  lang = inject(LanguageService);

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.successMsg = '';
    this.errorMsg = '';

    this.contactService.send(this.form.value).subscribe({
      next: () => {
        this.successMsg = this.lang.t('contact.success');
        this.form.reset();
        this.submitting = false;
      },
      error: () => {
        this.errorMsg = this.lang.t('contact.error');
        this.submitting = false;
      }
    });
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
