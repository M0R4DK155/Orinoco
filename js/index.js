/* eslint-disable no-undef */

// Page de base - Routeur par défaut
var orinoco = {                                                         //Variable globale
	cart: null,                                                         //Affichage du panier
	dataManager: new DataManager("http://localhost:3000/api/teddies/"), // Récupération et gestion des données du serveur
	pageManager: null,                                                  //Gestion navigation vers les différentes pages + gestion historique
	products: {}
};

// alerte si le serveur ne répond pas
// alert("Nous sommes désolé, le serveur ne répond pas ! ")

orinoco.cart = new Cart(document.querySelector("#cartContainer"));      //Cible l'endroit où on injecte notre panier
orinoco.pageManager = new PageManager(document.querySelector("main"));  //Cible l'endroit où on injecte le contenu nos pages

