import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {} from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionComponent } from './position/position.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { PositionAddComponent } from './position-add/position-add.component';
import { PositionEditComponent } from './position-edit/position-edit.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'employee',
    component: EmployeeComponent
  },
  {
    path:'employee-add',
    component: EmployeeAddComponent
  },
  {
    path:'employee-edit',
    component: EmployeeEditComponent
  },
  {
    path:'employee-edit/:id',
    component: EmployeeEditComponent
  },
  {
    path:'position',
    component: PositionComponent
  },
  {
    path:'position-add',
    component: PositionAddComponent
  },
  {
    path:'position-edit',
    component: PositionEditComponent
  },
  {
    path:'position-edit/:id',
    component: PositionEditComponent
  },
  {
    path:'department',
    component: DepartmentComponent
  },  {
    path:'department-add',
    component: DepartmentAddComponent
  },
  {
    path:'department-edit',
    component: DepartmentEditComponent
  },
  {
    path:'department-edit/:id',
    component: DepartmentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
