"use strict";
cc._RF.push(module, 'cefa2JvhtNMBbmCeB7CFHoh', 'F1orF2');
// scripts/chp1/F1orF2.js

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
  goUpstair: function goUpstair() {
    cc.director.loadScene("chp1_三楼走廊");
  },
  goDownstair: function goDownstair() {
    cc.director.loadScene("chp1_一楼大厅");
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();