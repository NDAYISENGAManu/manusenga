import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { socialprofils, contactConfig } from '../../content_option';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  socialLinks = [
    { icon: 'pi-github', url: socialprofils.github, label: 'GitHub' },
    { icon: 'pi-linkedin', url: socialprofils.linkedin, label: 'LinkedIn' },
    // { icon: 'pi-twitter', url: socialprofils.twitter, label: 'Twitter' },
    { icon: 'pi-envelope', url: `mailto:${contactConfig.YOUR_EMAIL}`, label: 'Email' }
  ];

  currentYear = new Date().getFullYear();
}
