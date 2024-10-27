const { Sequelize } = require("sequelize");

const mysql = require("mysql2/promise");

require("dotenv").config();
require("dotenv").config({ path: __dirname + "/.env" });

async function ensureDatabaseExists(databaseName, host, username, password) {
    // Connect to MySQL server without specifying a database
    const connection = await mysql.createConnection({ host, user: username, password });
  
    // Create the database if it does not exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`);
    await connection.end();
  }
  
  async function initializeDatabase() {
    // Ensure the master and slave databases exist
    await ensureDatabaseExists(process.env.DB_NAME_MASTER, process.env.DB_HOST_MASTER, process.env.DB_USERNAME_MASTER, process.env.DB_PASSWORD_MASTER);
    await ensureDatabaseExists(process.env.DB_NAME_SLAVE, process.env.DB_HOST_SLAVE, process.env.DB_USERNAME_SLAVE, process.env.DB_PASSWORD_SLAVE);
  }

const db = new Sequelize({
    dialect: "mysql",
    logging: false,
    username : process.env.DB_USERNAME_MASTER,
    password :  process.env.DB_PASSWORD_MASTER,
    database : process.env.DB_NAME_MASTER, 
    host : process.env.DB_HOST_MASTER,
    port : process.env.DB_PORT,
    replication : {
    //   read : 
    //     {
    //       host :  process.env.DB_HOST_MASTER, username : process.env.DB_USERNAME_MASTER, password: process.env.DB_PASSWORD_MASTER, database : process.env.DB_NAME_MASTER,  port : process.env.DB_PORT,
    //     }
    //   ,
    //   write : 
    //     {
    //       host: process.env.DB_HOST_SLAVE, username : process.env.DB_USERNAME_SLAVE, password: process.env.DB_PASSWORD_SLAVE, database : process.env.DB_NAME_SLAVE, port : process.env.DB_PORT,
    //     }
    },
    pool: {
      max: 100,
      min: 10,
      acquire: 5000,
      idle: 60000,
    },
})

module.exports = {
    initializeDatabase,
    db
}