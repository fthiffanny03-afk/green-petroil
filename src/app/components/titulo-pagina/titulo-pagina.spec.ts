import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TituloPagina } from './titulo-pagina';

describe('TituloPagina', () => {
  let component: TituloPagina;
  let fixture: ComponentFixture<TituloPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloPagina],
    }).compileComponents();

    fixture = TestBed.createComponent(TituloPagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
