"use strict";


const BookStorage = require("./BookStorage");

class Book {
    constructor(body) {
        this.body = body;
    }
    
    async getBook() {
        const client = this.body;
        try {
            console.log(client);
            const response = await BookStorage.readBook(parseInt(client.book_id));
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }
    
    async getBookList() {
        const client = this.body;
        try {
            const response = await BookStorage.readBookList();
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = Book;