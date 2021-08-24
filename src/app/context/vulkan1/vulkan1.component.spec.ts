import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vulkan1Component } from './vulkan1.component';

describe('Vulkan1Component', () => {
  let component: Vulkan1Component;
  let fixture: ComponentFixture<Vulkan1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vulkan1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vulkan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
