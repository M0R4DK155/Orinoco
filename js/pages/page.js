var orinoco = {
  dataManager : new DataManager("http://localhost:3000/api/teddies/")
};

new Cart(document.querySelector(".aa-header-bottom-area"));
startPage(window.location.search);


function startPage(req){
  if (req.slice(1,6) === "order") return new Order();
  new ProductList();
}
// product
// products
// cart
// 