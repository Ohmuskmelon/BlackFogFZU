
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
    this.playerNode = cc.find("Canvas/bg/player");
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

    if (dis <= 200) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Rvb2wvdG9vbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpcCIsIk5vZGUiLCJvbkxvYWQiLCJ0dCIsInBsYXllck5vZGUiLCJmaW5kIiwibmFtZSIsIm5vZGUiLCJ3aW5kb3ciLCJUT09MUyIsInRvb2xNYXAiLCJpbkJhZyIsImFjdGl2ZSIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwic3RhcnQiLCJUb29sQWN0aW9uIiwicF9wb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsImVfcG9zIiwiZGlzIiwiVmVjMiIsImRpc3RhbmNlIiwiaXNJbiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImsiLCJCYWciLCJwdXNoIiwia2V5IiwidXBkYXRlIiwiZHQiLCJvbkRlc3Ryb3kiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxHQUFHLEVBQUNKLEVBQUUsQ0FBQ0s7RUFEQyxDQUhQO0VBT0w7RUFHQUMsTUFWSyxvQkFVSztJQUNOLEtBQUtDLEVBQUwsR0FBVSxDQUFWO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQlIsRUFBRSxDQUFDUyxJQUFILENBQVEsa0JBQVIsQ0FBbEI7SUFDQSxLQUFLQyxJQUFMLEdBQVksS0FBS0MsSUFBTCxDQUFVRCxJQUF0Qjs7SUFDQSxJQUFHRSxNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsS0FBS0osSUFBcEIsQ0FBYixFQUF3Q0ssS0FBM0MsRUFBaUQ7TUFDN0MsS0FBS0osSUFBTCxDQUFVSyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0g7O0lBQ0RoQixFQUFFLENBQUNpQixXQUFILENBQWVDLEVBQWYsQ0FBa0JsQixFQUFFLENBQUNtQixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELEVBQXFFLElBQXJFO0VBQ0gsQ0FsQkk7RUFvQkxDLEtBcEJLLG1CQW9CSSxDQUNSLENBckJJO0VBdUJMQyxVQXZCSyxzQkF1Qk1qQixFQXZCTixFQXVCVTtJQUNYLElBQUlrQixLQUFLLEdBQUcsS0FBS2pCLFVBQUwsQ0FBZ0JrQixxQkFBaEIsQ0FBc0MxQixFQUFFLENBQUMyQixFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBdEMsQ0FBWjtJQUNBLElBQUlDLEtBQUssR0FBSSxLQUFLakIsSUFBTCxDQUFVZSxxQkFBVixDQUFnQzFCLEVBQUUsQ0FBQzJCLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFoQyxDQUFiO0lBQ0EsSUFBSUUsR0FBRyxHQUFHN0IsRUFBRSxDQUFDOEIsSUFBSCxDQUFRQyxRQUFSLENBQWlCSCxLQUFqQixFQUF3QkgsS0FBeEIsQ0FBVjs7SUFDQSxJQUFJSSxHQUFHLElBQUksR0FBWCxFQUFnQjtNQUNaLEtBQUtHLElBQUwsR0FBWSxJQUFaO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsS0FBS0EsSUFBTCxHQUFZLEtBQVo7SUFDSDtFQUNKLENBaENJO0VBa0NMVixTQWxDSyxxQkFrQ0tXLEtBbENMLEVBa0NZO0lBQ2IsSUFBSSxLQUFLRCxJQUFULEVBQWU7TUFDWEUsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS3hCLElBQUwsQ0FBVUQsSUFBdEI7O01BQ0EsSUFBSXVCLEtBQUssQ0FBQ0csT0FBTixJQUFpQnBDLEVBQUUsQ0FBQ3FDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQyxFQUFxQztRQUNqQyxJQUFJLENBQUMzQixNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsS0FBS0osSUFBcEIsQ0FBYixFQUF3Q0ssS0FBN0MsRUFBbUQ7VUFDL0NILE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxLQUFLSixJQUFwQixDQUFiLEVBQXdDSyxLQUF4QyxHQUFnRCxJQUFoRDtVQUNBSCxNQUFNLENBQUM0QixHQUFQLENBQVdDLElBQVgsQ0FBZ0I3QixNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsS0FBS0osSUFBcEIsQ0FBYixDQUFoQjs7VUFDQSxLQUFLLElBQUlnQyxHQUFULElBQWdCOUIsTUFBTSxDQUFDNEIsR0FBdkIsRUFBMkI7WUFDdkJOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZdkIsTUFBTSxDQUFDNEIsR0FBUCxDQUFXRSxHQUFYLEVBQWdCaEMsSUFBNUI7VUFDSDs7VUFDRCxLQUFLQyxJQUFMLENBQVVLLE1BQVYsR0FBbUIsS0FBbkI7VUFDQSxLQUFLWixHQUFMLENBQVNZLE1BQVQsR0FBa0IsS0FBbEIsQ0FQK0MsQ0FRL0M7UUFDSDtNQUNKO0lBQ0o7RUFDSixDQWxESTtFQW9ETDJCLE1BcERLLGtCQW9ERUMsRUFwREYsRUFvRE07SUFDUCxLQUFLckMsRUFBTCxJQUFXcUMsRUFBWDs7SUFDQSxJQUFJLEtBQUtyQyxFQUFMLElBQVUsR0FBZCxFQUFtQjtNQUNmLEtBQUtpQixVQUFMLENBQWdCLEtBQUtqQixFQUFyQjtNQUNBLEtBQUtBLEVBQUwsR0FBVSxDQUFWLENBRmUsQ0FHZjtJQUNIO0VBQ0osQ0EzREk7RUE2RExzQyxTQTdESyx1QkE2RE87SUFDUjdDLEVBQUUsQ0FBQ2lCLFdBQUgsQ0FBZTZCLEdBQWYsQ0FBbUI5QyxFQUFFLENBQUNtQixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTVDLEVBQXNELEtBQUtDLFNBQTNELEVBQXNFLElBQXRFO0VBQ0g7QUEvREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRpcDpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICAgIHRoaXMucGxheWVyTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvYmcvcGxheWVyXCIpO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgICAgICAgaWYod2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW3RoaXMubmFtZV1dLmluQmFnKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgIH0sXG5cbiAgICBUb29sQWN0aW9uKHR0KSB7XG4gICAgICAgIGxldCBwX3BvcyA9IHRoaXMucGxheWVyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XG4gICAgICAgIGxldCBlX3BvcyA9ICB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsMCkpO1xuICAgICAgICBsZXQgZGlzID0gY2MuVmVjMi5kaXN0YW5jZShlX3BvcywgcF9wb3MpO1xuICAgICAgICBpZiAoZGlzIDw9IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5pc0luID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNJbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0luKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUubmFtZSk7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuaykge1xuICAgICAgICAgICAgICAgIGlmICghd2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW3RoaXMubmFtZV1dLmluQmFnKXtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW3RoaXMubmFtZV1dLmluQmFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkJhZy5wdXNoKHdpbmRvdy5UT09MU1t3aW5kb3cudG9vbE1hcFt0aGlzLm5hbWVdXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB3aW5kb3cuQmFnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5CYWdba2V5XS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBJdGVtcy5JbkFycltJdGVtcy5DbG9zZUl0ZW1bdGhpcy5uYW1lXV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy50dCArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudHQgPj0wLjMpIHtcbiAgICAgICAgICAgIHRoaXMuVG9vbEFjdGlvbih0aGlzLnR0KTtcbiAgICAgICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93LkJhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuIFxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH1cbn0pO1xuIl19