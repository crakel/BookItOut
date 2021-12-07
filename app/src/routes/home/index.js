"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// 테스트용 임시 프론트
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

// 로그인, 회원가입 API
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

// 게시판 API
router.get("/list/:trade", ctrl.trade.getTrade);
router.get("/post/:trade/:post_num", ctrl.trade.readPost);
router.post("/post/:trade", ctrl.trade.writePost);

// 쪽지함 API
router.get("/sbox/:id", ctrl.letter.sendBox);
router.get("/rbox/:id", ctrl.letter.receiveBox);
router.post("/letter", ctrl.letter.sendLetter);

// 책 API
router.get("/book/:book_id", ctrl.book.getBook);
router.get("/book", ctrl.book.getBookList);

module.exports = router;