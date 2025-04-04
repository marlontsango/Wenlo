import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { UserOnboardingComponent } from './user-onboarding/user-onboarding.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ChoosePaymentMethodComponent } from './choose-payment-method/choose-payment-method.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginSideMenuComponent } from './login-side-menu/login-side-menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButton } from 'primeng/togglebutton';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NewPasswordComponent,
    UserOnboardingComponent,
    ForgotPasswordComponent,
    ActivateAccountComponent,
    ChoosePaymentMethodComponent,
    PricingPlanComponent,
    PageNotFoundComponentComponent,
    LoginSideMenuComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add if needed
    FormsModule,      // Add if needed
    StepperModule,
    ButtonModule,
    InputTextModule,
    ToggleButton,
    IconField,
    InputIcon,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
 bootstrap: [AppComponent],
 providers: [
  provideAnimationsAsync(),
  providePrimeNG({
      theme: {
          preset: Aura
      }
  })
 ]
})
export class AppModule { }
