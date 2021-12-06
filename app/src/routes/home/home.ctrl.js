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
}

// object key 하나만 입력 -> 키와 같은 value로 넣어줌 (ES6)
module.exports = {
    output,
    process,
    letter,
};
