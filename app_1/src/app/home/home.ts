import { Component } from '@angular/core';
import { Parent } from '../parent/parent';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../productsService';
@Component({
  selector: 'app-home',
  imports: [Parent,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [ProductsService]  // Providing ProductsService here allows it to be injected into this component

})
export class Home {
arr: string[] = [];
constructor(_productsService: ProductsService) {
  this.arr = _productsService.items;
}

}
