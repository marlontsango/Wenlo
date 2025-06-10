import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessAssetsDetailsComponent } from './add-business-assets-details.component';

describe('AddBusinessAssetsDetailsComponent', () => {
  let component: AddBusinessAssetsDetailsComponent;
  let fixture: ComponentFixture<AddBusinessAssetsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBusinessAssetsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBusinessAssetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
