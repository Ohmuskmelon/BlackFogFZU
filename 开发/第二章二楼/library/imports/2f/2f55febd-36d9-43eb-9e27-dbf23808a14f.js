"use strict";
cc._RF.push(module, '2f55f69NtlD654n2/I4CKFP', 'tips');
// scripts/tip/tips.js

"use strict";

// let text = [
//     { state: 'space', content: 'press SPACE to load another scene' },
//     { state: 'j', content: 'press j to talk to the ghost' },
//     { state: 'k', content: 'press k to take the tool' },
// ]
var text = new Map();
text.set('doors', 'press SPACE to load another scene');
text.set('npcs', 'press j to talk to the npc');
text.set('tools', 'press k to take the tool');
text.set('items', 'press r to use the tool');
text.set('games', 'press g to start the game');
var Key = {
  space: 0,
  j: 1,
  k: 2
};
cc.Class({
  "extends": cc.Component,
  properties: {
    textLable: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  init: function init() {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0;
    this.textIndex = -1;
    this.isShowed = false;
    this.textLable = this.node.getChildByName("textLabel").getComponent(cc.Label);
  },
  onLoad: function onLoad() {
    this.init();
  },
  setTextData: function setTextData(textData) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.nowText = textData;
    this.textLable.string = '';
  },
  canShow: function canShow() {
    return Global.itemType != ' ';
  },
  showContext: function showContext(dt) {
    this.tt += dt;

    if (!this.isShowed) {
      console.log("type:" + Global.itemType);
      this.setTextData(text.get(Global.itemType));

      if (this.tt >= 0.05) {
        if (this.textLable.string.length < this.nowText.length) {
          this.textLable.string = this.nowText.slice(0, this.textLable.string.length + 1);
        } else {
          this.textEnd = true;
          this.isShowed = true;
        }

        this.tt = 0;
      }
    }
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  onDisable: function onDisable() {
    this.textLable.string = '';
    this.init();
  },
  start: function start() {},
  update: function update(dt) {
    this.showContext(dt);
  }
});

cc._RF.pop();