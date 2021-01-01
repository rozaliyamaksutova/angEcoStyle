import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrderendComponent } from './page-orderend.component';

describe('PageOrderendComponent', () => {
  let component: PageOrderendComponent;
  let fixture: ComponentFixture<PageOrderendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOrderendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOrderendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
