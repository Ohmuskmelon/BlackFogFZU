"use strict";
cc._RF.push(module, 'c9b7er95LNEUaUK+4wdErSz', 'trigger');
// scripts/tip/trigger.js

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
    tip: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  initNpc: function initNpc() {
    this.charType = this.node.parent.name;
    this.playerNode = cc.find("Canvas/bg/player/body");
    this.tt = 0;
    this.canShow = false;
  },
  onLoad: function onLoad() {
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.initNpc();
  },
  start: function start() {},
  itemAction: function itemAction(dt) {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos);

    if (dis < 100 && this.canShow == false) {
      Global.itemType = this.charType;
      Global.itemName = this.node.name;
      this.tip.active = true;
      this.canShow = true;
    } else {
      if (dis >= 100 && this.canShow == true) {
        this.tip.active = false;
        this.canShow = false;
        Global.itemType = ' ';
        Global.itemName = ' ';
      }
    }
  },
  update: function update(dt) {
    this.tt += dt;

    if (this.tt >= 0.3) {
      this.itemAction(dt);
      this.tt = 0;
    }
  }
});

cc._RF.pop();