import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AppConstants } from './../constants/app.constants';

import { WebserviceHelper } from './../services/webservice-helper.service';
import { AuthHelper } from './../services/auth-helper';
import { Router } from "@angular/router";

import { UtilityHelper } from './../services/utility-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private wsHelper: WebserviceHelper, private authHelper:AuthHelper, private router:Router,private utiltyHelper:UtilityHelper) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    let params = {
      'email': this.loginForm.get('email').value,
      'password:': this.loginForm.get('password').value
    }
    this.wsHelper
      .postRequest(AppConstants.LOGIN, params)
      .subscribe(
      result => {
        this.utiltyHelper.printLog("login " + JSON.stringify(result));
        this.authHelper.setUserAuth(result);
        //  this.router.navigate(['/signup']);
         alert("Login successful");
      },
      error => alert("Some error occured")
      );
    console.log(this.loginForm);
    this.loginForm.reset();
  }

}
