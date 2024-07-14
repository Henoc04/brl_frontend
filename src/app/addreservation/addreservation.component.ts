import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../model/reservation.model';
import { Residence } from '../model/residence.model';
import { Client } from '../model/client.model';
import { ReservationService } from '../service/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreservation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addreservation.component.html',
  styleUrl: './addreservation.component.css'
})
export class AddreservationComponent {


  newReservation = new Reservation();

  // pour avoir la liste des type lors de l'ajout d'une nouvelle residence
  listResidences! : Residence[];
  listClient! : Client[];

  newIdResidence! : number;
  newResidence! : Residence;

  newIdClient! : number;
  newClient! : Client;

  constructor(private reservationService: ReservationService,
    //initialisation de la liste lors de l'ajout
    private router : Router){
     this.reservationService.listeResidence().subscribe(residences => {this.listResidences = residences.filter(res => res.etatResidence === 'Disponible');
         console.log(residences);
    });

    this.reservationService.listeClient().subscribe(clients => {this.listClient = clients;
      console.log(clients);
    });

    }

  ajouterReservation(){
   this.newReservation.residence = this.listResidences.find(residence => residence.idResidence == this.newIdResidence)!;
   this.newReservation.client = this.listClient.find(client => client.idClient == this.newIdClient)!;

   this.reservationService.addReservationService(this.newReservation)
    .subscribe(reservation => {
      console.log(reservation);
      this.router.navigate(['reservations']);
      });

  }


}
