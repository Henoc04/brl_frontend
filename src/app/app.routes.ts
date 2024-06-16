import { Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { AddclientsComponent } from './addclients/addclients.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ResidencesComponent } from './residences/residences.component';
import { AddresidencesComponent } from './addresidences/addresidences.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';
import { TypeResidenceComponent } from './type-residence/type-residence.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AddreservationComponent } from './addreservation/addreservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

export const routes: Routes = [
  { path: "clients", component: ClientsComponent},
  { path: "addclients", component: AddclientsComponent},
  { path: "updateclient/:id", component: UpdateClientComponent},
  { path: "residences", component: ResidencesComponent},
  { path: "addresidences", component: AddresidencesComponent},
  { path: "updateresidence/:id", component: UpdateResidenceComponent},
  { path: "typeresidence", component: TypeResidenceComponent},
  { path: "reservations", component: ReservationsComponent},
  { path: "addreservation", component: AddreservationComponent},
  { path: "updatereservation/:id", component: UpdateReservationComponent},
  { path: "acceuil", component: AcceuilComponent},
  //{ path: "", redirectTo:"acceuil", pathMatch: "full" }
];
