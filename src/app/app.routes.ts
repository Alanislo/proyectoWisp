import { Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'contact', component: ContactComponent},
];
