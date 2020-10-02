import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private api:API
  ) { }
  getEmployee(){
    return this.api.get('/api/DanhBa/list-nhan-vien');
  }

  addEmployee(data:any){
    return this.api.post('/api/DanhBa/add-nhan-vien',data);
  }

  editEmployee(data:any){
    return this.api.put('​/api/DanhBa/edit-nhan-vien',data);
  }

  deleteEmployee(id:number){
    return this.api.delete(`/api/DanhBa/delete-nhan-vien/${id}`);
  }
  getEmployeeById(id:number){
    return this.api.get(`/api/DanhBa/get-nhan-vien/${id}`);
  }
}
