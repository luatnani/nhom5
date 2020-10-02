import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../models/DepartmentModel';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {

  departmentId: number = 0;
  model: DepartmentModel = new DepartmentModel();
  constructor(
    private router: ActivatedRoute,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.getDepartments();
  }
  getDepartments() {
    this.router.params.subscribe((params) => {
      this.departmentId = params.id;
    });

    var result: any;
    this.departmentService.getDepartmentById(this.departmentId).subscribe((res) => {
      result = res;
    }, err => {
      alert('Không tồn tại phòng ban này');
    }, () => {
      this.model.tenPhongBan = result.object.tenPhongBan;
    });
  }

  submitData() {
    if (this.model.formGroup.valid) {
      this.departmentService.editDepartment({
        id: this.departmentId,
        tenPhongBan: this.model.tenPhongBan
      }).subscribe((res) => {

      }, err => {
        alert('Cập nhật không thành công');
      }, () => {
        alert('Cập nhật thành công');

      });
    }
  }

}
