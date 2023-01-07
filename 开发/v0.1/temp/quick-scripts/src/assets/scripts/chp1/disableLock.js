"use strict";
cc._RF.push(module, 'd9dacuspw1LhpfsCL3uyTak', 'disableLock');
// scripts/chp1/disableLock.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  checkLockChp1F3: function checkLockChp1F3() {
    var node = cc.find("Canvas/bg/games/chp1_三楼走廊解锁");

    if (node != null) {
      console.log(node);

      if (window.lockOfStairsInCP1F3) {
        node.active = false;
        cc.find("Canvas/bg/doors/door4").active = true;
      }
    }
  },
  start: function start() {
    this.checkLockChp1F3();
  } // update (dt) {},

});

cc._RF.pop();