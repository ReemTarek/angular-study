import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { About } from './about/about';
//decorator defining component with selector, imports, templateUrl, styleUrl and export class is followed by the decorator
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app_1');
}
