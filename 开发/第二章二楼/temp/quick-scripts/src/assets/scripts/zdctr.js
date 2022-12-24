"use strict";
cc._RF.push(module, 'f91b5vD5LJK2YJdSyCeT5HS', 'zdctr');
// scripts/zdctr.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var usetool = cc.find("Canvas/bg/收银柜台/账单");
      cc.loader.loadRes("bigbill", cc.SpriteFrame, function (err, spriteFrame) {
        usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      });
    }.bind(this), this);
  } // update (dt) {},

});

cc._RF.pop();