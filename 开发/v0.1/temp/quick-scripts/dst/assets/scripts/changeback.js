
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/changeback.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NoYW5nZWJhY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ1c2VJdGVtIiwiZmluZCIsImdhbWVTY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJfbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VTY2VuZSIsIm5leHRTY2VuZSIsIndpbmRvdyIsImdhbWVzIiwibG9hZFNjZW5lIiwib25TY2VuZUxhdW5jaGVkIiwiSW5Vc2UiLCJpIiwiQmFnIiwibGVuZ3RoIiwibmFtZSIsImlkIiwidG9vbE1hcCIsInRvb2wiLCJUT09MUyIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFLEVBSEw7RUFLUEMsTUFMTyxvQkFLRTtJQUNQLEtBQUtDLE9BQUwsR0FBZUwsRUFBRSxDQUFDTSxJQUFILENBQVEscUNBQVIsQ0FBZjtJQUNBLEtBQUtDLFNBQUwsR0FBaUJQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxLQUF4QztJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlLEtBQUtMLFNBQWhDO0VBQ0QsQ0FUTTtFQVdQTSxXQVhPLHlCQVdPO0lBQ1osS0FBS0MsU0FBTCxHQUFpQkMsTUFBTSxDQUFDQyxLQUFQLENBQWEsS0FBS1QsU0FBbEIsQ0FBakI7SUFDQUksT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQWdCLEtBQUtFLFNBQWpDO0lBQ0FkLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZUyxTQUFaLENBQXNCLEtBQUtILFNBQTNCLEVBQXNDLEtBQUtJLGVBQTNDO0VBQ0QsQ0FmTTtFQWlCUEEsZUFqQk8sNkJBaUJXO0lBQ2hCLElBQUlILE1BQU0sQ0FBQ0ksS0FBUCxJQUFnQixFQUFwQixFQUF3QjtNQUN0QixJQUFJQyxDQUFDLEdBQUcsQ0FBUjs7TUFDQSxPQUFPQSxDQUFDLEdBQUdMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXQyxNQUF0QixFQUE4QkYsQ0FBQyxFQUEvQixFQUFtQztRQUNqQyxJQUFJTCxNQUFNLENBQUNNLEdBQVAsQ0FBV0QsQ0FBWCxFQUFjRyxJQUFkLElBQXNCUixNQUFNLENBQUNJLEtBQWpDLEVBQXdDO1VBQ3RDO1FBQ0Q7TUFDRjs7TUFDRCxJQUFJSyxFQUFFLEdBQUdULE1BQU0sQ0FBQ1UsT0FBUCxDQUFlVixNQUFNLENBQUNNLEdBQVAsQ0FBV0QsQ0FBWCxFQUFjRyxJQUE3QixDQUFUO01BRUEsSUFBSUcsSUFBSSxHQUFHWCxNQUFNLENBQUNZLEtBQVAsQ0FBYUgsRUFBYixDQUFYO01BRUEsS0FBS25CLE9BQUwsR0FBZUwsRUFBRSxDQUFDTSxJQUFILENBQVEscUNBQVIsQ0FBZjtNQUNBLElBQUlzQixJQUFJLEdBQUcsS0FBS3ZCLE9BQWhCO01BRUFMLEVBQUUsQ0FBQzZCLE1BQUgsQ0FBVUMsT0FBVixDQUNFSixJQUFJLENBQUMsUUFBRCxDQUROLEVBRUUxQixFQUFFLENBQUMrQixXQUZMLEVBR0UsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1FBQzFCTCxJQUFJLENBQUNNLFlBQUwsQ0FBa0JsQyxFQUFFLENBQUNtQyxNQUFyQixFQUE2QkYsV0FBN0IsR0FBMkNBLFdBQTNDO1FBQ0F0QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFjZ0IsSUFBSSxDQUFDTCxJQUEvQjtNQUNELENBTkg7SUFRRDtFQUNGLENBekNNO0VBMENQYSxNQTFDTyxvQkEwQ0UsQ0FDUDtJQUNBO0VBQ0Q7QUE3Q00sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge30sXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMudXNlSXRlbSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL3VzZVRvb2wvYm9keVwiKTtcbiAgICB0aGlzLmdhbWVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWU7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIHNjZW5lXCIgKyB0aGlzLmdhbWVTY2VuZSk7XG4gIH0sXG5cbiAgY2hhbmdlU2NlbmUoKSB7XG4gICAgdGhpcy5uZXh0U2NlbmUgPSB3aW5kb3cuZ2FtZXNbdGhpcy5nYW1lU2NlbmVdO1xuICAgIGNvbnNvbGUubG9nKFwibmV4dCBTY2VuZTpcIiArIHRoaXMubmV4dFNjZW5lKTtcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5uZXh0U2NlbmUsIHRoaXMub25TY2VuZUxhdW5jaGVkKTtcbiAgfSxcblxuICBvblNjZW5lTGF1bmNoZWQoKSB7XG4gICAgaWYgKHdpbmRvdy5JblVzZSAhPSBcIlwiKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBmb3IgKDsgaSA8IHdpbmRvdy5CYWcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHdpbmRvdy5CYWdbaV0ubmFtZSA9PSB3aW5kb3cuSW5Vc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGlkID0gd2luZG93LnRvb2xNYXBbd2luZG93LkJhZ1tpXS5uYW1lXTtcblxuICAgICAgbGV0IHRvb2wgPSB3aW5kb3cuVE9PTFNbaWRdO1xuXG4gICAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMudXNlSXRlbTtcblxuICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXG4gICAgICAgIHRvb2xbXCJwaWNVcmxcIl0sXG4gICAgICAgIGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgIHNlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGYgaW46IFwiICsgc2VsZi5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgc2NlbmVcIiArIHRoaXMuZ2FtZVNjZW5lKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5leHQgU2NlbmU6XCIgKyB0aGlzLm5leHRTY2VuZSk7XG4gIH0sXG59KTtcbiJdfQ==