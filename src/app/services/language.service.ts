import { Injectable, signal, computed } from '@angular/core';
import { translations, Lang } from '../i18n/translations';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    private _lang = signal<Lang>('pt-BR');

    readonly lang = this._lang.asReadonly();

    readonly isEnglish = computed(() => this._lang() === 'en');

    toggle(): void {
        this._lang.update((l) => (l === 'pt-BR' ? 'en' : 'pt-BR'));
    }

    t(key: string): string {
        return translations[this._lang()][key] ?? key;
    }
}
