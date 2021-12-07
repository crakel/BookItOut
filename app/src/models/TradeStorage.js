"use strict";

const db = require("../config/db");

class TradeStorage {
    static async getPostList(tradeInfo) {
        return new Promise((resolve, reject) => {
            const query =
                "SELECT post_num, book_id, user_id, title, content, click FROM ?? ORDER BY post_num DESC;";
            db.query(query, tradeInfo.trade, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async getPost(postInfo) {
        return new Promise((resolve, reject) => {
            const query1 = "UPDATE ?? SET click=click+1 WHERE post_num=?;";
            const query2 = "SELECT post_num, title, user_id, content, book_id, click FROM ?? WHERE post_num=?;";
            db.query(query1, [postInfo.trade, postInfo.post_num], (err, data) => {
                if (err) reject(`${err}`);
            });
            
            db.query(query2, [postInfo.trade, postInfo.post_num], (err, data) => {
                if (err) reject(`${err}`);
                console.log(data[0]);
                resolve(data[0]);
            });
        });
    }
    
    static async insertPost(postInfo) {
        return new Promise((resolve, reject) => {
            const query1 =
                "INSERT INTO ?? (title, book_id, user_id, content) VALUES (?, ?, ?, ?);";
            db.query(query1, [postInfo.trade, postInfo.title, postInfo.book_id, postInfo.user_id, postInfo.content], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }
}

module.exports = TradeStorage;