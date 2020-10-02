import { Component, OnInit } from '@angular/core';
import { PositionModel } from '../models/PositionModel';
import { PositionService } from '../services/position.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.scss']
})
export class PositionEditComponent implements OnInit {
  positionId:number = 0;
  model:PositionModel = new PositionModel();
  constructor(
    private router: ActivatedRoute,
    private positionService:PositionService
  ) { }

  ngOnInit(): void {
    this.getPositions();

  }
  getPositions()
  {
    this.router.params.subscribe((params) => {
      this.positionId = params.id;
    });

    var result: any;
    this.positionService.getPositionById(this.positionId).subscribe((res) =>{
      result = res;
    }, err => {
      alert('Không tồn tại phòng ban này');
    }, () => {
      this.model.tenChucVu = result.object.tenChucVu;
    });
  }

  submitData(){
    if(this.model.formGroup.valid){
      this.positionService.editPosition({
        id: this.positionId,
        tenChucVu: this.model.tenChucVu
      }).subscribe((res) => {

      }, err => {
        alert('Cập nhật không thành công');
      }, () => {
        alert('Cập nhật thành công');
        
      });
    }
  }

}
