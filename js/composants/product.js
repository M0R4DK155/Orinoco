class Product {
    constructor(domTarget){

    }


    template(){
        return `
        
        <figure>
        <a class="aa-product-img" href="#"><img src="img/man/teddy_1.png" alt="teddy_1 img"></a>
        <a class="aa-add-card-btn"href="checkout.html"><span class="fa fa-shopping-cart"></span>Ajouter au panier</a>
        <figcaption>
           <h4 class="aa-product-title"><a href="#">Peluche ours marron</a></h4>
           <span class="aa-product-price">12.90€</span>
        </figcaption>
     </figure>
     <div class="aa-product-hvr-content">
        <a href="#" data-toggle2="tooltip" data-placement="top" title="Zoom" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
     </div>        
        
        `;
    }

}
