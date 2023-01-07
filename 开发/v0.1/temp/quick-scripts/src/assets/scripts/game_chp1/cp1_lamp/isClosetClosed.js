"use strict";
cc._RF.push(module, '88ff4RpqJRFDZc6kGqvp0UK', 'isClosetClosed');
// scripts/game_chp1/cp1_lamp/isClosetClosed.js

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
    openCloset: cc.Node // foo: {
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
  onLoad: function onLoad() {},
  start: function start() {
    console.log('window.lockOfClosetInCP1:', window.lockOfClosetInCP1);

    if (window.lockOfClosetInCP1) {
      this.openCloset.active = true;
      this.node.active = false;
    }
  } // update (dt) {},

});

cc._RF.pop();