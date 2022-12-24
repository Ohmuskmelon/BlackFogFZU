
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tool/tool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef98979pWpHTJArOZxjW6tp', 'tool');
// scripts/tool/tool.js

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
  onLoad: function onLoad() {
    this.tt = 0;
    this.playerNode = cc.find("Canvas/bg/player/body");
    this.name = this.node.name;

    if (window.TOOLS[window.toolMap[this.name]].inBag) {
      this.node.active = false;
    }

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  start: function start() {},
  ToolAction: function ToolAction(tt) {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos);

    if (dis <= 50) {
      this.isIn = true;
    } else {
      this.isIn = false;
    }
  },
  onKeyDown: function onKeyDown(event) {
    if (this.isIn) {
      console.log(this.node.name);

      if (event.keyCode == cc.macro.KEY.k) {
        if (!window.TOOLS[window.toolMap[this.name]].inBag) {
          window.TOOLS[window.toolMap[this.name]].inBag = true;
          window.Bag.push(window.TOOLS[window.toolMap[this.name]]);

          for (var key in window.Bag) {
            console.log(window.Bag[key].name);
          }

          this.node.active = false;
          this.tip.active = false; // Items.InArr[Items.CloseItem[this.name]] = 1;
        }
      }
    }
  },
  update: function update(dt) {
    this.tt += dt;

    if (this.tt >= 0.3) {
      this.ToolAction(this.tt);
      this.tt = 0; // console.log(window.Bag);
    }
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Rvb2wvdG9vbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpcCIsIk5vZGUiLCJvbkxvYWQiLCJ0dCIsInBsYXllck5vZGUiLCJmaW5kIiwibmFtZSIsIm5vZGUiLCJ3aW5kb3ciLCJUT09MUyIsInRvb2xNYXAiLCJpbkJhZyIsImFjdGl2ZSIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwic3RhcnQiLCJUb29sQWN0aW9uIiwicF9wb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsImVfcG9zIiwiZGlzIiwiVmVjMiIsImRpc3RhbmNlIiwiaXNJbiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImsiLCJCYWciLCJwdXNoIiwia2V5IiwidXBkYXRlIiwiZHQiLCJvbkRlc3Ryb3kiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxHQUFHLEVBQUNKLEVBQUUsQ0FBQ0s7RUFEQyxDQUhQO0VBT0w7RUFHQUMsTUFWSyxvQkFVSztJQUNOLEtBQUtDLEVBQUwsR0FBVSxDQUFWO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQlIsRUFBRSxDQUFDUyxJQUFILENBQVEsdUJBQVIsQ0FBbEI7SUFDQSxLQUFLQyxJQUFMLEdBQVksS0FBS0MsSUFBTCxDQUFVRCxJQUF0Qjs7SUFDQSxJQUFHRSxNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsS0FBS0osSUFBcEIsQ0FBYixFQUF3Q0ssS0FBM0MsRUFBaUQ7TUFDN0MsS0FBS0osSUFBTCxDQUFVSyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0g7O0lBQ0RoQixFQUFFLENBQUNpQixXQUFILENBQWVDLEVBQWYsQ0FBa0JsQixFQUFFLENBQUNtQixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELEVBQXFFLElBQXJFO0VBQ0gsQ0FsQkk7RUFvQkxDLEtBcEJLLG1CQW9CSSxDQUNSLENBckJJO0VBdUJMQyxVQXZCSyxzQkF1Qk1qQixFQXZCTixFQXVCVTtJQUNYLElBQUlrQixLQUFLLEdBQUcsS0FBS2pCLFVBQUwsQ0FBZ0JrQixxQkFBaEIsQ0FBc0MxQixFQUFFLENBQUMyQixFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBdEMsQ0FBWjtJQUNBLElBQUlDLEtBQUssR0FBSSxLQUFLakIsSUFBTCxDQUFVZSxxQkFBVixDQUFnQzFCLEVBQUUsQ0FBQzJCLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFoQyxDQUFiO0lBQ0EsSUFBSUUsR0FBRyxHQUFHN0IsRUFBRSxDQUFDOEIsSUFBSCxDQUFRQyxRQUFSLENBQWlCSCxLQUFqQixFQUF3QkgsS0FBeEIsQ0FBVjs7SUFDQSxJQUFJSSxHQUFHLElBQUksRUFBWCxFQUFlO01BQ1gsS0FBS0csSUFBTCxHQUFZLElBQVo7SUFDSCxDQUZELE1BRU87TUFDSCxLQUFLQSxJQUFMLEdBQVksS0FBWjtJQUNIO0VBQ0osQ0FoQ0k7RUFrQ0xWLFNBbENLLHFCQWtDS1csS0FsQ0wsRUFrQ1k7SUFDYixJQUFJLEtBQUtELElBQVQsRUFBZTtNQUNYRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLeEIsSUFBTCxDQUFVRCxJQUF0Qjs7TUFDQSxJQUFJdUIsS0FBSyxDQUFDRyxPQUFOLElBQWlCcEMsRUFBRSxDQUFDcUMsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxDLEVBQXFDO1FBQ2pDLElBQUksQ0FBQzNCLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxLQUFLSixJQUFwQixDQUFiLEVBQXdDSyxLQUE3QyxFQUFtRDtVQUMvQ0gsTUFBTSxDQUFDQyxLQUFQLENBQWFELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLEtBQUtKLElBQXBCLENBQWIsRUFBd0NLLEtBQXhDLEdBQWdELElBQWhEO1VBQ0FILE1BQU0sQ0FBQzRCLEdBQVAsQ0FBV0MsSUFBWCxDQUFnQjdCLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxLQUFLSixJQUFwQixDQUFiLENBQWhCOztVQUNBLEtBQUssSUFBSWdDLEdBQVQsSUFBZ0I5QixNQUFNLENBQUM0QixHQUF2QixFQUEyQjtZQUN2Qk4sT0FBTyxDQUFDQyxHQUFSLENBQVl2QixNQUFNLENBQUM0QixHQUFQLENBQVdFLEdBQVgsRUFBZ0JoQyxJQUE1QjtVQUNIOztVQUNELEtBQUtDLElBQUwsQ0FBVUssTUFBVixHQUFtQixLQUFuQjtVQUNBLEtBQUtaLEdBQUwsQ0FBU1ksTUFBVCxHQUFrQixLQUFsQixDQVArQyxDQVEvQztRQUNIO01BQ0o7SUFDSjtFQUNKLENBbERJO0VBb0RMMkIsTUFwREssa0JBb0RFQyxFQXBERixFQW9ETTtJQUNQLEtBQUtyQyxFQUFMLElBQVdxQyxFQUFYOztJQUNBLElBQUksS0FBS3JDLEVBQUwsSUFBVSxHQUFkLEVBQW1CO01BQ2YsS0FBS2lCLFVBQUwsQ0FBZ0IsS0FBS2pCLEVBQXJCO01BQ0EsS0FBS0EsRUFBTCxHQUFVLENBQVYsQ0FGZSxDQUdmO0lBQ0g7RUFDSixDQTNESTtFQTZETHNDLFNBN0RLLHVCQTZETztJQUNSN0MsRUFBRSxDQUFDaUIsV0FBSCxDQUFlNkIsR0FBZixDQUFtQjlDLEVBQUUsQ0FBQ21CLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBc0QsS0FBS0MsU0FBM0QsRUFBc0UsSUFBdEU7RUFDSDtBQS9ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwOmNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnR0ID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJOb2RlID0gY2MuZmluZChcIkNhbnZhcy9iZy9wbGF5ZXIvYm9keVwiKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5ub2RlLm5hbWU7XG4gICAgICAgIGlmKHdpbmRvdy5UT09MU1t3aW5kb3cudG9vbE1hcFt0aGlzLm5hbWVdXS5pbkJhZyl7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICB9LFxuXG4gICAgVG9vbEFjdGlvbih0dCkge1xuICAgICAgICBsZXQgcF9wb3MgPSB0aGlzLnBsYXllck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsMCkpO1xuICAgICAgICBsZXQgZV9wb3MgPSAgdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKTtcbiAgICAgICAgbGV0IGRpcyA9IGNjLlZlYzIuZGlzdGFuY2UoZV9wb3MsIHBfcG9zKTtcbiAgICAgICAgaWYgKGRpcyA8PSA1MCkge1xuICAgICAgICAgICAgdGhpcy5pc0luID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNJbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0luKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUubmFtZSk7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuaykge1xuICAgICAgICAgICAgICAgIGlmICghd2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW3RoaXMubmFtZV1dLmluQmFnKXtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW3RoaXMubmFtZV1dLmluQmFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkJhZy5wdXNoKHdpbmRvdy5UT09MU1t3aW5kb3cudG9vbE1hcFt0aGlzLm5hbWVdXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB3aW5kb3cuQmFnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5CYWdba2V5XS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBJdGVtcy5JbkFycltJdGVtcy5DbG9zZUl0ZW1bdGhpcy5uYW1lXV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy50dCArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudHQgPj0wLjMpIHtcbiAgICAgICAgICAgIHRoaXMuVG9vbEFjdGlvbih0aGlzLnR0KTtcbiAgICAgICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93LkJhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuIFxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH1cbn0pO1xuIl19