import { Component, OnInit } from '@angular/core';
import { IPlates } from '../_models/plate.interface';
import { PlateService } from '../_services/plate.service';



@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {

  filter='';
  plates!:IPlates;
  constructor(private plateService:PlateService) { 
    this.onLoadPlates();
  }

  ngOnInit(): void {
  }

  onLoadPlates():void{
    this.plateService.getPlates()
    .subscribe(
      d => {

          this.plates = d;
      },
      err => {
        console.log(err);
      }
    )
  }

}
