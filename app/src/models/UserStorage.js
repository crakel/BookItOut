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
                "INSERT INTO user_info(user_id, user_pw, user_email, user_phone, user_address) VALUES(?, ?, ?, ?, ?);";
            //userInfo.pw = bcryptjs.hashSync(userInfo.pw);
            db.query(query,
                [
                    userInfo.user_id,
                    userInfo.user_pw,
                    userInfo.user_email,
                    userInfo.user_phone,
                    userInfo.user_address
                ], (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
            });
        });
    }
}

module.exports = UserStorage;