import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TypeResidence } from '../model/type-residence.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class TypeResidenceService {


  apiURL: string = 'http://localhost:8080/brl/api/typeresidence';

  constructor(private http : HttpClient) { }

  listeType(): Observable<TypeResidence[]>{
    return this.http.get<TypeResidence[]>(this.apiURL);
   }
}
