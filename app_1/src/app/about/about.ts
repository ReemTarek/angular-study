import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [FormsModule,CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  string_1 = "Hello World";
  image_1 = "https://picsum.photos/200/300";
  image_2 = "img/404.jpg";
  active: boolean = true;
  changeActive(){
    this.active = !this.active;
  }
  onKeyUp(event: KeyboardEvent){
    console.log(event.key);
  }
  searchTearm = "";
}
//not working 
export class AboutC{
 
}