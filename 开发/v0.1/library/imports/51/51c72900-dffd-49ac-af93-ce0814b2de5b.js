"use strict";
cc._RF.push(module, '51c72kA3/1JrK+TzggUst5b', 'changeback');
// scripts/changeback.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
    this.gameScene = cc.director.getScene()._name;
    console.log("this scene" + this.gameScene);
  },
  changeScene: function changeScene() {
    this.nextScene = window.games[this.gameScene];
    console.log("next Scene:" + this.nextScene);
    cc.director.loadScene(this.nextScene, this.onSceneLaunched);
  },
  onSceneLaunched: function onSceneLaunched() {
    if (window.InUse != "") {
      var i = 0;

      for (; i < window.Bag.length; i++) {
        if (window.Bag[i].name == window.InUse) {
          break;
        }
      }

      var id = window.toolMap[window.Bag[i].name];
      var tool = window.TOOLS[id];
      this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
      var self = this.useItem;
      cc.loader.loadRes(tool["picUrl"], cc.SpriteFrame, function (err, spriteFrame) {
        self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        console.log("self in: " + self.name);
      });
    }
  },
  update: function update() {// console.log("this scene" + this.gameScene);
    // console.log("next Scene:" + this.nextScene);
  }
});

cc._RF.pop();