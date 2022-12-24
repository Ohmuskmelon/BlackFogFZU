
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/stairlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '866b0iz0dhEl4s4kMT2Mb03', 'stairlock');
// scripts/stairlock.js

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
window.lockOfCashierInCP2 = false;
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
    } else if (res.length === 4 && res === "7549") {
      cc.log("success");
      window.lockOfDoorInCP2 = true;
      cc.director.loadScene('chp2_floor2');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0YWlybG9jay5qcyJdLCJuYW1lcyI6WyJyZXMxIiwicmVzMiIsInJlczMiLCJyZXM0IiwicmVzNSIsInJlczYiLCJyZXM3IiwicmVzOCIsInJlczkiLCJyZXMiLCJ3aW5kb3ciLCJsb2NrT2ZTdGFpcnNJbkNQMCIsImxvY2tPZkNhc2hpZXJJbkNQMiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhaXJMb2NrMSIsImxvZyIsInN0YWlyTG9jazIiLCJzdGFpckxvY2szIiwic3RhaXJMb2NrNCIsInN0YWlyTG9jazUiLCJzdGFpckxvY2s2Iiwic3RhaXJMb2NrNyIsInN0YWlyTG9jazgiLCJzdGFpckxvY2s5Iiwic3RhaXJMb2NrSnVkZ2UiLCJsZW5ndGgiLCJsb2NrT2ZEb29ySW5DUDIiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLElBQUksR0FBRSxDQUFWO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUMxQixJQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUFjLElBQUlDLElBQUksR0FBRyxDQUFYO0FBQWMsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFDNUIsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBYyxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFjLElBQUlDLElBQUksR0FBRSxDQUFWO0FBQzVCLElBQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0FDLE1BQU0sQ0FBQ0MsaUJBQVAsR0FBMEIsS0FBMUI7QUFDQUQsTUFBTSxDQUFDRSxrQkFBUCxHQUEwQixLQUExQjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBb0JMQyxVQXBCSyx3QkFvQlE7SUFDVFIsR0FBRyxHQUFFQSxHQUFHLEdBQUNULElBQVQ7SUFFQWEsRUFBRSxDQUFDSyxHQUFILENBQU9ULEdBQVA7RUFDSCxDQXhCSTtFQXlCTFUsVUF6Qkssd0JBeUJRO0lBQ1RWLEdBQUcsR0FBRUEsR0FBRyxHQUFDUixJQUFUO0lBQ0FZLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPVCxHQUFQO0VBQ0gsQ0E1Qkk7RUE2QkxXLFVBN0JLLHdCQTZCUTtJQUNUWCxHQUFHLEdBQUVBLEdBQUcsR0FBQ1AsSUFBVDtJQUNBVyxFQUFFLENBQUNLLEdBQUgsQ0FBT1QsR0FBUDtFQUNILENBaENJO0VBaUNMWSxVQWpDSyx3QkFpQ1E7SUFDVFosR0FBRyxHQUFFQSxHQUFHLEdBQUNOLElBQVQ7SUFDQVUsRUFBRSxDQUFDSyxHQUFILENBQU9ULEdBQVA7RUFDSCxDQXBDSTtFQXFDTGEsVUFyQ0ssd0JBcUNRO0lBQ1RiLEdBQUcsR0FBRUEsR0FBRyxHQUFDTCxJQUFUO0lBQ0FTLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPVCxHQUFQO0VBQ0gsQ0F4Q0k7RUF5Q0xjLFVBekNLLHdCQXlDUTtJQUNUZCxHQUFHLEdBQUVBLEdBQUcsR0FBQ0osSUFBVDtJQUNBUSxFQUFFLENBQUNLLEdBQUgsQ0FBT1QsR0FBUDtFQUNILENBNUNJO0VBNkNMZSxVQTdDSyx3QkE2Q1E7SUFDVGYsR0FBRyxHQUFFQSxHQUFHLEdBQUNILElBQVQ7SUFDQU8sRUFBRSxDQUFDSyxHQUFILENBQU9ULEdBQVA7RUFDSCxDQWhESTtFQWlETGdCLFVBakRLLHdCQWlEUTtJQUNUaEIsR0FBRyxHQUFFQSxHQUFHLEdBQUNGLElBQVQ7SUFDQU0sRUFBRSxDQUFDSyxHQUFILENBQU9ULEdBQVA7RUFDSCxDQXBESTtFQXFETGlCLFVBckRLLHdCQXFEUTtJQUNUakIsR0FBRyxHQUFFQSxHQUFHLEdBQUNELElBQVQ7SUFDQUssRUFBRSxDQUFDSyxHQUFILENBQU9ULEdBQVA7RUFDSCxDQXhESTtFQXlETGtCLGNBekRLLDRCQXlEWTtJQUNiLElBQUdsQixHQUFHLENBQUNtQixNQUFKLEdBQVcsQ0FBZCxFQUFnQjtNQUNaZixFQUFFLENBQUNLLEdBQUgsQ0FBT1QsR0FBUDtJQUNILENBRkQsTUFHSyxJQUFHQSxHQUFHLENBQUNtQixNQUFKLEtBQWEsQ0FBYixJQUFpQm5CLEdBQUcsS0FBRyxNQUExQixFQUFrQztNQUNuQ0ksRUFBRSxDQUFDSyxHQUFILENBQU8sU0FBUDtNQUNBUixNQUFNLENBQUNtQixlQUFQLEdBQXdCLElBQXhCO01BQ0FoQixFQUFFLENBQUNpQixRQUFILENBQVlDLFNBQVosQ0FBc0IsYUFBdEI7SUFDSCxDQUpJLE1BSUM7TUFDRmxCLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPLE1BQVA7TUFDQVQsR0FBRyxHQUFFLEVBQUw7SUFDSDtFQUNKLENBckVJO0VBc0VMO0VBRUE7RUFFQXVCLEtBMUVLLG1CQTBFSSxDQUVSLENBNUVJLENBOEVMOztBQTlFSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxubGV0IHJlczEgPTEgO2xldCByZXMyID0yIDtsZXQgcmVzMyA9MyA7XG5sZXQgcmVzNCA9IDQ7IGxldCByZXM1ID0gNTsgbGV0IHJlczYgPTYgO1xubGV0IHJlczcgPTcgOyBsZXQgcmVzOCA9OCA7IGxldCByZXM5ID05IDtcbmxldCByZXMgPSBcIlwiO1xud2luZG93LmxvY2tPZlN0YWlyc0luQ1AwID1mYWxzZTtcbndpbmRvdy5sb2NrT2ZDYXNoaWVySW5DUDI9ZmFsc2U7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgIH0sXG4gICAgc3RhaXJMb2NrMSAoKXtcbiAgICAgICAgcmVzID1yZXMrcmVzMTtcblxuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIHN0YWlyTG9jazIgKCl7XG4gICAgICAgIHJlcyA9cmVzK3JlczI7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgc3RhaXJMb2NrMyAoKXtcbiAgICAgICAgcmVzID1yZXMrcmVzMztcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBzdGFpckxvY2s0ICgpe1xuICAgICAgICByZXMgPXJlcytyZXM0O1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIHN0YWlyTG9jazUgKCl7XG4gICAgICAgIHJlcyA9cmVzK3JlczU7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgc3RhaXJMb2NrNiAoKXtcbiAgICAgICAgcmVzID1yZXMrcmVzNjtcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBzdGFpckxvY2s3ICgpe1xuICAgICAgICByZXMgPXJlcytyZXM3O1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIHN0YWlyTG9jazggKCl7XG4gICAgICAgIHJlcyA9cmVzK3Jlczg7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgc3RhaXJMb2NrOSAoKXtcbiAgICAgICAgcmVzID1yZXMrcmVzOTtcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBzdGFpckxvY2tKdWRnZSAoKXtcbiAgICAgICAgaWYocmVzLmxlbmd0aDw0KXtcbiAgICAgICAgICAgIGNjLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihyZXMubGVuZ3RoPT09NCYmKHJlcz09PVwiNzU0OVwiKSl7XG4gICAgICAgICAgICBjYy5sb2coXCJzdWNjZXNzXCIpXG4gICAgICAgICAgICB3aW5kb3cubG9ja09mRG9vckluQ1AyID10cnVlO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdjaHAyX2Zsb29yMicpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCJmYWlsXCIpXG4gICAgICAgICAgICByZXMgPVwiXCI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=