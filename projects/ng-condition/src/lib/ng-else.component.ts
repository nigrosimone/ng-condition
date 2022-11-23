import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgConditionBlock } from "./ng-condition-block";

@Component({
  selector: 'ng-else',
  template: '<ng-content *ngIf="show"></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgElseComponent extends NgConditionBlock {

}
