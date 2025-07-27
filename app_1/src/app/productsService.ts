import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//injectable decorator is used to define a service in Angular
@Injectable({
  providedIn: 'root' //visible within the entire application
})
export class ProductsService {
  constructor(private http: HttpClient) { 

  }
  getProducts() :Observable<any> {
    // This method would typically make an HTTP request to fetch products
    // For demonstration, we return a static list of products
    return this.http.get('https://fakestoreapi.com/products'); // Replace with your actual API endpoint
  }
  getProduct(id: number): Observable<any> {
    // This method would typically make an HTTP request to fetch a single product by ID
    return this.http.get(`https://fakestoreapi.com/products/${id}`); // Replace with your actual API endpoint
  }
  items:string[] = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5'
  ];
}
