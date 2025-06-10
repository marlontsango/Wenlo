import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-balance',
  standalone: false,
  templateUrl: './main-balance.component.html',
  styleUrl: './main-balance.component.css',
})
export class MainBalanceComponent {
  constructor(private router: Router) {}

  withdrawalMoney() {
    this.router.navigate(['/orderList']);
  }

  depositMoney() {
    this.router.navigate(['/orderList']);
  }
}
