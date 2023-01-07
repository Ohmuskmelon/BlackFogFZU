
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cup/1_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51178HXPsBKEr6kOcKrGoe8', '1_java');
// scripts/game_chp1/cp1_cup/1_java.js

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
    window.cup = [0, 1, 0, 1, 0];
    window.listen = [-1, -1];
    window.touchcnt = 0;
    window.lockOfCupsInCP1 = -1; //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)

    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      listen[touchcnt] = 0;
      touchcnt++;
    });
  },
  update: function update(dt) {
    cc.log(window.lockOfCupsInCP1);
    var self = this;

    if (cup[0] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[0] == 0) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
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

    if (cup[0] == 0 && cup[1] == 0 && cup[2] == 1 && cup[3] == 0 && cup[4] == 1 && window.lockOfCupsInCP1 == -1) {
      window.lockOfCupsInCP1 = 1;
      console.log("杯子顺序摆放成功");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY3VwLzFfamF2YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwid2luZG93IiwiY3VwIiwibGlzdGVuIiwidG91Y2hjbnQiLCJsb2NrT2ZDdXBzSW5DUDEiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwidXBkYXRlIiwiZHQiLCJsb2ciLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImNoYW5nZV9hIiwiY2hhbmdlX2IiLCJ0IiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFLENBQ1Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlUsQ0FITDtFQXFCUDtFQUVBO0VBRUFDLEtBekJPLG1CQXlCQztJQUNOQyxNQUFNLENBQUNDLEdBQVAsR0FBYSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWI7SUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLENBQWhCO0lBQ0FGLE1BQU0sQ0FBQ0csUUFBUCxHQUFrQixDQUFsQjtJQUNBSCxNQUFNLENBQUNJLGVBQVAsR0FBeUIsQ0FBQyxDQUExQixDQUpNLENBTU47O0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFYLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxVQUFVQyxLQUFWLEVBQWlCO01BQzFEUixNQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFtQixDQUFuQjtNQUNBQSxRQUFRO0lBQ1QsQ0FIRDtFQUlELENBcENNO0VBc0NQUSxNQXRDTyxrQkFzQ0FDLEVBdENBLEVBc0NJO0lBQ1RqQixFQUFFLENBQUNrQixHQUFILENBQU9iLE1BQU0sQ0FBQ0ksZUFBZDtJQUNBLElBQUlVLElBQUksR0FBRyxJQUFYOztJQUNBLElBQUliLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUFkLEVBQWlCO01BQ2ZOLEVBQUUsQ0FBQ29CLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixNQUFsQixFQUEwQnJCLEVBQUUsQ0FBQ3NCLFdBQTdCLEVBQTBDLFVBQVVDLEdBQVYsRUFBZUMsRUFBZixFQUFtQjtRQUMzREwsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJ6QixFQUFFLENBQUMwQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBZ0RILEVBQWhEO01BQ0QsQ0FGRDtJQUdEOztJQUNELElBQUlsQixHQUFHLENBQUMsQ0FBRCxDQUFILElBQVUsQ0FBZCxFQUFpQjtNQUNmTixFQUFFLENBQUNvQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkJyQixFQUFFLENBQUNzQixXQUE5QixFQUEyQyxVQUFVQyxHQUFWLEVBQWVDLEVBQWYsRUFBbUI7UUFDNURMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCekIsRUFBRSxDQUFDMEIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdESCxFQUFoRDtNQUNELENBRkQ7SUFHRDs7SUFFRCxJQUFJaEIsUUFBUSxJQUFJLENBQWhCLEVBQW1CO01BQ2pCQSxRQUFRLEdBQUcsQ0FBWDtNQUNBLElBQUlvQixRQUFRLEdBQUdyQixNQUFNLENBQUMsQ0FBRCxDQUFyQjtNQUNBLElBQUlzQixRQUFRLEdBQUd0QixNQUFNLENBQUMsQ0FBRCxDQUFyQjtNQUNBLElBQUl1QixDQUFDLEdBQUd4QixHQUFHLENBQUNzQixRQUFELENBQVg7TUFDQXRCLEdBQUcsQ0FBQ3NCLFFBQUQsQ0FBSCxHQUFnQnRCLEdBQUcsQ0FBQ3VCLFFBQUQsQ0FBbkI7TUFDQXZCLEdBQUcsQ0FBQ3VCLFFBQUQsQ0FBSCxHQUFnQkMsQ0FBaEI7TUFDQXZCLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUFDLENBQWI7TUFDQUEsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBQUMsQ0FBYjtJQUNEOztJQUNELElBQ0VELEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUFWLElBQ0FBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQURWLElBRUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUZWLElBR0FBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUhWLElBSUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUpWLElBS0FELE1BQU0sQ0FBQ0ksZUFBUCxJQUEwQixDQUFDLENBTjdCLEVBT0U7TUFDQUosTUFBTSxDQUFDSSxlQUFQLEdBQXlCLENBQXpCO01BQ0FzQixPQUFPLENBQUNiLEdBQVIsQ0FBWSxVQUFaO0lBQ0Q7RUFDRjtBQXpFTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIC8vIGZvbzoge1xyXG4gICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gYmFyOiB7XHJcbiAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuICB9LFxyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHdpbmRvdy5jdXAgPSBbMCwgMSwgMCwgMSwgMF07XHJcbiAgICB3aW5kb3cubGlzdGVuID0gWy0xLCAtMV07XHJcbiAgICB3aW5kb3cudG91Y2hjbnQgPSAwO1xyXG4gICAgd2luZG93LmxvY2tPZkN1cHNJbkNQMSA9IC0xO1xyXG5cclxuICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgbGlzdGVuW3RvdWNoY250XSA9IDA7XHJcbiAgICAgIHRvdWNoY250Kys7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUoZHQpIHtcclxuICAgIGNjLmxvZyh3aW5kb3cubG9ja09mQ3Vwc0luQ1AxKTtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChjdXBbMF0gPT0gMSkge1xyXG4gICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInRhbGxcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwKSB7XHJcbiAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3A7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cFswXSA9PSAwKSB7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwKSB7XHJcbiAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3A7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b3VjaGNudCA9PSAyKSB7XHJcbiAgICAgIHRvdWNoY250ID0gMDtcclxuICAgICAgdmFyIGNoYW5nZV9hID0gbGlzdGVuWzBdO1xyXG4gICAgICB2YXIgY2hhbmdlX2IgPSBsaXN0ZW5bMV07XHJcbiAgICAgIHZhciB0ID0gY3VwW2NoYW5nZV9hXTtcclxuICAgICAgY3VwW2NoYW5nZV9hXSA9IGN1cFtjaGFuZ2VfYl07XHJcbiAgICAgIGN1cFtjaGFuZ2VfYl0gPSB0O1xyXG4gICAgICBsaXN0ZW5bMF0gPSAtMTtcclxuICAgICAgbGlzdGVuWzFdID0gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIGN1cFswXSA9PSAwICYmXHJcbiAgICAgIGN1cFsxXSA9PSAwICYmXHJcbiAgICAgIGN1cFsyXSA9PSAxICYmXHJcbiAgICAgIGN1cFszXSA9PSAwICYmXHJcbiAgICAgIGN1cFs0XSA9PSAxICYmXHJcbiAgICAgIHdpbmRvdy5sb2NrT2ZDdXBzSW5DUDEgPT0gLTFcclxuICAgICkge1xyXG4gICAgICB3aW5kb3cubG9ja09mQ3Vwc0luQ1AxID0gMTtcclxuICAgICAgY29uc29sZS5sb2coXCLmna/lrZDpobrluo/mkYbmlL7miJDlip9cIik7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiJdfQ==