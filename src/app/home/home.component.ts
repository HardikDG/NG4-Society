
import { Component } from '@angular/core';

import { AuthHelper } from './../services/auth-helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAuthDone = false;

constructor( private authHelper:AuthHelper) { 
  this.isAuthDone = this.authHelper.getUserAuth();
}


}
