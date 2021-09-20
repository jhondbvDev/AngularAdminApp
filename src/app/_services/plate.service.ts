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
   
      return this.http.get<IPlate>(`${environment.API_URL}/plates`) .pipe(
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




