import { Injectable } from '@angular/core';
// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
// import { map, filter, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { ProductionPlanning } from './production-planning';
import { ProdWeekWork } from './prodweekwork';

@Injectable()
export class ProductionPlanningService {
    //URL for CRUD operations
    prodPlanningUrl = "http://localhost:8080/production_planning";

    contentTypeHeader = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.contentTypeHeader });
    //Create constructor to get Http instance
    constructor(private http: Http, private httpClient: HttpClient) {
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }

    createProdPlanning(prodPlanning: ProductionPlanning): Observable<number> {
        return this.http.post(this.prodPlanningUrl, prodPlanning, this.options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    getAllProdPlannings(): Observable<ProductionPlanning[]> {
        return this.http.get(this.prodPlanningUrl)
		   		.map(this.extractData)
		        .catch(this.handleError);
    }

    getAllProdWeekWorks(): Observable<ProdWeekWork> {
        return this.http.get(this.prodPlanningUrl + "/prod_weekwork")
		   		.map(this.extractData)
		        .catch(this.handleError);
    }

    private extractData(res: Response) {
	    let body = res.json();
        return body;
    }

    updateProdPlanning(prodPlanning: ProductionPlanning):Observable<number> {
        return this.http.put(this.prodPlanningUrl, prodPlanning, this.options)
               .map(success => success.status)
               .catch(this.handleError);
    }

    getProdPlanningById(prodPlanningId: string): Observable<ProductionPlanning> {
		console.log(this.prodPlanningUrl +"/"+ prodPlanningId);
		return this.http.get(this.prodPlanningUrl +"/"+ prodPlanningId, this.options)
			   .map(this.extractData)
			   .catch(this.handleError);
    }

    deleteProdPlanningById(prodPlanningId: string): Observable<number> {
		return this.http.delete(this.prodPlanningUrl +"/"+ prodPlanningId, this.options)
			   .map(success => success.status)
			   .catch(this.handleError);
    }

    searchProdPlannings(criteria: any): Observable<ProductionPlanning[]> {
        return this.http.post(this.prodPlanningUrl+"/search", criteria, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
