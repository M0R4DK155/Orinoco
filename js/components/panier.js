//Composant panier
class Panier {
    constructor(domTarget) {
        this.DOM = document.createElement("div");
        this.DOM.className = "boutons";
        domTarget.appendChild(this.DOM);
        orinoco.dataManager.getLocalData("panier", true);
        this.contentBasket = orinoco.dataManager.getLocalData("panier", true);
        if (this.contentBasket === null) this.contentBasket = [];
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

    add(product) {
        this.contentBasket.push(product);
        orinoco.dataManager.setLocalData("panier", this.contentBasket);
        this.render();
    }
}


