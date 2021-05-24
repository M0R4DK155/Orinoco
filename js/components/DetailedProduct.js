/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//Fiche détaillée du produit
class DetailedProduct {
	constructor(props, domTarget, container) {
		// console.log(container);
		for (const [key, value] of Object.entries(props)) { //La méthode Object.entries() renvoie un tableau des propriétés propres énumérables d'un objet dont la clé est une chaîne de caractères, sous la forme de paires [clé, valeur]
			this[key] = value;                              //Rempli nos différentes propriétés
		}
		this.showDetails = false;
		// console.log(this.showDetails);
		this.DOM = document.createElement("article");       //Représentation de notre élément dans le DOM
		this.DOM.className = "listeArticle"; 
		domTarget.appendChild(this.DOM);                    //Ajoute l'enfant "article" dans le DOM
		window[container].products["product" + this._id] = this;
		this.container = container;
		this.products = [];
		this.render();

		// console.log(this)
	}
    
	// Affichage dynamique du produit sélectionné sous forme de fiche
	resumeTemplate() {
		return `
        <h3 id="peluche">${this.name}</h3>
                <img src="${this.imageUrl}">
                <div>
                    <h4>Prix : </h4>
                    <p>${this.price / 100}€</p>
                    <a id="lien" onclick="${this.container}.products.product${this._id}.changeView()" >Voir le produit</a>
                </div>
            </article>
        `;
	}
    
	//Fonction pour générer l'affichage du produit
	render() {
		this.DOM.innerHTML = this.showDetails ? this.detailedTemplate() : this.resumeTemplate(); //Si showDetails est ==true on fait detailedTemplate, sinon on fait resumeTemplate
	}

	changeView() {
		new ProductPage({
			name: this.name,
			idProduct: this._id
		});
	}
}