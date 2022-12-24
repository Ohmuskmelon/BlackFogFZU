
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/changeScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvY2hhbmdlU2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkb29yIiwiTm9kZSIsInBsYXllck5vZGUiLCJvbkxvYWQiLCJjdXJyZW50U2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiX25hbWUiLCJuZXh0U2NlbmUiLCJjdXJyZW50RG9vciIsInVzZUl0ZW0iLCJmaW5kIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsImV2ZW50IiwiY2Fuc2hvdyIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwic2F2ZVN0YXRlIiwiY2hhbmdlU2NlbmUiLCJjYW5TaG93IiwiR2xvYmFsIiwiaXRlbVR5cGUiLCJ3aW5kb3ciLCJwbGF5ZXIiLCJwb3NfWCIsImdldFBvc2l0aW9uIiwieCIsInBvc19ZIiwieSIsIm9uU2NlbmVMYXVuY2hlZCIsIkluVXNlIiwiaSIsIkJhZyIsImxlbmd0aCIsImlkIiwidG9vbE1hcCIsInRvb2wiLCJUT09MUyIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNjZW5lcyIsImxvYWRTY2VuZSIsInN0YXJ0IiwidXBkYXRlIiwiaXRlbU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxJQUFJLEVBQUNKLEVBQUUsQ0FBQ0ssSUFEQTtJQUVSQyxVQUFVLEVBQUNOLEVBQUUsQ0FBQ0s7RUFGTixDQUhQ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QixHQUEyQ0EsV0FBM0M7UUFDQXpDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVltQyxJQUFJLENBQUNsQyxJQUE3QjtNQUNILENBSEQ7SUFJSDtFQUNKLENBM0RJO0VBNkRMYyxXQTdESyx5QkE2RFE7SUFDVCxJQUFJNEIsTUFBTSxHQUFHeEIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjLEtBQUtwRCxZQUFuQixDQUFiO0lBQ0FRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVcyQyxNQUF2QjtJQUNBLEtBQUtoRCxTQUFMLEdBQWlCZ0QsTUFBTSxDQUFDLEtBQUsvQyxXQUFOLENBQXZCO0lBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVEsS0FBS0wsU0FBekI7SUFDQVosRUFBRSxDQUFDUyxRQUFILENBQVlvRCxTQUFaLENBQXNCLEtBQUtqRCxTQUEzQixFQUFxQyxLQUFLK0IsZUFBMUM7RUFFSCxDQXBFSTtFQXNFTG1CLEtBdEVLLG1CQXNFSSxDQUVSLENBeEVJO0VBMEVMQyxNQTFFSyxvQkEwRUs7SUFDTjtJQUNBLEtBQUtyQyxPQUFMLEdBQWUsS0FBS08sT0FBTCxFQUFmOztJQUNBLElBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxJQUFpQixPQUFwQixFQUE0QjtNQUN4QixLQUFLdEIsV0FBTCxHQUFtQixFQUFuQjtJQUNILENBRkQsTUFHSTtNQUNBLEtBQUtBLFdBQUwsR0FBbUJxQixNQUFNLENBQUM4QixRQUExQjtJQUNIO0VBQ0o7QUFuRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZG9vcjpjYy5Ob2RlLFxuICAgICAgICBwbGF5ZXJOb2RlOmNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lO1xuICAgICAgICB0aGlzLm5leHRTY2VuZSA9ICcnO1xuICAgICAgICB0aGlzLmN1cnJlbnREb29yID0gJyc7XG4gICAgICAgIHRoaXMudXNlSXRlbSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL3VzZVRvb2wvYm9keVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VJdGVtOlwiK3RoaXMudXNlSXRlbS5uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbmxvYWRcIik7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBvbktleURvd24oZXZlbnQpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInByZXNzIHNwYWNlXCIpO1xuICAgICAgICBpZih0aGlzLmNhbnNob3cgJiYgZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuc3BhY2Upe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcmVzcyBzcGFjZVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjZW5lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuU2hvdygpe1xuICAgICAgICByZXR1cm4gR2xvYmFsLml0ZW1UeXBlID09ICdkb29ycyc7XG4gICAgfSxcblxuICAgIHNhdmVTdGF0ZSgpe1xuICAgICAgICB3aW5kb3cucGxheWVyLnBvc19YID0gdGhpcy5wbGF5ZXJOb2RlLmdldFBvc2l0aW9uKCkueDtcbiAgICAgICAgd2luZG93LnBsYXllci5wb3NfWSA9IHRoaXMucGxheWVyTm9kZS5nZXRQb3NpdGlvbigpLnk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5wbGF5ZXIucG9zX1ggLHdpbmRvdy5wbGF5ZXIucG9zX1kpOyBcbiAgICB9LFxuXG4gICAgb25TY2VuZUxhdW5jaGVkKCl7XG4gICAgICAgIGlmKHdpbmRvdy5JblVzZSAhPScnKXtcbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgZm9yICg7IGkgPCB3aW5kb3cuQmFnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LkJhZ1tpXS5uYW1lID09IHdpbmRvdy5JblVzZSl7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpZCA9IHdpbmRvdy50b29sTWFwW3dpbmRvdy5CYWdbaV0ubmFtZV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlkOlwiKyBpZCk7XG4gICAgICAgICAgICBsZXQgdG9vbCA9IHdpbmRvdy5UT09MU1tpZF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvb2w6XCIrdG9vbC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXNlSXRlbSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL3VzZVRvb2wvYm9keVwiKTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcy51c2VJdGVtO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxmIG91dDogXCIrc2VsZi5uYW1lKTtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHRvb2xbJ3BpY1VybCddLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxmIGluOiBcIitzZWxmLm5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hhbmdlU2NlbmUoKXtcbiAgICAgICAgbGV0IHNjZW5lcyA9IHdpbmRvdy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVdO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNjZW5lczogXCIrc2NlbmVzKTtcbiAgICAgICAgdGhpcy5uZXh0U2NlbmUgPSBzY2VuZXNbdGhpcy5jdXJyZW50RG9vcl07XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV4dDpcIit0aGlzLm5leHRTY2VuZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLm5leHRTY2VuZSx0aGlzLm9uU2NlbmVMYXVuY2hlZCk7XG4gICAgICAgIFxuICAgIH0sXG4gIFxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWUpO1xuICAgICAgICB0aGlzLmNhbnNob3cgPSB0aGlzLmNhblNob3coKTtcbiAgICAgICAgaWYoR2xvYmFsLml0ZW1UeXBlIT0nZG9vcnMnKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERvb3IgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9vciA9IEdsb2JhbC5pdGVtTmFtZTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==