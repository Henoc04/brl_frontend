import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Reservation } from '../model/reservation.model';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {

  reservations? : Reservation[];

  constructor(private reservationService: ReservationService,
    private router : Router){

   this.allReservation();
  }

 allReservation(){
  this.reservationService.listeReservations().subscribe(reservations => {
    this.reservations = reservations;
    console.log(reservations);
   });
  }

  supprimerReservation( r: Reservation){
    let conf = confirm("Etes-vous sûr ? ");
    if (conf)
      this.reservationService.supprimerReservationService(r.idReservation).subscribe(() => {
        this.allReservation();
    this.router.navigate(['reservations']);
    });
  }

  getRowClass(status: string): string {
    switch (status) {
      case 'En attente':
        return 'table-warning'; // Classe Bootstrap pour couleur jaune
      case 'En cours':
        return 'table-success'; // Classe Bootstrap pour couleur verte
      case 'Terminer':
        return 'table-danger'; // Classe Bootstrap pour couleur rouge
      default:
        return '';
    }
  }

}
