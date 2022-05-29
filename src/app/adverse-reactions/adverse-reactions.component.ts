import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MedicationService } from '../medication/medication.service';
import { ItemDeletadoComponent } from '../snak-bars/item-deletado/item-deletado.component';
import { AdverseReactions } from './adverse-reactions.model';
import { AdverseReactionsService } from './AdverseReactions.service';

@Component({
  selector: 'app-adverse-reactions',
  templateUrl: './adverse-reactions.component.html',
  styleUrls: ['./adverse-reactions.component.css']
})
export class AdverseReactionsComponent implements OnInit {

  headers = ["#","Description", "Ações"];

  adverseReactions: AdverseReactions[] = [];
  filter: string = "";

  constructor(private service : AdverseReactionsService,
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getAdverseReactionsList()
      .subscribe(
        data => {
          this.adverseReactions = data;
      }); 
  }

  addAdverseReaction(){
    this.router.navigate(['add-adverse-reactions'])
  }

  deleteAdverseReaction(idAdverseReaction: number){
    this.service.deleteAdverseReactions(idAdverseReaction).subscribe(
      (data => {
        console.log("Reação adversa ",idAdverseReaction," deletada com sucesso!"); 
        this.openSnackBarAdverseReactionDeleted()
        this.getData();
      }), 
      (err => {
        console.log(err);
      })
    )
  }

  updateAdverseReaction(idAdverseReaction: number){
    this.router.navigate(['update-adverse-reactions',idAdverseReaction])
  }

  filterTable(){
    this.service.getAdverseReactionsByDescription(this.filter).subscribe((data)=>{
      this.adverseReactions = data;
    },
    (error)=>
      console.log(error)
    )
  }

  cleanFilter(){
    this.getData();
  }

  openSnackBarAdverseReactionDeleted() {
    this._snackBar.openFromComponent(ItemDeletadoComponent, {
      duration: 5 * 1000,
    });    
  }

}
