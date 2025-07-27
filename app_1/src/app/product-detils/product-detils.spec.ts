import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetils } from './product-detils';

describe('ProductDetils', () => {
  let component: ProductDetils;
  let fixture: ComponentFixture<ProductDetils>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetils]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetils);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
