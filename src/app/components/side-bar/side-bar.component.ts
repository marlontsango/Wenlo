import { Component } from '@angular/core';
import * as feather from 'feather-icons';
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'
@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
sidebarToggle: boolean;
$buttonElement = document.querySelector('#button');
$modalElement = document.querySelector('#default-sidebar');
canCollapse: boolean;


  constructor(){
    this.sidebarToggle = false;
    this.canCollapse = false;
  }
  ngAfterViewInit() {
    feather.replace();
  }

  toggleSidebar() {
    this.sidebarToggle = !this.sidebarToggle;
  }

  dropDownMenu(){
    console.log('can collpase', this.canCollapse);
    this.canCollapse = !this.canCollapse;

  }
}
