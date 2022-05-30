import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdverseReactions } from '../adverse-reactions/adverse-reactions.model';
import { ItemDeletadoComponent } from '../snak-bars/item-deletado/item-deletado.component';
import { Manufacturer } from './manufacturer.model';
import { ManufacturerService } from './Manufacturer.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  headers = ["#","Description", "Ações"];

  manufacturers: Manufacturer[] = [];
  filter: string = "";

  constructor(private service : ManufacturerService,
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getManufacturerList()
      .subscribe(
        data => {
          this.manufacturers = data;
      }); 
  }

  addManufacturer(){
    this.router.navigate(['add-manufacturer'])
  }

  deleteManufacturer(idManufacturer: number){
    this.service.deleteManufacturer(idManufacturer).subscribe(
      (data => {
        console.log("Reação adversa ",idManufacturer," deletada com sucesso!"); 
        this.openSnackBarManufacturerDeleted()
        this.getData();
      }), 
      (err => {
        console.log(err);
      })
    )
  }

  updateManufacturer(idManufacturer: number){
    this.router.navigate(['update-manufacturer',idManufacturer])
  }

  filterTable(){
    this.service.getManufacturerByName(this.filter).subscribe((data)=>{
      this.manufacturers = data;
    },
    (error)=>
      console.log(error)
    )
  }

  cleanFilter(){
    this.getData();
  }

  openSnackBarManufacturerDeleted() {
    this._snackBar.openFromComponent(ItemDeletadoComponent, {
      duration: 5 * 1000,
    });    
  }

}
