import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { introdata, dataabout, worktimeline, skills, education, certifications, volunteering, publications, contactConfig, socialprofils } from '../../content_option';

declare var html2pdf: any;

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class ResumeComponent {
  private router = inject(Router);

  introdata = introdata;
  dataabout = dataabout;
  worktimeline = worktimeline;
  education = education;
  certifications = certifications;
  volunteering = volunteering;
  publications = publications;
  contactConfig = contactConfig;
  socialprofils = socialprofils;

  get skillCategories() {
    return Object.entries(skills).map(([name, skillList]) => ({
      name,
      skills: skillList
    }));
  }

  async printResume() {
    const element = document.getElementById('resume-content');
    if (!element) return;

    const opt = {
      margin: 0,
      filename: 'Emmanuel_NDAYISENGA_Resume.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
      pagebreak: { mode: ['css', 'legacy'] }
    };

    // Dynamic import to avoid SSR issues if any, and ensure it loads correctly
    const html2pdf = (await import('html2pdf.js')).default;
    html2pdf().set(opt).from(element).save();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}