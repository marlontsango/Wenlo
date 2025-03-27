import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import feather from 'feather-icons';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userCanAccess = false;
  routerValue: string | undefined = 'string';
  isRegistered!: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {}

  setAccount() {
    console.log('user can access', this.userCanAccess);
    this.userCanAccess = true;
  }

  ionViewWillEnter() {
    this.routerValue = this.route.snapshot.routeConfig?.path;
    console.log('router value', this.routerValue);
  }

  register() {
    this.isRegistered = true;
    this.router.navigate(['/login']);
  }

    ngAfterViewInit() {
      feather.replace();
    }
}
