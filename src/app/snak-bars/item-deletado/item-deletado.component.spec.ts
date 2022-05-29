import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDeletadoComponent } from './item-deletado.component';

describe('ItemDeletadoComponent', () => {
  let component: ItemDeletadoComponent;
  let fixture: ComponentFixture<ItemDeletadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDeletadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDeletadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
