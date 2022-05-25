import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MedicationComponent } from './medication/medication.component';
import { AdverseReactionsComponent } from './adverse-reactions/adverse-reactions.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { MedicationService } from './medication/medication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicationComponent,
    AdverseReactionsComponent,
    ManufacturerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MedicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
