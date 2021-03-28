import { Component, Input } from "@angular/core";
import { NgConditionBlock } from "./ng-condition-block";

@Component({
  selector: 'ng-else-if',
  template: '<ng-content *ngIf="condition && show"></ng-content>'
})
export class NgElseIfComponent extends NgConditionBlock {
  @Input() condition: boolean;
}
