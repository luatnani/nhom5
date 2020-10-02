import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments = [];
  total:number = 0;

  constructor(
    private departmentService:DepartmentService
  ) { }

  ngOnInit(): void {
    this.getDepartments();
  }
  getDepartments()
  {
    var result: any;
    this.departmentService.getDepartment().subscribe((res)=>{
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.departments = result.object.items;
      this.total = result.object.total;
    });
  }

  delete(id:number){
    if(window.confirm('Bạn thực sự muốn xóa')){
      this.departmentService.deleteDepartment(id).subscribe((res)=>{      
      }, err => {
        
        alert('Xóa không thành công');
  
      }, () => {
        
        alert('Xóa thành công');
        this.getDepartments();
  
      });
    }    
    else{
      alert('Bạn vừa hủy thao tác xóa phòng ban');
    }
  }
  
}
