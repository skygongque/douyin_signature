const douyin = require('./douyin');
const superagent = require('superagent');

async function get_signature(uid,ua) {
    try {
        var res = await superagent.get(`https://www.amemv.com/share/user/${uid}`)
            .set({
                'user-agent':ua,
                // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Mobile Safari/537.36'
            });
        var tac_pattern = new RegExp("<script>tac='(.*?)'</script>");
        
        if (tac_pattern.test(res.text)) {
            var tac_raw = RegExp.$1;
            // console.log(tac);
            var signature = douyin.get_sign(uid, tac_raw, ua)
            // console.log(signature);
            return signature;
        }
    }catch(e){
        console.log(e)
        return null;
    }

};


async function get_data(uid, signature,ua, max_cursor) {
    try {
        var url = `https://www.iesdouyin.com/web/api/v2/aweme/post/?user_id=${uid}&sec_uid=&count=21&max_cursor=${max_cursor}&aid=1128&_signature=${signature}&dytk=df4a9c279a56fe0d2bca0d3d98d36320`
        var res = await superagent.get(url)
            .set({
                'user-agent':ua
                // 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Mobile Safari/537.36',
                // 'accept': 'application/json',
                // 'accept-encoding': "gzip, br",
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
    // var uid = "58841646784"
    var uid = "102064772608"
    var ua = "Mozilla/5.0 ... not verify"
    // var ua = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Mobile Safari/537.36"
    var signature = await get_signature(uid,ua);
    console.log(signature)
    var data = await get_data(uid,signature,ua,0);
    console.log(JSON.stringify(data));
}()