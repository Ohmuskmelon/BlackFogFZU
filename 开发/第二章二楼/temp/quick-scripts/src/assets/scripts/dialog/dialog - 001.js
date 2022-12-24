"use strict";
cc._RF.push(module, 'ab8caVBfEBHpJaZ+h6wgNHk', 'dialog - 001');
// scripts/dialog/dialog - 001.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var roleMap = {
  1: {
    name: "player",
    url: "role/player"
  },
  2: {
    name: "npc1",
    url: ""
  }
};
var defaultContents = [{
  role: 2,
  content: "Welcome to FZU,hhhhh"
}, {
  role: 1,
  content: "Hello,I'm Huiker"
} //当前的testData
];
cc.Class({
  "extends": cc.Component,
  properties: {
    picSprite: cc.Sprite,
    nameLabel: cc.Label,
    textLabel: cc.Label,
    nodeBody: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // this.node.getChildByName("body").active = false;
    this.nodeBody = this.node.getChildByName("body");
    this.nodeBody.active = false;
    this.canTalk = false;
    this.node.active = true;
    this.npcName = ' ';
    this.initDialog();
    console.log("dialog success");
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(event) {
    if (event.keyCode == cc.macro.KEY.j && this.canShowDialog()) {
      this.nodeBody.active = true;
      this.showDialog();
      console.log("press j to talk");
      console.log(this.node.name);
    }
  },
  start: function start() {},
  canShowDialog: function canShowDialog() {
    if (Global.itemType == "npcs") {
      return true;
    }

    return false;
  },
  //初始化对话内容
  initContent: function initContent() {
    console.log(Global.currentScene);
    var content = Dialog.contents[Global.currentScene]; // console.log(content);

    if (Global.itemType != 'npcs' || Global.itemName == ' ') {
      return defaultContents;
    }

    return content[Global.itemName];
  },
  //初始化对话系统
  initDialog: function initDialog() {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.contentArr = defaultContents;
    this.textIndex = -1;
    this.textLabel = this.nodeBody.getChildByName("textLabel").getComponent(cc.Label);
    this.nameLabel = this.nodeBody.getChildByName("nameLabel").getComponent(cc.Label);
    this.textLabel.string = '';
  },
  // 显示对话的逻辑
  showDialog: function showDialog() {
    if (++this.textIndex < this.contentArr.length) {
      console.log("current index:" + this.textIndex);
      this.setTextData(this.contentArr[this.textIndex]); // console.log(this.contentArr[this.textIndex].content);
    } else {
      //关闭对话框
      this.closeDialog();
      this.textIndex = -1;
    }
  },
  setTextData: function setTextData(textData) {
    var _this = this;

    // 一行尚未播放完
    if (!this.textEnd) return;
    this.textEnd = false;
    this.nameLabel.string = roleMap[textData.role].name; //textData是角色编号 从roleMap中获取角色的名字

    this.textLabel.string = '';
    this.nowText = textData.content; // 修改头像

    if (this.canTalk && this.npcName != ' ') {
      roleMap[2].url = "role/" + Global.currentScene + "/" + Global.itemName;
      console.log(roleMap[textData.role].url);
    }

    cc.resources.load(roleMap[textData.role].url, cc.SpriteFrame, function (err, texture) {
      _this.picSprite.spriteFrame = texture;
    });
  },
  showContext: function showContext(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.02) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }

    console.log("this textLabel: " + this.textLabel.string);
  },
  closeDialog: function closeDialog() {
    // 直接不显示当前的节点
    this.nodeBody.active = false;
  },
  update: function update(dt) {
    this.canTalk = this.canShowDialog();

    if (this.canTalk && this.npcName != Global.itemName) {
      console.log(this.npcName);
      this.npcName = Global.itemName;
      var content = this.initContent();
      console.log(content);
      this.contentArr = content;
    }

    if (this.canTalk) {
      this.showContext(dt);
    } else {
      this.nodeBody.active = false;
    }
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  }
});

cc._RF.pop();