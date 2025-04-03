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
  constructor(){
    this.sidebarToggle = false;
    feather.replace();

  }
  ngAfterViewInit() {
    feather.replace();
  }

  openHeader(){
    this.sidebarToggle = !this.sidebarToggle;
  }
}
