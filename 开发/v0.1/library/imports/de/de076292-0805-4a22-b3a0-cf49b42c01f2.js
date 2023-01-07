"use strict";
cc._RF.push(module, 'de076KSCAVKIrOgz0m0LAHy', 'getphone');
// scripts/game_chp1/cp1_lock_302/getphone.js

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
    phone: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  getPhone: function getPhone() {
    this.phone.active = false;

    if (!window.TOOLS[window.toolMap["手机"]].inBag) {
      window.Bag.push(window.TOOLS[window.toolMap["手机"]]);
      window.TOOLS[window.toolMap["手机"]].inBag = true;

      for (var key in window.Bag) {
        console.log(window.Bag[key].name);
      }
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();