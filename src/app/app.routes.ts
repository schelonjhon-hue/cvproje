import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { CvComponent } from './cv/cv';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cv', component: CvComponent }
];
