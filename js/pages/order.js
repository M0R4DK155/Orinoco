//Création de la page panier
class Order extends Page {
  constructor(pageSpecs = {}) {
    super(pageSpecs)
    console.log(pageSpecs, this)
    if (this.changeHistory) orinoco.pageManager.changePage("oriKids : votre panier", "panier", this); //Historique changement de page
    this.products = this.redefineCartContent(orinoco.cart.contentBasket);
    orinoco.pageManager.domTarget.innerHTML = this.template();
  }

  template() {
    return `
      <div id="contentBasket">
        ${this.addProductsInResume()}
      </div>
      <div id="totalBasket">Le montant total de votre commande est de : €</div>
      <form id="formulaire">
        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="firstname">Prénom :</label>
            <input type="text" name="firstName" class="form-control" id="firstname" placeholder="Votre prénom..." required /><span id="oublisPrenom"></span><br />
          </div>
          <div class="form-group col-md-5">
            <label for="name">Nom :</label>
            <input type="text" name="lastName" class="form-control" id="name" placeholder="Votre nom..." required /><span id="oublisNom"></span><br />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="email">Email :</label>
            <input type="email" name="email" class="form-control" id="email" placeholder="Votre email@email.fr" required /><span id="oublisEmail"></span><br />
          </div>
          <div class="form-group col-md-5">
            <label for="address">Adresse :</label>
            <input type="text" name="address" class="form-control" id="address" placeholder="6, Rue du Moulin" required /><span id="oublisAdress"></span><br />
          </div>
        </div>
        <div class="form-group col-md-8">
          <label for="city">Ville :</label>
          <input type="text" name="city" class="form-control" id="city" placeholder="Votre ville..." required /><span id="oublisVille"></span><br />
        </div>

      <button class="panier" id="valider" href="confirmation.html"><span class="fa fa-send">Valider la commande</span>
      
      `
  }
  
  addProductsInResume(){
    let productListHtml ="";
    // console.log(this.products);
    for (const [key, value] of Object.entries(this.products)) {
      productListHtml+= this.templateProductLine(value);
    }
    return productListHtml;
  }

  templateProductLine(data){
    // console.log(data)
    return `
      <div id="panier">
          <article id="articlePanier">
              <h2>${data.name}</h2><img src="${data.imageUrl}">
                  <div id="produit">
                      <h3>Quantité: </h3>
                          <p>
                              <button onclick="orinoco.pageManager.page.changeQty('${data.id}','-')">-</button>
                              ${data.qty}
                              <button onclick="orinoco.pageManager.page.changeQty('${data.id}','+')">+</button>
                          </p>
                      <h3>Prix: </h3>
                          <p id="price">${data.price*data.qty}</p>
                  </div>
          </article>
      </div>
  `;
  }

  /**
   * regroupe les éléments dupliqués dans le panier
   *
   * @param   {Array}  products  contenu du panier
   *
   * @return  {Object}            le contenu factorisé
   */
  redefineCartContent(products){
    const factorisedProductList = {}
    for(let i=0, size=products.length; i<size; i++){
      if (factorisedProductList[products[i].id] !== undefined){
        factorisedProductList[products[i].id].qty++;
        continue;
      }
      factorisedProductList[products[i].id] = {...products[i], qty:1};
    }
    return factorisedProductList;
  }

  changeQty(productId, direction){
    if (direction === "+") this.products[productId].qty++;
    if (direction === "-") this.products[productId].qty--;
    orinoco.pageManager.domTarget.innerHTML = this.template();
  }

}
