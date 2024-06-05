import { Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { AddclientsComponent } from './addclients/addclients.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ResidencesComponent } from './residences/residences.component';
import { AddresidencesComponent } from './addresidences/addresidences.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';

export const routes: Routes = [
  { path: "clients", component: ClientsComponent},
  { path: "addclients", component: AddclientsComponent},
  { path: "updateclient/:id", component: UpdateClientComponent},
  { path: "residences", component: ResidencesComponent},
  { path: "addresidences", component: AddresidencesComponent},
  { path: "updateresidence/:id", component: UpdateResidenceComponent},
  //{ path: "", redirectTo:"clients", pathMatch: "full" }
];
