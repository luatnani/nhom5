import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/EmployeeModel';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../services/department.service';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  employeeId:number ;
  model:EmployeeModel = new EmployeeModel();
  constructor(
    private router: ActivatedRoute,
    private employeeService:EmployeeService,
    private departmentService:DepartmentService,
    private positionService:PositionService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees()
  {
      this.router.params.subscribe((params) => {
      this.employeeId = params.id;
    });

    var result: any;
    this.employeeService.getEmployeeById(this.employeeId).subscribe((res) =>{
      result = res;
    }, err => {

      alert('Không tồn tại nhân viên này');
    }, () => {

      this.departmentService.getDepartmentById(result.object.maPhongBan);
      this.model.maChucVu = result.object.maChucVu,
      this.model.maPhongBan = result.object.maPhongBan,
      this.model.trangThai = result.object.trangThai,
      this.model.hoTen = result.object.hoTen,
      this.model.soDienThoai = result.object.soDienThoai,
      this.model.mail = result.object.mail,
      this.model.anhDaiDien = result.object.anhDaiDien,
      this.model.namSinh = result.object.namSinh;
      this.departmentService.getDepartmentById(result.object.maPhongBan).subscribe((res)=>
      { 
        result = res;
        this.model.tenPhongBan = result.object.tenPhongBan;
      },err=>{ }
      ,()=> {});
      this.positionService.getPositionById(result.object.maChucVu).subscribe((res)=>
      { 
        result = res;
        this.model.tenChucVu = result.object.tenChucVu;
      },err=>{ }
      ,()=> {});
    });
  }

  submitData(){
    if(this.model.formGroup.valid){
      this.employeeService.editEmployee({
        id: this.employeeId,
        tenPhongBan: this.model.tenPhongBan,
        maChucVu : this.model.maChucVu,
        MaPhongBan : this.model.maPhongBan,
        TrangThai : this.model.trangThai,
        HoTen : this.model.hoTen,
        SoDienThoai : this.model.soDienThoai,
        Mail : this.model.mail,
        AnhDaiDien : this.model.anhDaiDien,
        NamSinh : this.model.namSinh,
        TenChucVu : this.model.tenChucVu,
      }).subscribe((res) => {

      }, err => {
        alert('Cập nhật không thành công');
      }, () => {
        alert('Cập nhật thành công');
        
      });
    }
  }
}
