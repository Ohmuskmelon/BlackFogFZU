"use strict";
cc._RF.push(module, 'a2acdKwtUxOLISfkzDKQ4B5', 'stairlock');
// scripts/game_chp1/cp1_lock_stair/stairlock.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var res1 = 1;
var res2 = 2;
var res3 = 3;
var res4 = 4;
var res5 = 5;
var res6 = 6;
var res7 = 7;
var res8 = 8;
var res9 = 9;
var res = "";
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  stairLock1: function stairLock1() {
    res = res + res1;
    cc.log(res);
  },
  stairLock2: function stairLock2() {
    res = res + res2;
    cc.log(res);
  },
  stairLock3: function stairLock3() {
    res = res + res3;
    cc.log(res);
  },
  stairLock4: function stairLock4() {
    res = res + res4;
    cc.log(res);
  },
  stairLock5: function stairLock5() {
    res = res + res5;
    cc.log(res);
  },
  stairLock6: function stairLock6() {
    res = res + res6;
    cc.log(res);
  },
  stairLock7: function stairLock7() {
    res = res + res7;
    cc.log(res);
  },
  stairLock8: function stairLock8() {
    res = res + res8;
    cc.log(res);
  },
  stairLock9: function stairLock9() {
    res = res + res9;
    cc.log(res);
  },
  stairLockJudge: function stairLockJudge() {
    if (res.length < 4) {
      cc.log(res);
    } else if (res.length === 4 && res === "2148") {
      cc.log("success");
      window.lockOfStairsInCP1F3 = true;
      cc.director.loadScene('chp1_三楼走廊');
    } else {
      cc.log("fail");
      res = "";
      cc.director.loadScene('chp1_三楼走廊');
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();