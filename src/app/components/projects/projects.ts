import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataportfolio } from '../../content_option';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects = dataportfolio.map(proj => ({
    title: proj.title,
    description: proj.description,
    technologies: proj.technologies || [],
    image: proj.img,
    liveUrl: proj.link
  }));
}
