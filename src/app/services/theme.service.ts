import { Injectable } from '@angular/core';

interface Theme {
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

const BEE_HONEY_THEME: Theme = {
    primaryGradient: '#F4B942',
    secondaryGradient: '#FFF0C2',
    accentGradient: '#D58A16',
    primaryColor: '#A86408',
    secondaryColor: '#49351F',
    darkBg: '#FFF8E8',
    cardBg: 'rgba(255, 255, 255, 0.78)',
    textPrimary: '#302316',
    textSecondary: '#695843',
    borderColor: 'rgba(168, 100, 8, 0.24)'
};

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    constructor() {
        this.applyTheme(BEE_HONEY_THEME);
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
