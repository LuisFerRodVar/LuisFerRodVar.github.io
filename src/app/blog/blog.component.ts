import { Component } from '@angular/core';
import { CardblogsComponent } from './cardblogs/cardblogs.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CardblogsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
