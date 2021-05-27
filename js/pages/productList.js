/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

//Création de la page liste des produits .
class ProductList extends Page { 
	constructor(pageSpecs) {
		super(pageSpecs); //On utilise super afin d'appeler le constructor (pageSpecs) de la class Page.
		if (this.changeHistory) orinoco.pageManager.changePage("liste des produits Orinoco", "", this); //Historique changement de page (URL) (titre de la page, pas d'url, référence de la page (this) pour avoir un productList à l'intérieur).
		orinoco.dataManager.getDataFromServer(this.showProducts.bind(this)); //Une fois les données récupérées, on exécute la fonction de callback dans son contexte avec bind() et this.
	}

	//Affichage du produit dans une nouvelle page
	//showProducts = Fonction callback de getDataFromServer
	showProducts(list) {
		orinoco.pageManager.domTarget.innerHTML = this.ariane("Liste des produits"); //Affiche le fil d'ariane.
		for (let i = 0, size = list.length; i < size; i++) { //Boucle pour faire des new productPage et les afficher.
			new DetailedProduct(list[i], orinoco.pageManager.domTarget, "orinoco");
		}
	}
}