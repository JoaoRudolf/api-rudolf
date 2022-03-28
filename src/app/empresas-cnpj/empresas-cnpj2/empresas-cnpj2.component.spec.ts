import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasCnpj2Component } from './empresas-cnpj2.component';

describe('EmpresasCnpj2Component', () => {
  let component: EmpresasCnpj2Component;
  let fixture: ComponentFixture<EmpresasCnpj2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasCnpj2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasCnpj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
