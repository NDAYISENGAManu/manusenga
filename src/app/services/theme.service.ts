import { Injectable, signal } from '@angular/core';

export type ThemeType = 'white-bg' | 'chocolate-bg';

export interface Theme {
    name: ThemeType;
    label: string;
    primaryGradient: string;
    secondaryGradient: string;
    accentGradient: string;
    primaryColor: string;
    secondaryColor: string;
    darkBg: string;
    cardBg: string;
    textPrimary: string;
    textSecondary: string;
    borderColor: string;
}

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private currentTheme = signal<ThemeType>('white-bg');

    readonly themes: Record<ThemeType, Theme> = {
        'white-bg': {
            name: 'white-bg',
            label: 'White BG',
            primaryGradient: '#000000',
            secondaryGradient: '#f5f5f5',
            accentGradient: '#000000',
            primaryColor: '#000000',
            secondaryColor: '#f5f5f5',
            darkBg: '#fff',
            cardBg: 'rgba(0, 0, 0, 0.05)',
            textPrimary: '#000000',
            textSecondary: '#555555',
            borderColor: 'rgba(0, 0, 0, 0.1)'
        },
        'chocolate-bg': {
            name: 'chocolate-bg',
            label: 'Chocolate BG',
            primaryGradient: '#090B0F',
            secondaryGradient: '#141824',
            accentGradient: '#FFD166',
            primaryColor: '#F0C36B',
            secondaryColor: '#FFD166',
            darkBg: '#020617',
            cardBg: 'rgba(255, 255, 255, 0.055)',
            textPrimary: '#FAFBFF',
            textSecondary: '#B3B3BD',
            borderColor: 'rgba(255, 209, 102, 0.32)'
        }
    };

    constructor() {
        this.loadTheme();
    }

    getCurrentTheme() {
        return this.currentTheme();
    }

    setTheme(themeName: ThemeType) {
        this.currentTheme.set(themeName);
        const theme = this.themes[themeName];
        this.applyTheme(theme);
        localStorage.setItem('portfolio-theme', themeName);
    }

    private loadTheme() {
        const savedTheme = localStorage.getItem('portfolio-theme') as ThemeType;
        const theme = savedTheme && this.themes[savedTheme] ? savedTheme : 'chocolate-bg'; // change the default theme here
        this.setTheme(theme);
    }

    private applyTheme(theme: Theme) {
        const root = document.documentElement;
        root.style.setProperty('--primary-gradient', theme.primaryGradient);
        root.style.setProperty('--secondary-gradient', theme.secondaryGradient);
        root.style.setProperty('--accent-gradient', theme.accentGradient);
        root.style.setProperty('--primary-color', theme.primaryColor);
        root.style.setProperty('--secondary-color', theme.secondaryColor);
        root.style.setProperty('--dark-bg', theme.darkBg);
        root.style.setProperty('--card-bg', theme.cardBg);
        root.style.setProperty('--text-primary', theme.textPrimary);
        root.style.setProperty('--text-secondary', theme.textSecondary);
        root.style.setProperty('--border-color', theme.borderColor);
        this.updateFavicon(theme.primaryColor);
    }

    private updateFavicon(color: string) {
        const svg = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" fill="${color}" stroke="${color}" stroke-width="1"/>
            <text x="16" y="20" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">M</text>
        </svg>`;
        const dataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;
        const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
        if (link) {
            link.href = dataUrl;
        }
    }
}
