//Composant permettant l'affichage du ou des produits dans le panier
class ProduitPanier extends Component { //Le mot-clé extends est utilisé dans les déclarations et expressions de classes afin de signifier qu'un type représenté par une classe hérite d'un autre type.

    imageUrl = null;
    name = null;
    price = null;
    qty = null;
    total = null;

    constructor(props, domTarget) {
        super("product", props, domTarget);
        this.render();
    }

    //Ajouter un produit dans le panier
    add() {

    }
    //Retirer un produit du panier
    remove() {

    }
    //Supprimer un produit
    delete() {

    }
    //Rendu
    render() {

    }

}