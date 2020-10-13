class Cart{
    constructor(domTarget){
        this.DOM = document.createElement("div"); //Création d'un nouvel élément "div"
        this.DOM.className = "aa-cartbox";
        domTarget.appendChild(this.DOM); //Déplacer un élément d'un endroit vers un autre
        this.products = [];
        this.render();
        orinoco.cart = this;
    }

    render(){
        this.DOM.innerHTML =  `
                           <a class="aa-cart-link" href="#">
                           <span class="fa fa-shopping-basket"></span>
                           <span class="aa-cart-title">MON PANIER</span>
                           <span class="aa-cart-notify">${this.products.length}</span>
                           </a>
                           <div class="aa-cartbox-summary">
                              <ul>
                              ${this.templateProduits()}
                              </ul>
                              <a class="aa-cartbox-checkout aa-primary-btn" href="checkout.html">Passer la commande</a>
                           </div>`
    }

    templateProduits(){
        let content = "";
        for(let i=0, size=this.products.length; i<size; i++){
            content += `
            <li>
                <a class="aa-cartbox-img" href="#"><img src="${this.products[i].imgURL}" alt="img"></a>
                <div class="aa-cartbox-info">
                <h4><a href="#">Doucou copain</a></h4>
                <p>1 x 15.90€</p>
                </div>
                <a class="aa-remove-product" href="#"><span class="fa fa-times"></span></a>
            </li>
            `
        }
        return content;
    }

    add(product){
        this.products.push(product);
        this.render();
    }
}
