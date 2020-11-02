//Routeur par défaut
var orinoco = {
   components: {}, //On intègre les composants
   dataManager: new DataManager('http://localhost:3000/api/teddies/'), //On récupère les données du serveur
};

// Affichage de l'icone mon panier sur le header
new Cart(document.querySelector('.aa-header-bottom-area'));
changePage(window.location.search.slice(1)); //On slice le ? dans l'URL

/**
 * change la page à afficher
 *
 * @param   {string}  askedPage  le contenu de la barre d'adresse après le point d'interogation ou les informations de page
 *
 * @return  {void}         appelle la page à afficher
 */
function changePage(askedPage) {
   if (askedPage.slice(0, 5) === 'order') return new Order(); //La méthode slice() permet de "trancher un morceau particulier d'une chaine de caractère, dans notre cas le ?. Méthode plus ou moins similaire à .substr.
   if (askedPage.slice(0, 7) === 'product') return new ProductPage(askedPage);
   if (askedPage.slice(0, 4) === 'list') return new ProductList(askedPage);
   new ProductList();
}

// product
// products
// cart
//
