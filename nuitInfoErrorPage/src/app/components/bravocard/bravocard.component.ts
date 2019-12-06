import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-bravocard',
  templateUrl: './bravocard.component.html',
  styleUrls: ['./bravocard.component.scss']
})
export class BravocardComponent implements OnInit {

  constructor() { 
    this.txt = this.chooseTxt()
  }

  txt = ''

  ngOnInit() {
  }

  chooseTxt(){
    return rdmTxt[Math.floor(Math.random() * rdmTxt.length)]
  }

}

const rdmTxt = [
  "404 AC marque le dernier combat de gladiateur connu de l'histoire avant d'être interdis par Rôme.",
  "En numérologie le chiffre 4 symbolise la détermination, la patience, la loyauté et l’endurance. Le chiffre 404 est donc concidéré comme 'angélique'.",
  "La Peugot 404 est la première berline française de série à être équipée d'un moteur à injection.",
  "404 est un palindrome numéraire.",
  "Les coordonées '40.4 40.4' menent à Bayburt en Turquie.",
  "Avant d'être une erreur standart d'internet, l'erreur 404 désignait l'absence d'un dossier dans la salle 404 du building ou était localisée la base de données centrale du World Wide Web dans les années 80. 'Room 404: file not found'.",
  "Les coordonées '4.04 4.04' menent au golf de Guinée.",
  "La premiere occurence de 404 dans les décimales de pi est à la décimale 1272.",
  "la 404e décimale de pi est le 5.",
  "Kepler-404B est une exoplanète découverte en 2014.",
  "Le canal 404 sur la free-box est beIN SPORTS Max 6.",
  "Autrefois, la route nationale 404 ou RN 404 était une route nationale française reliant Manheulles, sur l'ancien tracé de la RN3 à Gripport sur la RN57, via Toul.",
  "Le 404e régiment d'infanterie est un régiment d'infanterie de l'Armée de terre française constitué en 1915 avec des blessés guéris et des jeunes soldats de la classe 1915 provenant principalement de la 4e région militaire (Le Mans). ",
  "Si vous écrivez ' ', c'est un peu comme si vous aviez écris 4 sans 4.",
  "404km est la distance à parcourir pour se rendre de Chambery à la Ciotat.",
  "La city tower de Manchester mesure 404 pieds de haut.",
  "Le yacht Golden Odyssey, possédé par Khalid bin Sultan, mesure 404 pieds de long"
];