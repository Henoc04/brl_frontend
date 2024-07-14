import { Component } from '@angular/core';
import { Residence } from '../model/residence.model';
import { FormsModule } from '@angular/forms';
import { ResidenceService } from '../service/residence.service';
import { Router } from '@angular/router';
import { TypeResidence } from '../model/type-residence.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addresidences',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './addresidences.component.html',
  styleUrl: './addresidences.component.css'
})
export class AddresidencesComponent {

  newResidence = new Residence();

  // pour avoir la liste des type lors de l'ajout d'une nouvelle residence
  listTypeResidences! : TypeResidence[];

  newIdTypeResidence! : number;
  newtypeResidence! : TypeResidence;

  constructor(private residServ: ResidenceService,
    //initialisation de la liste lors de l'ajout
    private router : Router){
     this.residServ.listeTypResidenceService().subscribe(types => {this.listTypeResidences = types;
         console.log(types);
    });

    }

  ajouterResidence(){
   this.newResidence.typeResidence = this.listTypeResidences.find(type => type.idTypeResidence == this.newIdTypeResidence)!;
   this.residServ.addResidencesService(this.newResidence)
    .subscribe(resid => {
      console.log(resid);
      this.router.navigate(['residences']);
      });

  }

}
