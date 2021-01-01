import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBasketComponent } from './block-basket.component';

describe('BlockBasketComponent', () => {
  let component: BlockBasketComponent;
  let fixture: ComponentFixture<BlockBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
