
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 003.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9abfYQT4tDEL95gXXKrjkx', '0 - 003');
// 0 - 003.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    // window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 3;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 3;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAwMy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ047QUFDQztBQUNBLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxDQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgLy8gd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0zO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD0zO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICBcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=