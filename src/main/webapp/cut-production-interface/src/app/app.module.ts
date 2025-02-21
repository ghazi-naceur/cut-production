import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { SuccessComponent } from './success/success.component';
import { OrderComponent } from './orders/order.component';
import { OrderService } from './orders/order.service';
import { ExcelService } from './excel/excel.service';
import { CutPlanningComponent } from './cut-planning/cut-planning.component';
import { CutPlanningService } from './cut-planning/cut-planning.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductionPlanningComponent } from './production-planning/production-planning.component';
import { ProductionPlanningService } from './production-planning/production-planning.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { AProposComponent } from './apropos/a.propos.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    SuccessComponent,
    CutPlanningComponent,
    ProductionPlanningComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    MatTableModule,
    FormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [
    OrderService,
    LoginService,
    ExcelService,
    CutPlanningService,
    ProductionPlanningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
