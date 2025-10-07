import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit() {
    // Giriş kontrolü yapılabilir (şimdilik hep başarılı kabul ediyoruz)
    this.router.navigate(['/cv']);
  }
}
