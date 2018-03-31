import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css'],

})
export class EmployeeChildComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Output() outputParent = new EventEmitter<string>();

  NotificationToParent(selected: string){
    this.outputParent.emit(selected);
  }

  ngOnInit() {
  }

}
