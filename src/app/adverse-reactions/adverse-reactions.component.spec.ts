import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverseReactionsComponent } from './adverse-reactions.component';

describe('AdverseReactionsComponent', () => {
  let component: AdverseReactionsComponent;
  let fixture: ComponentFixture<AdverseReactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdverseReactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverseReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
