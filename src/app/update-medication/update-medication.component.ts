import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdverseReactions } from '../adverse-reactions/adverse-reactions.model';
import { AdverseReactionsService } from '../adverse-reactions/AdverseReactions.service';
import { ManufacturerService } from '../Manufacturer.service';
import { Manufacturer } from '../manufacturer/manufacturer.model';
import { Medication } from '../medication/medication.model';
import { MedicationService } from '../medication/medication.service';

@Component({
  selector: 'app-update-medication',
  templateUrl: './update-medication.component.html',
  styleUrls: ['./update-medication.component.css']
})
export class UpdateMedicationComponent implements OnInit {

  id: number = 0;

  medication: Medication;
  submitted = false;
  adverseReactions: AdverseReactions[] = [];
  manufacturers: Manufacturer[] = [];

  constructor(private medicationService: MedicationService,
              private adverseReactionService: AdverseReactionsService,
              private manufacturerService: ManufacturerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params[ 'id' ];

    this.getAdverseReactions();
    this.getManufacturer();
  }

  save(){
    console.log(this.medication);    
    this.medicationService.createMedication(this.medication)
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
    this.router.navigate(['/medication']);
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

  getMedicationById(id:number){
    this.medicationService.getMedication(id).subscribe(data =>{
      this.medication = data;
    })
  }

}
