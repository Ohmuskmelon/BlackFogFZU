
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cloth/1_js.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd7451V/hqdGPpFqsid4S6x9', '1_js');
// scripts/game_chp1/cp1_cloth/1_js.js

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
    window.cup = [1, 0, 3, 2];
    window.listen = [-1, -1];
    window.touchcnt = 0;
    window.neatOfClothesInCP1 = 0;
    var thisnode = 0; //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)

    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      listen[touchcnt] = thisnode;
      touchcnt++;
    });
  },
  update: function update(dt) {
    var self = this;

    if (cup[0] == 0) {
      cc.loader.loadRes("衣服", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[0] == 1) {
      cc.loader.loadRes("袜子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[0] == 2) {
      cc.loader.loadRes("裤子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[0] == 3) {
      cc.loader.loadRes("帽子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (touchcnt == 2) {
      touchcnt = 0;
      var change_a = listen[0];
      var change_b = listen[1];
      var t = cup[change_a];
      cup[change_a] = cup[change_b];
      cup[change_b] = t;
      listen[0] = -1;
      listen[1] = -1;
    }

    if (cup[0] == 0 && cup[1] == 1 && cup[2] == 2 && cup[3] == 3 && window.neatOfClothesInCP1 == 0) {
      window.neatOfClothesInCP1 = true;
      console.log("衣服顺序摆放成功");
      cc.director.loadScene('chp1_301');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY2xvdGgvMV9qcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwid2luZG93IiwiY3VwIiwibGlzdGVuIiwidG91Y2hjbnQiLCJuZWF0T2ZDbG90aGVzSW5DUDEiLCJ0aGlzbm9kZSIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiZXZlbnQiLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiY2hhbmdlX2EiLCJjaGFuZ2VfYiIsInQiLCJjb25zb2xlIiwibG9nIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxDQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQWZRLENBSFA7RUFxQkw7RUFFQTtFQUVBQyxLQXpCSyxtQkF5Qkk7SUFDTEMsTUFBTSxDQUFDQyxHQUFQLEdBQVcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBQVg7SUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWMsQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFDLENBQUwsQ0FBZDtJQUNBRixNQUFNLENBQUNHLFFBQVAsR0FBZ0IsQ0FBaEI7SUFDQUgsTUFBTSxDQUFDSSxrQkFBUCxHQUEwQixDQUExQjtJQUNBLElBQUlDLFFBQVEsR0FBQyxDQUFiLENBTEssQ0FNTDs7SUFD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QUEyQixDQUExRSxFQUE0RTtNQUN4RUosTUFBTSxDQUFDSSxrQkFBUCxHQUE0QixJQUE1QjtNQUNBc0IsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtNQUNBaEMsRUFBRSxDQUFDaUMsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFVBQXRCO0lBQ0g7RUFFSjtBQTlFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgd2luZG93LmN1cD1bMSwwLDMsMl07XHJcbiAgICAgICAgd2luZG93Lmxpc3Rlbj1bLTEsLTFdO1xyXG4gICAgICAgIHdpbmRvdy50b3VjaGNudD0wO1xyXG4gICAgICAgIHdpbmRvdy5uZWF0T2ZDbG90aGVzSW5DUDE9MDtcclxuICAgICAgICB2YXIgdGhpc25vZGU9MDtcclxuICAgICAgICAvL3RoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBsaXN0ZW5bdG91Y2hjbnRdPXRoaXNub2RlO1xyXG4gICAgICAgICAgICB0b3VjaGNudCsrOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKGN1cFswXT09MCl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6KGj5pyNXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbMF09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuiinOWtkFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGN1cFswXT09Mil7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6KOk5a2QXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY3VwWzBdPT0zKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLluL3lrZBcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodG91Y2hjbnQ9PTIpe1xyXG4gICAgICAgICAgICB0b3VjaGNudD0wO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlX2E9bGlzdGVuWzBdO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlX2I9bGlzdGVuWzFdO1xyXG4gICAgICAgICAgICB2YXIgdD1jdXBbY2hhbmdlX2FdO1xyXG4gICAgICAgICAgICBjdXBbY2hhbmdlX2FdPWN1cFtjaGFuZ2VfYl07XHJcbiAgICAgICAgICAgIGN1cFtjaGFuZ2VfYl09dDtcclxuICAgICAgICAgICAgbGlzdGVuWzBdPS0xO1xyXG4gICAgICAgICAgICBsaXN0ZW5bMV09LTE7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbMF09PTAmJmN1cFsxXT09MSYmY3VwWzJdPT0yJiZjdXBbM109PTMmJndpbmRvdy5uZWF0T2ZDbG90aGVzSW5DUDE9PTApe1xyXG4gICAgICAgICAgICB3aW5kb3cubmVhdE9mQ2xvdGhlc0luQ1AxID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLooaPmnI3pobrluo/mkYbmlL7miJDlip9cIik7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnY2hwMV8zMDEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==