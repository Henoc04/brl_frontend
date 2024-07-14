import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bilan } from '../model/bilan.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class BilanService {

  apiURL: string = 'http://localhost:8080/brl/api/reservation/bilan';

  constructor(private http : HttpClient) { }

  bilan(): Observable<Bilan[]>{
    return this.http.get<Bilan[]>(this.apiURL);
   }

}
