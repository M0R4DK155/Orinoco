/* eslint-disable no-unused-vars */
class DataManager {
	constructor(src) {
		this.src = src; //On définit où il va chercher les données (src=localhost)
		this.products = {};
		// console.log(this.products);
	}

	//Requête fetch pour récuperer les données du serveur 
	async getDataFromServer(callback) {
		const data = await fetch(this.src);
		const products = await data.json();
		for (let i = 0, size = products.length; i < size; i++) {
			this.products[products[i]._id] = products[i];
		}
		callback(products);
	}

	//Requête fetch pour récuperer les infos d'un produit (on sort le produit de notre boucle du dessus (Ligne 12))
	async getDataProductFromServer(idProduct, callback) {
		const data = await fetch(this.src + idProduct);
		const product = await data.json();
		this.products[product._id] = product;
		callback(product);
	}

	/**
	   * récupère des données du localStorage
	   *
	   * @param   {string}   valueName  le nom de la valeur que l'on veut récupérer
	   * @param   {Boolean}  [getJson]  argument optionnel true si on veut un JSON sinon false
	   *
	   * @return  {String|JSON}         le contenu du localStorage soit sous forme de chaine soit sous forme de JSON
	   */

	//Gestion des produits dans le storage
	getLocalData(valueName, getJson = false) {
		const data = localStorage.getItem(valueName); //Stockage du produit dans le storage
		return getJson ? JSON.parse(data) : data; //On vérifie si on a getJson, si getJson est sur true on le parse sinon il retourne une string
	}

	setLocalData(key, value) {
		if (typeof value !== "string") value = JSON.stringify(value);
		return localStorage.setItem(key, value);
	}

	//Envoi du formulaire
	async sendForm(contact, products, callback) {
		let response = await fetch(this.src + "/order", { // création de la variable pour relier à l'API
			method: "POST",
			body: {
				"contact": contact,
				"products": products
			}
		});
		response = await response.json();
		callback(response);
	}
	// localStorage.clear()
}