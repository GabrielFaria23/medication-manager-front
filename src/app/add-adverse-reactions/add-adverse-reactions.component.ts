import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdverseReactions } from '../adverse-reactions/adverse-reactions.model';
import { AdverseReactionsService } from '../adverse-reactions/AdverseReactions.service';
import { AnvisaRegistrationNumberAlreadyCadastredComponent } from '../snak-bars/anvisa-registration-number-already-cadastred/anvisa-registration-number-already-cadastred.component';
import { ErrorRequestComponent } from '../snak-bars/error-request/error-request.component';
import { MedicationCadastredComponent } from '../snak-bars/medication-cadastred/medication-cadastred.component';

@Component({
  selector: 'app-add-adverse-reactions',
  templateUrl: './add-adverse-reactions.component.html',
  styleUrls: ['./add-adverse-reactions.component.css']
})
export class AddAdverseReactionsComponent implements OnInit {

  formAdverseReaction: FormGroup;

  constructor(private adverseReactionService: AdverseReactionsService,
              private router: Router,
              private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {    
    this.configForm();
  }

  configForm(){{
    this.formAdverseReaction = this.formBuilder.group({
      description: [null, Validators.required]
    });
  }}

  save(){
    this.adverseReactionService.createAdverseReactions(this.formAdverseReaction.value)
    .subscribe(
      data=>{
        this.openSnackBarAdverseReactionCadastred();
        this.router.navigate(['adverse-reactions'])
      },
      error =>
        this.openSnackBarAdverseReactionError()
    );
    this.gotoList();
  }

  onSubmit(){
    this.save();
  }

  gotoList(){
    this.router.navigate(['/adverse-reaction']);
  }

  openSnackBarAdverseReactionCadastred() {
    this._snackBar.openFromComponent(MedicationCadastredComponent, {
      duration: 5 * 1000,
    });    
  }

  openSnackBarAdverseReactionError() {
    this._snackBar.openFromComponent(ErrorRequestComponent, {
      duration: 5 * 1000,
    });    
  }
}
