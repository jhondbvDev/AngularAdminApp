import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {IInput, IInputs} from 'src/app/_models/input.interface'

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(private http:HttpClient) { }

  getInputsByPlateId(idPlate:number){
    return this.http.get<IInputs>(`${environment.API_URL}/api/inputs/getByPlateId/${idPlate}`) .pipe(
      catchError(err => this.handleError(err))
    )
  }

  private handleError(err:any): Observable<never> {
    let errorMessage = 'An error occured retrieving data ';
    if (err) {
      errorMessage=`Error : code ${err.message}`;
     
    }
   console.log(errorMessage);
    return throwError(errorMessage);
  }
}
