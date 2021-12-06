"use strict";


class BookStorage {
    static async readBook(book_id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT book_id, bookname, author, bookcompany, image FROM book;";
            db.query(query, id, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }
}

module.exports = BookStorage;