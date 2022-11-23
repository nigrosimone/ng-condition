import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgConditionComponent } from './ng-condition.component';
import { NgElseIfComponent } from './ng-else-if.component';
import { NgElseComponent } from './ng-else.component';
import { NgIfComponent } from './ng-if.component';


@NgModule({
  declarations: [NgIfComponent, NgElseIfComponent, NgElseComponent, NgConditionComponent],
  imports: [CommonModule],
  exports: [NgIfComponent, NgElseIfComponent, NgElseComponent, NgConditionComponent]
})
export class NgConditionModule { }
