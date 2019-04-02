import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataFileComponent } from './datafile/data.file.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { OrderComponent } from './orders/order.component';

const routes: Routes = [
  {path: 'order', component: OrderComponent},
  {path: 'datafile', component: DataFileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'success', component: SuccessComponent},
  {path: '**', component: NotFoundComponent}
]; // Routes table

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
