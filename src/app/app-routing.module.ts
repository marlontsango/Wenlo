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
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { MainBalanceComponent } from './main-balance/main-balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopUpBilingsComponent } from './top-up-bilings/top-up-bilings.component';
import { BalanceTransfertComponent } from './balance-transfert/balance-transfert.component';
import { FacebookAdAccountComponent } from './facebook-ad-account/facebook-ad-account.component';
import { GoogleAdAccountComponent } from './google-ad-account/google-ad-account.component';
import { ManageAdAccountAccessComponent } from './manage-ad-account-access/manage-ad-account-access.component';
import { PeopleComponent } from './people/people.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'activate-account', component: ActivateAccountComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'new-password', component: NewPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'subscription', component: SubscriptionPlanComponent },
  { path: 'onboarding', component: UserOnboardingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'main-balance', component: MainBalanceComponent },
  { path: 'choose-payment', component: ChoosePaymentMethodComponent },
  { path: 'pricing', component: PricingPlanComponent },
  { path: 'Top-up', component: TopUpBilingsComponent },
  { path: 'facebook', component: FacebookAdAccountComponent },
  { path: 'google', component: GoogleAdAccountComponent },
  { path: 'manage-account-access', component: ManageAdAccountAccessComponent },
  { path: 'people-business', component: PeopleComponent },
  { path: 'withdraw', component: PeopleComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'balance-transfert', component: BalanceTransfertComponent },

  { path: '**', component: PageNotFoundComponentComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
