import { Component } from '@angular/core';
import { NavportfolioComponent } from './navportfolio/navportfolio.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavportfolioComponent,ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
