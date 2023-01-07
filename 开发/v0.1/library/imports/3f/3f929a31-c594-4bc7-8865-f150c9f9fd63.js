"use strict";
cc._RF.push(module, '3f929oxxZRLx4hl8VDJ+f1j', 'gameController');
// scripts/games/gameController.js

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
    tip: cc.Node,
    playerNode: cc.Node,
    node: cc.Node
  },
  start: function start() {
    this.scene = Global.currentScene;
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.isIn = false;
    this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  canStartGame: function canStartGame() {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos);
    console.log("dis:" + dis);

    if (dis <= 100) {
      return true;
    } else {
      return false;
    }
  },
  onKeyDown: function onKeyDown(event) {
    this.isIn = this.canStartGame();
    console.log("In:" + this.isIn);

    if (this.isIn) {
      if (event.keyCode == cc.macro.KEY.g) {
        this.saveState();
        this.changeScene();
      }
    }
  },
  changeScene: function changeScene() {
    var game = this.node.name;
    console.log("games: " + game);
    this.nextScene = game;
    cc.director.loadScene(this.nextScene, this.onSceneLaunched);
  },
  saveState: function saveState() {
    window.player.pos_X = this.playerNode.getPosition().x;
    window.player.pos_Y = this.playerNode.getPosition().y;
    window.player.enterGame = true;
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
  update: function update(dt) {
    if (Global.itemType == 'games' && Global.itemName == this.name) {
      this.enterGame();
    }
  }
});

cc._RF.pop();