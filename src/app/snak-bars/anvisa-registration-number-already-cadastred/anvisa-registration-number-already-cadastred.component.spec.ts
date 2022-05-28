import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnvisaRegistrationNumberAlreadyCadastredComponent } from './anvisa-registration-number-already-cadastred.component';

describe('AnvisaRegistrationNumberAlreadyCadastredComponent', () => {
  let component: AnvisaRegistrationNumberAlreadyCadastredComponent;
  let fixture: ComponentFixture<AnvisaRegistrationNumberAlreadyCadastredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnvisaRegistrationNumberAlreadyCadastredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnvisaRegistrationNumberAlreadyCadastredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
