import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBalanceChart02Component } from './main-balance-chart02.component';

describe('MainBalanceChart02Component', () => {
  let component: MainBalanceChart02Component;
  let fixture: ComponentFixture<MainBalanceChart02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainBalanceChart02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBalanceChart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
