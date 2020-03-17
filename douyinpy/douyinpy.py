import requests
from tqdm import tqdm
import time
import re

def get_data(uid, signature):
    url = f"https://www.iesdouyin.com/web/api/v2/aweme/post/?user_id={uid}&sec_uid=&count=21&max_cursor=0&aid=1128&_signature={signature}&dytk=df4a9c279a56fe0d2bca0d3d98d36320"
    headers = {
        'accept': 'application/json',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
    }
    response = requests.request("GET", url, headers=headers)
    return response.json()


def get_signature(uid):
    response = requests.get(
        'http://localhost:5000/user?uid={}'.format(uid)).json()
    if response['code'] == 0:
        return response['signature']


def downloadFILE(url, name):
    headers = {
        'authority': 'api.amemv.com',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7'
    }
    resp = requests.get(url=url, stream=True, headers=headers,timeout=10000)
    content_size = int(int(resp.headers['Content-Length'])/1024)
    with open(name, "wb") as f:
            print("Pkg total size is:", content_size, 'k,start...')
            for data in tqdm(iterable=resp.iter_content(1024), total=content_size, unit='k', desc=name):
                f.write(data)
            print(name, "download finished!")



def get_src(url):
    global retry
    if retry > 5:
        print('fail to get src in location')
        return None
    headers = {
        'authority': 'api.amemv.com',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7'
    }
    response = requests.get(url,headers=headers,allow_redirects=False)
    if "location" in response.headers:
        # print(str(response.headers))
        location = re.search("location': '(.*?)',",str(response.headers),re.S)
        return location.group(1)
    else:
        retry+=1
        print('retry:',retry)
        time.sleep(5)
        get_src(url)

retry = 0

def main(uid):
    global retry
    signature = get_signature(uid)
    if signature:
        data = get_data(uid, signature)
        if 'aweme_list' in data.keys():
            aweme_list = data['aweme_list']
            for item in aweme_list:
                retry = 0
                src = item['video']['play_addr']['url_list'][-1]
                desc = item['desc']
                print(desc)
                real_src = get_src(src)
                if real_src:
                    downloadFILE(real_src,desc+'.mp4')
        else:
            print('no data')



if __name__ == "__main__":
    main('96956380265')
    main("102064772608")