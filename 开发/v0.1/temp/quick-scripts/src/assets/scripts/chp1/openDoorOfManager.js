"use strict";
cc._RF.push(module, '4bd494lnAFIJbNMT5fL/a0M', 'openDoorOfManager');
// scripts/chp1/openDoorOfManager.js

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
    itemNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    if (window.Items['chp1_一楼大厅']["F1宿管房门"].used == true) {
      cc.find("Canvas/bg/doors/door1").active = true;
      this.itemNode.active = false;
    }
  }
});

cc._RF.pop();