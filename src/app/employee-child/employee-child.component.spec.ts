import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChildComponent } from './employee-child.component';

describe('EmployeeChildComponent', () => {
  let component: EmployeeChildComponent;
  let fixture: ComponentFixture<EmployeeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
