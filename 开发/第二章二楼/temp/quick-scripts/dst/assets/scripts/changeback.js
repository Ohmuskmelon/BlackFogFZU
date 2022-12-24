
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
    if (window.InUse != '') {
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
      cc.loader.loadRes(tool['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
        self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        console.log("self in: " + self.name);
      });
    }
  },
  update: function update() {
    console.log("this scene" + this.gameScene);
    console.log("next Scene:" + this.nextScene);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NoYW5nZWJhY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ1c2VJdGVtIiwiZmluZCIsImdhbWVTY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJfbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VTY2VuZSIsIm5leHRTY2VuZSIsIndpbmRvdyIsImdhbWVzIiwibG9hZFNjZW5lIiwib25TY2VuZUxhdW5jaGVkIiwiSW5Vc2UiLCJpIiwiQmFnIiwibGVuZ3RoIiwibmFtZSIsImlkIiwidG9vbE1hcCIsInRvb2wiLCJUT09MUyIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLEVBSFA7RUFNTEMsTUFOSyxvQkFNRztJQUNKLEtBQUtDLE9BQUwsR0FBZUwsRUFBRSxDQUFDTSxJQUFILENBQVEscUNBQVIsQ0FBZjtJQUNBLEtBQUtDLFNBQUwsR0FBaUJQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxLQUF4QztJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlLEtBQUtMLFNBQWhDO0VBQ0gsQ0FWSTtFQVlMTSxXQVpLLHlCQVlTO0lBQ1YsS0FBS0MsU0FBTCxHQUFpQkMsTUFBTSxDQUFDQyxLQUFQLENBQWEsS0FBS1QsU0FBbEIsQ0FBakI7SUFDQUksT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQWdCLEtBQUtFLFNBQWpDO0lBQ0FkLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZUyxTQUFaLENBQXNCLEtBQUtILFNBQTNCLEVBQXFDLEtBQUtJLGVBQTFDO0VBQ0gsQ0FoQkk7RUFrQkxBLGVBbEJLLDZCQWtCWTtJQUNiLElBQUdILE1BQU0sQ0FBQ0ksS0FBUCxJQUFlLEVBQWxCLEVBQXFCO01BQ2pCLElBQUlDLENBQUMsR0FBRyxDQUFSOztNQUNBLE9BQU9BLENBQUMsR0FBR0wsTUFBTSxDQUFDTSxHQUFQLENBQVdDLE1BQXRCLEVBQThCRixDQUFDLEVBQS9CLEVBQW1DO1FBQy9CLElBQUdMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXRCxDQUFYLEVBQWNHLElBQWQsSUFBc0JSLE1BQU0sQ0FBQ0ksS0FBaEMsRUFBc0M7VUFDbEM7UUFDSDtNQUNKOztNQUNELElBQUlLLEVBQUUsR0FBR1QsTUFBTSxDQUFDVSxPQUFQLENBQWVWLE1BQU0sQ0FBQ00sR0FBUCxDQUFXRCxDQUFYLEVBQWNHLElBQTdCLENBQVQ7TUFFQSxJQUFJRyxJQUFJLEdBQUdYLE1BQU0sQ0FBQ1ksS0FBUCxDQUFhSCxFQUFiLENBQVg7TUFFQSxLQUFLbkIsT0FBTCxHQUFlTCxFQUFFLENBQUNNLElBQUgsQ0FBUSxxQ0FBUixDQUFmO01BQ0EsSUFBSXNCLElBQUksR0FBRyxLQUFLdkIsT0FBaEI7TUFFQUwsRUFBRSxDQUFDNkIsTUFBSCxDQUFVQyxPQUFWLENBQWtCSixJQUFJLENBQUMsUUFBRCxDQUF0QixFQUFrQzFCLEVBQUUsQ0FBQytCLFdBQXJDLEVBQWtELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtRQUMxRUwsSUFBSSxDQUFDTSxZQUFMLENBQWtCbEMsRUFBRSxDQUFDbUMsTUFBckIsRUFBNkJGLFdBQTdCLEdBQTJDQSxXQUEzQztRQUNBdEIsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWWdCLElBQUksQ0FBQ0wsSUFBN0I7TUFDSCxDQUhEO0lBSUg7RUFDSixDQXRDSTtFQXVDTGEsTUF2Q0ssb0JBdUNHO0lBQ0p6QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlLEtBQUtMLFNBQWhDO0lBQ0FJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFnQixLQUFLRSxTQUFqQztFQUNIO0FBMUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgfSxcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5fbmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIHNjZW5lXCIgKyB0aGlzLmdhbWVTY2VuZSk7XG4gICAgfSxcbiAgICBcbiAgICBjaGFuZ2VTY2VuZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0U2NlbmUgPSB3aW5kb3cuZ2FtZXNbdGhpcy5nYW1lU2NlbmVdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQgU2NlbmU6XCIgKyB0aGlzLm5leHRTY2VuZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLm5leHRTY2VuZSx0aGlzLm9uU2NlbmVMYXVuY2hlZCk7XG4gICAgfSxcblxuICAgIG9uU2NlbmVMYXVuY2hlZCgpe1xuICAgICAgICBpZih3aW5kb3cuSW5Vc2UgIT0nJyl7XG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIGZvciAoOyBpIDwgd2luZG93LkJhZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5CYWdbaV0ubmFtZSA9PSB3aW5kb3cuSW5Vc2Upe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaWQgPSB3aW5kb3cudG9vbE1hcFt3aW5kb3cuQmFnW2ldLm5hbWVdO1xuXG4gICAgICAgICAgICBsZXQgdG9vbCA9IHdpbmRvdy5UT09MU1tpZF07XG5cbiAgICAgICAgICAgIHRoaXMudXNlSXRlbSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL3VzZVRvb2wvYm9keVwiKTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcy51c2VJdGVtO1xuXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh0b29sWydwaWNVcmwnXSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZiBpbjogXCIrc2VsZi5uYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGUoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIHNjZW5lXCIgKyB0aGlzLmdhbWVTY2VuZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV4dCBTY2VuZTpcIiArIHRoaXMubmV4dFNjZW5lKTtcbiAgICB9XG59KTtcbiJdfQ==