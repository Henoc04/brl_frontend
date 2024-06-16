import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TypeResidence } from '../model/type-residence.model';
import { TypeResidenceService } from '../service/type-residence.service';

@Component({
  selector: 'app-type-residence',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './type-residence.component.html',
  styleUrl: './type-residence.component.css'
})
export class TypeResidenceComponent {

  typeResidence? : TypeResidence[];

  constructor(private typeResidenceService: TypeResidenceService,
    private router : Router){

   this.allTypes();
  }

 allTypes(){
  this.typeResidenceService.listeType().subscribe(type => {
    this.typeResidence = type ;
   });
  }

}
