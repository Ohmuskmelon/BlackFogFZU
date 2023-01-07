"use strict";
cc._RF.push(module, 'ed596AnlUhLvrXw8KerKm5A', 'gate');
// scripts/game_chp1/cp1_lock_sheguan/gate.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle gate
window.lockOfGateCP1 = false;
var _gate = 1;
var _gate2 = 2;
var _gate3 = 3;
var _gate4 = 4;
var _gate5 = 5;
var _gate6 = 6;
var _gate7 = 7;
var _gate8 = 8;
var _gate9 = 9;
var res = "";
cc.Class({
  "extends": cc.Component,
  properties: {// label:cc.Label,
    // thisNode:cc.Node,
    // successNode:cc.Node,
  },
  gate1: function gate1() {
    res = res + _gate;
    cc.log(res);
  },
  gate2: function gate2() {
    res = res + _gate2;
    cc.log(res);
  },
  gate3: function gate3() {
    res = res + _gate3;
    cc.log(res);
  },
  gate4: function gate4() {
    res = res + _gate4;
    cc.log(res);
  },
  gate5: function gate5() {
    res = res + _gate5;
    cc.log(res);
  },
  gate6: function gate6() {
    res = res + _gate6;
    cc.log(res);
  },
  gate7: function gate7() {
    res = res + _gate7;
    cc.log(res);
  },
  gate8: function gate8() {
    res = res + _gate8;
    cc.log(res);
  },
  gate9: function gate9() {
    res = res + _gate9;
    cc.log(res);
  },
  gateJudge: function gateJudge() {
    if (res.length < 4) {
      cc.log(res);
    } else if (res.length === 4 && res === "3692") {
      cc.log("success");
      window.lockOfGateCP1 = true;
      cc.find("Canvas/Label").getComponent(cc.Label).string = "密码正确，请拿走石头"; // this.node.active = true;
    } else {
      cc.find("Canvas/Label").getComponent(cc.Label).string = "密码错误，请重试";
      cc.log("fail");
      res = "";
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();