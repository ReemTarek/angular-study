import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
isActive: boolean = true;
changeActive(){
  this.isActive = !this.isActive;
}
}
