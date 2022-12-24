
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed596AnlUhLvrXw8KerKm5A', 'gate');
// script/gate.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle gate
window.lockOfGateCP1 = false;
var _gate = 1;
var _gate2 = 2;
var _gate3 = 3;
var _gate4 = 4;
var _gate5 = 5;
var _gate6 = 6;
var _gate7 = 7;
var _gate8 = 8;
var _gate9 = 9;
var res = "";
cc.Class({
  "extends": cc.Component,
  properties: {},
  gate1: function gate1() {
    res = res + _gate;
    cc.log(res);
  },
  gate2: function gate2() {
    res = res + _gate2;
    cc.log(res);
  },
  gate3: function gate3() {
    res = res + _gate3;
    cc.log(res);
  },
  gate4: function gate4() {
    res = res + _gate4;
    cc.log(res);
  },
  gate5: function gate5() {
    res = res + _gate5;
    cc.log(res);
  },
  gate6: function gate6() {
    res = res + _gate6;
    cc.log(res);
  },
  gate7: function gate7() {
    res = res + _gate7;
    cc.log(res);
  },
  gate8: function gate8() {
    res = res + _gate8;
    cc.log(res);
  },
  gate9: function gate9() {
    res = res + _gate9;
    cc.log(res);
  },
  gateJudge: function gateJudge() {
    if (res.length < 4) {
      cc.log(res);
    } else if (res.length === 4 && res === "3682") {
      cc.log("success");
      window.lockOfGateCP1 = true;
    } else {
      cc.log("fail");
      res = "";
    }
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2F0ZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJsb2NrT2ZHYXRlQ1AxIiwiZ2F0ZTEiLCJnYXRlMiIsImdhdGUzIiwiZ2F0ZTQiLCJnYXRlNSIsImdhdGU2IiwiZ2F0ZTciLCJnYXRlOCIsImdhdGU5IiwicmVzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsb2ciLCJnYXRlSnVkZ2UiLCJsZW5ndGgiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLE1BQU0sQ0FBQ0MsYUFBUCxHQUFzQixLQUF0QjtBQUNBLElBQUlDLEtBQUssR0FBRyxDQUFaO0FBQWUsSUFBSUMsTUFBSyxHQUFFLENBQVg7QUFBYyxJQUFJQyxNQUFLLEdBQUcsQ0FBWjtBQUFpQixJQUFJQyxNQUFLLEdBQUcsQ0FBWjtBQUM5QyxJQUFJQyxNQUFLLEdBQUUsQ0FBWDtBQUFhLElBQUlDLE1BQUssR0FBRyxDQUFaO0FBQWMsSUFBSUMsTUFBSyxHQUFHLENBQVo7QUFBYyxJQUFJQyxNQUFLLEdBQUcsQ0FBWjtBQUFjLElBQUlDLE1BQUssR0FBRyxDQUFaO0FBQWMsSUFBSUMsR0FBRyxHQUFFLEVBQVQ7QUFDckVDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBTUxiLEtBTkssbUJBTUc7SUFDSlMsR0FBRyxHQUFFQSxHQUFHLEdBQUNULEtBQVQ7SUFFQVUsRUFBRSxDQUFDSSxHQUFILENBQU9MLEdBQVA7RUFDSCxDQVZJO0VBV0xSLEtBWEssbUJBV0c7SUFDSlEsR0FBRyxHQUFFQSxHQUFHLEdBQUNSLE1BQVQ7SUFDQVMsRUFBRSxDQUFDSSxHQUFILENBQU9MLEdBQVA7RUFDSCxDQWRJO0VBZUxQLEtBZkssbUJBZUc7SUFDSk8sR0FBRyxHQUFFQSxHQUFHLEdBQUNQLE1BQVQ7SUFDQVEsRUFBRSxDQUFDSSxHQUFILENBQU9MLEdBQVA7RUFDSCxDQWxCSTtFQW1CTE4sS0FuQkssbUJBbUJHO0lBQ0pNLEdBQUcsR0FBRUEsR0FBRyxHQUFDTixNQUFUO0lBQ0FPLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPTCxHQUFQO0VBQ0gsQ0F0Qkk7RUF1QkxMLEtBdkJLLG1CQXVCRztJQUNKSyxHQUFHLEdBQUVBLEdBQUcsR0FBQ0wsTUFBVDtJQUNBTSxFQUFFLENBQUNJLEdBQUgsQ0FBT0wsR0FBUDtFQUNILENBMUJJO0VBMkJMSixLQTNCSyxtQkEyQkc7SUFDSkksR0FBRyxHQUFFQSxHQUFHLEdBQUNKLE1BQVQ7SUFDQUssRUFBRSxDQUFDSSxHQUFILENBQU9MLEdBQVA7RUFDSCxDQTlCSTtFQStCTEgsS0EvQkssbUJBK0JHO0lBQ0pHLEdBQUcsR0FBRUEsR0FBRyxHQUFDSCxNQUFUO0lBQ0FJLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPTCxHQUFQO0VBQ0gsQ0FsQ0k7RUFtQ0xGLEtBbkNLLG1CQW1DRztJQUNKRSxHQUFHLEdBQUVBLEdBQUcsR0FBQ0YsTUFBVDtJQUNBRyxFQUFFLENBQUNJLEdBQUgsQ0FBT0wsR0FBUDtFQUNILENBdENJO0VBdUNMRCxLQXZDSyxtQkF1Q0c7SUFDSkMsR0FBRyxHQUFFQSxHQUFHLEdBQUNELE1BQVQ7SUFDQUUsRUFBRSxDQUFDSSxHQUFILENBQU9MLEdBQVA7RUFDSCxDQTFDSTtFQTJDTE0sU0EzQ0ssdUJBMkNPO0lBQ1IsSUFBR04sR0FBRyxDQUFDTyxNQUFKLEdBQVcsQ0FBZCxFQUFnQjtNQUNaTixFQUFFLENBQUNJLEdBQUgsQ0FBT0wsR0FBUDtJQUNILENBRkQsTUFHSyxJQUFHQSxHQUFHLENBQUNPLE1BQUosS0FBYSxDQUFiLElBQWlCUCxHQUFHLEtBQUcsTUFBMUIsRUFBa0M7TUFDbkNDLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPLFNBQVA7TUFDQWhCLE1BQU0sQ0FBQ0MsYUFBUCxHQUFzQixJQUF0QjtJQUNILENBSEksTUFHQztNQUNGVyxFQUFFLENBQUNJLEdBQUgsQ0FBTyxNQUFQO01BQ0FMLEdBQUcsR0FBRSxFQUFMO0lBQ0g7RUFDSixDQXRESTtFQXlETFEsS0F6REssbUJBeURJLENBRVIsQ0EzREksQ0E2REw7O0FBN0RLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBnYXRlXG5cblxud2luZG93LmxvY2tPZkdhdGVDUDEgPWZhbHNlO1xubGV0IGdhdGUxID0gMTsgbGV0IGdhdGUyID0yIDtsZXQgZ2F0ZTMgPSAzIDsgIGxldCBnYXRlNCA9IDQ7XG5sZXQgZ2F0ZTUgPTU7bGV0IGdhdGU2ID0gNjtsZXQgZ2F0ZTcgPSA3O2xldCBnYXRlOCA9IDg7bGV0IGdhdGU5ID0gOTtsZXQgcmVzID1cIlwiO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgIH0sXG4gICAgZ2F0ZTEgKCl7XG4gICAgICAgIHJlcyA9cmVzK2dhdGUxO1xuXG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgZ2F0ZTIgKCl7XG4gICAgICAgIHJlcyA9cmVzK2dhdGUyO1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIGdhdGUzICgpe1xuICAgICAgICByZXMgPXJlcytnYXRlMztcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBnYXRlNCAoKXtcbiAgICAgICAgcmVzID1yZXMrZ2F0ZTQ7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgZ2F0ZTUgKCl7XG4gICAgICAgIHJlcyA9cmVzK2dhdGU1O1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIGdhdGU2ICgpe1xuICAgICAgICByZXMgPXJlcytnYXRlNjtcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBnYXRlNyAoKXtcbiAgICAgICAgcmVzID1yZXMrZ2F0ZTc7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgZ2F0ZTggKCl7XG4gICAgICAgIHJlcyA9cmVzK2dhdGU4O1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIGdhdGU5ICgpe1xuICAgICAgICByZXMgPXJlcytnYXRlOTtcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBnYXRlSnVkZ2UgKCl7XG4gICAgICAgIGlmKHJlcy5sZW5ndGg8NCl7XG4gICAgICAgICAgICBjYy5sb2cocmVzKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocmVzLmxlbmd0aD09PTQmJihyZXM9PT1cIjM2ODJcIikpe1xuICAgICAgICAgICAgY2MubG9nKFwic3VjY2Vzc1wiKVxuICAgICAgICAgICAgd2luZG93LmxvY2tPZkdhdGVDUDEgPXRydWU7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcImZhaWxcIilcbiAgICAgICAgICAgIHJlcyA9XCJcIjtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19