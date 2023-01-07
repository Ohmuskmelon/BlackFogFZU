
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_sheguan/getStone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '912684sdVNAgqX0GQbNLq8w', 'getStone');
// scripts/game_chp1/cp1_lock_sheguan/getStone.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    label: cc.Label,
    noStone: cc.Node,
    withStone: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  getStone: function getStone() {
    this.withStone.active = false;
    this.noStone.active = true;
    this.label.getComponent(cc.Label).string = "石头已被成功取走";

    if (!window.TOOLS[window.toolMap["蓝色宝石"]].inBag) {
      window.TOOLS[window.toolMap["蓝色宝石"]].inBag = true;
      window.Bag.push(window.TOOLS[window.toolMap["蓝色宝石"]]);

      for (var key in window.Bag) {
        console.log(window.Bag[key].name);
      }
    }
  },
  start: function start() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja19zaGVndWFuL2dldFN0b25lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGFiZWwiLCJMYWJlbCIsIm5vU3RvbmUiLCJOb2RlIiwid2l0aFN0b25lIiwiZ2V0U3RvbmUiLCJhY3RpdmUiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJ3aW5kb3ciLCJUT09MUyIsInRvb2xNYXAiLCJpbkJhZyIsIkJhZyIsInB1c2giLCJrZXkiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFDSixFQUFFLENBQUNLLEtBREQ7SUFFUkMsT0FBTyxFQUFDTixFQUFFLENBQUNPLElBRkg7SUFHUkMsU0FBUyxFQUFDUixFQUFFLENBQUNPO0VBSEwsQ0FIUDtFQVNMO0VBRUE7RUFDQUUsUUFaSyxzQkFZSztJQUNOLEtBQUtELFNBQUwsQ0FBZUUsTUFBZixHQUF3QixLQUF4QjtJQUNBLEtBQUtKLE9BQUwsQ0FBYUksTUFBYixHQUFzQixJQUF0QjtJQUNBLEtBQUtOLEtBQUwsQ0FBV08sWUFBWCxDQUF3QlgsRUFBRSxDQUFDSyxLQUEzQixFQUFrQ08sTUFBbEMsR0FBMkMsVUFBM0M7O0lBQ0EsSUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsTUFBZixDQUFiLEVBQXFDQyxLQUExQyxFQUFnRDtNQUM1Q0gsTUFBTSxDQUFDQyxLQUFQLENBQWFELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLE1BQWYsQ0FBYixFQUFxQ0MsS0FBckMsR0FBNkMsSUFBN0M7TUFDQUgsTUFBTSxDQUFDSSxHQUFQLENBQVdDLElBQVgsQ0FBZ0JMLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxNQUFmLENBQWIsQ0FBaEI7O01BQ0EsS0FBSyxJQUFJSSxHQUFULElBQWdCTixNQUFNLENBQUNJLEdBQXZCLEVBQTJCO1FBQ3ZCRyxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsTUFBTSxDQUFDSSxHQUFQLENBQVdFLEdBQVgsRUFBZ0JHLElBQTVCO01BQ0g7SUFDSjtFQUNKLENBdkJJO0VBeUJMQyxLQXpCSyxtQkF5QkksQ0FFUjtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgbm9TdG9uZTpjYy5Ob2RlLFxuICAgICAgICB3aXRoU3RvbmU6Y2MuTm9kZSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG4gICAgZ2V0U3RvbmUoKXtcbiAgICAgICAgdGhpcy53aXRoU3RvbmUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9TdG9uZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLnn7PlpLTlt7LooqvmiJDlip/lj5botbBcIjtcbiAgICAgICAgaWYgKCF3aW5kb3cuVE9PTFNbd2luZG93LnRvb2xNYXBbXCLok53oibLlrp3nn7NcIl1dLmluQmFnKXtcbiAgICAgICAgICAgIHdpbmRvdy5UT09MU1t3aW5kb3cudG9vbE1hcFtcIuiTneiJsuWuneefs1wiXV0uaW5CYWcgPSB0cnVlO1xuICAgICAgICAgICAgd2luZG93LkJhZy5wdXNoKHdpbmRvdy5UT09MU1t3aW5kb3cudG9vbE1hcFtcIuiTneiJsuWuneefs1wiXV0pO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHdpbmRvdy5CYWcpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5CYWdba2V5XS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG59KTtcbiJdfQ==