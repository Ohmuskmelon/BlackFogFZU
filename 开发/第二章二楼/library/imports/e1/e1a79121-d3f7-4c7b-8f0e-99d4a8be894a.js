"use strict";
cc._RF.push(module, 'e1a79Eh0/dMe48OmdSovolK', 'changeScene');
// scripts/controller/changeScene.js

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
    door: cc.Node,
    playerNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.currentScene = cc.director.getScene()._name;
    this.nextScene = '';
    this.currentDoor = '';
    this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
    console.log("useItem:" + this.useItem.name);
    console.log("onload");
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(event) {
    // console.log("press space");
    if (this.canshow && event.keyCode == cc.macro.KEY.space) {
      console.log("press space");
      this.saveState();
      this.changeScene();
    }
  },
  canShow: function canShow() {
    return Global.itemType == 'doors';
  },
  saveState: function saveState() {
    window.player.pos_X = this.playerNode.getPosition().x;
    window.player.pos_Y = this.playerNode.getPosition().y;
    console.log(window.player.pos_X, window.player.pos_Y);
  },
  onSceneLaunched: function onSceneLaunched() {
    if (window.InUse != '') {
      var i = 0;

      for (; i < window.Bag.length; i++) {
        if (window.Bag[i].name == window.InUse) {
          break;
        }
      }

      var id = window.toolMap[window.Bag[i].name];
      console.log("id:" + id);
      var tool = window.TOOLS[id];
      console.log("tool:" + tool.name);
      this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
      var self = this.useItem;
      console.log("self out: " + self.name);
      cc.loader.loadRes(tool['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
        self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        console.log("self in: " + self.name);
      });
    }
  },
  changeScene: function changeScene() {
    var scenes = window.scenes[this.currentScene];
    console.log("scenes: " + scenes);
    this.nextScene = scenes[this.currentDoor];
    console.log("next:" + this.nextScene);
    cc.director.loadScene(this.nextScene, this.onSceneLaunched);
  },
  start: function start() {},
  update: function update() {
    // console.log(cc.director.getScene()._name);
    this.canshow = this.canShow();

    if (Global.itemType != 'doors') {
      this.currentDoor = '';
    } else {
      this.currentDoor = Global.itemName;
    }
  }
});

cc._RF.pop();