/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* global orinoco */
"use strict";

//Création de la page panier
class Order extends Page {

	formIsValid=0;

	constructor(pageSpecs = {}) {
		super(pageSpecs);
		if (this.changeHistory && orinoco.pageManager !== null)
			orinoco.pageManager.changePage("oriKids : votre panier", "panier", this); //Historique changement de page
		this.render();
	}

	//Rendu dans le DOM
	template() {
		document.getElementById("titre").innerText = "PANIER";
		if (orinoco.cart.contentBasket.length === 0) return '<div id="panierVide">Votre panier est vide :(</div>';
		return `
      <div id="contentBasket">
        <div id="panier">
          ${this.addProductsInResume()}
        </div>
      </div>
      <div id="totalBasket">
      Le montant total de votre commande est de : ${this.getTotal()}€
    </div>
    <form id="formulaire">
      <div class="form-row">
        <div class="form-group col-md-5">
          <label for="firstname">Prénom :</label>
          <input type="text" name="firstName" class="form-control" id="firstname" placeholder="Votre prénom..." pattern="[a-zA-Zéèïëàç-]+" maxlength="30" required />
          <span id="oublisPrenom"></span><br />
        </div>
        <div class="form-group col-md-5">
          <label for="name">Nom :</label>
          <input type="text" name="lastName" class="form-control" id="lastName" placeholder="Votre nom..." pattern="[a-zA-Zéèïëàç-]+" maxlength="30" required />
          <span id="oublisNom"></span><br />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-5">
          <label for="email">Email :</label>
          <input type="email" name="email" class="form-control" id="email" pattern="[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}" placeholder="Votre email@email.fr" required />
          <span id="oublisEmail"></span><br />
        </div>
        <div class="form-group col-md-5">
          <label for="address">Adresse :</label>
          <input type="text" name="address" class="form-control" id="address" placeholder="6, Rue du Moulin" pattern"[a-zA-Z ,.'-]" required />
          <span id="oublisAdress"></span><br />
        </div>
      </div>
      <div class="form-group col-md-8">
        <label for="city">Ville :</label>
        <input type="text" name="city" class="form-control" id="city" placeholder="Votre ville..." pattern"[a-zA-Z ,.'-]" required />
        <span id="oublisVille"></span><br />
      </div>
    
      <button
        class="panier" id="valider" type="submit" onclick="orinoco.pageManager.page.sendForm(event)">
        <span class="fa fa-send"> Valider la commande</span>
      </button>
    </form>
      `;
	}

	//Affichage dynamique des produits du panier dans la page
    //Permet d'ajouter un produit
	addProductsInResume() {
		let productListHtml = "";
		for (const value of Object.values(this.products)) {
			productListHtml += this.templateProductLine(value); //Ajoute une ligne de produit dans contenBasket
		}
		return productListHtml;
	}

    // Modèle du contenu du panier 
	templateProductLine(data) {
		return `
          <article class="articlePanier">
              <h2>${data.name}</h2><img src="${data.imageUrl}">
                  <div id="produit">
                      <h3>Quantité: </h3>
                          <p>
                              <button onclick="orinoco.pageManager.page.changeQty('${data.id}','-')">-</button>
                              ${data.qty}
                              <button onclick="orinoco.pageManager.page.changeQty('${data.id}','+')">+</button>
                          </p>
                      <h3>Prix: </h3>
                          <p id="price">${data.price * data.qty}</p>
                              <button id="supprimer" onclick="orinoco.pageManager.page.deleteToCart('${data.id}')"><i class="fas fa-trash"></i> Supprimer le produit</button>
                  </div>
          </article>
  `;
	}

	/**
	 * regroupe les éléments dupliqués dans le panier
	 *
	 * @param   {Array}  products  contenu du panier
	 *
	 * @return  {Object}           le contenu factorisé
	 */
	redefineCartContent(products) {
		const factorisedProductList = {};
		products.sort();
		for (let i = 0, size = products.length; i < size; i++) {
			if (factorisedProductList[products[i].id] !== undefined) {
				factorisedProductList[products[i].id].qty++;
				continue;
			}
			factorisedProductList[products[i].id] = { ...products[i], qty: 1 };
		}
		return factorisedProductList;
	}

	//Calcul du prix selon la quantité choisie
	changeQty(productId, direction) {
		orinoco.cart.changeQty(productId, direction);
		this.render();
	}

	/**
	 * 	Supprimer un produit du panier
	 *
	 * @param   {String}  product  l'id du produit
	 *
	 * @return  {void}
	 */
	deleteToCart(product) {
		alert("Vous avez supprimé un produit au panier");
		orinoco.cart.delete(product);
		this.render();
	}

	render() {
		this.products = this.redefineCartContent(orinoco.cart.contentBasket);
		this.getContainer.innerHTML = this.template();
	}

	/**
	 * récupère le noeud DOM où l'on va injecter le contenu
	 *
	 * @return  {HTMLElement}  le noeud HTML
	 */
	get getContainer() { //get nous permet d'utiliser notre variable getContainer comme une fonction (fonctionne tant qu'on a pas d'arguments à passer)
		if (this.domTarget !== undefined) return this.domTarget;
		return orinoco.pageManager.domTarget;
	}

	//Calcul du montant total du panier
	getTotal() {
		let total = 0;
		for (const value of Object.values(this.products)) {
			total += value.qty * value.price;
		}
		return total;
	}

	//Création de l'objet contact et du tableau de produits pour la requête à envoyer au serveur
	sendForm(event) {
		console.log("event:", event);

		event.preventDefault();
		event.stopPropagation();

		this.formIsValid = 0;

		//Récupération des champs du formulaire
		const contact = {
			address   : this.verifChamps(document.getElementById("address"), /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/ ),
			city      : this.verifChamps(document.getElementById("city"), /^^[a-zA-Z ,.'-]+$/ ),
			email     : this.verifChamps(document.getElementById("email"), /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/ ),
			firstName : this.verifChamps(document.getElementById("firstname"), /^[a-zA-Z ,.'-]+$/),
			lastName  : this.verifChamps(document.getElementById("lastName"),  /^[a-zA-Z ,.'-]+$/),
		};

        if (this.formIsValid<5) return; 

		let products = []; //initialisation de l'objet qui va contenir les id des produits 
		for (const value of Object.values(this.products)) { //boucle pour recuperer les id 
			products.push(value.id); //envoie des id dans la variable products
		}

		orinoco.dataManager.sendForm(contact, products, this.showOrderID.bind(this));
	}

	/**
	 * [verifChamp description]
	 *
	 * @param   {HTMLElement}  noeudDom  [donnee description]
	 * @param   {RegExp}       regex   [regex description]
	 *
	 * @return  {String|null}          [return description]
	 */
	verifChamps(noeudDom, regex){
		const value = noeudDom.value;
		if (! regex.test(value) ) {
			noeudDom.className = "form-control error";
			return null;
		}
		noeudDom.className = "form-control";
		this.formIsValid++;
		return value;
	}

	//Fonction callback de sendForm
	showOrderID(orderID) {
		this.getContainer.innerHTML = `
			<div class="jumbotron" id="ConfirmationDeCommande">
                <h1 class="display-4">Votre commande a bien été prise en compte.<i class="fas fa-check"></i></h1>
                <h2> Nous vous remercions de votre confiance </div>
				<div id="recap">Votre numéro de commande : ${orderID.orderId}</div>


				<a class="btn btn-secondary btn-lg retour" href="index.html" onclick="retour()" role="button">Retour à
					l'accueil</a>
			</div>
		`;
		orinoco.cart.clear();
	}
}
