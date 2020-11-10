///Composant réutilisable sur des projets futurs
//Affichage du produit
class Product {
   constructor(props, domTarget, container, showDetails = false) {
      for (const [key, value] of Object.entries(props)) {
         this[key] = value;
      }
      this.showDetails = showDetails;
      this.DOM = document.createElement('li'); //Représentation de notre élément dans le DOM
      domTarget.appendChild(this.DOM); //S'ajoute un enfant 'li'
      window[container].products['product' + this._id] = this; //Récupération du product à partir de son id
      this.container = container;
      this.render();
   }

   //Récupération du modèle HTML
   resumeTemplate() {
      return `
      <figure>
        <a class="aa-product-img" href="#"><img src="${this.imageUrl}" alt="teddy_img"></a>
        <a class="aa-add-card-btn" onclick="${this.container}.products.product${this._id}.changeView()" ><span class="fa fa-search"></span>Voir produit</a>
        <figcaption>
           <h4 class="aa-product-title"><a href="#">${this.name}</a></h4>
           <span class="aa-product-price">${this.price / 100}€</span>
        </figcaption>
      </figure>
      <div class="aa-product-hvr-content">

         <!-- <a href="#" data-toggle2="tooltip" data-placement="top" title="Zoom" data-toggle="modal" onclick="${this.container}.products.product${this._id}.changeView()"><span class="fa fa-search"></span></a> -->

      </div>
        `;
   }

   render() {
      this.DOM.innerHTML = this.showDetails
         ? this.detailedTemplate()
         : this.resumeTemplate();
   }

   changeView() {
      this.showDetails = !this.showDetails;
      if (this.showDetails) new ProductPage(this._id);
      this.render();
   }

   //Vue détaillée du produit "cliqué"
   detailedTemplate() {
      return `
      <figure>
        <img src="${this.imageUrl}" alt="${this.name}">
        <figcaption>
           <h4 class="aa-product-title">${this.name}</h4>
           <span class="aa-product-price">${this.price / 100}€</span>
        </figcaption>
      </figure>
      <div class="aa-product-hvr-content">

      <select id="choix">
         <option id="colors">${this.colors}</option>
      </select>
      <button onclick="orinoco.products.product${this._id}.addToCart()">
         Ajouter au panier
      </button>
      </div>
        `;
   }

   //Propriété qui permet la "disparition" des produits "non cliqués"
   die() {
      this.DOM.parentNode.removeChild(this.DOM); //On récupère le parent de notre élément 'li' du DOM, le parent va enlever l'enfant (this.DOM), permet de "s'auto-enlever" en quelque sorte.
      delete window[this.container].products[['product' + this._id]];
   }

   addToCart() {
      orinoco.panier.add({
         id: this._id,
         imageUrl: this.imageUrl,
         name: this.name,
         colors: this.colors, //ajout pour gérer choix couleur (voir avec Lionel)
         price: this.price / 100,
      })
   }
}

/*

                                    <li>
                                       <figure>
                                          <a class="aa-product-img" href="#"><img src="http://localhost:3000/images/teddy_3.jpg" alt="teddy_3 img"></a>
                                          <a class="aa-add-card-btn" href="#"><span class="fa fa-search"></span>Voir le produit</a>
                                          <figcaption>
                                             <h4 class="aa-product-title"><a href="#">Lenny and Carl</a></h4>
                                          </figcaption>
                                       </figure>
                                    </li>
                                    */
