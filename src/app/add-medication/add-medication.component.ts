import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../manufacturer/manufacturer.model';
import { Medication } from '../medication/medication.model';
import { MedicationService } from '../medication/medication.service';
import { AdverseReactionsService } from '../adverse-reactions/AdverseReactions.service';
import { ManufacturerService } from '../manufacturer/Manufacturer.service';
import { AdverseReactions } from '../adverse-reactions/adverse-reactions.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnvisaRegistrationNumberAlreadyCadastredComponent } from '../snak-bars/anvisa-registration-number-already-cadastred/anvisa-registration-number-already-cadastred.component';
import { Router } from '@angular/router';
import { MedicationCadastredComponent } from '../snak-bars/medication-cadastred/medication-cadastred.component';
import { ErrorRequestComponent } from '../snak-bars/error-request/error-request.component';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.css']
})
export class AddMedicationComponent implements OnInit {

  medication: Medication;
  adverseReactions: AdverseReactions[] = [];
  manufacturers: Manufacturer[] = [];

  formMedication: FormGroup;

  manufacturerSelected: number;
  adverseReactionsSelected: number[] = [];

  constructor(private medicationService: MedicationService,
              private adverseReactionService: AdverseReactionsService,
              private manufacturerService: ManufacturerService,
              private router: Router,
              private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {    
    this.configForm();
    this.getAdverseReactions();
    this.getManufacturer();
  }

  configForm(){{
    this.formMedication = this.formBuilder.group({
      anvisaRegistrationNumber: [null, [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      name: [null, Validators.required],
      expirationDate: [null, Validators.required],
      telephoneSac: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      price: [null, Validators.required],
      quantityPills: [null, Validators.required],
      adverseReactions:[null, Validators.required],
      manufacturer: [null, Validators.required]
    });
  }}

  save(){    
    this.medicationService.checkAnvisaRegistrationNumber(this.formMedication.controls['anvisaRegistrationNumber'].value).subscribe(data =>{
      if(!data)
        this.openSnackBarAnvisaNumberRegistration()
      else {
        this.medicationService.createMedication(this.formMedication.value)
        .subscribe(
          (data2)=>{
            this.medication= data2;  
            this.openSnackBarMedicationCadastred(); 
            this.gotoList();        
          },
          (error) =>{
            this.openSnackBarMedicationError();
          });
      }
    });
  }

  onSubmit(){
    this.save();
  }

  gotoList(){
    this.router.navigate(['medication']);
  }

  getAdverseReactions(){
    this.adverseReactionService.getAdverseReactionsList().subscribe(data =>{
      this.adverseReactions = data;
    });;
  }

  getManufacturer(){
    this.manufacturerService.getManufacturerList().subscribe(data =>{
      this.manufacturers = data;
    });
  }

  getValueSelected():void{
    this.formMedication.patchValue({
      manufacturer: new Manufacturer(this.manufacturerSelected),
      adverseReactions: this.adverseReactionsSelected.map(value =>{{
        return new AdverseReactions(value);
      }})
    });
  }

  openSnackBarAnvisaNumberRegistration() {
    this._snackBar.openFromComponent(AnvisaRegistrationNumberAlreadyCadastredComponent, {
      duration: 5 * 1000,
    });    
  }

  openSnackBarMedicationCadastred() {
    this._snackBar.openFromComponent(MedicationCadastredComponent, {
      duration: 5 * 1000,
    });    
  }

  openSnackBarMedicationError() {
    this._snackBar.openFromComponent(ErrorRequestComponent, {
      duration: 5 * 1000,
    });    
  }

}
