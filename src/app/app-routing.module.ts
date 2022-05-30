import { Routes } from '@angular/router';
import { AddAdverseReactionsComponent } from './add-adverse-reactions/add-adverse-reactions.component';
import { AddManufacturerComponent } from './add-manufacturer/add-manufacturer.component';
import { AddMedicationComponent } from './add-medication/add-medication.component';
import { AdverseReactionsComponent } from './adverse-reactions/adverse-reactions.component';
import { HomeComponent } from './home/home.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { MedicationComponent } from './medication/medication.component';
import { UpdateAdverseReactionsComponent } from './update-adverse-reactions/update-adverse-reactions.component';
import { UpdateManufacturerComponent } from './update-manufacturer/update-manufacturer.component';
import { UpdateMedicationComponent } from './update-medication/update-medication.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'medication', component: MedicationComponent },
  { path: 'adverse-reactions', component: AdverseReactionsComponent },
  { path: 'manufacturer', component: ManufacturerComponent },
  { path: 'add-medication', component: AddMedicationComponent },
  { path: 'update-medication/:id', component: UpdateMedicationComponent },
  { path: 'add-adverse-reactions', component: AddAdverseReactionsComponent },
  { path: 'update-adverse-reactions/:id', component: UpdateAdverseReactionsComponent },
  { path: 'add-manufacturer', component: AddManufacturerComponent },
  { path: 'update-manufacturer/:id', component: UpdateManufacturerComponent },
];
