import { Component } from '@angular/core';

@Component({
  selector: 'app-facebook-ad-account',
  standalone: false,
  templateUrl: './facebook-ad-account.component.html',
  styleUrl: './facebook-ad-account.component.css'
})
export class FacebookAdAccountComponent {

  newTopUpDialog:boolean;
  downloadDialog:boolean;
  viewTopUpDialog: boolean;
  activeTab = 'request';

  constructor(){
    this.newTopUpDialog = false;
    this.downloadDialog = false;
    this.viewTopUpDialog = false;
  }

  OPenTopUpDialog(){

  }  

  showViewDialog(){

  }

  downloadTopUp(){

  }

  setTab(tab: string){
    this.activeTab = tab;
  }

}
