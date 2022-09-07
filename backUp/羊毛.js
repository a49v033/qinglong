/**
*@title 羊毛
*@rule 羊毛
*@rule 线报
*/

function main() {
    const s = sender
    var { body } = request({
        url: "http://xiaobai.klizi.cn/API/other/xb.php",
        dataType: "json",
        method: "get",
    });

    s.reply(
        body.data.type + "\n" + body.data.title + "\n活动时间: " + body.data.Time + "\n" + body.data.rule + "\n" + body.data.manner + "\n" + body.data.Introduction
    )
};

main()