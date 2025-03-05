const express = require("express");
const cors = require("cors"); // CORSを許可するためのモジュール
const bodyParser = require("body-parser");

const app = express();

const corsOptions = {
    origin: "*", // どこからのアクセスも許可
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type"
};

// 🔹 CORSを有効化（他のポートからのリクエストを許可）
app.use(cors(corsOptions));

// 🔹 静的ファイルの提供（`public` フォルダ内のHTMLやCSSを配信）
app.use(express.static("public"));

// 🔹 リクエストのデータ解析を許可
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // JSONデータも処理できるようにする

app.get("/", (req, res) => {
    res.send("サーバーは動いてるよ！🎉");
});

app.get("/submit", (req, res) => {
    res.send("フォーム送信用のAPIエンドポイントです");
});

// 🔹 フォームの送信を処理（POSTリクエスト）
app.post("/submit", (req, res) => {
    console.log("お問い合わせデータ:", req.body);

    const name = req.body.text;  // フォームの `name="text"` に対応
    const message = req.body.note; // フォームの `name="note"` に対応

    if (name && message) {
        res.status(200).json({ success: true, message: "OK" });
    } else {
        res.status(400).json({ success: false, message: "必須項目が未入力です" });
    }
});

// 🔹 サーバー起動
app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on http://192.168.128.137:3000");
});