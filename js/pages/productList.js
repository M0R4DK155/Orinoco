class ProductList {
  constructor() {
    orinoco.dataManager.getDataFromServer(this.showProducts.bind(this));
  }

  showProducts(list) {
    const target = document.querySelector('ul.aa-product-catg');
    for (let i = 0, size = list.length; i < size; i++) {
      new Product(list[i], target, 'orinoco');
      console.log(list);
    }
  }
}
