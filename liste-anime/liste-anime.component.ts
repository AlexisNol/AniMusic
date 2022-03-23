import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { StructAnimeComponent } from './struct-anime';
import { NONE_TYPE } from '@angular/compiler';
import { Component, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liste-anime',
  templateUrl: './liste-anime.component.html',
  styleUrls: ['./liste-anime.component.css']
})

export class ListeAnimeComponent implements OnInit {

  @Input() annee: number;
  @Input() saison: string;
  @Input() mot: string;
  @Input() responseText: string;
  //@Input() animes: StructAnimeComponent[];

  constructor() {
    this.annee = 0;
    this.saison = "";
    this.mot = "";
    this.responseText = "api_jikan.json";
  }

  ngOnInit(): void {
  }

  //tabAnime animes[];

  cleanString(uneChaine: string){
  	let chaine = uneChaine.toLowerCase();
  	chaine.replace("/[^a-z0-9_'\s-]/", "");
  	chaine.replace("/[\s-]+/", " ");
  	chaine.replace("/[\s_]/", " ");
  	return chaine;
  }

  topAnime(){

    console.log("Recherche d'anime en cours");

    /* Requête à faire pour afficher les animes en vedette en ce moment */
    request.open('GET','https://api.jikan.moe/v3/top/anime/1/bypopularity');
    var fichJSON = JSON.parse(this.responseText);
    //let iframe = `<div class='song'><iframe src=${request} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`;
    //let parent_div = $('#anim_2');
    //parent_div.html(iframe);
    console.log(fichJSON);

  }

  animeByDate(){

    console.log("Recherche d'anime en cours");

    this.annee = $('#annee').val();
    this.saison = $('#saison').val();
    this.saison = this.saison.toString();

    /* Requête à faire pour afficher les animes sorties lors d'une saison et année précise */
  	if(this.annee !== null && this.saison !== null) {
      
  		let saisonRecherche = this.cleanString(this.saison);
      switch (saisonRecherche){
        case "hiver":saisonRecherche = "winter";break;
        case "printemps":saisonRecherche = "spring";break;
        case "ete":saisonRecherche = "summer";break;
        case "automne":saisonRecherche = "fall";break;
        default:
          if(saisonRecherche != "winter" && saisonRecherche != "spring" && saisonRecherche != "summer" && saisonRecherche != "fall"){
            console.log("Veuillez saisir une des saisons suivantes : hiver, printemps, ete, automne \n");break;
          }
      }
  		var urlSortieSaison = "https://api.jikan.moe/v3/season/"+ this.annee +"/"+ saisonRecherche;
      //this.animes = [];

  		request.open('GET',urlSortieSaison);
      var fichJSON = JSON.parse(this.responseText);
      //let iframe = `<div class='song'><iframe src=${request} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`;
      //let parent_div = $('#anim_4');
      //parent_div.html(iframe);
      console.log(fichJSON);
  	}else{
  		console.log("Impossible d'effectuer cette recherche, les paramètres sont incorrectes...");
  	}

  }

  searchAnime(){

    console.log("Recherche d'anime en cours");

    this.mot = $('#nom').val();
    this.mot = this.mot.toString();

    if(this.mot !== null) {
  	  let motRecherche = this.cleanString(this.mot);
  	  /* Requête à faire pour rechercher un anime précis */
  	  var txtSearch = motRecherche.replace(" ", "%20");
      var urlS = "https://api.jikan.moe/v3/search/anime?q=" + txtSearch + "&order_by=title&sort=asc&limit=10";
      
      request.open('GET',urlS);
      var fichJSON = JSON.parse(this.responseText);
      //let iframe = `<div class='song'><iframe src=${request} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`;
      //let parent_div = $('#anim_1');
      //parent_div.html(iframe);
      console.log(fichJSON);
    }
  }

  newAnimes(){

    console.log("Recherche d'anime en cours");

    /* Requête qui affiche en recommandation les animes récents */
    //this.animes = [];
    request.open('GET','https://api.jikan.moe/v4/recommendations/anime');
    var fichJSON = JSON.parse(this.responseText);
    //let iframe = `<div class='song'><iframe src=${request} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`;
    //let parent_div = $('#anim_3');
    //parent_div.html(iframe);
    console.log(fichJSON);
  }
}
