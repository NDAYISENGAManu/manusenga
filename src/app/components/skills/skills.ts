import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skills } from '../../content_option';

interface Skill {
  name: string;
  value: number;
  category: string;
}

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.html',
    styleUrl: './skills.css'
})
export class SkillsComponent {
    skillCategories = skills;
    get allSkills(): Skill[] {
        const all: Skill[] = [];
        for (const category in this.skillCategories) {
            this.skillCategories[category as keyof typeof this.skillCategories].forEach((skill: string) => {
                all.push({ name: skill, value: 100, category });
            });
        }
        return all;
    }

    getCategories(): string[] {
        return Object.keys(this.skillCategories);
    }

    getSkillsByCategory(category: string): Skill[] {
        return this.skillCategories[category as keyof typeof this.skillCategories].map((skill: string) => ({ name: skill, value: 100, category }));
    }
}
