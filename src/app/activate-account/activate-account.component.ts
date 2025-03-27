import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-account',
  standalone: false,
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.css'
})
export class ActivateAccountComponent {

  constructor(private router: Router){

  }

  activateAccount(){
    this.router.navigate(['/choose-payment']);

  }

}
