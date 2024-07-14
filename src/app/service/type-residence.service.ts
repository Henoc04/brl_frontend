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


   addTypeResidencesService(typeResidence: TypeResidence) : Observable<TypeResidence>{
    return this.http.post<TypeResidence>(this.apiURL, typeResidence, httpOptions);
   }

   supprimerTypeResidenceService(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
   }

   consulterTypeResidence(id: number) : Observable<TypeResidence>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<TypeResidence>(url);
   }

   updateTypeResidenceService(typeResidence: TypeResidence) : Observable<TypeResidence>{
    return this.http.put<TypeResidence>(this.apiURL, typeResidence, httpOptions);
  }
}
