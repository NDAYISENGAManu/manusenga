import { Component, inject, HostListener } from '@angular/core';
import { ThemeService, ThemeType } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

import { introdata, dataabout, worktimeline, skills, education, certifications } from '../../content_option';

declare var html2pdf: any;

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  mobileMenuOpen = false;

  // Resume data
  introdata = introdata;
  dataabout = dataabout;
  worktimeline = worktimeline;
  skills = skills;
  education = education;
  certifications = certifications;

  menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Experience', link: '#experience' },
    { label: 'Projects', link: '#projects' },
    { label: 'Skills', link: '#skills' },
    { label: 'Credentials & Impact', link: '#credentials' },
    { label: 'Contact', link: '#contact' }
  ];

  get availableThemes(): ThemeType[] {
    return Object.keys(this.themeService.themes) as ThemeType[];
  }

  get currentTheme(): ThemeType {
    return this.themeService.getCurrentTheme();
  }

  scrollToSection(link: string): void {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.mobileMenuOpen = false; // Close mobile menu after navigation
  }

  toggleThemeMenu(): void {
    // Cycle through themes
    const themes = this.availableThemes;
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.changeTheme(themes[nextIndex]);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  changeTheme(theme: ThemeType): void {
    this.themeService.setTheme(theme);
  }

  getThemeLabel(theme: ThemeType): string {
    return this.themeService.themes[theme].label;
  }

  async downloadResume() {
    const element = document.querySelector('.hidden-resume .resume-container');

    if (!element) {
      console.error('Resume content not found');
      // Fallback to opening the page
      window.open('/resume', '_blank');
      return;
    }

    const opt = {
      margin: 0,
      filename: 'Emmanuel_NDAYISENGA_Resume.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
      pagebreak: { mode: ['css', 'legacy'] }
    };

    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const resume = element as HTMLElement;
      resume.classList.add('pdf-export');
      const hiddenResume = resume.closest('.hidden-resume');
      hiddenResume?.classList.add('pdf-export');
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
      await html2pdf().set(opt).from(resume).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      window.open('/resume', '_blank');
    } finally {
      element.classList.remove('pdf-export');
      element.closest('.hidden-resume')?.classList.remove('pdf-export');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.mobile-menu-btn') && this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
    }
  }
}
