// Import de la bibliothèque suncalc écrite en js
// Problème : js non typé
// on ne sait pas ce que contient suncalc
// des développeurs bien intentionnés on écrit les interfaces de suncalc
// 
// definitely typed
// Installation de suncalc : npm install suncalc
// installe les fichiers js
// npm install @types/suncalc --dev
// installe les types typescripts de suncalc


import * as suncalc from "suncalc";

// Class abstraite :
// Il y a la déclaration des méthodes
// Mais pas l'implémentation
// Image du besoin de l'utilisateur
export abstract class SunModel {
    // L'utilisateur fait une demande
    abstract demanderInfo(latitude:number, longitude:number):void;
    // L'utilisdateur peut consulter les demandes faites
    abstract demandes : InfoSurLeSoleil[];
}

// Une implémentation de SunModel qui utilise la bibliothèque npm suncalc
export class SunModelUsingSunCalc implements SunModel{
    demanderInfo(latitude: number, longitude: number): void {
        let dateDemande=new Date();
        let infosSuncalc= suncalc.getTimes(dateDemande,latitude,longitude);
        // Je créé l'objet demandé par l'utilisateur
        let demande: InfoSurLeSoleil={
            dateCoucher: infosSuncalc.sunset,
            dateLever:infosSuncalc.sunrise,
            dateDemande:dateDemande,
            longitude:longitude,
            latitude:latitude,
            soleilLeve: (dateDemande>infosSuncalc.sunrise && dateDemande< infosSuncalc.sunset)
        };
        this.demandes.push(demande);
        // il peut y avoir plus de trois demandes dans le tableau
        // je ne conserve dans demandes que les 3 derniers éléments
        this.demandes=this.demandes.slice(-3);
    }
    demandes: InfoSurLeSoleil[]=[];
}


// Une implémentation de SunModel qui utilise une autre bibliothèque
export class SunModelUsingSunPosition implements SunModel{
    demanderInfo(latitude: number, longitude: number): void {
        throw new Error("not implemented")
    }
    demandes: InfoSurLeSoleil[]=[];
}


// Je repertorie ici les données attendues par l'utilisateur
interface InfoSurLeSoleil{
    latitude : number;
    longitude: number;
    dateDemande : Date;
    dateCoucher: Date;
    dateLever : Date;
    soleilLeve:boolean;
}