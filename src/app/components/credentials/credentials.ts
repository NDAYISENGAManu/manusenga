import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { education, certifications, volunteering, publications, references } from '../../content_option';

@Component({
  selector: 'app-credentials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credentials.html',
  styleUrl: './credentials.css'
})
export class CredentialsComponent {
  education = education;
  certifications = certifications;
  volunteering = volunteering;
  publications = publications;
  references = references;

  openCredentialUrl(url?: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
