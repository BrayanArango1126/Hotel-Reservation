import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoUserComponent } from './users-components/info-user/info-user.component';
import { PaymentUserComponent } from './users-components/payment-user/payment-user.component';
import { SecurityUserComponent } from './users-components/security-user/security-user.component';
import { HistoryUserComponent } from './users-components/history-user/history-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [ 
  {path:'',component:UsersComponent, 
  children:[
    {path:'',component:InfoUserComponent},
    {path:'configuration',component:InfoUserComponent},
    {path:'payment',component:PaymentUserComponent},
    {path:'security',component:SecurityUserComponent},
    {path:'history_user',component:HistoryUserComponent},
  ]  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }