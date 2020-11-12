//Affichage dynamique du produit séléctionné
class ProductPage extends Page{
  constructor(pageSpecs) {
    super(pageSpecs);
    const productInfo = orinoco.dataManager.products[this.idProduct];
    if (productInfo === undefined) {
      orinoco.dataManager.getDataProductFromServer(this.idProduct, this.showProduct.bind(this));
      return;
    }

  }
  showProduct(dataProduct) {
    this.changePage(dataProduct.name, dataProduct._id);
    this.domTarget.innerHTML = this.template(dataProduct);
  }

  template(data){
    return `
      ${this.ariane(data.name)}
      <article>
        <h1>${data.name}</h1>
        <img src="${data.imageUrl}" alt="" srcset="">
        <p>${data.description}</p>
        <select>
          ${this.colors(data.colors)}
        </select>
        <h2>prix €</h2>
      </article>
    `
  }

  colors(list){
    let content = "";
    for(let i=list.length-1; i > 0; i--){
      content += `<option value="${list[i]}">${list[i]}</option>`;
    }
    return content;
  }


}
