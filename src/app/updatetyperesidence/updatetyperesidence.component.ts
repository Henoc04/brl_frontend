import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeResidence } from '../model/type-residence.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeResidenceService } from '../service/type-residence.service';

@Component({
  selector: 'app-updatetyperesidence',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updatetyperesidence.component.html',
  styleUrl: './updatetyperesidence.component.css'
})
export class UpdatetyperesidenceComponent {


  currentTypeResidence = new TypeResidence();

  constructor(private activationRoute: ActivatedRoute,
    private router: Router,
    private typeResidenceService: TypeResidenceService) {

      this.typeResidenceService.consulterTypeResidence(this.activationRoute.snapshot.params['id']).subscribe(type => { this.currentTypeResidence = type;});
    }

    updateTypeResidence(){
      this.typeResidenceService.updateTypeResidenceService(this.currentTypeResidence).subscribe(type => {
        this.router.navigate(['typeresidence']);
      });
    }


}
