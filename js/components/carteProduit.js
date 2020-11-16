class CarteProduit {
    constructor(props, domTarget, container) {
        for (const [key, value] of Object.entries(props)) {
            this[key] = value;
        }
        this.showDetails = false;
        this.DOM = document.createElement("div");
        this.DOM.className = "listeArticle";
        domTarget.appendChild(this.DOM);
        window[container].components["product" + this._id] = this;
        this.container = container;
        this.products = [];
        this.render();
        orinoco.panier = this;
    }

    resumeTemplate() {
        return `
        <h3 id="peluche">${this.products.name}</h3>
                <img src="${this.imageUrl}" alt="teddy_1">
                <div>
                    <h4>Prix : </h4>
                    <p>${this.price / 100}€</p>
                    <a id="lien" href="produit.html" onclick="${this.container}.components.product${this._id}.changeView()" >Voir le produit</a>
                </div>
            </article>
        `
    }

    render() {
        this.DOM.innerHTML = this.showDetails ? this.detailedTemplate() : this.resumeTemplate();
    }

    changeView() {
        console.log(this);
    }

    detailedTemplate() {
        return "-----";
    }

    die() {
        this.DOM.parentNode.removeChild(this.DOM);
        delete (window[this.container].components["product" + this._id]);
    }
}