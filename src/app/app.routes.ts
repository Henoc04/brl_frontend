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
import { AddtyperesidenceComponent } from './addtyperesidence/addtyperesidence.component';
import { UpdatetyperesidenceComponent } from './updatetyperesidence/updatetyperesidence.component';
import { DepenseComponent } from './depense/depense.component';
import { AdddepenseComponent } from './adddepense/adddepense.component';
import { UpdateDepenseComponent } from './update-depense/update-depense.component';
import { Bilan } from './model/bilan.model';
import { BilanComponent } from './bilan/bilan.component';

export const routes: Routes = [
  { path: "clients", component: ClientsComponent},
  { path: "addclients", component: AddclientsComponent},
  { path: "updateclient/:id", component: UpdateClientComponent},
  { path: "residences", component: ResidencesComponent},
  { path: "addresidences", component: AddresidencesComponent},
  { path: "updateresidence/:id", component: UpdateResidenceComponent},
  { path: "typeresidence", component: TypeResidenceComponent},
  { path: "addtyperesidence", component: AddtyperesidenceComponent},
  { path: "updatetyperesidence/:id", component: UpdatetyperesidenceComponent},
  { path: "reservations", component: ReservationsComponent},
  { path: "addreservation", component: AddreservationComponent},
  { path: "updatereservation/:id", component: UpdateReservationComponent},
  { path: "depense", component: DepenseComponent},
  { path: "adddepense", component: AdddepenseComponent},
  { path: "updatedepense/:id", component: UpdateDepenseComponent},
  { path: "bilan", component: BilanComponent},
  { path: "acceuil", component: AcceuilComponent},
  //{ path: "", redirectTo:"acceuil", pathMatch: "full" }
];
