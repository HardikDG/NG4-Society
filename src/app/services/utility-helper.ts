import { Injectable } from '@angular/core';

@Injectable()
export class UtilityHelper {
private userObj;

    constructor() { }

  printLog(message) {
    console.log(message);
  }

}
