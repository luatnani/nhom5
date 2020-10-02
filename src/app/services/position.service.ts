import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(
    private api:API
  ) { }
  getPosition(){
    return this.api.get('/api/DanhBa/list-chuc-vu');
  }

  addPosition(data:any){
    return this.api.post('/api/DanhBa/add-chuc-vu',data);
  }

  editPosition(data:any){
    return this.api.put('/api/DanhBa/edit-chuc-vu',data);
  }

  deletePosition(id:number){
    return this.api.delete(`/api/DanhBa/delete-chuc-vu/${id}`);
  }
  getPositionById(id:number){
    return this.api.get(`/api/DanhBa/get-chuc-vu/${id}`);
  }
}
