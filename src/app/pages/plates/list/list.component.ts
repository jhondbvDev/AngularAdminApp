import { Component, OnInit } from '@angular/core';
import { IPlates } from 'src/app/_models/plate.interface';
import { PlateService } from 'src/app/_services/plate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  filter='';
  plates!:IPlates;
  constructor(private plateService:PlateService) { 
    
  }

  ngOnInit(): void {
    this.onLoadPlates();
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
