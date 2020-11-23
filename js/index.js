//? product5be9c8541c9d440000665243

// Routeur par défaut
var orinoco = {
    dataManager: new DataManager('http://localhost:3000/api/teddies/'),  // On récupère les données du serveur
    pageManager: null,
    cart: null,
    products: {},
    // component: {}
};
// alerte si le serveur ne répond pas
// alert("Nous sommes désolé, le serveur ne répond pas ! ")

orinoco.pageManager = new PageManager(document.querySelector("main"));
orinoco.cart = new Cart(document.querySelector(".boutons"));
