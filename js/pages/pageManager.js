/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//Gestion de la navigation vers les différentes pages.

class PageManager {
	constructor(domTarget) { //Endroit où on va mettre la page (class listeArticle).
		this.domTarget = domTarget;
		this.page = null;
		this.fonctionAuChangementDePage();
		this.definePage({ changeHistory: false });
	}
    
	/**
     * Fonction changement de page - URL (manipulation de l'historique)
     * @param   {String}                            title    Le titre de la page.
     * @param   {String}                            url      L'adresse de la page.
     * @param   {ProductList | Order | ProductPage} newPage  L'itération de la page, nom de la page.
     * @returns {void}                                       Met à jour la page et la barre d'adresse.
     */
	changePage(title, url, newPage) {
		document.title = title; //Titre de la page dans l'onglet du navigateur.
		history.pushState({}, title, "?" + url); //Affichage de l'URL dans la barre d'adresse (pushState = méthode native JS, ajoute une entrée à la pile d'historique de session du navigateur. - Voir doc MDN)
		this.page = newPage;
		orinoco.products = {};
		this.domTarget.innerHTML = "";
	}

	/**
     * Change la page à afficher
     * @param   {Object} todo                               Changement historique (changeHistory) sur false par défaut
     *
     * @return  {ProductList | Order | ProductPage}         Appelle la page à afficher
     */
	definePage(todo) {
		if (todo.changeHistory === undefined) todo.changeHistory = true;
		if (todo.page === undefined) {
			todo.page = window.location.search.slice(1); //La méthode slice() permet de "trancher un morceau particulier d'une chaine de caractère et la retourne comme chaine de caractère, dans notre cas on retire le ? (pour faciliter la manipulation de la chaine url) de l'URL dans la barre d'adresse(1 = indice de début du tranchage).
		}
		if (todo.page === "") return new ProductList({ changeHistory: false });
		if (todo.page.slice(0, 6) === "panier") return new Order(
			{
				"changeHistory": todo.changeHistory,
				"domTarget": this.domTarget
			}
		);
		if (todo.page.slice(0, 7) === "product") return new ProductPage(
			{
				changeHistory: todo.changeHistory,
				domTarget: this.domTarget,
				idProduct: todo.page.slice(7),
			}
		);
		if (todo.page.slice(0, 4) === "list") return new ProductList({ changeHistory: todo.changeHistory});
		new ProductList({ changeHistory: todo.changeHistory});
	}
    
	//Ecouteur - clic sur le bouton retour en arrière du navigateur + alert pour informer l'utilisateur.
	fonctionAuChangementDePage() {
		window.onpopstate = (event) => {
			alert(
				"adresse: " +
                document.location.search +
                ", état: " +
                JSON.stringify(event.state)
			);
			this.definePage({ changeHistory: false });
		};
	}
}