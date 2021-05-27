/* eslint-disable no-unused-vars */

//Gestion des échanges avec la BDD et les appels vers l'API.
class DataManager {
	constructor(src) {
		this.src = src; //On définit où il va chercher les données (src=localhost).
		this.products = {}; //On initialise un objet vide.
	}
    
	//Requête fetch pour récuperer les données du serveur.
	async getDataFromServer(callback) {
		try{
			const data = await fetch(this.src); //On invoque la méthode Fetch en lui passant l'URL de la ressource que nous voulons récupérer, retourne une promesse on lui demande d'attendre (await). Une fois qu'il les a, on stocke dans data
			const products = await data.json(); // data est recu sous forme de promesse, donc on convertit les données au format json.
			for (let i = 0, size = products.length; i < size; i++) { //Boucle pour récupérer tous nos produits.
				this.products[products[i]._id] = products[i];
			}
			callback(products); //On exécute la fonction getDataFromServer
		}
		catch(err){
			alert("le serveur n'est pas disponible"); //Message d'alerte en cas de rejet de la requête
		}
	}

	//Requête fetch pour récuperer les infos d'un produit (on sort le produit de notre boucle du dessus (Ligne 14))
	async getDataProductFromServer(idProduct, callback) {
		try{
			const data = await fetch(this.src + idProduct);
			const product = await data.json();
			this.products[product._id] = product;
			callback(product); //On exécute la fonction getDataProductFromServer
		}catch(err){
			alert("le serveur n'est pas disponible"); //Message d'alerte en cas de rejet de la requête
		}
	}

	/**
	   * récupère des données du localStorage - Sauvegarde du panier en cas de fermeture de la page.
	   *
	   * @param   {string}   valueName  Le nom de la valeur que l'on veut récupérer
	   * @param   {Boolean}  [getJson]  Argument optionnel true si on veut un JSON sinon false
	   *
	   * @return  {null | Array}        Le contenu du localStorage soit sous forme de chaine soit sous forme de JSON
	   */
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
		try{
			let response = await fetch(this.src + "order", {
				method: "post",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body:  JSON.stringify({ //Convertit une valeur JavaScript en chaîne JSON
					"contact": contact,
					"products": products
				})
			});
			response = await response.json(); //Réponse au format JSON
			callback(response);
        
			localStorage.clear(); //Le panier se vide une fois la commande confirmée.
		}
		catch(err){
			alert("le serveur n'est pas disponible"); //Message d'alerte en cas de rejet de la requête
		}
	}
}

