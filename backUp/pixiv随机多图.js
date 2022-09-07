/**
*@author zsxwz
*@title pixiv随机多图
*@rule 色图 ?
*@rule 来点色图 ?
*@rule 色图?
*@rule 来点色图?
*@rule 色图
*@rule 来点色图
*/

const s = sender

var n = s.param(1)
if (n === '') {
    var n = 1
}
if (n > 20) {
    var n = 1;
    s.reply(
        "请节制，1张就够了"
    )
}

function main() {
    var { body } = request({
        url: "https://api.lolicon.app/setu/v2",
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        "body": {
            "r18": 1,
            "num": n
        }
    });

    var data = JSON.parse(body)
    for (var i = 0; i < n; i++) {
        s.reply(
            image(data.data[i].urls.original)
        )
    }
}

main()
