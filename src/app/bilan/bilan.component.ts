import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bilan } from '../model/bilan.model';
import { BilanService } from '../service/bilan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bilan',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './bilan.component.html',
  styleUrl: './bilan.component.css'
})
export class BilanComponent {

  bilans? : Bilan[];

  constructor(private bilanService: BilanService,
    private router : Router){

   this.allbilan();
  }

 allbilan(){
  this.bilanService.bilan().subscribe(bil => {
    this.bilans = bil;
   });
  }

}
