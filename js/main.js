//Routeur par défaut
var orinoco = {
  cart       : new Cart(document.querySelector('.aa-header-bottom-area')),
  components : {}, //On intègre les composants
  dataManager: new DataManager('http://localhost:3000/api/teddies/'), //On récupère les données du serveur
  page       : null,
};
orinoco.pageManager =  new PageManager(document.querySelector('ul.aa-product-catg'));