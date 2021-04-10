const douyin = require('./douyin');
const express = require('express');
const app = express();

app.get('/sign',function(req,res){
    res.send(douyin.get_sign('123',"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"));
}) 
 
 
app.listen(3000,()=>{
    console.log('开启服务,http://localhost:3000/sign');
})