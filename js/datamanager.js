class DataManager{
  constructor(src){
    this.src = src;
    this.products = [];
  }

  async getDataFromServer(callback){
    const data = await fetch(this.src);
    this.products = await data.json();
    callback(this.products);
  }

}