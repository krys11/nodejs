const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const product = [];

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, data) => {
      let productData = [];
      if (!err) {
        productData = JSON.parse(data);
      }
      productData.push(this);
      fs.writeFile(p, JSON.stringify(productData), (err) =>
        console.log(err, `Error in saving`)
      );
      console.log(productData);
    });
  }

  static fetchAllProduct(callBack) {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (error, data) => {
      if (error) return callBack([]);
      return callBack(JSON.parse(data));
    });
  }

  static findById(id, callBack) {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (error, data) => {
      if (error) return callBack([]);
      const product = JSON.parse(data).find((p) => p.id === id);
      return callBack(product);
    });
  }
};
