"use strict";

const LetterStorage = require("./LetterStorage");

class Letter {
    constructor(body) {
        this.body = body;
    }
    
    async receiveBox() {
        const client = this.body;
        try {
            console.log(client);
            const response = await LetterStorage.readReceiveBox(client.id);
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }

    async sendBox() {
        const client = this.body;
        try {
            console.log(client);
            const response = await LetterStorage.readSendBox(client.id);
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }

    async sendLetter() {
        const client = this.body;
        try {
            console.log(client);
            const response = await LetterStorage.createLetter(client);
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = Letter;