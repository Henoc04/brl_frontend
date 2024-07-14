import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Depense } from '../model/depense.model';
import { Residence } from '../model/residence.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DepenseService } from '../service/depense.service';

@Component({
  selector: 'app-update-depense',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-depense.component.html',
  styleUrl: './update-depense.component.css'
})
export class UpdateDepenseComponent {


  currentDepense = new Depense();
  listResidence! : Residence[];
  updatedResidenceId! : number;

  constructor(private activationRoute: ActivatedRoute,
    private router: Router,
    private depenseService: DepenseService) {

      this.depenseService.listeResidenceService().subscribe(residences => {this.listResidence = residences;});

      this.depenseService.consulterDepense(this.activationRoute.snapshot.params['id']).subscribe(depense => { this.currentDepense = depense;
      this.updatedResidenceId = this.currentDepense.residence.idResidence;});
    }

    updateDepense(){
      this.currentDepense.residence = this.listResidence.find(residences => residences.idResidence == this.updatedResidenceId)!;
      this.depenseService.updateDepenseService(this.currentDepense).subscribe(dep => {
        this.router.navigate(['depense']);
      });
    }

}
