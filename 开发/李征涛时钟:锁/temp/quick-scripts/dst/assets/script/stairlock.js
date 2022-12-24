
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