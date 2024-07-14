import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Depense } from '../model/depense.model';
import { DepenseService } from '../service/depense.service';

@Component({
  selector: 'app-depense',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './depense.component.html',
  styleUrl: './depense.component.css'
})
export class DepenseComponent {


  depenses? : Depense[];

  constructor(private depenseService: DepenseService,
    private router : Router){

   this.allDepenses();
  }

 allDepenses(){
  this.depenseService.listeDepenses().subscribe(dep => {
    this.depenses = dep;
   });
  }

  supprimerDepense(d: Depense){
    let conf = confirm("Etes-vous sûr ? ");
    if (conf)
      this.depenseService.supprimerDepenseService(d.idDepense).subscribe(() => {
        this.allDepenses();
    this.router.navigate(['depense']);
    });
  }

}
