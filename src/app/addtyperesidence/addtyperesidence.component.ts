import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeResidence } from '../model/type-residence.model';
import { TypeResidenceService } from '../service/type-residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtyperesidence',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtyperesidence.component.html',
  styleUrl: './addtyperesidence.component.css'
})
export class AddtyperesidenceComponent {

  newTypeResidence = new TypeResidence();
  
  constructor(private type: TypeResidenceService,
    private router : Router){}

  ajouterTypeResidence(){
   this.type.addTypeResidencesService(this.newTypeResidence)
    .subscribe(type => {
      console.log(type);
      this.router.navigate(['typeresidence']);
      });

  }

}
