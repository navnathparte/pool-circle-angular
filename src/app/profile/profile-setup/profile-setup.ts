import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-setup',
  imports: [],
  templateUrl: './profile-setup.html',
  styleUrl: './profile-setup.css',
})
export class ProfileSetup {
  constructor(private router: Router) {}

  saveProfile() {
    localStorage.setItem('isKycDone', 'true');
    this.router.navigate(['/dashboard']);
  }
}
