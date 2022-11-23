import { Component, Input } from "@angular/core";
import { NgConditionBlock } from "./ng-condition-block";

@Component({
  selector: 'ng-if',
  template: '<ng-content *ngIf="condition && show"></ng-content>'
})
export class NgIfComponent extends NgConditionBlock {
  @Input() condition!: boolean;
}
