import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { introdata } from '../../content_option';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  introdata = introdata;
  typingText = '';
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private texts: string[] = [];

  private typingTimer: any = null;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // Initialize texts array
    this.texts = [
      this.introdata.animated.first,
      this.introdata.animated.second,
    ].filter((text): text is string => !!text && text.trim().length > 0);

    // Start typing animation
    if (this.texts.length > 0) {
      this.startTyping();
    } else {
      console.error('No texts available for typing animation');
    }
  }

  ngOnDestroy() {
    this.stopTyping();
  }

  private startTyping() {
    if (this.texts.length > 0) {
      this.type();
    }
  }

  private stopTyping() {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
      this.typingTimer = null;
    }
  }

  private type() {
    const currentText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.typingText = currentText.substring(0, this.charIndex);
    this.cdr.detectChanges();

    let typeSpeed = 100;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      // Finished typing word
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      // Finished deleting word
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      typeSpeed = 500;
    } else if (this.isDeleting) {
      typeSpeed = 50;
    }

    this.typingTimer = setTimeout(() => this.type(), typeSpeed);
  }

  scrollToContact(): void {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToProjects(): void {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
