"use strict";
// controller file

const User = require("../../models/User");
const Letter = require("../../models/Letter");
const Trade = require("../../models/Trade");

const output = {
    home: (req, res) => {
        res.render("./home/index");
    },

    login: (req, res) => {
        res.render("./home/login");
    },

    register: (req, res) => {
        res.render("./home/register");
    },
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

    info: async (req, res) => {
        req.body.id = req.params.id;
        const user = new User(req.body);
        const response = await user.info();
        return res.json(response);
    },
};

const letter = {
    receiveBox: async (req, res) => {
        req.body.id = req.params.id;
        const letter = new Letter(req.body);
        const response = await letter.receiveBox();
        return res.json(response);
    },

    sendBox: async (req, res) => {
        req.body.id = req.params.id;
        const letter = new Letter(req.body);
        const response = await letter.sendBox();
        return res.json(response);
    },

    sendLetter: async (req, res) => {
        const letter = new Letter(req.body);
        const response = await letter.sendLetter();
        return res.json(response);
    },
};

const trade = {
    getTrade: async (req, res) => {
        req.body.post_num = req.params.post_num;
        req.body.trade = req.params.trade;
        console.log(req.body);
        const trade = new Trade(req.body);
        const response = await trade.getTrade();
        return res.json(response);
    },
    
    readPost: async (req, res) => {
        req.body.trade = req.params.trade;
        req.body.post_num = req.params.post_num;
        const trade = new Trade(req.body);
        const response = await trade.readPost();
        return res.json(response);
    },
    
     writePost: async (req, res) => {
        req.body.trade = req.params.trade;
         //if (req.file) {
           // req.body.img = '/upload/board/' + req.file.filename;
        //}
        const trade = new Trade(req.body);
        const response = await trade.writePost();
        return res.json(response);
    },
};

// object key 하나만 입력 -> 키와 같은 value로 넣어줌 (ES6)
module.exports = {
    output,
    process,
    letter,
    trade,
};
