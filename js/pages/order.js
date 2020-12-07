/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* global orinoco */
"use strict";

//Création de la page panier
class Order extends Page {
	constructor(pageSpecs = {}) {
		super(pageSpecs);
		// console.log(pageSpecs, this)
		if (this.changeHistory && orinoco.pageManager !== null)
			orinoco.pageManager.changePage("oriKids : votre panier", "panier", this); //Historique changement de page
		this.render();
	}

	//Rendu dans le DOM
	template() {
		document.getElementById("titre").innerText = "PANIER";
		return `
      <div id="contentBasket">
        ${this.addProductsInResume()}
      </div>
      <div id="totalBasket">Le montant total de votre commande est de : ${this.getTotal()}€</div>
      <form id="formulaire">
        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="firstname">Prénom :</label>
            <input type="text" name="firstName" class="form-control" id="firstname" placeholder="Votre prénom..." required />
            <span id="oublisPrenom"></span><br />
          </div>
          <div class="form-group col-md-5">
            <label for="name">Nom :</label>
            <input type="text" name="lastName" class="form-control" id="name" placeholder="Votre nom..." required />
            <span id="oublisNom"></span><br />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="email">Email :</label>
            <input type="email" name="email" class="form-control" id="email" placeholder="Votre email@email.fr" required />
            <span id="oublisEmail"></span><br />
          </div>
          <div class="form-group col-md-5">
            <label for="address">Adresse :</label>
            <input type="text" name="address" class="form-control" id="address" placeholder="6, Rue du Moulin" required />
            <span id="oublisAdress"></span><br />
          </div>
        </div>
        <div class="form-group col-md-8">
          <label for="city">Ville :</label>
          <input type="text" name="city" class="form-control" id="city" placeholder="Votre ville..." required />
          <span id="oublisVille"></span><br />
        </div>

      <button class="panier" id="valider" type="submit" onclick="orinoco.pageManager.page.sendForm(event)">
      <span class="fa fa-send">Valider la commande</span>
      
      `;
	}
    
	//Affichage dynamique des produits du panier dans la page
	addProductsInResume() {
		let productListHtml = "";
		for (const value of Object.values(this.products)) {
			productListHtml += this.templateProductLine(value); //Ajoute une ligne de produit
		}
		return productListHtml;
	}

	templateProductLine(data) {
		// console.log(data)
		return `
      <div id="panier">
          <article id="articlePanier">
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
                              <button id="supprime" onclick="orinoco.pageManager.page.deleteToCart('${data.id}')"><i class="fas fa-trash"></i> Supprimer le produit</button>
                  </div>
          </article>
      </div>
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

	//Alerte si le panier est vide
	

	render() {
		this.products = this.redefineCartContent(orinoco.cart.contentBasket);
		if (this.domTarget !== undefined)
			this.domTarget.innerHTML = this.template();
		else orinoco.pageManager.domTarget.innerHTML = this.template();
	}
    
	//Calcul du montant total du panier
	getTotal() {
		let total = 0;
		for (const value of Object.values(this.products)) {
			total += value.qty * value.price;
		}
		return total;
	}

	//Création de l'objet contact et du tableau de produits pour la requete à envoyer au serveur
	sendForm(event) {
		event.stopPropagation(); 
		event.preventDefault();
		//Récupération des champs du formulaire
		const contact = {
			firstName: document.getElementById("#firstName").value,
            
			lastName : document.getElementById("#lastName").value,
            
			address  : document.getElementById("#address").value,
            
			city     : document.getElementById("#city").value,
            
			email    : document.getElementById("#email").value,
            
		};
		
		let products = []; //initialisation de l'objet qui va contenir les id des produits 
		for (const value of Object.values(this.products)) { //boucle pour recuperer les id 
			products.push(value.id); //envoie des id dans la variable products
		}

		orinoco.dataManager.sendForm(contact, products, this.showOrderID.bind(this));
		

	}
	//Fonction callback de sendForm
	showOrderID(orderID){
		console.log(":) "+orderID);
		alert(":) "+orderID);
	}
}
