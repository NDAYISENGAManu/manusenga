import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { ExperienceComponent } from './components/experience/experience';
import { ContactComponent } from './components/contact/contact';
import { SkillsComponent } from './components/skills/skills';
import { AboutComponent } from './components/about/about';
import { CredentialsComponent } from './components/credentials/credentials';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
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
  title = 'my-portfolio';
}
