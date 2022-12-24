"use strict";
cc._RF.push(module, '7a636VHHQhEU5GkurZMX19X', '0');
// scripts/0.js

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
    window.latticeDecryptionInCP2 = 0;
    window.qwnum = [-1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1]; //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)

    var index = 0;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 0;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    for (var i = 0; i <= 15; i++) {
      if (qwnum[i] != 1) break;

      if (i == 15 && latticeDecryptionInCP2 == 0) {
        latticeDecryptionInCP2 = 1;
        console.log("succeed");
      }
    }
  }
});

cc._RF.pop();