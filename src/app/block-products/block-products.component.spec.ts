import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockProductsComponent } from './block-products.component';

describe('BlockProductsComponent', () => {
  let component: BlockProductsComponent;
  let fixture: ComponentFixture<BlockProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
