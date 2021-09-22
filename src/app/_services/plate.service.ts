import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPlate } from '../_models/plate.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  constructor(private http:HttpClient) { }

  getPlates():Observable<any>{
   
      return this.http.get<IPlate>(`${environment.API_URL}/api/plates`) .pipe(
        catchError(err => this.handleError(err))
      )
   
  }

  getPlate(id:string){
    return this.http.get<IPlate>(`${environment.API_URL}/api/plates/${id}`) .pipe(
      catchError(err => this.handleError(err))
    )
  }
  createPlate(params:IPlate){
   return this.http.post<IPlate>(`${environment.API_URL}/api/plates`,params).pipe(
    catchError(err => this.handleError(err))
   ) ;
  }

  updatePlate(params:IPlate){
    return  this.http.put(`${environment.API_URL}/api/plates`,params).pipe(
      catchError(err => this.handleError(err))
     );
  }

  deletePlate(id:string){
    return this.http.delete(`${environment.API_URL}/api/plates/${id}`).pipe(
      catchError(err => this.handleError(err))
    );
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




