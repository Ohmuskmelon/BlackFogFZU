"use strict";
cc._RF.push(module, '99f09ksAipGYYkPRoekc4sK', '301_phone');
// scripts/game_chp1/cp1_301_wall/301_phone.js

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
    phoneView: cc.Node // foo: {
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
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    if (!window.TOOLS[window.toolMap["手机"]].inBag) {
      this.node.active = false;
    }
  },
  displayPhone: function displayPhone() {
    this.phoneView.active = true;
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();