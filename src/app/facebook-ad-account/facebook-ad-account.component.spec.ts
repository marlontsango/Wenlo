import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAdAccountComponent } from './facebook-ad-account.component';

describe('FacebookAdAccountComponent', () => {
  let component: FacebookAdAccountComponent;
  let fixture: ComponentFixture<FacebookAdAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacebookAdAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookAdAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
