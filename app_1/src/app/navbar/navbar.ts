import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css'],
    imports: [RouterModule], // Import RouterModule to use routerLink
})
export class NavbarComponent {
    constructor() {}
}
