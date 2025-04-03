import { Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  ngAfterViewInit() {
    feather.replace();
  }
}
