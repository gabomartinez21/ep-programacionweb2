import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDeProductosComponent } from './detalles-de-productos.component';

describe('DetallesDeProductosComponent', () => {
  let component: DetallesDeProductosComponent;
  let fixture: ComponentFixture<DetallesDeProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesDeProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
