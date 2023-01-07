
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/games/gameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVzL2dhbWVDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwIiwiTm9kZSIsInBsYXllck5vZGUiLCJub2RlIiwic3RhcnQiLCJzY2VuZSIsIkdsb2JhbCIsImN1cnJlbnRTY2VuZSIsImZpbmQiLCJpc0luIiwidXNlSXRlbSIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiY2FuU3RhcnRHYW1lIiwicF9wb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsImVfcG9zIiwiZGlzIiwiVmVjMiIsImRpc3RhbmNlIiwiY29uc29sZSIsImxvZyIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiZyIsInNhdmVTdGF0ZSIsImNoYW5nZVNjZW5lIiwiZ2FtZSIsIm5hbWUiLCJuZXh0U2NlbmUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uU2NlbmVMYXVuY2hlZCIsIndpbmRvdyIsInBsYXllciIsInBvc19YIiwiZ2V0UG9zaXRpb24iLCJ4IiwicG9zX1kiLCJ5IiwiZW50ZXJHYW1lIiwiSW5Vc2UiLCJpIiwiQmFnIiwibGVuZ3RoIiwiaWQiLCJ0b29sTWFwIiwidG9vbCIsIlRPT0xTIiwic2VsZiIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwidXBkYXRlIiwiZHQiLCJpdGVtVHlwZSIsIml0ZW1OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsR0FBRyxFQUFDSixFQUFFLENBQUNLLElBREM7SUFFUkMsVUFBVSxFQUFDTixFQUFFLENBQUNLLElBRk47SUFHUkUsSUFBSSxFQUFDUCxFQUFFLENBQUNLO0VBSEEsQ0FIUDtFQVNMRyxLQVRLLG1CQVNJO0lBQ0wsS0FBS0MsS0FBTCxHQUFhQyxNQUFNLENBQUNDLFlBQXBCO0lBQ0EsS0FBS1AsR0FBTCxHQUFXSixFQUFFLENBQUNZLElBQUgsQ0FBUSx3QkFBUixDQUFYO0lBQ0EsS0FBS0MsSUFBTCxHQUFZLEtBQVo7SUFDQSxLQUFLQyxPQUFMLEdBQWVkLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHFDQUFSLENBQWY7SUFDQVosRUFBRSxDQUFDZSxXQUFILENBQWVDLEVBQWYsQ0FBa0JoQixFQUFFLENBQUNpQixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELEVBQXFFLElBQXJFO0VBQ0gsQ0FmSTtFQWlCTEMsWUFqQkssMEJBaUJTO0lBQ1YsSUFBSUMsS0FBSyxHQUFHLEtBQUtoQixVQUFMLENBQWdCaUIscUJBQWhCLENBQXNDdkIsRUFBRSxDQUFDd0IsRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFSLENBQXRDLENBQVo7SUFDQSxJQUFJQyxLQUFLLEdBQUksS0FBS2xCLElBQUwsQ0FBVWdCLHFCQUFWLENBQWdDdkIsRUFBRSxDQUFDd0IsRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFSLENBQWhDLENBQWI7SUFDQSxJQUFJRSxHQUFHLEdBQUcxQixFQUFFLENBQUMyQixJQUFILENBQVFDLFFBQVIsQ0FBaUJILEtBQWpCLEVBQXdCSCxLQUF4QixDQUFWO0lBQ0FPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQU9KLEdBQW5COztJQUNBLElBQUlBLEdBQUcsSUFBSSxHQUFYLEVBQWdCO01BQ1osT0FBTyxJQUFQO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsT0FBTyxLQUFQO0lBQ0g7RUFDSixDQTNCSTtFQThCTE4sU0E5QksscUJBOEJLVyxLQTlCTCxFQThCWTtJQUNiLEtBQUtsQixJQUFMLEdBQVksS0FBS1EsWUFBTCxFQUFaO0lBQ0FRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQU0sS0FBS2pCLElBQXZCOztJQUNBLElBQUksS0FBS0EsSUFBVCxFQUFlO01BQ1gsSUFBSWtCLEtBQUssQ0FBQ0MsT0FBTixJQUFpQmhDLEVBQUUsQ0FBQ2lDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQyxFQUFxQztRQUNqQyxLQUFLQyxTQUFMO1FBQ0EsS0FBS0MsV0FBTDtNQUNIO0lBQ0o7RUFDSixDQXZDSTtFQXlDTEEsV0F6Q0sseUJBeUNRO0lBQ1QsSUFBSUMsSUFBSSxHQUFHLEtBQUsvQixJQUFMLENBQVVnQyxJQUFyQjtJQUNBVixPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFVUSxJQUF0QjtJQUNBLEtBQUtFLFNBQUwsR0FBaUJGLElBQWpCO0lBQ0F0QyxFQUFFLENBQUN5QyxRQUFILENBQVlDLFNBQVosQ0FBc0IsS0FBS0YsU0FBM0IsRUFBcUMsS0FBS0csZUFBMUM7RUFDSCxDQTlDSTtFQWdETFAsU0FoREssdUJBZ0RNO0lBQ1BRLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLEdBQXNCLEtBQUt4QyxVQUFMLENBQWdCeUMsV0FBaEIsR0FBOEJDLENBQXBEO0lBQ0FKLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSSxLQUFkLEdBQXNCLEtBQUszQyxVQUFMLENBQWdCeUMsV0FBaEIsR0FBOEJHLENBQXBEO0lBQ0FOLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTSxTQUFkLEdBQTBCLElBQTFCO0lBQ0F0QixPQUFPLENBQUNDLEdBQVIsQ0FBWWMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQTFCLEVBQWlDRixNQUFNLENBQUNDLE1BQVAsQ0FBY0ksS0FBL0M7RUFDSCxDQXJESTtFQXVETE4sZUF2REssNkJBdURZO0lBQ2IsSUFBR0MsTUFBTSxDQUFDUSxLQUFQLElBQWUsRUFBbEIsRUFBcUI7TUFDakIsSUFBSUMsQ0FBQyxHQUFHLENBQVI7O01BQ0EsT0FBT0EsQ0FBQyxHQUFHVCxNQUFNLENBQUNVLEdBQVAsQ0FBV0MsTUFBdEIsRUFBOEJGLENBQUMsRUFBL0IsRUFBbUM7UUFDL0IsSUFBR1QsTUFBTSxDQUFDVSxHQUFQLENBQVdELENBQVgsRUFBY2QsSUFBZCxJQUFzQkssTUFBTSxDQUFDUSxLQUFoQyxFQUFzQztVQUNsQztRQUNIO01BQ0o7O01BQ0QsSUFBSUksRUFBRSxHQUFHWixNQUFNLENBQUNhLE9BQVAsQ0FBZWIsTUFBTSxDQUFDVSxHQUFQLENBQVdELENBQVgsRUFBY2QsSUFBN0IsQ0FBVDtNQUNBVixPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFPMEIsRUFBbkI7TUFDQSxJQUFJRSxJQUFJLEdBQUdkLE1BQU0sQ0FBQ2UsS0FBUCxDQUFhSCxFQUFiLENBQVg7TUFDQTNCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVE0QixJQUFJLENBQUNuQixJQUF6QjtNQUNBLEtBQUt6QixPQUFMLEdBQWVkLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHFDQUFSLENBQWY7TUFDQSxJQUFJZ0QsSUFBSSxHQUFHLEtBQUs5QyxPQUFoQjtNQUNBZSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFhOEIsSUFBSSxDQUFDckIsSUFBOUI7TUFDQXZDLEVBQUUsQ0FBQzZELE1BQUgsQ0FBVUMsT0FBVixDQUFrQkosSUFBSSxDQUFDLFFBQUQsQ0FBdEIsRUFBa0MxRCxFQUFFLENBQUMrRCxXQUFyQyxFQUFrRCxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7UUFDMUVMLElBQUksQ0FBQ00sWUFBTCxDQUFrQmxFLEVBQUUsQ0FBQ21FLE1BQXJCLEVBQTZCRixXQUE3QixHQUEyQ0EsV0FBM0M7UUFDQXBDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVk4QixJQUFJLENBQUNyQixJQUE3QjtNQUNILENBSEQ7SUFJSDtFQUNKLENBM0VJO0VBOEVMNkIsTUE5RUssa0JBOEVHQyxFQTlFSCxFQThFTztJQUNSLElBQUczRCxNQUFNLENBQUM0RCxRQUFQLElBQW1CLE9BQW5CLElBQThCNUQsTUFBTSxDQUFDNkQsUUFBUCxJQUFtQixLQUFLaEMsSUFBekQsRUFBOEQ7TUFDMUQsS0FBS1ksU0FBTDtJQUNIO0VBQ0o7QUFsRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwOmNjLk5vZGUsXG4gICAgICAgIHBsYXllck5vZGU6Y2MuTm9kZSxcbiAgICAgICAgbm9kZTpjYy5Ob2RlXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IEdsb2JhbC5jdXJyZW50U2NlbmU7XG4gICAgICAgIHRoaXMudGlwID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS90aXBcIik7XG4gICAgICAgIHRoaXMuaXNJbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBjYW5TdGFydEdhbWUoKXtcbiAgICAgICAgbGV0IHBfcG9zID0gdGhpcy5wbGF5ZXJOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKTtcbiAgICAgICAgbGV0IGVfcG9zID0gIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XG4gICAgICAgIGxldCBkaXMgPSBjYy5WZWMyLmRpc3RhbmNlKGVfcG9zLCBwX3Bvcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlzOlwiK2Rpcyk7XG4gICAgICAgIGlmIChkaXMgPD0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICB0aGlzLmlzSW4gPSB0aGlzLmNhblN0YXJ0R2FtZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluOlwiK3RoaXMuaXNJbik7XG4gICAgICAgIGlmICh0aGlzLmlzSW4pIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNjZW5lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hhbmdlU2NlbmUoKXtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lczogXCIrZ2FtZSk7XG4gICAgICAgIHRoaXMubmV4dFNjZW5lID0gZ2FtZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMubmV4dFNjZW5lLHRoaXMub25TY2VuZUxhdW5jaGVkKTtcbiAgICB9LFxuXG4gICAgc2F2ZVN0YXRlKCl7XG4gICAgICAgIHdpbmRvdy5wbGF5ZXIucG9zX1ggPSB0aGlzLnBsYXllck5vZGUuZ2V0UG9zaXRpb24oKS54O1xuICAgICAgICB3aW5kb3cucGxheWVyLnBvc19ZID0gdGhpcy5wbGF5ZXJOb2RlLmdldFBvc2l0aW9uKCkueTtcbiAgICAgICAgd2luZG93LnBsYXllci5lbnRlckdhbWUgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cucGxheWVyLnBvc19YICx3aW5kb3cucGxheWVyLnBvc19ZKTsgXG4gICAgfSxcblxuICAgIG9uU2NlbmVMYXVuY2hlZCgpe1xuICAgICAgICBpZih3aW5kb3cuSW5Vc2UgIT0nJyl7XG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIGZvciAoOyBpIDwgd2luZG93LkJhZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5CYWdbaV0ubmFtZSA9PSB3aW5kb3cuSW5Vc2Upe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaWQgPSB3aW5kb3cudG9vbE1hcFt3aW5kb3cuQmFnW2ldLm5hbWVdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZDpcIisgaWQpO1xuICAgICAgICAgICAgbGV0IHRvb2wgPSB3aW5kb3cuVE9PTFNbaWRdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b29sOlwiK3Rvb2wubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMudXNlSXRlbTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZiBvdXQ6IFwiK3NlbGYubmFtZSk7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh0b29sWydwaWNVcmwnXSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZiBpbjogXCIrc2VsZi5uYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZihHbG9iYWwuaXRlbVR5cGUgPT0gJ2dhbWVzJyAmJiBHbG9iYWwuaXRlbU5hbWUgPT0gdGhpcy5uYW1lKXtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJHYW1lKCk7XG4gICAgICAgIH0gICBcbiAgICB9LFxufSk7XG4iXX0=