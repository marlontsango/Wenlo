import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  standalone: false,
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {

  constructor(private router: Router){

  }

  submitNewPassword(){
    this.router.navigate(['/activate-account']);

  }

}
