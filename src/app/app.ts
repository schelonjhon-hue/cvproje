import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  standalone: true, 
 selector: 'app-root', 
 imports: [RouterOutlet, RouterLink, RouterLinkActive], 
 templateUrl: './app.html', 
 styleUrls: ['./app.css'] })
  export class App {}