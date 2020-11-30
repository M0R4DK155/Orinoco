class DataManager {
    constructor(src) {
        this.src = src;
        this.products = {};
    }
    //Création d'une promesse
    async getDataFromServer(callback) {
        const data = await fetch(this.src);
        const products = await data.json();
        for (let i = 0, size = products.length; i < size; i++) {
            this.products[products[i]._id] = products[i];
        }
        callback(products);
    }

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
}