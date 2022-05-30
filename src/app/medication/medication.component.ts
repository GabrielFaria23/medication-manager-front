import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ItemDeletadoComponent } from '../snak-bars/item-deletado/item-deletado.component';
import { MedicationService } from './medication.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  headers = ["#","Número de registro anvisa", "Nome", "Data de vencimento", "Telefone Sac", "Preço","Quantidade de comprimidos","Fabricante", "Reações Adversas", "Ações"];

  medications: any[] = [];
  adverseReactions: string[] = [];
  filter: string = "";

  constructor(private service : MedicationService,
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getMedicationList()
      .subscribe(
        data => {this.medications = data.map(element =>{
          let adverseReaction = ""
          let primeiro = true;
          for(const ar of element.adverseReactions){
            if(primeiro){
              adverseReaction += ar.description;
              primeiro = false;
            }          
            else{
              adverseReaction += `, ${ar.description}`;
            }            
          }
          return {...element, adverseReaction}
        })
        console.log(this.medications);
                  
      }); 
  }

  addMedication(){
    this.router.navigate(['add-medication'])
  }

  deleteMedication(idMedication: number){
    this.service.deleteMedication(idMedication).subscribe(
      (data) => {
        this.openSnackBarMedicationDeleted();
        this.getData();    
      }, 
      (err => {
        console.log(err);
      })
    )    
  }

  updateMedication(idMedication: number){
    this.router.navigate(['update-medication',idMedication])
  }

  filterTable(){
    this.service.getMedicationListByNameOrAnvisaNumber(this.filter).subscribe((data)=>{
      this.medications = data;
    },
    (error)=>
      console.log(error)
    )
  }

  cleanFilter(){
    this.getData();
  }

  openSnackBarMedicationDeleted() {
    this._snackBar.openFromComponent(ItemDeletadoComponent, {
      duration: 5 * 1000,
    });    
  }

}
