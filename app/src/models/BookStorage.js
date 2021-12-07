"use strict";

const db = require("../config/db");

class BookStorage {
    static async readBook(book_id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT book_id, bookname, bookprice, author, bookcompany, image FROM book WHERE book_id =?;";
            db.query(query, book_id, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async readBookList() {
        return new Promise((resolve, reject) => {
            const query = "SELECT book_id, bookname, bookprice, author, bookcompany, image FROM book;";
            db.query(query, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }
}

module.exports = BookStorage;