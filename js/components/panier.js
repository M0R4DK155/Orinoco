//Composant panier
class Panier {
    constructor(domTarget) {
        this.DOM = document.createElement("div");
        this.DOM.className = "boutons";
        domTarget.appendChild(this.DOM);
        orinoco.dataManager.getLocalData("panier", true);
        this.products = [];
        this.render();
        orinoco.panier = this;
    }

    //Affichage du panier
    render() {
        this.DOM.innerHTML = `
                    <button class="panier" 
                        onclick='location.href="panier.html"' 
                        data-target="panier">Panier (${this.products.length})<i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
                `;

    }

    templateProduits() {
        let content = "";
        for (let i = 0, size = this.products.length; i < size; i++) {
            content += `
            <span class="qteArticle">${this.products[i].products}</span>
            `
        }
        return content;
    }

    add(product) {
        this.products.push(product);
        orinoco.dataManager.setLocalData("panier", this.products);
        this.render();
    }
}


