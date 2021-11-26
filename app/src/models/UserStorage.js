"use strict";

const db = require("../config/db");
//const bcryptjs = require("bcryptjs");

class UserStorage {
    static async getLoginInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT id, pw, name FROM users WHERE id = ?;";
            db.query(query, id, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT id, name, st_id, major FROM users WHERE id = ?;";
            db.query(query, id, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async createUser(userInfo) {
        return new Promise((resolve, reject) => {
            const query =
                "INSERT INTO users(id, pw, name) VALUES(?, ?, ?);";
            //userInfo.pw = bcryptjs.hashSync(userInfo.pw);
            db.query(query,
                [
                    userInfo.id,
                    userInfo.pw,
                    userInfo.name
                ], (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
            });
        });
    }
}

module.exports = UserStorage;
