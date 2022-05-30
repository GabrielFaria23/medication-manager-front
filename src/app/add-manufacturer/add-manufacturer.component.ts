import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ManufacturerService } from '../manufacturer/Manufacturer.service';
import { ErrorRequestComponent } from '../snak-bars/error-request/error-request.component';
import { MedicationCadastredComponent } from '../snak-bars/medication-cadastred/medication-cadastred.component';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.css']
})
export class AddManufacturerComponent implements OnInit {

  formManufacturer: FormGroup;

  constructor(private adverseReactionService: ManufacturerService,
              private router: Router,
              private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {    
    this.configForm();
  }

  configForm(){{
    this.formManufacturer = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }}

  save(){
    this.adverseReactionService.createManufacturer(this.formManufacturer.value)
    .subscribe(
      data=>{
        this.openSnackBarManufacturerCadastred();
        this.gotoList();
      },
      error =>
        this.openSnackBarManufacturerError()
    );    
  }

  onSubmit(){
    this.save();
  }

  gotoList(){
    this.router.navigate(['manufacturer']);
  }

  openSnackBarManufacturerCadastred() {
    this._snackBar.openFromComponent(MedicationCadastredComponent, {
      duration: 5 * 1000,
    });    
  }

  openSnackBarManufacturerError() {
    this._snackBar.openFromComponent(ErrorRequestComponent, {
      duration: 5 * 1000,
    });    
  }

}
