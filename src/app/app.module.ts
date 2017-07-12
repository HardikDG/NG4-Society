import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routes';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { WebserviceHelper } from './services/webservice-helper.service';
import { UtilityHelper } from './services/utility-helper';
import { AuthHelper } from './services/auth-helper';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [WebserviceHelper,AuthHelper,UtilityHelper],
  bootstrap: [HomeComponent]
})
export class AppModule { }
