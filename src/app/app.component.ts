import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'wenlo';
  currentPath: string | null = null;



  userCanAccess = false;
  routerValue: string | undefined = 'string';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.routerValue = this.route.snapshot.routeConfig?.path;
    console.log('Current Path:', this.routerValue);
  }

  ngAfterViewInit() {
    feather.replace();
  }

  setAccount() {
    console.log('user can access', this.userCanAccess);
    this.userCanAccess = true;
  }
/*   logIn() {
    this.isLogged = false;
  } */
}
