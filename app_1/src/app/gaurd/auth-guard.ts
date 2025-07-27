import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthorized = localStorage.getItem('authorized') === 'true';
  const router = inject(Router);
  if (!isAuthorized) {
    // Redirect to login or show an error message
    router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    console.error('Access denied. User is not authorized.');
    return false;
  }
  return true;
};
