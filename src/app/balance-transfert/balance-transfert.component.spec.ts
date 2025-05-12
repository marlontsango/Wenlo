import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTransfertComponent } from './balance-transfert.component';

describe('BalanceTransfertComponent', () => {
  let component: BalanceTransfertComponent;
  let fixture: ComponentFixture<BalanceTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceTransfertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
