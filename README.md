# douyin web 端 signature

## 环境需求
### node puppeteer express superagent
自行npm 或 cnpm 安装


## 在本地搭建服务生成指定uid的signature
### 搭建完成后

可请求接口

`
http://localhost:5000/user?uid=102064772608
`

返回内容示例

![返回内容示例](https://github.com/skygongque/douyin_signature/blob/master/example/success.png)


## 更进一步传入uid直接返回主页json数据
请求接口

`
http://localhost:5000/data?uid=102064772608
`

返回内容示例

![返回内容示例](https://github.com/skygongque/douyin_signature/blob/master/example/data_example.png)

## 文件夹介绍
服务搭建的代码在node_douyin_service文件夹
python调用服务示例在douyinpy文件夹

## 总结
思路几乎照抄https://github.com/coder-fly/douyin-signature
只不过改成了puppeteer+express搭建服务（原来是pyppeteer）

尝试过在node环境中计算signature奈何那段签名算法混淆太牛逼无法移除检测环境的代码，最后用了puppeteer驱动chromium，并用express做成服务。
核心逻辑是
1.得到uid请求源码达到tac
2.puppeteer驱动chromium在console中执行签名算法
3.返回signature


