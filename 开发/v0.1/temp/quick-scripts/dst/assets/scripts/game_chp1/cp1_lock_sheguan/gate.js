
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_sheguan/gate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed596AnlUhLvrXw8KerKm5A', 'gate');
// scripts/game_chp1/cp1_lock_sheguan/gate.js

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
  properties: {// label:cc.Label,
    // thisNode:cc.Node,
    // successNode:cc.Node,
  },
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
    } else if (res.length === 4 && res === "3692") {
      cc.log("success");
      window.lockOfGateCP1 = true;
      cc.find("Canvas/Label").getComponent(cc.Label).string = "密码正确，请拿走石头"; // this.node.active = true;
    } else {
      cc.find("Canvas/Label").getComponent(cc.Label).string = "密码错误，请重试";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja19zaGVndWFuL2dhdGUuanMiXSwibmFtZXMiOlsid2luZG93IiwibG9ja09mR2F0ZUNQMSIsImdhdGUxIiwiZ2F0ZTIiLCJnYXRlMyIsImdhdGU0IiwiZ2F0ZTUiLCJnYXRlNiIsImdhdGU3IiwiZ2F0ZTgiLCJnYXRlOSIsInJlcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibG9nIiwiZ2F0ZUp1ZGdlIiwibGVuZ3RoIiwiZmluZCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxNQUFNLENBQUNDLGFBQVAsR0FBc0IsS0FBdEI7QUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUFlLElBQUlDLE1BQUssR0FBRSxDQUFYO0FBQWMsSUFBSUMsTUFBSyxHQUFHLENBQVo7QUFBaUIsSUFBSUMsTUFBSyxHQUFHLENBQVo7QUFDOUMsSUFBSUMsTUFBSyxHQUFFLENBQVg7QUFBYSxJQUFJQyxNQUFLLEdBQUcsQ0FBWjtBQUFjLElBQUlDLE1BQUssR0FBRyxDQUFaO0FBQWMsSUFBSUMsTUFBSyxHQUFHLENBQVo7QUFBYyxJQUFJQyxNQUFLLEdBQUcsQ0FBWjtBQUFjLElBQUlDLEdBQUcsR0FBRSxFQUFUO0FBQ3JFQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7RUFIUSxDQUhQO0VBUUxiLEtBUkssbUJBUUc7SUFDSlMsR0FBRyxHQUFFQSxHQUFHLEdBQUNULEtBQVQ7SUFFQVUsRUFBRSxDQUFDSSxHQUFILENBQU9MLEdBQVA7RUFDSCxDQVpJO0VBYUxSLEtBYkssbUJBYUc7SUFDSlEsR0FBRyxHQUFFQSxHQUFHLEdBQUNSLE1BQVQ7SUFDQVMsRUFBRSxDQUFDSSxHQUFILENBQU9MLEdBQVA7RUFDSCxDQWhCSTtFQWlCTFAsS0FqQkssbUJBaUJHO0lBQ0pPLEdBQUcsR0FBRUEsR0FBRyxHQUFDUCxNQUFUO0lBQ0FRLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPTCxHQUFQO0VBQ0gsQ0FwQkk7RUFxQkxOLEtBckJLLG1CQXFCRztJQUNKTSxHQUFHLEdBQUVBLEdBQUcsR0FBQ04sTUFBVDtJQUNBTyxFQUFFLENBQUNJLEdBQUgsQ0FBT0wsR0FBUDtFQUNILENBeEJJO0VBeUJMTCxLQXpCSyxtQkF5Qkc7SUFDSkssR0FBRyxHQUFFQSxHQUFHLEdBQUNMLE1BQVQ7SUFDQU0sRUFBRSxDQUFDSSxHQUFILENBQU9MLEdBQVA7RUFDSCxDQTVCSTtFQTZCTEosS0E3QkssbUJBNkJHO0lBQ0pJLEdBQUcsR0FBRUEsR0FBRyxHQUFDSixNQUFUO0lBQ0FLLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPTCxHQUFQO0VBQ0gsQ0FoQ0k7RUFpQ0xILEtBakNLLG1CQWlDRztJQUNKRyxHQUFHLEdBQUVBLEdBQUcsR0FBQ0gsTUFBVDtJQUNBSSxFQUFFLENBQUNJLEdBQUgsQ0FBT0wsR0FBUDtFQUNILENBcENJO0VBcUNMRixLQXJDSyxtQkFxQ0c7SUFDSkUsR0FBRyxHQUFFQSxHQUFHLEdBQUNGLE1BQVQ7SUFDQUcsRUFBRSxDQUFDSSxHQUFILENBQU9MLEdBQVA7RUFDSCxDQXhDSTtFQXlDTEQsS0F6Q0ssbUJBeUNHO0lBQ0pDLEdBQUcsR0FBRUEsR0FBRyxHQUFDRCxNQUFUO0lBQ0FFLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPTCxHQUFQO0VBQ0gsQ0E1Q0k7RUE2Q0xNLFNBN0NLLHVCQTZDTztJQUNSLElBQUdOLEdBQUcsQ0FBQ08sTUFBSixHQUFXLENBQWQsRUFBZ0I7TUFDWk4sRUFBRSxDQUFDSSxHQUFILENBQU9MLEdBQVA7SUFDSCxDQUZELE1BR0ssSUFBR0EsR0FBRyxDQUFDTyxNQUFKLEtBQWEsQ0FBYixJQUFpQlAsR0FBRyxLQUFHLE1BQTFCLEVBQWtDO01BQ25DQyxFQUFFLENBQUNJLEdBQUgsQ0FBTyxTQUFQO01BQ0FoQixNQUFNLENBQUNDLGFBQVAsR0FBc0IsSUFBdEI7TUFDQVcsRUFBRSxDQUFDTyxJQUFILENBQVEsY0FBUixFQUF3QkMsWUFBeEIsQ0FBcUNSLEVBQUUsQ0FBQ1MsS0FBeEMsRUFBK0NDLE1BQS9DLEdBQXdELFlBQXhELENBSG1DLENBSW5DO0lBQ0gsQ0FMSSxNQUtDO01BQ0ZWLEVBQUUsQ0FBQ08sSUFBSCxDQUFRLGNBQVIsRUFBd0JDLFlBQXhCLENBQXFDUixFQUFFLENBQUNTLEtBQXhDLEVBQStDQyxNQUEvQyxHQUF3RCxVQUF4RDtNQUNBVixFQUFFLENBQUNJLEdBQUgsQ0FBTyxNQUFQO01BQ0FMLEdBQUcsR0FBRSxFQUFMO0lBQ0g7RUFDSixDQTNESTtFQThETFksS0E5REssbUJBOERJLENBRVIsQ0FoRUksQ0FrRUw7O0FBbEVLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBnYXRlXG5cblxud2luZG93LmxvY2tPZkdhdGVDUDEgPWZhbHNlO1xubGV0IGdhdGUxID0gMTsgbGV0IGdhdGUyID0yIDtsZXQgZ2F0ZTMgPSAzIDsgIGxldCBnYXRlNCA9IDQ7XG5sZXQgZ2F0ZTUgPTU7bGV0IGdhdGU2ID0gNjtsZXQgZ2F0ZTcgPSA3O2xldCBnYXRlOCA9IDg7bGV0IGdhdGU5ID0gOTtsZXQgcmVzID1cIlwiO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gbGFiZWw6Y2MuTGFiZWwsXG4gICAgICAgIC8vIHRoaXNOb2RlOmNjLk5vZGUsXG4gICAgICAgIC8vIHN1Y2Nlc3NOb2RlOmNjLk5vZGUsXG4gICAgfSxcbiAgICBnYXRlMSAoKXtcbiAgICAgICAgcmVzID1yZXMrZ2F0ZTE7XG5cbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBnYXRlMiAoKXtcbiAgICAgICAgcmVzID1yZXMrZ2F0ZTI7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgZ2F0ZTMgKCl7XG4gICAgICAgIHJlcyA9cmVzK2dhdGUzO1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIGdhdGU0ICgpe1xuICAgICAgICByZXMgPXJlcytnYXRlNDtcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBnYXRlNSAoKXtcbiAgICAgICAgcmVzID1yZXMrZ2F0ZTU7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgZ2F0ZTYgKCl7XG4gICAgICAgIHJlcyA9cmVzK2dhdGU2O1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIGdhdGU3ICgpe1xuICAgICAgICByZXMgPXJlcytnYXRlNztcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgfSxcbiAgICBnYXRlOCAoKXtcbiAgICAgICAgcmVzID1yZXMrZ2F0ZTg7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgIH0sXG4gICAgZ2F0ZTkgKCl7XG4gICAgICAgIHJlcyA9cmVzK2dhdGU5O1xuICAgICAgICBjYy5sb2cocmVzKTtcbiAgICB9LFxuICAgIGdhdGVKdWRnZSAoKXtcbiAgICAgICAgaWYocmVzLmxlbmd0aDw0KXtcbiAgICAgICAgICAgIGNjLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihyZXMubGVuZ3RoPT09NCYmKHJlcz09PVwiMzY5MlwiKSl7XG4gICAgICAgICAgICBjYy5sb2coXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgd2luZG93LmxvY2tPZkdhdGVDUDEgPXRydWU7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLlr4bnoIHmraPnoa7vvIzor7fmi7/otbDnn7PlpLRcIjtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLlr4bnoIHplJnor6/vvIzor7fph43or5VcIjtcbiAgICAgICAgICAgIGNjLmxvZyhcImZhaWxcIilcbiAgICAgICAgICAgIHJlcyA9XCJcIjtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19