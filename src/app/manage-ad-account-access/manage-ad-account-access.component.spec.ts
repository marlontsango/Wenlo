import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdAccountAccessComponent } from './manage-ad-account-access.component';

describe('ManageAdAccountAccessComponent', () => {
  let component: ManageAdAccountAccessComponent;
  let fixture: ComponentFixture<ManageAdAccountAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageAdAccountAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAdAccountAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
