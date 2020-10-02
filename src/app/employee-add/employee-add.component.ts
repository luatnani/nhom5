import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/EmployeeModel';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  
  model:EmployeeModel = new EmployeeModel();
  constructor(
    private employeeService:EmployeeService
  ) { }

  ngOnInit(): void {
  }

  submitData(){
    if(this.model.formGroup.valid){
      this.employeeService.addEmployee({
        "MaPhongBan": this.model.maPhongBan,
        "MaChucVu": this.model.maChucVu,
        "TrangThai": this.model.trangThai,
        "HoTen": this.model.hoTen,
        "SoDienThoai": this.model.soDienThoai,
        "Mail": this.model.mail,
        "AnhDaiDien": this.model.anhDaiDien,
        "NamSinh": this.model.namSinh,
        "TenPhongBan": this.model.tenPhongBan,
        "TenChucVu": this.model.tenChucVu
      }).subscribe((res) => {

      }, err => {
        
        alert('Thêm mới không thành công. Vui lòng thử lại');
        
      }, () => {
        alert('Thêm mới thành công');
        this.model.maPhongBan = 1;
        this.model.maChucVu = 1;
        this.model.trangThai = 1;
        this.model.hoTen = '';
        this.model.soDienThoai = '';
        this.model.mail = '';
        this.model.anhDaiDien = '';
        this.model.namSinh = new Date();
        this.model.tenPhongBan = '';
        this.model.tenChucVu = '';
      });
    }
  }

}
