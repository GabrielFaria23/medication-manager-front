import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdverseReactionsComponent } from './add-adverse-reactions.component';

describe('AddAdverseReactionsComponent', () => {
  let component: AddAdverseReactionsComponent;
  let fixture: ComponentFixture<AddAdverseReactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdverseReactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdverseReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
