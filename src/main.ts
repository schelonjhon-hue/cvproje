import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import 'zone.js';

bootstrapApplication(App)
  .catch(err => console.error(err));
