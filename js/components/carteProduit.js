//Fiche détaillée du produit
class CarteProduit {
    constructor(props, domTarget, container) {
        for (const [key, value] of Object.entries(props)) {
            this[key] = value;
        }
        this.showDetails = false;
        this.DOM = document.createElement("article");
        this.DOM.className = "listeArticle";
        domTarget.appendChild(this.DOM);
        window[container].products["product" + this._id] = this;
        this.container = container;
        this.products = [];
        this.render();
    }

    resumeTemplate() {
        return `
        <h3 id="peluche">${this.name}</h3>
                <img src="${this.imageUrl}" alt="" srcset="">
                <div>
                    <h4>Prix : </h4>
                    <p>${this.price / 100}€</p>
                    <a id="lien" onclick="${this.container}.products.product${this._id}.changeView()" >Voir le produit</a>
                </div>
            </article>
        `
    }

    render() {
        this.DOM.innerHTML = this.showDetails ? this.detailedTemplate() : this.resumeTemplate();
    }

    changeView() {
        new ProductPage({
            name: this.name,
            idProduct: this._id
        })
    }

    // detailedTemplate() {
    //     return "-----";
    // }

    // die() {
    //     this.DOM.parentNode.removeChild(this.DOM);
    //     delete (window[this.container].component["product" + this._id]);
    // }
}