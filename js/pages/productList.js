//Création de la page liste des produits 
class ProductList {
    constructor(addToHistory = true) {
        if (addToHistory) orinoco.pageManager.changePage("liste des produits Orinoco", "", this);
        orinoco.dataManager.getDataFromServer(this.showProducts.bind(this)); //La méthode bind() crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte this la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.
    }

    //Affichage du produit dans une nouvelle page
    //showProducts = Fonction callback de getDataFromServer
    showProducts(list) {
        const target = document.querySelector('div'); //Retourne le selecteur spécifié (faire un createElement pour un meilleur affichage du produit?)
        for (let i = 0, size = list.length; i < size; i++) {
            console.log(orinoco.products["product" + list[i]._id]);

            if (orinoco.products["product" + list[i]._id] !== undefined) {
                orinoco.products["product" + list[i]._id].changeView();
                continue;
            }
            new Product(list[i], target, 'orinoco');
        }
    }
}