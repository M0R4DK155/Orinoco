//Composant panier
class Cart {
    constructor(domTarget) {
        this.DOM = document.createElement("div");
        this.DOM.className = "boutons";
        this.DOM.id="panier";
        domTarget.appendChild(this.DOM);
        orinoco.dataManager.getLocalData("panier", true); //Récupère le contenu du panier dans le local storage
        this.contentBasket = orinoco.dataManager.getLocalData("panier", true); //Enregistre le panier dans le local storage
        if (this.contentBasket === null) this.contentBasket = []; //Si le panier est vide, il retourne un tableau
        this.render();
    }

    //Affichage du panier
    render() {
        this.DOM.innerHTML = `
                    <button class="panier" 
                        onclick='new Order()' 
                        data-target="panier">Panier (${this.contentBasket.length})<i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
                `;

    }

    templateProduits() {
        let content = "";
        for (let i = 0, size = this.contentBasket.length; i < size; i++) {
            content += `
            <span class="qteArticle">${this.contentBasket[i].contentBasket}</span>
            `
        }
        return content;
    }
    //Ajouter un produit dans le panier
    add(product) {
        this.contentBasket.push(product);
        orinoco.dataManager.setLocalData("panier", this.contentBasket);
        this.render();
    }
}


