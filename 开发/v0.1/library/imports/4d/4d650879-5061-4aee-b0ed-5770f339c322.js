"use strict";
cc._RF.push(module, '4d650h5UGFK7rDtV3DzOcMi', 'showsuccess');
// scripts/game_chp1/cp1_switch/showsuccess.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    label: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    if (window.lockOfSwitchInCP1 == false) {
      this.label.getComponent(cc.Label).string = "恭喜你，答对了";
    }
  },
  update: function update(dt) {}
});

cc._RF.pop();