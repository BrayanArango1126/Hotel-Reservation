import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { InfoUserComponent } from './users-components/info-user/info-user.component';
import { SecurityUserComponent } from './users-components/security-user/security-user.component';
import { PaymentUserComponent } from './users-components/payment-user/payment-user.component';
import { HistoryUserComponent } from './users-components/history-user/history-user.component';
import { SharedModule } from '../../Reutilizable/shared/shared.module';

@NgModule({ 
  declarations: [
    InfoUserComponent,
    SecurityUserComponent,
    PaymentUserComponent,
    HistoryUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }