
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_stair/stairlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2acdKwtUxOLISfkzDKQ4B5', 'stairlock');
// scripts/game_chp1/cp1_lock_stair/stairlock.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var res1 = 1;
var res2 = 2;
var res3 = 3;
var res4 = 4;
var res5 = 5;
var res6 = 6;
var res7 = 7;
var res8 = 8;
var res9 = 9;
var res = "";
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
  stairLock1: function stairLock1() {
    res = res + res1;
    cc.log(res);
  },
  stairLock2: function stairLock2() {
    res = res + res2;
    cc.log(res);
  },
  stairLock3: function stairLock3() {
    res = res + res3;
    cc.log(res);
  },
  stairLock4: function stairLock4() {
    res = res + res4;
    cc.log(res);
  },
  stairLock5: function stairLock5() {
    res = res + res5;
    cc.log(res);
  },
  stairLock6: function stairLock6() {
    res = res + res6;
    cc.log(res);
  },
  stairLock7: function stairLock7() {
    res = res + res7;
    cc.log(res);
  },
  stairLock8: function stairLock8() {
    res = res + res8;
    cc.log(res);
  },
  stairLock9: function stairLock9() {
    res = res + res9;
    cc.log(res);
  },
  stairLockJudge: function stairLockJudge() {
    if (res.length < 4) {
      cc.log(res);
    } else if (res.length === 4 && res === "2148") {
      cc.log("success");
      window.lockOfStairsInCP1F3 = true;
      cc.director.loadScene('chp1_三楼走廊');
    } else {
      cc.log("fail");
      res = "";
      cc.director.loadScene('chp1_三楼走廊');
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja19zdGFpci9zdGFpcmxvY2suanMiXSwibmFtZXMiOlsicmVzMSIsInJlczIiLCJyZXMzIiwicmVzNCIsInJlczUiLCJyZXM2IiwicmVzNyIsInJlczgiLCJyZXM5IiwicmVzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFpckxvY2sxIiwibG9nIiwic3RhaXJMb2NrMiIsInN0YWlyTG9jazMiLCJzdGFpckxvY2s0Iiwic3RhaXJMb2NrNSIsInN0YWlyTG9jazYiLCJzdGFpckxvY2s3Iiwic3RhaXJMb2NrOCIsInN0YWlyTG9jazkiLCJzdGFpckxvY2tKdWRnZSIsImxlbmd0aCIsIndpbmRvdyIsImxvY2tPZlN0YWlyc0luQ1AxRjMiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLElBQUksR0FBRSxDQUFWO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUMxQixJQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUFjLElBQUlDLElBQUksR0FBRyxDQUFYO0FBQWMsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFDNUIsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBYyxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFjLElBQUlDLElBQUksR0FBRSxDQUFWO0FBQzVCLElBQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxDQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQWZRLENBSFA7RUFvQkxDLFVBcEJLLHdCQW9CUTtJQUNUTCxHQUFHLEdBQUVBLEdBQUcsR0FBQ1QsSUFBVDtJQUVBVSxFQUFFLENBQUNLLEdBQUgsQ0FBT04sR0FBUDtFQUNILENBeEJJO0VBeUJMTyxVQXpCSyx3QkF5QlE7SUFDVFAsR0FBRyxHQUFFQSxHQUFHLEdBQUNSLElBQVQ7SUFDQVMsRUFBRSxDQUFDSyxHQUFILENBQU9OLEdBQVA7RUFDSCxDQTVCSTtFQTZCTFEsVUE3Qkssd0JBNkJRO0lBQ1RSLEdBQUcsR0FBRUEsR0FBRyxHQUFDUCxJQUFUO0lBQ0FRLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPTixHQUFQO0VBQ0gsQ0FoQ0k7RUFpQ0xTLFVBakNLLHdCQWlDUTtJQUNUVCxHQUFHLEdBQUVBLEdBQUcsR0FBQ04sSUFBVDtJQUNBTyxFQUFFLENBQUNLLEdBQUgsQ0FBT04sR0FBUDtFQUNILENBcENJO0VBcUNMVSxVQXJDSyx3QkFxQ1E7SUFDVFYsR0FBRyxHQUFFQSxHQUFHLEdBQUNMLElBQVQ7SUFDQU0sRUFBRSxDQUFDSyxHQUFILENBQU9OLEdBQVA7RUFDSCxDQXhDSTtFQXlDTFcsVUF6Q0ssd0JBeUNRO0lBQ1RYLEdBQUcsR0FBRUEsR0FBRyxHQUFDSixJQUFUO0lBQ0FLLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPTixHQUFQO0VBQ0gsQ0E1Q0k7RUE2Q0xZLFVBN0NLLHdCQTZDUTtJQUNUWixHQUFHLEdBQUVBLEdBQUcsR0FBQ0gsSUFBVDtJQUNBSSxFQUFFLENBQUNLLEdBQUgsQ0FBT04sR0FBUDtFQUNILENBaERJO0VBaURMYSxVQWpESyx3QkFpRFE7SUFDVGIsR0FBRyxHQUFFQSxHQUFHLEdBQUNGLElBQVQ7SUFDQUcsRUFBRSxDQUFDSyxHQUFILENBQU9OLEdBQVA7RUFDSCxDQXBESTtFQXFETGMsVUFyREssd0JBcURRO0lBQ1RkLEdBQUcsR0FBRUEsR0FBRyxHQUFDRCxJQUFUO0lBQ0FFLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPTixHQUFQO0VBQ0gsQ0F4REk7RUF5RExlLGNBekRLLDRCQXlEWTtJQUNiLElBQUdmLEdBQUcsQ0FBQ2dCLE1BQUosR0FBVyxDQUFkLEVBQWdCO01BQ1pmLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPTixHQUFQO0lBQ0gsQ0FGRCxNQUdLLElBQUdBLEdBQUcsQ0FBQ2dCLE1BQUosS0FBYSxDQUFiLElBQWlCaEIsR0FBRyxLQUFHLE1BQTFCLEVBQ0Q7TUFBQ0MsRUFBRSxDQUFDSyxHQUFILENBQU8sU0FBUDtNQUNEVyxNQUFNLENBQUNDLG1CQUFQLEdBQTZCLElBQTdCO01BQ0FqQixFQUFFLENBQUNrQixRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7SUFDSCxDQUpJLE1BS0E7TUFDRG5CLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPLE1BQVA7TUFDQU4sR0FBRyxHQUFFLEVBQUw7TUFDQUMsRUFBRSxDQUFDa0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0lBQ0g7RUFDSixDQXZFSTtFQXdFTDtFQUVBO0VBRUFDLEtBNUVLLG1CQTRFSSxDQUVSLENBOUVJLENBZ0ZMOztBQWhGSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxubGV0IHJlczEgPTEgO2xldCByZXMyID0yIDtsZXQgcmVzMyA9MyA7XG5sZXQgcmVzNCA9IDQ7IGxldCByZXM1ID0gNTsgbGV0IHJlczYgPTYgO1xubGV0IHJlczcgPTcgOyBsZXQgcmVzOCA9OCA7IGxldCByZXM5ID05IDtcbmxldCByZXMgPSBcIlwiO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuICAgIHN0YWlyTG9jazEgKCl7XG4gICAgICAgIHJlcyA9cmVzK3JlczE7XG5cbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBzdGFpckxvY2syICgpe1xuICAgICAgICByZXMgPXJlcytyZXMyO1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIHN0YWlyTG9jazMgKCl7XG4gICAgICAgIHJlcyA9cmVzK3JlczM7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgc3RhaXJMb2NrNCAoKXtcbiAgICAgICAgcmVzID1yZXMrcmVzNDtcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBzdGFpckxvY2s1ICgpe1xuICAgICAgICByZXMgPXJlcytyZXM1O1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIHN0YWlyTG9jazYgKCl7XG4gICAgICAgIHJlcyA9cmVzK3JlczY7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgc3RhaXJMb2NrNyAoKXtcbiAgICAgICAgcmVzID1yZXMrcmVzNztcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBzdGFpckxvY2s4ICgpe1xuICAgICAgICByZXMgPXJlcytyZXM4O1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIHN0YWlyTG9jazkgKCl7XG4gICAgICAgIHJlcyA9cmVzK3Jlczk7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgc3RhaXJMb2NrSnVkZ2UgKCl7XG4gICAgICAgIGlmKHJlcy5sZW5ndGg8NCl7XG4gICAgICAgICAgICBjYy5sb2cocmVzKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocmVzLmxlbmd0aD09PTQmJihyZXM9PT1cIjIxNDhcIikpXG4gICAgICAgICAgICB7Y2MubG9nKFwic3VjY2Vzc1wiKVxuICAgICAgICAgICAgd2luZG93LmxvY2tPZlN0YWlyc0luQ1AxRjMgPSB0cnVlO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdjaHAxX+S4iealvOi1sOW7iicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKFwiZmFpbFwiKVxuICAgICAgICAgICAgcmVzID1cIlwiO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdjaHAxX+S4iealvOi1sOW7iicpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19