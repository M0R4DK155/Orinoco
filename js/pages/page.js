var orinoco = {
  components: {},
  dataManager: new DataManager('http://localhost:3000/api/teddies/'),
};

new Cart(document.querySelector('.aa-header-bottom-area'));
changePage(window.location.search.slice(1));

/**
 * change la page à afficher
 *
 * @param   {string}  askedPage  le contenu de la barre d'adresseaprès le point d'intérgotation ou les informations de page
 *
 * @return  {void}         appelle la page à afficher
 */
function changePage(askedPage){
  if (askedPage.slice(0, 5) === 'order')   return new Order(); //La méthode slice() renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.
  if (askedPage.slice(0, 7) === "product") return new ProductPage(askedPage);  
  if (askedPage.slice(0, 4) === "list")    return new ProductList();
  new ProductList();
}


// product
// products
// cart
//