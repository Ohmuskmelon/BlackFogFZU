"use strict";
cc._RF.push(module, 'ef98979pWpHTJArOZxjW6tp', 'tool');
// scripts/tool/tool.js

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
  onLoad: function onLoad() {
    this.tt = 0;
    this.playerNode = cc.find("Canvas/bg/player");
    this.name = this.node.name;

    if (window.TOOLS[window.toolMap[this.name]].inBag) {
      this.node.active = false;
    }

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  start: function start() {},
  ToolAction: function ToolAction(tt) {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos);

    if (dis <= 200) {
      this.isIn = true;
    } else {
      this.isIn = false;
    }
  },
  onKeyDown: function onKeyDown(event) {
    if (this.isIn) {
      console.log(this.node.name);

      if (event.keyCode == cc.macro.KEY.k) {
        if (!window.TOOLS[window.toolMap[this.name]].inBag) {
          window.TOOLS[window.toolMap[this.name]].inBag = true;
          window.Bag.push(window.TOOLS[window.toolMap[this.name]]);

          for (var key in window.Bag) {
            console.log(window.Bag[key].name);
          }

          this.node.active = false;
          this.tip.active = false; // Items.InArr[Items.CloseItem[this.name]] = 1;
        }
      }
    }
  },
  update: function update(dt) {
    this.tt += dt;

    if (this.tt >= 0.3) {
      this.ToolAction(this.tt);
      this.tt = 0; // console.log(window.Bag);
    }
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  }
});

cc._RF.pop();