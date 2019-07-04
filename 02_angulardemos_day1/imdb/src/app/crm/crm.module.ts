import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { crmroutes } from '../router'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(crmroutes)
  ],
  declarations: [CustomerinfoComponent, CustomerlistComponent, CustomerhomeComponent],
  exports: [CustomerhomeComponent, CustomerlistComponent, CustomerinfoComponent]
})
export class CrmModule { }
