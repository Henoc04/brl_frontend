import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Depense } from '../model/depense.model';
import { Residence } from '../model/residence.model';
import { DepenseService } from '../service/depense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddepense',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './adddepense.component.html',
  styleUrl: './adddepense.component.css'
})
export class AdddepenseComponent {


  newDepense = new Depense();

  // pour avoir la liste des type lors de l'ajout d'une nouvelle residence
  listResidences! : Residence[];

  newIdResidence! : number;
  newResidence! : Residence;

  constructor(private depenseService: DepenseService,
    //initialisation de la liste lors de l'ajout
    private router : Router){
     this.depenseService.listeResidenceService().subscribe(residence => {this.listResidences = residence;
         console.log(residence);
    });

    }

  ajouterDepense(){
   this.newDepense.residence = this.listResidences.find(residence => residence.idResidence == this.newIdResidence)!;
   this.depenseService.addDepenseService(this.newDepense)
    .subscribe(depense => {
      console.log(depense);
      this.router.navigate(['depense']);
      });
  }

}
