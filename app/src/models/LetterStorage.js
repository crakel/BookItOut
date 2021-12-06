"use strict";

const db = require("../config/db");

class LetterStorage {

    // 받은 쪽지함
    static async readReceiveBox(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT idx, send_user_id, comment, DATE_FORMAT(time, '%Y/%m/%d %T') as time FROM letter WHERE receive_user_id = ? ORDER BY idx DESC;";
            db.query(query, id, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    // 보낸 쪽지함
    static async readSendBox(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT idx, receive_user_id, comment, DATE_FORMAT(time, '%Y/%m/%d %T') as time FROM letter WHERE send_user_id = ? ORDER BY idx DESC;";
            db.query(query, id, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async createLetter(letter) {
        return new Promise((resolve, reject) => {
            const query =
                "INSERT INTO letter (send_user_id, receive_user_id, comment) VALUES (?, ?, ?);";
            db.query(query, [letter.send_user_id, letter.receive_user_id, letter.comment], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }

    static async deleteLetter(idx) {
        return new Promise((resolve, reject) => {
            const query =
                "DELETE FROM letter WHERE idx = ?;";
            db.query(query, idx, (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }

}
module.exports = LetterStorage;