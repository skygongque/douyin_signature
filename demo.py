import requests
from tqdm import tqdm
import time
import re


""" 
需要先启动server.js服务
使得http://localhost:3000/sign可以生成signature
"""


def get_data(sec_uid, signature, max_cursor):
    """get json data

    Args:
        sec_uid (str): 用户标识
        signature (str): 签名
        max_cursor (int): 用于翻页

    Returns:
        [dict]: [json data]
    """
    # url = f"https://www.iesdouyin.com/web/api/v2/aweme/post/?user_id={uid}&sec_uid=&count=21&max_cursor=0&aid=1128&_signature={signature}&dytk=df4a9c279a56fe0d2bca0d3d98d36320"
    url = f'https://www.iesdouyin.com/web/api/v2/aweme/post/?sec_uid={sec_uid}&count=21&max_cursor={max_cursor}&aid=1128&_signature={signature}&dytk='
    print(url)
    headers = {
        'accept': 'application/json',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
    }
    response = requests.request("GET", url, headers=headers)
    return response.json()


def downloadFILE(url, name):
    headers = {
        'authority': 'api.amemv.com',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7'
    }
    resp = requests.get(url=url, stream=True, headers=headers, timeout=10000)
    content_size = int(int(resp.headers['Content-Length'])/1024)
    with open(name, "wb") as f:
        print("Pkg total size is:", content_size, 'k,start...')
        for data in tqdm(iterable=resp.iter_content(1024), total=content_size, unit='k', desc=name[:5]):
            f.write(data)
        print(name[:5], "download finished!")


def get_one_page(sec_uid, max_cursor):
    page_data = []
    signature = requests.get('http://localhost:3000/sign').text
    data_json = get_data(sec_uid, signature, max_cursor)
    if data_json and 'aweme_list' in data_json.keys():
        aweme_list = data_json['aweme_list']
        for item in aweme_list:
            src = item['video']['play_addr']['url_list'][-1]
            desc = item['desc']
            page_data.append({
                'src': src,
                'desc': desc
            })
    if data_json['has_more']:
        return page_data, data_json['max_cursor']
    else:
        return page_data, None


def main(sec_uid):
    """
    Args:
        sec_uid (str): 用户的标识，用于区分用户
    """
    max_cursor = 0
    all_data = []
    while True:
        page_data, max_cursor = get_one_page(sec_uid, max_cursor)
        all_data += page_data
        print(max_cursor)
        if not max_cursor:
            break
    for item in all_data:
        try:
            file_name = re.sub('[\/:*?"<>|]', '-', item['desc'])
            if file_name == None or file_name == "":
                file_name = str(int(time.time()*1000))
            downloadFILE(item['src'], file_name+'.mp4')
        except Exception as e:
            with open('error.log','a',encoding='utf-8') as f:
                f.write('error at'+ item['src']+ str(e)+'\n')
                f.close()

if __name__ == "__main__":
    # sec_uid=MS4wLjABAAAAhELKHHFsEbZLtSChS8qdlUcXkwEMHrc7Y2rygE8MJTw
    # main("MS4wLjABAAAAhELKHHFsEbZLtSChS8qdlUcXkwEMHrc7Y2rygE8MJTw")
    main('MS4wLjABAAAA8cCaZ5AGaJ9dtpdnEzVrWkk_ir4rez3M-cZT5EE3Doc')
    # main("MS4wLjABAAAAshzXgVS8HqF8PomFlCATZjkjC48Az0d8tk28RXRgrbA")
