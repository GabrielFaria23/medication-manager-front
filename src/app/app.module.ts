import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker/';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MedicationComponent } from './medication/medication.component';
import { AdverseReactionsComponent } from './adverse-reactions/adverse-reactions.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { AnvisaRegistrationNumberAlreadyCadastredComponent } from './snak-bars/anvisa-registration-number-already-cadastred/anvisa-registration-number-already-cadastred.component';
import { AddMedicationComponent } from './add-medication/add-medication.component';
import { UpdateMedicationComponent } from './update-medication/update-medication.component';
import { UpdateAdverseReactionsComponent } from './update-adverse-reactions/update-adverse-reactions.component';
import { AddAdverseReactionsComponent } from './add-adverse-reactions/add-adverse-reactions.component';

import { MedicationService } from './medication/medication.service';
import { ManufacturerService } from './Manufacturer.service';
import { AdverseReactionsService } from './adverse-reactions/AdverseReactions.service';
import { MedicationCadastredComponent } from './snak-bars/medication-cadastred/medication-cadastred.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicationComponent,
    AdverseReactionsComponent,
    ManufacturerComponent,
    AddMedicationComponent,
    UpdateMedicationComponent,
    UpdateAdverseReactionsComponent,
    AddAdverseReactionsComponent,
    AnvisaRegistrationNumberAlreadyCadastredComponent,
    MedicationCadastredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    MatSnackBarModule,
    MatIconModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [MedicationService, ManufacturerService, AdverseReactionsService, 
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}, { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
