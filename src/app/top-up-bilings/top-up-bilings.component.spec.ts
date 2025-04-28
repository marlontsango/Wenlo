import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpBilingsComponent } from './top-up-bilings.component';

describe('TopUpBilingsComponent', () => {
  let component: TopUpBilingsComponent;
  let fixture: ComponentFixture<TopUpBilingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopUpBilingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopUpBilingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
