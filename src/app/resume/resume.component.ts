import { Component } from '@angular/core';
import { CertificatesComponent } from '../resume/certificates/certificates.component';
import { SkillsComponent } from './skills/skills.component';
import { TechboxComponent } from './techbox/techbox.component';
import { TimelineComponent } from './timeline/timeline.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CertificatesComponent,SkillsComponent,TechboxComponent,TimelineComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
