import { AfterContentChecked, Component, ContentChildren, QueryList } from "@angular/core";
import { NgElseIfComponent } from "./ng-else-if.component";
import { NgElseComponent } from "./ng-else.component";
import { NgIfComponent } from "./ng-if.component";

@Component({
  selector: 'ng-condition',
  template: '<ng-content></ng-content>'
})
export class NgConditionComponent implements AfterContentChecked {
 
  @ContentChildren(NgIfComponent) ngIfComponents: QueryList<NgIfComponent> | null = null;
  @ContentChildren(NgElseIfComponent) ngElseIfComponents: QueryList<NgElseIfComponent> | null = null;
  @ContentChildren(NgElseComponent) ngElseComponents: QueryList<NgElseComponent> | null = null;

  constructor(){}

  ngAfterContentChecked(): void {
    const ngIfComponents = this.ngIfComponents ? this.ngIfComponents.toArray() : [];
    const ngElseIfComponents = this.ngElseIfComponents ? this.ngElseIfComponents.toArray() : [];
    const ngElseComponents = this.ngElseComponents ? this.ngElseComponents.toArray() : [];

    let ifFound = false;
    if( ngIfComponents.length > 0 ){
      for (let index = 0; index < ngIfComponents.length; index++) {
        if( index > 0 ){
          throw new Error('Only one <ng-if></ng-if> is allowed for <ng-condition>');
        }
        const component = ngIfComponents[index];
        if( component.condition ){
          ifFound = true;
        }
        component.show = component.condition;
      }
    }

    let elseIfFound = false;
    if( ngElseIfComponents.length > 0 ){
      if( ngIfComponents.length == 0 ){
        throw new Error('One <ng-if></ng-if> is mandatory for <ng-condition>');
      }
      for (let index = 0; index < ngElseIfComponents.length; index++) {
        const component = ngElseIfComponents[index];
        const show = !ifFound && !elseIfFound && component.condition;
        if( component.condition ){
          elseIfFound = true;
        }
        component.show = show;
      }
    }

    if( ngElseComponents.length > 0 ){
      if( ngIfComponents.length == 0 ){
        throw new Error('One <ng-if></ng-if> is mandatory for <ng-condition>');
      }
      for (let index = 0; index < ngElseComponents.length; index++) {
        if( index > 0 ){
          throw new Error('Only one <ng-else></ng-else> is allowed for <ng-condition>');
        }
        const component = ngElseComponents[index];
        component.show = !ifFound && !elseIfFound;
      }
    }

  }
}