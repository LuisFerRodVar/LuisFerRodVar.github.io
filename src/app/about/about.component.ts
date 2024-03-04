import { Component } from '@angular/core';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { CapacitiesComponent } from './capacities/capacities.component';
import { PricesComponent } from './prices/prices.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PersonalDataComponent,CapacitiesComponent,PricesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
