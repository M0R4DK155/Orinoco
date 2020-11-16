//? product5be9c8541c9d440000665243

// Routeur par défaut
var orinoco = {
    dataManager: new DataManager('http://localhost:3000/api/teddies/'),  // On récupère les données du serveur
    pageManager: null,
    panier: null,
    produits: {},  // On intègre les composants
};

orinoco.pageManager = new PageManager(document.querySelector("main"));
orinoco.panier = new Panier(document.querySelector(".boutons"));
