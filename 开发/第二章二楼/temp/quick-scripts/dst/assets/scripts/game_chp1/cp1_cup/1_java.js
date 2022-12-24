
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

    if (cup[0] == 0 && cup[1] == 0 && cup[2] == 1 && cup[3] == 0 && cup[4] == 1 && lockOfCupsInCP1 == -1) {
      lockOfCupsInCP1 = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY3VwLzFfamF2YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwid2luZG93IiwiY3VwIiwibGlzdGVuIiwidG91Y2hjbnQiLCJsb2NrT2ZDdXBzSW5DUDEiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImNoYW5nZV9hIiwiY2hhbmdlX2IiLCJ0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMQyxNQUFNLENBQUNDLEdBQVAsR0FBVyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULENBQVg7SUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWMsQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFDLENBQUwsQ0FBZDtJQUNBRixNQUFNLENBQUNHLFFBQVAsR0FBZ0IsQ0FBaEI7SUFDQUgsTUFBTSxDQUFDSSxlQUFQLEdBQXVCLENBQUMsQ0FBeEIsQ0FKSyxDQUtMOztJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhWCxFQUFFLENBQUNZLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEUixNQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFpQixDQUFqQjtNQUNBQSxRQUFRO0lBR1gsQ0FMRDtFQU9ILENBdENJO0VBd0NMUSxNQXhDSyxrQkF3Q0dDLEVBeENILEVBd0NPO0lBQ1IsSUFBSUMsSUFBSSxHQUFDLElBQVQ7O0lBQ0EsSUFBR1osR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtNQUNUTixFQUFFLENBQUNtQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJwQixFQUFFLENBQUNxQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDcERMLElBQUksQ0FBQ1IsSUFBTCxDQUFVYyxZQUFWLENBQXVCeEIsRUFBRSxDQUFDeUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNELENBRkg7SUFHSDs7SUFDRCxJQUFHakIsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtNQUNUTixFQUFFLENBQUNtQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJwQixFQUFFLENBQUNxQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1IsSUFBTCxDQUFVYyxZQUFWLENBQXVCeEIsRUFBRSxDQUFDeUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDs7SUFFRCxJQUFHZixRQUFRLElBQUUsQ0FBYixFQUFlO01BQ1hBLFFBQVEsR0FBQyxDQUFUO01BQ0EsSUFBSW1CLFFBQVEsR0FBQ3BCLE1BQU0sQ0FBQyxDQUFELENBQW5CO01BQ0EsSUFBSXFCLFFBQVEsR0FBQ3JCLE1BQU0sQ0FBQyxDQUFELENBQW5CO01BQ0EsSUFBSXNCLENBQUMsR0FBQ3ZCLEdBQUcsQ0FBQ3FCLFFBQUQsQ0FBVDtNQUNBckIsR0FBRyxDQUFDcUIsUUFBRCxDQUFILEdBQWNyQixHQUFHLENBQUNzQixRQUFELENBQWpCO01BQ0F0QixHQUFHLENBQUNzQixRQUFELENBQUgsR0FBY0MsQ0FBZDtNQUNBdEIsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFVLENBQUMsQ0FBWDtNQUNBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVUsQ0FBQyxDQUFYO0lBQ0g7O0lBQ0QsSUFBR0QsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVIsSUFBV0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQW5CLElBQXNCQSxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBOUIsSUFBaUNBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBUSxDQUF6QyxJQUE0Q0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQXBELElBQXVERyxlQUFlLElBQUUsQ0FBQyxDQUE1RSxFQUE4RTtNQUMxRUEsZUFBZSxHQUFDLENBQWhCO01BQ0FxQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0lBQ0g7RUFFSjtBQXBFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgd2luZG93LmN1cD1bMCwxLDAsMSwwXTtcclxuICAgICAgICB3aW5kb3cubGlzdGVuPVstMSwtMV07XHJcbiAgICAgICAgd2luZG93LnRvdWNoY250PTA7XHJcbiAgICAgICAgd2luZG93LmxvY2tPZkN1cHNJbkNQMT0tMTtcclxuICAgICAgICAvL3RoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBsaXN0ZW5bdG91Y2hjbnRdPTA7XHJcbiAgICAgICAgICAgIHRvdWNoY250Kys7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IHNlbGY9dGhpcztcclxuICAgICAgICBpZihjdXBbMF09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInRhbGxcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGN1cFswXT09MCl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodG91Y2hjbnQ9PTIpe1xyXG4gICAgICAgICAgICB0b3VjaGNudD0wO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlX2E9bGlzdGVuWzBdO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlX2I9bGlzdGVuWzFdO1xyXG4gICAgICAgICAgICB2YXIgdD1jdXBbY2hhbmdlX2FdO1xyXG4gICAgICAgICAgICBjdXBbY2hhbmdlX2FdPWN1cFtjaGFuZ2VfYl07XHJcbiAgICAgICAgICAgIGN1cFtjaGFuZ2VfYl09dDtcclxuICAgICAgICAgICAgbGlzdGVuWzBdPS0xO1xyXG4gICAgICAgICAgICBsaXN0ZW5bMV09LTE7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbMF09PTAmJmN1cFsxXT09MCYmY3VwWzJdPT0xJiZjdXBbM109PTAmJmN1cFs0XT09MSYmbG9ja09mQ3Vwc0luQ1AxPT0tMSl7XHJcbiAgICAgICAgICAgIGxvY2tPZkN1cHNJbkNQMT0xO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuadr+WtkOmhuuW6j+aRhuaUvuaIkOWKn1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==