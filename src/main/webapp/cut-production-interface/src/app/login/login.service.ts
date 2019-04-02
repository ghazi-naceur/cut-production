import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class LoginService {

    loginUrl = "http://localhost:8080/production/login";

    contentTypeHeader = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.contentTypeHeader });

    constructor(private http: Http, private httpClient: HttpClient) { }

    login(login: Login): Observable<number> {
        return this.http.post(this.loginUrl, login, this.options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    logout() {

    }

    private extractData(res: Response) {
	    let body = res.json();
        return body;
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}