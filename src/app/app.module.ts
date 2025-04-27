import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';   
import { SignupComponent } from './components/signUp/signUp.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';  
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent   ,
    SignupComponent ,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
