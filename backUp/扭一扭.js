/**
*@author zsxwz
*@title 扭一扭
*@rule 扭一扭
*/
const s = sender
function main() {
    var url = "http://api.qemao.com/api/douyin/"
    var { headers } = request({
        url: url,
        dataType: "location",
        allowredirects: false,
        method: "get",
    })
    var url1 = url + headers.Location
    s.reply(video(url1))
}

main()