import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdverseReactions } from '../adverse-reactions/adverse-reactions.model';
import { AdverseReactionsService } from '../adverse-reactions/AdverseReactions.service';
import { ErrorRequestComponent } from '../snak-bars/error-request/error-request.component';
import { ItemAtualizadoComponent } from '../snak-bars/item-atualizado/item-atualizado.component';
import { MedicationCadastredComponent } from '../snak-bars/medication-cadastred/medication-cadastred.component';

@Component({
  selector: 'app-update-adverse-reactions',
  templateUrl: './update-adverse-reactions.component.html',
  styleUrls: ['./update-adverse-reactions.component.css']
})
export class UpdateAdverseReactionsComponent implements OnInit {

  formAdverseReaction: FormGroup;
  idAdverseReaction: number;
  adverseReaction: AdverseReactions;

  constructor(private adverseReactionService: AdverseReactionsService,
              private router: Router,
              private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getIdAdverseReaction();
    this.getAdverseReaction();
  }

  getIdAdverseReaction(){
    this.idAdverseReaction = parseInt(this.route.snapshot.params['id']);
  }

  getAdverseReaction(){
    this.adverseReactionService.getAdverseReactions(this.idAdverseReaction).subscribe((data)=>{
      this.adverseReaction = data;
      this.configForm();
    });
  }

  configForm(){{
    this.formAdverseReaction = this.formBuilder.group({
      description: [this.adverseReaction.description, Validators.required]
    });
  }}

  update(){
    this.adverseReactionService.updateAdverseReactions(this.idAdverseReaction, this.formAdverseReaction.value)
    .subscribe(
      data=>{
        this.openSnackBarAdverseReactionCadastred();
        this.gotoList();
      },
      error =>
        this.openSnackBarAdverseReactionError()
    );
  }

  onSubmit(){
    this.update();
  }

  gotoList(){
    this.router.navigate(['adverse-reactions']);
  }

  openSnackBarAdverseReactionCadastred() {
    this._snackBar.openFromComponent(ItemAtualizadoComponent, {
      duration: 5 * 1000,
    });    
  }

  openSnackBarAdverseReactionError() {
    this._snackBar.openFromComponent(ErrorRequestComponent, {
      duration: 5 * 1000,
    });    
  }

}
