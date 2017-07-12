import { Injectable } from '@angular/core';

@Injectable()
export class AuthHelper {
private userObj;

    constructor() { }

    setUserAuth(userData) {
        this.userObj = userData;
    }

    getUserAuth() {
        if (this.userObj) {
            return true
        } else {
            return false;
        }
    }

}
