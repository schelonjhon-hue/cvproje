import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `<button (click)="goToTatiller()">Tatiller Sayfasına Git</button>`
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToTatiller(): void {
    this.router.navigate(['/izin/tatiller']);
  }
}
