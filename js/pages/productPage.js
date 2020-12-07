/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* global orinoco */

//Affichage dynamique des produits
class ProductPage extends Page { //Le mot-clé extends est utilisé dans les déclarations et expressions de classes afin de signifier qu'un type représenté par une classe hérite d'un autre type.
	constructor(pageSpecs) {
		super(pageSpecs); //Le mot-clé super est utilisé afin d'appeler ou d'accéder à des fonctions définies sur l'objet parent (Page dans notre cas).
		this.productInfo = orinoco.dataManager.products[this.idProduct];
		if (this.productInfo === undefined) {
			orinoco.dataManager.getDataProductFromServer(this.idProduct, this.saveData.bind(this)); 
			return;
		}
		this.showProduct();
	}

	saveData(productInfo) {
		this.productInfo = productInfo;
		this.showProduct();
	}

	//Fonction pour afficher le produit sélectionné au clic avec URL du produit dans la barre de navigation ( nom du produit est un + pour le référencement)
	showProduct() {
		orinoco.pageManager.changePage("oriKids : " + this.productInfo.name, "product" + this.productInfo._id, this);
		orinoco.pageManager.domTarget.innerHTML = this.template();
	}

	//Vue détaillée du produit cliqué
	template() {
		document.getElementById("titre").innerText = "PRODUIT";
		return `
      ${this.ariane("produit : " + this.productInfo.name)}
      <article id="listeArticle">
        <h3>${this.productInfo.name}</h3>
            <img src="${this.productInfo.imageUrl}" alt="teddy" srcset="">
        <div>
            <h4>${this.productInfo.price / 100} €</h4>
            <h4>Description du produit</h4>
                <p>${this.productInfo.description}</p>
            <select id="choixCouleur">
                ${this.colors(this.productInfo.colors)}
            </select>
            <a id="lien" onclick="orinoco.pageManager.page.addToCart()">Ajouter au panier</a>
        </div>
      </article>
    `;
	}
    
	//Option de personnalisation - Couleur de la peluche
	colors(list) {
		let content = "";
		for (let i = list.length - 1; i > 0; i--) {
			content += `<option value="${list[i]}">${list[i]}</option>`;
		}
		return content;
	}
    
	//Ajout au panier
	addToCart() {
		orinoco.cart.add({
			id: this.productInfo._id,
			name: this.productInfo.name,
			price: this.productInfo.price / 100,
			imageUrl: this.productInfo.imageUrl,
		});
		alert("Vous avez ajouté un produit au panier");
	}


}
