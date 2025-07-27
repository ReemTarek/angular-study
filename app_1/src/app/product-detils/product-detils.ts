import { Component } from '@angular/core';
import { ProductsService } from '../productsService';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { CurrencyPipe,CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-detils',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-detils.html',
  styleUrl: './product-detils.css',
  providers: [ProductsService],  // Providing ProductsService here allows it to be injected into this component

})

export class ProductDetils {

constructor(private _productsService: ProductsService,private route: ActivatedRoute) {

  
}
product: Product = null as any; // Initialize product to null or an empty object
ngOnInit() {
  // Assuming you have a route parameter for product ID
  this.route.params.subscribe(params => {
    const productId = +params['id']; // Convert the ID to a number
    this.getproduct(productId);
  });
}
getproduct( id :number){
  this._productsService.getProduct(id).subscribe({
    next: (data) => {
      console.log('Product details:', data);
      this.product = data; // Assuming the API returns a single product object
      // You can navigate to a product details page or display the product details in some way
      // For example, you might use a router to navigate to a product details component
      // this.router.navigate(['/product-details', id]);
    },
    error: (error) => {
      console.error('Error fetching product:', error);
    }
  });

}
}
//http interceptor
// You can create an HTTP interceptor to handle API requests and responses globally
