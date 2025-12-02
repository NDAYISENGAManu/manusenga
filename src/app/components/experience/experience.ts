import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { worktimeline } from '../../content_option';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, TimelineModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  experiences = worktimeline.map(exp => ({
    title: exp.jobtitle,
    company: exp.where,
    period: exp.date,
    description: exp.description,
    contributions: exp.contributions,
    technologies: [], // Add if needed
    icon: 'pi-briefcase'
  }));
}
