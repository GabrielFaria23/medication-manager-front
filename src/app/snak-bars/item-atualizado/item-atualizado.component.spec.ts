import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAtualizadoComponent } from './item-atualizado.component';

describe('ItemAtualizadoComponent', () => {
  let component: ItemAtualizadoComponent;
  let fixture: ComponentFixture<ItemAtualizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAtualizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAtualizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
