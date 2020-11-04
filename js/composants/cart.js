// Création de l'icone mon panier sur le header
class Cart {
  constructor(domTarget) {
    this.DOM = document.createElement('div'); //Création d'un nouvel élément "div" dans le DOM. L'opérateur this fait référence à Cart
    this.DOM.className = 'aa-cartbox'; //Zone d'affichage du panier
    domTarget.appendChild(this.DOM); //Déplacer un élément d'un endroit vers un autre
    this.products = []; //Liste de(s) produit(s) dans le panier
    this.render();
  }

  // Rendu de l'icone
  render() {
    this.DOM.innerHTML = `
    <a class="aa-cart-link" href="#">
        <span class="fa fa-shopping-basket"></span>
        <span class="aa-cart-title">MON PANIER</span>
        <span class="aa-cart-notify">${this.products.length}</span>
    </a>
      <div class="aa-cartbox-summary">
        <ul>
          ${this.templateProduits()}
        </ul>
        <a class="aa-cartbox-checkout aa-primary-btn" href="order.html">Passer la commande</a>
      </div>`;
  }
  //Affichage de l'icone dans la page
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

  add(product) {
    this.products.push(product);
    this.render();
  }
}
