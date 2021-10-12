import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IInputs } from 'src/app/_models/input.interface';
import { InputService } from 'src/app/_services/input.service';
import { PlateService } from 'src/app/_services/plate.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  plateForm: FormGroup;
  inputs !: IInputs;
  isCreateMode: boolean = false;
  id: string = '';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private plateService: PlateService,
    private inputSetvice:InputService
  ) {
    this.plateForm = this.fb.group({
      id:[0],
      price: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],

    });
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isCreateMode = this.id=='0'?true:false;

    if(!this.isCreateMode)
    {
      this.onLoadPlate(this.id);
      this.onLoadInputs(Number(this.id));
    }
  }

  onSubmit() {
    if (this.isCreateMode) {
      this.plateService.createPlate(this.plateForm.value).subscribe({
        next:()=>{
          this.router.navigate(['/plates']);
        },
        error:error=>{
          this.router.navigate(['/plates']);
          console.log('error');
        }
      }
      );
     
    }
    else {

      this.plateService.updatePlate(this.plateForm.value).subscribe({
        next:()=>{
          this.router.navigate(['/plates']);
        },
        error:error=>{
          this.router.navigate(['/plates']);
          console.log(error);
        }
      });
    }
   
  }

  onDelete(){
    if(this.id!='')
    {
      this.plateService.deletePlate(this.id).subscribe({
        next:()=>{
          this.router.navigate(['/plates']);
        },
        error:error=>{
          console.log(error);
          this.router.navigate(['/plates']);
          
        }
      });;
    }
  }

  onLoadPlate(id:string){
    this.plateService.getPlate(id).subscribe(
        data=>{ this.plateForm.setValue({
          price:data.price,
          description:data.description,
          name:data.name,
          id:data.id 
        })
      });
    
  }

  onInputEdit(id:number){
    console.log(id);
  }

  onLoadInputs(idPlate:number){
    this.inputSetvice.getInputsByPlateId(idPlate).subscribe(
      d=>{this.inputs = d}, err=>{console.log(err)}
    );
  }

}
