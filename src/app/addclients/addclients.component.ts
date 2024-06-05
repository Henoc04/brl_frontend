import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclients',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addclients.component.html',
  styleUrl: './addclients.component.css'
})
export class AddclientsComponent {

  newClient = new Client();
  constructor(private clientServ: ClientService,
    private router : Router){}

  ajouterClient(){
   this.clientServ.addClientService(this.newClient)
    .subscribe(clie => {
      console.log(clie);
      this.router.navigate(['clients']);
      });

  }

}
