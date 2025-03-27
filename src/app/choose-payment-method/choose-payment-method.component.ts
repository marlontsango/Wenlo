import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-payment-method',
  standalone: false,
  templateUrl: './choose-payment-method.component.html',
  styleUrl: './choose-payment-method.component.css'
})
export class ChoosePaymentMethodComponent {
  activeStep: number = 1;

}
