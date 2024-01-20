const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://krysdario1996:krysdario1996@cluster0.pzea8km.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      db = client.db();
      console.log("mongo connected");
      callback();
    })
    .catch((error) => {
      console.log(error);
    });
};

const getDb = () => {
  if (db) {
    return db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
