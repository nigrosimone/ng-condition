import { Directive } from "@angular/core";

@Directive()
export abstract class NgConditionBlock {
  show: boolean = false;
}
