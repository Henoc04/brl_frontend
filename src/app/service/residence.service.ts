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

  apiURL: string = 'http://localhost:8080/brl/api';

  constructor(private http : HttpClient) { }

  listeResidences(): Observable<Residence[]>{
    return this.http.get<Residence[]>(this.apiURL+"/residence");
   }

   addResidencesService(residence: Residence) : Observable<Residence>{
    return this.http.post<Residence>(this.apiURL+"/residence", residence, httpOptions);
   }

   supprimerResidenceService(id: number) {
    const url = `${this.apiURL+"/residence"}/${id}`;
    return this.http.delete(url, httpOptions);
   }

   consulterResidence(id: number) : Observable<Residence>{
    const url = `${this.apiURL+"/residence"}/${id}`;
    return this.http.get<Residence>(url);
   }

   updateResidenceService(residence: Residence) : Observable<Residence>{
    return this.http.put<Residence>(this.apiURL+"/residence", residence, httpOptions);
  }


  // pour avoir la liste des type lors de l'ajout d'une nouvelle residence
  listeTypResidenceService():Observable<TypeResidence[]>{
    return this.http.get<TypeResidence[]>(this.apiURL+"/typeresidence");
    }

}
