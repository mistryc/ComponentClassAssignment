import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeParentComponent } from './employee-parent/employee-parent.component';
import { EmployeeChildComponent } from './employee-child/employee-child.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeParentComponent,
    EmployeeChildComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
