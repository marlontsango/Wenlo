import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBalanceChart01Component } from './main-balance-chart01.component';

describe('MainBalanceChart01Component', () => {
  let component: MainBalanceChart01Component;
  let fixture: ComponentFixture<MainBalanceChart01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainBalanceChart01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBalanceChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
