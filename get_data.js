const douyin = require('./douyin');
const superagent = require('superagent');


async function get_data(sec_uid, signature,ua, max_cursor) {
    try {
        // https://www.iesdouyin.com/web/api/v2/aweme/post/?sec_uid=MS4wLjABAAAAqkmT10848xR-jRFw3uWmciryPwSXzWKKZR14hKoqVTU&count=21&max_cursor=0&aid=1128&_signature=VPDj2gAANJ1dvJnPy3yUrVTw48&dytk=
        // var url = `https://www.iesdouyin.com/web/api/v2/aweme/post/?user_id=${uid}&sec_uid=&count=21&max_cursor=${max_cursor}&aid=1128&_signature=${signature}&dytk=df4a9c279a56fe0d2bca0d3d98d36320`
        var url = `https://www.iesdouyin.com/web/api/v2/aweme/post/?sec_uid=${sec_uid}&count=21&max_cursor=${max_cursor}&aid=1128&_signature=${signature}&dytk=`
        var res = await superagent.get(url)
            .set({
                'user-agent':ua
            })
            .timeout({
                response: 5000,  // Wait 5 seconds for the server to start sending,
                deadline: 10000, // but allow 10 seconds for the file to finish loading.
            })
            .retry(2);
        return res.body;
    } catch (e) {
        console.log(e)
        return null;
    }
};

!async function main() {
    // 使用sec_uid代替uid来区分用户
    var sec_uid = "MS4wLjABAAAAshzXgVS8HqF8PomFlCATZjkjC48Az0d8tk28RXRgrbA"
    var ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    // var uid = "102064772608" 
    // uid useragent sec_uid 和signature并没有绑定
    var signature = douyin.get_sign('1234567',ua)
    console.log(signature)
    var data = await get_data(sec_uid,signature,ua,0);
    console.log(JSON.stringify(data));
}()