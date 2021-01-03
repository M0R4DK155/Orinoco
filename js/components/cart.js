/* eslint-disable no-unused-vars */
/* global orinoco */

//Composant panier
class Cart {
	constructor(domTarget) {
		this.DOM = document.createElement("div");
		this.DOM.className = "boutons";
		this.DOM.id = "panier";
		domTarget.appendChild(this.DOM);
		this.contentBasket = orinoco.dataManager.getLocalData("panier", true); //Récupère le contenu du panier dans le local storage
		if (this.contentBasket === null) this.contentBasket = []; //Si le panier est vide, il retourne un tableau
		this.render();
	}

	//Affichage dynamique du panier
	render() {
		this.DOM.innerHTML = `
                    <button class="panier" 
                        onclick='new Order()' 
                        data-target="panier">Panier (${this.contentBasket.length})<i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
                `;

	}

	//Affichage du nombre de produit dans le panier sous forme d'icone
	templateProduits() {
		let content = "";
		for (let i = 0, size = this.contentBasket.length; i < size; i++) {
			content += `
            <span class="qteArticle">${this.contentBasket[i].contentBasket}</span>
            `;
		}
		return content;
	}

	//Ajouter un produit dans le panier
	add(product) {
		this.contentBasket.push(product);
		orinoco.dataManager.setLocalData("panier", this.contentBasket);
		this.render();
	}

	//Retirer un produit du panier
	delete(idProduct) {
		let newBasket = [];
		for (let i = this.contentBasket.length - 1; i >= 0; i--) {
			if (this.contentBasket[i].id !== idProduct) newBasket.push(this.contentBasket[i]);
		}
		this.contentBasket = newBasket;
		orinoco.dataManager.setLocalData("panier", this.contentBasket);
		this.render();
	}

	//Gestion choix quantité -+
	changeQty(productId, direction) {
		let index = null;
		for (let i = 0, size = this.contentBasket.length; i < size; i++) {
			if (this.contentBasket[i].id === productId) {
				index = i;
				break;
			}
		}
		switch (direction) {
		case "+":
			this.contentBasket.push(this.contentBasket[index]);
			break;
		case "-":
			if (index > -1) {
				this.contentBasket.splice(index, 1);
			}
			break;
		default:
			alert("direction non définie");
			break;
		}
		orinoco.dataManager.setLocalData("panier", this.contentBasket);
		this.render();
	}
	//Vidage du panier après confirmation de commande
	clear() {
		this.contentBasket = [];
		this.render();
	}
}


