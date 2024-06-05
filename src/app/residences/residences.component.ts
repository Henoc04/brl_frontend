import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Residence } from '../model/residence.model';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-residences',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './residences.component.html',
  styleUrl: './residences.component.css'
})
export class ResidencesComponent {


  residences? : Residence[];

  constructor(private residenceService: ResidenceService,
    private router : Router){

   this.allResidences();
  }

 allResidences(){
  this.residenceService.listeResidences().subscribe(resi => {
    this.residences = resi;
   });
  }

  supprimerResidence(r: Residence){
    let conf = confirm("Etes-vous sûr ? ");
    if (conf)
      this.residenceService.supprimerResidenceService(r.idResidence).subscribe(() => {
        this.allResidences();
    this.router.navigate(['residences']);
    });
  }

}
