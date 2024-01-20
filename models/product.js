const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");
const Cart = require("./cart");
const mongoDb = require("../util/database");

const product = [];

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const db = mongoDb.getDb();
    return db
      .collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    // const p = path.join(rootDir, "data", "products.json");
    // fs.readFile(p, (err, data) => {
    //   let productData = [];
    //   if (!err) {
    //     productData = JSON.parse(data);
    //   }

    //   if (this.id) {
    //     const existingProductIndex = productData.findIndex(
    //       (prod) => prod.id === this.id
    //     );
    //     const updateProduct = [...productData];
    //     updateProduct[existingProductIndex] = this;
    //     fs.writeFile(p, JSON.stringify(updateProduct), (err) =>
    //       console.log(err, `Error in saving`)
    //     );
    //   } else {
    //     this.id = Math.random().toString();
    //     productData.push(this);
    //     fs.writeFile(p, JSON.stringify(productData), (err) =>
    //       console.log(err, `Error in saving`)
    //     );
    //     console.log(productData);
    //   }
    // });
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

  static deleteById(id) {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (error, data) => {
      const allProducts = JSON.parse(data);
      const product = allProducts.find((prod) => prod.id === id);
      const updateProducts = allProducts.filter((prod) => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updateProducts), (err) => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }
};
