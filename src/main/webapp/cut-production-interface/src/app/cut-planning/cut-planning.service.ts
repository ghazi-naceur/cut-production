import { Injectable } from '@angular/core';
// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
// import { map, filter, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { CutPlanning } from './cut-planning';
import { WeekWork } from './weekwork';

@Injectable()
export class CutPlanningService {
    //URL for CRUD operations
    cutPlanningUrl = "http://localhost:8080/cut_planning";

    contentTypeHeader = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.contentTypeHeader });
    //Create constructor to get Http instance
    constructor(private http: Http, private httpClient: HttpClient) {
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }

    createCutPlanning(cutPlanning: CutPlanning): Observable<number> {
        return this.http.post(this.cutPlanningUrl, cutPlanning, this.options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    getAllCutPlannings(): Observable<CutPlanning[]> {
        return this.http.get(this.cutPlanningUrl)
		   		.map(this.extractData)
		        .catch(this.handleError);
    }

    getAllWeekWorks(): Observable<WeekWork> {
        return this.http.get(this.cutPlanningUrl + "/weekwork")
		   		.map(this.extractData)
		        .catch(this.handleError);
    }

    private extractData(res: Response) {
	    let body = res.json();
        return body;
    }

    updateCutPlanning(cutPlanning: CutPlanning):Observable<number> {
        return this.http.put(this.cutPlanningUrl, cutPlanning, this.options)
               .map(success => success.status)
               .catch(this.handleError);
    }

    getCutPlanningById(cutPlanningId: string): Observable<CutPlanning> {
		console.log(this.cutPlanningUrl +"/"+ cutPlanningId);
		return this.http.get(this.cutPlanningUrl +"/"+ cutPlanningId, this.options)
			   .map(this.extractData)
			   .catch(this.handleError);
    }

    deleteCutPlanningById(cutPlanningId: string): Observable<number> {
		return this.http.delete(this.cutPlanningUrl +"/"+ cutPlanningId, this.options)
			   .map(success => success.status)
			   .catch(this.handleError);
    }

    searchCutPlannings(criteria: any): Observable<CutPlanning[]> {
        return this.http.post(this.cutPlanningUrl+"/search", criteria, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    clearCutPlannings() {
        return this.http.delete(this.cutPlanningUrl + "/delete_orders", this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }
}
