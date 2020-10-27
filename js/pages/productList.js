class ProductList {
  constructor() {
    orinoco.dataManager.getDataFromServer(this.showProducts.bind(this));
  }

  showProducts(list) {
    const target = document.querySelector('ul.aa-product-catg');
    for (let i = 0, size = list.length; i < size; i++) {      
      if (orinoco.components["product"+list[i]._id] !== undefined) {
        orinoco.components["product"+list[i]._id]. changeView();
        continue;
      }
      new Product(list[i], target, 'orinoco');
      console.log(list);
    }
  }
}
