"use strict";

const mysql = require("mysql");

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PW,
//     database: process.env.DB_DB,
//     multipleStatements: true,
// });

const db = mysql.createConnection({
    host: '3.134.86.178',
    user: 'root',
    password: 'Ajou1234!@',
    database: 'bookitout',
    multipleStatements: true,
});

db.connect();

module.exports = db;
