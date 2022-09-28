"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.static("build")); // 빌드 폴더 접근 권한 설정
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/build/index.html"); // root 경로를 의미하는 __dirname
});
app.listen(3000, () => {
    console.log("server is running");
});
// 배포 단계
// cd client -> build 폴더 -> server/build 복사 -> 서버 실행
// 1. 클라이언트 폴더에서 해야하는 일
// client 폴더로 이동
// npm ci // package-lock.json 파일을 이용해서 패키지 업데이트 시켜줌
// npm run build
// 빌드 후 client/build 폴더를 server/build 파일로 이동
// 2.서버에서 폴더에서 해야하는 일
// npm ci
// tsc
// node app.js
