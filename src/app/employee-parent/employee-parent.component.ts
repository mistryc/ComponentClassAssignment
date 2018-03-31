import { Component, OnInit } from '@angular/core';
import { EmployeeChildComponent } from '../employee-child/employee-child.component'

@Component({
  selector: 'app-employee-parent',
  templateUrl: './employee-parent.component.html',
  styleUrls: ['./employee-parent.component.css'],
  
})
export class EmployeeParentComponent implements OnInit {

  constructor() { }
  Name: string
  employees =["John", "David", "Jack"]
  childValue: string;

  setName(emp: string){
    this.Name = emp;
  }

  EmittedName(selected: string){
    if(selected){
      this.childValue = "Value received from child: " + selected;
    }
  }

  ngOnInit() {
  }

}
