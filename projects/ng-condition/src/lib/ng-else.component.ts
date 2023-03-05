import { Component } from "@angular/core";
import { NgConditionBlock } from "./ng-condition-block";

@Component({
  selector: 'ng-else',
  template: '<ng-content *ngIf="show"></ng-content>'
})
export class NgElseComponent extends NgConditionBlock { }
