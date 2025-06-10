import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  standalone: false,
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  isEditProfil: boolean = false;

  constructor(){

  }

  editProdil(){
    this.isEditProfil = !this.isEditProfil;
  }

}
