/**
 * Copyright (c) 2014-2018 NighthawkStuio, All rights reserved.
 * @fileoverview start lcoal server
 * @author Michael Zhang | michaelji520@gmail.com
 * @version 1.0 | 2018-02-06 | initial version
 */

// set web port
var PORT = 9527;

var url=require('url');
var mine=require('./mime').types;//
var path=require('path');

var http = require('http');
var https = require('https');
// 引入文件读取模块
var fs = require('fs');

const httpsOptions = {
  key: fs.readFileSync('./certification/1829683_www.zhangji.xyz.key'),
  cert: fs.readFileSync('./certification/1829683_www.zhangji.xyz.pem')
};
//需要访问的文件的存放目录
var documentRoot = 'app';

var server = https.createServer(httpsOptions, (req, res) => {
    //客户端输入的url，例如如果输入localhost:8888/index.html
    //那么这里的url == /index.html
    var url = req.url;
    if (url == '' || url == '/') {
      url += "/index.html";
    }

    var file = documentRoot + url;
    console.log(url);

    fs.readFile(file, function(err, data){
        if (err) {
            res.writeHeader(404,{
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        } else {
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end();
        }
    });
});
server.listen(PORT, '0.0.0.0');
console.log('Server started at port:', PORT);
