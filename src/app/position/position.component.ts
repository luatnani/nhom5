import { Component, OnInit} from '@angular/core';
import {PositionService} from '../services/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  positions = [];
  total:number = 0;
  
  constructor(
    private positionService:PositionService
  ) { }

  ngOnInit(): void {
    this.getPositions();
  }
  getPositions()
  {
    var result: any;
    this.positionService.getPosition().subscribe((res)=>{
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.positions = result.object.items;
      this.total = result.object.total;
    });
  }
  delete(id:number){
    if(window.confirm('Bạn thực sự muốn xóa')){
      this.positionService.deletePosition(id).subscribe((res)=>{      
      }, err => {
        
        console.log(err);
        alert('Xóa không thành công');
  
      }, () => {
        
        alert('Xóa thành công');
        this.getPositions();
  
      });
    }    
    else{
      alert('Bạn vừa hủy thao tác xóa người dùng');
    }
  }

}
