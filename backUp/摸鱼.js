/**
*@title 摸鱼
*@rule 摸鱼
*/

function main(){
const s = sender
var {body} = request ({
       url: "https://vps.gamehook.top/api/face/my",
       dataType:"data",
       method:"get",
});

var data = body.replace("！", "！\n").replace(",", "，").replace("?", "").replace(/:/g, "").replace("自己的", "自己的。\n").replace("上班是", "\n上班是").replace(/<br\/>/g, "\n").replace("...", "！")

s.reply(
    data
)
};

main()