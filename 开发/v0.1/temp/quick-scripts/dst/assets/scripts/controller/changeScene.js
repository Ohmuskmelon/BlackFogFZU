
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
    this.nextScene = "";
    this.currentDoor = "";
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
    return Global.itemType == "doors";
  },
  saveState: function saveState() {
    var camera = cc.find("Main Camera");
    window.player.pos_X = this.playerNode.getPosition().x;
    window.player.pos_Y = this.playerNode.getPosition().y;
    window.playerPosition[this.currentScene] = this.playerNode.getPosition();
    console.log(window.player.pos_X, window.player.pos_Y);
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
      console.log("id:" + id);
      var tool = window.TOOLS[id];
      console.log("tool:" + tool.name);
      this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
      var self = this.useItem;
      console.log("self out: " + self.name);
      cc.loader.loadRes(tool["picUrl"], cc.SpriteFrame, function (err, spriteFrame) {
        self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        console.log("self in: " + self.name);
      });
    }
  },
  changeScene: function changeScene() {
    this.currentScene = cc.director.getScene()._name;
    var scenes = window.scenes[this.currentScene];
    console.log("current scene:" + this.curreneScene);
    console.log("scenes: " + scenes);
    console.log(scenes);
    this.nextScene = scenes[this.currentDoor];
    console.log("next:" + this.nextScene);
    window.player.previousScene = this.currentScene;
    window.player.previousDoor = this.door.name;

    if (this.nextScene == "chp1_202") {
      if (window.lockOfCupsInCP1 != 1 || window.lockOfWashingMachineInCp1 != 1) {
        console.log(window.lockOfCupsInCP1);
        console.log(window.lockOfWashingMachineInCp1);
        console.log("wrong");
        return;
      }
    } // consol


    console.log(this.nextScene);
    cc.director.loadScene(this.nextScene, this.onSceneLaunched);
  },
  start: function start() {},
  update: function update() {
    // console.log(cc.director.getScene()._name);
    this.canshow = this.canShow();

    if (Global.itemType != "doors") {
      this.currentDoor = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvY2hhbmdlU2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkb29yIiwiTm9kZSIsInBsYXllck5vZGUiLCJvbkxvYWQiLCJjdXJyZW50U2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiX25hbWUiLCJuZXh0U2NlbmUiLCJjdXJyZW50RG9vciIsInVzZUl0ZW0iLCJmaW5kIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsImV2ZW50IiwiY2Fuc2hvdyIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwic2F2ZVN0YXRlIiwiY2hhbmdlU2NlbmUiLCJjYW5TaG93IiwiR2xvYmFsIiwiaXRlbVR5cGUiLCJjYW1lcmEiLCJ3aW5kb3ciLCJwbGF5ZXIiLCJwb3NfWCIsImdldFBvc2l0aW9uIiwieCIsInBvc19ZIiwieSIsInBsYXllclBvc2l0aW9uIiwib25TY2VuZUxhdW5jaGVkIiwiSW5Vc2UiLCJpIiwiQmFnIiwibGVuZ3RoIiwiaWQiLCJ0b29sTWFwIiwidG9vbCIsIlRPT0xTIiwic2VsZiIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic2NlbmVzIiwiY3VycmVuZVNjZW5lIiwicHJldmlvdXNTY2VuZSIsInByZXZpb3VzRG9vciIsImxvY2tPZkN1cHNJbkNQMSIsImxvY2tPZldhc2hpbmdNYWNoaW5lSW5DcDEiLCJsb2FkU2NlbmUiLCJzdGFydCIsInVwZGF0ZSIsIml0ZW1OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgs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SUFBMEIsQ0FBMUIsSUFDQTdCLE1BQU0sQ0FBQzhCLHlCQUFQLElBQW9DLENBRnRDLEVBR0U7UUFDQW5ELE9BQU8sQ0FBQ0MsR0FBUixDQUFZb0IsTUFBTSxDQUFDNkIsZUFBbkI7UUFDQWxELE9BQU8sQ0FBQ0MsR0FBUixDQUFZb0IsTUFBTSxDQUFDOEIseUJBQW5CO1FBQ0FuRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO1FBQ0E7TUFDRDtJQUNGLENBdEJXLENBdUJaOzs7SUFDQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0wsU0FBakI7SUFDQVosRUFBRSxDQUFDUyxRQUFILENBQVkyRCxTQUFaLENBQXNCLEtBQUt4RCxTQUEzQixFQUFzQyxLQUFLaUMsZUFBM0M7RUFDRCxDQS9GTTtFQWlHUHdCLEtBakdPLG1CQWlHQyxDQUFFLENBakdIO0VBbUdQQyxNQW5HTyxvQkFtR0U7SUFDUDtJQUNBLEtBQUs1QyxPQUFMLEdBQWUsS0FBS08sT0FBTCxFQUFmOztJQUNBLElBQUlDLE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixPQUF2QixFQUFnQztNQUM5QixLQUFLdEIsV0FBTCxHQUFtQixFQUFuQjtJQUNELENBRkQsTUFFTztNQUNMLEtBQUtBLFdBQUwsR0FBbUJxQixNQUFNLENBQUNxQyxRQUExQjtJQUNEO0VBQ0Y7QUEzR00sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGRvb3I6IGNjLk5vZGUsXG4gICAgcGxheWVyTm9kZTogY2MuTm9kZSxcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lO1xuICAgIHRoaXMubmV4dFNjZW5lID0gXCJcIjtcbiAgICB0aGlzLmN1cnJlbnREb29yID0gXCJcIjtcbiAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgY29uc29sZS5sb2coXCJ1c2VJdGVtOlwiICsgdGhpcy51c2VJdGVtLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwib25sb2FkXCIpO1xuICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICB9LFxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwicHJlc3Mgc3BhY2VcIik7XG4gICAgaWYgKHRoaXMuY2Fuc2hvdyAmJiBldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5zcGFjZSkge1xuICAgICAgY29uc29sZS5sb2coXCJwcmVzcyBzcGFjZVwiKTtcbiAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICB0aGlzLmNoYW5nZVNjZW5lKCk7XG4gICAgfVxuICB9LFxuXG4gIGNhblNob3coKSB7XG4gICAgcmV0dXJuIEdsb2JhbC5pdGVtVHlwZSA9PSBcImRvb3JzXCI7XG4gIH0sXG5cbiAgc2F2ZVN0YXRlKCkge1xuICAgIGxldCBjYW1lcmEgPSBjYy5maW5kKFwiTWFpbiBDYW1lcmFcIik7XG4gICAgXG4gICAgd2luZG93LnBsYXllci5wb3NfWCA9IHRoaXMucGxheWVyTm9kZS5nZXRQb3NpdGlvbigpLng7XG4gICAgd2luZG93LnBsYXllci5wb3NfWSA9IHRoaXMucGxheWVyTm9kZS5nZXRQb3NpdGlvbigpLnk7XG5cbiAgICB3aW5kb3cucGxheWVyUG9zaXRpb25bdGhpcy5jdXJyZW50U2NlbmVdID0gdGhpcy5wbGF5ZXJOb2RlLmdldFBvc2l0aW9uKCk7XG4gICAgY29uc29sZS5sb2cod2luZG93LnBsYXllci5wb3NfWCwgd2luZG93LnBsYXllci5wb3NfWSk7XG4gIH0sXG5cbiAgb25TY2VuZUxhdW5jaGVkKCkge1xuICAgIGlmICh3aW5kb3cuSW5Vc2UgIT0gXCJcIikge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZm9yICg7IGkgPCB3aW5kb3cuQmFnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh3aW5kb3cuQmFnW2ldLm5hbWUgPT0gd2luZG93LkluVXNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBpZCA9IHdpbmRvdy50b29sTWFwW3dpbmRvdy5CYWdbaV0ubmFtZV07XG4gICAgICBjb25zb2xlLmxvZyhcImlkOlwiICsgaWQpO1xuICAgICAgbGV0IHRvb2wgPSB3aW5kb3cuVE9PTFNbaWRdO1xuICAgICAgY29uc29sZS5sb2coXCJ0b29sOlwiICsgdG9vbC5uYW1lKTtcbiAgICAgIHRoaXMudXNlSXRlbSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL3VzZVRvb2wvYm9keVwiKTtcbiAgICAgIHZhciBzZWxmID0gdGhpcy51c2VJdGVtO1xuICAgICAgY29uc29sZS5sb2coXCJzZWxmIG91dDogXCIgKyBzZWxmLm5hbWUpO1xuICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXG4gICAgICAgIHRvb2xbXCJwaWNVcmxcIl0sXG4gICAgICAgIGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgIHNlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGYgaW46IFwiICsgc2VsZi5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG5cbiAgY2hhbmdlU2NlbmUoKSB7XG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lO1xuICAgIGxldCBzY2VuZXMgPSB3aW5kb3cuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lXTtcbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2NlbmU6XCIrdGhpcy5jdXJyZW5lU2NlbmUpO1xuICAgIGNvbnNvbGUubG9nKFwic2NlbmVzOiBcIiArIHNjZW5lcyk7XG4gICAgY29uc29sZS5sb2coc2NlbmVzKTtcbiAgICB0aGlzLm5leHRTY2VuZSA9IHNjZW5lc1t0aGlzLmN1cnJlbnREb29yXTtcbiAgICBjb25zb2xlLmxvZyhcIm5leHQ6XCIgKyB0aGlzLm5leHRTY2VuZSk7XG5cbiAgICB3aW5kb3cucGxheWVyLnByZXZpb3VzU2NlbmUgPSB0aGlzLmN1cnJlbnRTY2VuZTtcbiAgICB3aW5kb3cucGxheWVyLnByZXZpb3VzRG9vciA9IHRoaXMuZG9vci5uYW1lO1xuICAgIFxuICAgIGlmICh0aGlzLm5leHRTY2VuZSA9PSBcImNocDFfMjAyXCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgd2luZG93LmxvY2tPZkN1cHNJbkNQMSAhPSAxIHx8XG4gICAgICAgIHdpbmRvdy5sb2NrT2ZXYXNoaW5nTWFjaGluZUluQ3AxICE9IDFcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9ja09mQ3Vwc0luQ1AxKTtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2tPZldhc2hpbmdNYWNoaW5lSW5DcDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndyb25nXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbFxuICAgIGNvbnNvbGUubG9nKHRoaXMubmV4dFNjZW5lKTtcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5uZXh0U2NlbmUsIHRoaXMub25TY2VuZUxhdW5jaGVkKTtcbiAgfSxcblxuICBzdGFydCgpIHt9LFxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lKTtcbiAgICB0aGlzLmNhbnNob3cgPSB0aGlzLmNhblNob3coKTtcbiAgICBpZiAoR2xvYmFsLml0ZW1UeXBlICE9IFwiZG9vcnNcIikge1xuICAgICAgdGhpcy5jdXJyZW50RG9vciA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudERvb3IgPSBHbG9iYWwuaXRlbU5hbWU7XG4gICAgfVxuICB9LFxufSk7XG4iXX0=