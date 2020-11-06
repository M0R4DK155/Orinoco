// Création de l'icone mon panier sur le header
class Panier {
  constructor(domTarget) {
    this.DOM = document.createElement('div'); //Création d'un nouvel élément "div" dans le DOM. L'opérateur this fait référence à Cart
    this.DOM.className = 'aa-cartbox'; //Zone d'affichage du panier
    domTarget.appendChild(this.DOM); //Déplacer un élément d'un endroit vers un autre

    //récupère la liste de(s) produit(s) dans le panier
    this.products = orinoco.dataManager.getLocalData("panier",true);
    if (this.products === null) this.products = []; 

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
        <a class="aa-cartbox-img" href="#"><img src="${this.products[i].imageUrl}" alt="img"></a>
        <div class="aa-cartbox-info">
          <h4><a href="#">${this.products[i].name}</a></h4>
            <p>${this.products[i].price}€</p>
        </div>
            <div class="aa-remove-product" onclick="orinoco.panier.remove('${this.products[i].id}')"><span class="fa fa-times"></span></div>
        </li>
            `;
    }
    return content;
  }

  add(product) {
    this.products.push(product);
    this.updatePanier();
  }

  remove(productIdToRemove){
    let nouveauPanier = [];
    let removed = false;
    for (let i=0, size=this.products.length; i <size; i++){
      if(removed) {
        nouveauPanier.push(this.products[i]);
        continue;
      }
      if (this.products[i].id !== productIdToRemove) {
        nouveauPanier.push(this.products[i]);
        continue;        
      }
      removed = true;
    }
    this.products = nouveauPanier;
    this.updatePanier();
  }

  updatePanier(){    
    orinoco.dataManager.setLocalData("panier", this.products);
    this.render();
  }
}
