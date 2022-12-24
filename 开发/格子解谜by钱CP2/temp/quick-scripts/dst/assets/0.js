
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a636VHHQhEU5GkurZMX19X', '0');
// 0.js

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
    window.latticeDecryptionInCP2 = 0;
    window.qwnum = [-1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1]; //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)

    var index = 0;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 0;
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

    for (var i = 0; i <= 15; i++) {
      if (qwnum[i] != 1) break;

      if (i == 15 && latticeDecryptionInCP2 == 0) {
        latticeDecryptionInCP2 = 1;
        console.log("succeed");
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwid2luZG93IiwibGF0dGljZURlY3J5cHRpb25JbkNQMiIsInF3bnVtIiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0xDLElBQUFBLE1BQU0sQ0FBQ0Msc0JBQVAsR0FBOEIsQ0FBOUI7QUFDQUQsSUFBQUEsTUFBTSxDQUFDRSxLQUFQLEdBQWEsQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksQ0FBQyxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUFDLENBQXhCLEVBQTBCLENBQTFCLEVBQTRCLENBQTVCLEVBQThCLENBQTlCLEVBQWdDLENBQWhDLEVBQWtDLENBQUMsQ0FBbkMsQ0FBYixDQUZLLENBR0w7O0FBQ0EsUUFBSUMsS0FBSyxHQUFDLENBQVY7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVYsRUFBRSxDQUFDVyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTBDLFVBQVNDLEtBQVQsRUFBZTtBQUNyRFAsTUFBQUEsS0FBSyxDQUFDQyxLQUFELENBQUwsR0FBYSxDQUFDRCxLQUFLLENBQUNDLEtBQUQsQ0FBbkI7QUFDQSxVQUFHQSxLQUFLLElBQUUsRUFBVixFQUFhRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2IsVUFBR0EsS0FBSyxJQUFFLENBQVYsRUFBWUQsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNaLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2QsVUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNELEtBQUssQ0FBQ0MsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNELEtBQUssQ0FBQ0MsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDakIsS0FORDtBQVNILEdBdkNJO0FBeUNMTyxFQUFBQSxNQXpDSyxrQkF5Q0dDLEVBekNILEVBeUNPO0FBQ1IsUUFBSVIsS0FBSyxHQUFDLENBQVY7QUFDQSxRQUFJUyxJQUFJLEdBQUMsSUFBVDs7QUFFQSxRQUFHVixLQUFLLENBQUNDLEtBQUQsQ0FBTCxJQUFjLENBQWpCLEVBQW1CO0FBQ2ZSLE1BQUFBLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixNQUFsQixFQUF5Qm5CLEVBQUUsQ0FBQ29CLFdBQTVCLEVBQXdDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNwREwsUUFBQUEsSUFBSSxDQUFDUixJQUFMLENBQVVjLFlBQVYsQ0FBdUJ2QixFQUFFLENBQUN3QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0QsT0FGSDtBQUdIOztBQUNELFFBQUdmLEtBQUssQ0FBQ0MsS0FBRCxDQUFMLElBQWMsQ0FBQyxDQUFsQixFQUFvQjtBQUNoQlIsTUFBQUEsRUFBRSxDQUFDa0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTBCbkIsRUFBRSxDQUFDb0IsV0FBN0IsRUFBeUMsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO0FBQ3JETCxRQUFBQSxJQUFJLENBQUNSLElBQUwsQ0FBVWMsWUFBVixDQUF1QnZCLEVBQUUsQ0FBQ3dCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7QUFDSCxPQUZEO0FBR0g7O0FBQ0QsU0FBSSxJQUFJSSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLElBQUUsRUFBZixFQUFrQkEsQ0FBQyxFQUFuQixFQUFzQjtBQUNsQixVQUFHbkIsS0FBSyxDQUFDbUIsQ0FBRCxDQUFMLElBQVUsQ0FBYixFQUFlOztBQUNmLFVBQUdBLENBQUMsSUFBRSxFQUFILElBQU9wQixzQkFBc0IsSUFBRSxDQUFsQyxFQUFvQztBQUNoQ0EsUUFBQUEsc0JBQXNCLEdBQUMsQ0FBdkI7QUFDQXFCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSDtBQUNKO0FBQ0o7QUE5REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHdpbmRvdy5sYXR0aWNlRGVjcnlwdGlvbkluQ1AyPTA7XHJcbiAgICAgICAgd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0wO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD0wO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8PTE1O2krKyl7XHJcbiAgICAgICAgICAgIGlmKHF3bnVtW2ldIT0xKWJyZWFrO1xyXG4gICAgICAgICAgICBpZihpPT0xNSYmbGF0dGljZURlY3J5cHRpb25JbkNQMj09MCl7XHJcbiAgICAgICAgICAgICAgICBsYXR0aWNlRGVjcnlwdGlvbkluQ1AyPTE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19