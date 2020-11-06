//Affichage dynamique du produit séléctionné
class ProductPage {
  constructor(idProduct, addToHistory=true) {
    this.addToHistory = addToHistory;
    console.log("--->", idProduct);
    const productInfo = orinoco.dataManager.products[idProduct];
    if (productInfo === undefined) {
      orinoco.dataManager.getDataProductFromServer(idProduct, this.showProduct.bind(this));
      return;
    }
    this.removeOtherProducts(idProduct);

  }
  showProduct(dataProduct){
    this.changePage(dataProduct.name, dataProduct._id);
    new Product(dataProduct, orinoco.pageManager.domTarget, "orinoco", true);
  }

  removeOtherProducts(idProduct){
    this.changePage(orinoco.dataManager.products[idProduct].name, idProduct)
    for (const [key, value] of Object.entries(orinoco.products)) {
      if (key !== "product"+idProduct) orinoco.products[key].die();
    }
  }

  changePage(productName, productId){
    if (! this.addToHistory) return;
    orinoco.pageManager.changePage("OriKids | produit "+productName, "product"+productId, this);
  }
}
