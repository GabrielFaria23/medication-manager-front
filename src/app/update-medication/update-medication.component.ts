import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdverseReactions } from '../adverse-reactions/adverse-reactions.model';
import { AdverseReactionsService } from '../adverse-reactions/AdverseReactions.service';
import { ManufacturerService } from '../Manufacturer.service';
import { Manufacturer } from '../manufacturer/manufacturer.model';
import { Medication } from '../medication/medication.model';
import { MedicationService } from '../medication/medication.service';
import { AnvisaRegistrationNumberAlreadyCadastredComponent } from '../snak-bars/anvisa-registration-number-already-cadastred/anvisa-registration-number-already-cadastred.component';
import { MedicationCadastredComponent } from '../snak-bars/medication-cadastred/medication-cadastred.component';

@Component({
  selector: 'app-update-medication',
  templateUrl: './update-medication.component.html',
  styleUrls: ['./update-medication.component.css']
})
export class UpdateMedicationComponent implements OnInit {

  submitted = false;

  idMedication: number;

  medication: Medication;
  adverseReactions: AdverseReactions[] = [];
  manufacturers: Manufacturer[] = [];

  formMedication: FormGroup;

  manufacturerSelected: number;
  adverseReactionsSelected: number[] = [];

  constructor(private route: ActivatedRoute,
              private medicationService: MedicationService,
              private adverseReactionService: AdverseReactionsService,
              private manufacturerService: ManufacturerService,
              private router: Router,
              private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {   
    this.getIdMedication();        
    this.getMedicationById(this.idMedication);
    this.getAdverseReactions();
    this.getManufacturer();    
  }

  getIdMedication(){
    this.idMedication = parseInt(this.route.snapshot.params['id']);
  }

  getMedicationById(id: number):void{
     this.medicationService.getMedication(id).subscribe(data =>{
       this.medication = data;
       this.configForm();
     });
  }

  configForm(){{
    this.formMedication = this.formBuilder.group({
      anvisaRegistrationNumber: [this.medication.anvisaRegistrationNumber, [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      name: [this.medication.name, Validators.required],
      expirationDate: [this.medication.expirationDate, Validators.required],
      telephoneSac: [this.medication.telephoneSac, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      price: [this.medication.price, Validators.required],
      quantityPills: [this.medication.quantityPills, Validators.required],
      adverseReactions:[this.medication.adverseReactions, Validators.required],
      manufacturer: [this.medication.manufacturer, Validators.required]
    });
  }}

  update(){    
    this.medicationService.checkAnvisaRegistrationNumber(this.formMedication.controls['anvisaRegistrationNumber'].value).subscribe(data =>{
      if(!data)
        this.openSnackBarAnvisaNumberRegistration()
      else {
        this.medicationService.updateMedication(this.medication.id, this.formMedication.value)
        .subscribe(
          data=>{            
            this.formMedication.reset();
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
    this.update();
  }

  gotoList(){
    this.router.navigate(['/medication']);
  }

  getAdverseReactions(){
    this.adverseReactionService.getAdverseReactionsList().subscribe(data =>{
      this.adverseReactions = data;
    });
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
}
