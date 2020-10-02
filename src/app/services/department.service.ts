import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private api:API
  ) { }
  getDepartment(){
    return this.api.get('/api/DanhBa/list-phong-ban');
  }

  addDepartment(data:any){
    return this.api.post('/api/DanhBa/add-phong-ban',data);
  }

  editDepartment(data:any){
    return this.api.put('​/api/DanhBa/edit-phong-ban',data);
  }

  deleteDepartment(id:number){
    return this.api.delete(`/api/DanhBa/delete-phong-ban/${id}`);
  }
  getDepartmentById(id:number){
    return this.api.get(`/api/DanhBa/get-phong-ban/${id}`);
  }
}
