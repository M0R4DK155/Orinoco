////////Template affichage du produit
<div class="row">
   <div class="col-md-6 col-sm-6 col-xs-12">
      <div class="aa-product-view-content">
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
         </div>
      </div>
   </div>
</div >;

////////// FORMULAIRE
////////// Ecouter la modification de l'email
