//Routeur par défaut
var orinoco = {
  dataManager: new DataManager('http://localhost:3000/api/teddies/'), //On récupère les données du serveur
  page       : null,
  pageManager: null,
  panier     : null,
  products   : {}, //On intègre les composants
};
orinoco.pageManager = new PageManager(document.querySelector('ul.aa-product-catg'));
orinoco.panier      = new Panier(document.querySelector('.aa-header-bottom-area'));