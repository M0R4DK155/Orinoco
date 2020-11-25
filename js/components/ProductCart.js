//Composant permettant l'affichage du ou des produits dans le panier
class ProductCart extends Component { //Le mot-clé extends est utilisé dans les déclarations et expressions de classes afin de signifier qu'un type représenté par une classe hérite d'un autre type.

    imageUrl;
    name;
    price;
    qty;
    total;

    constructor(props, domTarget) {
        super("product", props, domTarget);
        this.render();
    }

    //Ajouter un produit dans le panier
    add() {
        this.qty += 1;
    }
    //Retirer un produit du panier
    remove() {
        this.qty -= 1;
    }
    //Supprimer un produit
    delete() {

    }
    //Rendu
    render() {
        this.DOM.innerHTML = `
                    <div id="panier">
                        <article id="articlePanier">
                            <h2>Norbert</h2><img src="${this.imageUrl}">
                                <div id="produit">
                                    <h3>Quantité: </h3>
                                        <p>${this.qty}</p>
                                    <h3>Prix: </h3>
                                        <p id="price">${this.price}</p>
                                            <button id="supprime">supprimer l'article</button>
                                </div>
                        </article>
                    </div>
                `;

    }

}