//Affichage dynamique des produits
class ProductPage extends Page {
    constructor(pageSpecs) {
        super(pageSpecs);
        const productInfo = orinoco.dataManager.products[this.idProduct];
        if (productInfo === undefined) {
            orinoco.dataManager.getDataProductFromServer(this.idProduct, this.showProduct.bind(this));
            return;
        }
        this.showProduct(productInfo);
    }

    //Fonction pour afficher le produit sélectionné au clic
    showProduct(dataProduct) {
        orinoco.pageManager.changePage("oriKids : " + dataProduct.name, "product" + dataProduct._id, this);
        orinoco.pageManager.domTarget.innerHTML = this.template(dataProduct);
    }

    //Vue détaillée du produit cliqué
    template(data) {
        return `
      ${this.ariane("produit : " + data.name)}
      <article id="listeArticle">
        <h3>${data.name}</h3>
            <img src="${data.imageUrl}" alt="" srcset="">
        <div>
            <h4>${data.price / 100} €</h4>
            <h4>Description du produit</h4>
                <p>${data.description}</p>
            <select id="choixCouleur">
                ${this.colors(data.colors)}
            </select>
            <button id="onclick="${this.container}.products.product${this._id}.addToCart()">Ajouter au panier</button>
        </div>
      </article>
    `
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
        orinoco.panier.add({
            id: this._id,
            name: this.name,
            price: this.price / 100,
        })
    }


}
