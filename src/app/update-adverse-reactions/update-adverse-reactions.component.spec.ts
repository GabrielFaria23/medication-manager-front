import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdverseReactionsComponent } from './update-adverse-reactions.component';

describe('UpdateAdverseReactionsComponent', () => {
  let component: UpdateAdverseReactionsComponent;
  let fixture: ComponentFixture<UpdateAdverseReactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdverseReactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdverseReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
