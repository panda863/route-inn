const http = require("http");
const html = request("fs").readFileSync("./route-inn.html");//HTMLファイル読み込むにはこの一文が必要

//webサーバーを作る
const server = http.createServer((req,res)=>{
    //ここにはブラウザにアクセスがきた時の処理を書く
    res.writeHead(200 , {"Content-Type" : "text/html"});
    res.write(html);
    res.end();
});