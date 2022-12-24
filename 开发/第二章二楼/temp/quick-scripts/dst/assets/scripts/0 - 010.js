
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 010.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc3f41IKmlN7aW6H56O4jqu', '0 - 010');
// scripts/0 - 010.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 10;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 10;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMTAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsRUFBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsRUFBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MTA7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBxd251bVtpbmRleF09LXF3bnVtW2luZGV4XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg8PTExKXF3bnVtW2luZGV4KzRdPS1xd251bVtpbmRleCs0XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg+PTQpcXdudW1baW5kZXgtNF09LXF3bnVtW2luZGV4LTRdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0wKXF3bnVtW2luZGV4LTFdPS1xd251bVtpbmRleC0xXTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9Mylxd251bVtpbmRleCsxXT0tcXdudW1baW5kZXgrMV07XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IGluZGV4PTEwO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=