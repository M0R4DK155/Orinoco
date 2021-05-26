/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//Fiche détaillée du produit
class DetailedProduct {
	constructor(props, domTarget, container) {
		for (const [key, value] of Object.entries(props)) { //Object.entries() crée un tableau de tableaux. Chaque tableau interne a deux éléments. Le premier est la clé et le deuxième est la valeur.
			this[key] = value; //Rempli nos différentes propriétés.
		}
		this.showDetails = false;
		this.DOM = document.createElement("article"); //Nom de la balise ciblée pour créer un nouveau noeud dans le DOM, représentation de notre élément dans le DOM
		this.DOM.className = "listeArticle"; // Ciblage de la classe
		domTarget.appendChild(this.DOM); //Ajoute l'élément "article" dans le DOM
		window[container].products["product" + this._id] = this;
		this.container = container;
		this.products = [];
		this.render();
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