import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSideMenuComponent } from './login-side-menu.component';

describe('LoginSideMenuComponent', () => {
  let component: LoginSideMenuComponent;
  let fixture: ComponentFixture<LoginSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
