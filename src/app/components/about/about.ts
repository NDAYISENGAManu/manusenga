import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataabout, introdata } from '../../content_option';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  dataabout = dataabout;
  introdata = introdata;
}
