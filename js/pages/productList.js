class ProductList {
   constructor() {
      orinoco.dataManager.getDataFromServer(this.showProducts.bind(this)); //La méthode bind() crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte this la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.
   }

   showProducts(list) {
      const target = document.querySelector('ul.aa-product-catg');
      for (let i = 0, size = list.length; i < size; i++) {
         new Product(list[i], target, 'orinoco');
      }
   }
}
