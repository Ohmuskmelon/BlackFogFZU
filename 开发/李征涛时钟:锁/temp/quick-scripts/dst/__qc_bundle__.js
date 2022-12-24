
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/clock');
require('./assets/script/closet');
require('./assets/script/gate');
require('./assets/script/stairlock');
require('./assets/script/switch');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/clock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8fbcW4vzhMY53pmgumFkUg', 'clock');
// script/clock.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var res1 = 15;
var res2 = 3;
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
  //7��25��
  clock1: function clock1() {
    //cc.log(this.node.angle);
    res = this.node.angle;
    this.node.angle = this.node.angle - 30;
    res1 = (-res % 360 / 6 + 20) % 60; //cc.log(res1+"")
  },
  clock2: function clock2() {
    res = this.node.angle;
    this.node.angle = this.node.angle - 30;
    res2 = (-res % 360 / 30 + 4) % 12; //cc.log(res2)
  },
  clockJudge: function clockJudge() {
    res = res2 + "时" + res1 + "分";
    cc.log(res);

    if (res === "7时25分") {
      cc.log("success");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY2xvY2suanMiXSwibmFtZXMiOlsicmVzMSIsInJlczIiLCJyZXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNsb2NrMSIsIm5vZGUiLCJhbmdsZSIsImNsb2NrMiIsImNsb2NrSnVkZ2UiLCJsb2ciLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxJQUFJLEdBQUUsRUFBVjtBQUFjLElBQUlDLElBQUksR0FBRSxDQUFWO0FBQVksSUFBSUMsR0FBRyxHQUFFLEVBQVQ7QUFDMUJDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxDQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQWZRLENBSFA7RUFvQkw7RUFDQUMsTUFyQkssb0JBcUJHO0lBQ0o7SUFDQUwsR0FBRyxHQUFHLEtBQUtNLElBQUwsQ0FBVUMsS0FBaEI7SUFDQSxLQUFLRCxJQUFMLENBQVVDLEtBQVYsR0FBa0IsS0FBS0QsSUFBTCxDQUFVQyxLQUFWLEdBQWdCLEVBQWxDO0lBQ0FULElBQUksR0FBRyxDQUFFLENBQUNFLEdBQUQsR0FBSyxHQUFOLEdBQVcsQ0FBWCxHQUFhLEVBQWQsSUFBa0IsRUFBekIsQ0FKSSxDQUtKO0VBRUgsQ0E1Qkk7RUE2QkxRLE1BN0JLLG9CQTZCRztJQUNKUixHQUFHLEdBQUcsS0FBS00sSUFBTCxDQUFVQyxLQUFoQjtJQUNBLEtBQUtELElBQUwsQ0FBVUMsS0FBVixHQUFrQixLQUFLRCxJQUFMLENBQVVDLEtBQVYsR0FBZ0IsRUFBbEM7SUFDQVIsSUFBSSxHQUFFLENBQUUsQ0FBQ0MsR0FBRCxHQUFLLEdBQU4sR0FBVyxFQUFYLEdBQWMsQ0FBZixJQUFrQixFQUF4QixDQUhJLENBSUo7RUFFSCxDQW5DSTtFQW9DTFMsVUFwQ0ssd0JBb0NPO0lBQ1BULEdBQUcsR0FBR0QsSUFBSSxHQUFDLEdBQUwsR0FBU0QsSUFBVCxHQUFjLEdBQXBCO0lBQ0FHLEVBQUUsQ0FBQ1MsR0FBSCxDQUFPVixHQUFQOztJQUNGLElBQUdBLEdBQUcsS0FBSyxPQUFYLEVBQW1CO01BQ2ZDLEVBQUUsQ0FBQ1MsR0FBSCxDQUFPLFNBQVA7SUFDRjtFQUNKLENBMUNJO0VBMkNMO0VBRUE7RUFFQUMsS0EvQ0ssbUJBK0NJLENBRVIsQ0FqREksQ0FtREw7O0FBbkRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5sZXQgcmVzMSA9MTU7IGxldCByZXMyID0zO2xldCByZXMgPVwiXCI7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgIH0sXG4gICAgLy8377+977+9MjXvv73vv71cbiAgICBjbG9jazEoKXtcbiAgICAgICAgLy9jYy5sb2codGhpcy5ub2RlLmFuZ2xlKTtcbiAgICAgICAgcmVzID0gdGhpcy5ub2RlLmFuZ2xlO1xuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSB0aGlzLm5vZGUuYW5nbGUtMzA7XG4gICAgICAgIHJlczEgPSAoKC1yZXMlMzYwKS82KzIwKSU2MFxuICAgICAgICAvL2NjLmxvZyhyZXMxK1wiXCIpXG5cbiAgICB9LFxuICAgIGNsb2NrMigpe1xuICAgICAgICByZXMgPSB0aGlzLm5vZGUuYW5nbGU7XG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMubm9kZS5hbmdsZS0zMDtcbiAgICAgICAgcmVzMiA9KCgtcmVzJTM2MCkvMzArNCklMTJcbiAgICAgICAgLy9jYy5sb2cocmVzMilcblxuICAgIH0sXG4gICAgY2xvY2tKdWRnZSgpe1xuICAgICAgICAgcmVzID0gcmVzMitcIuaXtlwiK3JlczErXCLliIZcIjtcbiAgICAgICAgIGNjLmxvZyhyZXMpXG4gICAgICAgaWYocmVzID09PSBcIjfml7YyNeWIhlwiKXtcbiAgICAgICAgICAgY2MubG9nKFwic3VjY2Vzc1wiKVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/stairlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c640a8cGOxEOonjHxqGcC7T', 'stairlock');
// script/stairlock.js

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
window.lockOfStairsInCP0 = false;
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
    } else if (res.length === 4 && res === "9882") {
      cc.log("success");
      window.lockOfStairsInCP0 = true;
    } else {
      cc.log("fail");
      res = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc3RhaXJsb2NrLmpzIl0sIm5hbWVzIjpbInJlczEiLCJyZXMyIiwicmVzMyIsInJlczQiLCJyZXM1IiwicmVzNiIsInJlczciLCJyZXM4IiwicmVzOSIsInJlcyIsIndpbmRvdyIsImxvY2tPZlN0YWlyc0luQ1AwIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFpckxvY2sxIiwibG9nIiwic3RhaXJMb2NrMiIsInN0YWlyTG9jazMiLCJzdGFpckxvY2s0Iiwic3RhaXJMb2NrNSIsInN0YWlyTG9jazYiLCJzdGFpckxvY2s3Iiwic3RhaXJMb2NrOCIsInN0YWlyTG9jazkiLCJzdGFpckxvY2tKdWRnZSIsImxlbmd0aCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLElBQUksR0FBRSxDQUFWO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUMxQixJQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUFjLElBQUlDLElBQUksR0FBRyxDQUFYO0FBQWMsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFDNUIsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBYyxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFjLElBQUlDLElBQUksR0FBRSxDQUFWO0FBQzVCLElBQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0FDLE1BQU0sQ0FBQ0MsaUJBQVAsR0FBMEIsS0FBMUI7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQW9CTEMsVUFwQkssd0JBb0JRO0lBQ1RQLEdBQUcsR0FBRUEsR0FBRyxHQUFDVCxJQUFUO0lBRUFZLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPUixHQUFQO0VBQ0gsQ0F4Qkk7RUF5QkxTLFVBekJLLHdCQXlCUTtJQUNUVCxHQUFHLEdBQUVBLEdBQUcsR0FBQ1IsSUFBVDtJQUNBVyxFQUFFLENBQUNLLEdBQUgsQ0FBT1IsR0FBUDtFQUNILENBNUJJO0VBNkJMVSxVQTdCSyx3QkE2QlE7SUFDVFYsR0FBRyxHQUFFQSxHQUFHLEdBQUNQLElBQVQ7SUFDQVUsRUFBRSxDQUFDSyxHQUFILENBQU9SLEdBQVA7RUFDSCxDQWhDSTtFQWlDTFcsVUFqQ0ssd0JBaUNRO0lBQ1RYLEdBQUcsR0FBRUEsR0FBRyxHQUFDTixJQUFUO0lBQ0FTLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPUixHQUFQO0VBQ0gsQ0FwQ0k7RUFxQ0xZLFVBckNLLHdCQXFDUTtJQUNUWixHQUFHLEdBQUVBLEdBQUcsR0FBQ0wsSUFBVDtJQUNBUSxFQUFFLENBQUNLLEdBQUgsQ0FBT1IsR0FBUDtFQUNILENBeENJO0VBeUNMYSxVQXpDSyx3QkF5Q1E7SUFDVGIsR0FBRyxHQUFFQSxHQUFHLEdBQUNKLElBQVQ7SUFDQU8sRUFBRSxDQUFDSyxHQUFILENBQU9SLEdBQVA7RUFDSCxDQTVDSTtFQTZDTGMsVUE3Q0ssd0JBNkNRO0lBQ1RkLEdBQUcsR0FBRUEsR0FBRyxHQUFDSCxJQUFUO0lBQ0FNLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPUixHQUFQO0VBQ0gsQ0FoREk7RUFpRExlLFVBakRLLHdCQWlEUTtJQUNUZixHQUFHLEdBQUVBLEdBQUcsR0FBQ0YsSUFBVDtJQUNBSyxFQUFFLENBQUNLLEdBQUgsQ0FBT1IsR0FBUDtFQUNILENBcERJO0VBcURMZ0IsVUFyREssd0JBcURRO0lBQ1RoQixHQUFHLEdBQUVBLEdBQUcsR0FBQ0QsSUFBVDtJQUNBSSxFQUFFLENBQUNLLEdBQUgsQ0FBT1IsR0FBUDtFQUNILENBeERJO0VBeURMaUIsY0F6REssNEJBeURZO0lBQ2IsSUFBR2pCLEdBQUcsQ0FBQ2tCLE1BQUosR0FBVyxDQUFkLEVBQWdCO01BQ1pmLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPUixHQUFQO0lBQ0gsQ0FGRCxNQUdLLElBQUdBLEdBQUcsQ0FBQ2tCLE1BQUosS0FBYSxDQUFiLElBQWlCbEIsR0FBRyxLQUFHLE1BQTFCLEVBQWtDO01BQ25DRyxFQUFFLENBQUNLLEdBQUgsQ0FBTyxTQUFQO01BQ0FQLE1BQU0sQ0FBQ0MsaUJBQVAsR0FBMEIsSUFBMUI7SUFDSCxDQUhJLE1BR0M7TUFDRkMsRUFBRSxDQUFDSyxHQUFILENBQU8sTUFBUDtNQUNBUixHQUFHLEdBQUUsRUFBTDtJQUNIO0VBQ0osQ0FwRUk7RUFxRUw7RUFFQTtFQUVBbUIsS0F6RUssbUJBeUVJLENBRVIsQ0EzRUksQ0E2RUw7O0FBN0VLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5sZXQgcmVzMSA9MSA7bGV0IHJlczIgPTIgO2xldCByZXMzID0zIDtcbmxldCByZXM0ID0gNDsgbGV0IHJlczUgPSA1OyBsZXQgcmVzNiA9NiA7XG5sZXQgcmVzNyA9NyA7IGxldCByZXM4ID04IDsgbGV0IHJlczkgPTkgO1xubGV0IHJlcyA9IFwiXCI7XG53aW5kb3cubG9ja09mU3RhaXJzSW5DUDAgPWZhbHNlO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuICAgIHN0YWlyTG9jazEgKCl7XG4gICAgICAgIHJlcyA9cmVzK3JlczE7XG5cbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBzdGFpckxvY2syICgpe1xuICAgICAgICByZXMgPXJlcytyZXMyO1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIHN0YWlyTG9jazMgKCl7XG4gICAgICAgIHJlcyA9cmVzK3JlczM7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgc3RhaXJMb2NrNCAoKXtcbiAgICAgICAgcmVzID1yZXMrcmVzNDtcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBzdGFpckxvY2s1ICgpe1xuICAgICAgICByZXMgPXJlcytyZXM1O1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIHN0YWlyTG9jazYgKCl7XG4gICAgICAgIHJlcyA9cmVzK3JlczY7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgc3RhaXJMb2NrNyAoKXtcbiAgICAgICAgcmVzID1yZXMrcmVzNztcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBzdGFpckxvY2s4ICgpe1xuICAgICAgICByZXMgPXJlcytyZXM4O1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIHN0YWlyTG9jazkgKCl7XG4gICAgICAgIHJlcyA9cmVzK3Jlczk7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgc3RhaXJMb2NrSnVkZ2UgKCl7XG4gICAgICAgIGlmKHJlcy5sZW5ndGg8NCl7XG4gICAgICAgICAgICBjYy5sb2cocmVzKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocmVzLmxlbmd0aD09PTQmJihyZXM9PT1cIjk4ODJcIikpe1xuICAgICAgICAgICAgY2MubG9nKFwic3VjY2Vzc1wiKVxuICAgICAgICAgICAgd2luZG93LmxvY2tPZlN0YWlyc0luQ1AwID10cnVlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCJmYWlsXCIpXG4gICAgICAgICAgICByZXMgPVwiXCI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/switch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'efbe1Uv2OtAB5rrrirEZfoB', 'switch');
// script/switch.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

/*
电闸
 */
window.lockOfSwitchInCP1 = false;
var res1 = 1;
var res2 = 1;
var res3 = -1;
var res4 = 1;
var res5 = -1;
var res6 = 1;
var res7 = 1;
var res8 = -1;
cc.Class({
  "extends": cc.Component,
  properties: {
    sprite_Frame1: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame2: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  switch1: function switch1() {
    var button1 = this.node.getComponent(cc.Button);
    res1 = -res1;

    if (res1 === 1) {
      button1.normalSprite = this.sprite_Frame1;
    } else {
      button1.normalSprite = this.sprite_Frame2;
    }

    cc.log("res1" + res1);
  },
  switch2: function switch2() {
    var button2 = this.node.getComponent(cc.Button);
    res2 = -res2;

    if (res2 === 1) {
      button2.normalSprite = this.sprite_Frame1;
    } else {
      button2.normalSprite = this.sprite_Frame2;
    }

    cc.log("res2" + res2);
  },
  switch3: function switch3() {
    var button3 = this.node.getComponent(cc.Button);

    if (res3 === 1) {
      button3.normalSprite = this.sprite_Frame1;
    } else {
      button3.normalSprite = this.sprite_Frame2;
    }

    res3 = -res3;
    cc.log(res3);
  },
  switch4: function switch4() {
    var button4 = this.node.getComponent(cc.Button);

    if (res4 === 1) {
      button4.normalSprite = this.sprite_Frame1;
    } else {
      button4.normalSprite = this.sprite_Frame2;
    }

    res4 = -res4;
    cc.log(res4);
  },
  switch5: function switch5() {
    var button5 = this.node.getComponent(cc.Button);

    if (res5 === 1) {
      button5.normalSprite = this.sprite_Frame1;
    } else {
      button5.normalSprite = this.sprite_Frame2;
    }

    res5 = -res5;
    cc.log(res5);
  },
  switch6: function switch6() {
    var button6 = this.node.getComponent(cc.Button);

    if (res6 === 1) {
      button6.normalSprite = this.sprite_Frame1;
    } else {
      button6.normalSprite = this.sprite_Frame2;
    }

    res6 = -res6;
    cc.log(res6);
  },
  switch7: function switch7() {
    var button7 = this.node.getComponent(cc.Button);

    if (res7 === 1) {
      button7.normalSprite = this.sprite_Frame1;
    } else {
      button7.normalSprite = this.sprite_Frame2;
    }

    res7 = -res7;
    cc.log(res7);
  },
  switch8: function switch8() {
    var button8 = this.node.getComponent(cc.Button);

    if (res8 == 1) {
      button8.normalSprite = this.sprite_Frame1;
    } else {
      button8.normalSprite = this.sprite_Frame2;
    }

    res8 = -res8;
    cc.log(res8);
  },
  switch9: function switch9() {
    if (res1 + res3 + res2 + res4 + res5 + res6 + res7 + res8 == 8) {
      window.lockOfSwitchInCP1 = false;
      cc.log("success");
    }

    ;
    cc.log(res1 + res3 + res2 + res4 + res5 + res6 + res7 + res8);
  },
  onLoad: function onLoad() {// cc.resources.load('switch1')
    //  cc.resources.load('switch2')
    // this.sprites =  cc.resources.load("resources/2.png")
    //  console.log(this.sprites);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc3dpdGNoLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImxvY2tPZlN3aXRjaEluQ1AxIiwicmVzMSIsInJlczIiLCJyZXMzIiwicmVzNCIsInJlczUiLCJyZXM2IiwicmVzNyIsInJlczgiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwcml0ZV9GcmFtZTEiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVfRnJhbWUyIiwic3dpdGNoMSIsImJ1dHRvbjEiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwibm9ybWFsU3ByaXRlIiwibG9nIiwic3dpdGNoMiIsImJ1dHRvbjIiLCJzd2l0Y2gzIiwiYnV0dG9uMyIsInN3aXRjaDQiLCJidXR0b240Iiwic3dpdGNoNSIsImJ1dHRvbjUiLCJzd2l0Y2g2IiwiYnV0dG9uNiIsInN3aXRjaDciLCJidXR0b243Iiwic3dpdGNoOCIsImJ1dHRvbjgiLCJzd2l0Y2g5Iiwib25Mb2FkIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLGlCQUFQLEdBQTJCLEtBQTNCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLENBQVg7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFZLElBQUlDLElBQUksR0FBRSxDQUFDLENBQVg7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFZLElBQUlDLElBQUksR0FBRSxDQUFDLENBQVg7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUMvRCxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFZLElBQUlDLElBQUksR0FBRSxDQUFDLENBQVg7QUFDWkMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBRVJDLGFBQWEsRUFBRTtNQUNY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MkIsS0FBM0I7TUFDQVMsRUFBRSxDQUFDYyxHQUFILENBQU8sU0FBUDtJQUNIOztJQUFBO0lBQ0RkLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPdEIsSUFBSSxHQUFDRSxJQUFMLEdBQVVELElBQVYsR0FBZUUsSUFBZixHQUFvQkMsSUFBcEIsR0FBeUJDLElBQXpCLEdBQThCQyxJQUE5QixHQUFtQ0MsSUFBMUM7RUFFSCxDQWhISTtFQWtISitCLE1BbEhJLG9CQWtITSxDQUNOO0lBQ0E7SUFDRDtJQUNBO0VBQ0YsQ0F2SEc7RUF5SExDLEtBekhLLG1CQXlISSxDQUVSLENBM0hJLENBNkhMOztBQTdISyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vKlxu55S16Ze4XG4gKi9cbndpbmRvdy5sb2NrT2ZTd2l0Y2hJbkNQMSA9IGZhbHNlO1xubGV0IHJlczEgPSAxO2xldCByZXMyID0xO2xldCByZXMzID0tMTtsZXQgcmVzNCA9MTtsZXQgcmVzNSA9LTE7bGV0IHJlczYgPTE7XG5sZXQgcmVzNyA9MTtsZXQgcmVzOCA9LTE7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHNwcml0ZV9GcmFtZTEgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgc3ByaXRlX0ZyYW1lMiA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN3aXRjaDEgKCl7XG4gICAgICAgIGxldCBidXR0b24xID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHJlczEgPS1yZXMxO1xuICAgICAgICBpZihyZXMxPT09MSl7XG4gICAgICAgICAgICBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coXCJyZXMxXCIrcmVzMSk7XG5cbiAgICB9LFxuICAgIHN3aXRjaDIgKCl7XG4gICAgICAgIGxldCBidXR0b24yID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHJlczIgPS1yZXMyO1xuICAgICAgICBpZihyZXMyPT09MSl7XG4gICAgICAgICAgICBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coXCJyZXMyXCIrcmVzMik7XG4gICAgfSxcbiAgICBzd2l0Y2gzICgpe1xuICAgICAgICBsZXQgYnV0dG9uMyA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXG4gICAgICAgIGlmKHJlczM9PT0xKXtcbiAgICAgICAgICAgIGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUxXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTJcbiAgICAgICAgfVxuICAgICAgICByZXMzID0tcmVzMztcbiAgICAgICAgY2MubG9nKHJlczMpO1xuICAgIH0sXG4gICAgc3dpdGNoNCAoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjQgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblxuICAgICAgICBpZihyZXM0PT09MSl7XG4gICAgICAgICAgICBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cbiAgICAgICAgcmVzNCA9LXJlczQ7XG4gICAgICAgIGNjLmxvZyhyZXM0KTtcbiAgICB9LFxuICAgIHN3aXRjaDUgKCl7XG4gICAgICAgIGxldCBidXR0b241ID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG5cbiAgICAgICAgaWYocmVzNT09PTEpe1xuICAgICAgICAgICAgYnV0dG9uNS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b241Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG4gICAgICAgIHJlczUgPS1yZXM1O1xuICAgICAgICBjYy5sb2cocmVzNSk7XG4gICAgfSxcbiAgICBzd2l0Y2g2ICgpe1xuICAgICAgICBsZXQgYnV0dG9uNiA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXG4gICAgICAgIGlmKHJlczY9PT0xKXtcbiAgICAgICAgICAgIGJ1dHRvbjYubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUxXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYnV0dG9uNi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTJcbiAgICAgICAgfVxuICAgICAgICByZXM2ID0tcmVzNjtcbiAgICAgICAgY2MubG9nKHJlczYpO1xuICAgIH0sXG4gICAgc3dpdGNoNyAoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjcgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblxuICAgICAgICBpZihyZXM3PT09MSl7XG4gICAgICAgICAgICBidXR0b243Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjcubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cbiAgICAgICAgcmVzNyA9LXJlczc7XG4gICAgICAgIGNjLmxvZyhyZXM3KTtcbiAgICB9LFxuICAgIHN3aXRjaDggKCl7XG4gICAgICAgIGxldCBidXR0b244ID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG5cbiAgICAgICAgaWYocmVzOD09MSl7XG4gICAgICAgICAgICBidXR0b244Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjgubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cbiAgICAgICAgcmVzOCA9LXJlczg7XG4gICAgICAgIGNjLmxvZyhyZXM4KTtcbiAgICB9LFxuICAgIHN3aXRjaDkgKCl7XG5cbiAgICAgICAgaWYoKHJlczErcmVzMytyZXMyK3JlczQrcmVzNStyZXM2K3JlczcrcmVzOCk9PTgpe1xuICAgICAgICAgICAgd2luZG93LmxvY2tPZlN3aXRjaEluQ1AxID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5sb2coXCJzdWNjZXNzXCIpO1xuICAgICAgICB9O1xuICAgICAgICBjYy5sb2cocmVzMStyZXMzK3JlczIrcmVzNCtyZXM1K3JlczYrcmVzNytyZXM4KVxuXG4gICAgfSxcblxuICAgICBvbkxvYWQgKCkge1xuICAgICAgICAgLy8gY2MucmVzb3VyY2VzLmxvYWQoJ3N3aXRjaDEnKVxuICAgICAgICAgLy8gIGNjLnJlc291cmNlcy5sb2FkKCdzd2l0Y2gyJylcbiAgICAgICAgLy8gdGhpcy5zcHJpdGVzID0gIGNjLnJlc291cmNlcy5sb2FkKFwicmVzb3VyY2VzLzIucG5nXCIpXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyh0aGlzLnNwcml0ZXMpO1xuICAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/closet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76dd1yUGTpPG6ZqkIbq+xsT', 'closet');
// script/closet.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.lockOfClosetInCP1 = false;
var res1 = 0;
var res2 = 0;
var res3 = 0;
var res4 = 0;
var res = "";
cc.Class({
  "extends": cc.Component,
  properties: {
    sprite_Frame1: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame2: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame3: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame4: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame5: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame6: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame7: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame8: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame9: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame0: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_FrameOpen: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  // LIFE-CYCLE CALLBACKS:
  closet1: function closet1() {
    var button1 = this.node.getComponent(cc.Button);

    switch (res1) {
      case 0:
        button1.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button1.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button1.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button1.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button1.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button1.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button1.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button1.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button1.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button1.normalSprite = this.sprite_Frame0;
        break;
    }

    res1++;

    if (res1 === 10) {
      res1 = 0;
    }
  },
  closet2: function closet2() {
    var button2 = this.node.getComponent(cc.Button);

    switch (res2) {
      case 0:
        button2.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button2.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button2.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button2.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button2.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button2.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button2.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button2.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button2.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button2.normalSprite = this.sprite_Frame0;
        break;
    }

    res2++;

    if (res2 === 10) {
      res2 = 0;
    }
  },
  closet3: function closet3() {
    var button3 = this.node.getComponent(cc.Button);

    switch (res3) {
      case 0:
        button3.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button3.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button3.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button3.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button3.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button3.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button3.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button3.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button3.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button3.normalSprite = this.sprite_Frame0;
        break;
    }

    res3++;

    if (res3 === 10) {
      res3 = 0;
    }
  },
  closet4: function closet4() {
    var button4 = this.node.getComponent(cc.Button);

    switch (res4) {
      case 0:
        button4.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button4.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button4.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button4.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button4.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button4.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button4.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button4.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button4.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button4.normalSprite = this.sprite_Frame0;
        break;
    }

    res4++;

    if (res4 === 10) {
      res4 = 0;
    }
  },
  closetJudge: function closetJudge() {
    res = '' + res1 + res2 + res3 + res4;
    cc.log(res);

    if (res === "0002") {
      var closet = this.node.parent.getComponent(cc.Sprite);
      cc.log(closet);
      cc.log(this.node.sprite_FrameOpen);
      closet.spriteFrame = this.sprite_FrameOpen;
      cc.log("success");
      window.lockOfClosetInCP1 = true;
    }
  },
  // onLoad () {
  //
  // },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY2xvc2V0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImxvY2tPZkNsb3NldEluQ1AxIiwicmVzMSIsInJlczIiLCJyZXMzIiwicmVzNCIsInJlcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3ByaXRlX0ZyYW1lMSIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInNwcml0ZV9GcmFtZTIiLCJzcHJpdGVfRnJhbWUzIiwic3ByaXRlX0ZyYW1lNCIsInNwcml0ZV9GcmFtZTUiLCJzcHJpdGVfRnJhbWU2Iiwic3ByaXRlX0ZyYW1lNyIsInNwcml0ZV9GcmFtZTgiLCJzcHJpdGVfRnJhbWU5Iiwic3ByaXRlX0ZyYW1lMCIsInNwcml0ZV9GcmFtZU9wZW4iLCJjbG9zZXQxIiwiYnV0dG9uMSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJub3JtYWxTcHJpdGUiLCJjbG9zZXQyIiwiYnV0dG9uMiIsImNsb3NldDMiLCJidXR0b24zIiwiY2xvc2V0NCIsImJ1dHRvbjQiLCJjbG9zZXRKdWRnZSIsImxvZyIsImNsb3NldCIsInBhcmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsaUJBQVAsR0FBMkIsS0FBM0I7QUFDQSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFZLElBQUlDLElBQUksR0FBRSxDQUFWO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFZLElBQUlDLEdBQUcsR0FBRSxFQUFUO0FBQ2xEQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsYUFBYSxFQUFFO01BQ1gsV0FBVSxJQURDO01BRVhDLElBQUksRUFBRUws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QVAsR0FBMkIsSUFBM0I7SUFDSDtFQUNKLENBcElJO0VBcUlKO0VBQ0E7RUFDQTtFQUVEeUMsS0F6SUssbUJBeUlJLENBRVIsQ0EzSUksQ0E2SUw7O0FBN0lLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG53aW5kb3cubG9ja09mQ2xvc2V0SW5DUDEgPSBmYWxzZTtcbmxldCByZXMxID0wO2xldCByZXMyID0wOyBsZXQgcmVzMyA9MCA7bGV0IHJlczQgPTA7bGV0IHJlcyA9XCJcIjtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwcml0ZV9GcmFtZTEgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgc3ByaXRlX0ZyYW1lMiA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBzcHJpdGVfRnJhbWUzIDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTQgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxzcHJpdGVfRnJhbWU1IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTYgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxzcHJpdGVfRnJhbWU3IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTggOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxzcHJpdGVfRnJhbWU5IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTAgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgc3ByaXRlX0ZyYW1lT3BlbiA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGNsb3NldDEoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjEgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblxuICAgICAgICBzd2l0Y2ggKHJlczEpIHtcbiAgICAgICAgICAgIGNhc2UgMCA6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUxO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAxIDogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTI7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUzO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNDticmVhaztcbiAgICAgICAgICAgIGNhc2UgNCA6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU1O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNjticmVhaztcbiAgICAgICAgICAgIGNhc2UgNjogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTc7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU4O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lOTticmVhaztcbiAgICAgICAgICAgIGNhc2UgOTogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTA7YnJlYWs7XG4gICAgICAgIH1yZXMxICsrO1xuICAgICAgICBpZihyZXMxPT09MTApe1xuICAgICAgICAgICAgcmVzMT0wO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbG9zZXQyKCl7XG4gICAgICAgIGxldCBidXR0b24yID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHN3aXRjaCAocmVzMikge1xuICAgICAgICAgICAgY2FzZSAwIDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTE7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMjticmVhaztcbiAgICAgICAgICAgIGNhc2UgMiA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUzO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAzIDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTQ7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNTticmVhaztcbiAgICAgICAgICAgIGNhc2UgNSA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU2O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA2IDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTc7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDcgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lODticmVhaztcbiAgICAgICAgICAgIGNhc2UgOCA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU5O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA5IDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTA7YnJlYWs7XG4gICAgICAgIH1yZXMyICsrO1xuICAgICAgICBpZihyZXMyPT09MTApe1xuICAgICAgICAgICAgcmVzMj0wO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbG9zZXQzKCl7XG4gICAgICAgIGxldCBidXR0b24zID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHN3aXRjaCAocmVzMykge1xuICAgICAgICAgICAgY2FzZSAwIDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTE7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMjticmVhaztcbiAgICAgICAgICAgIGNhc2UgMiA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUzO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAzIDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTQ7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNTticmVhaztcbiAgICAgICAgICAgIGNhc2UgNSA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU2O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA2IDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTc7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDcgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lODticmVhaztcbiAgICAgICAgICAgIGNhc2UgOCA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU5O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA5IDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTA7YnJlYWs7XG4gICAgICAgIH1yZXMzICsrO1xuICAgICAgICBpZihyZXMzPT09MTApe1xuICAgICAgICAgICAgcmVzMz0wO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbG9zZXQ0KCl7XG4gICAgICAgIGxldCBidXR0b240ID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHN3aXRjaCAocmVzNCkge1xuICAgICAgICAgICAgY2FzZSAwIDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTE7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMjticmVhaztcbiAgICAgICAgICAgIGNhc2UgMiA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUzO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAzIDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTQ7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNTticmVhaztcbiAgICAgICAgICAgIGNhc2UgNSA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU2O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA2IDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTc7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDcgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lODticmVhaztcbiAgICAgICAgICAgIGNhc2UgOCA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU5O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA5IDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTA7YnJlYWs7XG4gICAgICAgIH1yZXM0ICsrO1xuICAgICAgICBpZihyZXM0PT09MTApe1xuICAgICAgICAgICAgcmVzND0wO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbG9zZXRKdWRnZSgpe1xuICAgICAgICByZXMgPScnK3JlczErcmVzMityZXMzK3JlczQ7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgICAgICBpZihyZXM9PT1cIjAwMDJcIil7XG4gICAgICAgICAgICBsZXQgY2xvc2V0ID10aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgY2MubG9nKGNsb3NldClcbiAgICAgICAgICAgIGNjLmxvZyh0aGlzLm5vZGUuc3ByaXRlX0ZyYW1lT3BlbilcbiAgICAgICAgICAgIGNsb3NldC5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlX0ZyYW1lT3BlbjtcbiAgICAgICAgICAgIGNjLmxvZyhcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB3aW5kb3cubG9ja09mQ2xvc2V0SW5DUDEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAgLy8gb25Mb2FkICgpIHtcbiAgICAgLy9cbiAgICAgLy8gfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
