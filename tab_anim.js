import {Component} from '@angular/core';
import {tabAnime} from './struct_anim.ts';

@Component({
  selector: 'tableau-anime',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'dashfront';
}

tabAnime animes[];

function cleanString($string){
	$string = strtolower($string);
	$string = preg_replace("/[^a-z0-9_'\s-]/", "", $string);
	$string = preg_replace("/[\s-]+/", " ", $string);
	$string = preg_replace("/[\s_]/", " ", $string);
	return $string;
}

function topAnime(){
  /* Requête à faire pour afficher les animes en vedette en ce moment */
	animes = request.open('GET','https://api.jikan.moe/v3/top/anime/1/bypopularity');
}

function animeParSortie(){
  /* Requête à faire pour afficher les animes sorties lors d'une saison et année précise */
	if(isset($_POST['annee']) && !empty($_POST['annee']) && (isset($_POST['saison']) && !empty($_POST['saison'])) {
		$anneeRecherche = $_POST['annee'];
		$saisonRecherche =cleanString($_POST['saison']);
		var urlSortieSaison = 'https://api.jikan.moe/v3/season/'+ $anneeRecherche +'/'+ $saisonRecherche;
		animes = request.open('GET', urlSortieSaison);
	}else{
		echo "Impossible d'effectuer cette recherche, les paramètres sont incorrectes...";
	}

}

function rechercherAnime(){
  if(isset($_POST['mot']) && !empty($_POST['mot'])) {
	  $motRecherche = cleanString($_POST['mot']);

	  /* Requête à faire pour rechercher un anime précis */
	  var txtSearch = $motRecherche.replace(" ", "%20");
    var urlS = "https://api.jikan.moe/v3/search/anime?q=" + txtSearch + "&order_by=title&sort=asc&limit=10";
	  animes = request.open('GET', urlS);
  }else {
    echo "Aucune recherche effectuée...";
  }
}
