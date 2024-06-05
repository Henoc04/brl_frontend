import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { FormsModule } from '@angular/forms';
import { Client } from '../model/client.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent {

  currentClient = new Client();

  constructor(private activationRoute: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) {

      this.clientService.consulterClient(this.activationRoute.snapshot.params['id']).subscribe(client => { this.currentClient = client;});
    }

    updateClient(){
      this.clientService.updateClientService(this.currentClient).subscribe(clie => {
        this.router.navigate(['clients']);
      });
    }

}
