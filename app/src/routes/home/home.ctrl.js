"use strict";
// controller file

const User = require("../../models/User");

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

// object key 하나만 입력 -> 키와 같은 value로 넣어줌 (ES6)
module.exports = {
    output,
    process,
};
