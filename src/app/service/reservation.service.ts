import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Reservation } from '../model/reservation.model';
import { Client } from '../model/client.model';
import { Residence } from '../model/residence.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  apiURL: string = 'http://localhost:8080/brl/api';

  constructor(private http : HttpClient) { }


  listeReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiURL+"/reservation");
   }

   listeClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiURL+"/client");
   }

   listeResidence(): Observable<Residence[]>{
    return this.http.get<Residence[]>(this.apiURL+"/residence");
   }

   addReservationService(reservation: Reservation) : Observable<Reservation>{
    return this.http.post<Reservation>(this.apiURL+"/reservation", reservation, httpOptions);
   }

   supprimerReservationService(id: number) {
    const url = `${this.apiURL+"/reservation"}/${id}`;
    return this.http.delete(url, httpOptions);
   }

   consulterReservation(id: number) : Observable<Reservation>{
    const url = `${this.apiURL+"/reservation"}/${id}`;
    return this.http.get<Reservation>(url);
   }

   updateReservationService(reservation: Reservation) : Observable<Reservation>{
    return this.http.put<Reservation>(this.apiURL+"/reservation", reservation, httpOptions);
  }
}
