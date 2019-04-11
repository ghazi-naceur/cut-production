import { Injectable } from '@angular/core';
// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
// import { map, filter, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import { Order } from './order';

@Injectable()
export class OrderService {
    //URL for CRUD operations
    orderUrl = "http://localhost:8080/orders";

    contentTypeHeader = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.contentTypeHeader });
    //Create constructor to get Http instance
    constructor(private http: Http, private httpClient: HttpClient) {
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }

    createOrder(order: Order): Observable<number> {
        return this.http.post(this.orderUrl, order, this.options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    getAllOrders(): Observable<Order[]> {
        return this.http.get(this.orderUrl)
		   		.map(this.extractData)
		        .catch(this.handleError);
    }

    private extractData(res: Response) {
	    let body = res.json();
        return body;
    }

    updateOrder(order: Order):Observable<number> {
        return this.http.put(this.orderUrl, order, this.options)
               .map(success => success.status)
               .catch(this.handleError);
    }

    getOrderById(orderId: string): Observable<Order> {
		console.log(this.orderUrl +"/"+ orderId);
		return this.http.get(this.orderUrl +"/"+ orderId, this.options)
			   .map(this.extractData)
			   .catch(this.handleError);
    }

    deleteOrderById(orderId: string): Observable<number> {
		return this.http.delete(this.orderUrl +"/"+ orderId, this.options)
			   .map(success => success.status)
			   .catch(this.handleError);
    }

    searchOrders(criteria: any): Observable<Order[]> {
        return this.http.post(this.orderUrl+"/search", criteria, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    clearOrders() {
        return this.http.delete(this.orderUrl + "/delete_orders", this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }
}
