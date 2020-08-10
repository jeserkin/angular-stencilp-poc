import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StencilPocDatepickerComponent } from './stencil-poc-datepicker.component';

describe('StencilPocDatepickerComponent', () => {
  let component: StencilPocDatepickerComponent;
  let fixture: ComponentFixture<StencilPocDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StencilPocDatepickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StencilPocDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
