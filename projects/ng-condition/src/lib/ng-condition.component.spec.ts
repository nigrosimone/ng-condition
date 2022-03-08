import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgConditionBlock } from './ng-condition-block';
import { NgConditionComponent } from './ng-condition.component';
import { NgConditionModule } from './ng-condition.module';


@Component({template: `
<div>
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
</div>
`})
class TestComponent {
    number = 5;
}
describe('NgCondition', () => {

    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;
    let element: HTMLElement;
    let component: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ TestComponent],
          imports: [NgConditionModule]
        });
        fixture = TestBed.createComponent(TestComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        element = debugElement.nativeElement;
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    it('test if', () => {
        component.number = 5;
        fixture.detectChanges();
        expect(element.textContent?.trim()).toBe('Number is minor or equal 5');
    });

    it('test first else if', () => {
        component.number = 10;
        fixture.detectChanges();
        expect(element.textContent?.trim()).toBe('Number is minor or equal 10');
    });

    it('test second else if', () => {
        component.number = 20;
        fixture.detectChanges();
        expect(element.textContent?.trim()).toBe('Number is minor or equal 20');
    });

    it('test else', () => {
        component.number = 21;
        fixture.detectChanges();
        expect(element.textContent?.trim()).toBe('Number is major of 20');
    });
});

@Component({template: `
<div>
    <ng-condition>
        <ng-if [condition]="number <= 5">
        Number is minor or equal 5
        </ng-if>
        <ng-else-if [condition]="number <= 20">
        Number is minor or equal 20
        </ng-else-if>
    </ng-condition>
</div>
`})
// eslint-disable-next-line @angular-eslint/component-class-suffix
class TestComponent2 {
    number = 21;
}
describe('NgCondition2', () => {

    let fixture: ComponentFixture<TestComponent2>;
    let debugElement: DebugElement;
    let element: HTMLElement;
    let component: TestComponent2;

    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ TestComponent2],
          imports: [NgConditionModule]
        });
        fixture = TestBed.createComponent(TestComponent2);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        element = debugElement.nativeElement;
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    it('test', () => {
        component.number = 21;
        fixture.detectChanges();
        expect(element.textContent?.trim()).toBe('');
    });
});

class MockNgConditionBlock extends NgConditionBlock {}
class MockQueryList {
    // eslint-disable-next-line no-unused-vars
    constructor(private array: Array<MockNgConditionBlock>){}
    toArray(): Array<MockNgConditionBlock> {
        return this.array;
    }
}

describe('NgCondition error', () => {


    it('test if 1', () => {
        const comp = new NgConditionComponent();
        comp.ngElseIfComponents = new MockQueryList([new MockNgConditionBlock()]) as any;
        expect( function(){ comp.ngAfterContentChecked(); } ).toThrow(new Error(`One <ng-if></ng-if> is mandatory for <ng-condition>`));
    });

    it('test if 2', () => {
        const comp = new NgConditionComponent();
        comp.ngElseComponents = new MockQueryList([new MockNgConditionBlock()]) as any;
        expect( function(){ comp.ngAfterContentChecked(); } ).toThrow(new Error(`One <ng-if></ng-if> is mandatory for <ng-condition>`));
    });

    it('test multiple if', () => {
        const comp = new NgConditionComponent();
        comp.ngIfComponents = new MockQueryList([new MockNgConditionBlock(), new MockNgConditionBlock()]) as any;
        expect( function(){ comp.ngAfterContentChecked(); } ).toThrow(new Error(`Only one <ng-if></ng-if> is allowed for <ng-condition>`));
    });

    it('test multiple else', () => {
        const comp = new NgConditionComponent();
        comp.ngIfComponents = new MockQueryList([new MockNgConditionBlock()]) as any;
        comp.ngElseComponents = new MockQueryList([new MockNgConditionBlock(), new MockNgConditionBlock()]) as any;
        expect( function(){ comp.ngAfterContentChecked(); } ).toThrow(new Error(`Only one <ng-else></ng-else> is allowed for <ng-condition>`));
    });

    it('test nested', () => {
        const comp = new NgConditionComponent();
        comp.ngConditionComponents = new MockQueryList([new MockNgConditionBlock()]) as any;
        expect( function(){ comp.ngAfterContentChecked(); } ).toThrow(new Error(`A child <ng-condition></ng-condition> is allowed only inside a condition block: ng-if, ng-else-if, ng-else`));
    });

});