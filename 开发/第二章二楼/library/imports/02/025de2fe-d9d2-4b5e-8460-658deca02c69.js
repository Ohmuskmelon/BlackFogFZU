"use strict";
cc._RF.push(module, '025deL+2dJLXoRgZY3soCxp', 'item');
// scripts/item/item.js

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
  start: function start() {
    this.name = this.node.name;
    this.scene = Global.currentScene;
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.isUsed = false;
    this.item = window.Items[this.scene][this.name].item;
    this.tool = window.Items[this.scene][this.name].tool;
  },
  contactWithTool: function contactWithTool() {
    this.isUsed = window.Items[this.scene][this.name].used;

    if (this.tool == window.Inuse) {
      if (this.isUsed) {
        this.tip.getChildByName("textLabel").getComponent(cc.Label).string = this.item.notUsedInfo;
      } else {
        window.Items[this.scene][this.name].used = true;
        this.tip.getChildByName("textLabel").getComponent(cc.Label).string = this.item.usedInfo;
      }
    } else {
      this.tip.active = true;
    }
  },
  update: function update(dt) {
    if (Global.itemType == 'items' && Global.itemName == this.name) {
      this.contactWithTool();
    }
  }
});

cc._RF.pop();