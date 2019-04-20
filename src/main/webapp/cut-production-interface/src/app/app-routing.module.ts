import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { OrderComponent } from './orders/order.component';
import { CutPlanningComponent } from './cut-planning/cut-planning.component';
import { ProductionPlanningComponent } from './production-planning/production-planning.component';

const routes: Routes = [
  {path: 'order', component: OrderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'cut_planning', component: CutPlanningComponent},
  {path: 'production_planning', component: ProductionPlanningComponent},
  {path: '**', component: NotFoundComponent}
]; // Routes table

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
