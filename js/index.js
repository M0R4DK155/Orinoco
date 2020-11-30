//? product5be9c8541c9d440000665243

// Routeur par défaut
var orinoco = {
	dataManager: new DataManager("http://localhost:3000/api/teddies/"), // On récupère les données du serveur
	pageManager: null,
	cart: null,
	products: {},
	// component: {}
};
// alerte si le serveur ne répond pas
// alert("Nous sommes désolé, le serveur ne répond pas ! ")

// Fonction callback à éxécuter quand une mutation est observée
const callback = function (mutationsList, observer) {
	for (const mutation of mutationsList) {
		if (mutation.type === "childList") {

			for (let i = 0, size = mutation.addedNodes; i < size; i++) {
				if (mutation.addedNodes[i] !== undefined && orinoco.products[mutation.addedNodes[i].id] !== undefined) {
					// console.log("Un noeud enfant a été ajouté", mutation);
					orinoco.products[mutation.addedNodes[i].id].mounted();
				}
			}

			for (let i = 0, size = mutation.removedNodes; i < size; i++) {
				if (mutation.removedNodes[i] !== undefined && orinoco.products[mutation.removedNodes[i].id] !== undefined) {
					// console.log("Un noeud enfant a été supprimé.", mutation);
					orinoco.products[mutation.removedNodes[i].id].unmounted();
				}
			}

		} else if (mutation.type === "attributes") {
			// console.log("L'attribut '" + mutation.attributeName + "' a été modifié.");
		}
	}
};

// Créé une instance de l'observateur lié à la fonction de callback
const observer = new MutationObserver(callback); //Crée et renvoie un nouveau MutationObserver qui invoquera une fonction de rappel spécifiée lorsque des modifications du DOM se produisent.

// Commence à observer le noeud cible pour les mutations précédemment configurées
observer.observe(document.body, {
	attributes: true,
	childList: true,
	subtree: true,
});

orinoco.pageManager = new PageManager(document.querySelector("main"));
orinoco.cart = new Cart(document.querySelector("#cartContainer"));
