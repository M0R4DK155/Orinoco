class Page{
  constructor(pageSpecs){
    for (const [key, value] of Object.entries(pageSpecs)) {
      this[key] = value;
    }

  }

  changePage(productName, productId) {
    if (!this.addToHistory) return;
    orinoco.pageManager.changePage("OriKids | produit " + productName, "product" + productId, this);
  }

  /**
   * [ariane description]
   *
   * @param   {String|null}  pageEnCours  [pageEnCours description]
   *
   * @return  {String}               [return description]
   */
  ariane(pageEnCours){
    return `
    <nav>
      orinokids > <span onclick="">acceuil</span> ${pageEnCours === null ? "" : "> "+pageEnCours} 
    </nav>
    `;
  }
}