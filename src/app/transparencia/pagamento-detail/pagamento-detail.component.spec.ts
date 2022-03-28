import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoDetailComponent } from './pagamento-detail.component';

describe('PagamentoDetailComponent', () => {
  let component: PagamentoDetailComponent;
  let fixture: ComponentFixture<PagamentoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
