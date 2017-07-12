import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AppConstants } from './../constants/app.constants';

import { WebserviceHelper } from './../services/webservice-helper.service';
import { AuthHelper } from './../services/auth-helper';
import { Router } from "@angular/router";

import { UtilityHelper } from './../services/utility-helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private wsHelper: WebserviceHelper, private authHelper:AuthHelper, private router:Router,private utiltyHelper:UtilityHelper) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'firstname': new FormControl(null, [Validators.required]),
        'lastname': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required]),
        'cpassword': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'bdate': new FormControl(null),
        'mobile': new FormControl(null, [Validators.required]),
      }), 'flatData': new FormGroup({
        'purchasedate': new FormControl(null, [Validators.required]),
        'flatblock': new FormControl(null, [Validators.required]),
        'flatno': new FormControl(null, [Validators.required, Validators.email])
      })
    });
  }

    onSubmit() {
    let params = {
      'email': this.signupForm.get('userData.email').value,
      'password:': this.signupForm.get('userData.password').value
    }
    this.wsHelper
      .postRequest(AppConstants.SIGNUP, params)
      .subscribe(
      result => {
        this.utiltyHelper.printLog("login " + JSON.stringify(result));
        this.authHelper.setUserAuth(result);
         this.router.navigate(['/signup']);
         alert("Signup successful");
      },
      error => alert("Some error occured")
      );
    console.log(this.signupForm);
    this.signupForm.reset();
  }

}
