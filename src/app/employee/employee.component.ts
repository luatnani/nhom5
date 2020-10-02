import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees = [];
  total:number = 0;

  constructor(
    private employeeService:EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees()
  {
    var result: any;
    this.employeeService.getEmployee().subscribe((res)=>{
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.employees = result.object.items;
      this.total = result.object.total;
    });
  }
  delete(id:number){
    if(window.confirm('Bạn thực sự muốn xóa')){
      this.employeeService.deleteEmployee(id).subscribe((res)=>{      
      }, err => {
        
        console.log(err);
        alert('Xóa không thành công');
  
      }, () => {
        
        alert('Xóa thành công');
        this.getEmployees();
  
      });
    }    
    else{
      alert('Bạn vừa hủy thao tác xóa nhân viên');
    }
  }
}
