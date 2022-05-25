import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MedicationComponent } from './medication/medication.component';
import { AdverseReactionsComponent } from './adverse-reactions/adverse-reactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicationComponent,
    AdverseReactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
