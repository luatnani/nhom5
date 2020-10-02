import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../models/DepartmentModel';
import { DepartmentService } from '../services/department.service';
@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {

  model:DepartmentModel = new DepartmentModel();

  constructor(
    private departmentService:DepartmentService
  ) { }

  ngOnInit(): void {
  }
  submitData(){
    if(this.model.formGroup.valid){
      this.departmentService.addDepartment({
        "tenPhongBan": this.model.tenPhongBan
      }).subscribe((res) => {

      }, err => {
        
        alert('Thêm mới không thành công. Vui lòng thử lại');
        
      }, () => {

        alert('Thêm mới thành công');
        this.model.tenPhongBan = '';

      });
    }
  }

}
