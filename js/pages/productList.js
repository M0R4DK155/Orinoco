//Création de la page liste des produits 
class ProductList extends Page {
    constructor(pageSpecs) {
        super(pageSpecs);

        if (this.changeHistory) orinoco.pageManager.changePage("liste des produits Orinoco", "", this);
        orinoco.dataManager.getDataFromServer(this.showProducts.bind(this)); //La méthode bind() crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte this la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.
    }

    //Affichage du produit dans une nouvelle page
    //showProducts = Fonction callback de getDataFromServer
    showProducts(list) {
        orinoco.pageManager.domTarget.innerHTML = this.ariane("liste des produits");
        for (let i = 0, size = list.length; i < size; i++) {
            new CarteProduit(list[i], orinoco.pageManager.domTarget, 'orinoco');
        }
    }
}