
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tip/trigger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9b7er95LNEUaUK+4wdErSz', 'trigger');
// scripts/tip/trigger.js

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
    tip: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  initNpc: function initNpc() {
    this.charType = this.node.parent.name;
    this.playerNode = cc.find("Canvas/bg/player/body");
    this.tt = 0;
    this.canShow = false;
  },
  onLoad: function onLoad() {
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.initNpc();
  },
  start: function start() {},
  itemAction: function itemAction(dt) {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos);

    if (dis < 100 && this.canShow == false) {
      Global.itemType = this.charType;
      Global.itemName = this.node.name;
      this.tip.active = true;
      this.canShow = true;
    } else {
      if (dis >= 100 && this.canShow == true) {
        this.tip.active = false;
        this.canShow = false;
        Global.itemType = ' ';
        Global.itemName = ' ';
      }
    }
  },
  update: function update(dt) {
    this.tt += dt;

    if (this.tt >= 0.3) {
      this.itemAction(dt);
      this.tt = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RpcC90cmlnZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwIiwiTm9kZSIsImluaXROcGMiLCJjaGFyVHlwZSIsIm5vZGUiLCJwYXJlbnQiLCJuYW1lIiwicGxheWVyTm9kZSIsImZpbmQiLCJ0dCIsImNhblNob3ciLCJvbkxvYWQiLCJzdGFydCIsIml0ZW1BY3Rpb24iLCJkdCIsInBfcG9zIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJlX3BvcyIsImRpcyIsIlZlYzIiLCJkaXN0YW5jZSIsIkdsb2JhbCIsIml0ZW1UeXBlIiwiaXRlbU5hbWUiLCJhY3RpdmUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0s7RUFEQSxDQUhQO0VBT0w7RUFLQUMsT0FaSyxxQkFZSztJQUNOLEtBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQUFqQztJQUNBLEtBQUtDLFVBQUwsR0FBa0JYLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHVCQUFSLENBQWxCO0lBQ0EsS0FBS0MsRUFBTCxHQUFVLENBQVY7SUFDQSxLQUFLQyxPQUFMLEdBQWUsS0FBZjtFQUNILENBakJJO0VBbUJMQyxNQW5CSyxvQkFtQks7SUFDTixLQUFLWCxHQUFMLEdBQVlKLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHdCQUFSLENBQVo7SUFDQSxLQUFLTixPQUFMO0VBQ0gsQ0F0Qkk7RUF3QkxVLEtBeEJLLG1CQXdCRyxDQUNQLENBekJJO0VBMkJMQyxVQTNCSyxzQkEyQk1DLEVBM0JOLEVBMkJVO0lBQ1gsSUFBSUMsS0FBSyxHQUFHLEtBQUtSLFVBQUwsQ0FBZ0JTLHFCQUFoQixDQUFzQ3BCLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUF0QyxDQUFaO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtkLElBQUwsQ0FBVVkscUJBQVYsQ0FBZ0NwQixFQUFFLENBQUNxQixFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBaEMsQ0FBWjtJQUNBLElBQUlFLEdBQUcsR0FBR3ZCLEVBQUUsQ0FBQ3dCLElBQUgsQ0FBUUMsUUFBUixDQUFpQkgsS0FBakIsRUFBd0JILEtBQXhCLENBQVY7O0lBRUEsSUFBSUksR0FBRyxHQUFHLEdBQU4sSUFBYSxLQUFLVCxPQUFMLElBQWdCLEtBQWpDLEVBQXdDO01BQ3BDWSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FBS3BCLFFBQXZCO01BQ0FtQixNQUFNLENBQUNFLFFBQVAsR0FBa0IsS0FBS3BCLElBQUwsQ0FBVUUsSUFBNUI7TUFDQSxLQUFLTixHQUFMLENBQVN5QixNQUFULEdBQWtCLElBQWxCO01BQ0EsS0FBS2YsT0FBTCxHQUFlLElBQWY7SUFDSCxDQUxELE1BTU07TUFDRixJQUFJUyxHQUFHLElBQUksR0FBUCxJQUFjLEtBQUtULE9BQUwsSUFBZ0IsSUFBbEMsRUFBd0M7UUFDcEMsS0FBS1YsR0FBTCxDQUFTeUIsTUFBVCxHQUFrQixLQUFsQjtRQUNBLEtBQUtmLE9BQUwsR0FBZSxLQUFmO1FBQ0FZLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixHQUFsQjtRQUNBRCxNQUFNLENBQUNFLFFBQVAsR0FBa0IsR0FBbEI7TUFDSDtJQUNKO0VBQ0osQ0E5Q0k7RUFnRExFLE1BaERLLGtCQWdERVosRUFoREYsRUFnRE07SUFDUCxLQUFLTCxFQUFMLElBQVdLLEVBQVg7O0lBQ0EsSUFBSSxLQUFLTCxFQUFMLElBQVcsR0FBZixFQUFvQjtNQUNoQixLQUFLSSxVQUFMLENBQWdCQyxFQUFoQjtNQUNBLEtBQUtMLEVBQUwsR0FBVSxDQUFWO0lBQ0g7RUFDSjtBQXRESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXA6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgXG5cblxuICAgIGluaXROcGMoKSB7XG4gICAgICAgIHRoaXMuY2hhclR5cGUgPSB0aGlzLm5vZGUucGFyZW50Lm5hbWU7XG4gICAgICAgIHRoaXMucGxheWVyTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvYmcvcGxheWVyL2JvZHlcIik7XG4gICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICB0aGlzLmNhblNob3cgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy50aXAgPSAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS90aXBcIik7XG4gICAgICAgIHRoaXMuaW5pdE5wYygpO1xuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcbiAgICB9LFxuXG4gICAgaXRlbUFjdGlvbihkdCkge1xuICAgICAgICBsZXQgcF9wb3MgPSB0aGlzLnBsYXllck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsMCkpO1xuICAgICAgICBsZXQgZV9wb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsMCkpO1xuICAgICAgICBsZXQgZGlzID0gY2MuVmVjMi5kaXN0YW5jZShlX3BvcywgcF9wb3MpO1xuXG4gICAgICAgIGlmIChkaXMgPCAxMDAgJiYgdGhpcy5jYW5TaG93ID09IGZhbHNlKSB7XG4gICAgICAgICAgICBHbG9iYWwuaXRlbVR5cGUgPSB0aGlzLmNoYXJUeXBlO1xuICAgICAgICAgICAgR2xvYmFsLml0ZW1OYW1lID0gdGhpcy5ub2RlLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnRpcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYW5TaG93ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlICB7XG4gICAgICAgICAgICBpZiAoZGlzID49IDEwMCAmJiB0aGlzLmNhblNob3cgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGlwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5pdGVtVHlwZSA9ICcgJztcbiAgICAgICAgICAgICAgICBHbG9iYWwuaXRlbU5hbWUgPSAnICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMudHQgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnR0ID49IDAuMykge1xuICAgICAgICAgICAgdGhpcy5pdGVtQWN0aW9uKGR0KTtcbiAgICAgICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19