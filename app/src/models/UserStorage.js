"use strict";

const db = require("../config/db");
//const bcryptjs = require("bcryptjs");

class UserStorage {
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

    static async readLoginInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT user_id, user_pw, name FROM user_info WHERE user_id = ?;";
            db.query(query, id, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async readUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT user_id, user_email, user_phone, user_address FROM user_info WHERE user_id = ?;";
            db.query(query, id, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }
}

module.exports = UserStorage;