import { Component, OnInit } from '@angular/core';
import { PositionModel } from '../models/PositionModel';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.scss']
})
export class PositionAddComponent implements OnInit {

  model:PositionModel = new PositionModel()
  constructor(
    private positionService:PositionService
  ) { }

  ngOnInit(): void {

  }
  submitData(){
    if(this.model.formGroup.valid){
      this.positionService.addPosition({
        "tenChucVu": this.model.tenChucVu
      }).subscribe((res) => {

      }, err => {
        
        alert('Thêm mới không thành công. Vui lòng thử lại');
        
      }, () => {

        alert('Thêm mới thành công');
        this.model.tenChucVu = '';

      });
    }
  }

}
