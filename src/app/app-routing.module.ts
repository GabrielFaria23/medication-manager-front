import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdverseReactionsComponent } from './add-adverse-reactions/add-adverse-reactions.component';
import { AddMedicationComponent } from './add-medication/add-medication.component';
import { AdverseReactionsComponent } from './adverse-reactions/adverse-reactions.component';
import { HomeComponent } from './home/home.component';
import { MedicationComponent } from './medication/medication.component';
import { UpdateAdverseReactionsComponent } from './update-adverse-reactions/update-adverse-reactions.component';
import { UpdateMedicationComponent } from './update-medication/update-medication.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'medication', component: MedicationComponent },
  { path: 'adverse-reactions', component: AdverseReactionsComponent },
  { path: 'add-medication', component: AddMedicationComponent },
  { path: 'update-medication', component: UpdateMedicationComponent },
  { path: 'add-adverse-reactions', component: AddAdverseReactionsComponent },
  { path: 'update-adverse-reactions', component: UpdateAdverseReactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
