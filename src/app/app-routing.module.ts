import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RegisterComponent } from './register/register.component';
import { UserOnboardingComponent } from './user-onboarding/user-onboarding.component';
import { ChoosePaymentMethodComponent } from './choose-payment-method/choose-payment-method.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: 'activate-account', component: ActivateAccountComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'new-password', component: NewPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'onboarding', component: UserOnboardingComponent },
  { path: 'choose-payment', component: ChoosePaymentMethodComponent },
  { path: 'pricing', component: PricingPlanComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
