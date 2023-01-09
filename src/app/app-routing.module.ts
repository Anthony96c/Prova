import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataCustomerComponent } from './data-customer/data-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',component: DashboardComponent, children:[
    {path: '', redirectTo:'Home',pathMatch: 'full'},
    {path:'Home', component: HomeComponent},
    {path:'DataCustomer', component: DataCustomerComponent},
    {path:'Login', component: LoginComponent},
  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
