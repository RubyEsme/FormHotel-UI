import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespedidaComponent } from './despedida.component';

describe('DespedidaComponent', () => {
  let component: DespedidaComponent;
  let fixture: ComponentFixture<DespedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespedidaComponent]
    });
    fixture = TestBed.createComponent(DespedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
