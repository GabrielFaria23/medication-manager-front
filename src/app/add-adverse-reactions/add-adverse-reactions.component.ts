import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdverseReactions } from '../adverse-reactions/adverse-reactions.model';
import { AdverseReactionsService } from '../adverse-reactions/AdverseReactions.service';

@Component({
  selector: 'app-add-adverse-reactions',
  templateUrl: './add-adverse-reactions.component.html',
  styleUrls: ['./add-adverse-reactions.component.css']
})
export class AddAdverseReactionsComponent implements OnInit {

  adverseReaction!: AdverseReactions;
  submitted = false;

  constructor(private adverseReactionService: AdverseReactionsService,
              private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.adverseReactionService.createAdverseReactions(this.adverseReaction)
    .subscribe(
      data=>
        console.log(data),
      error =>
        console.log(error)
    );
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/adverse-reactions']);
  }
}
