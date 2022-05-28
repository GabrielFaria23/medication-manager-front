import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationCadastredComponent } from './medication-cadastred.component';

describe('MedicationCadastredComponent', () => {
  let component: MedicationCadastredComponent;
  let fixture: ComponentFixture<MedicationCadastredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationCadastredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationCadastredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
