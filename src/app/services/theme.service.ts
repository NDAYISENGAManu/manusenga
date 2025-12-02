import { Injectable, signal } from '@angular/core';

export type ThemeType = 'yellow-bg' | 'white-bg' | 'black-bg';

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
    private currentTheme = signal<ThemeType>('black-bg');

    readonly themes: Record<ThemeType, Theme> = {
        'black-bg': {
            name: 'black-bg',
            label: 'Black BG',
            primaryGradient: '#FFD700',
            secondaryGradient: '#1a1a1a',
            accentGradient: '#FFD700',
            primaryColor: '#FFD700',
            secondaryColor: '#1a1a1a',
            darkBg: '#000000',
            cardBg: 'rgba(255, 215, 0, 0.05)',
            textPrimary: '#FFFFFF',
            textSecondary: '#E0E0E0',
            borderColor: 'rgba(255, 215, 0, 0.3)'
        },
        'yellow-bg': {
            name: 'yellow-bg',
            label: 'Yellow BG',
            primaryGradient: '#000000',
            secondaryGradient: '#333333',
            accentGradient: '#000000',
            primaryColor: '#000000',
            secondaryColor: '#333333',
            darkBg: '#FFD700',
            cardBg: 'rgba(0, 0, 0, 0.05)',
            textPrimary: '#000000',
            textSecondary: '#333333',
            borderColor: 'rgba(0, 0, 0, 0.2)'
        },
        'white-bg': {
            name: 'white-bg',
            label: 'White BG',
            primaryGradient: '#000000',
            secondaryGradient: '#f5f5f5',
            accentGradient: '#000000',
            primaryColor: '#000000',
            secondaryColor: '#f5f5f5',
            darkBg: '#FFFFFF',
            cardBg: 'rgba(0, 0, 0, 0.05)',
            textPrimary: '#000000',
            textSecondary: '#555555',
            borderColor: 'rgba(0, 0, 0, 0.1)'
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
        const theme = savedTheme && this.themes[savedTheme] ? savedTheme : 'black-bg';
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
