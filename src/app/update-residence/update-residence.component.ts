import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Residence } from '../model/residence.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-update-residence',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-residence.component.html',
  styleUrl: './update-residence.component.css'
})
export class UpdateResidenceComponent {

  currentResidence = new Residence();

  constructor(private activationRoute: ActivatedRoute,
    private router: Router,
    private residenceService: ResidenceService) {

      this.residenceService.consulterResidence(this.activationRoute.snapshot.params['id']).subscribe(residence => { this.currentResidence = residence;});
    }

    updateResidence(){
      this.residenceService.updateResidenceService(this.currentResidence).subscribe(resid => {
        this.router.navigate(['residences']);
      });
    }

}
