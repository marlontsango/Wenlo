import { Component } from '@angular/core';

@Component({
  selector: 'app-top-up-bilings',
  standalone: false,
  templateUrl: './top-up-bilings.component.html',
  styleUrl: './top-up-bilings.component.css'
})
export class TopUpBilingsComponent {
  viewTopUpDialog: boolean = false;
  downloadDialog: boolean = false;
  newTopUpDialog: boolean = false;

  showViewDialog(){
    this.viewTopUpDialog = true;
  }

  downloadTopUp(){
    this.downloadDialog = true;
  }

  OPenTopUpDialog(){
    this.newTopUpDialog = true;
  }

}
