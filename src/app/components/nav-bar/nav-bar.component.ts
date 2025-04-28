import { Component, ViewChild } from '@angular/core';
import * as feather from 'feather-icons';
import { Popover } from 'primeng/popover';
@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @ViewChild('op') op!: Popover;

  sidebarToggle: boolean;
  menuToggle: boolean;
  showBell: boolean;
  constructor() {
    this.sidebarToggle = false;
    this.menuToggle = false;
    this.showBell = false;
    feather.replace();
  }
  ngAfterViewInit() {
    feather.replace();
  }

  openHeader() {
    this.sidebarToggle = !this.sidebarToggle;
  }

  openBell() {
    console.log('is open');
    this.op.show(event);
    if (this.op.container) {
      this.op.align();
    }
  }

  hidePopover() {
    this.op.hide();
  }
}
