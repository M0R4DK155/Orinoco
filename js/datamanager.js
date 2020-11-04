class DataManager {
    constructor(src) {
        this.src = src;
        this.products = {};
    }

    async getDataFromServer(callback) {
        const data = await fetch(this.src);
        const products = await data.json();
        for( let i=0, size = products.length; i<size; i++){
          this.products[products[i]._id] = products[i];
        }
        callback(products);
    }

    async getDataProductFromServer(idProduct, callback){
      const data = await fetch(this.src+idProduct);
      const product = await data.json();
      this.products[product._id] = product;
      callback(product);
    }
}
