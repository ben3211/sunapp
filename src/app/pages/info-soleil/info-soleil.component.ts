import { Component } from '@angular/core';
import { SunModel, SunModelUsingSunCalc } from 'src/models/sun-model';

@Component({
  selector: 'app-info-soleil',
  templateUrl: './info-soleil.component.html',
  styleUrls: ['./info-soleil.component.scss']
})
export class InfoSoleilComponent {
  // le constructeur demande un sunModel
  // mais une autre classe sera fournie à la place
  // fonction de la configuration "providers" dans app.module
  // l'objet fourni est un singleton
  constructor(public sunModel: SunModel) {

  }
  // Couplage fort => dans ce component (et peut-être plein d'autres)
  // la classe que j'utilise est SunModelUsingSunCalc


  addPosition(lat:any, long:any){
    let latitude=+lat;
    let longitude=+long;
    if(isNaN(longitude) || isNaN(latitude)){
      console.log("erreur");
      return;
    }
    this.sunModel.demanderInfo(latitude,longitude);

  }
  // Ajout de la position courante au tableau des résultat
  addCurrentPosition() {
    // navigator.geolocation.getCurrentPosition() peut mettre plusieurs secondes à 
    // s'éxécuter
    // Impossible : let position= navigator.geolocation.getCurrentPosition();
    // car blocage pendant un long moment

    // design pattern : callback = function exécutée quand l'opération asynchrone est terminée
    navigator.geolocation.getCurrentPosition(
      // callback : la fonction qui sera exécutée si tout va bien
      (position) => {
        this.sunModel.demanderInfo(position.coords.latitude,position.coords.longitude);
      },
      // callback : la fonction qui sera exécutée si tout va mal
      (err) => {
        console.log(err);
      }
    )

   

  }
}
