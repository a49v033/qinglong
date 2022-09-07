/**
* @author cdle
* @title 脚本教程
* @platform qq wx tg pgm web cron
* @rule 你好 ?
* @rule 你好
* @priority 100
* @cron 0 20 8 8 *
* @admin false
*/


//sender
const s = sender
var n = s.param(1)
if (n === ''){
    var n = "测试"
}
console.log(`第1个参数：${n}`)

