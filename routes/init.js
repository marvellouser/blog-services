const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const staticRoot = path.resolve(__dirname, "../public");
const port = 2310;
const app = express();

// 访问非接口路由返回index.html
app.use(history());

app.use(express.static(staticRoot));

app.listen(port, () => {
    console.log(`server listen on ${port}`);
});
