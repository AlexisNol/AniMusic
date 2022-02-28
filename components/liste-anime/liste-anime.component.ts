import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-anime',
  templateUrl: './liste-anime.component.html',
  styleUrls: ['./liste-anime.component.css']
})

export class ListeAnimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

//tabAnime animes[];

function cleanString(uneChaine: string){
	chaine = uneChaine.toLowerCase();
	chaine.replace("/[^a-z0-9_'\s-]/", "");
	chaine.replace("/[\s-]+/", " ");
	chaine.replace("/[\s_]/", " ");
	return chaine;
}

function topAnime(animes: tabAnime[]){
  /* Requête à faire pour afficher les animes en vedette en ce moment */
	animes = request.open('GET','https://api.jikan.moe/v3/top/anime/1/bypopularity');
  console.log(animes);
}

function animeByDate(animes: tabAnime[]){
  /* Requête à faire pour afficher les animes sorties lors d'une saison et année précise */
	if(isset($_POST['annee']) && !empty($_POST['annee']) && (isset($_POST['saison']) && !empty($_POST['saison'])) {
		let anneeRecherche = $_POST['annee'];
		let saisonRecherche = this.cleanString($_POST['saison']);
    switch (saisonRecherche){
      case "hiver":saisonRecherche = "winter";break;
      case "printemps":saisonRecherche = "spring";break;
      case "ete":saisonRecherche = "summer";break;
      case "automne":saisonRecherche = "fall";break;
    }
		var urlSortieSaison = 'https://api.jikan.moe/v3/season/'+ anneeRecherche +'/'+ saisonRecherche;
		animes = request.open('GET', urlSortieSaison);
    console.log(animes);
	}else{
		echo "Impossible d'effectuer cette recherche, les paramètres sont incorrectes...";
	}

}

function searchAnime(animes: tabAnime[]){
  if(isset($_POST['mot']) && !empty($_POST['mot'])) {
	  let motRecherche = this.cleanString($_POST['mot']);

	  /* Requête à faire pour rechercher un anime précis */
	  var txtSearch = motRecherche.replace(" ", "%20");
    var urlS = "https://api.jikan.moe/v3/search/anime?q=" + txtSearch + "&order_by=title&sort=asc&limit=10";
	  animes = request.open('GET', urlS);
    console.log(animes);
  }else {
    echo "Aucune recherche effectuée...";
  }
}
