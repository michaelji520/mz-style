/**
 * Copyright (c) 2014-2018 NighthawkStuio, All rights reserved.
 * @fileoverview start lcoal server
 * @author Michael Zhang | michaelji520@gmail.com
 * @version 1.0 | 2018-02-06 | initial version
 */

var PORT = 9527;//

var url=require('url');
var mine=require('./mime').types;//
var path=require('path');

var http = require('http');
var fs = require('fs');//引入文件读取模块

var documentRoot = 'app';
//需要访问的文件的存放目录

var server= http.createServer(function(req,res){

    var url = req.url; 
    //客户端输入的url，例如如果输入localhost:8888/index.html
    //那么这里的url == /index.html 
    if (url == '' || url == '/') {
      url += "/index.html";
    }

    var file = documentRoot + url;
    console.log(url);
    //E:/PhpProject/html5/websocket/www/index.html 


    fs.readFile( file , function(err,data){
    /*
        一参为文件路径
        二参为回调函数
            回调函数的一参为读取错误返回的信息，返回空就没有错误
            二参为读取成功返回的文本内容
    */
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end();

        }

    });



});
server.listen(PORT);
console.log('Server started at port:', PORT);
