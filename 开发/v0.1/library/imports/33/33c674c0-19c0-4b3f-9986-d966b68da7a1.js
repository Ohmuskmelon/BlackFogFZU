"use strict";
cc._RF.push(module, '33c67TAGcBLP5mG2Wa2jaeh', 'selfdialogInfo');
// scripts/selfdialog/selfdialogInfo.js

"use strict";

// 自言自语内容
var chp1_303_dialogs = {
  d1: "舍友怎么都不在了，不会背着我在外面偷偷卷吧。",
  d2: "今天外面怎么一个人都没有。",
  d3: "怎么感觉宿舍楼和昨天不太一样，不会我一觉起来睡蒙了吧。"
};
var chp1_zoulang_dialogs = {
  d1: "奇怪，这楼梯间怎么被上了把锁？还是输入密码的。我怎么以前都没意识到"
};
var chp1_302_dialogs = {
  d1: "怎么墙上有个数字？实在是奇怪，也许我应该查看一下",
  d2: "这间宿舍还是挺温馨的，只可惜现在只有我一个人",
  d3: "怎么好像有手机的声音，好像是左边那张床的柜子发出来的，话说……我的手机也不见了，现在拥有一部手机对我的帮助的确很大"
};
var chp1_301_dialogs = {
  d1: "诶，门呢？怎么突然消失了？看来陷入黑雾福大果然会有各种奇异现象的发生，让我想想……学姐曾经说过，如果陷入了黑雾福大，一定要多观察周围，寻找一切可以利用的线索脱身。嗯……我这就去周围看看",
  d2: "怎么墙上有个数字？实在是奇怪，也许我应该查看一下" //d3:"果然门出现了，看来这个黑雾福大也不过如此嘛，我要继续查看其他房间的线索",

};
var chp1_203_dialogs = {
  d1: "这里的洗衣机好像是可以使用的，也许我把它发动起来事情就会有所转机？"
};
var chp1_201_dialogs = {
  d1: "这台洗衣机没办法启动，但是上面的图案却始终显示「暗亮暗暗亮」，同时我捡到一张纸条，上面写着「请不要乱动杯子的顺序」，我试了一下，居然真的完全动不了"
};
var chp1_202_dialogs = {
  d1: "这把钥匙上面有舍管房间的标签，一定是舍管房间的钥匙"
};
var chp1_1Floor_dialogs = {
  d1: "前面就是舍管的房间了，需要一把钥匙才能打开",
  d2: "可恶，这个大门被锁住了，似乎需要某种机关才能解开，也许我要去舍管的房间找找看有没有什么线索"
};
var chp1_managerRoom_dialogs = {
  d1: "看来舍管平日里还是很忙的"
};
window.selfDialog = {
  chp1_303: chp1_303_dialogs,
  chp1_三楼走廊: chp1_zoulang_dialogs,
  chp1_301: chp1_301_dialogs,
  chp1_302: chp1_302_dialogs,
  chp1_203: chp1_203_dialogs,
  chp1_201: chp1_201_dialogs,
  chp1_202: chp1_202_dialogs,
  chp1_一楼大厅: chp1_1Floor_dialogs,
  chp1_舍管房间: chp1_managerRoom_dialogs
}; // 长纸条内容

window.papers = {};

cc._RF.pop();