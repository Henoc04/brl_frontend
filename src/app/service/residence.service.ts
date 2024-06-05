import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residence } from '../model/residence.model';
import { TypeResidence } from '../model/type-residence.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  apiURL: string = 'http://localhost:8080/brl/api/residence';
  apiURL1: string = 'http://localhost:8080/brl/api/typeresidence';

  constructor(private http : HttpClient) { }

  listeResidences(): Observable<Residence[]>{
    return this.http.get<Residence[]>(this.apiURL);
   }

   addResidencesService(residence: Residence) : Observable<Residence>{
    return this.http.post<Residence>(this.apiURL, residence, httpOptions);
   }

   supprimerResidenceService(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
   }

   consulterResidence(id: number) : Observable<Residence>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Residence>(url);
   }

   updateResidenceService(residence: Residence) : Observable<Residence>{
    return this.http.put<Residence>(this.apiURL, residence, httpOptions);
  }


  
  listeTypResidenceService():Observable<TypeResidence[]>{
    return this.http.get<TypeResidence[]>(this.apiURL1);
    }

}
