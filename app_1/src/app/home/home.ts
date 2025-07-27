import { Component } from '@angular/core';
import { Parent } from '../parent/parent';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../productsService';
import { Subscription } from 'rxjs';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../pipes/search-pipe";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Parent, CommonModule, FormsModule, SearchPipe, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [ProductsService],  // Providing ProductsService here allows it to be injected into this component
})
export class Home {
arr: string[] = [];
cancelRequest! :Subscription
products : Product[] = [];
searchTerm: string = '';
constructor(private _productsService: ProductsService) {
}
ngOnInit() {
  // Fetch products when the component is initialized
  this.getProducts();
}
getProducts() {
  this._productsService.getProducts().subscribe({
    next: (data) => { 
     // this.arr = data;
      this.products = data; // Assuming the API returns an array of products
      console.log('Products fetched:', this.arr);
    }
});}


}

