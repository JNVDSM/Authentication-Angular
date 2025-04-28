import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signUp/signUp.component';
import { SuccessComponent } from './components/success/success.component';
import { ForgotComponent } from './components/forgot/forgot.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'loginSuccess', component: SuccessComponent },
  {path:'forgot',component:ForgotComponent},
  { path: '**', redirectTo: '/login' }
];
