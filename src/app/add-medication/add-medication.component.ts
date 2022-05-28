import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../manufacturer/manufacturer.model';
import { Medication } from '../medication/medication.model';
import { MedicationService } from '../medication/medication.service';
import { AdverseReactionsService } from '../adverse-reactions/AdverseReactions.service';
import { ManufacturerService } from '../Manufacturer.service';
import { AdverseReactions } from '../adverse-reactions/adverse-reactions.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnvisaRegistrationNumberAlreadyCadastredComponent } from '../snak-bars/anvisa-registration-number-already-cadastred/anvisa-registration-number-already-cadastred.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.css']
})
export class AddMedicationComponent implements OnInit {

  submitted = false;

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
      anvisaRegistrationNumber: [null, [Validators.required, Validators.minLength(15), Validators.maxLength(16)]],
      name: [null, Validators.required],
      expirationDate: [null, Validators.required],
      telephoneSac: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
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
          data=>{
            console.log(data)
            this.gotoList();
          },
          error =>
            console.log(error)
        );
      }
    });
  }

  onSubmit(){
    this.submitted = true;   
    this.getValueSelected(); 
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

}
