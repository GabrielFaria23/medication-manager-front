import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Manufacturer } from '../manufacturer/manufacturer.model';
import { ManufacturerService } from '../manufacturer/Manufacturer.service';
import { ErrorRequestComponent } from '../snak-bars/error-request/error-request.component';
import { ItemAtualizadoComponent } from '../snak-bars/item-atualizado/item-atualizado.component';

@Component({
  selector: 'app-update-manufacturer',
  templateUrl: './update-manufacturer.component.html',
  styleUrls: ['./update-manufacturer.component.css']
})
export class UpdateManufacturerComponent implements OnInit {

  formManufacturer: FormGroup;
  idManufacturer: number;
  manufacturer: Manufacturer;

  constructor(private manufacturerService: ManufacturerService,
              private router: Router,
              private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getIdManufacturer();
    this.getManufacturer();
  }

  getIdManufacturer(){
    this.idManufacturer = parseInt(this.route.snapshot.params['id']);
  }

  getManufacturer(){
    this.manufacturerService.getManufacturer(this.idManufacturer).subscribe((data)=>{
      this.manufacturer = data;
      this.configForm();
    });
  }

  configForm(){{
    this.formManufacturer = this.formBuilder.group({
      name: [this.manufacturer.name, Validators.required]
    });
  }}

  update(){
    this.manufacturerService.updateManufacturer(this.idManufacturer, this.formManufacturer.value)
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
    this.update();
  }

  gotoList(){
    this.router.navigate(['manufacturer']);
  }

  openSnackBarManufacturerCadastred() {
    this._snackBar.openFromComponent(ItemAtualizadoComponent, {
      duration: 5 * 1000,
    });    
  }

  openSnackBarManufacturerError() {
    this._snackBar.openFromComponent(ErrorRequestComponent, {
      duration: 5 * 1000,
    });    
  }

}
