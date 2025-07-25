import { Injectable } from '@angular/core';
//injectable decorator is used to define a service in Angular
@Injectable({
  providedIn: 'root' //visible within the entire application
})
export class ProductsService {
  items:string[] = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5'
  ];
}
