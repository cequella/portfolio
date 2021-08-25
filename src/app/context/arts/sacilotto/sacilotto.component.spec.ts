import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacilottoComponent } from './sacilotto.component';

describe('SacilottoComponent', () => {
  let component: SacilottoComponent;
  let fixture: ComponentFixture<SacilottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacilottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SacilottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
