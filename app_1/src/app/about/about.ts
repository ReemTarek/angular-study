import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  string_1 = "Hello World";
  image_1 = "https://picsum.photos/200/300";
  image_2 = "img/404.jpg";
  active = true;
  changeActive(){
    this.active = !this.active;
  }
}
//not working 
export class AboutC{
 
}