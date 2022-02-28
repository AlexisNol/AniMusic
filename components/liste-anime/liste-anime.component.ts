import { Component, OnInit } from '@angular/core';
import { tabAnime } from '../../../tab_anime.js'
@Component({
  selector: 'app-liste-anime',
  templateUrl: './liste-anime.component.html',
  styleUrls: ['./liste-anime.component.css']
})

export class ListeAnimeComponent implements OnInit {

  annee: number;
  saison: string;
  mot: string;
  animes: tabAnime[];

  constructor(uneAnnee: number, uneSaison: string, unMot: string) {
    this.annee = uneAnnee;
    this.saison = uneSaison;
    this.mot = unMot;
  }

  ngOnInit(): void {
  }

  //tabAnime animes[];

  public cleanString(uneChaine: string){
  	let chaine = uneChaine.toLowerCase();
  	chaine.replace("/[^a-z0-9_'\s-]/", "");
  	chaine.replace("/[\s-]+/", " ");
  	chaine.replace("/[\s_]/", " ");
  	return chaine;
  }

  public topAnime(){
    /* Requête à faire pour afficher les animes en vedette en ce moment */
  	this.animes = fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity');
    console.log(this.animes);
  }

  public animeByDate(){
    /* Requête à faire pour afficher les animes sorties lors d'une saison et année précise */
  	if(this.annee !== null && this.saison !== null) {
  		let saisonRecherche = this.cleanString(this.saison);
      switch (saisonRecherche){
        case "hiver":saisonRecherche = "winter";break;
        case "printemps":saisonRecherche = "spring";break;
        case "ete":saisonRecherche = "summer";break;
        case "automne":saisonRecherche = "fall";break;
      }
  		var urlSortieSaison = 'https://api.jikan.moe/v3/season/'+ this.annee +'/'+ saisonRecherche;
  		this.animes = fetch(urlSortieSaison);
      console.log(this.animes);
  	}else{
  		console.log("Impossible d'effectuer cette recherche, les paramètres sont incorrectes...");
  	}

  }

  public searchAnime(){
    if(this.mot !== null) {
  	  let motRecherche = this.cleanString(this.mot);
  	  /* Requête à faire pour rechercher un anime précis */
  	  var txtSearch = motRecherche.replace(" ", "%20");
      var urlS = "https://api.jikan.moe/v3/search/anime?q=" + txtSearch + "&order_by=title&sort=asc&limit=10";
  	  this.animes = fetch(urlS);
      console.log(this.animes);
    }else{
      console.log("Aucune recherche effectuée...");
    }
  }
}
