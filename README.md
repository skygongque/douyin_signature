# douyin web signature
此项目仅用于科研学习，请勿用于商业用途否则造成的后果与作者无关

# usage
## install dependencies
```
npm install
```
## run service
```
node service.js
```

## python 调用示例
使用抖音app**分享用户的主页链接**，获得`sec_uid`即可下载该用户所用视频  
比如链接：
```
https://www.iesdouyin.com/share/user/4199772083203972?with_sec_did=1&u_code=15b9142gf&sec_uid=MS4wLjABAAAACV5Em110SiusElwKlIpUd-MRSi8rBYyg0NfpPrqZmykHY8wLPQ8O4pv3wPL6A-oz&did=MS4wLjABAAAA0hyr7tsAlRz53naAmyXnRMG7BoOdR7Qpq4QaNQhQbkj818m3LI5hocFqxMINgJX2&iid=MS4wLjABAAAAWegZGjqsb5FToq_3kcQazow83KPq2lkouu-JE1QPKxgc_8-Hu0yudigPVKsqRWl_&timestamp=1618028058&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_app_name=douyin
```
`sec_uid`为MS4wLjABAAAACV5Em110SiusElwKlIpUd-MRSi8rBYyg0NfpPrqZmykHY8wLPQ8O4pv3wPL6A-oz  

[python 调用示例](./demo.py)  

## others
1. 使用`sec_uid`代替`uid`来区分用户，需要得到用户的`sec_id`以获取该用户的所有作品  
2. `uid` `useragent` `sec_uid` 和`signature`并没有绑定  
3. 这个版本校验较弱可能只是过渡版本，可能很快失效  

## 浏览器环境补充
[canvas相关环境补充](./canvas相关环境补充/readme.md)