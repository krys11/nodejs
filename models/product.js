const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "products.json");

module.exports = classPoduct = {
  addProducts: (item) => {
    fs.readFile(p, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(item);
      fs.writeFile(p, JSON.stringify(products), (err, data) => {
        console.log(err);
      });
    });
  },

  getAllProducts: (callBack) => {
    fs.readFile(p, (err, data) => {
      if (err) {
        callBack([]);
      } else {
        callBack(JSON.parse(data));
      }
    });
  },
};
