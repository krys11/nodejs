const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  static addProducts(id, productPrice) {
    fs.readFile(p, (error, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!error) {
        cart = JSON.parse(fileContent);
      }

      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updateProduct;
      if (existingProduct) {
        updateProduct = { ...existingProduct };
        updateProduct.qty = existingProduct.qty++;
        cart.products = [...cart.products];
        cart.products[existingProduct] = updateProduct;
      } else {
        updateProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updateProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;

      fs.writeFile(p, JSON.stringify(cart), (error, fileContent) => {
        console.log(error);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (error, fileContent) => {
      if (error) {
        return;
      }
      const updateCart = { ...JSON.parse(fileContent) };
      const product = updateCart.products.find((prod) => prod.id === id);
      if (!product) {
        return;
      }
      const productQty = product.qty;
      updateCart.products = updateCart.products.filter(
        (prod) => prod.id !== id
      );
      updateCart.totalPrice = updateCart.totalPrice - productPrice * productQty;
      fs.writeFile(p, JSON.stringify(updateCart), (error, fileContent) => {
        console.log(error);
      });
    });
  }

  static getCart(callback) {
    fs.readFile(p, (error, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (error) {
        callback(null);
      } else {
        callback(cart);
      }
    });
  }
};
