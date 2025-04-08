import { Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  sidebarToggle: boolean;
  menuToggle: boolean;
  constructor(){
    this.sidebarToggle = false;
    this.menuToggle = false;
    feather.replace();

  }
  ngAfterViewInit() {
    feather.replace();
  }

  openHeader(){
    this.sidebarToggle = !this.sidebarToggle;
  }
}
