import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderFormComponent} from './order-form/order-form.component';
import {SummaryComponent} from './summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: OrderFormComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
