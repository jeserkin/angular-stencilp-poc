import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StencilPocCardComponent } from './stencil-poc-card.component';

describe('StencilPocComponent', () => {
  let component: StencilPocCardComponent;
  let fixture: ComponentFixture<StencilPocCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StencilPocCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StencilPocCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
