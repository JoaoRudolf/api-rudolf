import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickDetailComponent } from './rick-detail.component';

describe('RickDetailComponent', () => {
  let component: RickDetailComponent;
  let fixture: ComponentFixture<RickDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
