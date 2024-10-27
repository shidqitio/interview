const express = require("express")
const app = express()

const {db, initializeDatabase} = require("./config/database")
const http =  require("http") 

const Barang = require("./model/barang-model")
const Pembeli = require("./model/pembeli-model")
const TrxPenjualan = require("./model/penjualan-model")
const Toko = require("./model/toko")

require("dotenv").config();
require("dotenv").config({ path: __dirname + "/.env" });

initializeDatabase()
.then((app) => {
  db.sync({alter : true})
   .then(() => {
     var server = http.createServer(app);
  
     server.listen(process.env.SERVER_PORT, () =>
       console.log(
         `${String.fromCodePoint(0x1f525)} server on port: ${
           process.env.SERVER_PORT
         } ${String.fromCodePoint(0x1f525)}`
       )
     );
   })
   .catch((err) => {
     console.log(
       `${String.fromCodePoint(0x1f621)} database error: ${
         err.message
       } ${String.fromCodePoint(0x1f621)}`
     );
   });
})


// db.sync({alter : true})
//    .then(() => {
//      var server = http.createServer(app);
  
//      server.listen(process.env.SERVER_PORT, () =>
//        console.log(
//          `${String.fromCodePoint(0x1f525)} server on port: ${
//            process.env.SERVER_PORT
//          } ${String.fromCodePoint(0x1f525)}`
//        )
//      );
//    })
//    .catch((err) => {
//      console.log(
//        `${String.fromCodePoint(0x1f621)} database error: ${
//          err.message
//        } ${String.fromCodePoint(0x1f621)}`
//      );
//    });
