"use strict";

const { response } = require("express");
const TradeStorage = require("./TradeStorage");
const UserStorage = require("./UserStorage");

class Trade {
    constructor(body) {
        this.body = body;
    }

    async getTrade() {
        const client = this.body;
        try {
            const response = await TradeStorage.getPostList(client);
            return response;
        } catch (err) {
            return { success: false, msg: "거래게시판 조회 실패" };
        }
    }

    
    async readPost() {
        const client = this.body;
        try {
            const response = await TradeStorage.getPost(client);
            return response;
        } catch (err) {
            return { success: false, msg: "거래게시글 조회 실패" };
        }
    }

    async writePost() {
        const client = this.body;
        try {
            console.log(client);
            const response = await TradeStorage.insertPost(client);
            return response;
        } catch (err) {
            return { success : false, msg: "거래게시글 작성 실패" };
        }
    }
}

module.exports = Trade;
