import { Component } from '@angular/core';
import feather from 'feather-icons';

@Component({
  selector: 'app-login-side-menu',
  standalone: false,
  templateUrl: './login-side-menu.component.html',
  styleUrl: './login-side-menu.component.css'
})
export class LoginSideMenuComponent {

      ngAfterViewInit() {
      feather.replace();
    }
}
