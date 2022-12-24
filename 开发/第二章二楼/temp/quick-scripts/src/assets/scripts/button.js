"use strict";
cc._RF.push(module, '3b14c8Gs9RI4ptogT/k0CVp', 'button');
// scripts/button.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.count = 0;
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
      var paper = cc.find("Canvas/color2");

      if (count == 0) {
        cc.loader.loadRes("color/color1", cc.SpriteFrame, function (err, spriteFrame) {
          paper.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        count++;
      } else {
        cc.loader.loadRes("color/color3", cc.SpriteFrame, function (err, spriteFrame) {
          paper.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
      }
    }.bind(this), this);
  }
} // update (dt) {},
);

cc._RF.pop();