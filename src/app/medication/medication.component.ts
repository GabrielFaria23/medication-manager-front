import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Medication } from './medication.model';
import { MedicationService } from './medication.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  headers = ["#","Número de registro anvisa", "Nome", "Data de vencimento", "Telefone Sac", "Preço","Quantidade de comprimidos","Fabricante", "Reações Adversas"];

  medications!: Observable<Medication[]>;

  constructor(private service : MedicationService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.medications = this.service.getMedicationList();
  }

}
