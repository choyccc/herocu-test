import express from "express";

const app = express();

app.use(express.static("build")); // 빌드 폴더 접근 권한 설정

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html"); // root 경로를 의미하는 __dirname
});

app.listen(3000, () => {
  console.log("server is running");
});
