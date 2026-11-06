import { Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { introdata, dataabout, worktimeline, skills, education, certifications, volunteering, publications, contactConfig, socialprofils, references } from '../../content_option';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class ResumeComponent {
  private router = inject(Router);
  private host = inject(ElementRef<HTMLElement>);

  introdata = introdata;
  dataabout = dataabout;
  worktimeline = worktimeline;
  education = education;
  certifications = certifications;
  volunteering = volunteering;
  publications = publications;
  references = references;
  contactConfig = contactConfig;
  socialprofils = socialprofils;

  get skillCategories() {
    return Object.entries(skills).map(([name, skillList]) => ({
      name,
      skills: skillList
    }));
  }

  async printResume() {
    const element = this.host.nativeElement.querySelector('.resume-container');
    if (!element) {
      console.error('Resume content not found');
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

    element.classList.add('pdf-export');
    const hiddenResume = element.closest('.hidden-resume');
    hiddenResume?.classList.add('pdf-export');
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
      await html2pdf().set(opt).from(element).save();
    } finally {
      element.classList.remove('pdf-export');
      hiddenResume?.classList.remove('pdf-export');
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}