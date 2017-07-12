import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Import RxJs required methods
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppConstants } from './../constants/app.constants';

@Injectable()
export class WebserviceHelper {
    constructor(private http: Http) {
    }

    postRequest(endPoint: string, param: any): Observable<any> {
        // let body = JSON.stringify(param);
        return this.http
            .post(AppConstants.API_BASE + endPoint, param)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getrequest(endPoint: string, param?: any): Observable<any> {
        let reqUrl = "";
        if (param) {
            reqUrl =  AppConstants.API_BASE + endPoint + "?uuid=" + param.uuid + "&switch=" + param.switch + "&counter=" + param.counter;
        } else {
            reqUrl =  AppConstants.API_BASE + endPoint;
        }
        return this.http
            .get(reqUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}