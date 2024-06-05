import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../model/client.model';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {


  clients? : Client[];

  constructor(private clientService: ClientService,
    private router : Router){

   this.allClients();
  }

 allClients(){
  this.clientService.listeClients().subscribe(clie => {
    this.clients = clie;
   });
  }

  supprimerClient(c: Client){
    let conf = confirm("Etes-vous sûr ? ");
    if (conf)
      this.clientService.supprimerClient(c.idClient).subscribe(() => {
        this.allClients();
    this.router.navigate(['clients']);
    });
  }

}
