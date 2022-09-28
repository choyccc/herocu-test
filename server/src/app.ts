import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("build")); // 빌드 폴더 접근 권한 설정

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html"); // root 경로를 의미하는 __dirname
});

app.listen(PORT, () => {
  console.log("server is running");
});
