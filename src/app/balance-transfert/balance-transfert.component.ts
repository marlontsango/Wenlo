import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-transfert',
  standalone: false,
  templateUrl: './balance-transfert.component.html',
  styleUrl: './balance-transfert.component.css'
})
export class BalanceTransfertComponent {
  viewTopUpDialog: boolean = false;
  successDialog: boolean = false;
  rejectDialog: boolean = false;
  newTopUpDialog: boolean = false;

  showViewDialog(){
    this.viewTopUpDialog = true;
  }

  successBalance(){
    this.successDialog = true;
  }

  rejectedBalance(){
    this.rejectDialog = true;
  }

  OpenBalanceDialog(){
    this.newTopUpDialog = true;
  }

}
