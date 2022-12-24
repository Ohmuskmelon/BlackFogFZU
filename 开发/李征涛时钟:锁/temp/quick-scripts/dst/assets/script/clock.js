
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