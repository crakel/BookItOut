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
// router.post("/board", ctrl.board.post);
// router.get("/board", ctrl.board.post);
// router.delete("/board", ctrl.board.post);
// router.update("/board", ctrl.board.post);

module.exports = router;