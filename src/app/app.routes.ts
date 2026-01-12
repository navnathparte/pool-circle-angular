import { Routes } from '@angular/router';

import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { ProfileSetup } from './profile/profile-setup/profile-setup';

import { Home } from './dashboard/home/home';
import { History } from './dashboard/history/history';
import { Members } from './dashboard/members/members';
import { Contribution } from './dashboard/contribution/contribution';
import { Profile } from './dashboard/profile/profile';
import { Splash } from './splash/splash';
import { DashboardLayout } from './core/layout/dashboard-layout/dashboard-layout';
import { authGuard } from './core/guards/auth-guard';
import { kycGuard } from './core/guards/kyc-guard';

export const routes: Routes = [
  { path: '', component: Splash },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'profile-setup', component: ProfileSetup },

  {
    path: 'dashboard',
    canActivate: [authGuard, kycGuard],
    component: DashboardLayout,
    children: [
      { path: '', component: Home },
      { path: 'history', component: History },
      { path: 'members', component: Members },
      { path: 'contribution', component: Contribution },
      { path: 'profile', component: Profile },
    ],
  },

  { path: '**', redirectTo: '' },
];
