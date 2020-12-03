/* eslint-disable no-undef */
// Page de base - Routeur par défaut
var orinoco = {
	cart: null, //Affichage du panier
	dataManager: new DataManager("http://localhost:3000/api/teddies/"), // Récupération et gestion des données du serveur
	pageManager: null, //Gestion navigation vers les différentes pages + gestion historique
	products: {}
};
// alerte si le serveur ne répond pas
// alert("Nous sommes désolé, le serveur ne répond pas ! ")

orinoco.cart = new Cart(document.querySelector("#cartContainer")); //Cible l'endroit où on injecte notre panier
orinoco.pageManager = new PageManager(document.querySelector("main")); //Cible l'endroit où on injecte nos pages











// Fonction callback à éxécuter quand une mutation est observée
// const callback = function (mutationsList, observer) {
// 	for (const mutation of mutationsList) {
// 		if (mutation.type === "childList") {

// 			for (let i = 0, size = mutation.addedNodes; i < size; i++) {
// 				if (mutation.addedNodes[i] !== undefined && orinoco.products[mutation.addedNodes[i].id] !== undefined) {
// 					// console.log("Un noeud enfant a été ajouté", mutation);
// 					orinoco.products[mutation.addedNodes[i].id].mounted();
// 				}
// 			}

// 			for (let i = 0, size = mutation.removedNodes; i < size; i++) {
// 				if (mutation.removedNodes[i] !== undefined && orinoco.products[mutation.removedNodes[i].id] !== undefined) {
// 					// console.log("Un noeud enfant a été supprimé.", mutation);
// 					orinoco.products[mutation.removedNodes[i].id].unmounted();
// 				}
// 			}

// 		} else if (mutation.type === "attributes") {
// 			// console.log("L'attribut '" + mutation.attributeName + "' a été modifié.");
// 		}
// 	}
// };

// // Créé une instance de l'observateur lié à la fonction de callback
// const observer = new MutationObserver(callback); //Crée et renvoie un nouveau MutationObserver qui invoquera une fonction de rappel spécifiée lorsque des modifications du DOM se produisent.

// // Commence à observer le noeud cible pour les mutations précédemment configurées
// observer.observe(document.body, {
// 	attributes: true,
// 	childList: true,
// 	subtree: true,
// });
