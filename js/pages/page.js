var orinoco = {
  components: {},
  dataManager: new DataManager('http://localhost:3000/api/teddies/'),
};

new Cart(document.querySelector('.aa-header-bottom-area'));
startPage(window.location.search);

function startPage(req) {
  if (req.slice(1, 6) === 'order') return new Order(); //La méthode slice() renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.
  new ProductList();
}

// product
// products
// cart
//
