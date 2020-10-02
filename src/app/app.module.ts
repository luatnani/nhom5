import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//services
import { API } from './services/api';
import {AccountService} from './services/account.service';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { PositionComponent } from './position/position.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { PositionEditComponent } from './position-edit/position-edit.component';
import { PositionAddComponent } from './position-add/position-add.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentService } from './services/department.service';
import { EmployeeService } from './services/employee.service';
import { PositionService } from './services/position.service';
import { NewaccComponent } from './newacc/newacc.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    DepartmentComponent,
    PositionComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    PositionEditComponent,
    PositionAddComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    NewaccComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    API,
    AccountService,
    DepartmentService,
    EmployeeService,
    PositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
