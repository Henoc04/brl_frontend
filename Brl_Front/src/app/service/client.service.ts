import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiURL: string = 'http://localhost:8080/brl/api/client';

  constructor(private http : HttpClient) {

   }

   listeClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiURL);
   }


   addClientService(clien: Client) : Observable<Client>{
    return this.http.post<Client>(this.apiURL, clien, httpOptions);
   }

   supprimerClient(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
   }

   consulterClient(id: number) : Observable<Client>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Client>(url);
   }

   updateClientService(client: Client) : Observable<Client>{
    return this.http.put<Client>(this.apiURL, client, httpOptions);
  }

}
