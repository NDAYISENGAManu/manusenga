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
            darkBg: '#FFF8E7',
            cardBg: 'rgba(0, 0, 0, 0.05)',
            textPrimary: '#000000',
            textSecondary: '#555555',
            borderColor: 'rgba(0, 0, 0, 0.1)'
        },
        'chocolate-bg': {
            name: 'chocolate-bg',
            label: 'Chocolate BG',
            primaryGradient: '#2B1B17',
            secondaryGradient: '#3E2723',
            accentGradient: '#D4A373',
            primaryColor: '#C9A05F',
            secondaryColor: '#D4A373',
            darkBg: '#2D1B13',
            cardBg: 'rgba(255, 255, 255, 0.05)',
            textPrimary: '#FFFFFF',
            textSecondary: '#E6D5C3',
            borderColor: 'rgba(212, 163, 115, 0.3)'
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
