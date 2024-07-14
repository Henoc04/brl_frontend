import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Depense } from '../model/depense.model';
import { Residence } from '../model/residence.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class DepenseService {


  apiURL: string = 'http://localhost:8080/brl/api';

  constructor(private http : HttpClient) { }

  listeDepenses(): Observable<Depense[]>{
    return this.http.get<Depense[]>(this.apiURL+"/depense");
   }

   addDepenseService(depense: Depense) : Observable<Depense>{
    return this.http.post<Depense>(this.apiURL+"/depense", depense, httpOptions);
   }

   supprimerDepenseService(id: number) {
    const url = `${this.apiURL+"/depense"}/${id}`;
    return this.http.delete(url, httpOptions);
   }

   consulterDepense(id: number) : Observable<Depense>{
    const url = `${this.apiURL+"/depense"}/${id}`;
    return this.http.get<Depense>(url);
   }

   updateDepenseService(depense: Depense) : Observable<Depense>{
    return this.http.put<Depense>(this.apiURL+"/depense", depense, httpOptions);
  }


  // pour avoir la liste des residence lors de l'ajout d'une nouvelle depense
  listeResidenceService():Observable<Residence[]>{
    return this.http.get<Residence[]>(this.apiURL+"/residence");
    }

}
