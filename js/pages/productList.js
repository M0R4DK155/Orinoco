class ProductList{
  constructor(){
    orinoco.dataManager.getDataFromServer(this.showProducts.bind(this));
  }

  showProducts(list){
    console.log(list)
    //boucle
  }
}