class Product {
  constructor(props, domTarget, container) {
    for (const [key, value] of Object.entries(props)) {
      this[key] = value;
    }
    this.showDetails = false;
    this.DOM = document.createElement('li');
    domTarget.appendChild(this.DOM);
    window[container].components['product' + this._id] = this;
    this.container = container;
    this.render();
  }

  resumeTemplate() {
    return `
    <figure>
        <a class="aa-product-img" href="#"><img src="${
          this.imageUrl
        }" alt="teddy_img"></a>
        <a class="aa-add-card-btn" onclick="${this.container}.components.product${this._id}.changeView()" ><span class="fa fa-search"></span>Voir produit</a>
        <figcaption>
           <h4 class="aa-product-title"><a href="#">${this.name}</a></h4>
           <span class="aa-product-price">${this.price / 100}€</span>
        </figcaption>
    </figure>
    <div class="aa-product-hvr-content">



        <!-- <a href="#" data-toggle2="tooltip" data-placement="top" title="Zoom" data-toggle="modal" onclick="${
          this.container
        }.components.product${
      this._id
    }.changeView()"><span class="fa fa-search"></span></a> -->


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
    if (this.showDetails) changePage("product"+this._id);
    this.render();
  }

  detailedTemplate() {
    return `
        <figure>
        <img src="${this.imageUrl}" alt="${this.name}">
        <figcaption>
          <h4 class="aa-product-title">${this.name}</h4>
          <span class="aa-product-price">${this.price / 100}€</span>
        </figcaption>
    </figure>
    <div class="_aa-product-hvr-content">
    
    <select>
      <option>a faire</option>
    </select>
    <button>ajouter au panier</button>

    </div>       
    `;
  }

  die() {
    this.DOM.parentNode.removeChild(this.DOM);
    delete window[this.container].components[['product' + this._id]];
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
