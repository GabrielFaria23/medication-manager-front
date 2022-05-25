import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdverseReactionsComponent } from './adverse-reactions/adverse-reactions.component';
import { HomeComponent } from './home/home.component';
import { MedicationComponent } from './medication/medication.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'medication', component: MedicationComponent },
  { path: 'adverse-reactions', component: AdverseReactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
