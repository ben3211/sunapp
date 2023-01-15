import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SunModel, SunModelUsingSunCalc } from 'src/models/sun-model';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { InfoSoleilComponent } from './pages/info-soleil/info-soleil.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactsComponent,
    InfoSoleilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // Si un component demande dans son constructeur un objet de type SunModel
    // L'injection de dépendance lui donnera automatiquement un SunModelUsingSunCalc
    // En mode singleton par défaut => une seule instance pour toutes les demandes
    {
      provide: SunModel, useClass:SunModelUsingSunCalc
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
