import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material';
import { DataFileComponent } from './datafile/data.file.component';
import { DataFileService } from './datafile/data.file.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { SuccessComponent } from './success/success.component';
import { OrderComponent } from './orders/order.component';
import { OrderService } from './orders/order.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    DataFileComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    MatTableModule,
    FormsModule
  ],
  providers: [
    OrderService,
    DataFileService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
