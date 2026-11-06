import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { ExperienceComponent } from './components/experience/experience';
import { ContactComponent } from './components/contact/contact';
import { SkillsComponent } from './components/skills/skills';
import { AboutComponent } from './components/about/about';
import { CredentialsComponent } from './components/credentials/credentials';
import { ResumeComponent } from './components/resume/resume';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ResumeComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    CredentialsComponent,

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);
  title = 'my-portfolio';

  get isResumeRoute(): boolean {
    return this.router.url.startsWith('/resume');
  }
}
