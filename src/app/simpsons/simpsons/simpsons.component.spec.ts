import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsComponent } from './simpsons.component';

describe('SimpsonsComponent', () => {
  let component: SimpsonsComponent;
  let fixture: ComponentFixture<SimpsonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpsonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
