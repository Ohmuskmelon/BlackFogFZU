"use strict";
cc._RF.push(module, '7ae5eWWmX1NSKqd4amigdRl', 'bagInfo');
// scripts/info/bagInfo.js

"use strict";

window.TOOLS = [{
  name: '卷轴',
  // 道具名称，对应resources/tools中的图片名字
  intro: '这是一个卷轴',
  // 道具介绍，当玩家在背包中点击道具后，显示介绍
  picUrl: "tools/卷轴",
  // 动态加载路径
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '心经',
  intro: '欲练此功，必先自宫',
  picUrl: "tools/心经",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '火腿',
  intro: '来自金华',
  picUrl: 'tools/火腿',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '煎饺',
  intro: '挺好吃的',
  picUrl: 'tools/煎饺',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '烈酒',
  intro: '武松当年喝这个的话，可能过不了岗',
  picUrl: 'tools/烈酒',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '金钥匙',
  intro: '金色的要钥匙',
  picUrl: 'tools/金钥匙',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '银钥匙',
  intro: '银色的钥匙',
  picUrl: 'tools/银钥匙',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '黄石',
  intro: '来自黄石公园的石头叫做黄石',
  picUrl: "tools/黄石",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}];
window.toolMap = {
  "卷轴": 0,
  "心经": 1,
  "火腿": 2,
  "煎饺": 3,
  "烈酒": 4,
  "金钥匙": 5,
  "银钥匙": 6,
  "黄石": 7
};
window.Bag = [];
window.InUse = '';
window.ToolUsed = false; // window.BagBackground = null;

cc._RF.pop();