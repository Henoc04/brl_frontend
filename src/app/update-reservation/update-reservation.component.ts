import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../model/reservation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../service/reservation.service';
import { Residence } from '../model/residence.model';
import { Client } from '../model/client.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-reservation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-reservation.component.html',
  styleUrl: './update-reservation.component.css'
})
export class UpdateReservationComponent {


  currentReservation = new Reservation();
  listeClient! : Client[];
  updateClientId! : number;
  listeResidence! : Residence[];
  updateResidenceId! : number;

  constructor(private activationRoute: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService) {

      this.reservationService.listeResidence().subscribe(residences => {this.listeResidence = residences;});
      this.reservationService.listeClient().subscribe(clients => {this.listeClient = clients;});

      this.reservationService.consulterReservation(this.activationRoute.snapshot.params['id']).subscribe(reservation => { this.currentReservation = reservation;
        this.updateClientId = this.currentReservation.client.idClient;
        this.updateResidenceId = this.currentReservation.residence.idResidence;
      });


    }

    updateReservation(){
      this.currentReservation.client = this.listeClient.find(client => client.idClient == this.updateClientId)!;
      this.currentReservation.residence = this.listeResidence.find(residence => residence.idResidence == this.updateResidenceId)!;

      if(this.currentReservation.dateEntrer > this.currentReservation.dateSortie){
        window.alert("la date d'entrer est superieur a la date de sortie")
      } else {
        this.reservationService.updateReservationService(this.currentReservation).subscribe(reservation => {
          this.router.navigate(['reservations']);
       });
      }
    }

}
