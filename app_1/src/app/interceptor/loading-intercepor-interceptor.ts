import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../loaderService';
import { finalize } from 'rxjs';
import { inject } from '@angular/core';

export const loadingInterceporInterceptor: HttpInterceptorFn = (req, next) => {
  const _loaderService = inject(LoaderService);
  _loaderService.show(); // Show the loader before the request is sent
  return next(req).pipe(finalize(() => {
    _loaderService.hide(); // Hide the loader after the request is completed
    // You can also handle errors here if needed
  }))
}