import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAdAccountComponent } from './google-ad-account.component';

describe('GoogleAdAccountComponent', () => {
  let component: GoogleAdAccountComponent;
  let fixture: ComponentFixture<GoogleAdAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleAdAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleAdAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
