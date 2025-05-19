import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-ad-account-access',
  standalone: false,
  templateUrl: './manage-ad-account-access.component.html',
  styleUrl: './manage-ad-account-access.component.css',
})
export class ManageAdAccountAccessComponent {
  downloadDialog: boolean = false;
  newTopUpDialog: boolean = false;
  viewTopUpDialog: boolean = false;

  oPenTopUpDialog() {
    this.newTopUpDialog = true;
  }
  showViewDialog() {
    this.viewTopUpDialog = true;
  }
}
