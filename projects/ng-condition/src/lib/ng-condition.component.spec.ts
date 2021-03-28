import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
        expect(element.textContent.trim()).toBe('Number is minor or equal 5');
    });

    it('test first else if', () => {
        component.number = 10;
        fixture.detectChanges();
        expect(element.textContent.trim()).toBe('Number is minor or equal 10');
    });

    it('test second else if', () => {
        component.number = 20;
        fixture.detectChanges();
        expect(element.textContent.trim()).toBe('Number is minor or equal 20');
    });

    it('test else', () => {
        component.number = 21;
        fixture.detectChanges();
        expect(element.textContent.trim()).toBe('Number is major of 20');
    });
});