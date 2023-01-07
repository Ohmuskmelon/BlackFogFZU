window.__require = function e(t, o, c) {
function n(s, a) {
if (!o[s]) {
if (!t[s]) {
var r = s.split("/");
r = r[r.length - 1];
if (!t[r]) {
var p = "function" == typeof __require && __require;
if (!a && p) return p(r, !0);
if (i) return i(r, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = r;
}
var l = o[s] = {
exports: {}
};
t[s][0].call(l.exports, function(e) {
return n(t[s][1][e] || e);
}, l, l.exports, e, t, o, c);
}
return o[s].exports;
}
for (var i = "function" == typeof __require && __require, s = 0; s < c.length; s++) n(c[s]);
return n;
}({
"1_java": [ function(e, t) {
"use strict";
cc._RF.push(t, "51178HXPsBKEr6kOcKrGoe8", "1_java");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
window.cup = [ 0, 1, 0, 1, 0 ];
window.listen = [ -1, -1 ];
window.touchcnt = 0;
window.lockOfCupsInCP1 = -1;
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
listen[touchcnt] = 0;
touchcnt++;
});
},
update: function() {
cc.log(window.lockOfCupsInCP1);
var e = this;
1 == cup[0] && cc.loader.loadRes("tall", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
0 == cup[0] && cc.loader.loadRes("short", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
if (2 == touchcnt) {
touchcnt = 0;
var t = listen[0], o = listen[1], c = cup[t];
cup[t] = cup[o];
cup[o] = c;
listen[0] = -1;
listen[1] = -1;
}
if (0 == cup[0] && 0 == cup[1] && 1 == cup[2] && 0 == cup[3] && 1 == cup[4] && -1 == window.lockOfCupsInCP1) {
window.lockOfCupsInCP1 = 1;
console.log("杯子顺序摆放成功");
}
}
});
cc._RF.pop();
}, {} ],
"1_js": [ function(e, t) {
"use strict";
cc._RF.push(t, "d7451V/hqdGPpFqsid4S6x9", "1_js");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
window.cup = [ 1, 0, 3, 2 ];
window.listen = [ -1, -1 ];
window.touchcnt = 0;
window.neatOfClothesInCP1 = 0;
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
listen[touchcnt] = 0;
touchcnt++;
});
},
update: function() {
var e = this;
0 == cup[0] && cc.loader.loadRes("衣服", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
1 == cup[0] && cc.loader.loadRes("袜子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
2 == cup[0] && cc.loader.loadRes("裤子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
3 == cup[0] && cc.loader.loadRes("帽子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
if (2 == touchcnt) {
touchcnt = 0;
var t = listen[0], o = listen[1], c = cup[t];
cup[t] = cup[o];
cup[o] = c;
listen[0] = -1;
listen[1] = -1;
}
if (0 == cup[0] && 1 == cup[1] && 2 == cup[2] && 3 == cup[3] && 0 == window.neatOfClothesInCP1) {
window.neatOfClothesInCP1 = !0;
console.log("衣服顺序摆放成功");
cc.director.loadScene("chp1_301");
}
}
});
cc._RF.pop();
}, {} ],
"2_java": [ function(e, t) {
"use strict";
cc._RF.push(t, "402c0aG7DdAKJL+j8CQklAs", "2_java");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
listen[touchcnt] = 1;
touchcnt++;
});
},
update: function() {
var e = this;
1 == cup[1] && cc.loader.loadRes("tall", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
0 == cup[1] && cc.loader.loadRes("short", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
}
});
cc._RF.pop();
}, {} ],
"2_js": [ function(e, t) {
"use strict";
cc._RF.push(t, "50507dCFChIIKzoD0Ej8zpe", "2_js");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
listen[touchcnt] = 1;
touchcnt++;
});
},
update: function() {
var e = this;
0 == cup[1] && cc.loader.loadRes("衣服", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
1 == cup[1] && cc.loader.loadRes("袜子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
2 == cup[1] && cc.loader.loadRes("裤子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
3 == cup[1] && cc.loader.loadRes("帽子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
}
});
cc._RF.pop();
}, {} ],
"301_phone": [ function(e, t) {
"use strict";
cc._RF.push(t, "99f09ksAipGYYkPRoekc4sK", "301_phone");
cc.Class({
extends: cc.Component,
properties: {
phoneView: cc.Node
},
onLoad: function() {
window.TOOLS[window.toolMap["手机"]].inBag || (this.node.active = !1);
},
displayPhone: function() {
this.phoneView.active = !0;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"3_java": [ function(e, t) {
"use strict";
cc._RF.push(t, "ca069yV8pxB37RadNUVO5Hv", "3_java");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
listen[touchcnt] = 2;
touchcnt++;
});
},
update: function() {
var e = this;
1 == cup[2] && cc.loader.loadRes("tall", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
0 == cup[2] && cc.loader.loadRes("short", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
}
});
cc._RF.pop();
}, {} ],
"3_js": [ function(e, t) {
"use strict";
cc._RF.push(t, "fb973Ctzt1NlbM+OsgvFv9m", "3_js");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
listen[touchcnt] = 2;
touchcnt++;
});
},
update: function() {
var e = this;
0 == cup[2] && cc.loader.loadRes("衣服", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
1 == cup[2] && cc.loader.loadRes("袜子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
2 == cup[2] && cc.loader.loadRes("裤子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
3 == cup[2] && cc.loader.loadRes("帽子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
}
});
cc._RF.pop();
}, {} ],
"4_java": [ function(e, t) {
"use strict";
cc._RF.push(t, "e03b8ROOF9La4wgX65snXcx", "4_java");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
listen[touchcnt] = 3;
touchcnt++;
});
},
update: function() {
var e = this;
1 == cup[3] && cc.loader.loadRes("tall", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
0 == cup[3] && cc.loader.loadRes("short", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
}
});
cc._RF.pop();
}, {} ],
"4_js": [ function(e, t) {
"use strict";
cc._RF.push(t, "5f963RjU8ZP3bMJyA54Q689", "4_js");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
listen[touchcnt] = 3;
touchcnt++;
});
},
update: function() {
var e = this;
0 == cup[3] && cc.loader.loadRes("衣服", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
1 == cup[3] && cc.loader.loadRes("袜子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
2 == cup[3] && cc.loader.loadRes("裤子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
3 == cup[3] && cc.loader.loadRes("帽子", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
}
});
cc._RF.pop();
}, {} ],
"5_java": [ function(e, t) {
"use strict";
cc._RF.push(t, "6082dqYZChAFYKh6VS6q+wR", "5_java");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
listen[touchcnt] = 4;
touchcnt++;
});
},
update: function() {
var e = this;
1 == cup[4] && cc.loader.loadRes("tall", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
0 == cup[4] && cc.loader.loadRes("short", cc.SpriteFrame, function(t, o) {
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
}
});
cc._RF.pop();
}, {} ],
F1ToF2: [ function(e, t) {
"use strict";
cc._RF.push(t, "e117fj9pDlB75/6QIMcfAGe", "F1ToF2");
cc.Class({
extends: cc.Component,
properties: {
door: cc.Node,
playerNode: cc.Node
},
start: function() {},
F1ToF2: function() {
var e = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
cc.Vec2.distance(t, e) < 100 && (this.canChange = !0);
},
update: function(e) {
this.F1ToF2(e);
}
});
cc._RF.pop();
}, {} ],
F1orF2: [ function(e, t) {
"use strict";
cc._RF.push(t, "cefa2JvhtNMBbmCeB7CFHoh", "F1orF2");
cc.Class({
extends: cc.Component,
properties: {},
goUpstair: function() {
cc.director.loadScene("chp1_三楼走廊");
},
goDownstair: function() {
cc.director.loadScene("chp1_一楼大厅");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
IsLockOfClosetIn302: [ function(e, t) {
"use strict";
cc._RF.push(t, "672f3bJy1tCNZV32j9CGwha", "IsLockOfClosetIn302");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
window.lockOfClosetInCP1 && (this.node.active = !1);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
ItemInfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "63271iPQqpCrqbY48OPPyHX", "ItemInfo");
window.chp1_scene1_items = {
washingMachine: {
name: "washingMachine",
used: !1,
tool: "卷轴",
usedInfo: "请使用背包中的工具进行操作",
notUsedInfo: "洗衣机已经被使用了"
},
lamp: {
name: "lamp",
used: !1,
tool: "卷轴",
usedInfo: "请使用背包中的工具进行操作",
notUsedInfo: "洗衣机已经被使用了"
}
};
window.chp2_scene1_items = {
washingMachine: {
name: "washingMachine",
used: !1,
tool: "卷轴",
usedInfo: "请使用背包中的工具进行操作",
notUsedInfo: "洗衣机已经被使用了"
}
};
window.Items = {
chp1_302: {
"背包": {
name: "背包",
used: !1,
tool: "卷轴晾衣杆",
usedInfo: "请使用背包中的工具进行操作",
notUsedInfo: "洗衣机已经被使用了"
}
},
"chp1_一楼大厅": {
"F1宿管房门": {
name: "F1宿管房门",
used: !1,
tool: "钥匙",
usedInfo: "请使用钥匙打开宿管房间的门",
notUsedInfo: "宿管房间的门已经打开"
}
}
};
cc._RF.pop();
}, {} ],
addStone: [ function(e, t) {
"use strict";
cc._RF.push(t, "74555x08xdLIIpOZokpIWNQ", "addStone");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
addStone: function() {
cc.find("Canvas/NoStone").active = !1;
cc.find("Canvas/Label").getComponent(cc.Label).string = "请输入密码";
cc.find("Canvas/gate").active = !0;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
bagInfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "7ae5eWWmX1NSKqd4amigdRl", "bagInfo");
window.TOOLS = [ {
name: "晾衣杆",
intro: "用来移动移动衣服和背包",
picUrl: "tools/晾衣杆",
connect: null,
numOfCon: 0,
inBag: !1,
isActive: !1
}, {
name: "钥匙",
intro: "可用来打开舍管的房间",
picUrl: "tools/钥匙",
connect: null,
numOfCon: 0,
inBag: !1,
isActive: !1
}, {
name: "蓝色宝石",
intro: "不知道干什么",
picUrl: "tools/蓝色宝石",
connect: null,
numOfCon: 0,
inBag: !1,
isActive: !1
}, {
name: "手机",
intro: "用来查看大图",
picUrl: "tools/手机",
connect: null,
numOfCon: 0,
inBag: !1,
isActive: !1
} ];
window.toolMap = {
"晾衣杆": 0,
"钥匙": 1,
"蓝色宝石": 2,
"手机": 3
};
window.Bag = [];
window.InUse = "";
window.ToolUsed = !1;
cc._RF.pop();
}, {} ],
bagSetting: [ function(e, t) {
"use strict";
cc._RF.push(t, "207531lMtBNepqnCC/RMT2C", "bagSetting");
window.TOOLS;
cc.Class({
extends: cc.Component,
properties: {
gridLayout: cc.Node,
toolPrefab: cc.Prefab,
introduction: cc.Node
},
onLoad: function() {
this.gridLayout = cc.find("Canvas/Main Camera/bag/bagBg/layout");
this.toolPrefab = cc.find("Canvas/Main Camera/bag/tool");
this.introduction = cc.find("Canvas/Main Camera/bag/intro");
this.toolsArray = window.Bag;
this.toolMap = toolMap;
console.log(this.toolMap);
},
spawnTools: function() {
var e = .105 * this.gridLayout.width, t = .215 * this.gridLayout.height, o = .022 * this.gridLayout.width, c = .045 * this.gridLayout.height;
this.gridLayout.getComponent(cc.Layout).cellSize.width = e;
this.gridLayout.getComponent(cc.Layout).cellSize.height = t;
this.gridLayout.getComponent(cc.Layout).spacingX = o;
this.gridLayout.getComponent(cc.Layout).spacingY = c;
console.log(Bag);
console.log("Bag size:" + Bag.length);
this.toolsArray = [];
for (var n = 0; n < window.Bag.length; n++) {
var s = cc.instantiate(this.toolPrefab), a = this.toolMap[window.Bag[n].name];
s.getComponent("bagTool").initInfo(window.TOOLS[a]);
this.toolsArray.push(s);
this.gridLayout.addChild(s);
}
var r = this.gridLayout.children;
for (i = 0; i < r.length; i++) r[i].active = !0;
},
bagBtn: function() {
console.log("grid parent active: " + this.gridLayout.parent.active);
if (this.gridLayout.parent.active) {
this.gridLayout.parent.active = !1;
this.toolsArray.forEach(function(e) {
e.removeFromParent();
});
this.introduction.active = !1;
} else {
console.log("bagBg active");
this.gridLayout.parent.active = !0;
this.spawnTools();
}
window.BagBackground = this.gridLayout.parent;
},
update: function() {}
});
cc._RF.pop();
}, {} ],
bagTool: [ function(e, t) {
"use strict";
cc._RF.push(t, "675b4MjrUtDsbeqAip2bkSk", "bagTool");
cc.Class({
extends: cc.Component,
properties: {},
initInfo: function(e) {
var t = this;
cc.resources.load(e.picUrl, cc.SpriteFrame, function(e, o) {
t.node.getComponent(cc.Sprite).spriteFrame = o;
});
this.node.intro = e.intro;
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
var e = cc.find("Canvas/Main Camera/bag/intro");
e.getComponent(cc.Label).string = this.node.intro;
e.active = !0;
}.bind(this), this);
this.node.pic = e.picUrl;
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
var t = cc.find("Canvas/Main Camera/bag/useTool/body");
cc.loader.loadRes(e.picUrl, cc.SpriteFrame, function(e, o) {
t.getComponent(cc.Sprite).spriteFrame = o;
});
window.InUse = e.name;
}.bind(this), this);
console.log("In use tool:" + window.InUse);
}
});
cc._RF.pop();
}, {} ],
button: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "481d8hEjRZH94/shqoYwPd8", "button");
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, n = c.ccclass, i = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.value = 0;
t.upper_node = null;
t.isClick = !0;
t.button_name = null;
return t;
}
t.prototype.onLoad = function() {
cc.log(this.button_name.string);
"放水按钮1" == this.button_name.string && (this.value = 1);
"放水按钮2" == this.button_name.string && (this.value = 3);
"放水按钮3" == this.button_name.string && (this.value = 11);
"放水按钮4" == this.button_name.string && (this.value = 29);
"放水按钮5" == this.button_name.string && (this.value = 97);
this.node.on(cc.Node.EventType.TOUCH_START, this.touchstart, this);
};
t.prototype.touchstart = function() {
cc.log("start");
if (1 == this.isClick) {
this.upper_node.emit("addSocre", this);
this.isClick = !1;
} else {
this.upper_node.emit("decraseScore", this);
this.isClick = !0;
}
};
t.prototype.changcolor = function() {
cc.log("changcolor");
1 == this.isClick ? this.node.color = cc.Color.YELLOW : this.node.color = cc.Color.BLUE;
};
__decorate([ i(cc.Node) ], t.prototype, "upper_node", void 0);
__decorate([ i(cc.Label) ], t.prototype, "button_name", void 0);
return __decorate([ n ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
camera: [ function(e, t) {
"use strict";
cc._RF.push(t, "5bb931tEJBIep+u6RiNUV1s", "camera");
cc.Class({
extends: cc.Component,
properties: {
target: cc.Node,
map: cc.Node
},
start: function() {
var e = cc.find("Canvas/bg/maps").width, t = cc.find("Canvas").width;
console.log("canvaswidth:" + t);
console.log("mapWidth", e);
this.max_x = e - t;
window.player.enterGame && this.cameraFollow();
},
cameraFollow: function() {
if (this.target) {
var e = this.target.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.node.parent.convertToNodeSpaceAR(e);
t.x <= 0 || t.x >= this.max_x || (this.node.x = t.x);
} else console.log("null target");
},
update: function() {
null != this.target ? this.cameraFollow() : console.log("don't get the node");
}
});
cc._RF.pop();
}, {} ],
changcolor: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "68274LbEfNJnJMBn7VM8RoK", "changcolor");
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, n = c.ccclass, i = (c.property, function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isClick = !0;
return t;
}
t.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.changcolor, this);
};
t.prototype.changcolor = function() {
cc.log("background_changecolor");
if (1 == this.isClick) {
this.node.color = cc.Color.RED;
this.isClick = !1;
} else {
this.node.color = cc.Color.BLACK;
this.isClick = !0;
this.node.addChild = this.isClick.valueOf;
}
};
return __decorate([ n ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {} ],
changeScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "e1a79Eh0/dMe48OmdSovolK", "changeScene");
cc.Class({
extends: cc.Component,
properties: {
door: cc.Node,
playerNode: cc.Node
},
onLoad: function() {
this.currentScene = cc.director.getScene()._name;
this.nextScene = "";
this.currentDoor = "";
this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
console.log("useItem:" + this.useItem.name);
console.log("onload");
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
},
onKeyDown: function(e) {
if (this.canshow && e.keyCode == cc.macro.KEY.space) {
console.log("press space");
this.saveState();
this.changeScene();
}
},
canShow: function() {
return "doors" == Global.itemType;
},
saveState: function() {
cc.find("Main Camera");
window.player.pos_X = this.playerNode.getPosition().x;
window.player.pos_Y = this.playerNode.getPosition().y;
window.playerPosition[this.currentScene] = this.playerNode.getPosition();
console.log(window.player.pos_X, window.player.pos_Y);
},
onSceneLaunched: function() {
if ("" != window.InUse) {
for (var e = 0; e < window.Bag.length && window.Bag[e].name != window.InUse; e++) ;
var t = window.toolMap[window.Bag[e].name];
console.log("id:" + t);
var o = window.TOOLS[t];
console.log("tool:" + o.name);
this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
var c = this.useItem;
console.log("self out: " + c.name);
cc.loader.loadRes(o.picUrl, cc.SpriteFrame, function(e, t) {
c.getComponent(cc.Sprite).spriteFrame = t;
console.log("self in: " + c.name);
});
}
},
changeScene: function() {
this.currentScene = cc.director.getScene()._name;
var e = window.scenes[this.currentScene];
console.log("current scene:" + this.curreneScene);
console.log("scenes: " + e);
console.log(e);
this.nextScene = e[this.currentDoor];
console.log("next:" + this.nextScene);
window.player.previousScene = this.currentScene;
window.player.previousDoor = this.door.name;
if ("chp1_202" != this.nextScene || 1 == window.lockOfCupsInCP1 && 1 == window.lockOfWashingMachineInCp1) {
console.log(this.nextScene);
cc.director.loadScene(this.nextScene, this.onSceneLaunched);
} else {
console.log(window.lockOfCupsInCP1);
console.log(window.lockOfWashingMachineInCp1);
console.log("wrong");
}
},
start: function() {},
update: function() {
this.canshow = this.canShow();
"doors" != Global.itemType ? this.currentDoor = "" : this.currentDoor = Global.itemName;
}
});
cc._RF.pop();
}, {} ],
changeback: [ function(e, t) {
"use strict";
cc._RF.push(t, "51c72kA3/1JrK+TzggUst5b", "changeback");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
this.gameScene = cc.director.getScene()._name;
console.log("this scene" + this.gameScene);
},
changeScene: function() {
this.nextScene = window.games[this.gameScene];
console.log("next Scene:" + this.nextScene);
cc.director.loadScene(this.nextScene, this.onSceneLaunched);
},
onSceneLaunched: function() {
if ("" != window.InUse) {
for (var e = 0; e < window.Bag.length && window.Bag[e].name != window.InUse; e++) ;
var t = window.toolMap[window.Bag[e].name], o = window.TOOLS[t];
this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
var c = this.useItem;
cc.loader.loadRes(o.picUrl, cc.SpriteFrame, function(e, t) {
c.getComponent(cc.Sprite).spriteFrame = t;
console.log("self in: " + c.name);
});
}
},
update: function() {}
});
cc._RF.pop();
}, {} ],
checkPhone: [ function(e, t) {
"use strict";
cc._RF.push(t, "e9eed5gIDpF145sbzIl9OZb", "checkPhone");
cc.Class({
extends: cc.Component,
properties: {
phone: cc.Node
},
onLoad: function() {
console.log('window.TOOLS[window.toolMap["手机"]].inBag', window.TOOLS[window.toolMap["手机"]].inBag);
window.TOOLS[window.toolMap["手机"]].inBag && (this.node.active = !1);
},
getPhone: function() {
this.phone.active = !1;
if (!window.TOOLS[window.toolMap["手机"]].inBag) {
window.Bag.push(window.TOOLS[window.toolMap["手机"]]);
window.TOOLS[window.toolMap["手机"]].inBag = !0;
for (var e in window.Bag) console.log(window.Bag[e].name);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
check_out: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e5c1bdqmphENrIC/h/OMPV+", "check_out");
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, n = c.ccclass, i = c.property, s = e("./config"), a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.config = null;
return t;
}
t.prototype.onLoad = function() {
this.node.on("check_out", this.check_out, this);
};
t.prototype.check_out = function() {
cc.log("check_out");
if (111 == this.config.value) {
this.label.string = "洗衣机发动了！";
window.lockOfWashingMachineInCp1 = 1;
cc.log(window.lockOfWashingMachineInCp1);
} else {
this.label.string = "洗衣机还没发动！";
window.lockOfWashingMachineInCp1 = 0;
}
};
__decorate([ i(cc.Label) ], t.prototype, "label", void 0);
__decorate([ i(s.default) ], t.prototype, "config", void 0);
return __decorate([ n ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {
"./config": "config"
} ],
check: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "95848E/ILxPZ4MZH0DS496P", "check");
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, n = c.ccclass, i = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.upper_node = null;
return t;
}
t.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchstart, this);
};
t.prototype.touchstart = function() {
this.upper_node.emit("check", this);
};
__decorate([ i(cc.Node) ], t.prototype, "upper_node", void 0);
return __decorate([ n ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
closet: [ function(e, t) {
"use strict";
cc._RF.push(t, "76dd1yUGTpPG6ZqkIbq+xsT", "closet");
window.lockOfClosetInCP1 = !1;
var o = 0, c = 0, n = 0, i = 0, s = "";
cc.Class({
extends: cc.Component,
properties: {
sprite_Frame1: {
default: null,
type: cc.SpriteFrame
},
sprite_Frame2: {
default: null,
type: cc.SpriteFrame
},
sprite_Frame3: {
default: null,
type: cc.SpriteFrame
},
sprite_Frame4: {
default: null,
type: cc.SpriteFrame
},
sprite_Frame5: {
default: null,
type: cc.SpriteFrame
},
sprite_Frame6: {
default: null,
type: cc.SpriteFrame
},
sprite_Frame7: {
default: null,
type: cc.SpriteFrame
},
sprite_Frame8: {
default: null,
type: cc.SpriteFrame
},
sprite_Frame9: {
default: null,
type: cc.SpriteFrame
},
sprite_Frame0: {
default: null,
type: cc.SpriteFrame
},
sprite_FrameOpen: {
default: null,
type: cc.SpriteFrame
},
guizi: {
default: null,
type: cc.SpriteFrame
},
openState: cc.Node
},
closet1: function() {
var e = this.node.getComponent(cc.Button);
switch (o) {
case 0:
e.normalSprite = this.sprite_Frame1;
break;

case 1:
e.normalSprite = this.sprite_Frame2;
break;

case 2:
e.normalSprite = this.sprite_Frame3;
break;

case 3:
e.normalSprite = this.sprite_Frame4;
break;

case 4:
e.normalSprite = this.sprite_Frame5;
break;

case 5:
e.normalSprite = this.sprite_Frame6;
break;

case 6:
e.normalSprite = this.sprite_Frame7;
break;

case 7:
e.normalSprite = this.sprite_Frame8;
break;

case 8:
e.normalSprite = this.sprite_Frame9;
break;

case 9:
e.normalSprite = this.sprite_Frame0;
}
10 == ++o && (o = 0);
},
closet2: function() {
var e = this.node.getComponent(cc.Button);
switch (c) {
case 0:
e.normalSprite = this.sprite_Frame1;
break;

case 1:
e.normalSprite = this.sprite_Frame2;
break;

case 2:
e.normalSprite = this.sprite_Frame3;
break;

case 3:
e.normalSprite = this.sprite_Frame4;
break;

case 4:
e.normalSprite = this.sprite_Frame5;
break;

case 5:
e.normalSprite = this.sprite_Frame6;
break;

case 6:
e.normalSprite = this.sprite_Frame7;
break;

case 7:
e.normalSprite = this.sprite_Frame8;
break;

case 8:
e.normalSprite = this.sprite_Frame9;
break;

case 9:
e.normalSprite = this.sprite_Frame0;
}
10 == ++c && (c = 0);
},
closet3: function() {
var e = this.node.getComponent(cc.Button);
switch (n) {
case 0:
e.normalSprite = this.sprite_Frame1;
break;

case 1:
e.normalSprite = this.sprite_Frame2;
break;

case 2:
e.normalSprite = this.sprite_Frame3;
break;

case 3:
e.normalSprite = this.sprite_Frame4;
break;

case 4:
e.normalSprite = this.sprite_Frame5;
break;

case 5:
e.normalSprite = this.sprite_Frame6;
break;

case 6:
e.normalSprite = this.sprite_Frame7;
break;

case 7:
e.normalSprite = this.sprite_Frame8;
break;

case 8:
e.normalSprite = this.sprite_Frame9;
break;

case 9:
e.normalSprite = this.sprite_Frame0;
}
10 == ++n && (n = 0);
},
closet4: function() {
var e = this.node.getComponent(cc.Button);
switch (i) {
case 0:
e.normalSprite = this.sprite_Frame1;
break;

case 1:
e.normalSprite = this.sprite_Frame2;
break;

case 2:
e.normalSprite = this.sprite_Frame3;
break;

case 3:
e.normalSprite = this.sprite_Frame4;
break;

case 4:
e.normalSprite = this.sprite_Frame5;
break;

case 5:
e.normalSprite = this.sprite_Frame6;
break;

case 6:
e.normalSprite = this.sprite_Frame7;
break;

case 7:
e.normalSprite = this.sprite_Frame8;
break;

case 8:
e.normalSprite = this.sprite_Frame9;
break;

case 9:
e.normalSprite = this.sprite_Frame0;
}
10 == ++i && (i = 0);
},
closetJudge: function() {
s = "" + o + c + n + i;
cc.log(s);
if ("1024" === s) {
var e = this.node.parent.getComponent(cc.Sprite);
cc.log(e);
cc.log(this.node.sprite_FrameOpen);
e.spriteFrame = this.sprite_FrameOpen;
cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = !1;
cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = !1;
cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = !1;
cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = !1;
cc.find("Canvas/柜子大图/柜子+锁关/body_柜子开").active = !0;
cc.log("success");
window.lockOfClosetInCP1 = !0;
}
},
onLoad: function() {
o = 0;
c = 0;
n = 0;
i = 0;
s = "";
},
start: function() {}
});
cc._RF.pop();
}, {} ],
comeBackToFirstPage: [ function(e, t) {
"use strict";
cc._RF.push(t, "0d98eKY+rFBLpsYPJZoLxKq", "comeBackToFirstPage");
cc.Class({
extends: cc.Component,
properties: {},
comeBackToFirstPage: function() {
window.saveScene = cc.director.getScene()._name;
cc.director.loadScene("开始游戏");
},
comeBackToGame: function() {
"" != window.saveScene && cc.director.loadScene(window.saveScene);
},
comeBackFromAbout: function() {
cc.director.loadScene("开始游戏");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
config: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b0fb1xxAB1JxLApMiumEP3S", "config");
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, n = c.ccclass, i = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.value = 0;
return t;
}
t.prototype.onLoad = function() {
this.node.on("addSocre", this.addSocre, this);
this.node.on("decraseScore", this.decraseScore, this);
this.node.on("check", this.check, this);
};
t.prototype.addSocre = function(e) {
this.value = this.value + e.value;
cc.log(this.value);
cc.log(e.button_name.string + "按下");
111 == this.value && cc.log("true");
};
t.prototype.decraseScore = function(e) {
this.value = this.value - e.value;
cc.log(this.value);
cc.log(e.button_name.string + "按下");
111 == this.value && cc.log("true");
};
t.prototype.check = function() {
if (111 == this.value) {
cc.log("true");
window.lockOfWashingMachineInCp1 = 1;
} else {
cc.log("false");
window.lockOfWashingMachineInCp1 = 0;
}
cc.log(window.lockOfWashingMachineInCp1);
};
__decorate([ i ], t.prototype, "value", void 0);
return __decorate([ n ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
controlUIInFirstPage: [ function(e, t) {
"use strict";
cc._RF.push(t, "a41c47DlGZKZZACWiBCld78", "controlUIInFirstPage");
cc.Class({
extends: cc.Component,
properties: {},
startGame: function() {
console.log(window.playerPosition);
for (var e in window.playerPosition) {
console.log(window.playerPosition[e]);
window.playerPosition[e] = null;
}
cc.director.loadScene("chp1_303");
},
aboutUs: function() {
cc.director.loadScene("关于我们");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"dialog - 001": [ function(e, t) {
"use strict";
cc._RF.push(t, "ab8caVBfEBHpJaZ+h6wgNHk", "dialog - 001");
var o = {
1: {
name: "小白",
url: "role/player"
},
2: {
name: "纸条",
url: ""
}
}, c = [ {
role: 2,
content: "Welcome to FZU,hhhhh"
}, {
role: 1,
content: "Hello,I'm Huiker"
} ];
cc.Class({
extends: cc.Component,
properties: {
picSprite: cc.Sprite,
nameLabel: cc.Label,
textLabel: cc.Label,
nodeBody: cc.Node
},
onLoad: function() {
this.nodeBody = this.node.getChildByName("body");
this.nodeBody.active = !1;
this.canTalk = !1;
this.node.active = !0;
this.npcName = " ";
this.initDialog();
console.log("dialog success");
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
},
onKeyDown: function(e) {
if (e.keyCode == cc.macro.KEY.j && this.canShowDialog()) {
this.nodeBody.active = !0;
this.showDialog();
console.log("press j to talk");
console.log(this.node.name);
}
},
start: function() {},
canShowDialog: function() {
return "npcs" == Global.itemType;
},
initContent: function() {
console.log(Global.currentScene);
var e = Dialog.contents[window.Global.currentScene];
return "npcs" != window.Global.itemType || " " == window.Global.itemName ? c : e[window.Global.itemName];
},
initDialog: function() {
this.nowText = null;
this.textEnd = !0;
this.tt = 0;
this.contentArr = c;
this.textIndex = -1;
this.textLabel = this.nodeBody.getChildByName("textLabel").getComponent(cc.Label);
this.nameLabel = this.nodeBody.getChildByName("nameLabel").getComponent(cc.Label);
this.textLabel.string = "";
},
showDialog: function() {
if (++this.textIndex < this.contentArr.length) {
console.log("current index:" + this.textIndex);
this.setTextData(this.contentArr[this.textIndex]);
} else {
this.closeDialog();
this.textIndex = -1;
}
},
setTextData: function(e) {
var t = this;
if (this.textEnd) {
this.textEnd = !1;
this.nameLabel.string = o[e.role].name;
this.textLabel.string = "";
this.nowText = e.content;
if (this.canTalk && " " != this.npcName) {
o[2].url = "role/" + Global.currentScene + "/" + Global.itemName;
console.log(o[e.role].url);
}
cc.resources.load(o[e.role].url, cc.SpriteFrame, function(e, o) {
t.picSprite.spriteFrame = o;
});
}
},
showContext: function(e) {
if (this.nowText) {
this.tt += e;
if (this.tt >= .02) {
if (this.textLabel.string.length < this.nowText.length) this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1); else {
this.textEnd = !0;
this.nowText = null;
}
this.tt = 0;
}
console.log("this textLabel: " + this.textLabel.string);
}
},
closeDialog: function() {
this.nodeBody.active = !1;
},
update: function(e) {
this.canTalk = this.canShowDialog();
if (this.canTalk && this.npcName != Global.itemName) {
console.log(this.npcName);
this.npcName = Global.itemName;
var t = this.initContent();
console.log(t);
this.contentArr = t;
}
this.canTalk ? this.showContext(e) : this.nodeBody.active = !1;
},
onDestroy: function() {
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
}
});
cc._RF.pop();
}, {} ],
dialogContent: [ function(e, t) {
"use strict";
cc._RF.push(t, "27d86vwvnRCfL1Wlmh2eoVl", "dialogContent");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
window.Dialog = {
contents: Map
};
},
start: function() {
var e = new Map();
e.npc1 = [ {
role: 2,
content: "今天是2015年元旦，我和我的舍友们好像来到了传说中的黑雾福大，宿舍楼里好像就只有我和我的舍友们，听说在这里会看到以前学长的留言，那我也留下我的留言吧。"
}, {
role: 2,
content: "如果现在正在看留言的你被某个密码锁困住了，别担心，可能这个锁的密码能够从某些墙上找到一些线索"
}, {
role: 1,
content: "原来这里就是黑雾福大，以前听学姐提到过，听说黑雾福大会把学生和老师困在这里，我还以为是都市传说呢，没想到是真的。"
}, {
role: 1,
content: "虽然不清楚具体是什么情况，总之先出宿舍楼吧。"
}, {
role: 1,
content: "既然是黑雾福大，那也别怪我私闯宿舍了，我应该去其他宿舍找找线索。"
} ];
window.Dialog.contents["chp1_三楼走廊"] = e;
var t = new Map();
t.npc1 = [ {
role: 2,
content: "如果有人看到的话，请记住这间宿舍的门会自己消失，但是也许是这间宿舍原来的成员有强迫症，将外面挂着的衣服按照一定的顺序来排序，门就能出现，真是神奇。"
}, {
role: 1,
content: "看起来门的消失和外面挂着的衣服有关，虽然很扯蛋，但是我要去看看，也许我能找到什么线索"
} ];
t.npc2 = [ {
role: 2,
content: "我的强迫症实在太严重了，但是我的舍友老是会忘记我衣物的晾晒顺序"
}, {
role: 2,
content: "「4231」，希望这样的方法能够让舍友记住"
}, {
role: 2,
content: "为了防止舍友忘记这串数字代表什么，我就给个提示吧："
}, {
role: 2,
content: "妈妈给小明买了一条破洞裤，这条裤子在膝盖处有一处破洞，但是小明却坚持声称这条裤子有4个洞，其实妈妈是对的，小明也是对的"
} ];
window.Dialog.contents.chp1_301 = t;
var o = new Map();
o.npc1 = [ {
role: 2,
content: "真的是很震惊！没想到201和203在黑雾福大中竟如此诡异，它们是完全对称的！希望之后读到这个纸条的人一定要记住"
}, {
role: 1,
content: "201和203是对称的？也许这是我能进入202宿舍的关键"
} ];
window.Dialog.contents["chp1_二楼走廊"] = o;
var c = new Map();
c.npc1 = [ {
role: 2,
content: "scene 2 npc1"
}, {
role: 1,
content: "aaaaaaaa"
} ];
c.npc2 = [ {
role: 2,
content: "scene 2 npc1"
}, {
role: 1,
content: "bbbbbbbbbbbbbbbb"
} ];
window.Dialog.contents.chp2_scene1 = c;
}
});
cc._RF.pop();
}, {} ],
disableLock: [ function(e, t) {
"use strict";
cc._RF.push(t, "d9dacuspw1LhpfsCL3uyTak", "disableLock");
cc.Class({
extends: cc.Component,
properties: {},
checkLockChp1F3: function() {
var e = cc.find("Canvas/bg/games/chp1_三楼走廊解锁");
if (null != e) {
console.log(e);
if (window.lockOfStairsInCP1F3) {
e.active = !1;
cc.find("Canvas/bg/doors/door4").active = !0;
}
}
},
start: function() {
this.checkLockChp1F3();
}
});
cc._RF.pop();
}, {} ],
"game - 001": [ function(e, t) {
"use strict";
cc._RF.push(t, "c54c7nKsO9NjJ876O9hvrCX", "game - 001");
var o = [ 0, 0 ], c = {
door: 0,
ghost: 1
};
cc.Class({
extends: cc.Component,
properties: {
mapNodes: cc.Node,
useItem: cc.Node
},
onLoad: function() {
cc.director.getPhysicsManager().enabled = !0;
cc.director.getPhysicsManager().debugDrawFlags = 0;
cc.director.getPhysicsManager().gravity = cc.v2(0, 0);
window.Global = {
IsShowing: null,
InArr: null,
CloseItem: null,
contact: null,
id: null,
currentScene: String,
itemType: String,
itemName: String,
npcsMap: Map,
gameBg: cc.Node,
itemsMap: Map,
doorsMap: Map
};
},
start: function() {
console.log("start");
Global.IsShowing = !1;
Global.InArr = o;
Global.CloseItem = c;
Global.contact = " ";
Global.id = 0;
Global.itemType = " ";
Global.itemName = " ";
Global.currentScene = cc.director.getScene()._name;
console.log(Global.currentScene);
this.initScenes();
this.initAllNodes();
this.initPaths();
this.initTips();
},
initScenes: function() {},
initAllNodes: function() {},
initPaths: function() {},
initTips: function() {},
initMap: function() {}
});
cc._RF.pop();
}, {} ],
gameController: [ function(e, t) {
"use strict";
cc._RF.push(t, "3f929oxxZRLx4hl8VDJ+f1j", "gameController");
cc.Class({
extends: cc.Component,
properties: {
tip: cc.Node,
playerNode: cc.Node,
node: cc.Node
},
start: function() {
this.scene = Global.currentScene;
this.tip = cc.find("Canvas/Main Camera/tip");
this.isIn = !1;
this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
},
canStartGame: function() {
var e = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), o = cc.Vec2.distance(t, e);
console.log("dis:" + o);
return o <= 100;
},
onKeyDown: function(e) {
this.isIn = this.canStartGame();
console.log("In:" + this.isIn);
if (this.isIn && e.keyCode == cc.macro.KEY.g) {
this.saveState();
this.changeScene();
}
},
changeScene: function() {
var e = this.node.name;
console.log("games: " + e);
this.nextScene = e;
cc.director.loadScene(this.nextScene, this.onSceneLaunched);
},
saveState: function() {
window.player.pos_X = this.playerNode.getPosition().x;
window.player.pos_Y = this.playerNode.getPosition().y;
window.player.enterGame = !0;
console.log(window.player.pos_X, window.player.pos_Y);
},
onSceneLaunched: function() {
if ("" != window.InUse) {
for (var e = 0; e < window.Bag.length && window.Bag[e].name != window.InUse; e++) ;
var t = window.toolMap[window.Bag[e].name];
console.log("id:" + t);
var o = window.TOOLS[t];
console.log("tool:" + o.name);
this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
var c = this.useItem;
console.log("self out: " + c.name);
cc.loader.loadRes(o.picUrl, cc.SpriteFrame, function(e, t) {
c.getComponent(cc.Sprite).spriteFrame = t;
console.log("self in: " + c.name);
});
}
},
update: function() {
"games" == Global.itemType && Global.itemName == this.name && this.enterGame();
}
});
cc._RF.pop();
}, {} ],
gameInfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "4236dFiO7NIrrShdSdN3EZc", "gameInfo");
window.games = {
"chp1_序章电闸": "chp1_序章",
chp1_302_1_lamp: "chp1_302",
chp1_302_2_lock: "chp1_302",
"chp1_302_柜子大图": "chp1_302",
"chp1_302_数字大图": "chp1_302",
"chp1_301_大图数字": "chp1_301",
chp1_301_1_cloth: "chp1_301",
chp1_zoulang_1_lock: "chp1_zoulangF1",
"chp1_舍管房间石头大图": "chp1_舍管房间",
"chp1_三楼走廊解锁": "chp1_三楼走廊",
chp1_203_1_cup: "chp1_203",
chp1_203_1_washingMachine: "chp1_203",
chp1_201_1_findout: "chp1_201",
F1orF2: "chp1_二楼走廊"
};
window.lockOfStairsInCP1F3 = !1;
window.lockOfClosetInCP1 = !1;
window.lockOfSwitchInCP1 = !1;
cc._RF.pop();
}, {} ],
gate: [ function(e, t) {
"use strict";
cc._RF.push(t, "ed596AnlUhLvrXw8KerKm5A", "gate");
window.lockOfGateCP1 = !1;
var o = "";
cc.Class({
extends: cc.Component,
properties: {},
gate1: function() {
o += 1;
cc.log(o);
},
gate2: function() {
o += 2;
cc.log(o);
},
gate3: function() {
o += 3;
cc.log(o);
},
gate4: function() {
o += 4;
cc.log(o);
},
gate5: function() {
o += 5;
cc.log(o);
},
gate6: function() {
o += 6;
cc.log(o);
},
gate7: function() {
o += 7;
cc.log(o);
},
gate8: function() {
o += 8;
cc.log(o);
},
gate9: function() {
o += 9;
cc.log(o);
},
gateJudge: function() {
if (o.length < 4) cc.log(o); else if (4 === o.length && "3692" === o) {
cc.log("success");
window.lockOfGateCP1 = !0;
cc.find("Canvas/Label").getComponent(cc.Label).string = "密码正确，请拿走石头";
} else {
cc.find("Canvas/Label").getComponent(cc.Label).string = "密码错误，请重试";
cc.log("fail");
o = "";
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
getStone: [ function(e, t) {
"use strict";
cc._RF.push(t, "912684sdVNAgqX0GQbNLq8w", "getStone");
cc.Class({
extends: cc.Component,
properties: {
label: cc.Label,
noStone: cc.Node,
withStone: cc.Node
},
getStone: function() {
this.withStone.active = !1;
this.noStone.active = !0;
this.label.getComponent(cc.Label).string = "石头已被成功取走";
if (!window.TOOLS[window.toolMap["蓝色宝石"]].inBag) {
window.TOOLS[window.toolMap["蓝色宝石"]].inBag = !0;
window.Bag.push(window.TOOLS[window.toolMap["蓝色宝石"]]);
for (var e in window.Bag) console.log(window.Bag[e].name);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
getphone: [ function(e, t) {
"use strict";
cc._RF.push(t, "de076KSCAVKIrOgz0m0LAHy", "getphone");
cc.Class({
extends: cc.Component,
properties: {
phone: cc.Node
},
getPhone: function() {
this.phone.active = !1;
if (!window.TOOLS[window.toolMap["手机"]].inBag) {
window.Bag.push(window.TOOLS[window.toolMap["手机"]]);
window.TOOLS[window.toolMap["手机"]].inBag = !0;
for (var e in window.Bag) console.log(window.Bag[e].name);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
isClosetClosed: [ function(e, t) {
"use strict";
cc._RF.push(t, "88ff4RpqJRFDZc6kGqvp0UK", "isClosetClosed");
cc.Class({
extends: cc.Component,
properties: {
openCloset: cc.Node
},
onLoad: function() {},
start: function() {
console.log("window.lockOfClosetInCP1:", window.lockOfClosetInCP1);
if (window.lockOfClosetInCP1) {
this.openCloset.active = !0;
this.node.active = !1;
}
}
});
cc._RF.pop();
}, {} ],
isLockOf301: [ function(e, t) {
"use strict";
cc._RF.push(t, "93a7bCASXtIvqwOfjl2Vr/r", "isLockOf301");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
start: function() {
window.neatOfClothesInCP1 && (this.node.active = !1);
}
});
cc._RF.pop();
}, {} ],
item: [ function(e, t) {
"use strict";
cc._RF.push(t, "025deL+2dJLXoRgZY3soCxp", "item");
cc.Class({
extends: cc.Component,
properties: {
tip: cc.Node
},
start: function() {
this.name = this.node.name;
this.scene = Global.currentScene;
this.tip = cc.find("Canvas/Main Camera/tip");
this.isUsed = !1;
this.item = window.Items[this.scene][this.name].item;
this.tool = window.Items[this.scene][this.name].tool;
},
contactWithTool: function() {
this.isUsed = window.Items[this.scene][this.name].used;
if (this.tool == window.Inuse) if (this.isUsed) this.tip.getChildByName("textLabel").getComponent(cc.Label).string = this.item.notUsedInfo; else {
window.Items[this.scene][this.name].used = !0;
this.tip.getChildByName("textLabel").getComponent(cc.Label).string = this.item.usedInfo;
} else this.tip.active = !0;
},
update: function() {
"items" == Global.itemType && Global.itemName == this.name && this.contactWithTool();
}
});
cc._RF.pop();
}, {} ],
loadState: [ function(e, t) {
"use strict";
cc._RF.push(t, "b5e0819iXNMea+J2BVnk8gh", "loadState");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.director.getScene().getChildByName("StartData");
},
if: function(e) {
this.data = e.data;
}
});
cc._RF.pop();
}, {} ],
lockOf301: [ function(e, t) {
"use strict";
cc._RF.push(t, "1a455xENSNMR6x1nHpYwJsh", "lockOf301");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
window.neatOfClothesInCP1 || (this.node.active = !1);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
lockOfStairsTip: [ function(e, t) {
"use strict";
cc._RF.push(t, "4d92a8j3PFDCpN9LHJ7XRFD", "lockOfStairsTip");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
window.lockOfStairsInCP1F3 && (this.node.active = !1);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
openDoorOfManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "4bd494lnAFIJbNMT5fL/a0M", "openDoorOfManager");
cc.Class({
extends: cc.Component,
properties: {
itemNode: cc.Node
},
start: function() {},
update: function() {
if (1 == window.Items["chp1_一楼大厅"]["F1宿管房门"].used) {
cc.find("Canvas/bg/doors/door1").active = !0;
this.itemNode.active = !1;
}
}
});
cc._RF.pop();
}, {} ],
"player_ctrl_pc - 001": [ function(e, t) {
"use strict";
cc._RF.push(t, "6e7e0a0TqpJhppp0ePCLXX4", "player_ctrl_pc - 001");
cc.Class({
extends: cc.Component,
properties: {
moveMaxspeed: 0,
playerSpeed: 0,
jumpSpeed: 0,
jumpHeight: 0,
playerNode: cc.Node
},
initHero: function() {
this.playerNode = cc.find("Canvas/bg/player");
this.rigid = this.playerNode.getComponent(cc.RigidBody);
this.heroAni = this.playerNode.getComponent(cc.Animation);
this._dir = " ";
this.anima = "idle";
this.npcs = cc.find("Canvas/background/npcs");
this.canTalk = !1;
console.log("enterGame:" + window.player.enterGame);
this.currentScene = cc.director.getScene()._name;
if (window.player.enterGame) {
window.player.enterGame = !1;
this.playerNode.setPosition(window.player.pos_X, window.player.pos_Y);
console.log("playerPos" + this.playerNode.position);
} else if (null != window.playerPosition[this.currentScene]) {
var e = window.playerPosition[this.currentScene];
this.playerNode.setPosition(e.x, e.y);
console.log("playerPos" + this.playerNode.position);
}
console.log("x:" + this.playerNode.x);
console.log("y:" + this.playerNode.y);
},
onLoad: function() {
console.log(window.player.enterGame);
this.initHero();
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
},
onDestroy: function() {
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
},
start: function() {
console.log("this.node pos" + this.playerNode.position);
},
onBeginContact: function(e, t) {
if (0 == t.tag) {
console.log(t.tag);
this.canJump = !0;
}
},
onMouseDown: function() {},
onKeyDown: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.a:
case cc.macro.KEY.left:
console.log("left");
this._dir = "left";
break;

case cc.macro.KEY.d:
case cc.macro.KEY.right:
this._dir = "right";
break;

case cc.macro.KEY.w:
case cc.macro.KEY.up:
this._dir = "up";
break;

case cc.macro.KEY.s:
case cc.macro.KEY.down:
this._dir = "down";
}
},
onKeyUp: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.a:
case cc.macro.KEY.left:
this._dir = " ";
break;

case cc.macro.KEY.d:
case cc.macro.KEY.right:
this._dir = " ";
break;

case cc.macro.KEY.w:
case cc.macro.KEY.up:
this._dir = " ";
break;

case cc.macro.KEY.s:
case cc.macro.KEY.down:
this._dir = " ";
}
},
heroMove: function() {
var e = this.rigid.linearVelocity, t = Math.abs(this.node.scaleX), o = this.anima;
switch (this._dir) {
case "left":
e.x = -this.playerSpeed;
o = "runleft";
break;

case "right":
e.x = this.playerSpeed;
this.node.scaleX = t;
o = "runright";
break;

default:
o = "idle";
e.x = 0;
}
this.playerNode.getComponent(cc.RigidBody).linearVelocity = e;
this.setAni(o);
},
setAni: function(e) {
if (this.anima != e) {
this.anima = e;
this.heroAni.play(e);
}
},
update: function() {
window.BagBackground && 1 == window.BagBackground.active || Global.gameBg && 1 == Global.gameBg.active || this.heroMove();
}
});
cc._RF.pop();
}, {} ],
saveState: [ function(e, t) {
"use strict";
cc._RF.push(t, "b745f5Q/xNFjqTUZsWwQ08a", "saveState");
var o = [ {
id: 0,
version: "0.1",
poName: "lockOfSwitchInCP0",
state: !1,
dataNum: 0,
poData: [],
poMap: {
origin: -1
}
} ];
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
t.exports = {
POINTS: o,
POMAP: {
lockOfSwitchInCP0: 0
},
pushData: function(e, t, c) {
o[c].dataNum++;
o[c].poData.push(e);
var n = "the" + t;
o[c].poMap[n] = o[c].dataNum - 1;
console.log(o[c].poData);
console.log(o[c].poMap);
},
getData: function(e, t) {
var c = "the" + e, n = o[t].poMap[c];
console.log(o[t].poMap);
var i = o[t].poData[n];
console.log(i);
return i;
}
};
cc._RF.pop();
}, {} ],
savestate: [ function(e, t) {
"use strict";
cc._RF.push(t, "7ad76r5lWhMVJElShTw6DP4", "savestate");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
saveState: function() {}
});
cc._RF.pop();
}, {} ],
sceneinfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "6dea9PRR5VAsYO1qNNgHnRZ", "sceneinfo");
var o;
window.scenes = {
chp1_303: {
door1: "chp1_三楼走廊"
},
chp1_302: {
door1: "chp1_三楼走廊"
},
chp1_301: {
door1: "chp1_三楼走廊"
},
chp1_201: {
door1: "chp1_二楼走廊"
},
chp1_202: {
door1: "chp1_二楼走廊"
},
chp1_203: {
door1: "chp1_二楼走廊"
},
"chp1_三楼走廊": {
door1: "chp1_301",
door2: "chp1_302",
door3: "chp1_303",
door4: "chp1_二楼走廊"
},
"chp1_二楼走廊": {
door1: "chp1_201",
door2: "chp1_202",
door3: "chp1_203",
door4: "F1orF2"
},
"chp1_一楼大厅": {
door1: "chp1_舍管房间",
door2: "chp2_scene1",
door3: "chp1_二楼走廊"
},
"chp1_舍管房间": {
door1: "chp1_一楼大厅"
}
};
window.player = {
pos_X: 100.743,
pos_Y: 90.511,
enterGame: !1,
previousScene: "",
previousDoor: "",
rememerPosOfDoor: !1
};
window.pos_chp1_三楼走廊 = {
301: cc.Vec2(600, 200),
302: cc.Vec2(1100, 200),
303: cc.Vec2(1500, 200),
"三楼走廊": cc.Vec2(2100, 200)
};
window.playerPosition = ((o = {
"chp1_三楼走廊": null,
chp1_301: null,
chp1_302: null
}).chp1_302 = null, o.chp1_303 = null, o.chp1_203 = null, o.chp1_202 = null, o.chp1_201 = null, 
o.chp1_二楼走廊 = null, o.chp1_一楼大厅 = null, o.chp1_宿管房间 = null, o);
cc._RF.pop();
}, {} ],
selfdialogInfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "33c67TAGcBLP5mG2Wa2jaeh", "selfdialogInfo");
window.selfDialog = {
chp1_303: {
d1: "舍友怎么都不在了，不会背着我在外面偷偷卷吧。",
d2: "今天外面怎么一个人都没有。",
d3: "怎么感觉宿舍楼和昨天不太一样，不会我一觉起来睡蒙了吧。"
},
"chp1_三楼走廊": {
d1: "奇怪，这楼梯间怎么被上了把锁？还是输入密码的。我怎么以前都没意识到"
},
chp1_301: {
d1: "诶，门呢？怎么突然消失了？看来陷入黑雾福大果然会有各种奇异现象的发生，让我想想……学姐曾经说过，如果陷入了黑雾福大，一定要多观察周围，寻找一切可以利用的线索脱身。嗯……我这就去周围看看",
d2: "怎么墙上有个数字？实在是奇怪，也许我应该查看一下"
},
chp1_302: {
d1: "怎么墙上有个数字？实在是奇怪，也许我应该查看一下",
d2: "这间宿舍还是挺温馨的，只可惜现在只有我一个人",
d3: "怎么好像有手机的声音，好像是左边那张床的柜子发出来的，话说……我的手机也不见了，现在拥有一部手机对我的帮助的确很大"
},
chp1_203: {
d1: "这里的洗衣机好像是可以使用的，也许我把它发动起来事情就会有所转机？"
},
chp1_201: {
d1: "这台洗衣机没办法启动，但是上面的图案却始终显示「暗亮暗暗亮」，同时我捡到一张纸条，上面写着「请不要乱动杯子的顺序」，我试了一下，居然真的完全动不了"
},
chp1_202: {
d1: "这把钥匙上面有舍管房间的标签，一定是舍管房间的钥匙"
},
"chp1_一楼大厅": {
d1: "前面就是舍管的房间了，需要一把钥匙才能打开",
d2: "可恶，这个大门被锁住了，似乎需要某种机关才能解开，也许我要去舍管的房间找找看有没有什么线索"
},
"chp1_舍管房间": {
d1: "看来舍管平日里还是很忙的"
}
};
window.papers = {};
cc._RF.pop();
}, {} ],
selfdialog: [ function(e, t) {
"use strict";
cc._RF.push(t, "78faevrZu1NxKw/vYWH7Hyl", "selfdialog");
cc.Class({
extends: cc.Component,
properties: {
textLable: cc.Label
},
init: function() {
this.currentScene = cc.director.getScene()._name;
this.nowText = null;
this.textEnd = !0;
this.tt = 0;
this.textIndex = -1;
this.isShowed = !1;
this.textLable = this.node.getChildByName("textLabel").getComponent(cc.Label);
},
onLoad: function() {
this.init();
},
setTextData: function() {
if (this.textEnd) {
this.textEnd = !1;
this.nowText = textData;
this.textLable.string = window.selfDialog[this.currentScene][this.node.name];
}
},
canShow: function() {
return " " != Global.itemType;
},
showContext: function(e) {
this.tt += e;
if (!this.isShowed) {
console.log("type:" + Global.itemType);
this.setTextData();
if (this.tt >= .05) {
if (this.textLable.string.length < this.nowText.length) this.textLable.string = this.nowText.slice(0, this.textLable.string.length + 1); else {
this.textEnd = !0;
this.isShowed = !0;
}
this.tt = 0;
}
}
},
closeDialog: function() {
this.node.active = !1;
},
onDisable: function() {
this.textLable.string = "";
this.init();
},
start: function() {},
update: function(e) {
this.showContext(e);
}
});
cc._RF.pop();
}, {} ],
setbuttom: [ function(e, t) {
"use strict";
cc._RF.push(t, "32194Q/NGhDcax6xjOEpacY", "setbuttom");
window.openlamp = 0;
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.node.pic = "shade/1";
var e = cc.find("Canvas/num");
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
var t = cc.find("Canvas/lampshade");
if (0 == openlamp) {
cc.loader.loadRes("shade/1", cc.SpriteFrame, function(e, o) {
t.getComponent(cc.Sprite).spriteFrame = o;
});
cc.loader.loadRes("num/1", cc.SpriteFrame, function(t, o) {
e.getComponent(cc.Sprite).spriteFrame = o;
});
openlamp++;
} else if (1 == openlamp) {
cc.loader.loadRes(null, cc.SpriteFrame, function(e, o) {
t.getComponent(cc.Sprite).spriteFrame = o;
});
cc.loader.loadRes(null, cc.SpriteFrame, function(t, o) {
e.getComponent(cc.Sprite).spriteFrame = o;
});
openlamp--;
}
}.bind(this), this);
}
});
cc._RF.pop();
}, {} ],
showStone: [ function(e, t) {
"use strict";
cc._RF.push(t, "d1c334NI1RJ1okAeIYXfAfh", "showStone");
cc.Class({
extends: cc.Component,
properties: {
label: cc.Label,
thisNode: cc.Node,
successNode: cc.Node
},
start: function() {},
update: function() {
if (1 == window.lockOfGateCP1) {
this.label.getComponent(cc.Label).string = "密码正确，请拿走石头";
this.successNode.active = !0;
this.thisNode.active = !1;
}
}
});
cc._RF.pop();
}, {} ],
showsuccess: [ function(e, t) {
"use strict";
cc._RF.push(t, "4d650h5UGFK7rDtV3DzOcMi", "showsuccess");
cc.Class({
extends: cc.Component,
properties: {
label: cc.Label
},
start: function() {
0 == window.lockOfSwitchInCP1 && (this.label.getComponent(cc.Label).string = "恭喜你，答对了");
},
update: function() {}
});
cc._RF.pop();
}, {} ],
stairclock: [ function(e, t) {
"use strict";
cc._RF.push(t, "120dctfqC9DELFLBN75xzOb", "stairclock");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
cc.director.loadScene("chp1_stair_game1");
}.bind(this), this);
}
});
cc._RF.pop();
}, {} ],
stairlock: [ function(e, t) {
"use strict";
cc._RF.push(t, "a2acdKwtUxOLISfkzDKQ4B5", "stairlock");
var o = "";
cc.Class({
extends: cc.Component,
properties: {},
stairLock1: function() {
o += 1;
cc.log(o);
},
stairLock2: function() {
o += 2;
cc.log(o);
},
stairLock3: function() {
o += 3;
cc.log(o);
},
stairLock4: function() {
o += 4;
cc.log(o);
},
stairLock5: function() {
o += 5;
cc.log(o);
},
stairLock6: function() {
o += 6;
cc.log(o);
},
stairLock7: function() {
o += 7;
cc.log(o);
},
stairLock8: function() {
o += 8;
cc.log(o);
},
stairLock9: function() {
o += 9;
cc.log(o);
},
stairLockJudge: function() {
if (o.length < 4) cc.log(o); else if (4 === o.length && "2148" === o) {
cc.log("success");
window.lockOfStairsInCP1F3 = !0;
cc.director.loadScene("chp1_三楼走廊");
} else {
cc.log("fail");
o = "";
cc.director.loadScene("chp1_三楼走廊");
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
switchbutton: [ function(e, t) {
"use strict";
cc._RF.push(t, "c4b1bRnVINOIqgcR+RbRP9l", "switchbutton");
window.color = 1;
cc.Class({
extends: cc.Component,
start: function() {
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
var e = cc.find("Canvas/lampshade"), t = cc.find("Canvas/num");
if (0 == openlamp) ; else if (1 == openlamp) if (1 == color) {
cc.loader.loadRes("shade/2", cc.SpriteFrame, function(t, o) {
e.getComponent(cc.Sprite).spriteFrame = o;
color++;
});
cc.loader.loadRes("num/2", cc.SpriteFrame, function(e, o) {
t.getComponent(cc.Sprite).spriteFrame = o;
});
} else if (2 == color) {
cc.loader.loadRes("shade/3", cc.SpriteFrame, function(t, o) {
e.getComponent(cc.Sprite).spriteFrame = o;
color++;
});
cc.loader.loadRes("num/3", cc.SpriteFrame, function(e, o) {
t.getComponent(cc.Sprite).spriteFrame = o;
});
} else if (3 == color) {
cc.loader.loadRes("shade/4", cc.SpriteFrame, function(t, o) {
e.getComponent(cc.Sprite).spriteFrame = o;
color++;
});
cc.loader.loadRes("num/4", cc.SpriteFrame, function(e, o) {
t.getComponent(cc.Sprite).spriteFrame = o;
});
} else if (4 == color) {
cc.loader.loadRes("shade/1", cc.SpriteFrame, function(t, o) {
e.getComponent(cc.Sprite).spriteFrame = o;
color = 1;
});
cc.loader.loadRes("num/1", cc.SpriteFrame, function(e, o) {
t.getComponent(cc.Sprite).spriteFrame = o;
});
}
}.bind(this), this);
}
});
cc._RF.pop();
}, {} ],
switch: [ function(e, t) {
"use strict";
cc._RF.push(t, "efbe1Uv2OtAB5rrrirEZfoB", "switch");
window.lockOfSwitchInCP1 = !1;
var o = 1, c = 1, n = -1, i = 1, s = -1, a = 1, r = 1, p = -1;
cc.Class({
extends: cc.Component,
properties: {
sprite_Frame1: {
default: null,
type: cc.SpriteFrame
},
sprite_Frame2: {
default: null,
type: cc.SpriteFrame
}
},
switch1: function() {
var e = this.node.getComponent(cc.Button);
o = -o;
e.normalSprite = 1 === o ? this.sprite_Frame1 : this.sprite_Frame2;
cc.log("res1" + o);
},
switch2: function() {
var e = this.node.getComponent(cc.Button);
c = -c;
e.normalSprite = 1 === c ? this.sprite_Frame1 : this.sprite_Frame2;
cc.log("res2" + c);
},
switch3: function() {
this.node.getComponent(cc.Button).normalSprite = 1 === n ? this.sprite_Frame1 : this.sprite_Frame2;
n = -n;
cc.log(n);
},
switch4: function() {
this.node.getComponent(cc.Button).normalSprite = 1 === i ? this.sprite_Frame1 : this.sprite_Frame2;
i = -i;
cc.log(i);
},
switch5: function() {
this.node.getComponent(cc.Button).normalSprite = 1 === s ? this.sprite_Frame1 : this.sprite_Frame2;
s = -s;
cc.log(s);
},
switch6: function() {
this.node.getComponent(cc.Button).normalSprite = 1 === a ? this.sprite_Frame1 : this.sprite_Frame2;
a = -a;
cc.log(a);
},
switch7: function() {
this.node.getComponent(cc.Button).normalSprite = 1 === r ? this.sprite_Frame1 : this.sprite_Frame2;
r = -r;
cc.log(r);
},
switch8: function() {
this.node.getComponent(cc.Button).normalSprite = 1 == p ? this.sprite_Frame1 : this.sprite_Frame2;
p = -p;
cc.log(p);
},
switch9: function() {
if (o + n + c + i + s + a + r + p == 8) {
window.lockOfSwitchInCP1 = !0;
cc.log("success");
cc.find("Canvas/Label").getComponent(cc.Label).string = "恭喜你，答对了";
}
cc.log(o + n + c + i + s + a + r + p);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
tips: [ function(e, t) {
"use strict";
cc._RF.push(t, "2f55f69NtlD654n2/I4CKFP", "tips");
var o = new Map();
o.set("doors", "按下空格即可切换场景");
o.set("npcs", "按下J键查看内容");
o.set("tools", "按下K键拾取物品");
o.set("items", "按下R键使用所选物品");
o.set("games", "按下G键查看");
cc.Class({
extends: cc.Component,
properties: {
textLable: cc.Label
},
init: function() {
this.nowText = null;
this.textEnd = !0;
this.tt = 0;
this.textIndex = -1;
this.isShowed = !1;
this.textLable = this.node.getChildByName("textLabel").getComponent(cc.Label);
},
onLoad: function() {
this.init();
},
setTextData: function(e) {
if (this.textEnd) {
this.textEnd = !1;
this.nowText = e;
this.textLable.string = "";
}
},
canShow: function() {
return " " != Global.itemType;
},
showContext: function(e) {
this.tt += e;
if (!this.isShowed) {
console.log("type:" + Global.itemType);
if ("selfdialogs" == window.Global.itemType) {
var t = cc.director.getScene()._name, c = window.Global.itemName, n = window.selfDialog[t][c];
this.setTextData(n);
} else this.setTextData(o.get(Global.itemType));
if (this.tt >= .05) {
if (this.textLable.string.length < this.nowText.length) this.textLable.string = this.nowText.slice(0, this.textLable.string.length + 1); else {
this.textEnd = !0;
this.isShowed = !0;
}
this.tt = 0;
}
}
},
closeDialog: function() {
this.node.active = !1;
},
onDisable: function() {
this.textLable.string = "";
this.init();
},
start: function() {},
update: function(e) {
this.showContext(e);
}
});
cc._RF.pop();
}, {} ],
tool: [ function(e, t) {
"use strict";
cc._RF.push(t, "ef98979pWpHTJArOZxjW6tp", "tool");
cc.Class({
extends: cc.Component,
properties: {
tip: cc.Node
},
onLoad: function() {
this.tt = 0;
this.playerNode = cc.find("Canvas/bg/player");
this.name = this.node.name;
window.TOOLS[window.toolMap[this.name]].inBag && (this.node.active = !1);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
},
start: function() {},
ToolAction: function() {
var e = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), o = cc.Vec2.distance(t, e);
this.isIn = o <= 200;
},
onKeyDown: function(e) {
if (this.isIn) {
console.log(this.node.name);
if (e.keyCode == cc.macro.KEY.k && !window.TOOLS[window.toolMap[this.name]].inBag) {
window.TOOLS[window.toolMap[this.name]].inBag = !0;
window.Bag.push(window.TOOLS[window.toolMap[this.name]]);
for (var t in window.Bag) console.log(window.Bag[t].name);
this.node.active = !1;
this.tip.active = !1;
}
}
},
update: function(e) {
this.tt += e;
if (this.tt >= .3) {
this.ToolAction(this.tt);
this.tt = 0;
}
},
onDestroy: function() {
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
}
});
cc._RF.pop();
}, {} ],
trigger: [ function(e, t) {
"use strict";
cc._RF.push(t, "c9b7er95LNEUaUK+4wdErSz", "trigger");
cc.Class({
extends: cc.Component,
properties: {
tip: cc.Node
},
initPlayer: function() {
this.charType = this.node.parent.name;
this.playerNode = cc.find("Canvas/bg/player");
this.tt = 0;
this.canShow = !1;
},
onLoad: function() {
this.tip = cc.find("Canvas/Main Camera/tip");
this.initPlayer();
},
start: function() {},
itemAction: function() {
var e = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0)), t = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), o = cc.Vec2.distance(t, e);
if (o < 100 && 0 == this.canShow) {
Global.itemType = this.charType;
Global.itemName = this.node.name;
this.tip.active = !0;
this.canShow = !0;
} else if (o >= 100 && 1 == this.canShow) {
this.tip.active = !1;
this.canShow = !1;
Global.itemType = " ";
Global.itemName = " ";
}
},
update: function(e) {
this.tt += e;
if (this.tt >= .3) {
this.itemAction(e);
this.tt = 0;
}
}
});
cc._RF.pop();
}, {} ],
useTool: [ function(e, t) {
"use strict";
cc._RF.push(t, "e2b6cvDWZNN26Y1dl2eZzuq", "useTool");
cc.Class({
extends: cc.Component,
properties: {
tip: cc.Node,
mynode: cc.Node
},
onLoad: function() {
this.tip = cc.find("Canvas/Main Camera/tip");
this.textLabel = this.tip.getChildByName("textLabel").getComponent(cc.Label);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
cc.game.addPersistRootNode(this.mynode);
},
start: function() {},
onKeyDown: function(e) {
this.contactItem = window.Global.itemName;
this.scene = window.Global.currentScene;
if (e.keyCode == cc.macro.KEY.r) {
console.log("InUse:" + window.InUse);
if (0 == window.Items[this.scene][this.contactItem].used) if (window.InUse == window.Items[this.scene][this.contactItem].tool) {
console.log("correct tool");
this.textLabel.string = "工具使用成功！l";
window.Items[this.scene][this.contactItem].used = !0;
} else if ("" == window.InUse) {
this.textLabel.string = "请先手持工具（在背包界面点击工具即可手持）";
console.log("please take the tool");
} else {
this.textLabel.string = "错误的工具！";
console.log("wrong tool");
} else this.textLabel.string = "这件工具好像已经被使用过了哦";
}
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "bagSetting", "bagTool", "useTool", "changeback", "F1ToF2", "F1orF2", "IsLockOfClosetIn302", "disableLock", "isLockOf301", "lockOf301", "openDoorOfManager", "comeBackToFirstPage", "controlUIInFirstPage", "camera", "changeScene", "game - 001", "loadState", "player_ctrl_pc - 001", "saveState", "dialog - 001", "301_phone", "1_js", "2_js", "3_js", "4_js", "1_java", "2_java", "3_java", "4_java", "5_java", "isClosetClosed", "setbuttom", "switchbutton", "checkPhone", "closet", "getphone", "addStone", "gate", "getStone", "showStone", "lockOfStairsTip", "stairclock", "stairlock", "showsuccess", "switch", "button", "changcolor", "check", "check_out", "config", "gameController", "ItemInfo", "bagInfo", "dialogContent", "gameInfo", "sceneinfo", "item", "savestate", "selfdialog", "selfdialogInfo", "tips", "trigger", "tool" ]);