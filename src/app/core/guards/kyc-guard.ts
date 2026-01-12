import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const kycGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isKycDone = localStorage.getItem('isKycDone');

  if (isKycDone === 'true') {
    return true;
  }

  router.navigate(['/profile-setup']);
  return false;
};
