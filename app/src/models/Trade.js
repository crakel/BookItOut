"use strict";

const { response } = require("express");
const TradeStorage = require("./TradeStorage");


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
            const info = await UserStorage.getUserInfo(client.id);
            const writer = info.name; 
            client.writer = writer;
            const response = await TradeStorage.insertPost(client);
            return response;
        } catch (err) {
            return { success : false, msg: "거래게시글 작성 실패" };
        }
    }


    async editPost() {
        const client = this.body;
        try {
            const response = await TradeStorage.updatePost(client);
            return response;
        } catch (err) {
            return { success: false, msg: "거래게시글 수정 실패" };
        }
    }

    async delPost() {
        const client = this.body;
        try {
            const response = await TradeStorage.deletePost(client);
            return response;
        } catch (err) {
            return { success: false, msg: "거래게시글 삭제 실패" };
        }
    }

   
}
module.exports = Trade;