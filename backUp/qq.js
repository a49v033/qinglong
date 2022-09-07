/**
*@author zsxwz
*@title qq
*@rule qq ?
*@rule qq?
*@rule QQ?
*@rule QQ ?
*/

const s = sender
var qq = s.param(1)

function phone() {
    var { body } = request({
        url: "https://zy.xywlapi.cc/qqapi?qq=" + qq,
        "dataType": "json"
    })
    var data1 = body
    s.reply(
        "手机号查询状态：" + data1.message + "\n手机：" + data1.phone + "\n手机号归属地：" + data1.phonediqu
    )
}


function lol() {
    var { body } = request({
        url: "https://zy.xywlapi.cc/qqlol?qq=" + qq,
        "dataType": "json"
    })
    var data2 = body
    s.reply(
        "LOL查询状态：" + data2.message + "\nlol名称：" + data2.name + "\nlol大区：" + data2.daqu
    )
}

function main() {
    phone()
    lol()
}

main()