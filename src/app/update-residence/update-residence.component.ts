import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Residence } from '../model/residence.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { TypeResidence } from '../model/type-residence.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-residence',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-residence.component.html',
  styleUrl: './update-residence.component.css'
})
export class UpdateResidenceComponent {

  currentResidence = new Residence();
  listTypeResidence! : TypeResidence[];
  updatedTypeId! : number;

  constructor(private activationRoute: ActivatedRoute,
    private router: Router,
    private residenceService: ResidenceService) {

      this.residenceService.listeTypResidenceService().subscribe(types => {this.listTypeResidence = types;});

      this.residenceService.consulterResidence(this.activationRoute.snapshot.params['id']).subscribe(residence => { this.currentResidence = residence;
      this.updatedTypeId = this.currentResidence.typeResidence.idTypeResidence;});
    }

    updateResidence(){
      this.currentResidence.typeResidence = this.listTypeResidence.find(types => types.idTypeResidence == this.updatedTypeId)!;
      this.residenceService.updateResidenceService(this.currentResidence).subscribe(resid => {
        this.router.navigate(['residences']);
      });
    }

}
