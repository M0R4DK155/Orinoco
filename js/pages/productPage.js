class ProductPage {
  constructor(idProduct) {
    console.log("--->",idProduct);
    for (const [key, value] of Object.entries(orinoco.components)) {
      if (key !== idProduct) orinoco.components[key].die();
      console.log(`${key}: ${value}`);
    }
  }
}
