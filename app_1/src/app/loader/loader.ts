import { Component } from '@angular/core';
import { LoaderService } from '../loaderService';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.css' 
})
export class LoaderComponent {
showLoader: boolean = false;
constructor(private loaderService: LoaderService) {
    // Subscribe to the loading state from the Loader service
    this.loaderService.loadingSubject.subscribe((isLoading: boolean) => {
      this.showLoader = isLoading;
      console.log('Loader state changed:', isLoading);
    });
  }
}
