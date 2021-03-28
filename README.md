# NgCondition [![Build Status](https://travis-ci.com/nigrosimone/ng-condition.svg?branch=main)](https://travis-ci.com/nigrosimone/ng-condition) [![Coverage Status](https://coveralls.io/repos/github/nigrosimone/ng-condition/badge.svg?branch=main)](https://coveralls.io/github/nigrosimone/ng-condition?branch=main) [![NPM version](https://img.shields.io/npm/v/ng-condition.svg)](https://www.npmjs.com/package/ng-condition)

An alternative to  `*ngIf; else` directive for simplify conditions into HTML template for Angular application.

## Description

Sometime multiple `*ngIf; else` can make html template ugly and complicated to understand, eg.:

```html
<div *ngIf="number <= 5; else majorOf5">
    Number is minor or equal 5
</div>
<ng-template #majorOf5>
    <div *ngIf="number <= 10; else majorOf10">
        Number is minor or equal 10
    </div>    
    <ng-template #majorOf10>
        <div *ngIf="number <= 20; else majorOf20">
            Number is minor or equal 20
        </div>
        <ng-template #majorOf20>
            Number is major of 20
        </ng-template>
    </ng-template>
</ng-template> 
```

with `ng-condition` you have a simple if, else if, else block, and the same template become eg.: 

```html
<ng-condition>
    <ng-if [condition]="number <= 5">
      Number is minor or equal 5
    </ng-if>
    <ng-else-if [condition]="number <= 10">
      Number is minor or equal 10
    </ng-else-if>
    <ng-else-if [condition]="number <= 20">
      Number is minor or equal 20
    </ng-else-if>
    <ng-else>
      Number is major of 20
    </ng-else>
</ng-condition>
```

See the [stackblitz demo](https://stackblitz.com/edit/demo-ng-condition?file=src%2Fapp%2Fapp.component.ts).

## Get Started

*Step 1*: install `ng-condition`

```bash
npm i ng-condition
```

*Step 2*: Import `NgConditionModule` into your app module, eg.:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgConditionModule } from 'ng-condition';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgConditionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  ],
})
export class AppModule { }
```

## Examples

Below there are some examples of use case.

### Example: Simple if, else

Example of simple if, else, eg.:

```html
<ng-condition>
    <ng-if [condition]="number % 2 == 0">
      number is even
    </ng-if>
    <ng-else>
      number is odd
    </ng-else>
</ng-condition>
```

### Example: Nested condition

Nested condition, eg.:

```html
<ng-condition>
    <ng-if [condition]="number % 2 == 0">
      number is even
      <ng-condition>
        <ng-if [condition]="number <= 5">
          Number is minor or equal 5
        </ng-if>
        <ng-else>
          Number is major of 5
        </ng-else>
      </ng-condition>
    </ng-if>

    <ng-else>
      number is odd
      <ng-condition>
        <ng-if [condition]="number <= 10">
          Number is minor or equal 10
        </ng-if>
        <ng-else>
          Number is major of 10
        </ng-else>
      </ng-condition>
    </ng-else>
</ng-condition>
```

## Support

This is an open-source project. Star this [repository](https://github.com/nigrosimone/ng-condition), if you like it, or even [donate](https://www.paypal.com/paypalme/snwp). Thank you so much!