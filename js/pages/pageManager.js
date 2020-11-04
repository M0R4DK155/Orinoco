class PageManager {
  constructor(domTarget) {
    this.domTarget = domTarget;
    window.onpopstate = (event)=> {
      alert(
        "adresse: " +
          document.location.search +
          ", état: " +
          JSON.stringify(event.state)
      );
      this.definePage({changeHistory : false})
    };
    this.definePage({changeHistory : false})
  }

  changePage(title, url, newPage) {
    document.title = title;
    history.pushState({}, title, "?" + url);
    orinoco.page = newPage;
  }

  /**
   * change la page à afficher
   *
   * @return  {void}         appelle la page à afficher
   */
  definePage(todo) {
    if(todo.changeHistory === undefined) todo.changeHistory = true;
    if (todo.page === undefined) {
      todo.page = window.location.search.slice(1);//La méthode slice() permet de "trancher un morceau particulier d'une chaine de caractère, dans notre cas le ?. Méthode plus ou moins similaire à .substr.
    }
    if (todo.page.slice(0, 5) === "order")   return new Order(todo.changeHistory); 
    if (todo.page.slice(0, 7) === "product") return new ProductPage(todo.page.slice(7), todo.changeHistory);
    if (todo.page.slice(0, 4) === "list")    return new ProductList(todo.changeHistory);
    new ProductList(todo.changeHistory);
  }
}
