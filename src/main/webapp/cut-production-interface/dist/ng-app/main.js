(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _orders_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders/order.component */ "./src/app/orders/order.component.ts");
/* harmony import */ var _cut_planning_cut_planning_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cut-planning/cut-planning.component */ "./src/app/cut-planning/cut-planning.component.ts");
/* harmony import */ var _production_planning_production_planning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./production-planning/production-planning.component */ "./src/app/production-planning/production-planning.component.ts");
/* harmony import */ var _apropos_a_propos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apropos/a.propos.component */ "./src/app/apropos/a.propos.component.ts");










var routes = [
    { path: 'order', component: _orders_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'success', component: _success_success_component__WEBPACK_IMPORTED_MODULE_5__["SuccessComponent"] },
    { path: 'cut_planning', component: _cut_planning_cut_planning_component__WEBPACK_IMPORTED_MODULE_7__["CutPlanningComponent"] },
    { path: 'production_planning', component: _production_planning_production_planning_component__WEBPACK_IMPORTED_MODULE_8__["ProductionPlanningComponent"] },
    { path: 'apropos', component: _apropos_a_propos_component__WEBPACK_IMPORTED_MODULE_9__["AProposComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
]; // Routes table
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar> -->\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _orders_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders/order.component */ "./src/app/orders/order.component.ts");
/* harmony import */ var _orders_order_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orders/order.service */ "./src/app/orders/order.service.ts");
/* harmony import */ var _excel_excel_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./excel/excel.service */ "./src/app/excel/excel.service.ts");
/* harmony import */ var _cut_planning_cut_planning_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cut-planning/cut-planning.component */ "./src/app/cut-planning/cut-planning.component.ts");
/* harmony import */ var _cut_planning_cut_planning_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cut-planning/cut-planning.service */ "./src/app/cut-planning/cut-planning.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _production_planning_production_planning_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./production-planning/production-planning.component */ "./src/app/production-planning/production-planning.component.ts");
/* harmony import */ var _production_planning_production_planning_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./production-planning/production-planning.service */ "./src/app/production-planning/production-planning.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _apropos_a_propos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./apropos/a.propos.component */ "./src/app/apropos/a.propos.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _orders_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _success_success_component__WEBPACK_IMPORTED_MODULE_13__["SuccessComponent"],
                _cut_planning_cut_planning_component__WEBPACK_IMPORTED_MODULE_17__["CutPlanningComponent"],
                _production_planning_production_planning_component__WEBPACK_IMPORTED_MODULE_20__["ProductionPlanningComponent"],
                _apropos_a_propos_component__WEBPACK_IMPORTED_MODULE_23__["AProposComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_22__["NgxPaginationModule"]
            ],
            providers: [
                _orders_order_service__WEBPACK_IMPORTED_MODULE_15__["OrderService"],
                _login_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"],
                _excel_excel_service__WEBPACK_IMPORTED_MODULE_16__["ExcelService"],
                _cut_planning_cut_planning_service__WEBPACK_IMPORTED_MODULE_18__["CutPlanningService"],
                _production_planning_production_planning_service__WEBPACK_IMPORTED_MODULE_21__["ProductionPlanningService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/apropos/a.propos.component.html":
/*!*************************************************!*\
  !*** ./src/app/apropos/a.propos.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>A propos</h3>\r\n\r\n<app-navbar></app-navbar>\r\n\r\n<div>\r\n    <p>\r\n        Ce projet est réalisé dans le cadre d'un PFE au sein de la société MACO, par l'élève ingénieur <b>Ahmed Agren</b>. <br/>\r\n        <br/>\r\n        <b>LinkedIn</b> : https://www.linkedin.com/in/ahmed-agren-669240129/<br/>\r\n        <b>Téléphone Portable</b> : 00216 41 46 53 68\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./src/app/apropos/a.propos.component.ts":
/*!***********************************************!*\
  !*** ./src/app/apropos/a.propos.component.ts ***!
  \***********************************************/
/*! exports provided: AProposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AProposComponent", function() { return AProposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AProposComponent = /** @class */ (function () {
    function AProposComponent() {
    }
    AProposComponent.prototype.ngOnInit = function () {
    };
    AProposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-a-propos',
            template: __webpack_require__(/*! ./a.propos.component.html */ "./src/app/apropos/a.propos.component.html")
        })
    ], AProposComponent);
    return AProposComponent;
}());



/***/ }),

/***/ "./src/app/cut-planning/cut-planning.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cut-planning/cut-planning.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Planning Coupe</h3>\r\n\r\n<app-navbar></app-navbar>\r\n\r\n<h1>Nouveau planning coupe</h1>\r\n<div>\r\n  <form class=\"container\" [formGroup]=\"cutPlanningForm\" (ngSubmit)=\"onCutPlanningFormSubmit()\">\r\n    <table>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6\">\r\n          <tr>\r\n            <td><b>Date d'export</b></td>\r\n            <td><input type=\"date\" class=\"form-control\" formControlName=\"exportDate\">\r\n              <label *ngIf=\"cutPlanningForm.get('exportDate').invalid && processValidation\" [ngClass]=\"'error'\"> Date\r\n                d'export est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><b>Semaine</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"planningWeek\">\r\n              <label *ngIf=\"cutPlanningForm.get('planningWeek').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                Semaine\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><b>Client</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"client\">\r\n              <label *ngIf=\"cutPlanningForm.get('client').invalid && processValidation\" [ngClass]=\"'error'\"> Client\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n          <tr>\r\n            <td><b>Modèle</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"model\">\r\n              <label *ngIf=\"cutPlanningForm.get('model').invalid && processValidation\" [ngClass]=\"'error'\"> Modèle\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><b>Article</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"article\">\r\n              <label *ngIf=\"cutPlanningForm.get('article').invalid && processValidation\" [ngClass]=\"'error'\"> Article\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n            <tr>\r\n                <td><b>Numéro de Commande</b></td>\r\n                <td><input class=\"form-control\" formControlName=\"commandNumber\">\r\n                  <label *ngIf=\"cutPlanningForm.get('commandNumber').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                    Numéro de commande est\r\n                    requis. </label>\r\n                </td>\r\n              </tr>\r\n            <tr>\r\n                <td><b>Quantité</b></td>\r\n                <td><input class=\"form-control\" formControlName=\"quantity\">\r\n                  <label *ngIf=\"cutPlanningForm.get('quantity').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                    Quantité est\r\n                    requis. </label>\r\n                </td>\r\n              </tr>\r\n          <tr>\r\n            <td><b>Rendement</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"efficiency\">\r\n              <label *ngIf=\"cutPlanningForm.get('efficiency').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                Rendement\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><b>Effectif</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"effective\">\r\n              <label *ngIf=\"cutPlanningForm.get('effective').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                Effectif\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><b>Taux d'absentéisme</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"absenteeismRate\">\r\n              <label *ngIf=\"cutPlanningForm.get('absenteeismRate').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                Taux\r\n                d'absentéisme est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\">\r\n              <button class=\"btn btn-primary\" *ngIf=\"!cutPlanningIdToUpdate\">Ajouter</button>\r\n              <button class=\"btn btn-info\" *ngIf=\"cutPlanningIdToUpdate\">Modifier</button>\r\n              <button class=\"btn btn-primary\" (click)=\"backToCreateCutPlanning()\" *ngIf=\"cutPlanningIdToUpdate\">Retourner</button>\r\n            </td>\r\n          </tr>\r\n        </div>\r\n      </div>\r\n    </table>\r\n  </form>\r\n\r\n  <br />\r\n  <div *ngIf=\"statusCode; else processing\">\r\n    <div *ngIf=\"statusCode === 201\" [ngClass]=\"'success'\">\r\n      Planning coupe ajouté.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 409\" [ngClass]=\"'success'\">\r\n      Planning coupe déjà ajouté.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 200\" [ngClass]=\"'success'\">\r\n      Planning coupe modifié.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 204\" [ngClass]=\"'success'\">\r\n      Planning coupe supprimé.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 500\" [ngClass]=\"'error'\">\r\n      Erreur Serveur.\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-info\" (click)=\"resetForm()\">Refraîchir</button>\r\n  <ng-template #processing>\r\n    <img *ngIf=\"requestProcessing\" src=\"assets/images/loading.gif\">\r\n  </ng-template>\r\n</div>\r\n\r\n<div *ngIf=\"cutPlannings != null && cutPlannings.length > 0\">\r\n<h3>Détails du planning coupe</h3>\r\n\r\n<table mdbTable class=\"table table-border\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"text-center\">Date d'export</th>\r\n      <th class=\"text-center\">Semaine</th>\r\n      <th class=\"text-center\">Client</th>\r\n      <th class=\"text-center\">Modèle</th>\r\n      <th class=\"text-center\">Article</th>\r\n      <th class=\"text-center\">Num Commande</th>\r\n      <th class=\"text-center\">Quantité</th>\r\n      <th class=\"text-center\">Rendement</th>\r\n      <th class=\"text-center\">Effectif</th>\r\n      <th class=\"text-center\">Taux d'absentéisme</th>\r\n      <th></th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr mdbTableCol *ngFor=\"let cutPlanning of cutPlannings | paginate: { itemsPerPage: 5, currentPage: p }\">\r\n      <td>{{cutPlanning.exportDate  | date: 'dd/MM/yyyy'}}</td>\r\n      <td>{{cutPlanning.planningWeek}}</td>\r\n      <td>{{cutPlanning.client}}</td>\r\n      <td>{{cutPlanning.model}}</td>\r\n      <td>{{cutPlanning.article}}</td>\r\n      <td>{{cutPlanning.commandNumber}}</td>\r\n      <td>{{cutPlanning.quantity}}</td>\r\n      <td>{{cutPlanning.efficiency}}</td>\r\n      <td>{{cutPlanning.effective}}</td>\r\n      <td>{{cutPlanning.absenteeismRate}}</td>\r\n      <td><button type=\"button\" class=\"btn btn-info\" (click)=\"loadCutPlanningToEdit(cutPlanning.id)\">Modifier</button> </td>\r\n      <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCutPlanning(cutPlanning.id)\">Supprimer</button></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n<!-- <div alt=\"Max-width 100%\">\r\n\r\n  <mat-table [dataSource]=\"dataSource\">\r\n    <ng-container matColumnDef=\"Date Export\">\r\n      <mat-header-cell *matHeaderCellDef> Date Export </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let cutPlanning\"> {{cutPlanning.exportDate | date: 'dd/MM/yyyy'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Semaine\">\r\n      <mat-header-cell *matHeaderCellDef> Semaine </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let cutPlanning\"> {{cutPlanning.planningWeek}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Client\">\r\n      <mat-header-cell *matHeaderCellDef> Client </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let cutPlanning\"> {{cutPlanning.client}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Modèle\">\r\n      <mat-header-cell *matHeaderCellDef> Modèle </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let cutPlanning\"> {{cutPlanning.model}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Article\">\r\n      <mat-header-cell *matHeaderCellDef> Article </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let cutPlanning\"> {{cutPlanning.article}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Numéro Commande\">\r\n        <mat-header-cell *matHeaderCellDef> Numéro Commande </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let cutPlanning\"> {{cutPlanning.commandNumber}} </mat-cell>\r\n      </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Quantité\">\r\n      <mat-header-cell *matHeaderCellDef> Quantité </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let cutPlanning\"> {{cutPlanning.quantity}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Rendement\">\r\n      <mat-header-cell *matHeaderCellDef> Rendement </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let cutPlanning\"> {{cutPlanning.efficiency}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Effectif\">\r\n      <mat-header-cell *matHeaderCellDef> Effectif </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let cutPlanning\"> {{cutPlanning.effective}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Taux Absentéisme\">\r\n      <mat-header-cell *matHeaderCellDef> Taux Absentéisme </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let cutPlanning\"> {{cutPlanning.absenteeismRate}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"edit\">\r\n      <mat-header-cell *matHeaderCellDef> edit </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> <button mat-button (click)=\"loadCutPlanningToEdit(order.id)\">Edit</button> </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"delete\">\r\n      <mat-header-cell *matHeaderCellDef> delete </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> <button mat-button (click)=\"deleteCutPlanning(order.id)\">Delete</button> </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let order; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator [length]=\"dataSource.data.length\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div> -->\r\n</div>\r\n\r\n<div>\r\n  <div class=\"d-inline col\">\r\n    <button class=\"btn btn-success\" (click)=\"exportAsXLSX()\">Télécharger le planning coupe</button>\r\n  </div>\r\n</div>\r\n<table class=\"table table-bordered\" #table>\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\"></th>\r\n      <th scope=\"col\">Lundi</th>\r\n      <th scope=\"col\">Mardi</th>\r\n      <th scope=\"col\">Mercredi</th>\r\n      <th scope=\"col\">Jeudi</th>\r\n      <th scope=\"col\">Vendredi</th>\r\n      <th scope=\"col\">Samedi</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <th scope=\"row\">07:15-07:45</th>\r\n      <td>{{weekWorkTable[0]}}</td>\r\n      <td>{{weekWorkTable[17]}}</td>\r\n      <td>{{weekWorkTable[34]}}</td>\r\n      <td>{{weekWorkTable[51]}}</td>\r\n      <td>{{weekWorkTable[68]}}</td>\r\n      <td>{{weekWorkTable[85]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">07:45-08:15</th>\r\n      <td>{{weekWorkTable[1]}}</td>\r\n      <td>{{weekWorkTable[18]}}</td>\r\n      <td>{{weekWorkTable[35]}}</td>\r\n      <td>{{weekWorkTable[52]}}</td>\r\n      <td>{{weekWorkTable[69]}}</td>\r\n      <td>{{weekWorkTable[86]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">08:15-08:45</th>\r\n      <td>{{weekWorkTable[2]}}</td>\r\n      <td>{{weekWorkTable[19]}}</td>\r\n      <td>{{weekWorkTable[36]}}</td>\r\n      <td>{{weekWorkTable[53]}}</td>\r\n      <td>{{weekWorkTable[70]}}</td>\r\n      <td>{{weekWorkTable[87]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">08:45-09:15</th>\r\n      <td>{{weekWorkTable[3]}}</td>\r\n      <td>{{weekWorkTable[20]}}</td>\r\n      <td>{{weekWorkTable[37]}}</td>\r\n      <td>{{weekWorkTable[54]}}</td>\r\n      <td>{{weekWorkTable[71]}}</td>\r\n      <td>{{weekWorkTable[88]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">09:15-09:45</th>\r\n      <td>{{weekWorkTable[4]}}</td>\r\n      <td>{{weekWorkTable[21]}}</td>\r\n      <td>{{weekWorkTable[38]}}</td>\r\n      <td>{{weekWorkTable[55]}}</td>\r\n      <td>{{weekWorkTable[72]}}</td>\r\n      <td>{{weekWorkTable[89]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">09:45-10:15</th>\r\n      <td>{{weekWorkTable[5]}}</td>\r\n      <td>{{weekWorkTable[22]}}</td>\r\n      <td>{{weekWorkTable[39]}}</td>\r\n      <td>{{weekWorkTable[56]}}</td>\r\n      <td>{{weekWorkTable[73]}}</td>\r\n      <td>{{weekWorkTable[90]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">10:15-10:45</th>\r\n      <td>{{weekWorkTable[6]}}</td>\r\n      <td>{{weekWorkTable[23]}}</td>\r\n      <td>{{weekWorkTable[40]}}</td>\r\n      <td>{{weekWorkTable[57]}}</td>\r\n      <td>{{weekWorkTable[74]}}</td>\r\n      <td>{{weekWorkTable[91]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">10:45-11:15</th>\r\n      <td>{{weekWorkTable[7]}}</td>\r\n      <td>{{weekWorkTable[24]}}</td>\r\n      <td>{{weekWorkTable[41]}}</td>\r\n      <td>{{weekWorkTable[58]}}</td>\r\n      <td>{{weekWorkTable[75]}}</td>\r\n      <td>{{weekWorkTable[92]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">11:15-11:45</th>\r\n      <td>{{weekWorkTable[8]}}</td>\r\n      <td>{{weekWorkTable[25]}}</td>\r\n      <td>{{weekWorkTable[42]}}</td>\r\n      <td>{{weekWorkTable[59]}}</td>\r\n      <td>{{weekWorkTable[76]}}</td>\r\n      <td>{{weekWorkTable[93]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\"></th>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td>{{weekWorkTable[94]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">12:30-13:00</th>\r\n      <td>{{weekWorkTable[9]}}</td>\r\n      <td>{{weekWorkTable[26]}}</td>\r\n      <td>{{weekWorkTable[43]}}</td>\r\n      <td>{{weekWorkTable[60]}}</td>\r\n      <td>{{weekWorkTable[77]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">13:00-13:30</th>\r\n      <td>{{weekWorkTable[10]}}</td>\r\n      <td>{{weekWorkTable[27]}}</td>\r\n      <td>{{weekWorkTable[44]}}</td>\r\n      <td>{{weekWorkTable[61]}}</td>\r\n      <td>{{weekWorkTable[78]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">13:30-14:00</th>\r\n      <td>{{weekWorkTable[11]}}</td>\r\n      <td>{{weekWorkTable[28]}}</td>\r\n      <td>{{weekWorkTable[45]}}</td>\r\n      <td>{{weekWorkTable[62]}}</td>\r\n      <td>{{weekWorkTable[79]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">14:00-14:30</th>\r\n      <td>{{weekWorkTable[12]}}</td>\r\n      <td>{{weekWorkTable[29]}}</td>\r\n      <td>{{weekWorkTable[46]}}</td>\r\n      <td>{{weekWorkTable[63]}}</td>\r\n      <td>{{weekWorkTable[80]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">14:30-15:00</th>\r\n      <td>{{weekWorkTable[13]}}</td>\r\n      <td>{{weekWorkTable[30]}}</td>\r\n      <td>{{weekWorkTable[47]}}</td>\r\n      <td>{{weekWorkTable[64]}}</td>\r\n      <td>{{weekWorkTable[81]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">15:00-15:30</th>\r\n      <td>{{weekWorkTable[14]}}</td>\r\n      <td>{{weekWorkTable[31]}}</td>\r\n      <td>{{weekWorkTable[48]}}</td>\r\n      <td>{{weekWorkTable[65]}}</td>\r\n      <td>{{weekWorkTable[82]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">15:30-16:00</th>\r\n      <td>{{weekWorkTable[15]}}</td>\r\n      <td>{{weekWorkTable[32]}}</td>\r\n      <td>{{weekWorkTable[49]}}</td>\r\n      <td>{{weekWorkTable[66]}}</td>\r\n      <td>{{weekWorkTable[83]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">16:00-16:30</th>\r\n      <td>{{weekWorkTable[16]}}</td>\r\n      <td>{{weekWorkTable[33]}}</td>\r\n      <td>{{weekWorkTable[50]}}</td>\r\n      <td>{{weekWorkTable[67]}}</td>\r\n      <td>{{weekWorkTable[84]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\"></th>\r\n      <td scope=\"col\" colspan=\"7\"><span *ngIf=\"numberOfNextWeekTasks > 0\">Vous avez {{numberOfNextWeekTasks}} tâches pour la semaine prochaine</span></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/cut-planning/cut-planning.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cut-planning/cut-planning.component.ts ***!
  \********************************************************/
/*! exports provided: CutPlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CutPlanningComponent", function() { return CutPlanningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _excel_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../excel/excel.service */ "./src/app/excel/excel.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _cut_planning_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cut-planning.service */ "./src/app/cut-planning/cut-planning.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);








var CutPlanningComponent = /** @class */ (function () {
    // defaultExportDate: Date;
    function CutPlanningComponent(cutPlanningService, formBuilder, excelService) {
        this.cutPlanningService = cutPlanningService;
        this.formBuilder = formBuilder;
        this.excelService = excelService;
        // @ViewChild(MatPaginator) paginator: MatPaginator;
        // dataSource: MatTableDataSource<CutPlanning>;
        this.displayedColumns = ['Date Export', 'Semaine', 'Client', 'Modèle', 'Article', 'Numéro Commande', 'Quantité', 'Rendement', 'Effectif', 'Taux Absentéisme', 'edit', 'delete'];
        this.cutPlannings = [];
        this.requestProcessing = false;
        this.cutPlanningIdToUpdate = null;
        this.processValidation = false;
        this.weekWorkTable = [];
        this.nextWeekTasksList = [];
        this.numberOfNextWeekTasks = 0;
        this.cutPlanningForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            exportDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            planningWeek: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            client: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            model: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            article: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            commandNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            effective: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            absenteeismRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    CutPlanningComponent.prototype.ngOnInit = function () {
        // this.dataSource = new MatTableDataSource(this.cutPlannings);
        // this.dataSource.data = [];
        this.getAllCutPlannings();
        this.getAllWeekWorks();
        // this.defaultExportDate = new Date();
    };
    CutPlanningComponent.prototype.onCutPlanningFormSubmit = function () {
        var _this = this;
        this.processValidation = true;
        if (this.cutPlanningForm.invalid) {
            return;
        }
        this.preProcessConfigurations();
        var cutPlanning = this.cutPlanningForm.value;
        if (this.cutPlanningIdToUpdate == null) {
            this.cutPlanningService.createCutPlanning(cutPlanning)
                .subscribe(function (successCode) {
                _this.statusCode = successCode;
                _this.backToCreateCutPlanning();
                setTimeout(function () {
                    _this.getAllCutPlannings();
                    _this.getAllWeekWorks();
                }, 1000);
            }, function (errorCode) { return _this.statusCode = errorCode; });
        }
        else {
            cutPlanning.id = this.cutPlanningIdToUpdate;
            this.cutPlanningService.updateCutPlanning(cutPlanning)
                .subscribe(function (successCode) {
                _this.statusCode = successCode;
                _this.getAllCutPlannings();
                _this.getAllWeekWorks();
                _this.backToCreateCutPlanning();
                setTimeout(function () {
                    _this.getAllCutPlannings();
                    _this.getAllWeekWorks();
                }, 1000);
            }, function (errorCode) { return _this.statusCode = errorCode; });
        }
    };
    CutPlanningComponent.prototype.resetForm = function () {
        this.cutPlanningForm.reset();
        for (var i in this.cutPlanningForm.controls) {
            this.cutPlanningForm.controls[i].setErrors(null);
        }
    };
    CutPlanningComponent.prototype.backToCreateCutPlanning = function () {
        // this.cutPlanningForm.reset();
        this.processValidation = false;
        this.cutPlanningIdToUpdate = null;
    };
    CutPlanningComponent.prototype.preProcessConfigurations = function () {
        this.statusCode = null;
        this.requestProcessing = true;
    };
    CutPlanningComponent.prototype.getAllCutPlannings = function () {
        var _this = this;
        this.cutPlanningService.getAllCutPlannings()
            .subscribe(function (data) {
            _this.cutPlannings = data;
            // this.dataSource = new MatTableDataSource(this.cutPlannings);
            // this.dataSource.paginator = this.paginator;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    CutPlanningComponent.prototype.getAllWeekWorks = function () {
        var _this = this;
        this.cutPlanningService.getAllWeekWorks()
            .subscribe(function (data) {
            _this.weekWorks = data;
            if (_this.weekWorks.nextWeekTasks == null || _this.weekWorks.nextWeekTasks == undefined) {
                _this.weekWorks.nextWeekTasks = [];
            }
            if (_this.weekWorks.currentWeekTasks == null || _this.weekWorks.currentWeekTasks == undefined) {
                _this.weekWorks.currentWeekTasks = [];
            }
            if (_this.weekWorks.currentWeekTasks.length == 95 && _this.weekWorks.nextWeekTasks.length > 0) {
                _this.weekWorkTable = _this.weekWorks.currentWeekTasks.concat(_this.weekWorks.nextWeekTasks);
                _this.numberOfNextWeekTasks = _this.weekWorks.nextWeekTasks.length;
            }
            else {
                _this.weekWorkTable = _this.weekWorks.currentWeekTasks.slice();
                _this.numberOfNextWeekTasks = 0;
            }
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    CutPlanningComponent.prototype.loadCutPlanningToEdit = function (cutPlanningId) {
        var _this = this;
        this.preProcessConfigurations();
        this.cutPlanningService.getCutPlanningById(cutPlanningId)
            .subscribe(function (cutPlanning) {
            _this.cutPlanningIdToUpdate = cutPlanning.id;
            _this.cutPlanningForm.setValue({
                exportDate: cutPlanning.exportDate.toString().slice(0, 10),
                planningWeek: cutPlanning.planningWeek,
                client: cutPlanning.client,
                model: cutPlanning.model,
                article: cutPlanning.article,
                commandNumber: cutPlanning.commandNumber,
                quantity: cutPlanning.quantity,
                efficiency: cutPlanning.efficiency,
                effective: cutPlanning.effective,
                absenteeismRate: cutPlanning.absenteeismRate
            });
            _this.processValidation = true;
            _this.requestProcessing = false;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    CutPlanningComponent.prototype.deleteCutPlanning = function (cutPlanningId) {
        var _this = this;
        this.preProcessConfigurations();
        this.cutPlanningService.deleteCutPlanningById(cutPlanningId)
            .subscribe(function (successCode) {
            _this.statusCode = successCode;
            _this.statusCode = 204;
            _this.backToCreateCutPlanning();
            setTimeout(function () {
                _this.getAllCutPlannings();
                _this.getAllWeekWorks();
            }, 1000);
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    CutPlanningComponent.prototype.searchCutPlannings = function (criteria) {
        var _this = this;
        this.cutPlanningService.searchCutPlannings(criteria)
            .subscribe(function (data) { return _this.cutPlannings = data; }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    CutPlanningComponent.prototype.exportAsXLSX = function () {
        this.getAllWeekWorks();
        this.getAllCutPlannings();
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].table_to_sheet(this.table.nativeElement);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](wb, 'PlanningCoupe - ' + new Date().toString().slice(0, 24) + '.xlsx');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CutPlanningComponent.prototype, "table", void 0);
    CutPlanningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cut-planning',
            template: __webpack_require__(/*! ./cut-planning.component.html */ "./src/app/cut-planning/cut-planning.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cut_planning_service__WEBPACK_IMPORTED_MODULE_6__["CutPlanningService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _excel_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], CutPlanningComponent);
    return CutPlanningComponent;
}());



/***/ }),

/***/ "./src/app/cut-planning/cut-planning.service.ts":
/*!******************************************************!*\
  !*** ./src/app/cut-planning/cut-planning.service.ts ***!
  \******************************************************/
/*! exports provided: CutPlanningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CutPlanningService", function() { return CutPlanningService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");


// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';


// import { map, filter, switchMap } from 'rxjs/operators';



var CutPlanningService = /** @class */ (function () {
    //Create constructor to get Http instance
    function CutPlanningService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        //URL for CRUD operations
        this.cutPlanningUrl = "http://localhost:8080/cut_planning";
        this.contentTypeHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: this.contentTypeHeader });
    }
    CutPlanningService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.status);
    };
    CutPlanningService.prototype.createCutPlanning = function (cutPlanning) {
        return this.http.post(this.cutPlanningUrl, cutPlanning, this.options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    CutPlanningService.prototype.getAllCutPlannings = function () {
        return this.http.get(this.cutPlanningUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CutPlanningService.prototype.getAllWeekWorks = function () {
        return this.http.get(this.cutPlanningUrl + "/weekwork")
            .map(this.extractData)
            .catch(this.handleError);
    };
    CutPlanningService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    CutPlanningService.prototype.updateCutPlanning = function (cutPlanning) {
        return this.http.put(this.cutPlanningUrl, cutPlanning, this.options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    CutPlanningService.prototype.getCutPlanningById = function (cutPlanningId) {
        console.log(this.cutPlanningUrl + "/" + cutPlanningId);
        return this.http.get(this.cutPlanningUrl + "/" + cutPlanningId, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CutPlanningService.prototype.deleteCutPlanningById = function (cutPlanningId) {
        return this.http.delete(this.cutPlanningUrl + "/" + cutPlanningId, this.options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    CutPlanningService.prototype.searchCutPlannings = function (criteria) {
        return this.http.post(this.cutPlanningUrl + "/search", criteria, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CutPlanningService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CutPlanningService);
    return CutPlanningService;
}());



/***/ }),

/***/ "./src/app/excel/excel.service.ts":
/*!****************************************!*\
  !*** ./src/app/excel/excel.service.ts ***!
  \****************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        // Deleting id element from entity (Order)
        json.forEach(function (element) {
            delete element.id;
        });
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        console.log('worksheet', worksheet);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div>\r\n    <img src=\"assets/images/maco.PNG\">\r\n</div>\r\n\r\n<h2>Connexion</h2>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n    <div class=\"form-group col-5\">\r\n        <label for=\"username\">Utilisateur</label>\r\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && login.username.errors }\" />\r\n        <div *ngIf=\"submitted && login.username.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"login.username.errors.required\">Username is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group col-5\">\r\n        <label for=\"password\">Mot de passe</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && login.password.errors }\" />\r\n        <div *ngIf=\"submitted && login.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"login.password.errors.required\">Password is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Se connecter</button>\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n    </div>\r\n</form>\r\n<div *ngIf=\"statusCode == 404\">\r\n    {{message}}\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, formBuilder, router) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    // convenience getter for easy access to form fields
    LoginComponent.prototype.login = function () {
        var _this = this;
        var login = this.loginForm.value;
        this.loginService.login(login).subscribe(function (successCode) {
            _this.statusCode = successCode;
            _this.loginForm.reset();
            _this.router.navigateByUrl('/success');
            _this.message = "";
        }, function (errorCode) {
            _this.statusCode = 404;
            _this.message = "Ce login n'est pas autorisé.";
        });
    };
    LoginComponent.prototype.onSubmit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");





var LoginService = /** @class */ (function () {
    function LoginService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.loginUrl = "http://localhost:8080/production/login";
        this.contentTypeHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: this.contentTypeHeader });
    }
    LoginService.prototype.login = function (login) {
        return this.http.post(this.loginUrl, login, this.options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    LoginService.prototype.logout = function () {
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    LoginService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.status);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-dark bg-dark mb-5\">\r\n    <a class=\"navbar-brand\" routerLink=\"/success\">Maco</a>\r\n    <div class=\"navbar-expand mr-auto\">\r\n      <div class=\"navbar-nav\">\r\n        <!-- <a class=\"nav-item nav-link\" routerLink=\"/order\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\r\n          true}\">Fichier</a> -->\r\n          <a class=\"nav-item nav-link\" routerLink=\"/success\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\r\n            true}\">Accueil</a>\r\n          <a class=\"nav-item nav-link\" routerLink=\"/order\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\r\n            true}\">Ajouter</a>\r\n          <a class=\"nav-item nav-link\" routerLink=\"/apropos\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\r\n              true}\">A propos</a>\r\n      </div>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-danger\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">404 not found</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      404 not found\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/orders/order.component.html":
/*!*********************************************!*\
  !*** ./src/app/orders/order.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Commandes</h1>\r\n<app-navbar></app-navbar>\r\n\r\n<h5>Ajouter des commandes en masse :</h5>\r\n<form [formGroup]=\"dataFilesForm\">\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-sm-6\">\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"path\" placeholder=\"Fournir le chemin du dossier contenant vos commandes\"\r\n        [(ngModel)]=\"providedInput\">\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"sendPath()\" [disabled]=\"isInvalid()\">\r\n    Fournir le chemin\r\n  </button>\r\n</form>\r\n<div *ngIf=\"statusCode; else processing\">\r\n  <div *ngIf=\"statusCode === 201\" [ngClass]=\"'success'\">\r\n    Vos fichiers ont été traités.\r\n  </div>\r\n  <div *ngIf=\"statusCode === 500\" [ngClass]=\"'error'\">\r\n    Erreur Serveur.\r\n  </div>\r\n</div>\r\n<ng-template #processing>\r\n  <img *ngIf=\"requestProcessing\" src=\"assets/images/loading.gif\">\r\n</ng-template>\r\n\r\n<div *ngIf=\"files.length > 0\">\r\n<h5>Liste des fichiers traités </h5>\r\n<table mdbTable class=\"table table-border\">\r\n  <thead>\r\n    <tr>\r\n      <th>Nom de fichier</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr mdbTableCol *ngFor=\"let file of files\">\r\n      <td>{{file}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n\r\n<h5>Recherche des commandes</h5>\r\n\r\n<form class=\"form-inline md-form form-sm\" [formGroup]=\"searchOrderForm\" (ngSubmit)=\"onSearchOrderFormSubmit()\">\r\n    <div class=\"d-inline form-group\">\r\n        <label>Client</label>\r\n        <input type=\"text\" formControlName=\"client\" class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"d-inline form-group\">\r\n        <label>Modèle</label>\r\n        <input type=\"text\" formControlName=\"model\" class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"d-inline form-group\">\r\n        <label>article</label>\r\n        <input type=\"text\" formControlName=\"article\" class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"d-inline form-group\">\r\n        <label>Min Confection</label>\r\n        <input type=\"text\" formControlName=\"minConfection\" class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"d-inline form-group\">\r\n        <label>Min Cut</label>\r\n        <input type=\"text\" formControlName=\"minCut\" class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"d-inline form-group\">\r\n      <label> Lancer la recherche </label>\r\n        <button class=\"btn btn-primary\">Rechercher</button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n       \r\n    </div>\r\n</form>\r\n<button class=\"btn btn-info\" (click)=\"refresh()\">Refraîchir</button>\r\n\r\n<h5>Nouvelle commande</h5>\r\n\r\n<div>\r\n  <form [formGroup]=\"orderForm\" (ngSubmit)=\"onOrderFormSubmit()\">\r\n    <table>\r\n      <tr>\r\n        <td><b>Client</b></td>\r\n        <td><input class=\"form-control\" formControlName=\"client\">\r\n          <label *ngIf=\"orderForm.get('client').invalid && processValidation\" [ngClass]=\"'error'\"> Client est\r\n            requis. </label>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td><b>Modèle</b></td>\r\n        <td><input class=\"form-control\" formControlName=\"model\">\r\n          <label *ngIf=\"orderForm.get('model').invalid && processValidation\" [ngClass]=\"'error'\"> Modèle est\r\n            requis. </label>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td><b>Article</b></td>\r\n        <td><input class=\"form-control\" formControlName=\"article\">\r\n          <label *ngIf=\"orderForm.get('article').invalid && processValidation\" [ngClass]=\"'error'\"> Article est\r\n            requis. </label>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n      <tr>\r\n        <td><b>Min Confection</b></td>\r\n        <td><input class=\"form-control\" formControlName=\"minConfection\">\r\n          <label *ngIf=\"orderForm.get('minConfection').invalid && processValidation\" [ngClass]=\"'error'\"> Min Confection est\r\n            requis. </label>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n          <td><b>Min Coupe</b></td>\r\n          <td><input class=\"form-control\" formControlName=\"minCut\">\r\n            <label *ngIf=\"orderForm.get('minCut').invalid && processValidation\" [ngClass]=\"'error'\"> Min Coupe est\r\n              requis. </label>\r\n          </td>\r\n        </tr>\r\n      <tr>\r\n        <td colspan=\"2\">\r\n          <button *ngIf=\"!orderIdToUpdate\" class=\"btn btn-primary\">Ajouter</button>\r\n          <button *ngIf=\"orderIdToUpdate\" class=\"btn btn-info\">Modifier</button>\r\n          <button (click)=\"backToCreateOrder()\" class=\"btn btn-primary\" *ngIf=\"orderIdToUpdate\">Retourner</button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </form>\r\n  <br />\r\n  <div *ngIf=\"statusCode; else processing\">\r\n    <div *ngIf=\"statusCode === 201\" [ngClass]=\"'success'\">\r\n      Commande ajoutée.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 409\" [ngClass]=\"'success'\">\r\n      Commande déjà ajoutée.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 200\" [ngClass]=\"'success'\">\r\n      Commande modifiée.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 204\" [ngClass]=\"'success'\">\r\n      Commande supprimée.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 500\" [ngClass]=\"'error'\">\r\n      Erreur Serveur.\r\n    </div>\r\n  </div>\r\n  <ng-template #processing>\r\n    <img *ngIf=\"requestProcessing\" src=\"assets/images/loading.gif\">\r\n  </ng-template>\r\n</div>\r\n\r\n<table  class=\"table table-border\">\r\n  <thead>\r\n    <tr>\r\n      <th>Client</th>\r\n      <th>Modèle</th>\r\n      <th>Article</th>\r\n      <th>Min Confection</th>\r\n      <th>Min Coupe</th>\r\n      <th></th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let order of orders | paginate: { itemsPerPage: 5, currentPage: p }\">\r\n      <td>{{order.client}}</td>\r\n      <td>{{order.model}}</td>\r\n      <td>{{order.article}}</td>\r\n      <td>{{order.minConfection}}</td>\r\n      <td>{{order.minCut}}</td>\r\n      <td><button class=\"btn btn-info\" type=\"button\" (click)=\"loadOrderToEdit(order.id)\">Modifier</button> </td>\r\n      <td><button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteOrder(order.id)\">Supprimer</button></td>\r\n    </tr>\r\n  </tbody>\r\n  \r\n</table>\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n<!-- <div *ngIf=\"orders != null && orders.length > 0\">\r\n<h5>Détails des commandes</h5>\r\n<div>\r\n  <div class=\"d-inline col\">\r\n    <button (click)=\"exportAsXLSX()\">Télécharger les commandes</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n\r\n  <mat-table [dataSource]=\"dataSource\">\r\n\r\n    <ng-container matColumnDef=\"Client\">\r\n      <mat-header-cell *matHeaderCellDef> Client </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> {{order.client}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Modèle\">\r\n      <mat-header-cell *matHeaderCellDef> Modèle </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> {{order.model}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Article\">\r\n      <mat-header-cell *matHeaderCellDef> Article </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> {{order.article}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Min Confection\">\r\n      <mat-header-cell *matHeaderCellDef> Min Confection </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> {{order.minConfection}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Min Coupe\">\r\n      <mat-header-cell *matHeaderCellDef> Min Coupe </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> {{order.minCut}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"edit\">\r\n      <mat-header-cell *matHeaderCellDef> edit </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> <button mat-button (click)=\"loadOrderToEdit(order.id)\">Edit</button> </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"delete\">\r\n      <mat-header-cell *matHeaderCellDef> delete </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> <button mat-button (click)=\"deleteOrder(order.id)\">Delete</button> </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let order; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/orders/order.component.ts":
/*!*******************************************!*\
  !*** ./src/app/orders/order.component.ts ***!
  \*******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.service */ "./src/app/orders/order.service.ts");
/* harmony import */ var _excel_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../excel/excel.service */ "./src/app/excel/excel.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");







var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, formBuilder, excelService) {
        this.orderService = orderService;
        this.formBuilder = formBuilder;
        this.excelService = excelService;
        // @ViewChild(MatPaginator) paginator: MatPaginator;
        // dataSource: MatTableDataSource<Order>;
        this.orders = [];
        this.requestProcessing = false;
        this.orderIdToUpdate = null;
        this.processValidation = false;
        this.files = [];
        this.displayedColumns = ['Client', 'Modèle', 'Article', 'Min Confection', 'Min Coupe', 'edit', 'delete'];
        this.dataFilesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            client: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            model: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            article: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            minConfection: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            minCut: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.searchOrderForm = this.formBuilder.group({
            client: ['',],
            model: ['',],
            article: ['',],
            minConfection: ['',],
            minCut: ['',]
        });
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.getAllOrders();
    };
    OrderComponent.prototype.ngAfterViewInit = function () {
    };
    OrderComponent.prototype.onOrderFormSubmit = function () {
        var _this = this;
        this.processValidation = true;
        if (this.orderForm.invalid) {
            return;
        }
        this.preProcessConfigurations();
        var order = this.orderForm.value;
        if (this.orderIdToUpdate == null) {
            this.orderService.createOrder(order)
                .subscribe(function (successCode) {
                _this.statusCode = successCode;
                _this.backToCreateOrder();
                setTimeout(function () {
                    _this.getAllOrders();
                }, 1000);
            }, function (errorCode) { return _this.statusCode = errorCode; });
        }
        else {
            order.id = this.orderIdToUpdate;
            this.orderService.updateOrder(order)
                .subscribe(function (successCode) {
                _this.statusCode = successCode;
                _this.getAllOrders();
                _this.backToCreateOrder();
                setTimeout(function () {
                    _this.getAllOrders();
                }, 1000);
            }, function (errorCode) { return _this.statusCode = errorCode; });
        }
    };
    OrderComponent.prototype.backToCreateOrder = function () {
        this.orderForm.reset();
        this.processValidation = false;
        this.orderIdToUpdate = null;
    };
    OrderComponent.prototype.preProcessConfigurations = function () {
        this.statusCode = null;
        this.requestProcessing = true;
    };
    OrderComponent.prototype.sendPath = function () {
        var _this = this;
        this.preProcessConfigurations();
        var dataFiles = this.dataFilesForm.value;
        this.orderService.sendPath(dataFiles).subscribe(function (data) {
            _this.files = data;
            _this.statusCode = 201;
            _this.providedInput = null;
            setTimeout(function () {
                _this.getAllOrders();
            }, 1000);
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    OrderComponent.prototype.isInvalid = function () {
        return this.providedInput == undefined || this.providedInput == "";
    };
    OrderComponent.prototype.getAllOrders = function () {
        var _this = this;
        this.orderService.getAllOrders()
            .subscribe(function (data) {
            _this.orders = data;
            // this.dataSource = new MatTableDataSource(this.orders);
            // this.dataSource.paginator = this.paginator;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    OrderComponent.prototype.loadOrderToEdit = function (orderId) {
        var _this = this;
        this.preProcessConfigurations();
        this.orderService.getOrderById(orderId)
            .subscribe(function (order) {
            _this.orderIdToUpdate = order.id;
            _this.orderForm.setValue({
                client: order.client,
                model: order.model,
                article: order.article,
                minConfection: order.minConfection,
                minCut: order.minCut
            });
            _this.processValidation = true;
            _this.requestProcessing = false;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    OrderComponent.prototype.deleteOrder = function (orderId) {
        var _this = this;
        this.preProcessConfigurations();
        this.orderService.deleteOrderById(orderId)
            .subscribe(function (successCode) {
            _this.statusCode = successCode;
            _this.statusCode = 204;
            _this.backToCreateOrder();
            setTimeout(function () {
                _this.getAllOrders();
            }, 1000);
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    OrderComponent.prototype.searchOrders = function (criteria) {
        var _this = this;
        this.orderService.searchOrders(criteria)
            .subscribe(function (data) { return _this.orders = data; }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    OrderComponent.prototype.onSearchOrderFormSubmit = function () {
        var _this = this;
        this.preProcessConfigurations();
        var searchCriteria = this.searchOrderForm.value;
        if (searchCriteria.client == "") {
            delete searchCriteria.client;
        }
        if (searchCriteria.model == "") {
            delete searchCriteria.model;
        }
        if (searchCriteria.article == "") {
            delete searchCriteria.article;
        }
        if (searchCriteria.minConfection == "") {
            delete searchCriteria.minConfection;
        }
        if (searchCriteria.minCut == "") {
            delete searchCriteria.minCut;
        }
        this.orderService.searchOrders(searchCriteria)
            .subscribe(function (data) { return _this.orders = data; }, function (errorCode) { return _this.statusCode = errorCode; });
        this.requestProcessing = false;
        this.searchOrderForm.reset();
    };
    OrderComponent.prototype.refresh = function () {
        this.searchOrderForm.reset();
    };
    OrderComponent.prototype.exportAsXLSX = function () {
        this.excelService.exportAsExcelFile(this.orders, 'Commandes - ' + new Date().toString().slice(0, 24));
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/orders/order.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _excel_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/orders/order.service.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/order.service.ts ***!
  \*****************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");


// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';


// import { map, filter, switchMap } from 'rxjs/operators';



var OrderService = /** @class */ (function () {
    //Create constructor to get Http instance
    function OrderService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        //URL for CRUD operations
        this.orderUrl = "http://localhost:8080/orders";
        this.datafilesUrl = 'http://localhost:8080/datafile';
        this.contentTypeHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: this.contentTypeHeader });
    }
    OrderService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.status);
    };
    OrderService.prototype.sendPath = function (dataFiles) {
        return this.http.post(this.datafilesUrl, dataFiles, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.createOrder = function (order) {
        return this.http.post(this.orderUrl, order, this.options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    OrderService.prototype.getAllOrders = function () {
        return this.http.get(this.orderUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    OrderService.prototype.updateOrder = function (order) {
        return this.http.put(this.orderUrl, order, this.options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    OrderService.prototype.getOrderById = function (orderId) {
        console.log(this.orderUrl + "/" + orderId);
        return this.http.get(this.orderUrl + "/" + orderId, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.deleteOrderById = function (orderId) {
        return this.http.delete(this.orderUrl + "/" + orderId, this.options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    OrderService.prototype.searchOrders = function (criteria) {
        return this.http.post(this.orderUrl + "/search", criteria, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.clearOrders = function () {
        return this.http.delete(this.orderUrl + "/delete_orders", this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/production-planning/production-planning.component.html":
/*!************************************************************************!*\
  !*** ./src/app/production-planning/production-planning.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Planning Production</h3>\r\n\r\n<app-navbar></app-navbar>\r\n\r\n<h1>Nouveau planning production</h1>\r\n<div>\r\n  <form class=\"container\" [formGroup]=\"prodPlanningForm\" (ngSubmit)=\"onProdPlanningFormSubmit()\">\r\n    <table>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6\">\r\n          <tr>\r\n            <td><b>Date d'export</b></td>\r\n            <td><input type=\"date\" class=\"form-control\" formControlName=\"exportDate\">\r\n              <label *ngIf=\"prodPlanningForm.get('exportDate').invalid && processValidation\" [ngClass]=\"'error'\"> Date\r\n                d'export est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><b>Semaine</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"planningWeek\">\r\n              <label *ngIf=\"prodPlanningForm.get('planningWeek').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                Semaine\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><b>Client</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"client\">\r\n              <label *ngIf=\"prodPlanningForm.get('client').invalid && processValidation\" [ngClass]=\"'error'\"> Client\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n          <tr>\r\n            <td><b>Modèle</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"model\">\r\n              <label *ngIf=\"prodPlanningForm.get('model').invalid && processValidation\" [ngClass]=\"'error'\"> Modèle\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><b>Article</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"article\">\r\n              <label *ngIf=\"prodPlanningForm.get('article').invalid && processValidation\" [ngClass]=\"'error'\"> Article\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n            <tr>\r\n                <td><b>Numéro de Commande</b></td>\r\n                <td><input class=\"form-control\" formControlName=\"commandNumber\">\r\n                  <label *ngIf=\"prodPlanningForm.get('commandNumber').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                    Numéro de commande est\r\n                    requis. </label>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td><b>Responsable Chaine</b></td>\r\n                <td><input class=\"form-control\" formControlName=\"chainResponsible\">\r\n                  <label *ngIf=\"prodPlanningForm.get('chainResponsible').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                    Responsable chaine est\r\n                    requis. </label>\r\n                </td>\r\n              </tr>\r\n            <tr>\r\n                <td><b>Quantité</b></td>\r\n                <td><input class=\"form-control\" formControlName=\"quantity\">\r\n                  <label *ngIf=\"prodPlanningForm.get('quantity').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                    Quantité est\r\n                    requis. </label>\r\n                </td>\r\n              </tr>\r\n          <tr>\r\n            <td><b>Rendement</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"efficiency\">\r\n              <label *ngIf=\"prodPlanningForm.get('efficiency').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                Rendement\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><b>Effectif</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"effective\">\r\n              <label *ngIf=\"prodPlanningForm.get('effective').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                Effectif\r\n                est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><b>Taux d'absentéisme</b></td>\r\n            <td><input class=\"form-control\" formControlName=\"absenteeismRate\">\r\n              <label *ngIf=\"prodPlanningForm.get('absenteeismRate').invalid && processValidation\" [ngClass]=\"'error'\">\r\n                Taux\r\n                d'absentéisme est\r\n                requis. </label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\">\r\n              <button class=\"btn btn-primary\" *ngIf=\"!prodPlanningIdToUpdate\">Ajouter</button>\r\n              <button class=\"btn btn-info\" *ngIf=\"prodPlanningIdToUpdate\">Modifier</button>\r\n              <button class=\"btn btn-primary\" (click)=\"backToCreateProdPlanning()\" *ngIf=\"prodPlanningIdToUpdate\">Retourner</button>\r\n            </td>\r\n          </tr>\r\n        </div>\r\n      </div>\r\n    </table>\r\n  </form>\r\n\r\n  <br />\r\n  <div *ngIf=\"statusCode; else processing\">\r\n    <div *ngIf=\"statusCode === 201\" [ngClass]=\"'success'\">\r\n      Planning production ajouté.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 409\" [ngClass]=\"'success'\">\r\n      Planning production déjà ajouté.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 200\" [ngClass]=\"'success'\">\r\n      Planning production modifié.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 204\" [ngClass]=\"'success'\">\r\n      Planning production supprimé.\r\n    </div>\r\n    <div *ngIf=\"statusCode === 500\" [ngClass]=\"'error'\">\r\n      Erreur Serveur.\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-info\" (click)=\"resetForm()\">Refraîchir</button>\r\n  <ng-template #processing>\r\n    <img *ngIf=\"requestProcessing\" src=\"assets/images/loading.gif\">\r\n  </ng-template>\r\n</div>\r\n\r\n<div *ngIf=\"prodPlannings != null && prodPlannings.length > 0\">\r\n<h3>Détails du planning production</h3>\r\n<table mdbTable class=\"table table-border\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"text-center\">Date d'export</th>\r\n      <th class=\"text-center\">Semaine</th>\r\n      <th class=\"text-center\">Client</th>\r\n      <th class=\"text-center\">Modèle</th>\r\n      <th class=\"text-center\">Article</th>\r\n      <th class=\"text-center\">Num Commande</th>\r\n      <th class=\"text-center\">Responsable Chaine</th>\r\n      <th class=\"text-center\">Quantité</th>\r\n      <th class=\"text-center\">Rendement</th>\r\n      <th class=\"text-center\">Effectif</th>\r\n      <th class=\"text-center\">Taux d'absentéisme</th>\r\n      <th></th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr mdbTableCol *ngFor=\"let prodPlanning of prodPlannings | paginate: { itemsPerPage: 5, currentPage: p }\">\r\n      <td>{{prodPlanning.exportDate  | date: 'dd/MM/yyyy'}}</td>\r\n      <td>{{prodPlanning.planningWeek}}</td>\r\n      <td>{{prodPlanning.client}}</td>\r\n      <td>{{prodPlanning.model}}</td>\r\n      <td>{{prodPlanning.article}}</td>\r\n      <td>{{prodPlanning.commandNumber}}</td>\r\n      <td>{{prodPlanning.chainResponsible}}</td>\r\n      <td>{{prodPlanning.quantity}}</td>\r\n      <td>{{prodPlanning.efficiency}}</td>\r\n      <td>{{prodPlanning.effective}}</td>\r\n      <td>{{prodPlanning.absenteeismRate}}</td>\r\n      <td><button class=\"btn btn-info\" type=\"button\" (click)=\"loadProdPlanningToEdit(prodPlanning.id)\">Modifier</button> </td>\r\n      <td><button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteProdPlanning(prodPlanning.id)\">Supprimer</button></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n<!-- <div alt=\"Max-width 100%\">\r\n\r\n  <mat-table [dataSource]=\"dataSource\">\r\n    <ng-container matColumnDef=\"Date Export\">\r\n      <mat-header-cell *matHeaderCellDef> Date Export </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.exportDate | date: 'dd/MM/yyyy'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Semaine\">\r\n      <mat-header-cell *matHeaderCellDef> Semaine </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.planningWeek}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Client\">\r\n      <mat-header-cell *matHeaderCellDef> Client </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.client}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Modèle\">\r\n      <mat-header-cell *matHeaderCellDef> Modèle </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.model}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Article\">\r\n      <mat-header-cell *matHeaderCellDef> Article </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.article}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Numéro Commande\">\r\n        <mat-header-cell *matHeaderCellDef> Numéro Commande </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.commandNumber}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Resp Chaine\">\r\n        <mat-header-cell *matHeaderCellDef> Resp Chaine </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.chainResponsible}} </mat-cell>\r\n      </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Quantité\">\r\n      <mat-header-cell *matHeaderCellDef> Quantité </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.quantity}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Rendement\">\r\n      <mat-header-cell *matHeaderCellDef> Rendement </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.efficiency}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Effectif\">\r\n      <mat-header-cell *matHeaderCellDef> Effectif </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.effective}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Taux Absentéisme\">\r\n      <mat-header-cell *matHeaderCellDef> Taux Absentéisme </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let prodPlanning\"> {{prodPlanning.absenteeismRate}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"edit\">\r\n      <mat-header-cell *matHeaderCellDef> edit </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> <button mat-button (click)=\"loadProdPlanningToEdit(order.id)\">Edit</button> </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"delete\">\r\n      <mat-header-cell *matHeaderCellDef> delete </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let order\"> <button mat-button (click)=\"deleteProdPlanning(order.id)\">Delete</button> </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let order; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator [length]=\"dataSource.data.length\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div> -->\r\n</div>\r\n\r\n<div>\r\n  <div class=\"d-inline col\">\r\n    <button class=\"btn btn-success\" (click)=\"exportAsXLSX()\">Télécharger le planning production</button>\r\n  </div>\r\n</div>\r\n<table class=\"table table-bordered\" #table>\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\"></th>\r\n      <th scope=\"col\">Lundi</th>\r\n      <th scope=\"col\">Mardi</th>\r\n      <th scope=\"col\">Mercredi</th>\r\n      <th scope=\"col\">Jeudi</th>\r\n      <th scope=\"col\">Vendredi</th>\r\n      <th scope=\"col\">Samedi</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <th scope=\"row\">07:15-07:45</th>\r\n      <td>{{prodWeekWorkTable[0]}}</td>\r\n      <td>{{prodWeekWorkTable[17]}}</td>\r\n      <td>{{prodWeekWorkTable[34]}}</td>\r\n      <td>{{prodWeekWorkTable[51]}}</td>\r\n      <td>{{prodWeekWorkTable[68]}}</td>\r\n      <td>{{prodWeekWorkTable[85]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">07:45-08:15</th>\r\n      <td>{{prodWeekWorkTable[1]}}</td>\r\n      <td>{{prodWeekWorkTable[18]}}</td>\r\n      <td>{{prodWeekWorkTable[35]}}</td>\r\n      <td>{{prodWeekWorkTable[52]}}</td>\r\n      <td>{{prodWeekWorkTable[69]}}</td>\r\n      <td>{{prodWeekWorkTable[86]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">08:15-08:45</th>\r\n      <td>{{prodWeekWorkTable[2]}}</td>\r\n      <td>{{prodWeekWorkTable[19]}}</td>\r\n      <td>{{prodWeekWorkTable[36]}}</td>\r\n      <td>{{prodWeekWorkTable[53]}}</td>\r\n      <td>{{prodWeekWorkTable[70]}}</td>\r\n      <td>{{prodWeekWorkTable[87]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">08:45-09:15</th>\r\n      <td>{{prodWeekWorkTable[3]}}</td>\r\n      <td>{{prodWeekWorkTable[20]}}</td>\r\n      <td>{{prodWeekWorkTable[37]}}</td>\r\n      <td>{{prodWeekWorkTable[54]}}</td>\r\n      <td>{{prodWeekWorkTable[71]}}</td>\r\n      <td>{{prodWeekWorkTable[88]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">09:15-09:45</th>\r\n      <td>{{prodWeekWorkTable[4]}}</td>\r\n      <td>{{prodWeekWorkTable[21]}}</td>\r\n      <td>{{prodWeekWorkTable[38]}}</td>\r\n      <td>{{prodWeekWorkTable[55]}}</td>\r\n      <td>{{prodWeekWorkTable[72]}}</td>\r\n      <td>{{prodWeekWorkTable[89]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">09:45-10:15</th>\r\n      <td>{{prodWeekWorkTable[5]}}</td>\r\n      <td>{{prodWeekWorkTable[22]}}</td>\r\n      <td>{{prodWeekWorkTable[39]}}</td>\r\n      <td>{{prodWeekWorkTable[56]}}</td>\r\n      <td>{{prodWeekWorkTable[73]}}</td>\r\n      <td>{{prodWeekWorkTable[90]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">10:15-10:45</th>\r\n      <td>{{prodWeekWorkTable[6]}}</td>\r\n      <td>{{prodWeekWorkTable[23]}}</td>\r\n      <td>{{prodWeekWorkTable[40]}}</td>\r\n      <td>{{prodWeekWorkTable[57]}}</td>\r\n      <td>{{prodWeekWorkTable[74]}}</td>\r\n      <td>{{prodWeekWorkTable[91]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">10:45-11:15</th>\r\n      <td>{{prodWeekWorkTable[7]}}</td>\r\n      <td>{{prodWeekWorkTable[24]}}</td>\r\n      <td>{{prodWeekWorkTable[41]}}</td>\r\n      <td>{{prodWeekWorkTable[58]}}</td>\r\n      <td>{{prodWeekWorkTable[75]}}</td>\r\n      <td>{{prodWeekWorkTable[92]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">11:15-11:45</th>\r\n      <td>{{prodWeekWorkTable[8]}}</td>\r\n      <td>{{prodWeekWorkTable[25]}}</td>\r\n      <td>{{prodWeekWorkTable[42]}}</td>\r\n      <td>{{prodWeekWorkTable[59]}}</td>\r\n      <td>{{prodWeekWorkTable[76]}}</td>\r\n      <td>{{prodWeekWorkTable[93]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\"></th>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td>{{prodWeekWorkTable[94]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">12:30-13:00</th>\r\n      <td>{{prodWeekWorkTable[9]}}</td>\r\n      <td>{{prodWeekWorkTable[26]}}</td>\r\n      <td>{{prodWeekWorkTable[43]}}</td>\r\n      <td>{{prodWeekWorkTable[60]}}</td>\r\n      <td>{{prodWeekWorkTable[77]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">13:00-13:30</th>\r\n      <td>{{prodWeekWorkTable[10]}}</td>\r\n      <td>{{prodWeekWorkTable[27]}}</td>\r\n      <td>{{prodWeekWorkTable[44]}}</td>\r\n      <td>{{prodWeekWorkTable[61]}}</td>\r\n      <td>{{prodWeekWorkTable[78]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">13:30-14:00</th>\r\n      <td>{{prodWeekWorkTable[11]}}</td>\r\n      <td>{{prodWeekWorkTable[28]}}</td>\r\n      <td>{{prodWeekWorkTable[45]}}</td>\r\n      <td>{{prodWeekWorkTable[62]}}</td>\r\n      <td>{{prodWeekWorkTable[79]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">14:00-14:30</th>\r\n      <td>{{prodWeekWorkTable[12]}}</td>\r\n      <td>{{prodWeekWorkTable[29]}}</td>\r\n      <td>{{prodWeekWorkTable[46]}}</td>\r\n      <td>{{prodWeekWorkTable[63]}}</td>\r\n      <td>{{prodWeekWorkTable[80]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">14:30-15:00</th>\r\n      <td>{{prodWeekWorkTable[13]}}</td>\r\n      <td>{{prodWeekWorkTable[30]}}</td>\r\n      <td>{{prodWeekWorkTable[47]}}</td>\r\n      <td>{{prodWeekWorkTable[64]}}</td>\r\n      <td>{{prodWeekWorkTable[81]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">15:00-15:30</th>\r\n      <td>{{prodWeekWorkTable[14]}}</td>\r\n      <td>{{prodWeekWorkTable[31]}}</td>\r\n      <td>{{prodWeekWorkTable[48]}}</td>\r\n      <td>{{prodWeekWorkTable[65]}}</td>\r\n      <td>{{prodWeekWorkTable[82]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">15:30-16:00</th>\r\n      <td>{{prodWeekWorkTable[15]}}</td>\r\n      <td>{{prodWeekWorkTable[32]}}</td>\r\n      <td>{{prodWeekWorkTable[49]}}</td>\r\n      <td>{{prodWeekWorkTable[66]}}</td>\r\n      <td>{{prodWeekWorkTable[83]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">16:00-16:30</th>\r\n      <td>{{prodWeekWorkTable[16]}}</td>\r\n      <td>{{prodWeekWorkTable[33]}}</td>\r\n      <td>{{prodWeekWorkTable[50]}}</td>\r\n      <td>{{prodWeekWorkTable[67]}}</td>\r\n      <td>{{prodWeekWorkTable[84]}}</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\"></th>\r\n      <td scope=\"col\" colspan=\"7\"><span *ngIf=\"prodNumberOfNextWeekTasks > 0\">Vous avez {{prodNumberOfNextWeekTasks}} tâches pour la semaine prochaine</span></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/production-planning/production-planning.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/production-planning/production-planning.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductionPlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionPlanningComponent", function() { return ProductionPlanningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _excel_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../excel/excel.service */ "./src/app/excel/excel.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _production_planning_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./production-planning.service */ "./src/app/production-planning/production-planning.service.ts");








var ProductionPlanningComponent = /** @class */ (function () {
    // defaultExportDate: Date;
    function ProductionPlanningComponent(prodPlanningService, formBuilder, excelService) {
        this.prodPlanningService = prodPlanningService;
        this.formBuilder = formBuilder;
        this.excelService = excelService;
        // @ViewChild(MatPaginator) paginator: MatPaginator;
        // dataSource: MatTableDataSource<ProductionPlanning>;
        this.displayedColumns = ['Date Export', 'Semaine', 'Client', 'Modèle', 'Article', 'Numéro Commande', 'Resp Chaine', 'Quantité', 'Rendement', 'Effectif', 'Taux Absentéisme', 'edit', 'delete'];
        this.prodPlannings = [];
        this.requestProcessing = false;
        this.prodPlanningIdToUpdate = null;
        this.processValidation = false;
        this.prodWeekWorkTable = [];
        this.prodNextWeekTasksList = [];
        this.prodNumberOfNextWeekTasks = 0;
        this.prodPlanningForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            exportDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            planningWeek: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            client: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            model: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            article: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            commandNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            chainResponsible: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            effective: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            absenteeismRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ProductionPlanningComponent.prototype.ngOnInit = function () {
        // this.dataSource = new MatTableDataSource(this.prodPlannings);
        // this.dataSource.data = [];
        this.getAllProdPlannings();
        this.getAllProdWeekWorks();
    };
    ProductionPlanningComponent.prototype.onProdPlanningFormSubmit = function () {
        var _this = this;
        this.processValidation = true;
        if (this.prodPlanningForm.invalid) {
            return;
        }
        this.preProcessConfigurations();
        var prodPlanning = this.prodPlanningForm.value;
        if (this.prodPlanningIdToUpdate == null) {
            this.prodPlanningService.createProdPlanning(prodPlanning)
                .subscribe(function (successCode) {
                _this.statusCode = successCode;
                _this.backToCreateProdPlanning();
                setTimeout(function () {
                    _this.getAllProdPlannings();
                    _this.getAllProdWeekWorks();
                }, 1000);
            }, function (errorCode) { return _this.statusCode = errorCode; });
        }
        else {
            prodPlanning.id = this.prodPlanningIdToUpdate;
            this.prodPlanningService.updateProdPlanning(prodPlanning)
                .subscribe(function (successCode) {
                _this.statusCode = successCode;
                _this.getAllProdPlannings();
                _this.getAllProdWeekWorks();
                _this.backToCreateProdPlanning();
                setTimeout(function () {
                    _this.getAllProdPlannings();
                    _this.getAllProdWeekWorks();
                }, 1000);
            }, function (errorCode) { return _this.statusCode = errorCode; });
        }
    };
    ProductionPlanningComponent.prototype.resetForm = function () {
        this.prodPlanningForm.reset();
        for (var i in this.prodPlanningForm.controls) {
            this.prodPlanningForm.controls[i].setErrors(null);
        }
    };
    ProductionPlanningComponent.prototype.backToCreateProdPlanning = function () {
        this.processValidation = false;
        this.prodPlanningIdToUpdate = null;
    };
    ProductionPlanningComponent.prototype.preProcessConfigurations = function () {
        this.statusCode = null;
        this.requestProcessing = true;
    };
    ProductionPlanningComponent.prototype.getAllProdPlannings = function () {
        var _this = this;
        this.prodPlanningService.getAllProdPlannings()
            .subscribe(function (data) {
            _this.prodPlannings = data;
            // this.dataSource = new MatTableDataSource(this.prodPlannings);
            // this.dataSource.paginator = this.paginator;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    ProductionPlanningComponent.prototype.getAllProdWeekWorks = function () {
        var _this = this;
        this.prodPlanningService.getAllProdWeekWorks()
            .subscribe(function (data) {
            _this.prodWeekWorks = data;
            if (_this.prodWeekWorks.prodNextWeekTasks == null || _this.prodWeekWorks.prodNextWeekTasks == undefined) {
                _this.prodWeekWorks.prodNextWeekTasks = [];
            }
            if (_this.prodWeekWorks.prodCurrentWeekTasks == null || _this.prodWeekWorks.prodCurrentWeekTasks == undefined) {
                _this.prodWeekWorks.prodCurrentWeekTasks = [];
            }
            if (_this.prodWeekWorks.prodCurrentWeekTasks.length == 95 && _this.prodWeekWorks.prodNextWeekTasks.length > 0) {
                _this.prodWeekWorkTable = _this.prodWeekWorks.prodCurrentWeekTasks.concat(_this.prodWeekWorks.prodNextWeekTasks);
                _this.prodNumberOfNextWeekTasks = _this.prodWeekWorks.prodNextWeekTasks.length;
            }
            else {
                _this.prodWeekWorkTable = _this.prodWeekWorks.prodCurrentWeekTasks.slice();
                _this.prodNumberOfNextWeekTasks = 0;
            }
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    ProductionPlanningComponent.prototype.loadProdPlanningToEdit = function (prodPlanningId) {
        var _this = this;
        this.preProcessConfigurations();
        this.prodPlanningService.getProdPlanningById(prodPlanningId)
            .subscribe(function (prodPlanning) {
            _this.prodPlanningIdToUpdate = prodPlanning.id;
            _this.prodPlanningForm.setValue({
                exportDate: prodPlanning.exportDate.toString().slice(0, 10),
                planningWeek: prodPlanning.planningWeek,
                client: prodPlanning.client,
                model: prodPlanning.model,
                article: prodPlanning.article,
                commandNumber: prodPlanning.commandNumber,
                chainResponsible: prodPlanning.chainResponsible,
                quantity: prodPlanning.quantity,
                efficiency: prodPlanning.efficiency,
                effective: prodPlanning.effective,
                absenteeismRate: prodPlanning.absenteeismRate
            });
            _this.processValidation = true;
            _this.requestProcessing = false;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    ProductionPlanningComponent.prototype.deleteProdPlanning = function (prodPlanningId) {
        var _this = this;
        this.preProcessConfigurations();
        this.prodPlanningService.deleteProdPlanningById(prodPlanningId)
            .subscribe(function (successCode) {
            _this.statusCode = successCode;
            _this.statusCode = 204;
            _this.backToCreateProdPlanning();
            setTimeout(function () {
                _this.getAllProdPlannings();
                _this.getAllProdWeekWorks();
            }, 1000);
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    ProductionPlanningComponent.prototype.searchProdPlannings = function (criteria) {
        var _this = this;
        this.prodPlanningService.searchProdPlannings(criteria)
            .subscribe(function (data) { return _this.prodPlannings = data; }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    ProductionPlanningComponent.prototype.exportAsXLSX = function () {
        this.getAllProdWeekWorks();
        this.getAllProdPlannings();
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].table_to_sheet(this.table.nativeElement);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](wb, 'PlanningProduction - ' + new Date().toString().slice(0, 24) + '.xlsx');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductionPlanningComponent.prototype, "table", void 0);
    ProductionPlanningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-production-planning',
            template: __webpack_require__(/*! ./production-planning.component.html */ "./src/app/production-planning/production-planning.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_planning_service__WEBPACK_IMPORTED_MODULE_7__["ProductionPlanningService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _excel_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], ProductionPlanningComponent);
    return ProductionPlanningComponent;
}());



/***/ }),

/***/ "./src/app/production-planning/production-planning.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/production-planning/production-planning.service.ts ***!
  \********************************************************************/
/*! exports provided: ProductionPlanningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionPlanningService", function() { return ProductionPlanningService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");


// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';


// import { map, filter, switchMap } from 'rxjs/operators';



var ProductionPlanningService = /** @class */ (function () {
    //Create constructor to get Http instance
    function ProductionPlanningService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        //URL for CRUD operations
        this.prodPlanningUrl = "http://localhost:8080/production_planning";
        this.contentTypeHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: this.contentTypeHeader });
    }
    ProductionPlanningService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.status);
    };
    ProductionPlanningService.prototype.createProdPlanning = function (prodPlanning) {
        return this.http.post(this.prodPlanningUrl, prodPlanning, this.options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    ProductionPlanningService.prototype.getAllProdPlannings = function () {
        return this.http.get(this.prodPlanningUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductionPlanningService.prototype.getAllProdWeekWorks = function () {
        return this.http.get(this.prodPlanningUrl + "/prod_weekwork")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductionPlanningService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    ProductionPlanningService.prototype.updateProdPlanning = function (prodPlanning) {
        return this.http.put(this.prodPlanningUrl, prodPlanning, this.options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    ProductionPlanningService.prototype.getProdPlanningById = function (prodPlanningId) {
        console.log(this.prodPlanningUrl + "/" + prodPlanningId);
        return this.http.get(this.prodPlanningUrl + "/" + prodPlanningId, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductionPlanningService.prototype.deleteProdPlanningById = function (prodPlanningId) {
        return this.http.delete(this.prodPlanningUrl + "/" + prodPlanningId, this.options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    ProductionPlanningService.prototype.searchProdPlannings = function (criteria) {
        return this.http.post(this.prodPlanningUrl + "/search", criteria, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductionPlanningService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ProductionPlanningService);
    return ProductionPlanningService;
}());



/***/ }),

/***/ "./src/app/success/success.component.html":
/*!************************************************!*\
  !*** ./src/app/success/success.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1>Production</h1>\r\n\r\n<app-navbar></app-navbar>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <div class=\"d-inline col py-2 px-md-5\">\r\n            <button class=\"btn btn-primary btn-lg\" (click)=\"goToCutPlanning()\">Planning Coupe</button>\r\n        </div>\r\n        <div class=\"d-inline col py-2 px-md-5\">\r\n            <button class=\"btn btn-primary btn-lg\" (click)=\"goToProdPlanning()\">Planning Production</button>\r\n        </div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(router) {
        this.router = router;
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent.prototype.goToCutPlanning = function () {
        this.router.navigateByUrl('/cut_planning');
    };
    SuccessComponent.prototype.goToProdPlanning = function () {
        this.router.navigateByUrl('/production_planning');
    };
    SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/success/success.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\github-projects\cut-production\src\main\webapp\cut-production-interface\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map