class Modal {
    constructor(domTarget) {
        this.DOM = document.createElement('div'); //Création d'un nouvel élément "div" dans le DOM. L'opérateur this fait référence à Cart
        this.DOM.className = 'aa-product-view-content'; //TROUVER l'ELEMENT A CIBLER!
        domTarget.appendChild(this.DOM); //Déplacer un élément d'un endroit vers un autre
        this.products = [];
        this.render();
        orinoco.modal = this;
    }

    render() {
        this.DOM.innerHTML = `
        <h3>${this.name}</h3>
         <div class="aa-price-block">
            <span class="aa-product-view-price">${this.price / 100}€</span>
         </div>
         <p>${this.description}</p>
         <h4>Couleur</h4>
         <div class="aa-prod-view-color">
            <form action="post">
               <select name="colors" id="color-select">
                  <option value="0">${this.colors}</option>
               </select>
            </form>
         </div>
         <h4>Quantité</h4>
         <div class="aa-prod-quantity">
            <input type="number" min="1" max="10" value="1" name="product_qty" id="quantity" class="form-control" placeholder="Quantité" aria-label="Quantité" aria-describedby="quantity" />
         </div>
         <div class="aa-prod-view-bottom">
            <a href="order.html" class="aa-add-to-cart-btn">Ajouter au panier</a>
         </div>`;
    }
    templateProduits() {
        let content = '';
        for (let i = 0, size = this.products.length; i < size; i++) {
            content += `
      <li>
        <a class="aa-cartbox-img" href="#"><img src="${this.products[i].imgURL}" alt="img"></a>
        <div class="aa-cartbox-info">
          <h4><a href="#">${this.name}</a></h4>
            <p>${this.price / 100}€</p>
        </div>
            <a class="aa-remove-product" href="#"><span class="fa fa-times"></span></a>
        </li>
            `;
        }
        return content;
    }

}
