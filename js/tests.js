//Création de la liste des produits
function products(colors, _id, name, price, imageUrl, description) {
   (this.colors = colors),
      (this._id = _id),
      (this.name = name),
      (this.price = price),
      (this.imageUrl = imageUrl),
      (this.description = description);
}

const product1 = new Products(
   ['Tan', 'Chocolate', 'Black', 'White'],
   '5be9c8541c9d440000665243',
   2900,
   'http://localhost:3000/images/teddy_1.jpg',
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

const product2 = new Products(
   ['Pale brown', 'Dark brown', 'White'],
   '5beaa8bf1c9d440000a57d94',
   'Arnold',
   3900,
   'http://localhost:3000/images/teddy_2.jpg',
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

const product3 = new Products(
   ['Brown'],
   '5beaaa8f1c9d440000a57d95',
   'Lenny and Carl',
   5900,
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   'http://localhost:3000/images/teddy_3.jpg'
);

const product4 = new Products(
   ['Brown', 'Blue', 'Pink'],
   '5beaabe91c9d440000a57d96',
   'Gustav',
   4500,
   'http://localhost:3000/images/teddy_4.jpg',
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

const product5 = new Products(
   ['Beige', 'Tan', 'Chocolate'],
   '5beaacd41c9d440000a57d97',
   'Garfunkel',
   5500,
   'http://localhost:3000/images/teddy_5.jpg',
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

let products = [];
products.push(products);
console.log(product1, product2, product3, product4, product5);

////////Template
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
               <option value="0">${this.name}</option>
            </select>
         </form>
      </div>
      <h4>Quantité</h4>
      <div class="aa-prod-quantity">
         <input
            type="number"
            min="1"
            max="10"
            value="1"
            name="product_qty"
            id="quantity"
            class="form-control"
            placeholder="Quantité"
            aria-label="Quantité"
            aria-describedby="quantity"
         />
      </div>
      <div class="aa-prod-view-bottom">
         <a href="order.html" class="aa-add-to-cart-btn">
            Ajouter au panier
         </a>
      </div>
   </div>
</div>;
