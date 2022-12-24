
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
require('./assets/llj/assets/script/setbuttom');
require('./assets/llj/assets/script/switchbutton');
require('./assets/scripts/0 - 001');
require('./assets/scripts/0 - 002');
require('./assets/scripts/0 - 003');
require('./assets/scripts/0 - 004');
require('./assets/scripts/0 - 005');
require('./assets/scripts/0 - 006');
require('./assets/scripts/0 - 007');
require('./assets/scripts/0 - 008');
require('./assets/scripts/0 - 009');
require('./assets/scripts/0 - 010');
require('./assets/scripts/0 - 011');
require('./assets/scripts/0 - 012');
require('./assets/scripts/0 - 013');
require('./assets/scripts/0 - 014');
require('./assets/scripts/0 - 015');
require('./assets/scripts/0');
require('./assets/scripts/bag/bagSetting');
require('./assets/scripts/bag/bagTool');
require('./assets/scripts/bag/useTool');
require('./assets/scripts/bglockctr');
require('./assets/scripts/button');
require('./assets/scripts/changeback');
require('./assets/scripts/checkbutton');
require('./assets/scripts/chengctr');
require('./assets/scripts/controller/camera');
require('./assets/scripts/controller/changeScene');
require('./assets/scripts/controller/game - 001');
require('./assets/scripts/controller/loadState');
require('./assets/scripts/controller/player_ctrl_pc - 001');
require('./assets/scripts/controller/saveState');
require('./assets/scripts/dialog/dialog - 001');
require('./assets/scripts/game_chp1/cp1_cup/1_java');
require('./assets/scripts/game_chp1/cp1_cup/2_java');
require('./assets/scripts/game_chp1/cp1_cup/3_java');
require('./assets/scripts/game_chp1/cp1_cup/4_java');
require('./assets/scripts/game_chp1/cp1_cup/5_java');
require('./assets/scripts/game_chp1/cp1_lamp/setbuttom');
require('./assets/scripts/game_chp1/cp1_lamp/switchbutton');
require('./assets/scripts/game_chp1/cp1_washingMachine/button');
require('./assets/scripts/game_chp1/cp1_washingMachine/changcolor');
require('./assets/scripts/game_chp1/cp1_washingMachine/check');
require('./assets/scripts/game_chp1/cp1_washingMachine/check_out');
require('./assets/scripts/game_chp1/cp1_washingMachine/config');
require('./assets/scripts/games/gameController');
require('./assets/scripts/info/ItemInfo');
require('./assets/scripts/info/bagInfo');
require('./assets/scripts/info/dialogContent');
require('./assets/scripts/info/gameInfo');
require('./assets/scripts/info/sceneinfo');
require('./assets/scripts/item/item');
require('./assets/scripts/kitchenctr');
require('./assets/scripts/lockctr');
require('./assets/scripts/paperctr');
require('./assets/scripts/savestate');
require('./assets/scripts/showbutton');
require('./assets/scripts/stairlock');
require('./assets/scripts/testbutton');
require('./assets/scripts/tip/tips');
require('./assets/scripts/tip/trigger');
require('./assets/scripts/tool/tool');
require('./assets/scripts/zdctr');

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
                    var __filename = 'preview-scripts/assets/scripts/bag/bagSetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '207531lMtBNepqnCC/RMT2C', 'bagSetting');
// scripts/bag/bagSetting.js

"use strict";

var TOOLS = window.TOOLS;
cc.Class({
  "extends": cc.Component,
  properties: {
    gridLayout: cc.Node,
    toolPrefab: cc.Prefab,
    introduction: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.gridLayout = cc.find("Canvas/Main Camera/bag/bagBg/layout");
    this.toolPrefab = cc.find("Canvas/Main Camera/bag/tool");
    this.introduction = cc.find("Canvas/Main Camera/bag/intro");
    this.toolsArray = window.Bag;
    this.toolMap = toolMap;
    console.log(this.toolMap);
  },
  spawnTools: function spawnTools() {
    // 首先确定gridLayout的各个属性
    var cellWidth = this.gridLayout.width * 0.105;
    var cellHeight = this.gridLayout.height * 0.215;
    var spacingX = this.gridLayout.width * 0.022;
    var spacingY = this.gridLayout.height * 0.045;
    this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
    this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
    this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
    this.gridLayout.getComponent(cc.Layout).spacingY = spacingY; // 根据TOOLS生成相应的道具

    console.log(Bag);
    console.log("Bag size:" + Bag.length);
    this.toolsArray = [];

    for (var _i = 0; _i < window.Bag.length; _i++) {
      var tool = cc.instantiate(this.toolPrefab);
      var id = this.toolMap[window.Bag[_i].name];
      tool.getComponent('bagTool').initInfo(window.TOOLS[id]);
      this.toolsArray.push(tool);
      this.gridLayout.addChild(tool);
    }

    var childrenSet = this.gridLayout.children;

    for (i = 0; i < childrenSet.length; i++) {
      childrenSet[i].active = true;
    }
  },
  bagBtn: function bagBtn() {
    // 背包按钮
    console.log("grid parent active: " + this.gridLayout.parent.active);

    if (this.gridLayout.parent.active) {
      // 隐藏节点
      this.gridLayout.parent.active = false; // 删除所有道具(或者不删，只是隐藏，自己决定)

      this.toolsArray.forEach(function (element) {
        element.removeFromParent();
      });
      this.introduction.active = false;
    } else {
      // 显示节点
      console.log("bagBg active");
      this.gridLayout.parent.active = true; // 生成所有道具

      this.spawnTools();
    }

    window.BagBackground = this.gridLayout.parent;
  },
  update: function update() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhZy9iYWdTZXR0aW5nLmpzIl0sIm5hbWVzIjpbIlRPT0xTIiwid2luZG93IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJpbnRyb2R1Y3Rpb24iLCJvbkxvYWQiLCJmaW5kIiwidG9vbHNBcnJheSIsIkJhZyIsInRvb2xNYXAiLCJjb25zb2xlIiwibG9nIiwic3Bhd25Ub29scyIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsImxlbmd0aCIsImkiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpZCIsIm5hbWUiLCJpbml0SW5mbyIsInB1c2giLCJhZGRDaGlsZCIsImNoaWxkcmVuU2V0IiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJiYWdCdG4iLCJwYXJlbnQiLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbW92ZUZyb21QYXJlbnQiLCJCYWdCYWNrZ3JvdW5kIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEtBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFuQjtBQUVBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFSixFQUFFLENBQUNLLElBRFA7SUFFUkMsVUFBVSxFQUFFTixFQUFFLENBQUNPLE1BRlA7SUFHUkMsWUFBWSxFQUFDUixFQUFFLENBQUNLO0VBSFIsQ0FIUDtFQVNMO0VBRUFJLE1BWEssb0JBV0k7SUFDTCxLQUFLTCxVQUFMLEdBQWtCSixFQUFFLENBQUNVLElBQUgsQ0FBUSxxQ0FBUixDQUFsQjtJQUNBLEtBQUtKLFVBQUwsR0FBa0JOLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLDZCQUFSLENBQWxCO0lBQ0EsS0FBS0YsWUFBTCxHQUFvQlIsRUFBRSxDQUFDVSxJQUFILENBQVEsOEJBQVIsQ0FBcEI7SUFDQSxLQUFLQyxVQUFMLEdBQWtCWixNQUFNLENBQUNhLEdBQXpCO0lBQ0EsS0FBS0MsT0FBTCxHQUFlQSxPQUFmO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtGLE9BQWpCO0VBQ0gsQ0FsQkk7RUFvQkxHLFVBcEJLLHdCQW9CUTtJQUNUO0lBQ0EsSUFBSUMsU0FBUyxHQUFHLEtBQUtiLFVBQUwsQ0FBZ0JjLEtBQWhCLEdBQXdCLEtBQXhDO0lBQ0EsSUFBSUMsVUFBVSxHQUFHLEtBQUtmLFVBQUwsQ0FBZ0JnQixNQUFoQixHQUF5QixLQUExQztJQUNBLElBQUlDLFFBQVEsR0FBRyxLQUFLakIsVUFBTCxDQUFnQmMsS0FBaEIsR0FBd0IsS0FBdkM7SUFDQSxJQUFJSSxRQUFRLEdBQUcsS0FBS2xCLFVBQUwsQ0FBZ0JnQixNQUFoQixHQUF5QixLQUF4QztJQUVBLEtBQUtoQixVQUFMLENBQWdCbUIsWUFBaEIsQ0FBNkJ2QixFQUFFLENBQUN3QixNQUFoQyxFQUF3Q0MsUUFBeEMsQ0FBaURQLEtBQWpELEdBQXlERCxTQUF6RDtJQUNBLEtBQUtiLFVBQUwsQ0FBZ0JtQixZQUFoQixDQUE2QnZCLEVBQUUsQ0FBQ3dCLE1BQWhDLEVBQXdDQyxRQUF4QyxDQUFpREwsTUFBakQsR0FBMERELFVBQTFEO0lBQ0EsS0FBS2YsVUFBTCxDQUFnQm1CLFlBQWhCLENBQTZCdkIsRUFBRSxDQUFDd0IsTUFBaEMsRUFBd0NILFFBQXhDLEdBQW1EQSxRQUFuRDtJQUNBLEtBQUtqQixVQUFMLENBQWdCbUIsWUFBaEIsQ0FBNkJ2QixFQUFFLENBQUN3QixNQUFoQyxFQUF3Q0YsUUFBeEMsR0FBbURBLFFBQW5ELENBVlMsQ0FZVDs7SUFFQVIsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7SUFDQUUsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBY0gsR0FBRyxDQUFDYyxNQUE5QjtJQUVBLEtBQUtmLFVBQUwsR0FBa0IsRUFBbEI7O0lBQ0EsS0FBSyxJQUFJZ0IsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRzVCLE1BQU0sQ0FBQ2EsR0FBUCxDQUFXYyxNQUEvQixFQUF1Q0MsRUFBQyxFQUF4QyxFQUE0QztNQUN4QyxJQUFJQyxJQUFJLEdBQUc1QixFQUFFLENBQUM2QixXQUFILENBQWUsS0FBS3ZCLFVBQXBCLENBQVg7TUFDQSxJQUFJd0IsRUFBRSxHQUFHLEtBQUtqQixPQUFMLENBQWFkLE1BQU0sQ0FBQ2EsR0FBUCxDQUFXZSxFQUFYLEVBQWNJLElBQTNCLENBQVQ7TUFDQUgsSUFBSSxDQUFDTCxZQUFMLENBQWtCLFNBQWxCLEVBQTZCUyxRQUE3QixDQUFzQ2pDLE1BQU0sQ0FBQ0QsS0FBUCxDQUFhZ0MsRUFBYixDQUF0QztNQUNBLEtBQUtuQixVQUFMLENBQWdCc0IsSUFBaEIsQ0FBcUJMLElBQXJCO01BQ0EsS0FBS3hCLFVBQUwsQ0FBZ0I4QixRQUFoQixDQUF5Qk4sSUFBekI7SUFDSDs7SUFDRCxJQUFJTyxXQUFXLEdBQUcsS0FBSy9CLFVBQUwsQ0FBZ0JnQyxRQUFsQzs7SUFDQSxLQUFLVCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdRLFdBQVcsQ0FBQ1QsTUFBNUIsRUFBb0NDLENBQUMsRUFBckMsRUFBeUM7TUFDckNRLFdBQVcsQ0FBQ1IsQ0FBRCxDQUFYLENBQWVVLE1BQWYsR0FBd0IsSUFBeEI7SUFDSDtFQUNKLENBakRJO0VBbURMQyxNQW5ESyxvQkFtREk7SUFDTDtJQUNBeEIsT0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQXlCLEtBQUtYLFVBQUwsQ0FBZ0JtQyxNQUFoQixDQUF1QkYsTUFBNUQ7O0lBQ0EsSUFBSSxLQUFLakMsVUFBTCxDQUFnQm1DLE1BQWhCLENBQXVCRixNQUEzQixFQUFtQztNQUMvQjtNQUNBLEtBQUtqQyxVQUFMLENBQWdCbUMsTUFBaEIsQ0FBdUJGLE1BQXZCLEdBQWdDLEtBQWhDLENBRitCLENBSS9COztNQUNBLEtBQUsxQixVQUFMLENBQWdCNkIsT0FBaEIsQ0FBd0IsVUFBQUMsT0FBTyxFQUFJO1FBQy9CQSxPQUFPLENBQUNDLGdCQUFSO01BQ0gsQ0FGRDtNQUdBLEtBQUtsQyxZQUFMLENBQWtCNkIsTUFBbEIsR0FBMkIsS0FBM0I7SUFFSCxDQVZELE1BV0s7TUFDRDtNQUNBdkIsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtNQUNBLEtBQUtYLFVBQUwsQ0FBZ0JtQyxNQUFoQixDQUF1QkYsTUFBdkIsR0FBZ0MsSUFBaEMsQ0FIQyxDQUtEOztNQUNBLEtBQUtyQixVQUFMO0lBQ0g7O0lBQ0RqQixNQUFNLENBQUM0QyxhQUFQLEdBQXVCLEtBQUt2QyxVQUFMLENBQWdCbUMsTUFBdkM7RUFDSCxDQTFFSTtFQTJFTEssTUEzRUssb0JBMkVJLENBRVI7QUE3RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRPT0xTID0gd2luZG93LlRPT0xTO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBncmlkTGF5b3V0OiBjYy5Ob2RlLFxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgICAgIGludHJvZHVjdGlvbjpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0ID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9iYWcvYmFnQmcvbGF5b3V0XCIpO1xuICAgICAgICB0aGlzLnRvb2xQcmVmYWIgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy90b29sXCIpO1xuICAgICAgICB0aGlzLmludHJvZHVjdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL2ludHJvXCIpO1xuICAgICAgICB0aGlzLnRvb2xzQXJyYXkgPSB3aW5kb3cuQmFnO1xuICAgICAgICB0aGlzLnRvb2xNYXAgPSB0b29sTWFwO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvb2xNYXApO1xuICAgIH0sXG5cbiAgICBzcGF3blRvb2xzKCkge1xuICAgICAgICAvLyDpppblhYjnoa7lrppncmlkTGF5b3V055qE5ZCE5Liq5bGe5oCnXG4gICAgICAgIGxldCBjZWxsV2lkdGggPSB0aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjEwNTtcbiAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yMTU7XG4gICAgICAgIGxldCBzcGFjaW5nWCA9IHRoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMDIyO1xuICAgICAgICBsZXQgc3BhY2luZ1kgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNDU7XG5cbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xuICAgICAgICB0aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUuaGVpZ2h0ID0gY2VsbEhlaWdodDtcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XG4gICAgICAgIHRoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xuXG4gICAgICAgIC8vIOagueaNrlRPT0xT55Sf5oiQ55u45bqU55qE6YGT5YW3XG5cbiAgICAgICAgY29uc29sZS5sb2coQmFnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJCYWcgc2l6ZTpcIiArIEJhZy5sZW5ndGgpO1xuXG4gICAgICAgIHRoaXMudG9vbHNBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5CYWcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUodGhpcy50b29sUHJlZmFiKTtcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMudG9vbE1hcFt3aW5kb3cuQmFnW2ldLm5hbWVdO1xuICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ2JhZ1Rvb2wnKS5pbml0SW5mbyh3aW5kb3cuVE9PTFNbaWRdKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHNBcnJheS5wdXNoKHRvb2wpO1xuICAgICAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmFkZENoaWxkKHRvb2wpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGlsZHJlblNldCA9IHRoaXMuZ3JpZExheW91dC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuU2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZHJlblNldFtpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJhZ0J0bigpIHtcbiAgICAgICAgLy8g6IOM5YyF5oyJ6ZKuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ3JpZCBwYXJlbnQgYWN0aXZlOiBcIiArIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlKTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlKSB7XG4gICAgICAgICAgICAvLyDpmpDol4/oioLngrlcbiAgICAgICAgICAgIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXG4gICAgICAgICAgICB0aGlzLnRvb2xzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaYvuekuuiKgueCuVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWdCZyBhY3RpdmVcIik7XG4gICAgICAgICAgICB0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIOeUn+aIkOaJgOaciemBk+WFt1xuICAgICAgICAgICAgdGhpcy5zcGF3blRvb2xzKCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LkJhZ0JhY2tncm91bmQgPSB0aGlzLmdyaWRMYXlvdXQucGFyZW50O1xuICAgIH0sXG4gICAgdXBkYXRlKCkge1xuXG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cup/4_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e03b8ROOF9La4wgX65snXcx', '4_java');
// scripts/game_chp1/cp1_cup/4_java.js

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
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      listen[touchcnt] = 3;
      touchcnt++;
    });
  },
  update: function update(dt) {
    var self = this;

    if (cup[3] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[3] == 0) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY3VwLzRfamF2YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsImxpc3RlbiIsInRvdWNoY250IiwidXBkYXRlIiwiZHQiLCJzZWxmIiwiY3VwIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxNQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFpQixDQUFqQjtNQUNBQSxRQUFRO0lBR1gsQ0FMRDtFQU1ILENBaENJO0VBa0NMQyxNQWxDSyxrQkFrQ0dDLEVBbENILEVBa0NPO0lBQ1IsSUFBSUMsSUFBSSxHQUFDLElBQVQ7O0lBQ0EsSUFBR0MsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtNQUNUaEIsRUFBRSxDQUFDaUIsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCbEIsRUFBRSxDQUFDbUIsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETixJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ0QixFQUFFLENBQUN1QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO01BQ0QsQ0FGSDtJQUdIOztJQUNELElBQUdMLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBUSxDQUFYLEVBQWE7TUFDVGhCLEVBQUUsQ0FBQ2lCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmxCLEVBQUUsQ0FBQ21CLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtRQUNyRE4sSUFBSSxDQUFDVixJQUFMLENBQVVpQixZQUFWLENBQXVCdEIsRUFBRSxDQUFDdUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBL0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxpc3Rlblt0b3VjaGNudF09MztcclxuICAgICAgICAgICAgdG91Y2hjbnQrKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKGN1cFszXT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY3VwWzNdPT0wKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 005.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61780ptNb9Kuog+RlKSJkFe', '0 - 005');
// scripts/0 - 005.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 5;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 5;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMDUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsQ0FBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsQ0FBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9NTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9NTtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/info/bagInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ae5eWWmX1NSKqd4amigdRl', 'bagInfo');
// scripts/info/bagInfo.js

"use strict";

window.TOOLS = [{
  name: '卷轴',
  // 道具名称，对应resources/tools中的图片名字
  intro: '这是一个卷轴',
  // 道具介绍，当玩家在背包中点击道具后，显示介绍
  picUrl: "tools/卷轴",
  // 动态加载路径
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '心经',
  intro: '欲练此功，必先自宫',
  picUrl: "tools/心经",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '火腿',
  intro: '来自金华',
  picUrl: 'tools/火腿',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '煎饺',
  intro: '挺好吃的',
  picUrl: 'tools/煎饺',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '烈酒',
  intro: '武松当年喝这个的话，可能过不了岗',
  picUrl: 'tools/烈酒',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '金钥匙',
  intro: '金色的要钥匙',
  picUrl: 'tools/金钥匙',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '银钥匙',
  intro: '银色的钥匙',
  picUrl: 'tools/银钥匙',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '黄石',
  intro: '来自黄石公园的石头叫做黄石',
  picUrl: "tools/黄石",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}];
window.toolMap = {
  "卷轴": 0,
  "心经": 1,
  "火腿": 2,
  "煎饺": 3,
  "烈酒": 4,
  "金钥匙": 5,
  "银钥匙": 6,
  "黄石": 7
};
window.Bag = [];
window.InUse = '';
window.ToolUsed = false; // window.BagBackground = null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vYmFnSW5mby5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJUT09MUyIsIm5hbWUiLCJpbnRybyIsInBpY1VybCIsImNvbm5lY3QiLCJudW1PZkNvbiIsImluQmFnIiwiaXNBY3RpdmUiLCJ0b29sTWFwIiwiQmFnIiwiSW5Vc2UiLCJUb29sVXNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWUsQ0FDWDtFQUNJQyxJQUFJLEVBQUUsSUFEVjtFQUN1QztFQUNuQ0MsS0FBSyxFQUFFLFFBRlg7RUFFb0M7RUFDaENDLE1BQU0sRUFBRSxVQUhaO0VBR3VDO0VBQ25DQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQURXLEVBVVg7RUFDSU4sSUFBSSxFQUFFLElBRFY7RUFFSUMsS0FBSyxFQUFFLFdBRlg7RUFHSUMsTUFBTSxFQUFFLFVBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0FWVyxFQW1CWDtFQUNJTixJQUFJLEVBQUUsSUFEVjtFQUVJQyxLQUFLLEVBQUUsTUFGWDtFQUdJQyxNQUFNLEVBQUUsVUFIWjtFQUlJQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQW5CVyxFQTRCWDtFQUNJTixJQUFJLEVBQUUsSUFEVjtFQUVJQyxLQUFLLEVBQUUsTUFGWDtFQUdJQyxNQUFNLEVBQUUsVUFIWjtFQUlJQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQTVCVyxFQXFDWDtFQUNJTixJQUFJLEVBQUUsSUFEVjtFQUVJQyxLQUFLLEVBQUUsa0JBRlg7RUFHSUMsTUFBTSxFQUFFLFVBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0FyQ1csRUE4Q1g7RUFDSU4sSUFBSSxFQUFFLEtBRFY7RUFFSUMsS0FBSyxFQUFFLFFBRlg7RUFHSUMsTUFBTSxFQUFFLFdBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0E5Q1csRUF1RFg7RUFDSU4sSUFBSSxFQUFFLEtBRFY7RUFFSUMsS0FBSyxFQUFFLE9BRlg7RUFHSUMsTUFBTSxFQUFFLFdBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0F2RFcsRUFnRVg7RUFDSU4sSUFBSSxFQUFFLElBRFY7RUFFSUMsS0FBSyxFQUFFLGVBRlg7RUFHSUMsTUFBTSxFQUFFLFVBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0FoRVcsQ0FBZjtBQTRFQVIsTUFBTSxDQUFDUyxPQUFQLEdBQWlCO0VBQ2IsTUFBTyxDQURNO0VBRWIsTUFBTyxDQUZNO0VBR2IsTUFBTSxDQUhPO0VBSWIsTUFBSyxDQUpRO0VBS2IsTUFBSyxDQUxRO0VBTWIsT0FBTSxDQU5PO0VBT2IsT0FBTSxDQVBPO0VBUWIsTUFBSztBQVJRLENBQWpCO0FBVUFULE1BQU0sQ0FBQ1UsR0FBUCxHQUFhLEVBQWI7QUFDQVYsTUFBTSxDQUFDVyxLQUFQLEdBQWUsRUFBZjtBQUNBWCxNQUFNLENBQUNZLFFBQVAsR0FBa0IsS0FBbEIsRUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LlRPT0xTID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ+WNt+i9tCcsICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YGT5YW35ZCN56ew77yM5a+55bqUcmVzb3VyY2VzL3Rvb2xz5Lit55qE5Zu+54mH5ZCN5a2XXG4gICAgICAgIGludHJvOiAn6L+Z5piv5LiA5Liq5Y236L20JywgICAgICAgICAgICAgICAgLy8g6YGT5YW35LuL57uN77yM5b2T546p5a625Zyo6IOM5YyF5Lit54K55Ye76YGT5YW35ZCO77yM5pi+56S65LuL57uNXG4gICAgICAgIHBpY1VybDogXCJ0b29scy/ljbfovbRcIiAsICAgICAgICAgICAgICAgLy8g5Yqo5oCB5Yqg6L296Lev5b6EXG4gICAgICAgIGNvbm5lY3Q6IG51bGwsXG4gICAgICAgIG51bU9mQ29uOiAwLFxuICAgICAgICBpbkJhZzogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlIDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICflv4Pnu48nLFxuICAgICAgICBpbnRybzogJ+assue7g+atpOWKn++8jOW/heWFiOiHquWuqycsXG4gICAgICAgIHBpY1VybDogXCJ0b29scy/lv4Pnu49cIiAgLCAgIFxuICAgICAgICBjb25uZWN0OiBudWxsLFxuICAgICAgICBudW1PZkNvbjogMCxcbiAgICAgICAgaW5CYWc6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlLCAgICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAn54Gr6IW/JyxcbiAgICAgICAgaW50cm86ICfmnaXoh6rph5HljY4nLFxuICAgICAgICBwaWNVcmw6ICd0b29scy/ngavohb8nICxcbiAgICAgICAgY29ubmVjdDogbnVsbCxcbiAgICAgICAgbnVtT2ZDb246IDAsXG4gICAgICAgIGluQmFnOiBmYWxzZSxcbiAgICAgICAgaXNBY3RpdmUgOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ+eFjumluicsXG4gICAgICAgIGludHJvOiAn5oy65aW95ZCD55qEJyxcbiAgICAgICAgcGljVXJsOiAndG9vbHMv54WO6aW6JyAsXG4gICAgICAgIGNvbm5lY3Q6IG51bGwsXG4gICAgICAgIG51bU9mQ29uOiAwLFxuICAgICAgICBpbkJhZzogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlIDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICfng4jphZInLFxuICAgICAgICBpbnRybzogJ+atpuadvuW9k+W5tOWWnei/meS4queahOivne+8jOWPr+iDvei/h+S4jeS6huWylycsXG4gICAgICAgIHBpY1VybDogJ3Rvb2xzL+eDiOmFkicgLFxuICAgICAgICBjb25uZWN0OiBudWxsLFxuICAgICAgICBudW1PZkNvbjogMCxcbiAgICAgICAgaW5CYWc6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAn6YeR6ZKl5YyZJyxcbiAgICAgICAgaW50cm86ICfph5HoibLnmoTopoHpkqXljJknLFxuICAgICAgICBwaWNVcmw6ICd0b29scy/ph5HpkqXljJknLFxuICAgICAgICBjb25uZWN0OiBudWxsLFxuICAgICAgICBudW1PZkNvbjogMCxcbiAgICAgICAgaW5CYWc6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAn6ZO26ZKl5YyZJyxcbiAgICAgICAgaW50cm86ICfpk7boibLnmoTpkqXljJknLFxuICAgICAgICBwaWNVcmw6ICd0b29scy/pk7bpkqXljJknLCBcbiAgICAgICAgY29ubmVjdDogbnVsbCxcbiAgICAgICAgbnVtT2ZDb246IDAsXG4gICAgICAgIGluQmFnOiBmYWxzZSxcbiAgICAgICAgaXNBY3RpdmUgOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ+m7hOefsycsXG4gICAgICAgIGludHJvOiAn5p2l6Ieq6buE55+z5YWs5Zut55qE55+z5aS05Y+r5YGa6buE55+zJyxcbiAgICAgICAgcGljVXJsOiBcInRvb2xzL+m7hOefs1wiICxcbiAgICAgICAgY29ubmVjdDogbnVsbCxcbiAgICAgICAgbnVtT2ZDb246IDAsXG4gICAgICAgIGluQmFnOiBmYWxzZSxcbiAgICAgICAgaXNBY3RpdmUgOiBmYWxzZSxcbiAgICB9XG5dO1xuXG5cdFxud2luZG93LnRvb2xNYXAgPSB7XG4gICAgXCLljbfovbRcIiA6IDAsXG4gICAgXCLlv4Pnu49cIiA6IDEsXG4gICAgXCLngavohb9cIjogMixcbiAgICBcIueFjumlulwiOjMsXG4gICAgXCLng4jphZJcIjo0LFxuICAgIFwi6YeR6ZKl5YyZXCI6NSxcbiAgICBcIumTtumSpeWMmVwiOjYsXG4gICAgXCLpu4Tnn7NcIjo3LFxufVxud2luZG93LkJhZyA9IFtdO1xud2luZG93LkluVXNlID0gJyc7XG53aW5kb3cuVG9vbFVzZWQgPSBmYWxzZTtcbi8vIHdpbmRvdy5CYWdCYWNrZ3JvdW5kID0gbnVsbDtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/games/gameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f929oxxZRLx4hl8VDJ+f1j', 'gameController');
// scripts/games/gameController.js

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
    tip: cc.Node,
    playerNode: cc.Node,
    node: cc.Node
  },
  start: function start() {
    this.scene = Global.currentScene;
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.isIn = false;
    this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  canStartGame: function canStartGame() {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos);
    console.log("dis:" + dis);

    if (dis <= 100) {
      return true;
    } else {
      return false;
    }
  },
  onKeyDown: function onKeyDown(event) {
    this.isIn = this.canStartGame();
    console.log("In:" + this.isIn);

    if (this.isIn) {
      if (event.keyCode == cc.macro.KEY.g) {
        this.saveState();
        this.changeScene();
      }
    }
  },
  changeScene: function changeScene() {
    var game = this.node.name;
    console.log("games: " + game);
    this.nextScene = game;
    cc.director.loadScene(this.nextScene, this.onSceneLaunched);
  },
  saveState: function saveState() {
    window.player.pos_X = this.playerNode.getPosition().x;
    window.player.pos_Y = this.playerNode.getPosition().y;
    window.player.enterGame = true;
    console.log(window.player.pos_X, window.player.pos_Y);
  },
  onSceneLaunched: function onSceneLaunched() {
    if (window.InUse != '') {
      var i = 0;

      for (; i < window.Bag.length; i++) {
        if (window.Bag[i].name == window.InUse) {
          break;
        }
      }

      var id = window.toolMap[window.Bag[i].name];
      console.log("id:" + id);
      var tool = window.TOOLS[id];
      console.log("tool:" + tool.name);
      this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
      var self = this.useItem;
      console.log("self out: " + self.name);
      cc.loader.loadRes(tool['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
        self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        console.log("self in: " + self.name);
      });
    }
  },
  update: function update(dt) {
    if (Global.itemType == 'games' && Global.itemName == this.name) {
      this.enterGame();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVzL2dhbWVDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwIiwiTm9kZSIsInBsYXllck5vZGUiLCJub2RlIiwic3RhcnQiLCJzY2VuZSIsIkdsb2JhbCIsImN1cnJlbnRTY2VuZSIsImZpbmQiLCJpc0luIiwidXNlSXRlbSIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiY2FuU3RhcnRHYW1lIiwicF9wb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsImVfcG9zIiwiZGlzIiwiVmVjMiIsImRpc3RhbmNlIiwiY29uc29sZSIsImxvZyIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiZyIsInNhdmVTdGF0ZSIsImNoYW5nZVNjZW5lIiwiZ2FtZSIsIm5hbWUiLCJuZXh0U2NlbmUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uU2NlbmVMYXVuY2hlZCIsIndpbmRvdyIsInBsYXllciIsInBvc19YIiwiZ2V0UG9zaXRpb24iLCJ4IiwicG9zX1kiLCJ5IiwiZW50ZXJHYW1lIiwiSW5Vc2UiLCJpIiwiQmFnIiwibGVuZ3RoIiwiaWQiLCJ0b29sTWFwIiwidG9vbCIsIlRPT0xTIiwic2VsZiIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwidXBkYXRlIiwiZHQiLCJpdGVtVHlwZSIsIml0ZW1OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsR0FBRyxFQUFDSixFQUFFLENBQUNLLElBREM7SUFFUkMsVUFBVSxFQUFDTixFQUFFLENBQUNLLElBRk47SUFHUkUsSUFBSSxFQUFDUCxFQUFFLENBQUNLO0VBSEEsQ0FIUDtFQVNMRyxLQVRLLG1CQVNJO0lBQ0wsS0FBS0MsS0FBTCxHQUFhQyxNQUFNLENBQUNDLFlBQXBCO0lBQ0EsS0FBS1AsR0FBTCxHQUFXSixFQUFFLENBQUNZLElBQUgsQ0FBUSx3QkFBUixDQUFYO0lBQ0EsS0FBS0MsSUFBTCxHQUFZLEtBQVo7SUFDQSxLQUFLQyxPQUFMLEdBQWVkLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHFDQUFSLENBQWY7SUFDQVosRUFBRSxDQUFDZSxXQUFILENBQWVDLEVBQWYsQ0FBa0JoQixFQUFFLENBQUNpQixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELEVBQXFFLElBQXJFO0VBQ0gsQ0FmSTtFQWlCTEMsWUFqQkssMEJBaUJTO0lBQ1YsSUFBSUMsS0FBSyxHQUFHLEtBQUtoQixVQUFMLENBQWdCaUIscUJBQWhCLENBQXNDdkIsRUFBRSxDQUFDd0IsRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFSLENBQXRDLENBQVo7SUFDQSxJQUFJQyxLQUFLLEdBQUksS0FBS2xCLElBQUwsQ0FBVWdCLHFCQUFWLENBQWdDdkIsRUFBRSxDQUFDd0IsRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFSLENBQWhDLENBQWI7SUFDQSxJQUFJRSxHQUFHLEdBQUcxQixFQUFFLENBQUMyQixJQUFILENBQVFDLFFBQVIsQ0FBaUJILEtBQWpCLEVBQXdCSCxLQUF4QixDQUFWO0lBQ0FPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQU9KLEdBQW5COztJQUNBLElBQUlBLEdBQUcsSUFBSSxHQUFYLEVBQWdCO01BQ1osT0FBTyxJQUFQO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsT0FBTyxLQUFQO0lBQ0g7RUFDSixDQTNCSTtFQThCTE4sU0E5QksscUJBOEJLVyxLQTlCTCxFQThCWTtJQUNiLEtBQUtsQixJQUFMLEdBQVksS0FBS1EsWUFBTCxFQUFaO0lBQ0FRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQU0sS0FBS2pCLElBQXZCOztJQUNBLElBQUksS0FBS0EsSUFBVCxFQUFlO01BQ1gsSUFBSWtCLEtBQUssQ0FBQ0MsT0FBTixJQUFpQmhDLEVBQUUsQ0FBQ2lDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQyxFQUFxQztRQUNqQyxLQUFLQyxTQUFMO1FBQ0EsS0FBS0MsV0FBTDtNQUNIO0lBQ0o7RUFDSixDQXZDSTtFQXlDTEEsV0F6Q0sseUJBeUNRO0lBQ1QsSUFBSUMsSUFBSSxHQUFHLEtBQUsvQixJQUFMLENBQVVnQyxJQUFyQjtJQUNBVixPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFVUSxJQUF0QjtJQUNBLEtBQUtFLFNBQUwsR0FBaUJGLElBQWpCO0lBQ0F0QyxFQUFFLENBQUN5QyxRQUFILENBQVlDLFNBQVosQ0FBc0IsS0FBS0YsU0FBM0IsRUFBcUMsS0FBS0csZUFBMUM7RUFDSCxDQTlDSTtFQWdETFAsU0FoREssdUJBZ0RNO0lBQ1BRLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLEdBQXNCLEtBQUt4QyxVQUFMLENBQWdCeUMsV0FBaEIsR0FBOEJDLENBQXBEO0lBQ0FKLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSSxLQUFkLEdBQXNCLEtBQUszQyxVQUFMLENBQWdCeUMsV0FBaEIsR0FBOEJHLENBQXBEO0lBQ0FOLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTSxTQUFkLEdBQTBCLElBQTFCO0lBQ0F0QixPQUFPLENBQUNDLEdBQVIsQ0FBWWMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQTFCLEVBQWlDRixNQUFNLENBQUNDLE1BQVAsQ0FBY0ksS0FBL0M7RUFDSCxDQXJESTtFQXVETE4sZUF2REssNkJBdURZO0lBQ2IsSUFBR0MsTUFBTSxDQUFDUSxLQUFQLElBQWUsRUFBbEIsRUFBcUI7TUFDakIsSUFBSUMsQ0FBQyxHQUFHLENBQVI7O01BQ0EsT0FBT0EsQ0FBQyxHQUFHVCxNQUFNLENBQUNVLEdBQVAsQ0FBV0MsTUFBdEIsRUFBOEJGLENBQUMsRUFBL0IsRUFBbUM7UUFDL0IsSUFBR1QsTUFBTSxDQUFDVSxHQUFQLENBQVdELENBQVgsRUFBY2QsSUFBZCxJQUFzQkssTUFBTSxDQUFDUSxLQUFoQyxFQUFzQztVQUNsQztRQUNIO01BQ0o7O01BQ0QsSUFBSUksRUFBRSxHQUFHWixNQUFNLENBQUNhLE9BQVAsQ0FBZWIsTUFBTSxDQUFDVSxHQUFQLENBQVdELENBQVgsRUFBY2QsSUFBN0IsQ0FBVDtNQUNBVixPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFPMEIsRUFBbkI7TUFDQSxJQUFJRSxJQUFJLEdBQUdkLE1BQU0sQ0FBQ2UsS0FBUCxDQUFhSCxFQUFiLENBQVg7TUFDQTNCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVE0QixJQUFJLENBQUNuQixJQUF6QjtNQUNBLEtBQUt6QixPQUFMLEdBQWVkLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHFDQUFSLENBQWY7TUFDQSxJQUFJZ0QsSUFBSSxHQUFHLEtBQUs5QyxPQUFoQjtNQUNBZSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFhOEIsSUFBSSxDQUFDckIsSUFBOUI7TUFDQXZDLEVBQUUsQ0FBQzZELE1BQUgsQ0FBVUMsT0FBVixDQUFrQkosSUFBSSxDQUFDLFFBQUQsQ0FBdEIsRUFBa0MxRCxFQUFFLENBQUMrRCxXQUFyQyxFQUFrRCxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7UUFDMUVMLElBQUksQ0FBQ00sWUFBTCxDQUFrQmxFLEVBQUUsQ0FBQ21FLE1BQXJCLEVBQTZCRixXQUE3QixHQUEyQ0EsV0FBM0M7UUFDQXBDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVk4QixJQUFJLENBQUNyQixJQUE3QjtNQUNILENBSEQ7SUFJSDtFQUNKLENBM0VJO0VBOEVMNkIsTUE5RUssa0JBOEVHQyxFQTlFSCxFQThFTztJQUNSLElBQUczRCxNQUFNLENBQUM0RCxRQUFQLElBQW1CLE9BQW5CLElBQThCNUQsTUFBTSxDQUFDNkQsUUFBUCxJQUFtQixLQUFLaEMsSUFBekQsRUFBOEQ7TUFDMUQsS0FBS1ksU0FBTDtJQUNIO0VBQ0o7QUFsRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwOmNjLk5vZGUsXG4gICAgICAgIHBsYXllck5vZGU6Y2MuTm9kZSxcbiAgICAgICAgbm9kZTpjYy5Ob2RlXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IEdsb2JhbC5jdXJyZW50U2NlbmU7XG4gICAgICAgIHRoaXMudGlwID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS90aXBcIik7XG4gICAgICAgIHRoaXMuaXNJbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBjYW5TdGFydEdhbWUoKXtcbiAgICAgICAgbGV0IHBfcG9zID0gdGhpcy5wbGF5ZXJOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKTtcbiAgICAgICAgbGV0IGVfcG9zID0gIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XG4gICAgICAgIGxldCBkaXMgPSBjYy5WZWMyLmRpc3RhbmNlKGVfcG9zLCBwX3Bvcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlzOlwiK2Rpcyk7XG4gICAgICAgIGlmIChkaXMgPD0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICB0aGlzLmlzSW4gPSB0aGlzLmNhblN0YXJ0R2FtZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluOlwiK3RoaXMuaXNJbik7XG4gICAgICAgIGlmICh0aGlzLmlzSW4pIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNjZW5lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hhbmdlU2NlbmUoKXtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lczogXCIrZ2FtZSk7XG4gICAgICAgIHRoaXMubmV4dFNjZW5lID0gZ2FtZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMubmV4dFNjZW5lLHRoaXMub25TY2VuZUxhdW5jaGVkKTtcbiAgICB9LFxuXG4gICAgc2F2ZVN0YXRlKCl7XG4gICAgICAgIHdpbmRvdy5wbGF5ZXIucG9zX1ggPSB0aGlzLnBsYXllck5vZGUuZ2V0UG9zaXRpb24oKS54O1xuICAgICAgICB3aW5kb3cucGxheWVyLnBvc19ZID0gdGhpcy5wbGF5ZXJOb2RlLmdldFBvc2l0aW9uKCkueTtcbiAgICAgICAgd2luZG93LnBsYXllci5lbnRlckdhbWUgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cucGxheWVyLnBvc19YICx3aW5kb3cucGxheWVyLnBvc19ZKTsgXG4gICAgfSxcblxuICAgIG9uU2NlbmVMYXVuY2hlZCgpe1xuICAgICAgICBpZih3aW5kb3cuSW5Vc2UgIT0nJyl7XG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIGZvciAoOyBpIDwgd2luZG93LkJhZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5CYWdbaV0ubmFtZSA9PSB3aW5kb3cuSW5Vc2Upe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaWQgPSB3aW5kb3cudG9vbE1hcFt3aW5kb3cuQmFnW2ldLm5hbWVdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZDpcIisgaWQpO1xuICAgICAgICAgICAgbGV0IHRvb2wgPSB3aW5kb3cuVE9PTFNbaWRdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b29sOlwiK3Rvb2wubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMudXNlSXRlbTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZiBvdXQ6IFwiK3NlbGYubmFtZSk7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh0b29sWydwaWNVcmwnXSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZiBpbjogXCIrc2VsZi5uYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZihHbG9iYWwuaXRlbVR5cGUgPT0gJ2dhbWVzJyAmJiBHbG9iYWwuaXRlbU5hbWUgPT0gdGhpcy5uYW1lKXtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJHYW1lKCk7XG4gICAgICAgIH0gICBcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/loadState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5e0819iXNMea+J2BVnk8gh', 'loadState');
// scripts/controller/loadState.js

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
  onLoad: function onLoad() {
    var startData = cc.director.getScene().getChildByName('StartData');
  },
  "if": function _if(startData) {
    this.data = startData.data;
  } // start () {
  // },
  // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvbG9hZFN0YXRlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwic3RhcnREYXRhIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBQyxNQXZCSyxvQkF1Qks7SUFDTixJQUFJQyxTQUFTLEdBQUdMLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxjQUF2QixDQUFzQyxXQUF0QyxDQUFoQjtFQUNILENBekJJO0VBQUEsbUJBMkJESCxTQTNCQyxFQTJCVTtJQUNYLEtBQUtJLElBQUwsR0FBWUosU0FBUyxDQUFDSSxJQUF0QjtFQUNILENBN0JJLENBZ0NMO0VBRUE7RUFFQTs7QUFwQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB2YXIgc3RhcnREYXRhID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnU3RhcnREYXRhJyk7XG4gICAgfSxcblxuICAgIGlmIChzdGFydERhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gc3RhcnREYXRhLmRhdGFcbiAgICB9XG5cblxuICAgIC8vIHN0YXJ0ICgpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tip/trigger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9b7er95LNEUaUK+4wdErSz', 'trigger');
// scripts/tip/trigger.js

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
    tip: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  initNpc: function initNpc() {
    this.charType = this.node.parent.name;
    this.playerNode = cc.find("Canvas/bg/player/body");
    this.tt = 0;
    this.canShow = false;
  },
  onLoad: function onLoad() {
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.initNpc();
  },
  start: function start() {},
  itemAction: function itemAction(dt) {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos);

    if (dis < 100 && this.canShow == false) {
      Global.itemType = this.charType;
      Global.itemName = this.node.name;
      this.tip.active = true;
      this.canShow = true;
    } else {
      if (dis >= 100 && this.canShow == true) {
        this.tip.active = false;
        this.canShow = false;
        Global.itemType = ' ';
        Global.itemName = ' ';
      }
    }
  },
  update: function update(dt) {
    this.tt += dt;

    if (this.tt >= 0.3) {
      this.itemAction(dt);
      this.tt = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RpcC90cmlnZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwIiwiTm9kZSIsImluaXROcGMiLCJjaGFyVHlwZSIsIm5vZGUiLCJwYXJlbnQiLCJuYW1lIiwicGxheWVyTm9kZSIsImZpbmQiLCJ0dCIsImNhblNob3ciLCJvbkxvYWQiLCJzdGFydCIsIml0ZW1BY3Rpb24iLCJkdCIsInBfcG9zIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJlX3BvcyIsImRpcyIsIlZlYzIiLCJkaXN0YW5jZSIsIkdsb2JhbCIsIml0ZW1UeXBlIiwiaXRlbU5hbWUiLCJhY3RpdmUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0s7RUFEQSxDQUhQO0VBT0w7RUFLQUMsT0FaSyxxQkFZSztJQUNOLEtBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQUFqQztJQUNBLEtBQUtDLFVBQUwsR0FBa0JYLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHVCQUFSLENBQWxCO0lBQ0EsS0FBS0MsRUFBTCxHQUFVLENBQVY7SUFDQSxLQUFLQyxPQUFMLEdBQWUsS0FBZjtFQUNILENBakJJO0VBbUJMQyxNQW5CSyxvQkFtQks7SUFDTixLQUFLWCxHQUFMLEdBQVlKLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHdCQUFSLENBQVo7SUFDQSxLQUFLTixPQUFMO0VBQ0gsQ0F0Qkk7RUF3QkxVLEtBeEJLLG1CQXdCRyxDQUNQLENBekJJO0VBMkJMQyxVQTNCSyxzQkEyQk1DLEVBM0JOLEVBMkJVO0lBQ1gsSUFBSUMsS0FBSyxHQUFHLEtBQUtSLFVBQUwsQ0FBZ0JTLHFCQUFoQixDQUFzQ3BCLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUF0QyxDQUFaO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtkLElBQUwsQ0FBVVkscUJBQVYsQ0FBZ0NwQixFQUFFLENBQUNxQixFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBaEMsQ0FBWjtJQUNBLElBQUlFLEdBQUcsR0FBR3ZCLEVBQUUsQ0FBQ3dCLElBQUgsQ0FBUUMsUUFBUixDQUFpQkgsS0FBakIsRUFBd0JILEtBQXhCLENBQVY7O0lBRUEsSUFBSUksR0FBRyxHQUFHLEdBQU4sSUFBYSxLQUFLVCxPQUFMLElBQWdCLEtBQWpDLEVBQXdDO01BQ3BDWSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FBS3BCLFFBQXZCO01BQ0FtQixNQUFNLENBQUNFLFFBQVAsR0FBa0IsS0FBS3BCLElBQUwsQ0FBVUUsSUFBNUI7TUFDQSxLQUFLTixHQUFMLENBQVN5QixNQUFULEdBQWtCLElBQWxCO01BQ0EsS0FBS2YsT0FBTCxHQUFlLElBQWY7SUFDSCxDQUxELE1BTU07TUFDRixJQUFJUyxHQUFHLElBQUksR0FBUCxJQUFjLEtBQUtULE9BQUwsSUFBZ0IsSUFBbEMsRUFBd0M7UUFDcEMsS0FBS1YsR0FBTCxDQUFTeUIsTUFBVCxHQUFrQixLQUFsQjtRQUNBLEtBQUtmLE9BQUwsR0FBZSxLQUFmO1FBQ0FZLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixHQUFsQjtRQUNBRCxNQUFNLENBQUNFLFFBQVAsR0FBa0IsR0FBbEI7TUFDSDtJQUNKO0VBQ0osQ0E5Q0k7RUFnRExFLE1BaERLLGtCQWdERVosRUFoREYsRUFnRE07SUFDUCxLQUFLTCxFQUFMLElBQVdLLEVBQVg7O0lBQ0EsSUFBSSxLQUFLTCxFQUFMLElBQVcsR0FBZixFQUFvQjtNQUNoQixLQUFLSSxVQUFMLENBQWdCQyxFQUFoQjtNQUNBLEtBQUtMLEVBQUwsR0FBVSxDQUFWO0lBQ0g7RUFDSjtBQXRESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXA6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgXG5cblxuICAgIGluaXROcGMoKSB7XG4gICAgICAgIHRoaXMuY2hhclR5cGUgPSB0aGlzLm5vZGUucGFyZW50Lm5hbWU7XG4gICAgICAgIHRoaXMucGxheWVyTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvYmcvcGxheWVyL2JvZHlcIik7XG4gICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICB0aGlzLmNhblNob3cgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy50aXAgPSAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS90aXBcIik7XG4gICAgICAgIHRoaXMuaW5pdE5wYygpO1xuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcbiAgICB9LFxuXG4gICAgaXRlbUFjdGlvbihkdCkge1xuICAgICAgICBsZXQgcF9wb3MgPSB0aGlzLnBsYXllck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsMCkpO1xuICAgICAgICBsZXQgZV9wb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsMCkpO1xuICAgICAgICBsZXQgZGlzID0gY2MuVmVjMi5kaXN0YW5jZShlX3BvcywgcF9wb3MpO1xuXG4gICAgICAgIGlmIChkaXMgPCAxMDAgJiYgdGhpcy5jYW5TaG93ID09IGZhbHNlKSB7XG4gICAgICAgICAgICBHbG9iYWwuaXRlbVR5cGUgPSB0aGlzLmNoYXJUeXBlO1xuICAgICAgICAgICAgR2xvYmFsLml0ZW1OYW1lID0gdGhpcy5ub2RlLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnRpcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYW5TaG93ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlICB7XG4gICAgICAgICAgICBpZiAoZGlzID49IDEwMCAmJiB0aGlzLmNhblNob3cgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGlwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5pdGVtVHlwZSA9ICcgJztcbiAgICAgICAgICAgICAgICBHbG9iYWwuaXRlbU5hbWUgPSAnICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMudHQgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnR0ID49IDAuMykge1xuICAgICAgICAgICAgdGhpcy5pdGVtQWN0aW9uKGR0KTtcbiAgICAgICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tool/tool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef98979pWpHTJArOZxjW6tp', 'tool');
// scripts/tool/tool.js

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
    tip: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.tt = 0;
    this.playerNode = cc.find("Canvas/bg/player/body");
    this.name = this.node.name;

    if (window.TOOLS[window.toolMap[this.name]].inBag) {
      this.node.active = false;
    }

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  start: function start() {},
  ToolAction: function ToolAction(tt) {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos);

    if (dis <= 50) {
      this.isIn = true;
    } else {
      this.isIn = false;
    }
  },
  onKeyDown: function onKeyDown(event) {
    if (this.isIn) {
      console.log(this.node.name);

      if (event.keyCode == cc.macro.KEY.k) {
        if (!window.TOOLS[window.toolMap[this.name]].inBag) {
          window.TOOLS[window.toolMap[this.name]].inBag = true;
          window.Bag.push(window.TOOLS[window.toolMap[this.name]]);

          for (var key in window.Bag) {
            console.log(window.Bag[key].name);
          }

          this.node.active = false;
          this.tip.active = false; // Items.InArr[Items.CloseItem[this.name]] = 1;
        }
      }
    }
  },
  update: function update(dt) {
    this.tt += dt;

    if (this.tt >= 0.3) {
      this.ToolAction(this.tt);
      this.tt = 0; // console.log(window.Bag);
    }
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Rvb2wvdG9vbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpcCIsIk5vZGUiLCJvbkxvYWQiLCJ0dCIsInBsYXllck5vZGUiLCJmaW5kIiwibmFtZSIsIm5vZGUiLCJ3aW5kb3ciLCJUT09MUyIsInRvb2xNYXAiLCJpbkJhZyIsImFjdGl2ZSIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwic3RhcnQiLCJUb29sQWN0aW9uIiwicF9wb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsImVfcG9zIiwiZGlzIiwiVmVjMiIsImRpc3RhbmNlIiwiaXNJbiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImsiLCJCYWciLCJwdXNoIiwia2V5IiwidXBkYXRlIiwiZHQiLCJvbkRlc3Ryb3kiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxHQUFHLEVBQUNKLEVBQUUsQ0FBQ0s7RUFEQyxDQUhQO0VBT0w7RUFHQUMsTUFWSyxvQkFVSztJQUNOLEtBQUtDLEVBQUwsR0FBVSxDQUFWO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQlIsRUFBRSxDQUFDUyxJQUFILENBQVEsdUJBQVIsQ0FBbEI7SUFDQSxLQUFLQyxJQUFMLEdBQVksS0FBS0MsSUFBTCxDQUFVRCxJQUF0Qjs7SUFDQSxJQUFHRSxNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsS0FBS0osSUFBcEIsQ0FBYixFQUF3Q0ssS0FBM0MsRUFBaUQ7TUFDN0MsS0FBS0osSUFBTCxDQUFVSyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0g7O0lBQ0RoQixFQUFFLENBQUNpQixXQUFILENBQWVDLEVBQWYsQ0FBa0JsQixFQUFFLENBQUNtQixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELEVBQXFFLElBQXJFO0VBQ0gsQ0FsQkk7RUFvQkxDLEtBcEJLLG1CQW9CSSxDQUNSLENBckJJO0VBdUJMQyxVQXZCSyxzQkF1Qk1qQixFQXZCTixFQXVCVTtJQUNYLElBQUlrQixLQUFLLEdBQUcsS0FBS2pCLFVBQUwsQ0FBZ0JrQixxQkFBaEIsQ0FBc0MxQixFQUFFLENBQUMyQixFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBdEMsQ0FBWjtJQUNBLElBQUlDLEtBQUssR0FBSSxLQUFLakIsSUFBTCxDQUFVZSxxQkFBVixDQUFnQzFCLEVBQUUsQ0FBQzJCLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFoQyxDQUFiO0lBQ0EsSUFBSUUsR0FBRyxHQUFHN0IsRUFBRSxDQUFDOEIsSUFBSCxDQUFRQyxRQUFSLENBQWlCSCxLQUFqQixFQUF3QkgsS0FBeEIsQ0FBVjs7SUFDQSxJQUFJSSxHQUFHLElBQUksRUFBWCxFQUFlO01BQ1gsS0FBS0csSUFBTCxHQUFZLElBQVo7SUFDSCxDQUZELE1BRU87TUFDSCxLQUFLQSxJQUFMLEdBQVksS0FBWjtJQUNIO0VBQ0osQ0FoQ0k7RUFrQ0xWLFNBbENLLHFCQWtDS1csS0FsQ0wsRUFrQ1k7SUFDYixJQUFJLEtBQUtELElBQVQsRUFBZTtNQUNYRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLeEIsSUFBTCxDQUFVRCxJQUF0Qjs7TUFDQSxJQUFJdUIsS0FBSyxDQUFDRyxPQUFOLElBQWlCcEMsRUFBRSxDQUFDcUMsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxDLEVBQXFDO1FBQ2pDLElBQUksQ0FBQzNCLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxLQUFLSixJQUFwQixDQUFiLEVBQXdDSyxLQUE3QyxFQUFtRDtVQUMvQ0gsTUFBTSxDQUFDQyxLQUFQLENBQWFELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLEtBQUtKLElBQXBCLENBQWIsRUFBd0NLLEtBQXhDLEdBQWdELElBQWhEO1VBQ0FILE1BQU0sQ0FBQzRCLEdBQVAsQ0FBV0MsSUFBWCxDQUFnQjdCLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxLQUFLSixJQUFwQixDQUFiLENBQWhCOztVQUNBLEtBQUssSUFBSWdDLEdBQVQsSUFBZ0I5QixNQUFNLENBQUM0QixHQUF2QixFQUEyQjtZQUN2Qk4sT0FBTyxDQUFDQyxHQUFSLENBQVl2QixNQUFNLENBQUM0QixHQUFQLENBQVdFLEdBQVgsRUFBZ0JoQyxJQUE1QjtVQUNIOztVQUNELEtBQUtDLElBQUwsQ0FBVUssTUFBVixHQUFtQixLQUFuQjtVQUNBLEtBQUtaLEdBQUwsQ0FBU1ksTUFBVCxHQUFrQixLQUFsQixDQVArQyxDQVEvQztRQUNIO01BQ0o7SUFDSjtFQUNKLENBbERJO0VBb0RMMkIsTUFwREssa0JBb0RFQyxFQXBERixFQW9ETTtJQUNQLEtBQUtyQyxFQUFMLElBQVdxQyxFQUFYOztJQUNBLElBQUksS0FBS3JDLEVBQUwsSUFBVSxHQUFkLEVBQW1CO01BQ2YsS0FBS2lCLFVBQUwsQ0FBZ0IsS0FBS2pCLEVBQXJCO01BQ0EsS0FBS0EsRUFBTCxHQUFVLENBQVYsQ0FGZSxDQUdmO0lBQ0g7RUFDSixDQTNESTtFQTZETHNDLFNBN0RLLHVCQTZETztJQUNSN0MsRUFBRSxDQUFDaUIsV0FBSCxDQUFlNkIsR0FBZixDQUFtQjlDLEVBQUUsQ0FBQ21CLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBc0QsS0FBS0MsU0FBM0QsRUFBc0UsSUFBdEU7RUFDSDtBQS9ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwOmNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnR0ID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJOb2RlID0gY2MuZmluZChcIkNhbnZhcy9iZy9wbGF5ZXIvYm9keVwiKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5ub2RlLm5hbWU7XG4gICAgICAgIGlmKHdpbmRvdy5UT09MU1t3aW5kb3cudG9vbE1hcFt0aGlzLm5hbWVdXS5pbkJhZyl7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICB9LFxuXG4gICAgVG9vbEFjdGlvbih0dCkge1xuICAgICAgICBsZXQgcF9wb3MgPSB0aGlzLnBsYXllck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsMCkpO1xuICAgICAgICBsZXQgZV9wb3MgPSAgdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKTtcbiAgICAgICAgbGV0IGRpcyA9IGNjLlZlYzIuZGlzdGFuY2UoZV9wb3MsIHBfcG9zKTtcbiAgICAgICAgaWYgKGRpcyA8PSA1MCkge1xuICAgICAgICAgICAgdGhpcy5pc0luID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNJbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0luKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUubmFtZSk7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuaykge1xuICAgICAgICAgICAgICAgIGlmICghd2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW3RoaXMubmFtZV1dLmluQmFnKXtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW3RoaXMubmFtZV1dLmluQmFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkJhZy5wdXNoKHdpbmRvdy5UT09MU1t3aW5kb3cudG9vbE1hcFt0aGlzLm5hbWVdXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB3aW5kb3cuQmFnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5CYWdba2V5XS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBJdGVtcy5JbkFycltJdGVtcy5DbG9zZUl0ZW1bdGhpcy5uYW1lXV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy50dCArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudHQgPj0wLjMpIHtcbiAgICAgICAgICAgIHRoaXMuVG9vbEFjdGlvbih0aGlzLnR0KTtcbiAgICAgICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93LkJhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuIFxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/item/item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '025deL+2dJLXoRgZY3soCxp', 'item');
// scripts/item/item.js

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
    tip: cc.Node
  },
  start: function start() {
    this.name = this.node.name;
    this.scene = Global.currentScene;
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.isUsed = false;
    this.item = window.Items[this.scene][this.name].item;
    this.tool = window.Items[this.scene][this.name].tool;
  },
  contactWithTool: function contactWithTool() {
    this.isUsed = window.Items[this.scene][this.name].used;

    if (this.tool == window.Inuse) {
      if (this.isUsed) {
        this.tip.getChildByName("textLabel").getComponent(cc.Label).string = this.item.notUsedInfo;
      } else {
        window.Items[this.scene][this.name].used = true;
        this.tip.getChildByName("textLabel").getComponent(cc.Label).string = this.item.usedInfo;
      }
    } else {
      this.tip.active = true;
    }
  },
  update: function update(dt) {
    if (Global.itemType == 'items' && Global.itemName == this.name) {
      this.contactWithTool();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2l0ZW0vaXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpcCIsIk5vZGUiLCJzdGFydCIsIm5hbWUiLCJub2RlIiwic2NlbmUiLCJHbG9iYWwiLCJjdXJyZW50U2NlbmUiLCJmaW5kIiwiaXNVc2VkIiwiaXRlbSIsIndpbmRvdyIsIkl0ZW1zIiwidG9vbCIsImNvbnRhY3RXaXRoVG9vbCIsInVzZWQiLCJJbnVzZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJub3RVc2VkSW5mbyIsInVzZWRJbmZvIiwiYWN0aXZlIiwidXBkYXRlIiwiZHQiLCJpdGVtVHlwZSIsIml0ZW1OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsR0FBRyxFQUFDSixFQUFFLENBQUNLO0VBREMsQ0FIUDtFQU9MQyxLQVBLLG1CQU9JO0lBQ0wsS0FBS0MsSUFBTCxHQUFZLEtBQUtDLElBQUwsQ0FBVUQsSUFBdEI7SUFDQSxLQUFLRSxLQUFMLEdBQWFDLE1BQU0sQ0FBQ0MsWUFBcEI7SUFDQSxLQUFLUCxHQUFMLEdBQVdKLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHdCQUFSLENBQVg7SUFDQSxLQUFLQyxNQUFMLEdBQWMsS0FBZDtJQUNBLEtBQUtDLElBQUwsR0FBWUMsTUFBTSxDQUFDQyxLQUFQLENBQWEsS0FBS1AsS0FBbEIsRUFBeUIsS0FBS0YsSUFBOUIsRUFBb0NPLElBQWhEO0lBQ0EsS0FBS0csSUFBTCxHQUFZRixNQUFNLENBQUNDLEtBQVAsQ0FBYSxLQUFLUCxLQUFsQixFQUF5QixLQUFLRixJQUE5QixFQUFvQ1UsSUFBaEQ7RUFDSCxDQWRJO0VBZ0JMQyxlQWhCSyw2QkFnQlk7SUFDYixLQUFLTCxNQUFMLEdBQWNFLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEtBQUtQLEtBQWxCLEVBQXlCLEtBQUtGLElBQTlCLEVBQW9DWSxJQUFsRDs7SUFFQSxJQUFHLEtBQUtGLElBQUwsSUFBYUYsTUFBTSxDQUFDSyxLQUF2QixFQUE2QjtNQUN6QixJQUFHLEtBQUtQLE1BQVIsRUFBZTtRQUNYLEtBQUtULEdBQUwsQ0FBU2lCLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLFlBQXJDLENBQWtEdEIsRUFBRSxDQUFDdUIsS0FBckQsRUFBNERDLE1BQTVELEdBQXFFLEtBQUtWLElBQUwsQ0FBVVcsV0FBL0U7TUFDSCxDQUZELE1BR0k7UUFDQVYsTUFBTSxDQUFDQyxLQUFQLENBQWEsS0FBS1AsS0FBbEIsRUFBeUIsS0FBS0YsSUFBOUIsRUFBb0NZLElBQXBDLEdBQTJDLElBQTNDO1FBQ0EsS0FBS2YsR0FBTCxDQUFTaUIsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsWUFBckMsQ0FBa0R0QixFQUFFLENBQUN1QixLQUFyRCxFQUE0REMsTUFBNUQsR0FBcUUsS0FBS1YsSUFBTCxDQUFVWSxRQUEvRTtNQUNIO0lBQ0osQ0FSRCxNQVFLO01BQ0QsS0FBS3RCLEdBQUwsQ0FBU3VCLE1BQVQsR0FBa0IsSUFBbEI7SUFDSDtFQUNKLENBOUJJO0VBZ0NMQyxNQWhDSyxrQkFnQ0dDLEVBaENILEVBZ0NPO0lBQ1IsSUFBR25CLE1BQU0sQ0FBQ29CLFFBQVAsSUFBbUIsT0FBbkIsSUFBOEJwQixNQUFNLENBQUNxQixRQUFQLElBQW1CLEtBQUt4QixJQUF6RCxFQUE4RDtNQUMxRCxLQUFLVyxlQUFMO0lBQ0g7RUFDSjtBQXBDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXA6Y2MuTm9kZVxuICAgIH0sXG4gICAgXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IEdsb2JhbC5jdXJyZW50U2NlbmU7XG4gICAgICAgIHRoaXMudGlwID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS90aXBcIik7XG4gICAgICAgIHRoaXMuaXNVc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXRlbSA9IHdpbmRvdy5JdGVtc1t0aGlzLnNjZW5lXVt0aGlzLm5hbWVdLml0ZW07XG4gICAgICAgIHRoaXMudG9vbCA9IHdpbmRvdy5JdGVtc1t0aGlzLnNjZW5lXVt0aGlzLm5hbWVdLnRvb2w7XG4gICAgfSxcblxuICAgIGNvbnRhY3RXaXRoVG9vbCgpe1xuICAgICAgICB0aGlzLmlzVXNlZCA9IHdpbmRvdy5JdGVtc1t0aGlzLnNjZW5lXVt0aGlzLm5hbWVdLnVzZWQ7XG5cbiAgICAgICAgaWYodGhpcy50b29sID09IHdpbmRvdy5JbnVzZSl7XG4gICAgICAgICAgICBpZih0aGlzLmlzVXNlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy50aXAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLml0ZW0ubm90VXNlZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHdpbmRvdy5JdGVtc1t0aGlzLnNjZW5lXVt0aGlzLm5hbWVdLnVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudGlwLmdldENoaWxkQnlOYW1lKFwidGV4dExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5pdGVtLnVzZWRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMudGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZihHbG9iYWwuaXRlbVR5cGUgPT0gJ2l0ZW1zJyAmJiBHbG9iYWwuaXRlbU5hbWUgPT0gdGhpcy5uYW1lKXtcbiAgICAgICAgICAgIHRoaXMuY29udGFjdFdpdGhUb29sKCk7XG4gICAgICAgIH0gICBcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/dialog/dialog - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab8caVBfEBHpJaZ+h6wgNHk', 'dialog - 001');
// scripts/dialog/dialog - 001.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var roleMap = {
  1: {
    name: "player",
    url: "role/player"
  },
  2: {
    name: "npc1",
    url: ""
  }
};
var defaultContents = [{
  role: 2,
  content: "Welcome to FZU,hhhhh"
}, {
  role: 1,
  content: "Hello,I'm Huiker"
} //当前的testData
];
cc.Class({
  "extends": cc.Component,
  properties: {
    picSprite: cc.Sprite,
    nameLabel: cc.Label,
    textLabel: cc.Label,
    nodeBody: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // this.node.getChildByName("body").active = false;
    this.nodeBody = this.node.getChildByName("body");
    this.nodeBody.active = false;
    this.canTalk = false;
    this.node.active = true;
    this.npcName = ' ';
    this.initDialog();
    console.log("dialog success");
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(event) {
    if (event.keyCode == cc.macro.KEY.j && this.canShowDialog()) {
      this.nodeBody.active = true;
      this.showDialog();
      console.log("press j to talk");
      console.log(this.node.name);
    }
  },
  start: function start() {},
  canShowDialog: function canShowDialog() {
    if (Global.itemType == "npcs") {
      return true;
    }

    return false;
  },
  //初始化对话内容
  initContent: function initContent() {
    console.log(Global.currentScene);
    var content = Dialog.contents[Global.currentScene]; // console.log(content);

    if (Global.itemType != 'npcs' || Global.itemName == ' ') {
      return defaultContents;
    }

    return content[Global.itemName];
  },
  //初始化对话系统
  initDialog: function initDialog() {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.contentArr = defaultContents;
    this.textIndex = -1;
    this.textLabel = this.nodeBody.getChildByName("textLabel").getComponent(cc.Label);
    this.nameLabel = this.nodeBody.getChildByName("nameLabel").getComponent(cc.Label);
    this.textLabel.string = '';
  },
  // 显示对话的逻辑
  showDialog: function showDialog() {
    if (++this.textIndex < this.contentArr.length) {
      console.log("current index:" + this.textIndex);
      this.setTextData(this.contentArr[this.textIndex]); // console.log(this.contentArr[this.textIndex].content);
    } else {
      //关闭对话框
      this.closeDialog();
      this.textIndex = -1;
    }
  },
  setTextData: function setTextData(textData) {
    var _this = this;

    // 一行尚未播放完
    if (!this.textEnd) return;
    this.textEnd = false;
    this.nameLabel.string = roleMap[textData.role].name; //textData是角色编号 从roleMap中获取角色的名字

    this.textLabel.string = '';
    this.nowText = textData.content; // 修改头像

    if (this.canTalk && this.npcName != ' ') {
      roleMap[2].url = "role/" + Global.currentScene + "/" + Global.itemName;
      console.log(roleMap[textData.role].url);
    }

    cc.resources.load(roleMap[textData.role].url, cc.SpriteFrame, function (err, texture) {
      _this.picSprite.spriteFrame = texture;
    });
  },
  showContext: function showContext(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.02) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }

    console.log("this textLabel: " + this.textLabel.string);
  },
  closeDialog: function closeDialog() {
    // 直接不显示当前的节点
    this.nodeBody.active = false;
  },
  update: function update(dt) {
    this.canTalk = this.canShowDialog();

    if (this.canTalk && this.npcName != Global.itemName) {
      console.log(this.npcName);
      this.npcName = Global.itemName;
      var content = this.initContent();
      console.log(content);
      this.contentArr = content;
    }

    if (this.canTalk) {
      this.showContext(dt);
    } else {
      this.nodeBody.active = false;
    }
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RpYWxvZy9kaWFsb2cgLSAwMDEuanMiXSwibmFtZXMiOlsicm9sZU1hcCIsIm5hbWUiLCJ1cmwiLCJkZWZhdWx0Q29udGVudHMiLCJyb2xlIiwiY29udGVudCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGljU3ByaXRlIiwiU3ByaXRlIiwibmFtZUxhYmVsIiwiTGFiZWwiLCJ0ZXh0TGFiZWwiLCJub2RlQm9keSIsIk5vZGUiLCJvbkxvYWQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJjYW5UYWxrIiwibnBjTmFtZSIsImluaXREaWFsb2ciLCJjb25zb2xlIiwibG9nIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImoiLCJjYW5TaG93RGlhbG9nIiwic2hvd0RpYWxvZyIsInN0YXJ0IiwiR2xvYmFsIiwiaXRlbVR5cGUiLCJpbml0Q29udGVudCIsImN1cnJlbnRTY2VuZSIsIkRpYWxvZyIsImNvbnRlbnRzIiwiaXRlbU5hbWUiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwiY29udGVudEFyciIsInRleHRJbmRleCIsImdldENvbXBvbmVudCIsInN0cmluZyIsImxlbmd0aCIsInNldFRleHREYXRhIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0YSIsInJlc291cmNlcyIsImxvYWQiLCJTcHJpdGVGcmFtZSIsImVyciIsInRleHR1cmUiLCJzcHJpdGVGcmFtZSIsInNob3dDb250ZXh0IiwiZHQiLCJzbGljZSIsInVwZGF0ZSIsIm9uRGVzdHJveSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJQSxPQUFPLEdBQUc7RUFDVixHQUFHO0lBQ0NDLElBQUksRUFBRSxRQURQO0lBRUNDLEdBQUcsRUFBRTtFQUZOLENBRE87RUFLVixHQUFHO0lBQ0NELElBQUksRUFBRSxNQURQO0lBRUNDLEdBQUcsRUFBRTtFQUZOO0FBTE8sQ0FBZDtBQVlBLElBQUlDLGVBQWUsR0FBRyxDQUNsQjtFQUFFQyxJQUFJLEVBQUUsQ0FBUjtFQUFXQyxPQUFPLEVBQUU7QUFBcEIsQ0FEa0IsRUFFbEI7RUFBRUQsSUFBSSxFQUFFLENBQVI7RUFBV0MsT0FBTyxFQUFFO0FBQXBCLENBRmtCLENBRXlCO0FBRnpCLENBQXRCO0FBS0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssTUFETjtJQUVSQyxTQUFTLEVBQUVOLEVBQUUsQ0FBQ08sS0FGTjtJQUdSQyxTQUFTLEVBQUVSLEVBQUUsQ0FBQ08sS0FITjtJQUlSRSxRQUFRLEVBQUVULEVBQUUsQ0FBQ1U7RUFKTCxDQUhQO0VBVUw7RUFFQUMsTUFaSyxvQkFZSTtJQUNMO0lBQ0EsS0FBS0YsUUFBTCxHQUFnQixLQUFLRyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsTUFBekIsQ0FBaEI7SUFDQSxLQUFLSixRQUFMLENBQWNLLE1BQWQsR0FBdUIsS0FBdkI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsS0FBZjtJQUNBLEtBQUtILElBQUwsQ0FBVUUsTUFBVixHQUFtQixJQUFuQjtJQUNBLEtBQUtFLE9BQUwsR0FBZSxHQUFmO0lBQ0EsS0FBS0MsVUFBTDtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtJQUNBbkIsRUFBRSxDQUFDb0IsV0FBSCxDQUFlQyxFQUFmLENBQWtCckIsRUFBRSxDQUFDc0IsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUEzQyxFQUFxRCxLQUFLQyxTQUExRCxFQUFxRSxJQUFyRTtFQUNILENBdEJJO0VBd0JMQSxTQXhCSyxxQkF3QktDLEtBeEJMLEVBd0JZO0lBQ2IsSUFBSUEsS0FBSyxDQUFDQyxPQUFOLElBQWlCM0IsRUFBRSxDQUFDNEIsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQTlCLElBQW1DLEtBQUtDLGFBQUwsRUFBdkMsRUFBNkQ7TUFDekQsS0FBS3RCLFFBQUwsQ0FBY0ssTUFBZCxHQUF1QixJQUF2QjtNQUNBLEtBQUtrQixVQUFMO01BQ0FkLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO01BQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtQLElBQUwsQ0FBVWpCLElBQXRCO0lBQ0g7RUFDSixDQS9CSTtFQWlDTHNDLEtBakNLLG1CQWlDRyxDQUVQLENBbkNJO0VBcUNMRixhQXJDSywyQkFxQ1c7SUFDWixJQUFJRyxNQUFNLENBQUNDLFFBQVAsSUFBbUIsTUFBdkIsRUFBK0I7TUFDM0IsT0FBTyxJQUFQO0lBQ0g7O0lBQ0QsT0FBTyxLQUFQO0VBQ0gsQ0ExQ0k7RUE0Q0w7RUFDQUMsV0E3Q0sseUJBNkNTO0lBQ1ZsQixPQUFPLENBQUNDLEdBQVIsQ0FBWWUsTUFBTSxDQUFDRyxZQUFuQjtJQUNBLElBQUl0QyxPQUFPLEdBQUd1QyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JMLE1BQU0sQ0FBQ0csWUFBdkIsQ0FBZCxDQUZVLENBR1Y7O0lBQ0EsSUFBSUgsTUFBTSxDQUFDQyxRQUFQLElBQW1CLE1BQW5CLElBQTZCRCxNQUFNLENBQUNNLFFBQVAsSUFBbUIsR0FBcEQsRUFBeUQ7TUFDckQsT0FBTzNDLGVBQVA7SUFDSDs7SUFDRCxPQUFPRSxPQUFPLENBQUNtQyxNQUFNLENBQUNNLFFBQVIsQ0FBZDtFQUNILENBckRJO0VBd0RMO0VBQ0F2QixVQXpESyx3QkF5RFE7SUFDVCxLQUFLd0IsT0FBTCxHQUFlLElBQWY7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBZjtJQUNBLEtBQUtDLEVBQUwsR0FBVSxDQUFWLENBSFMsQ0FHSTs7SUFDYixLQUFLQyxVQUFMLEdBQWtCL0MsZUFBbEI7SUFDQSxLQUFLZ0QsU0FBTCxHQUFpQixDQUFDLENBQWxCO0lBQ0EsS0FBS3JDLFNBQUwsR0FBaUIsS0FBS0MsUUFBTCxDQUFjSSxjQUFkLENBQTZCLFdBQTdCLEVBQTBDaUMsWUFBMUMsQ0FBdUQ5QyxFQUFFLENBQUNPLEtBQTFELENBQWpCO0lBQ0EsS0FBS0QsU0FBTCxHQUFpQixLQUFLRyxRQUFMLENBQWNJLGNBQWQsQ0FBNkIsV0FBN0IsRUFBMENpQyxZQUExQyxDQUF1RDlDLEVBQUUsQ0FBQ08sS0FBMUQsQ0FBakI7SUFDQSxLQUFLQyxTQUFMLENBQWV1QyxNQUFmLEdBQXdCLEVBQXhCO0VBQ0gsQ0FsRUk7RUFvRUw7RUFDQWYsVUFyRUssd0JBcUVRO0lBQ1QsSUFBSSxFQUFFLEtBQUthLFNBQVAsR0FBbUIsS0FBS0QsVUFBTCxDQUFnQkksTUFBdkMsRUFBK0M7TUFDM0M5QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBbUIsS0FBSzBCLFNBQXBDO01BQ0EsS0FBS0ksV0FBTCxDQUFpQixLQUFLTCxVQUFMLENBQWdCLEtBQUtDLFNBQXJCLENBQWpCLEVBRjJDLENBRzNDO0lBQ0gsQ0FKRCxNQUtLO01BQ0Q7TUFDQSxLQUFLSyxXQUFMO01BQ0EsS0FBS0wsU0FBTCxHQUFpQixDQUFDLENBQWxCO0lBQ0g7RUFDSixDQWhGSTtFQWtGTEksV0FsRkssdUJBa0ZPRSxRQWxGUCxFQWtGaUI7SUFBQTs7SUFDbEI7SUFDQSxJQUFJLENBQUMsS0FBS1QsT0FBVixFQUFtQjtJQUNuQixLQUFLQSxPQUFMLEdBQWUsS0FBZjtJQUVBLEtBQUtwQyxTQUFMLENBQWV5QyxNQUFmLEdBQXdCckQsT0FBTyxDQUFDeUQsUUFBUSxDQUFDckQsSUFBVixDQUFQLENBQXVCSCxJQUEvQyxDQUxrQixDQUtrQzs7SUFDcEQsS0FBS2EsU0FBTCxDQUFldUMsTUFBZixHQUF3QixFQUF4QjtJQUNBLEtBQUtOLE9BQUwsR0FBZVUsUUFBUSxDQUFDcEQsT0FBeEIsQ0FQa0IsQ0FTbEI7O0lBQ0EsSUFBSSxLQUFLZ0IsT0FBTCxJQUFnQixLQUFLQyxPQUFMLElBQWMsR0FBbEMsRUFBdUM7TUFDbkN0QixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdFLEdBQVgsR0FBaUIsVUFBUXNDLE1BQU0sQ0FBQ0csWUFBZixHQUE0QixHQUE1QixHQUFnQ0gsTUFBTSxDQUFDTSxRQUF4RDtNQUNBdEIsT0FBTyxDQUFDQyxHQUFSLENBQVl6QixPQUFPLENBQUN5RCxRQUFRLENBQUNyRCxJQUFWLENBQVAsQ0FBdUJGLEdBQW5DO0lBQ0g7O0lBQ0RJLEVBQUUsQ0FBQ29ELFNBQUgsQ0FBYUMsSUFBYixDQUFrQjNELE9BQU8sQ0FBQ3lELFFBQVEsQ0FBQ3JELElBQVYsQ0FBUCxDQUF1QkYsR0FBekMsRUFBOENJLEVBQUUsQ0FBQ3NELFdBQWpELEVBQThELFVBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtNQUM1RSxLQUFJLENBQUNwRCxTQUFMLENBQWVxRCxXQUFmLEdBQTZCRCxPQUE3QjtJQUNILENBRkQ7RUFHSCxDQW5HSTtFQXFHTEUsV0FyR0ssdUJBcUdPQyxFQXJHUCxFQXFHVztJQUNaLElBQUksQ0FBQyxLQUFLbEIsT0FBVixFQUFtQjtJQUNuQixLQUFLRSxFQUFMLElBQVdnQixFQUFYOztJQUVBLElBQUksS0FBS2hCLEVBQUwsSUFBVyxJQUFmLEVBQXFCO01BQ2pCLElBQUksS0FBS25DLFNBQUwsQ0FBZXVDLE1BQWYsQ0FBc0JDLE1BQXRCLEdBQStCLEtBQUtQLE9BQUwsQ0FBYU8sTUFBaEQsRUFBd0Q7UUFDcEQsS0FBS3hDLFNBQUwsQ0FBZXVDLE1BQWYsR0FBd0IsS0FBS04sT0FBTCxDQUFhbUIsS0FBYixDQUFtQixDQUFuQixFQUFzQixLQUFLcEQsU0FBTCxDQUFldUMsTUFBZixDQUFzQkMsTUFBdEIsR0FBK0IsQ0FBckQsQ0FBeEI7TUFDSCxDQUZELE1BRU87UUFDSCxLQUFLTixPQUFMLEdBQWUsSUFBZjtRQUNBLEtBQUtELE9BQUwsR0FBZSxJQUFmO01BQ0g7O01BQ0QsS0FBS0UsRUFBTCxHQUFVLENBQVY7SUFDSDs7SUFDRHpCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFxQixLQUFLWCxTQUFMLENBQWV1QyxNQUFoRDtFQUNILENBbkhJO0VBcUhMRyxXQXJISyx5QkFxSFM7SUFDVjtJQUNBLEtBQUt6QyxRQUFMLENBQWNLLE1BQWQsR0FBdUIsS0FBdkI7RUFDSCxDQXhISTtFQTBITCtDLE1BMUhLLGtCQTBIRUYsRUExSEYsRUEwSE07SUFDUCxLQUFLNUMsT0FBTCxHQUFlLEtBQUtnQixhQUFMLEVBQWY7O0lBQ0EsSUFBSSxLQUFLaEIsT0FBTCxJQUFnQixLQUFLQyxPQUFMLElBQWdCa0IsTUFBTSxDQUFDTSxRQUEzQyxFQUFxRDtNQUNqRHRCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtILE9BQWpCO01BQ0EsS0FBS0EsT0FBTCxHQUFla0IsTUFBTSxDQUFDTSxRQUF0QjtNQUNBLElBQUl6QyxPQUFPLEdBQUcsS0FBS3FDLFdBQUwsRUFBZDtNQUNBbEIsT0FBTyxDQUFDQyxHQUFSLENBQVlwQixPQUFaO01BQ0EsS0FBSzZDLFVBQUwsR0FBa0I3QyxPQUFsQjtJQUNIOztJQUNELElBQUksS0FBS2dCLE9BQVQsRUFBa0I7TUFDZCxLQUFLMkMsV0FBTCxDQUFpQkMsRUFBakI7SUFDSCxDQUZELE1BR0s7TUFDRCxLQUFLbEQsUUFBTCxDQUFjSyxNQUFkLEdBQXVCLEtBQXZCO0lBQ0g7RUFDSixDQXpJSTtFQTJJTGdELFNBM0lLLHVCQTJJTztJQUNSOUQsRUFBRSxDQUFDb0IsV0FBSCxDQUFlMkMsR0FBZixDQUFtQi9ELEVBQUUsQ0FBQ3NCLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBc0QsS0FBS0MsU0FBM0QsRUFBc0UsSUFBdEU7RUFDSDtBQTdJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmxldCByb2xlTWFwID0ge1xuICAgIDE6IHtcbiAgICAgICAgbmFtZTogXCJwbGF5ZXJcIixcbiAgICAgICAgdXJsOiBcInJvbGUvcGxheWVyXCJcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgICAgbmFtZTogXCJucGMxXCIsXG4gICAgICAgIHVybDogXCJcIlxuICAgIH1cbn1cblxuXG52YXIgZGVmYXVsdENvbnRlbnRzID0gW1xuICAgIHsgcm9sZTogMiwgY29udGVudDogXCJXZWxjb21lIHRvIEZaVSxoaGhoaFwiIH0sXG4gICAgeyByb2xlOiAxLCBjb250ZW50OiBcIkhlbGxvLEknbSBIdWlrZXJcIiB9LCAgLy/lvZPliY3nmoR0ZXN0RGF0YVxuXTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGljU3ByaXRlOiBjYy5TcHJpdGUsXG4gICAgICAgIG5hbWVMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIHRleHRMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIG5vZGVCb2R5OiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9keVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlQm9keSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIik7XG4gICAgICAgIHRoaXMubm9kZUJvZHkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FuVGFsayA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ucGNOYW1lID0gJyAnO1xuICAgICAgICB0aGlzLmluaXREaWFsb2coKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaWFsb2cgc3VjY2Vzc1wiKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuaiAmJiB0aGlzLmNhblNob3dEaWFsb2coKSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlQm9keS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZXNzIGogdG8gdGFsa1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICBjYW5TaG93RGlhbG9nKCkge1xuICAgICAgICBpZiAoR2xvYmFsLml0ZW1UeXBlID09IFwibnBjc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8v5Yid5aeL5YyW5a+56K+d5YaF5a65XG4gICAgaW5pdENvbnRlbnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC5jdXJyZW50U2NlbmUpO1xuICAgICAgICB2YXIgY29udGVudCA9IERpYWxvZy5jb250ZW50c1tHbG9iYWwuY3VycmVudFNjZW5lXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudCk7XG4gICAgICAgIGlmIChHbG9iYWwuaXRlbVR5cGUgIT0gJ25wY3MnIHx8IEdsb2JhbC5pdGVtTmFtZSA9PSAnICcpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29udGVudHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnRbR2xvYmFsLml0ZW1OYW1lXTtcbiAgICB9LFxuXG5cbiAgICAvL+WIneWni+WMluWvueivneezu+e7n1xuICAgIGluaXREaWFsb2coKSB7XG4gICAgICAgIHRoaXMubm93VGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XG4gICAgICAgIHRoaXMudHQgPSAwOyAvL+aSreaUvueahOaAu+aXtumVv1xuICAgICAgICB0aGlzLmNvbnRlbnRBcnIgPSBkZWZhdWx0Q29udGVudHM7XG4gICAgICAgIHRoaXMudGV4dEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMudGV4dExhYmVsID0gdGhpcy5ub2RlQm9keS5nZXRDaGlsZEJ5TmFtZShcInRleHRMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLm5hbWVMYWJlbCA9IHRoaXMubm9kZUJvZHkuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nID0gJyc7XG4gICAgfSxcblxuICAgIC8vIOaYvuekuuWvueivneeahOmAu+i+kVxuICAgIHNob3dEaWFsb2coKSB7XG4gICAgICAgIGlmICgrK3RoaXMudGV4dEluZGV4IDwgdGhpcy5jb250ZW50QXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IGluZGV4OlwiICsgdGhpcy50ZXh0SW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLmNvbnRlbnRBcnJbdGhpcy50ZXh0SW5kZXhdKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udGVudEFyclt0aGlzLnRleHRJbmRleF0uY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL+WFs+mXreWvueivneahhlxuICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xuICAgICAgICAgICAgdGhpcy50ZXh0SW5kZXggPSAtMTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0YSkge1xuICAgICAgICAvLyDkuIDooYzlsJrmnKrmkq3mlL7lroxcbiAgICAgICAgaWYgKCF0aGlzLnRleHRFbmQpIHJldHVybjtcbiAgICAgICAgdGhpcy50ZXh0RW5kID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5uYW1lTGFiZWwuc3RyaW5nID0gcm9sZU1hcFt0ZXh0RGF0YS5yb2xlXS5uYW1lOy8vdGV4dERhdGHmmK/op5LoibLnvJblj7cg5LuOcm9sZU1hcOS4reiOt+WPluinkuiJsueahOWQjeWtl1xuICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmcgPSAnJztcbiAgICAgICAgdGhpcy5ub3dUZXh0ID0gdGV4dERhdGEuY29udGVudDtcblxuICAgICAgICAvLyDkv67mlLnlpLTlg49cbiAgICAgICAgaWYgKHRoaXMuY2FuVGFsayAmJiB0aGlzLm5wY05hbWUhPScgJykge1xuICAgICAgICAgICAgcm9sZU1hcFsyXS51cmwgPSBcInJvbGUvXCIrR2xvYmFsLmN1cnJlbnRTY2VuZStcIi9cIitHbG9iYWwuaXRlbU5hbWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb2xlTWFwW3RleHREYXRhLnJvbGVdLnVybClcbiAgICAgICAgfVxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChyb2xlTWFwW3RleHREYXRhLnJvbGVdLnVybCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGljU3ByaXRlLnNwcml0ZUZyYW1lID0gdGV4dHVyZTtcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgc2hvd0NvbnRleHQoZHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vd1RleHQpIHJldHVybjtcbiAgICAgICAgdGhpcy50dCArPSBkdDtcblxuICAgICAgICBpZiAodGhpcy50dCA+PSAwLjAyKSB7ICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGggPCB0aGlzLm5vd1RleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nID0gdGhpcy5ub3dUZXh0LnNsaWNlKDAsIHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIHRleHRMYWJlbDogXCIgKyB0aGlzLnRleHRMYWJlbC5zdHJpbmcpO1xuICAgIH0sXG5cbiAgICBjbG9zZURpYWxvZygpIHtcbiAgICAgICAgLy8g55u05o6l5LiN5pi+56S65b2T5YmN55qE6IqC54K5XG4gICAgICAgIHRoaXMubm9kZUJvZHkuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmNhblRhbGsgPSB0aGlzLmNhblNob3dEaWFsb2coKTtcbiAgICAgICAgaWYgKHRoaXMuY2FuVGFsayAmJiB0aGlzLm5wY05hbWUgIT0gR2xvYmFsLml0ZW1OYW1lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5wY05hbWUpO1xuICAgICAgICAgICAgdGhpcy5ucGNOYW1lID0gR2xvYmFsLml0ZW1OYW1lXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuaW5pdENvbnRlbnQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50QXJyID0gY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYW5UYWxrKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZXh0KGR0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZUJvZHkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfSxcblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lamp/setbuttom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32194Q/NGhDcax6xjOEpacY', 'setbuttom');
// scripts/game_chp1/cp1_lamp/setbuttom.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.openlamp = 0;
cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    //点击使用物品会使物品图片出现在左上角
    this.node.pic = 'shade/1';
    var num = cc.find("Canvas/num");
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var usetool = cc.find("Canvas/lampshade"); //通过全路径获取对应节点

      if (openlamp == 0) {
        cc.loader.loadRes("shade/1", cc.SpriteFrame, function (err, spriteFrame) {
          usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes("num/1", cc.SpriteFrame, function (err, spriteFrame) {
          num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        openlamp++;
      } else if (openlamp == 1) {
        cc.loader.loadRes(null, cc.SpriteFrame, function (err, spriteFrame) {
          usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes(null, cc.SpriteFrame, function (err, spriteFrame) {
          num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        openlamp--;
      }
    }.bind(this), this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbGFtcC9zZXRidXR0b20uanMiXSwibmFtZXMiOlsid2luZG93Iiwib3BlbmxhbXAiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwibm9kZSIsInBpYyIsIm51bSIsImZpbmQiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwidXNldG9vbCIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWdCLENBQWhCO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBS0xDLEtBTEssbUJBS0k7SUFDTDtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsR0FBVixHQUFjLFNBQWQ7SUFDQSxJQUFJQyxHQUFHLEdBQUNQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRLFlBQVIsQ0FBUjtJQUNBLEtBQUtILElBQUwsQ0FBVUksRUFBVixDQUFhVCxFQUFFLENBQUNVLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsWUFBWTtNQUNuRCxJQUFJQyxPQUFPLEdBQUdiLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRLGtCQUFSLENBQWQsQ0FEbUQsQ0FDUjs7TUFDM0MsSUFBR1QsUUFBUSxJQUFFLENBQWIsRUFDQTtRQUFDQyxFQUFFLENBQUNjLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixTQUFsQixFQUE2QmYsRUFBRSxDQUFDZ0IsV0FBaEMsRUFBNkMsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1VBQ3RFTCxPQUFPLENBQUNNLFlBQVIsQ0FBcUJuQixFQUFFLENBQUNvQixNQUF4QixFQUFnQ0YsV0FBaEMsR0FBOENBLFdBQTlDO1FBQ0gsQ0FGQTtRQUdEbEIsRUFBRSxDQUFDYyxNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkJmLEVBQUUsQ0FBQ2dCLFdBQTlCLEVBQTJDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtVQUNuRVgsR0FBRyxDQUFDWSxZQUFKLENBQWlCbkIsRUFBRSxDQUFDb0IsTUFBcEIsRUFBNEJGLFdBQTVCLEdBQTBDQSxXQUExQztRQUNILENBRkQ7UUFHQW5CLFFBQVE7TUFDWCxDQVJHLE1BU0ssSUFBR0EsUUFBUSxJQUFFLENBQWIsRUFDTDtRQUNJQyxFQUFFLENBQUNjLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixJQUFsQixFQUF3QmYsRUFBRSxDQUFDZ0IsV0FBM0IsRUFBd0MsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1VBQ2hFTCxPQUFPLENBQUNNLFlBQVIsQ0FBcUJuQixFQUFFLENBQUNvQixNQUF4QixFQUFnQ0YsV0FBaEMsR0FBOENBLFdBQTlDO1FBQ0gsQ0FGRDtRQUdBbEIsRUFBRSxDQUFDYyxNQUFILENBQVVDLE9BQVYsQ0FBa0IsSUFBbEIsRUFBd0JmLEVBQUUsQ0FBQ2dCLFdBQTNCLEVBQXdDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtVQUNoRVgsR0FBRyxDQUFDWSxZQUFKLENBQWlCbkIsRUFBRSxDQUFDb0IsTUFBcEIsRUFBNEJGLFdBQTVCLEdBQTBDQSxXQUExQztRQUNILENBRkQ7UUFHQW5CLFFBQVE7TUFDWDtJQUNBLENBckJzQyxDQXFCckNzQixJQXJCcUMsQ0FxQmhDLElBckJnQyxDQUEzQyxFQXFCa0IsSUFyQmxCO0VBcUJ5QjtBQTlCeEIsQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbndpbmRvdy5vcGVubGFtcD0wO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgfSxcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+eCueWHu+S9v+eUqOeJqeWTgeS8muS9v+eJqeWTgeWbvueJh+WHuueOsOWcqOW3puS4iuinklxyXG4gICAgICAgIHRoaXMubm9kZS5waWM9J3NoYWRlLzEnO1xyXG4gICAgICAgIGxldCBudW09Y2MuZmluZChcIkNhbnZhcy9udW1cIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHVzZXRvb2wgPSBjYy5maW5kKFwiQ2FudmFzL2xhbXBzaGFkZVwiKTsgLy/pgJrov4flhajot6/lvoTojrflj5blr7nlupToioLngrlcclxuICAgICAgICAgICAgaWYob3BlbmxhbXA9PTApXHJcbiAgICAgICAgICAgIHtjYy5sb2FkZXIubG9hZFJlcyhcInNoYWRlLzFcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1c2V0b29sLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIm51bS8xXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgbnVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvcGVubGFtcCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihvcGVubGFtcD09MSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMobnVsbCwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNldG9vbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhudWxsLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb3BlbmxhbXAtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO31cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/changcolor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68274LbEfNJnJMBn7VM8RoK', 'changcolor');
// scripts/game_chp1/cp1_washingMachine/changcolor.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.isClick = true;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.changcolor, this);
    };
    NewClass.prototype.changcolor = function () {
        cc.log("background_changecolor");
        if (this.isClick == true) {
            this.node.color = cc.Color.BLUE;
            this.isClick = false;
        }
        else {
            this.node.color = cc.Color.GREEN;
            this.isClick = true;
            this.node.addChild = this.isClick.valueOf;
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY2hhbmdjb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7QUFFaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFDRSx3QkFBd0I7UUFEMUIscUVBdUJDO1FBcEJDLGVBQWU7UUFDZixhQUFPLEdBQVksSUFBSSxDQUFDOztRQWtCeEIsaUJBQWlCO0lBQ25CLENBQUM7SUFqQkMseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCw2QkFBVSxHQUFWO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFFaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQXBCa0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVCNUI7SUFBRCxlQUFDO0NBdkJELEFBdUJDLENBdkJxQyxFQUFFLENBQUMsU0FBUyxHQXVCakQ7a0JBdkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIC8vIG9uTG9hZCAoKSB7fVxuICBpc0NsaWNrOiBib29sZWFuID0gdHJ1ZTtcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmNoYW5nY29sb3IsIHRoaXMpO1xuICB9XG4gIGNoYW5nY29sb3IoKSB7XG4gICAgY2MubG9nKFwiYmFja2dyb3VuZF9jaGFuZ2Vjb2xvclwiKTtcbiAgICBpZiAodGhpcy5pc0NsaWNrID09IHRydWUpIHtcbiAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMVUU7XG5cbiAgICAgIHRoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcbiAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQgPSB0aGlzLmlzQ2xpY2sudmFsdWVPZjtcbiAgICB9XG4gIH1cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 003.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9abfYQT4tDEL95gXXKrjkx', '0 - 003');
// scripts/0 - 003.js

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
    // window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 3;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 3;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMDMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNOO0lBQ0M7SUFDQSxJQUFJQyxLQUFLLEdBQUMsQ0FBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsQ0FBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgIC8vIHdpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MztcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MztcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 004.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3741057Yd9EvZ1mlsoDI06T', '0 - 004');
// scripts/0 - 004.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 4;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 4;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMDQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsQ0FBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsQ0FBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9NDtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9NDtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 008.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf528rAv89AMYJC+KJdgyXY', '0 - 008');
// scripts/0 - 008.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 8;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 8;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMDguanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsQ0FBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsQ0FBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9ODtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9ODtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 013.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b9f0kF4vhHSog6hy8g8lYE', '0 - 013');
// scripts/0 - 013.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 13;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 13;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMTMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsRUFBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsRUFBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MTM7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBxd251bVtpbmRleF09LXF3bnVtW2luZGV4XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg8PTExKXF3bnVtW2luZGV4KzRdPS1xd251bVtpbmRleCs0XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg+PTQpcXdudW1baW5kZXgtNF09LXF3bnVtW2luZGV4LTRdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0wKXF3bnVtW2luZGV4LTFdPS1xd251bVtpbmRleC0xXTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9Mylxd251bVtpbmRleCsxXT0tcXdudW1baW5kZXgrMV07XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IGluZGV4PTEzO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a636VHHQhEU5GkurZMX19X', '0');
// scripts/0.js

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
    window.latticeDecryptionInCP2 = 0;
    window.qwnum = [-1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1]; //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)

    var index = 0;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 0;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    for (var i = 0; i <= 15; i++) {
      if (qwnum[i] != 1) break;

      if (i == 15 && latticeDecryptionInCP2 == 0) {
        latticeDecryptionInCP2 = 1;
        console.log("succeed");
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIndpbmRvdyIsImxhdHRpY2VEZWNyeXB0aW9uSW5DUDIiLCJxd251bSIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInVwZGF0ZSIsImR0Iiwic2VsZiIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJpIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMQyxNQUFNLENBQUNDLHNCQUFQLEdBQThCLENBQTlCO0lBQ0FELE1BQU0sQ0FBQ0UsS0FBUCxHQUFhLENBQUMsQ0FBQyxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLENBQUMsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBdUIsQ0FBQyxDQUF4QixFQUEwQixDQUExQixFQUE0QixDQUE1QixFQUE4QixDQUE5QixFQUFnQyxDQUFoQyxFQUFrQyxDQUFDLENBQW5DLENBQWIsQ0FGSyxDQUdMOztJQUNBLElBQUlDLEtBQUssR0FBQyxDQUFWO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFWLEVBQUUsQ0FBQ1csSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7TUFDckRQLEtBQUssQ0FBQ0MsS0FBRCxDQUFMLEdBQWEsQ0FBQ0QsS0FBSyxDQUFDQyxLQUFELENBQW5CO01BQ0EsSUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYUQsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtNQUNiLElBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlELEtBQUssQ0FBQ0MsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNELEtBQUssQ0FBQ0MsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDWixJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY0QsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtNQUNkLElBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQXJCO0lBQ2pCLENBTkQ7RUFTSCxDQXZDSTtFQXlDTE8sTUF6Q0ssa0JBeUNHQyxFQXpDSCxFQXlDTztJQUNSLElBQUlSLEtBQUssR0FBQyxDQUFWO0lBQ0EsSUFBSVMsSUFBSSxHQUFDLElBQVQ7O0lBRUEsSUFBR1YsS0FBSyxDQUFDQyxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtNQUNmUixFQUFFLENBQUNrQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJuQixFQUFFLENBQUNvQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDcERMLElBQUksQ0FBQ1IsSUFBTCxDQUFVYyxZQUFWLENBQXVCdkIsRUFBRSxDQUFDd0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNELENBRkg7SUFHSDs7SUFDRCxJQUFHZixLQUFLLENBQUNDLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7TUFDaEJSLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQm5CLEVBQUUsQ0FBQ29CLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtRQUNyREwsSUFBSSxDQUFDUixJQUFMLENBQVVjLFlBQVYsQ0FBdUJ2QixFQUFFLENBQUN3QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO01BQ0gsQ0FGRDtJQUdIOztJQUNELEtBQUksSUFBSUksQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxJQUFFLEVBQWYsRUFBa0JBLENBQUMsRUFBbkIsRUFBc0I7TUFDbEIsSUFBR25CLEtBQUssQ0FBQ21CLENBQUQsQ0FBTCxJQUFVLENBQWIsRUFBZTs7TUFDZixJQUFHQSxDQUFDLElBQUUsRUFBSCxJQUFPcEIsc0JBQXNCLElBQUUsQ0FBbEMsRUFBb0M7UUFDaENBLHNCQUFzQixHQUFDLENBQXZCO1FBQ0FxQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO01BQ0g7SUFDSjtFQUNKO0FBOURJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB3aW5kb3cubGF0dGljZURlY3J5cHRpb25JbkNQMj0wO1xyXG4gICAgICAgIHdpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MDtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MDtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPD0xNTtpKyspe1xyXG4gICAgICAgICAgICBpZihxd251bVtpXSE9MSlicmVhaztcclxuICAgICAgICAgICAgaWYoaT09MTUmJmxhdHRpY2VEZWNyeXB0aW9uSW5DUDI9PTApe1xyXG4gICAgICAgICAgICAgICAgbGF0dGljZURlY3J5cHRpb25JbkNQMj0xO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZWVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 014.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fab14DILZFQ7LO6qcMOTEI', '0 - 014');
// scripts/0 - 014.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 14;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 14;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMTQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsRUFBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsRUFBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MTQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBxd251bVtpbmRleF09LXF3bnVtW2luZGV4XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg8PTExKXF3bnVtW2luZGV4KzRdPS1xd251bVtpbmRleCs0XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg+PTQpcXdudW1baW5kZXgtNF09LXF3bnVtW2luZGV4LTRdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0wKXF3bnVtW2luZGV4LTFdPS1xd251bVtpbmRleC0xXTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9Mylxd251bVtpbmRleCsxXT0tcXdudW1baW5kZXgrMV07XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IGluZGV4PTE0O1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 009.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa1f81sfDBHhJ141Km6e5ih', '0 - 009');
// scripts/0 - 009.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 9;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 9;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMDkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsQ0FBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsQ0FBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9OTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9OTtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 011.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b7eaGa165LSIafuFCdPpwD', '0 - 011');
// scripts/0 - 011.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 11;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 11;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMTEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsRUFBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsRUFBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MTE7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBxd251bVtpbmRleF09LXF3bnVtW2luZGV4XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg8PTExKXF3bnVtW2luZGV4KzRdPS1xd251bVtpbmRleCs0XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg+PTQpcXdudW1baW5kZXgtNF09LXF3bnVtW2luZGV4LTRdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0wKXF3bnVtW2luZGV4LTFdPS1xd251bVtpbmRleC0xXTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9Mylxd251bVtpbmRleCsxXT0tcXdudW1baW5kZXgrMV07XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IGluZGV4PTExO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b14c8Gs9RI4ptogT/k0CVp', 'button');
// scripts/button.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.count = 0;
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
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var paper = cc.find("Canvas/color2");

      if (count == 0) {
        cc.loader.loadRes("color/color1", cc.SpriteFrame, function (err, spriteFrame) {
          paper.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        count++;
      } else {
        cc.loader.loadRes("color/color3", cc.SpriteFrame, function (err, spriteFrame) {
          paper.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
      }
    }.bind(this), this);
  }
} // update (dt) {},
);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjb3VudCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsInBhcGVyIiwiZmluZCIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWEsQ0FBYjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsS0F6QkssbUJBeUJJO0lBQ0wsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxZQUFZO01BQ25ELElBQUlDLEtBQUssR0FBQ1YsRUFBRSxDQUFDVyxJQUFILENBQVEsZUFBUixDQUFWOztNQUNBLElBQUdaLEtBQUssSUFBRSxDQUFWLEVBQ0o7UUFBQ0MsRUFBRSxDQUFDWSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsY0FBbEIsRUFBa0NiLEVBQUUsQ0FBQ2MsV0FBckMsRUFBa0QsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1VBQ3ZFTixLQUFLLENBQUNPLFlBQU4sQ0FBbUJqQixFQUFFLENBQUNrQixNQUF0QixFQUE4QkYsV0FBOUIsR0FBNENBLFdBQTVDO1FBQ0gsQ0FGSjtRQUdEakIsS0FBSztNQUFJLENBSkwsTUFNQTtRQUNJQyxFQUFFLENBQUNZLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixjQUFsQixFQUFrQ2IsRUFBRSxDQUFDYyxXQUFyQyxFQUFrRCxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7VUFDMUVOLEtBQUssQ0FBQ08sWUFBTixDQUFtQmpCLEVBQUUsQ0FBQ2tCLE1BQXRCLEVBQThCRixXQUE5QixHQUE0Q0EsV0FBNUM7UUFDSCxDQUZEO01BR0g7SUFDQSxDQWJzQyxDQWFyQ0csSUFicUMsQ0FhaEMsSUFiZ0MsQ0FBM0MsRUFha0IsSUFibEI7RUFheUI7QUF2Q3hCLENBQVQsQ0EwQ0k7QUExQ0oiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG53aW5kb3cuY291bnQ9MDtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgcGFwZXI9Y2MuZmluZChcIkNhbnZhcy9jb2xvcjJcIik7XHJcbiAgICAgICAgICAgIGlmKGNvdW50PT0wKVxyXG4gICAgICAgIHtjYy5sb2FkZXIubG9hZFJlcyhcImNvbG9yL2NvbG9yMVwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHBhcGVyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvdW50Kys7fVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiY29sb3IvY29sb3IzXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcGVyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO31cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbik7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/changeback.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51c72kA3/1JrK+TzggUst5b', 'changeback');
// scripts/changeback.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
    this.gameScene = cc.director.getScene()._name;
    console.log("this scene" + this.gameScene);
  },
  changeScene: function changeScene() {
    this.nextScene = window.games[this.gameScene];
    console.log("next Scene:" + this.nextScene);
    cc.director.loadScene(this.nextScene, this.onSceneLaunched);
  },
  onSceneLaunched: function onSceneLaunched() {
    if (window.InUse != '') {
      var i = 0;

      for (; i < window.Bag.length; i++) {
        if (window.Bag[i].name == window.InUse) {
          break;
        }
      }

      var id = window.toolMap[window.Bag[i].name];
      var tool = window.TOOLS[id];
      this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
      var self = this.useItem;
      cc.loader.loadRes(tool['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
        self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        console.log("self in: " + self.name);
      });
    }
  },
  update: function update() {
    console.log("this scene" + this.gameScene);
    console.log("next Scene:" + this.nextScene);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NoYW5nZWJhY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ1c2VJdGVtIiwiZmluZCIsImdhbWVTY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJfbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VTY2VuZSIsIm5leHRTY2VuZSIsIndpbmRvdyIsImdhbWVzIiwibG9hZFNjZW5lIiwib25TY2VuZUxhdW5jaGVkIiwiSW5Vc2UiLCJpIiwiQmFnIiwibGVuZ3RoIiwibmFtZSIsImlkIiwidG9vbE1hcCIsInRvb2wiLCJUT09MUyIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLEVBSFA7RUFNTEMsTUFOSyxvQkFNRztJQUNKLEtBQUtDLE9BQUwsR0FBZUwsRUFBRSxDQUFDTSxJQUFILENBQVEscUNBQVIsQ0FBZjtJQUNBLEtBQUtDLFNBQUwsR0FBaUJQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxLQUF4QztJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlLEtBQUtMLFNBQWhDO0VBQ0gsQ0FWSTtFQVlMTSxXQVpLLHlCQVlTO0lBQ1YsS0FBS0MsU0FBTCxHQUFpQkMsTUFBTSxDQUFDQyxLQUFQLENBQWEsS0FBS1QsU0FBbEIsQ0FBakI7SUFDQUksT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQWdCLEtBQUtFLFNBQWpDO0lBQ0FkLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZUyxTQUFaLENBQXNCLEtBQUtILFNBQTNCLEVBQXFDLEtBQUtJLGVBQTFDO0VBQ0gsQ0FoQkk7RUFrQkxBLGVBbEJLLDZCQWtCWTtJQUNiLElBQUdILE1BQU0sQ0FBQ0ksS0FBUCxJQUFlLEVBQWxCLEVBQXFCO01BQ2pCLElBQUlDLENBQUMsR0FBRyxDQUFSOztNQUNBLE9BQU9BLENBQUMsR0FBR0wsTUFBTSxDQUFDTSxHQUFQLENBQVdDLE1BQXRCLEVBQThCRixDQUFDLEVBQS9CLEVBQW1DO1FBQy9CLElBQUdMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXRCxDQUFYLEVBQWNHLElBQWQsSUFBc0JSLE1BQU0sQ0FBQ0ksS0FBaEMsRUFBc0M7VUFDbEM7UUFDSDtNQUNKOztNQUNELElBQUlLLEVBQUUsR0FBR1QsTUFBTSxDQUFDVSxPQUFQLENBQWVWLE1BQU0sQ0FBQ00sR0FBUCxDQUFXRCxDQUFYLEVBQWNHLElBQTdCLENBQVQ7TUFFQSxJQUFJRyxJQUFJLEdBQUdYLE1BQU0sQ0FBQ1ksS0FBUCxDQUFhSCxFQUFiLENBQVg7TUFFQSxLQUFLbkIsT0FBTCxHQUFlTCxFQUFFLENBQUNNLElBQUgsQ0FBUSxxQ0FBUixDQUFmO01BQ0EsSUFBSXNCLElBQUksR0FBRyxLQUFLdkIsT0FBaEI7TUFFQUwsRUFBRSxDQUFDNkIsTUFBSCxDQUFVQyxPQUFWLENBQWtCSixJQUFJLENBQUMsUUFBRCxDQUF0QixFQUFrQzFCLEVBQUUsQ0FBQytCLFdBQXJDLEVBQWtELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtRQUMxRUwsSUFBSSxDQUFDTSxZQUFMLENBQWtCbEMsRUFBRSxDQUFDbUMsTUFBckIsRUFBNkJGLFdBQTdCLEdBQTJDQSxXQUEzQztRQUNBdEIsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWWdCLElBQUksQ0FBQ0wsSUFBN0I7TUFDSCxDQUhEO0lBSUg7RUFDSixDQXRDSTtFQXVDTGEsTUF2Q0ssb0JBdUNHO0lBQ0p6QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlLEtBQUtMLFNBQWhDO0lBQ0FJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFnQixLQUFLRSxTQUFqQztFQUNIO0FBMUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgfSxcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5fbmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIHNjZW5lXCIgKyB0aGlzLmdhbWVTY2VuZSk7XG4gICAgfSxcbiAgICBcbiAgICBjaGFuZ2VTY2VuZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0U2NlbmUgPSB3aW5kb3cuZ2FtZXNbdGhpcy5nYW1lU2NlbmVdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQgU2NlbmU6XCIgKyB0aGlzLm5leHRTY2VuZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLm5leHRTY2VuZSx0aGlzLm9uU2NlbmVMYXVuY2hlZCk7XG4gICAgfSxcblxuICAgIG9uU2NlbmVMYXVuY2hlZCgpe1xuICAgICAgICBpZih3aW5kb3cuSW5Vc2UgIT0nJyl7XG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIGZvciAoOyBpIDwgd2luZG93LkJhZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5CYWdbaV0ubmFtZSA9PSB3aW5kb3cuSW5Vc2Upe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaWQgPSB3aW5kb3cudG9vbE1hcFt3aW5kb3cuQmFnW2ldLm5hbWVdO1xuXG4gICAgICAgICAgICBsZXQgdG9vbCA9IHdpbmRvdy5UT09MU1tpZF07XG5cbiAgICAgICAgICAgIHRoaXMudXNlSXRlbSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL3VzZVRvb2wvYm9keVwiKTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcy51c2VJdGVtO1xuXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh0b29sWydwaWNVcmwnXSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZiBpbjogXCIrc2VsZi5uYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGUoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIHNjZW5lXCIgKyB0aGlzLmdhbWVTY2VuZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV4dCBTY2VuZTpcIiArIHRoaXMubmV4dFNjZW5lKTtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 007.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7485cuFjRNLRYN0EPCKaPeX', '0 - 007');
// scripts/0 - 007.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 7;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 7;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMDcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsQ0FBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsQ0FBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9NztcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9NztcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bglockctr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b2adoQGy1KnoNnnJ3IW0/S', 'bglockctr');
// scripts/bglockctr.js

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
    if (window.lockOfDoorInCP2 == true) {
      var usetool = cc.find("Canvas/bg/bglock");
      cc.loader.loadRes(null, cc.SpriteFrame, function (err, spriteFrame) {
        usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      });
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JnbG9ja2N0ci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwid2luZG93IiwibG9ja09mRG9vckluQ1AyIiwidXNldG9vbCIsImZpbmQiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMLElBQUdDLE1BQU0sQ0FBQ0MsZUFBUCxJQUF5QixJQUE1QixFQUNBO01BQ0ksSUFBSUMsT0FBTyxHQUFDUCxFQUFFLENBQUNRLElBQUgsQ0FBUSxrQkFBUixDQUFaO01BQ0FSLEVBQUUsQ0FBQ1MsTUFBSCxDQUFVQyxPQUFWLENBQWtCLElBQWxCLEVBQXdCVixFQUFFLENBQUNXLFdBQTNCLEVBQXdDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtRQUNoRU4sT0FBTyxDQUFDTyxZQUFSLENBQXFCZCxFQUFFLENBQUNlLE1BQXhCLEVBQWdDRixXQUFoQyxHQUE4Q0EsV0FBOUM7TUFDSCxDQUZEO0lBR0g7RUFDSixDQWpDSSxDQW1DTDs7QUFuQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGlmKHdpbmRvdy5sb2NrT2ZEb29ySW5DUDIgPT10cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdXNldG9vbD1jYy5maW5kKFwiQ2FudmFzL2JnL2JnbG9ja1wiKVxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMobnVsbCwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdXNldG9vbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kitchenctr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81dfbKXwxlN9ZJ4grXzXFY1', 'kitchenctr');
// scripts/kitchenctr.js

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
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      cc.director.loadScene('chp2_kitchen_game1');
    }.bind(this), this);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpdGNoZW5jdHIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsS0F6QkssbUJBeUJJO0lBQ0wsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxZQUFZO01BQ25EVCxFQUFFLENBQUNVLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixvQkFBdEI7SUFDQyxDQUZzQyxDQUVyQ0MsSUFGcUMsQ0FFaEMsSUFGZ0MsQ0FBM0MsRUFFa0IsSUFGbEI7RUFHSCxDQTdCSSxDQStCTDs7QUEvQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2NocDJfa2l0Y2hlbl9nYW1lMScpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/checkbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43637vKkEVC/4cLr2mRrRUx', 'checkbutton');
// scripts/checkbutton.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.caomeipaofu = 0;
        _this.heisenlin = 0;
        _this.tiantianquan = 0;
        _this.sum = 0;
        _this.label = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        this.node.on("check", this.check, this);
    };
    NewClass.prototype.check = function (below_node) {
        cc.log(below_node.name);
        if (below_node.name == "草莓泡芙<testbutton>") {
            if (below_node.isClick == false) {
                this.caomeipaofu += below_node.num;
                if (this.caomeipaofu == 10)
                    this.caomeipaofu = 8;
            }
            else {
                if (this.caomeipaofu == 8)
                    this.caomeipaofu = 5;
                else
                    this.caomeipaofu = 0;
            }
            cc.log("草莓泡芙这么多块钱" + this.caomeipaofu);
        }
        if (below_node.name == "甜甜圈<testbutton>") {
            if (below_node.isClick == false) {
                this.tiantianquan += below_node.num;
            }
            else {
                this.tiantianquan -= below_node.num;
            }
            cc.log("甜甜圈这么多块钱" + this.tiantianquan);
        }
        if (below_node.name == "黑森林蛋糕<testbutton>") {
            if (below_node.isClick == false) {
                this.heisenlin += below_node.num;
            }
            else {
                this.heisenlin -= below_node.num;
            }
            cc.log("黑森林蛋糕这么多块钱" + this.heisenlin);
        }
        this.sum = this.caomeipaofu + this.tiantianquan + this.heisenlin;
        cc.log("总和是" + this.sum);
    };
    NewClass.prototype.touchstart = function () {
        if (this.sum != 39) {
            this.label.string = "错误";
        }
        else {
            this.label.string = "正确";
            cc.director.loadScene('chp2_bakery');
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NoZWNrYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZEQztRQTVEQyxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFaEIsV0FBSyxHQUFhLElBQUksQ0FBQzs7UUFzRHZCLGlCQUFpQjtJQUNuQixDQUFDO0lBckRDLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCx3QkFBSyxHQUFMLFVBQU0sVUFBc0I7UUFDMUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLGtCQUFrQixFQUFFO1lBQ3pDLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUU7b0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7YUFDbEQ7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUM7b0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7O29CQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQzthQUMzQjtZQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksVUFBVSxDQUFDLElBQUksSUFBSSxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFFO2dCQUMvQixJQUFJLENBQUMsWUFBWSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDO2FBQ3JDO1lBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLG1CQUFtQixFQUFFO1lBQzFDLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDbEM7WUFDRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBcEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFOSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkQ1QjtJQUFELGVBQUM7Q0E3REQsQUE2REMsQ0E3RHFDLEVBQUUsQ0FBQyxTQUFTLEdBNkRqRDtrQkE3RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBiZWxvd19ub2RlIGZyb20gXCIuL3Rlc3RidXR0b25cIjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIGNhb21laXBhb2Z1OiBudW1iZXIgPSAwO1xuICBoZWlzZW5saW46IG51bWJlciA9IDA7XG4gIHRpYW50aWFucXVhbjogbnVtYmVyID0gMDtcbiAgc3VtOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgLy8gb25Mb2FkICgpIHt9XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubm9kZS5vbihcImNoZWNrXCIsIHRoaXMuY2hlY2ssIHRoaXMpO1xuICB9XG5cbiAgY2hlY2soYmVsb3dfbm9kZTogYmVsb3dfbm9kZSkge1xuICAgIGNjLmxvZyhiZWxvd19ub2RlLm5hbWUpO1xuICAgIGlmIChiZWxvd19ub2RlLm5hbWUgPT0gXCLojYnojpPms6Hoipk8dGVzdGJ1dHRvbj5cIikge1xuICAgICAgaWYgKGJlbG93X25vZGUuaXNDbGljayA9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmNhb21laXBhb2Z1ICs9IGJlbG93X25vZGUubnVtO1xuICAgICAgICBpZiAodGhpcy5jYW9tZWlwYW9mdSA9PSAxMCkgdGhpcy5jYW9tZWlwYW9mdSA9IDg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5jYW9tZWlwYW9mdSA9PSA4KSB0aGlzLmNhb21laXBhb2Z1ID0gNTtcbiAgICAgICAgZWxzZSB0aGlzLmNhb21laXBhb2Z1ID0gMDtcbiAgICAgIH1cbiAgICAgIGNjLmxvZyhcIuiNieiOk+azoeiKmei/meS5iOWkmuWdl+mSsVwiICsgdGhpcy5jYW9tZWlwYW9mdSk7XG4gICAgfVxuXG4gICAgaWYgKGJlbG93X25vZGUubmFtZSA9PSBcIueUnOeUnOWciDx0ZXN0YnV0dG9uPlwiKSB7XG4gICAgICBpZiAoYmVsb3dfbm9kZS5pc0NsaWNrID09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGlhbnRpYW5xdWFuICs9IGJlbG93X25vZGUubnVtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aWFudGlhbnF1YW4gLT0gYmVsb3dfbm9kZS5udW07XG4gICAgICB9XG4gICAgICBjYy5sb2coXCLnlJznlJzlnIjov5nkuYjlpJrlnZfpkrFcIiArIHRoaXMudGlhbnRpYW5xdWFuKTtcbiAgICB9XG5cbiAgICBpZiAoYmVsb3dfbm9kZS5uYW1lID09IFwi6buR5qOu5p6X6JuL57OVPHRlc3RidXR0b24+XCIpIHtcbiAgICAgIGlmIChiZWxvd19ub2RlLmlzQ2xpY2sgPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5oZWlzZW5saW4gKz0gYmVsb3dfbm9kZS5udW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhlaXNlbmxpbiAtPSBiZWxvd19ub2RlLm51bTtcbiAgICAgIH1cbiAgICAgIGNjLmxvZyhcIum7keajruael+ibi+ezlei/meS5iOWkmuWdl+mSsVwiICsgdGhpcy5oZWlzZW5saW4pO1xuICAgIH1cblxuICAgIHRoaXMuc3VtID0gdGhpcy5jYW9tZWlwYW9mdSArIHRoaXMudGlhbnRpYW5xdWFuICsgdGhpcy5oZWlzZW5saW47XG4gICAgY2MubG9nKFwi5oC75ZKM5pivXCIgKyB0aGlzLnN1bSk7XG4gIH1cblxuICB0b3VjaHN0YXJ0KCkge1xuICAgIGlmICh0aGlzLnN1bSAhPSAzOSkge1xuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIumUmeivr1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi5q2j56GuXCI7XG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2NocDJfYmFrZXJ5Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/chengctr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25e4b5qAttBTI2JuGIlI9mP', 'chengctr');
// scripts/chengctr.js

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
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      cc.director.loadScene('chp2_bakery_game');
    }.bind(this), this);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NoZW5nY3RyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsWUFBWTtNQUNuRFQsRUFBRSxDQUFDVSxRQUFILENBQVlDLFNBQVosQ0FBc0Isa0JBQXRCO0lBQ0MsQ0FGc0MsQ0FFckNDLElBRnFDLENBRWhDLElBRmdDLENBQTNDLEVBRWtCLElBRmxCO0VBR0gsQ0E3QkksQ0ErQkw7O0FBL0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdjaHAyX2Jha2VyeV9nYW1lJyk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO1xuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lockctr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07ca7/1yMZFzotJ/1M06wIL', 'lockctr');
// scripts/lockctr.js

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
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      cc.director.loadScene('cp2_floor2_lock');
    }.bind(this), this);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xvY2tjdHIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsS0F6QkssbUJBeUJJO0lBQ0wsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxZQUFZO01BQ25EVCxFQUFFLENBQUNVLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixpQkFBdEI7SUFDQyxDQUZzQyxDQUVyQ0MsSUFGcUMsQ0FFaEMsSUFGZ0MsQ0FBM0MsRUFFa0IsSUFGbEI7RUFHSCxDQTdCSSxDQStCTDs7QUEvQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2NwMl9mbG9vcjJfbG9jaycpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/savestate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ad76r5lWhMVJElShTw6DP4', 'savestate');
// scripts/savestate.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  saveState: function saveState() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NhdmVzdGF0ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwic2F2ZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsRUFIUDtFQU9MO0VBRUE7RUFFQUMsS0FYSyxtQkFXSSxDQUVSLENBYkk7RUFlTEMsU0FmSyx1QkFlTSxDQUVWO0FBakJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICBzYXZlU3RhdGUoKXtcbiAgICAgICAgXG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 015.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d305S5O09E85WR5HFWsoml', '0 - 015');
// scripts/0 - 015.js

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
    // window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 15;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 15;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMTUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNOO0lBQ0M7SUFDQSxJQUFJQyxLQUFLLEdBQUMsRUFBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsRUFBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUVBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgIC8vIHdpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MTU7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBxd251bVtpbmRleF09LXF3bnVtW2luZGV4XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg8PTExKXF3bnVtW2luZGV4KzRdPS1xd251bVtpbmRleCs0XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg+PTQpcXdudW1baW5kZXgtNF09LXF3bnVtW2luZGV4LTRdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0wKXF3bnVtW2luZGV4LTFdPS1xd251bVtpbmRleC0xXTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9Mylxd251bVtpbmRleCsxXT0tcXdudW1baW5kZXgrMV07XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IGluZGV4PTE1O1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/showbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adb84ZJ0DhIArG652zwil1I', 'showbutton');
// scripts/showbutton.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.below_node = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        this.node.opacity = 0;
        this.node.on("show", this.show, this);
    };
    NewClass.prototype.show = function (below_node) {
        if (below_node.node.opacity == 0) {
            this.node.opacity = 255;
            cc.log("show隐藏");
        }
        // else {
        //   this.node.opacity = 0;
        //   cc.log("show显示");
        // }
    };
    NewClass.prototype.touchstart = function (below_node) {
        if (this.node.opacity == 255) {
            cc.log("将" + this.node.name + "取下货架");
            this.node.opacity = 0;
            this.below_node.emit("show", this);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "below_node", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Nob3didXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0NDO1FBL0JDLHdCQUF3QjtRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQzs7UUE0QjNCLGlCQUFpQjtJQUNuQixDQUFDO0lBM0JDLGVBQWU7SUFDZix5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQUssVUFBc0I7UUFDekIsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEI7UUFDRCxTQUFTO1FBQ1QsMkJBQTJCO1FBQzNCLHNCQUFzQjtRQUN0QixJQUFJO0lBQ04sQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxVQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRTtZQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQztZQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBSFIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdDNUI7SUFBRCxlQUFDO0NBaENELEFBZ0NDLENBaENxQyxFQUFFLENBQUMsU0FBUyxHQWdDakQ7a0JBaENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgYmVsb3dfbm9kZSBmcm9tIFwiLi90ZXN0YnV0dG9uXCI7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGJlbG93X25vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIC8vIG9uTG9hZCAoKSB7fVxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMubm9kZS5vbihcInNob3dcIiwgdGhpcy5zaG93LCB0aGlzKTtcbiAgfVxuXG4gIHNob3coYmVsb3dfbm9kZTogYmVsb3dfbm9kZSkge1xuICAgIGlmIChiZWxvd19ub2RlLm5vZGUub3BhY2l0eSA9PSAwKSB7XG4gICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgIGNjLmxvZyhcInNob3fpmpDol49cIik7XG4gICAgfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIC8vICAgY2MubG9nKFwic2hvd+aYvuekulwiKTtcbiAgICAvLyB9XG4gIH1cblxuICB0b3VjaHN0YXJ0KGJlbG93X25vZGU6IGJlbG93X25vZGUpIHtcbiAgICBpZiAodGhpcy5ub2RlLm9wYWNpdHkgPT0gMjU1KSB7XG4gICAgICBjYy5sb2coXCLlsIZcIiArIHRoaXMubm9kZS5uYW1lICsgXCLlj5bkuIvotKfmnrZcIik7XG5cbiAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuYmVsb3dfbm9kZS5lbWl0KFwic2hvd1wiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/testbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5aebeZdgUVJLoOSrodl9hte', 'testbutton');
// scripts/testbutton.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isClick = true;
        _this.check_button = null;
        _this.show_button = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        this.node.on("show", this.show, this);
    };
    NewClass.prototype.touchart = function () {
        cc.log(this.num);
        if (this.isClick == true) {
            this.node.opacity = 0;
            this.isClick = false;
            this.show_button.emit("show", this);
            this.check_button.emit("check", this);
            cc.log("隐藏");
        }
        // else {
        //   this.node.opacity = 255;
        //   this.isClick = true;
        //   this.show_button.emit("show", this);
        //   this.check_button.emit("check", this);
        //   cc.log("显示");
        // }
    };
    NewClass.prototype.show = function (show_node) {
        this.node.opacity = 255;
        this.isClick = true;
        this.show_button.emit("show", this);
        this.check_button.emit("check", this);
        cc.log("显示");
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "check_button", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "show_button", void 0);
    __decorate([
        property(Number)
    ], NewClass.prototype, "num", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Rlc3RidXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNENDO1FBM0NDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7O1FBcUM1QixpQkFBaUI7SUFDbkIsQ0FBQztJQWxDQyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNkO1FBQ0QsU0FBUztRQUNULDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIseUNBQXlDO1FBQ3pDLDJDQUEyQztRQUMzQyxrQkFBa0I7UUFDbEIsSUFBSTtJQUNOLENBQUM7SUFDRCx1QkFBSSxHQUFKLFVBQUssU0FBb0I7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt5Q0FDYjtJQVRlLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0QzVCO0lBQUQsZUFBQztDQTVDRCxBQTRDQyxDQTVDcUMsRUFBRSxDQUFDLFNBQVMsR0E0Q2pEO2tCQTVDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHNob3dfbm9kZSBmcm9tIFwiLi9zaG93YnV0dG9uXCI7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBpc0NsaWNrOiBib29sZWFuID0gdHJ1ZTtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGNoZWNrX2J1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHNob3dfYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoTnVtYmVyKVxuICBudW07XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIC8vIG9uTG9hZCAoKSB7fVxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vZGUub24oXCJzaG93XCIsIHRoaXMuc2hvdywgdGhpcyk7XG4gIH1cbiAgdG91Y2hhcnQoKSB7XG4gICAgY2MubG9nKHRoaXMubnVtKTtcblxuICAgIGlmICh0aGlzLmlzQ2xpY2sgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dfYnV0dG9uLmVtaXQoXCJzaG93XCIsIHRoaXMpO1xuICAgICAgdGhpcy5jaGVja19idXR0b24uZW1pdChcImNoZWNrXCIsIHRoaXMpO1xuICAgICAgY2MubG9nKFwi6ZqQ6JePXCIpO1xuICAgIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgIC8vICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICAvLyAgIHRoaXMuc2hvd19idXR0b24uZW1pdChcInNob3dcIiwgdGhpcyk7XG4gICAgLy8gICB0aGlzLmNoZWNrX2J1dHRvbi5lbWl0KFwiY2hlY2tcIiwgdGhpcyk7XG4gICAgLy8gICBjYy5sb2coXCLmmL7npLpcIik7XG4gICAgLy8gfVxuICB9XG4gIHNob3coc2hvd19ub2RlOiBzaG93X25vZGUpIHtcbiAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuICAgIHRoaXMuc2hvd19idXR0b24uZW1pdChcInNob3dcIiwgdGhpcyk7XG4gICAgdGhpcy5jaGVja19idXR0b24uZW1pdChcImNoZWNrXCIsIHRoaXMpO1xuICAgIGNjLmxvZyhcIuaYvuekulwiKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/paperctr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6ad5B61AZO7rwHZ67XLpOn', 'paperctr');
// scripts/paperctr.js

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
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      cc.director.loadScene('chp2_kitchen_game2');
    }.bind(this), this);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BhcGVyY3RyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsWUFBWTtNQUNuRFQsRUFBRSxDQUFDVSxRQUFILENBQVlDLFNBQVosQ0FBc0Isb0JBQXRCO0lBQ0MsQ0FGc0MsQ0FFckNDLElBRnFDLENBRWhDLElBRmdDLENBQTNDLEVBRWtCLElBRmxCO0VBR0gsQ0E3QkksQ0ErQkw7O0FBL0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdjaHAyX2tpdGNoZW5fZ2FtZTInKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62d61KJhONJJIwvTvUNDwa2', '0 - 001');
// scripts/0 - 001.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 1;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 1;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMDEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsQ0FBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsQ0FBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MTtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zdctr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f91b5vD5LJK2YJdSyCeT5HS', 'zdctr');
// scripts/zdctr.js

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
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var usetool = cc.find("Canvas/bg/收银柜台/账单");
      cc.loader.loadRes("bigbill", cc.SpriteFrame, function (err, spriteFrame) {
        usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      });
    }.bind(this), this);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3pkY3RyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsInVzZXRvb2wiLCJmaW5kIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsS0F6QkssbUJBeUJJO0lBQ0wsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxZQUFZO01BQ25ELElBQUlDLE9BQU8sR0FBQ1YsRUFBRSxDQUFDVyxJQUFILENBQVEsbUJBQVIsQ0FBWjtNQUNBWCxFQUFFLENBQUNZLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixTQUFsQixFQUE2QmIsRUFBRSxDQUFDYyxXQUFoQyxFQUE2QyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7UUFDckVOLE9BQU8sQ0FBQ08sWUFBUixDQUFxQmpCLEVBQUUsQ0FBQ2tCLE1BQXhCLEVBQWdDRixXQUFoQyxHQUE4Q0EsV0FBOUM7TUFDSCxDQUZEO0lBR0MsQ0FMc0MsQ0FLckNHLElBTHFDLENBS2hDLElBTGdDLENBQTNDLEVBS2tCLElBTGxCO0VBTUgsQ0FoQ0ksQ0FrQ0w7O0FBbENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHVzZXRvb2w9Y2MuZmluZChcIkNhbnZhcy9iZy/mlLbpk7bmn5zlj7Av6LSm5Y2VXCIpXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImJpZ2JpbGxcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdXNldG9vbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO1xuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/game - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c54c7nKsO9NjJ876O9hvrCX', 'game - 001');
// scripts/controller/game - 001.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var inArr = [0, 0];
var closeItem = {
  door: 0,
  ghost: 1
};
cc.Class({
  "extends": cc.Component,
  properties: {
    mapNodes: cc.Node,
    useItem: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getPhysicsManager().debugDrawFlags = 0;
    cc.director.getPhysicsManager().gravity = cc.v2(0, -640);
    window.Global = {
      IsShowing: null,
      InArr: null,
      CloseItem: null,
      contact: null,
      id: null,
      currentScene: String,
      itemType: String,
      itemName: String,
      npcsMap: Map,
      gameBg: cc.Node,
      itemsMap: Map,
      doorsMap: Map
    };
  },
  start: function start() {
    console.log("start");
    Global.IsShowing = false;
    Global.InArr = inArr;
    Global.CloseItem = closeItem;
    Global.contact = ' ';
    Global.id = 0;
    Global.itemType = ' ';
    Global.itemName = ' ';
    Global.currentScene = cc.director.getScene()._name;
    console.log(Global.currentScene);
    this.initScenes();
    this.initAllNodes();
    this.initPaths();
    this.initTips(); // this.initMap(this.mapNodes);
  },
  //加载场景和门之间的对应关系
  initScenes: function initScenes() {},
  //重新加载场景，恢复原先的物品状态
  initAllNodes: function initAllNodes() {},
  //记录所有的节点路径，可选
  initPaths: function initPaths() {},
  //初始化弹窗的状态
  initTips: function initTips() {},
  initMap: function initMap() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvZ2FtZSAtIDAwMS5qcyJdLCJuYW1lcyI6WyJpbkFyciIsImNsb3NlSXRlbSIsImRvb3IiLCJnaG9zdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWFwTm9kZXMiLCJOb2RlIiwidXNlSXRlbSIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiZGVidWdEcmF3RmxhZ3MiLCJncmF2aXR5IiwidjIiLCJ3aW5kb3ciLCJHbG9iYWwiLCJJc1Nob3dpbmciLCJJbkFyciIsIkNsb3NlSXRlbSIsImNvbnRhY3QiLCJpZCIsImN1cnJlbnRTY2VuZSIsIlN0cmluZyIsIml0ZW1UeXBlIiwiaXRlbU5hbWUiLCJucGNzTWFwIiwiTWFwIiwiZ2FtZUJnIiwiaXRlbXNNYXAiLCJkb29yc01hcCIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImdldFNjZW5lIiwiX25hbWUiLCJpbml0U2NlbmVzIiwiaW5pdEFsbE5vZGVzIiwiaW5pdFBhdGhzIiwiaW5pdFRpcHMiLCJpbml0TWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVo7QUFDQSxJQUFJQyxTQUFTLEdBQUc7RUFDWkMsSUFBSSxFQUFFLENBRE07RUFFWkMsS0FBSyxFQUFFO0FBRkssQ0FBaEI7QUFJQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxJQURMO0lBRVJDLE9BQU8sRUFBRU4sRUFBRSxDQUFDSztFQUZKLENBSFA7RUFRTDtFQUdBRSxNQVhLLG9CQVdJO0lBQ0xQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ0MsT0FBaEMsR0FBMEMsSUFBMUM7SUFDQVYsRUFBRSxDQUFDUSxRQUFILENBQVlDLGlCQUFaLEdBQWdDRSxjQUFoQyxHQUFpRCxDQUFqRDtJQUNBWCxFQUFFLENBQUNRLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NHLE9BQWhDLEdBQTBDWixFQUFFLENBQUNhLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBQyxHQUFWLENBQTFDO0lBQ0FDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQjtNQUNaQyxTQUFTLEVBQUUsSUFEQztNQUVaQyxLQUFLLEVBQUUsSUFGSztNQUdaQyxTQUFTLEVBQUUsSUFIQztNQUlaQyxPQUFPLEVBQUUsSUFKRztNQUtaQyxFQUFFLEVBQUUsSUFMUTtNQU1aQyxZQUFZLEVBQUNDLE1BTkQ7TUFPWkMsUUFBUSxFQUFDRCxNQVBHO01BUVpFLFFBQVEsRUFBQ0YsTUFSRztNQVNaRyxPQUFPLEVBQUVDLEdBVEc7TUFVWkMsTUFBTSxFQUFDM0IsRUFBRSxDQUFDSyxJQVZFO01BV1p1QixRQUFRLEVBQUVGLEdBWEU7TUFZWkcsUUFBUSxFQUFFSDtJQVpFLENBQWhCO0VBY0gsQ0E3Qkk7RUErQkxJLEtBL0JLLG1CQStCRztJQUNKQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0lBQ0FqQixNQUFNLENBQUNDLFNBQVAsR0FBbUIsS0FBbkI7SUFDQUQsTUFBTSxDQUFDRSxLQUFQLEdBQWVyQixLQUFmO0lBQ0FtQixNQUFNLENBQUNHLFNBQVAsR0FBbUJyQixTQUFuQjtJQUNBa0IsTUFBTSxDQUFDSSxPQUFQLEdBQWlCLEdBQWpCO0lBQ0FKLE1BQU0sQ0FBQ0ssRUFBUCxHQUFZLENBQVo7SUFDQUwsTUFBTSxDQUFDUSxRQUFQLEdBQWlCLEdBQWpCO0lBQ0FSLE1BQU0sQ0FBQ1MsUUFBUCxHQUFpQixHQUFqQjtJQUNBVCxNQUFNLENBQUNNLFlBQVAsR0FBc0JyQixFQUFFLENBQUNRLFFBQUgsQ0FBWXlCLFFBQVosR0FBdUJDLEtBQTdDO0lBQ0FILE9BQU8sQ0FBQ0MsR0FBUixDQUFZakIsTUFBTSxDQUFDTSxZQUFuQjtJQUNBLEtBQUtjLFVBQUw7SUFDQSxLQUFLQyxZQUFMO0lBQ0EsS0FBS0MsU0FBTDtJQUNBLEtBQUtDLFFBQUwsR0FkSSxDQWVKO0VBQ0gsQ0EvQ0k7RUFpREw7RUFDQUgsVUFsREssd0JBa0RPLENBQ1gsQ0FuREk7RUFxREw7RUFDQUMsWUF0REssMEJBc0RVLENBQ2QsQ0F2REk7RUEwREw7RUFDQUMsU0EzREssdUJBMkRPLENBRVgsQ0E3REk7RUErREw7RUFDQUMsUUFoRUssc0JBZ0VNLENBQ1YsQ0FqRUk7RUFtRUxDLE9BbkVLLHFCQW1FSyxDQUNUO0FBcEVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmxldCBpbkFyciA9IFswLCAwXTtcbmxldCBjbG9zZUl0ZW0gPSB7XG4gICAgZG9vcjogMCxcbiAgICBnaG9zdDogMSxcbn1cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1hcE5vZGVzOiBjYy5Ob2RlLFxuICAgICAgICB1c2VJdGVtOiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSAwO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtNjQwKTtcbiAgICAgICAgd2luZG93Lkdsb2JhbCA9IHtcbiAgICAgICAgICAgIElzU2hvd2luZzogbnVsbCxcbiAgICAgICAgICAgIEluQXJyOiBudWxsLFxuICAgICAgICAgICAgQ2xvc2VJdGVtOiBudWxsLFxuICAgICAgICAgICAgY29udGFjdDogbnVsbCxcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgY3VycmVudFNjZW5lOlN0cmluZyxcbiAgICAgICAgICAgIGl0ZW1UeXBlOlN0cmluZyxcbiAgICAgICAgICAgIGl0ZW1OYW1lOlN0cmluZyxcbiAgICAgICAgICAgIG5wY3NNYXA6IE1hcCxcbiAgICAgICAgICAgIGdhbWVCZzpjYy5Ob2RlLFxuICAgICAgICAgICAgaXRlbXNNYXA6IE1hcCxcbiAgICAgICAgICAgIGRvb3JzTWFwOiBNYXAsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRcIik7XG4gICAgICAgIEdsb2JhbC5Jc1Nob3dpbmcgPSBmYWxzZTtcbiAgICAgICAgR2xvYmFsLkluQXJyID0gaW5BcnI7XG4gICAgICAgIEdsb2JhbC5DbG9zZUl0ZW0gPSBjbG9zZUl0ZW07XG4gICAgICAgIEdsb2JhbC5jb250YWN0ID0gJyAnO1xuICAgICAgICBHbG9iYWwuaWQgPSAwO1xuICAgICAgICBHbG9iYWwuaXRlbVR5cGU9ICcgJztcbiAgICAgICAgR2xvYmFsLml0ZW1OYW1lPSAnICc7XG4gICAgICAgIEdsb2JhbC5jdXJyZW50U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWwuY3VycmVudFNjZW5lKTtcbiAgICAgICAgdGhpcy5pbml0U2NlbmVzKCk7XG4gICAgICAgIHRoaXMuaW5pdEFsbE5vZGVzKCk7XG4gICAgICAgIHRoaXMuaW5pdFBhdGhzKCk7XG4gICAgICAgIHRoaXMuaW5pdFRpcHMoKTtcbiAgICAgICAgLy8gdGhpcy5pbml0TWFwKHRoaXMubWFwTm9kZXMpO1xuICAgIH0sXG5cbiAgICAvL+WKoOi9veWcuuaZr+WSjOmXqOS5i+mXtOeahOWvueW6lOWFs+ezu1xuICAgIGluaXRTY2VuZXMoKXtcbiAgICB9LFxuXG4gICAgLy/ph43mlrDliqDovb3lnLrmma/vvIzmgaLlpI3ljp/lhYjnmoTnianlk4HnirbmgIFcbiAgICBpbml0QWxsTm9kZXMoKSB7XG4gICAgfSxcbiAgICBcblxuICAgIC8v6K6w5b2V5omA5pyJ55qE6IqC54K56Lev5b6E77yM5Y+v6YCJXG4gICAgaW5pdFBhdGhzKCkge1xuXG4gICAgfSxcblxuICAgIC8v5Yid5aeL5YyW5by556qX55qE54q25oCBXG4gICAgaW5pdFRpcHMoKSB7XG4gICAgfSxcblxuICAgIGluaXRNYXAoKSB7XG4gICAgfSxcblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/saveState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b745f5Q/xNFjqTUZsWwQ08a', 'saveState');
// scripts/controller/saveState.js

"use strict";

var POINTS = [{
  id: 0,
  version: '0.1',
  poName: 'lockOfSwitchInCP0',
  state: false,
  dataNum: 0,
  poData: [],
  poMap: {
    "origin": -1
  }
}];
var POMAP = {
  lockOfSwitchInCP0: 0
};

var pushData = function pushData(data, dataName, pointIndex) {
  POINTS[pointIndex].dataNum++;
  POINTS[pointIndex].poData.push(data);
  var dataIndexName = 'the' + dataName;
  POINTS[pointIndex].poMap[dataIndexName] = POINTS[pointIndex].dataNum - 1;
  console.log(POINTS[pointIndex].poData);
  console.log(POINTS[pointIndex].poMap);
};

var getData = function getData(dataName, pointIndex) {
  var dataIndexName = 'the' + dataName;
  var dataIndex = POINTS[pointIndex].poMap[dataIndexName];
  console.log(POINTS[pointIndex].poMap);
  var data = POINTS[pointIndex].poData[dataIndex];
  console.log(data);
  return data;
};

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {}
});
module.exports = {
  POINTS: POINTS,
  POMAP: POMAP,
  pushData: pushData,
  getData: getData
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvc2F2ZVN0YXRlLmpzIl0sIm5hbWVzIjpbIlBPSU5UUyIsImlkIiwidmVyc2lvbiIsInBvTmFtZSIsInN0YXRlIiwiZGF0YU51bSIsInBvRGF0YSIsInBvTWFwIiwiUE9NQVAiLCJsb2NrT2ZTd2l0Y2hJbkNQMCIsInB1c2hEYXRhIiwiZGF0YSIsImRhdGFOYW1lIiwicG9pbnRJbmRleCIsInB1c2giLCJkYXRhSW5kZXhOYW1lIiwiY29uc29sZSIsImxvZyIsImdldERhdGEiLCJkYXRhSW5kZXgiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUcsQ0FDVDtFQUNJQyxFQUFFLEVBQUcsQ0FEVDtFQUVJQyxPQUFPLEVBQUcsS0FGZDtFQUdJQyxNQUFNLEVBQUcsbUJBSGI7RUFJSUMsS0FBSyxFQUFHLEtBSlo7RUFLSUMsT0FBTyxFQUFHLENBTGQ7RUFNSUMsTUFBTSxFQUFHLEVBTmI7RUFPSUMsS0FBSyxFQUFHO0lBQ0osVUFBVyxDQUFDO0VBRFI7QUFQWixDQURTLENBQWI7QUFlQSxJQUFJQyxLQUFLLEdBQUc7RUFDUkMsaUJBQWlCLEVBQUc7QUFEWixDQUFaOztBQUtBLElBQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVVDLElBQVYsRUFBZ0JDLFFBQWhCLEVBQTBCQyxVQUExQixFQUFxQztFQUNoRGIsTUFBTSxDQUFDYSxVQUFELENBQU4sQ0FBbUJSLE9BQW5CO0VBQ0FMLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CUCxNQUFuQixDQUEwQlEsSUFBMUIsQ0FBK0JILElBQS9CO0VBQ0EsSUFBSUksYUFBYSxHQUFHLFFBQVFILFFBQTVCO0VBQ0FaLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CTixLQUFuQixDQUF5QlEsYUFBekIsSUFBMENmLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CUixPQUFuQixHQUEyQixDQUFyRTtFQUNBVyxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CUCxNQUEvQjtFQUNBVSxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CTixLQUEvQjtBQUNILENBUEQ7O0FBU0EsSUFBSVcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBVU4sUUFBVixFQUFvQkMsVUFBcEIsRUFBK0I7RUFDekMsSUFBSUUsYUFBYSxHQUFHLFFBQVFILFFBQTVCO0VBQ0EsSUFBSU8sU0FBUyxHQUFHbkIsTUFBTSxDQUFDYSxVQUFELENBQU4sQ0FBbUJOLEtBQW5CLENBQXlCUSxhQUF6QixDQUFoQjtFQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CTixLQUEvQjtFQUNBLElBQUlJLElBQUksR0FBR1gsTUFBTSxDQUFDYSxVQUFELENBQU4sQ0FBbUJQLE1BQW5CLENBQTBCYSxTQUExQixDQUFYO0VBQ0FILE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaO0VBQ0EsT0FBT0EsSUFBUDtBQUNILENBUEQ7O0FBU0FTLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBT0xDLEtBUEssbUJBT0ksQ0FFUjtBQVRJLENBQVQ7QUFZQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0VBQ2IxQixNQUFNLEVBQU5BLE1BRGE7RUFFYlEsS0FBSyxFQUFMQSxLQUZhO0VBR2JFLFFBQVEsRUFBUkEsUUFIYTtFQUliUSxPQUFPLEVBQVBBO0FBSmEsQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQT0lOVFMgPSBbXG4gICAge1xuICAgICAgICBpZCA6IDAsXG4gICAgICAgIHZlcnNpb24gOiAnMC4xJyxcbiAgICAgICAgcG9OYW1lIDogJ2xvY2tPZlN3aXRjaEluQ1AwJyxcbiAgICAgICAgc3RhdGUgOiBmYWxzZSxcbiAgICAgICAgZGF0YU51bSA6IDAsXG4gICAgICAgIHBvRGF0YSA6IFtdLFxuICAgICAgICBwb01hcCA6IHtcbiAgICAgICAgICAgIFwib3JpZ2luXCIgOiAtMVxuICAgICAgICB9XG4gICAgfSxcbl1cblxuXG52YXIgUE9NQVAgPSB7XG4gICAgbG9ja09mU3dpdGNoSW5DUDAgOiAwLFxufTtcblxuXG52YXIgcHVzaERhdGEgPSBmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIHBvaW50SW5kZXgpe1xuICAgIFBPSU5UU1twb2ludEluZGV4XS5kYXRhTnVtKys7XG4gICAgUE9JTlRTW3BvaW50SW5kZXhdLnBvRGF0YS5wdXNoKGRhdGEpO1xuICAgIGxldCBkYXRhSW5kZXhOYW1lID0gJ3RoZScgKyBkYXRhTmFtZTtcbiAgICBQT0lOVFNbcG9pbnRJbmRleF0ucG9NYXBbZGF0YUluZGV4TmFtZV0gPSBQT0lOVFNbcG9pbnRJbmRleF0uZGF0YU51bS0xO1xuICAgIGNvbnNvbGUubG9nKFBPSU5UU1twb2ludEluZGV4XS5wb0RhdGEpO1xuICAgIGNvbnNvbGUubG9nKFBPSU5UU1twb2ludEluZGV4XS5wb01hcCk7XG59XG5cbnZhciBnZXREYXRhID0gZnVuY3Rpb24gKGRhdGFOYW1lLCBwb2ludEluZGV4KXtcbiAgICBsZXQgZGF0YUluZGV4TmFtZSA9ICd0aGUnICsgZGF0YU5hbWU7XG4gICAgbGV0IGRhdGFJbmRleCA9IFBPSU5UU1twb2ludEluZGV4XS5wb01hcFtkYXRhSW5kZXhOYW1lXTtcbiAgICBjb25zb2xlLmxvZyhQT0lOVFNbcG9pbnRJbmRleF0ucG9NYXApO1xuICAgIGxldCBkYXRhID0gUE9JTlRTW3BvaW50SW5kZXhdLnBvRGF0YVtkYXRhSW5kZXhdO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUE9JTlRTLFxuICAgIFBPTUFQLFxuICAgIHB1c2hEYXRhLFxuICAgIGdldERhdGEsXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/changeScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1a79Eh0/dMe48OmdSovolK', 'changeScene');
// scripts/controller/changeScene.js

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
    door: cc.Node,
    playerNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.currentScene = cc.director.getScene()._name;
    this.nextScene = '';
    this.currentDoor = '';
    this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
    console.log("useItem:" + this.useItem.name);
    console.log("onload");
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(event) {
    // console.log("press space");
    if (this.canshow && event.keyCode == cc.macro.KEY.space) {
      console.log("press space");
      this.saveState();
      this.changeScene();
    }
  },
  canShow: function canShow() {
    return Global.itemType == 'doors';
  },
  saveState: function saveState() {
    window.player.pos_X = this.playerNode.getPosition().x;
    window.player.pos_Y = this.playerNode.getPosition().y;
    console.log(window.player.pos_X, window.player.pos_Y);
  },
  onSceneLaunched: function onSceneLaunched() {
    if (window.InUse != '') {
      var i = 0;

      for (; i < window.Bag.length; i++) {
        if (window.Bag[i].name == window.InUse) {
          break;
        }
      }

      var id = window.toolMap[window.Bag[i].name];
      console.log("id:" + id);
      var tool = window.TOOLS[id];
      console.log("tool:" + tool.name);
      this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
      var self = this.useItem;
      console.log("self out: " + self.name);
      cc.loader.loadRes(tool['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
        self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        console.log("self in: " + self.name);
      });
    }
  },
  changeScene: function changeScene() {
    var scenes = window.scenes[this.currentScene];
    console.log("scenes: " + scenes);
    this.nextScene = scenes[this.currentDoor];
    console.log("next:" + this.nextScene);
    cc.director.loadScene(this.nextScene, this.onSceneLaunched);
  },
  start: function start() {},
  update: function update() {
    // console.log(cc.director.getScene()._name);
    this.canshow = this.canShow();

    if (Global.itemType != 'doors') {
      this.currentDoor = '';
    } else {
      this.currentDoor = Global.itemName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvY2hhbmdlU2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkb29yIiwiTm9kZSIsInBsYXllck5vZGUiLCJvbkxvYWQiLCJjdXJyZW50U2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiX25hbWUiLCJuZXh0U2NlbmUiLCJjdXJyZW50RG9vciIsInVzZUl0ZW0iLCJmaW5kIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsImV2ZW50IiwiY2Fuc2hvdyIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwic2F2ZVN0YXRlIiwiY2hhbmdlU2NlbmUiLCJjYW5TaG93IiwiR2xvYmFsIiwiaXRlbVR5cGUiLCJ3aW5kb3ciLCJwbGF5ZXIiLCJwb3NfWCIsImdldFBvc2l0aW9uIiwieCIsInBvc19ZIiwieSIsIm9uU2NlbmVMYXVuY2hlZCIsIkluVXNlIiwiaSIsIkJhZyIsImxlbmd0aCIsImlkIiwidG9vbE1hcCIsInRvb2wiLCJUT09MUyIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNjZW5lcyIsImxvYWRTY2VuZSIsInN0YXJ0IiwidXBkYXRlIiwiaXRlbU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxJQUFJLEVBQUNKLEVBQUUsQ0FBQ0ssSUFEQTtJQUVSQyxVQUFVLEVBQUNOLEVBQUUsQ0FBQ0s7RUFGTixDQUhQO0VBUUw7RUFFQUUsTUFWSyxvQkFVSztJQUNOLEtBQUtDLFlBQUwsR0FBb0JSLEVBQUUsQ0FBQ1MsUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxLQUEzQztJQUNBLEtBQUtDLFNBQUwsR0FBaUIsRUFBakI7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0lBQ0EsS0FBS0MsT0FBTCxHQUFlZCxFQUFFLENBQUNlLElBQUgsQ0FBUSxxQ0FBUixDQUFmO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVcsS0FBS0gsT0FBTCxDQUFhSSxJQUFwQztJQUNBRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0lBQ0FqQixFQUFFLENBQUNtQixXQUFILENBQWVDLEVBQWYsQ0FBa0JwQixFQUFFLENBQUNxQixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELEVBQXFFLElBQXJFO0VBQ0gsQ0FsQkk7RUFvQkxBLFNBcEJLLHFCQW9CS0MsS0FwQkwsRUFvQlc7SUFDWjtJQUNBLElBQUcsS0FBS0MsT0FBTCxJQUFnQkQsS0FBSyxDQUFDRSxPQUFOLElBQWlCM0IsRUFBRSxDQUFDNEIsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWpELEVBQXVEO01BQ25EZCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO01BQ0EsS0FBS2MsU0FBTDtNQUNBLEtBQUtDLFdBQUw7SUFDSDtFQUNKLENBM0JJO0VBNkJMQyxPQTdCSyxxQkE2Qkk7SUFDTCxPQUFPQyxNQUFNLENBQUNDLFFBQVAsSUFBbUIsT0FBMUI7RUFDSCxDQS9CSTtFQWlDTEosU0FqQ0ssdUJBaUNNO0lBQ1BLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLEdBQXNCLEtBQUtoQyxVQUFMLENBQWdCaUMsV0FBaEIsR0FBOEJDLENBQXBEO0lBQ0FKLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSSxLQUFkLEdBQXNCLEtBQUtuQyxVQUFMLENBQWdCaUMsV0FBaEIsR0FBOEJHLENBQXBEO0lBQ0ExQixPQUFPLENBQUNDLEdBQVIsQ0FBWW1CLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUExQixFQUFpQ0YsTUFBTSxDQUFDQyxNQUFQLENBQWNJLEtBQS9DO0VBQ0gsQ0FyQ0k7RUF1Q0xFLGVBdkNLLDZCQXVDWTtJQUNiLElBQUdQLE1BQU0sQ0FBQ1EsS0FBUCxJQUFlLEVBQWxCLEVBQXFCO01BQ2pCLElBQUlDLENBQUMsR0FBRyxDQUFSOztNQUNBLE9BQU9BLENBQUMsR0FBR1QsTUFBTSxDQUFDVSxHQUFQLENBQVdDLE1BQXRCLEVBQThCRixDQUFDLEVBQS9CLEVBQW1DO1FBQy9CLElBQUdULE1BQU0sQ0FBQ1UsR0FBUCxDQUFXRCxDQUFYLEVBQWMzQixJQUFkLElBQXNCa0IsTUFBTSxDQUFDUSxLQUFoQyxFQUFzQztVQUNsQztRQUNIO01BQ0o7O01BQ0QsSUFBSUksRUFBRSxHQUFHWixNQUFNLENBQUNhLE9BQVAsQ0FBZWIsTUFBTSxDQUFDVSxHQUFQLENBQVdELENBQVgsRUFBYzNCLElBQTdCLENBQVQ7TUFDQUYsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBTytCLEVBQW5CO01BQ0EsSUFBSUUsSUFBSSxHQUFHZCxNQUFNLENBQUNlLEtBQVAsQ0FBYUgsRUFBYixDQUFYO01BQ0FoQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFRaUMsSUFBSSxDQUFDaEMsSUFBekI7TUFDQSxLQUFLSixPQUFMLEdBQWVkLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRLHFDQUFSLENBQWY7TUFDQSxJQUFJcUMsSUFBSSxHQUFHLEtBQUt0QyxPQUFoQjtNQUNBRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFhbUMsSUFBSSxDQUFDbEMsSUFBOUI7TUFDQWxCLEVBQUUsQ0FBQ3FELE1BQUgsQ0FBVUMsT0FBVixDQUFrQkosSUFBSSxDQUFDLFFBQUQsQ0FBdEIsRUFBa0NsRCxFQUFFLENBQUN1RCxXQUFyQyxFQUFrRCxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7UUFDMUVMLElBQUksQ0FBQ00sWUFBTCxDQUFrQjFELEVBQUUsQ0FBQzJELE1BQXJCLEVBQTZCRixXQUE3QixHQUEyQ0EsV0FBM0M7UUFDQXpDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVltQyxJQUFJLENBQUNsQyxJQUE3QjtNQUNILENBSEQ7SUFJSDtFQUNKLENBM0RJO0VBNkRMYyxXQTdESyx5QkE2RFE7SUFDVCxJQUFJNEIsTUFBTSxHQUFHeEIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjLEtBQUtwRCxZQUFuQixDQUFiO0lBQ0FRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVcyQyxNQUF2QjtJQUNBLEtBQUtoRCxTQUFMLEdBQWlCZ0QsTUFBTSxDQUFDLEtBQUsvQyxXQUFOLENBQXZCO0lBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVEsS0FBS0wsU0FBekI7SUFDQVosRUFBRSxDQUFDUyxRQUFILENBQVlvRCxTQUFaLENBQXNCLEtBQUtqRCxTQUEzQixFQUFxQyxLQUFLK0IsZUFBMUM7RUFFSCxDQXBFSTtFQXNFTG1CLEtBdEVLLG1CQXNFSSxDQUVSLENBeEVJO0VBMEVMQyxNQTFFSyxvQkEwRUs7SUFDTjtJQUNBLEtBQUtyQyxPQUFMLEdBQWUsS0FBS08sT0FBTCxFQUFmOztJQUNBLElBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxJQUFpQixPQUFwQixFQUE0QjtNQUN4QixLQUFLdEIsV0FBTCxHQUFtQixFQUFuQjtJQUNILENBRkQsTUFHSTtNQUNBLEtBQUtBLFdBQUwsR0FBbUJxQixNQUFNLENBQUM4QixRQUExQjtJQUNIO0VBQ0o7QUFuRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZG9vcjpjYy5Ob2RlLFxuICAgICAgICBwbGF5ZXJOb2RlOmNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lO1xuICAgICAgICB0aGlzLm5leHRTY2VuZSA9ICcnO1xuICAgICAgICB0aGlzLmN1cnJlbnREb29yID0gJyc7XG4gICAgICAgIHRoaXMudXNlSXRlbSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL3VzZVRvb2wvYm9keVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VJdGVtOlwiK3RoaXMudXNlSXRlbS5uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbmxvYWRcIik7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBvbktleURvd24oZXZlbnQpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInByZXNzIHNwYWNlXCIpO1xuICAgICAgICBpZih0aGlzLmNhbnNob3cgJiYgZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuc3BhY2Upe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcmVzcyBzcGFjZVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjZW5lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuU2hvdygpe1xuICAgICAgICByZXR1cm4gR2xvYmFsLml0ZW1UeXBlID09ICdkb29ycyc7XG4gICAgfSxcblxuICAgIHNhdmVTdGF0ZSgpe1xuICAgICAgICB3aW5kb3cucGxheWVyLnBvc19YID0gdGhpcy5wbGF5ZXJOb2RlLmdldFBvc2l0aW9uKCkueDtcbiAgICAgICAgd2luZG93LnBsYXllci5wb3NfWSA9IHRoaXMucGxheWVyTm9kZS5nZXRQb3NpdGlvbigpLnk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5wbGF5ZXIucG9zX1ggLHdpbmRvdy5wbGF5ZXIucG9zX1kpOyBcbiAgICB9LFxuXG4gICAgb25TY2VuZUxhdW5jaGVkKCl7XG4gICAgICAgIGlmKHdpbmRvdy5JblVzZSAhPScnKXtcbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgZm9yICg7IGkgPCB3aW5kb3cuQmFnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LkJhZ1tpXS5uYW1lID09IHdpbmRvdy5JblVzZSl7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpZCA9IHdpbmRvdy50b29sTWFwW3dpbmRvdy5CYWdbaV0ubmFtZV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlkOlwiKyBpZCk7XG4gICAgICAgICAgICBsZXQgdG9vbCA9IHdpbmRvdy5UT09MU1tpZF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvb2w6XCIrdG9vbC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXNlSXRlbSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL3VzZVRvb2wvYm9keVwiKTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcy51c2VJdGVtO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxmIG91dDogXCIrc2VsZi5uYW1lKTtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHRvb2xbJ3BpY1VybCddLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxmIGluOiBcIitzZWxmLm5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hhbmdlU2NlbmUoKXtcbiAgICAgICAgbGV0IHNjZW5lcyA9IHdpbmRvdy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVdO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNjZW5lczogXCIrc2NlbmVzKTtcbiAgICAgICAgdGhpcy5uZXh0U2NlbmUgPSBzY2VuZXNbdGhpcy5jdXJyZW50RG9vcl07XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV4dDpcIit0aGlzLm5leHRTY2VuZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLm5leHRTY2VuZSx0aGlzLm9uU2NlbmVMYXVuY2hlZCk7XG4gICAgICAgIFxuICAgIH0sXG4gIFxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWUpO1xuICAgICAgICB0aGlzLmNhbnNob3cgPSB0aGlzLmNhblNob3coKTtcbiAgICAgICAgaWYoR2xvYmFsLml0ZW1UeXBlIT0nZG9vcnMnKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERvb3IgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9vciA9IEdsb2JhbC5pdGVtTmFtZTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bag/useTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2b6cvDWZNN26Y1dl2eZzuq', 'useTool');
// scripts/bag/useTool.js

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
    tip: cc.Node,
    mynode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.textLabel = this.tip.getChildByName("textLabel").getComponent(cc.Label);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    cc.game.addPersistRootNode(this.mynode);
  },
  start: function start() {// cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(event) {
    // 背包按钮
    this.contactItem = window.Global.itemName;
    this.scene = window.Global.currentScene;

    if (event.keyCode == cc.macro.KEY.r) {
      console.log("InUse:" + window.InUse);

      if (window.Items[this.scene][this.contactItem].used == false) {
        if (window.InUse == window.Items[this.scene][this.contactItem].tool) {
          console.log("correct tool");
          this.textLabel.string = "correct tool";
          window.Items[this.scene][this.contactItem].used = true;
        } else if (window.InUse == '') {
          this.textLabel.string = "please take a tool";
          console.log("please take the tool");
        } else {
          this.textLabel.string = " wrong tool";
          console.log("wrong tool");
        }
      } else {
        this.textLabel.string = "the item has been used";
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhZy91c2VUb29sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwIiwiTm9kZSIsIm15bm9kZSIsIm9uTG9hZCIsImZpbmQiLCJ0ZXh0TGFiZWwiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsInN0YXJ0IiwiZXZlbnQiLCJjb250YWN0SXRlbSIsIndpbmRvdyIsIkdsb2JhbCIsIml0ZW1OYW1lIiwic2NlbmUiLCJjdXJyZW50U2NlbmUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJyIiwiY29uc29sZSIsImxvZyIsIkluVXNlIiwiSXRlbXMiLCJ1c2VkIiwidG9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEdBQUcsRUFBQ0osRUFBRSxDQUFDSyxJQURDO0lBRVJDLE1BQU0sRUFBQ04sRUFBRSxDQUFDSztFQUZGLENBSFA7RUFRTDtFQUVBRSxNQVZLLG9CQVVLO0lBQ04sS0FBS0gsR0FBTCxHQUFZSixFQUFFLENBQUNRLElBQUgsQ0FBUSx3QkFBUixDQUFaO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixLQUFLTCxHQUFMLENBQVNNLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLFlBQXJDLENBQWtEWCxFQUFFLENBQUNZLEtBQXJELENBQWpCO0lBQ0FaLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxFQUFmLENBQWtCZCxFQUFFLENBQUNlLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBM0MsRUFBcUQsS0FBS0MsU0FBMUQsRUFBcUUsSUFBckU7SUFDQWxCLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxFQUFmLENBQWtCZCxFQUFFLENBQUNlLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkcsTUFBM0MsRUFBbUQsS0FBS0MsT0FBeEQsRUFBaUUsSUFBakU7SUFDQXBCLEVBQUUsQ0FBQ3FCLElBQUgsQ0FBUUMsa0JBQVIsQ0FBMkIsS0FBS2hCLE1BQWhDO0VBQ0gsQ0FoQkk7RUFtQkxpQixLQW5CSyxtQkFtQkksQ0FDTDtFQUNILENBckJJO0VBdUJMTCxTQXZCSyxxQkF1QktNLEtBdkJMLEVBdUJXO0lBQ1o7SUFDQSxLQUFLQyxXQUFMLEdBQW1CQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsUUFBakM7SUFDQSxLQUFLQyxLQUFMLEdBQWFILE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRyxZQUEzQjs7SUFDQSxJQUFHTixLQUFLLENBQUNPLE9BQU4sSUFBaUIvQixFQUFFLENBQUNnQyxLQUFILENBQVNDLEdBQVQsQ0FBYUMsQ0FBakMsRUFBbUM7TUFDL0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVNWLE1BQU0sQ0FBQ1csS0FBNUI7O01BQ0EsSUFBR1gsTUFBTSxDQUFDWSxLQUFQLENBQWEsS0FBS1QsS0FBbEIsRUFBeUIsS0FBS0osV0FBOUIsRUFBMkNjLElBQTNDLElBQW1ELEtBQXRELEVBQTREO1FBQ3hELElBQUdiLE1BQU0sQ0FBQ1csS0FBUCxJQUFpQlgsTUFBTSxDQUFDWSxLQUFQLENBQWEsS0FBS1QsS0FBbEIsRUFBeUIsS0FBS0osV0FBOUIsRUFBMkNlLElBQS9ELEVBQXFFO1VBQ2pFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO1VBQ0EsS0FBSzNCLFNBQUwsQ0FBZWdDLE1BQWYsR0FBd0IsY0FBeEI7VUFDQWYsTUFBTSxDQUFDWSxLQUFQLENBQWEsS0FBS1QsS0FBbEIsRUFBeUIsS0FBS0osV0FBOUIsRUFBMkNjLElBQTNDLEdBQWtELElBQWxEO1FBQ0gsQ0FKRCxNQUtLLElBQUdiLE1BQU0sQ0FBQ1csS0FBUCxJQUFnQixFQUFuQixFQUFzQjtVQUN2QixLQUFLNUIsU0FBTCxDQUFlZ0MsTUFBZixHQUF3QixvQkFBeEI7VUFDQU4sT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7UUFDSCxDQUhJLE1BSUQ7VUFDQSxLQUFLM0IsU0FBTCxDQUFlZ0MsTUFBZixHQUF3QixhQUF4QjtVQUNBTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO1FBQ0g7TUFDSixDQWRELE1BY0s7UUFDRCxLQUFLM0IsU0FBTCxDQUFlZ0MsTUFBZixHQUF3Qix3QkFBeEI7TUFDSDtJQUNKO0VBQ0o7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwOmNjLk5vZGUsXG4gICAgICAgIG15bm9kZTpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMudGlwID0gIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvdGlwXCIpO1xuICAgICAgICB0aGlzLnRleHRMYWJlbCA9IHRoaXMudGlwLmdldENoaWxkQnlOYW1lKFwidGV4dExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm15bm9kZSk7XG4gICAgfSxcblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25LZXlEb3duKGV2ZW50KXtcbiAgICAgICAgLy8g6IOM5YyF5oyJ6ZKuXG4gICAgICAgIHRoaXMuY29udGFjdEl0ZW0gPSB3aW5kb3cuR2xvYmFsLml0ZW1OYW1lO1xuICAgICAgICB0aGlzLnNjZW5lID0gd2luZG93Lkdsb2JhbC5jdXJyZW50U2NlbmU7XG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJblVzZTpcIit3aW5kb3cuSW5Vc2UpO1xuICAgICAgICAgICAgaWYod2luZG93Lkl0ZW1zW3RoaXMuc2NlbmVdW3RoaXMuY29udGFjdEl0ZW1dLnVzZWQgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5JblVzZSA9PSAod2luZG93Lkl0ZW1zW3RoaXMuc2NlbmVdW3RoaXMuY29udGFjdEl0ZW1dLnRvb2wpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0IHRvb2xcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZyA9IFwiY29ycmVjdCB0b29sXCI7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5JdGVtc1t0aGlzLnNjZW5lXVt0aGlzLmNvbnRhY3RJdGVtXS51c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih3aW5kb3cuSW5Vc2UgPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmcgPSBcInBsZWFzZSB0YWtlIGEgdG9vbFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsZWFzZSB0YWtlIHRoZSB0b29sXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmcgPSBcIiB3cm9uZyB0b29sXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3JvbmcgdG9vbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmcgPSBcInRoZSBpdGVtIGhhcyBiZWVuIHVzZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 006.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94ea4kV0j1OeqZTtQVLqO4y', '0 - 006');
// scripts/0 - 006.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 6;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 6;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMDYuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsQ0FBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsQ0FBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9NjtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9NjtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 010.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc3f41IKmlN7aW6H56O4jqu', '0 - 010');
// scripts/0 - 010.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 10;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 10;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMTAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsRUFBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsRUFBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MTA7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBxd251bVtpbmRleF09LXF3bnVtW2luZGV4XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg8PTExKXF3bnVtW2luZGV4KzRdPS1xd251bVtpbmRleCs0XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg+PTQpcXdudW1baW5kZXgtNF09LXF3bnVtW2luZGV4LTRdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0wKXF3bnVtW2luZGV4LTFdPS1xd251bVtpbmRleC0xXTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9Mylxd251bVtpbmRleCsxXT0tcXdudW1baW5kZXgrMV07XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IGluZGV4PTEwO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tip/tips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f55f69NtlD654n2/I4CKFP', 'tips');
// scripts/tip/tips.js

"use strict";

// let text = [
//     { state: 'space', content: 'press SPACE to load another scene' },
//     { state: 'j', content: 'press j to talk to the ghost' },
//     { state: 'k', content: 'press k to take the tool' },
// ]
var text = new Map();
text.set('doors', 'press SPACE to load another scene');
text.set('npcs', 'press j to talk to the npc');
text.set('tools', 'press k to take the tool');
text.set('items', 'press r to use the tool');
text.set('games', 'press g to start the game');
var Key = {
  space: 0,
  j: 1,
  k: 2
};
cc.Class({
  "extends": cc.Component,
  properties: {
    textLable: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  init: function init() {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0;
    this.textIndex = -1;
    this.isShowed = false;
    this.textLable = this.node.getChildByName("textLabel").getComponent(cc.Label);
  },
  onLoad: function onLoad() {
    this.init();
  },
  setTextData: function setTextData(textData) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.nowText = textData;
    this.textLable.string = '';
  },
  canShow: function canShow() {
    return Global.itemType != ' ';
  },
  showContext: function showContext(dt) {
    this.tt += dt;

    if (!this.isShowed) {
      console.log("type:" + Global.itemType);
      this.setTextData(text.get(Global.itemType));

      if (this.tt >= 0.05) {
        if (this.textLable.string.length < this.nowText.length) {
          this.textLable.string = this.nowText.slice(0, this.textLable.string.length + 1);
        } else {
          this.textEnd = true;
          this.isShowed = true;
        }

        this.tt = 0;
      }
    }
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  onDisable: function onDisable() {
    this.textLable.string = '';
    this.init();
  },
  start: function start() {},
  update: function update(dt) {
    this.showContext(dt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RpcC90aXBzLmpzIl0sIm5hbWVzIjpbInRleHQiLCJNYXAiLCJzZXQiLCJLZXkiLCJzcGFjZSIsImoiLCJrIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0TGFibGUiLCJMYWJlbCIsImluaXQiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4IiwiaXNTaG93ZWQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJvbkxvYWQiLCJzZXRUZXh0RGF0YSIsInRleHREYXRhIiwic3RyaW5nIiwiY2FuU2hvdyIsIkdsb2JhbCIsIml0ZW1UeXBlIiwic2hvd0NvbnRleHQiLCJkdCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJsZW5ndGgiLCJzbGljZSIsImNsb3NlRGlhbG9nIiwiYWN0aXZlIiwib25EaXNhYmxlIiwic3RhcnQiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxJQUFJQyxHQUFKLEVBQWI7QUFDQUQsSUFBSSxDQUFDRSxHQUFMLENBQVMsT0FBVCxFQUFpQixtQ0FBakI7QUFDQUYsSUFBSSxDQUFDRSxHQUFMLENBQVMsTUFBVCxFQUFnQiw0QkFBaEI7QUFDQUYsSUFBSSxDQUFDRSxHQUFMLENBQVMsT0FBVCxFQUFpQiwwQkFBakI7QUFDQUYsSUFBSSxDQUFDRSxHQUFMLENBQVMsT0FBVCxFQUFpQix5QkFBakI7QUFDQUYsSUFBSSxDQUFDRSxHQUFMLENBQVMsT0FBVCxFQUFpQiwyQkFBakI7QUFHQSxJQUFJQyxHQUFHLEdBQUc7RUFBRUMsS0FBSyxFQUFFLENBQVQ7RUFBWUMsQ0FBQyxFQUFFLENBQWY7RUFBa0JDLENBQUMsRUFBRTtBQUFyQixDQUFWO0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0s7RUFETixDQUhQO0VBT0w7RUFFQUMsSUFUSyxrQkFTRTtJQUNILEtBQUtDLE9BQUwsR0FBZSxJQUFmO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLElBQWY7SUFDQSxLQUFLQyxFQUFMLEdBQVUsQ0FBVjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsQ0FBQyxDQUFsQjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7SUFDQSxLQUFLUCxTQUFMLEdBQWlCLEtBQUtRLElBQUwsQ0FBVUMsY0FBVixDQUF5QixXQUF6QixFQUFzQ0MsWUFBdEMsQ0FBbURkLEVBQUUsQ0FBQ0ssS0FBdEQsQ0FBakI7RUFDSCxDQWhCSTtFQWtCTFUsTUFsQkssb0JBa0JJO0lBQ0wsS0FBS1QsSUFBTDtFQUNILENBcEJJO0VBc0JMVSxXQXRCSyx1QkFzQk9DLFFBdEJQLEVBc0JpQjtJQUNsQixJQUFJLENBQUMsS0FBS1QsT0FBVixFQUFtQjtJQUNuQixLQUFLQSxPQUFMLEdBQWUsS0FBZjtJQUNBLEtBQUtELE9BQUwsR0FBZVUsUUFBZjtJQUNBLEtBQUtiLFNBQUwsQ0FBZWMsTUFBZixHQUF3QixFQUF4QjtFQUNILENBM0JJO0VBNkJMQyxPQTdCSyxxQkE2Qkk7SUFDTCxPQUFPQyxNQUFNLENBQUNDLFFBQVAsSUFBaUIsR0FBeEI7RUFDSCxDQS9CSTtFQW1DTEMsV0FuQ0ssdUJBbUNPQyxFQW5DUCxFQW1DVTtJQUNYLEtBQUtkLEVBQUwsSUFBV2MsRUFBWDs7SUFDQSxJQUFJLENBQUMsS0FBS1osUUFBVixFQUFvQjtNQUNoQmEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBUUwsTUFBTSxDQUFDQyxRQUEzQjtNQUNBLEtBQUtMLFdBQUwsQ0FBaUJ2QixJQUFJLENBQUNpQyxHQUFMLENBQVNOLE1BQU0sQ0FBQ0MsUUFBaEIsQ0FBakI7O01BQ0EsSUFBSSxLQUFLWixFQUFMLElBQVcsSUFBZixFQUFxQjtRQUNqQixJQUFJLEtBQUtMLFNBQUwsQ0FBZWMsTUFBZixDQUFzQlMsTUFBdEIsR0FBK0IsS0FBS3BCLE9BQUwsQ0FBYW9CLE1BQWhELEVBQXdEO1VBQ3BELEtBQUt2QixTQUFMLENBQWVjLE1BQWYsR0FBd0IsS0FBS1gsT0FBTCxDQUFhcUIsS0FBYixDQUFtQixDQUFuQixFQUFzQixLQUFLeEIsU0FBTCxDQUFlYyxNQUFmLENBQXNCUyxNQUF0QixHQUErQixDQUFyRCxDQUF4QjtRQUNILENBRkQsTUFFTztVQUNILEtBQUtuQixPQUFMLEdBQWUsSUFBZjtVQUNBLEtBQUtHLFFBQUwsR0FBZ0IsSUFBaEI7UUFDSDs7UUFDRCxLQUFLRixFQUFMLEdBQVUsQ0FBVjtNQUNIO0lBQ0o7RUFDSixDQWxESTtFQW9ETG9CLFdBcERLLHlCQW9EUztJQUNWLEtBQUtqQixJQUFMLENBQVVrQixNQUFWLEdBQW1CLEtBQW5CO0VBQ0gsQ0F0REk7RUF3RExDLFNBeERLLHVCQXdETztJQUNSLEtBQUszQixTQUFMLENBQWVjLE1BQWYsR0FBd0IsRUFBeEI7SUFDQSxLQUFLWixJQUFMO0VBQ0gsQ0EzREk7RUE2REwwQixLQTdESyxtQkE2REcsQ0FDUCxDQTlESTtFQWdFTEMsTUFoRUssa0JBZ0VFVixFQWhFRixFQWdFTTtJQUNQLEtBQUtELFdBQUwsQ0FBaUJDLEVBQWpCO0VBQ0g7QUFsRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IHRleHQgPSBbXG4vLyAgICAgeyBzdGF0ZTogJ3NwYWNlJywgY29udGVudDogJ3ByZXNzIFNQQUNFIHRvIGxvYWQgYW5vdGhlciBzY2VuZScgfSxcbi8vICAgICB7IHN0YXRlOiAnaicsIGNvbnRlbnQ6ICdwcmVzcyBqIHRvIHRhbGsgdG8gdGhlIGdob3N0JyB9LFxuLy8gICAgIHsgc3RhdGU6ICdrJywgY29udGVudDogJ3ByZXNzIGsgdG8gdGFrZSB0aGUgdG9vbCcgfSxcbi8vIF1cblxuY29uc3QgdGV4dCA9IG5ldyBNYXAoKTtcbnRleHQuc2V0KCdkb29ycycsJ3ByZXNzIFNQQUNFIHRvIGxvYWQgYW5vdGhlciBzY2VuZScpO1xudGV4dC5zZXQoJ25wY3MnLCdwcmVzcyBqIHRvIHRhbGsgdG8gdGhlIG5wYycpO1xudGV4dC5zZXQoJ3Rvb2xzJywncHJlc3MgayB0byB0YWtlIHRoZSB0b29sJyk7XG50ZXh0LnNldCgnaXRlbXMnLCdwcmVzcyByIHRvIHVzZSB0aGUgdG9vbCcpO1xudGV4dC5zZXQoJ2dhbWVzJywncHJlc3MgZyB0byBzdGFydCB0aGUgZ2FtZScpXG4gXG5cbmxldCBLZXkgPSB7IHNwYWNlOiAwLCBqOiAxICxrOiAyfTtcbiBcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0ZXh0TGFibGU6IGNjLkxhYmVsLFxuICAgIH0sXG4gXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5ub3dUZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZXh0RW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICAgIHRoaXMudGV4dEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuaXNTaG93ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50ZXh0TGFibGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9LFxuIFxuICAgIHNldFRleHREYXRhKHRleHREYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy50ZXh0RW5kKSByZXR1cm47XG4gICAgICAgIHRoaXMudGV4dEVuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vd1RleHQgPSB0ZXh0RGF0YTtcbiAgICAgICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gJyc7XG4gICAgfSxcblxuICAgIGNhblNob3coKXtcbiAgICAgICAgcmV0dXJuIEdsb2JhbC5pdGVtVHlwZSE9JyAnO1xuICAgIH0sXG5cbiBcblxuICAgIHNob3dDb250ZXh0KGR0KXtcbiAgICAgICAgdGhpcy50dCArPSBkdDtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2hvd2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR5cGU6XCIrR2xvYmFsLml0ZW1UeXBlKVxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0ZXh0LmdldChHbG9iYWwuaXRlbVR5cGUpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnR0ID49IDAuMDUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0TGFibGUuc3RyaW5nLmxlbmd0aCA8IHRoaXMubm93VGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gdGhpcy5ub3dUZXh0LnNsaWNlKDAsIHRoaXMudGV4dExhYmxlLnN0cmluZy5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRFbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuIFxuICAgIGNsb3NlRGlhbG9nKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gJyc7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG4gXG4gICAgc3RhcnQoKSB7XG4gICAgfSxcbiBcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5zaG93Q29udGV4dChkdCk7XG4gICAgfSxcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bag/bagTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '675b4MjrUtDsbeqAip2bkSk', 'bagTool');
// scripts/bag/bagTool.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  initInfo: function initInfo(info) {
    // 初始化该道具相关信息
    // 图片
    var self = this;
    cc.resources.load(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
      self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    }); // 介绍

    this.node.intro = info['intro'];
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var searchNode = cc.find("Canvas/Main Camera/bag/intro"); //通过全路径获取对应节点

      searchNode.getComponent(cc.Label).string = this.node.intro;
      searchNode.active = true;
    }.bind(this), this); // 点击使用物品会使物品图片出现在右上角

    this.node.pic = info['picUrl'];
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var usetool = cc.find("Canvas/Main Camera/bag/useTool/body"); //通过全路径获取对应节点

      cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
        usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      });
      window.InUse = info['name'];
    }.bind(this), this);
    console.log("In use tool:" + window.InUse);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhZy9iYWdUb29sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdEluZm8iLCJpbmZvIiwic2VsZiIsInJlc291cmNlcyIsImxvYWQiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImludHJvIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsInNlYXJjaE5vZGUiLCJmaW5kIiwiTGFiZWwiLCJzdHJpbmciLCJhY3RpdmUiLCJiaW5kIiwicGljIiwidXNldG9vbCIsImxvYWRlciIsImxvYWRSZXMiLCJ3aW5kb3ciLCJJblVzZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBTUw7RUFFQUMsUUFSSyxvQkFRS0MsSUFSTCxFQVFXO0lBQ1o7SUFFQTtJQUNBLElBQUlDLElBQUksR0FBRyxJQUFYO0lBQ0FOLEVBQUUsQ0FBQ08sU0FBSCxDQUFhQyxJQUFiLENBQWtCSCxJQUFJLENBQUMsUUFBRCxDQUF0QixFQUFrQ0wsRUFBRSxDQUFDUyxXQUFyQyxFQUFrRCxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7TUFDMUVMLElBQUksQ0FBQ00sSUFBTCxDQUFVQyxZQUFWLENBQXVCYixFQUFFLENBQUNjLE1BQTFCLEVBQWtDSCxXQUFsQyxHQUFnREEsV0FBaEQ7SUFDSCxDQUZELEVBTFksQ0FTWjs7SUFDQSxLQUFLQyxJQUFMLENBQVVHLEtBQVYsR0FBa0JWLElBQUksQ0FBQyxPQUFELENBQXRCO0lBQ0EsS0FBS08sSUFBTCxDQUFVSSxFQUFWLENBQWFoQixFQUFFLENBQUNpQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTJDLFlBQVk7TUFDbkQsSUFBSUMsVUFBVSxHQUFHcEIsRUFBRSxDQUFDcUIsSUFBSCxDQUFRLDhCQUFSLENBQWpCLENBRG1ELENBQ087O01BQzFERCxVQUFVLENBQUNQLFlBQVgsQ0FBd0JiLEVBQUUsQ0FBQ3NCLEtBQTNCLEVBQWtDQyxNQUFsQyxHQUF5QyxLQUFLWCxJQUFMLENBQVVHLEtBQW5EO01BQ0FLLFVBQVUsQ0FBQ0ksTUFBWCxHQUFvQixJQUFwQjtJQUNDLENBSnNDLENBSXJDQyxJQUpxQyxDQUloQyxJQUpnQyxDQUEzQyxFQUlrQixJQUpsQixFQVhZLENBaUJaOztJQUNBLEtBQUtiLElBQUwsQ0FBVWMsR0FBVixHQUFjckIsSUFBSSxDQUFDLFFBQUQsQ0FBbEI7SUFDQSxLQUFLTyxJQUFMLENBQVVJLEVBQVYsQ0FBYWhCLEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsWUFBWTtNQUNuRCxJQUFJUSxPQUFPLEdBQUczQixFQUFFLENBQUNxQixJQUFILENBQVEscUNBQVIsQ0FBZCxDQURtRCxDQUNXOztNQUM5RHJCLEVBQUUsQ0FBQzRCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQnhCLElBQUksQ0FBQyxRQUFELENBQXRCLEVBQWtDTCxFQUFFLENBQUNTLFdBQXJDLEVBQWtELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtRQUMxRWdCLE9BQU8sQ0FBQ2QsWUFBUixDQUFxQmIsRUFBRSxDQUFDYyxNQUF4QixFQUFnQ0gsV0FBaEMsR0FBOENBLFdBQTlDO01BQ0gsQ0FGRDtNQUdBbUIsTUFBTSxDQUFDQyxLQUFQLEdBQWUxQixJQUFJLENBQUMsTUFBRCxDQUFuQjtJQUNILENBTjBDLENBTXpDb0IsSUFOeUMsQ0FNcEMsSUFOb0MsQ0FBM0MsRUFNYyxJQU5kO0lBT0FPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFnQkgsTUFBTSxDQUFDQyxLQUFuQztFQUNIO0FBbkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgaW5pdEluZm8gKGluZm8pIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW6K+l6YGT5YW355u45YWz5L+h5oGvXG4gXG4gICAgICAgIC8vIOWbvueJh1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGluZm9bJ3BpY1VybCddLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICB9KTtcbiBcbiAgICAgICAgLy8g5LuL57uNXG4gICAgICAgIHRoaXMubm9kZS5pbnRybyA9IGluZm9bJ2ludHJvJ107XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL2ludHJvXCIpOyAvL+mAmui/h+WFqOi3r+W+hOiOt+WPluWvueW6lOiKgueCuVxuICAgICAgICAgICAgc2VhcmNoTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz10aGlzLm5vZGUuaW50cm87XG4gICAgICAgICAgICBzZWFyY2hOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO1xuIFxuICAgICAgICAvLyDngrnlh7vkvb/nlKjnianlk4HkvJrkvb/nianlk4Hlm77niYflh7rnjrDlnKjlj7PkuIrop5JcbiAgICAgICAgdGhpcy5ub2RlLnBpYz1pbmZvWydwaWNVcmwnXTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB1c2V0b29sID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9iYWcvdXNlVG9vbC9ib2R5XCIpOyAvL+mAmui/h+WFqOi3r+W+hOiOt+WPluWvueW6lOiKgueCuVxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoaW5mb1sncGljVXJsJ10sIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIHVzZXRvb2wuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LkluVXNlID0gaW5mb1snbmFtZSddO1xuICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluIHVzZSB0b29sOlwiKyB3aW5kb3cuSW5Vc2UpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/info/gameInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4236dFiO7NIrrShdSdN3EZc', 'gameInfo');
// scripts/info/gameInfo.js

"use strict";

// 第一章游戏索引
window.games = {
  // 游戏索引格式 小游戏场景:原场景
  // 小游戏场景格式: e.g: "chp1_scene1_1_game1" 表示 chapter1的scene1的第1号游戏，名字叫做game1   
  // 原场景格式: 章节号_场景名
  // 第一章游戏索引
  "chp1_302_1_lamp": "chp1_302",
  "chp1_302_2_lock": "chp1_302",
  "chp1_zoulang_1_lock": "chp1_zoulangF1",
  "chp1_201_1_cup": "chp1_201",
  "chp1_203_1_washingMachine": "chp1_203" // 第二章游戏索引
  // 第三章游戏索引
  // 第四章游戏索引

};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vZ2FtZUluZm8uanMiXSwibmFtZXMiOlsid2luZG93IiwiZ2FtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWU7RUFDWDtFQUNBO0VBQ0E7RUFFQTtFQUNBLG1CQUFvQixVQU5UO0VBUVgsbUJBQW9CLFVBUlQ7RUFVWCx1QkFBd0IsZ0JBVmI7RUFZWCxrQkFBb0IsVUFaVDtFQWNYLDZCQUErQixVQWRwQixDQWdCWDtFQUdBO0VBR0E7O0FBdEJXLENBQWYiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOesrOS4gOeroOa4uOaIj+e0ouW8lVxyXG53aW5kb3cuZ2FtZXMgPSB7XHJcbiAgICAvLyDmuLjmiI/ntKLlvJXmoLzlvI8g5bCP5ri45oiP5Zy65pmvOuWOn+WcuuaZr1xyXG4gICAgLy8g5bCP5ri45oiP5Zy65pmv5qC85byPOiBlLmc6IFwiY2hwMV9zY2VuZTFfMV9nYW1lMVwiIOihqOekuiBjaGFwdGVyMeeahHNjZW5lMeeahOesrDHlj7fmuLjmiI/vvIzlkI3lrZflj6vlgZpnYW1lMSAgIFxyXG4gICAgLy8g5Y6f5Zy65pmv5qC85byPOiDnq6DoioLlj7df5Zy65pmv5ZCNXHJcblxyXG4gICAgLy8g56ys5LiA56ug5ri45oiP57Si5byVXHJcbiAgICBcImNocDFfMzAyXzFfbGFtcFwiIDogXCJjaHAxXzMwMlwiLFxyXG5cclxuICAgIFwiY2hwMV8zMDJfMl9sb2NrXCIgOiBcImNocDFfMzAyXCIsXHJcblxyXG4gICAgXCJjaHAxX3pvdWxhbmdfMV9sb2NrXCIgOiBcImNocDFfem91bGFuZ0YxXCIsXHJcbiAgICBcclxuICAgIFwiY2hwMV8yMDFfMV9jdXBcIiAgOiBcImNocDFfMjAxXCIsXHJcblxyXG4gICAgXCJjaHAxXzIwM18xX3dhc2hpbmdNYWNoaW5lXCIgIDogXCJjaHAxXzIwM1wiLFxyXG4gICAgXHJcbiAgICAvLyDnrKzkuoznq6DmuLjmiI/ntKLlvJVcclxuXHJcblxyXG4gICAgLy8g56ys5LiJ56ug5ri45oiP57Si5byVXHJcblxyXG5cclxuICAgIC8vIOesrOWbm+eroOa4uOaIj+e0ouW8lVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 002.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '224c7uJ85xLMprcH4EXwY6y', '0 - 002');
// scripts/0 - 002.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 2;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 2;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMDIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsQ0FBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsQ0FBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MjtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MjtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/info/dialogContent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27d86vwvnRCfL1Wlmh2eoVl', 'dialogContent');
// scripts/info/dialogContent.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    window.Dialog = {
      contents: Map
    };
  },
  start: function start() {
    //chp1 scene 1 contents
    var chp1_scene1_npc1_content = [{
      role: 2,
      content: "你好，我是NPC.欢迎来到场景1"
    }, {
      role: 1,
      content: "dadadadada"
    } //当前的testData
    ];
    var chp1_scene1_npc2_content = [{
      role: 2,
      content: "This is scene1"
    }, {
      role: 1,
      content: "hhhhhhhhh"
    } //当前的testData
    ];
    var chp1_scene1_npc3_content = [{
      role: 2,
      content: "scene1 npc3"
    }, {
      role: 1,
      content: "jjjjjjjj"
    } //当前的testData
    ];
    var contents_Chp1_Scene1 = new Map();
    contents_Chp1_Scene1['npc1'] = chp1_scene1_npc1_content;
    contents_Chp1_Scene1['npc2'] = chp1_scene1_npc2_content;
    contents_Chp1_Scene1['npc3'] = chp1_scene1_npc3_content;
    Dialog.contents['chp1_scene1'] = contents_Chp1_Scene1; //chp2 scene1 contents

    var chp2_scene1_npc1_content = [{
      role: 2,
      content: "scene 2 npc1"
    }, {
      role: 1,
      content: "aaaaaaaa"
    } //当前的testData
    ];
    var chp2_scene1_npc2_content = [{
      role: 2,
      content: "scene 2 npc1"
    }, {
      role: 1,
      content: "bbbbbbbbbbbbbbbb"
    } //当前的testData
    ];
    var contents_Chp2_Scene1 = new Map();
    contents_Chp2_Scene1['npc1'] = chp2_scene1_npc1_content;
    contents_Chp2_Scene1['npc2'] = chp2_scene1_npc2_content;
    Dialog.contents['chp2_scene1'] = contents_Chp2_Scene1;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vZGlhbG9nQ29udGVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIndpbmRvdyIsIkRpYWxvZyIsImNvbnRlbnRzIiwiTWFwIiwic3RhcnQiLCJjaHAxX3NjZW5lMV9ucGMxX2NvbnRlbnQiLCJyb2xlIiwiY29udGVudCIsImNocDFfc2NlbmUxX25wYzJfY29udGVudCIsImNocDFfc2NlbmUxX25wYzNfY29udGVudCIsImNvbnRlbnRzX0NocDFfU2NlbmUxIiwiY2hwMl9zY2VuZTFfbnBjMV9jb250ZW50IiwiY2hwMl9zY2VuZTFfbnBjMl9jb250ZW50IiwiY29udGVudHNfQ2hwMl9TY2VuZTEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBTUw7RUFFQUMsTUFSSyxvQkFRSztJQUNOQyxNQUFNLENBQUNDLE1BQVAsR0FBZ0I7TUFDWkMsUUFBUSxFQUFDQztJQURHLENBQWhCO0VBR0gsQ0FaSTtFQWNMQyxLQWRLLG1CQWNJO0lBR0w7SUFDQSxJQUFJQyx3QkFBd0IsR0FBRSxDQUMxQjtNQUFDQyxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FEMEIsRUFFMUI7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRjBCLENBRU87SUFGUCxDQUE5QjtJQUlBLElBQUlDLHdCQUF3QixHQUFFLENBQzFCO01BQUNGLElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUQwQixFQUUxQjtNQUFDRCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FGMEIsQ0FFTTtJQUZOLENBQTlCO0lBS0EsSUFBSUUsd0JBQXdCLEdBQUUsQ0FDMUI7TUFBQ0gsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRDBCLEVBRTFCO01BQUNELElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUYwQixDQUVLO0lBRkwsQ0FBOUI7SUFLQSxJQUFJRyxvQkFBb0IsR0FBRyxJQUFJUCxHQUFKLEVBQTNCO0lBQ0FPLG9CQUFvQixDQUFDLE1BQUQsQ0FBcEIsR0FBK0JMLHdCQUEvQjtJQUNBSyxvQkFBb0IsQ0FBQyxNQUFELENBQXBCLEdBQStCRix3QkFBL0I7SUFDQUUsb0JBQW9CLENBQUMsTUFBRCxDQUFwQixHQUErQkQsd0JBQS9CO0lBRUFSLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixhQUFoQixJQUFpQ1Esb0JBQWpDLENBdkJLLENBNEJMOztJQUVBLElBQUlDLHdCQUF3QixHQUFFLENBQzFCO01BQUNMLElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUQwQixFQUUxQjtNQUFDRCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FGMEIsQ0FFSztJQUZMLENBQTlCO0lBT0EsSUFBSUssd0JBQXdCLEdBQUUsQ0FDMUI7TUFBQ04sSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRDBCLEVBRTFCO01BQUNELElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUYwQixDQUVhO0lBRmIsQ0FBOUI7SUFNQSxJQUFJTSxvQkFBb0IsR0FBRyxJQUFJVixHQUFKLEVBQTNCO0lBQ0FVLG9CQUFvQixDQUFDLE1BQUQsQ0FBcEIsR0FBK0JGLHdCQUEvQjtJQUNBRSxvQkFBb0IsQ0FBQyxNQUFELENBQXBCLEdBQStCRCx3QkFBL0I7SUFFQVgsTUFBTSxDQUFDQyxRQUFQLENBQWdCLGFBQWhCLElBQWlDVyxvQkFBakM7RUFDSCxDQTlESSxDQWdFTDs7QUFoRUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB3aW5kb3cuRGlhbG9nID0ge1xuICAgICAgICAgICAgY29udGVudHM6TWFwLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHsgXG5cblxuICAgICAgICAvL2NocDEgc2NlbmUgMSBjb250ZW50c1xuICAgICAgICBsZXQgY2hwMV9zY2VuZTFfbnBjMV9jb250ZW50ID1bXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwi5L2g5aW977yM5oiR5pivTlBDLuasoui/juadpeWIsOWcuuaZrzFcIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50OlwiZGFkYWRhZGFkYVwifSwgIC8v5b2T5YmN55qEdGVzdERhdGFcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IGNocDFfc2NlbmUxX25wYzJfY29udGVudCA9W1xuICAgICAgICAgICAge3JvbGU6MiwgY29udGVudDpcIlRoaXMgaXMgc2NlbmUxXCJ9LFxuICAgICAgICAgICAge3JvbGU6MSwgY29udGVudDpcImhoaGhoaGhoaFwifSwgIC8v5b2T5YmN55qEdGVzdERhdGFcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgY2hwMV9zY2VuZTFfbnBjM19jb250ZW50ID1bXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwic2NlbmUxIG5wYzNcIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50OlwiampqampqampcIn0sICAvL+W9k+WJjeeahHRlc3REYXRhXG4gICAgICAgIF07XG4gICAgICAgIFxuICAgICAgICBsZXQgY29udGVudHNfQ2hwMV9TY2VuZTEgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnRlbnRzX0NocDFfU2NlbmUxWyducGMxJ10gPSBjaHAxX3NjZW5lMV9ucGMxX2NvbnRlbnQgO1xuICAgICAgICBjb250ZW50c19DaHAxX1NjZW5lMVsnbnBjMiddID0gY2hwMV9zY2VuZTFfbnBjMl9jb250ZW50IDtcbiAgICAgICAgY29udGVudHNfQ2hwMV9TY2VuZTFbJ25wYzMnXSA9IGNocDFfc2NlbmUxX25wYzNfY29udGVudCA7XG5cbiAgICAgICAgRGlhbG9nLmNvbnRlbnRzWydjaHAxX3NjZW5lMSddID0gY29udGVudHNfQ2hwMV9TY2VuZTE7XG5cblxuXG5cbiAgICAgICAgLy9jaHAyIHNjZW5lMSBjb250ZW50c1xuXG4gICAgICAgIGxldCBjaHAyX3NjZW5lMV9ucGMxX2NvbnRlbnQgPVtcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCJzY2VuZSAyIG5wYzFcIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50OlwiYWFhYWFhYWFcIn0sICAvL+W9k+WJjeeahHRlc3REYXRhXG4gICAgICAgIF07XG5cblxuICAgICAgICBcbiAgICAgICAgbGV0IGNocDJfc2NlbmUxX25wYzJfY29udGVudCA9W1xuICAgICAgICAgICAge3JvbGU6MiwgY29udGVudDpcInNjZW5lIDIgbnBjMVwifSxcbiAgICAgICAgICAgIHtyb2xlOjEsIGNvbnRlbnQ6XCJiYmJiYmJiYmJiYmJiYmJiXCJ9LCAgLy/lvZPliY3nmoR0ZXN0RGF0YVxuICAgICAgICBdO1xuXG5cbiAgICAgICAgbGV0IGNvbnRlbnRzX0NocDJfU2NlbmUxID0gbmV3IE1hcCgpO1xuICAgICAgICBjb250ZW50c19DaHAyX1NjZW5lMVsnbnBjMSddID0gY2hwMl9zY2VuZTFfbnBjMV9jb250ZW50IDtcbiAgICAgICAgY29udGVudHNfQ2hwMl9TY2VuZTFbJ25wYzInXSA9IGNocDJfc2NlbmUxX25wYzJfY29udGVudCA7XG5cbiAgICAgICAgRGlhbG9nLmNvbnRlbnRzWydjaHAyX3NjZW5lMSddID0gY29udGVudHNfQ2hwMl9TY2VuZTE7XG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/info/ItemInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63271iPQqpCrqbY48OPPyHX', 'ItemInfo');
// scripts/info/ItemInfo.js

"use strict";

window.chp1_scene1_items = {
  "washingMachine": {
    name: "washingMachine",
    used: false,
    tool: "卷轴",
    //对应的应该使用的工具
    usedInfo: '请使用背包中的工具进行操作',
    notUsedInfo: "洗衣机已经被使用了"
  },
  "lamp": {
    name: "lamp",
    used: false,
    tool: "卷轴",
    //对应的应该使用的工具
    usedInfo: '请使用背包中的工具进行操作',
    notUsedInfo: "洗衣机已经被使用了"
  }
}; // 第二章场景物品
// 第二章 场景1 物品

window.chp2_scene1_items = {
  "washingMachine": {
    name: "washingMachine",
    used: false,
    tool: "卷轴",
    //对应的应该使用的工具
    usedInfo: '请使用背包中的工具进行操作',
    notUsedInfo: "洗衣机已经被使用了"
  }
};
window.Items = {
  "chp1_scene1": chp1_scene1_items,
  "chp2_scene1": chp2_scene1_items
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vSXRlbUluZm8uanMiXSwibmFtZXMiOlsid2luZG93IiwiY2hwMV9zY2VuZTFfaXRlbXMiLCJuYW1lIiwidXNlZCIsInRvb2wiLCJ1c2VkSW5mbyIsIm5vdFVzZWRJbmZvIiwiY2hwMl9zY2VuZTFfaXRlbXMiLCJJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxpQkFBUCxHQUEyQjtFQUN2QixrQkFDQTtJQUNJQyxJQUFJLEVBQUMsZ0JBRFQ7SUFFSUMsSUFBSSxFQUFDLEtBRlQ7SUFHSUMsSUFBSSxFQUFDLElBSFQ7SUFHa0I7SUFDZEMsUUFBUSxFQUFDLGVBSmI7SUFLSUMsV0FBVyxFQUFDO0VBTGhCLENBRnVCO0VBU3ZCLFFBQ0E7SUFDSUosSUFBSSxFQUFDLE1BRFQ7SUFFSUMsSUFBSSxFQUFDLEtBRlQ7SUFHSUMsSUFBSSxFQUFDLElBSFQ7SUFHa0I7SUFDZEMsUUFBUSxFQUFDLGVBSmI7SUFLSUMsV0FBVyxFQUFDO0VBTGhCO0FBVnVCLENBQTNCLEVBbUJBO0FBQ0E7O0FBQ0FOLE1BQU0sQ0FBQ08saUJBQVAsR0FBMkI7RUFDdkIsa0JBQ0E7SUFDSUwsSUFBSSxFQUFDLGdCQURUO0lBRUlDLElBQUksRUFBQyxLQUZUO0lBR0lDLElBQUksRUFBQyxJQUhUO0lBR2tCO0lBQ2RDLFFBQVEsRUFBQyxlQUpiO0lBS0lDLFdBQVcsRUFBQztFQUxoQjtBQUZ1QixDQUEzQjtBQVdBTixNQUFNLENBQUNRLEtBQVAsR0FBZTtFQUNYLGVBQWNQLGlCQURIO0VBRVgsZUFBY007QUFGSCxDQUFmIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuY2hwMV9zY2VuZTFfaXRlbXMgPSB7XG4gICAgXCJ3YXNoaW5nTWFjaGluZVwiOlxuICAgIHtcbiAgICAgICAgbmFtZTpcIndhc2hpbmdNYWNoaW5lXCIsXG4gICAgICAgIHVzZWQ6ZmFsc2UsXG4gICAgICAgIHRvb2w6XCLljbfovbRcIiwgICAgLy/lr7nlupTnmoTlupTor6Xkvb/nlKjnmoTlt6XlhbdcbiAgICAgICAgdXNlZEluZm86J+ivt+S9v+eUqOiDjOWMheS4reeahOW3peWFt+i/m+ihjOaTjeS9nCcsXG4gICAgICAgIG5vdFVzZWRJbmZvOlwi5rSX6KGj5py65bey57uP6KKr5L2/55So5LqGXCJcbiAgICB9LFxuICAgIFwibGFtcFwiOlxuICAgIHtcbiAgICAgICAgbmFtZTpcImxhbXBcIixcbiAgICAgICAgdXNlZDpmYWxzZSxcbiAgICAgICAgdG9vbDpcIuWNt+i9tFwiLCAgICAvL+WvueW6lOeahOW6lOivpeS9v+eUqOeahOW3peWFt1xuICAgICAgICB1c2VkSW5mbzon6K+35L2/55So6IOM5YyF5Lit55qE5bel5YW36L+b6KGM5pON5L2cJyxcbiAgICAgICAgbm90VXNlZEluZm86XCLmtJfooaPmnLrlt7Lnu4/ooqvkvb/nlKjkuoZcIlxuICAgIH1cbn1cblxuLy8g56ys5LqM56ug5Zy65pmv54mp5ZOBXG4vLyDnrKzkuoznq6Ag5Zy65pmvMSDnianlk4FcbndpbmRvdy5jaHAyX3NjZW5lMV9pdGVtcyA9IHtcbiAgICBcIndhc2hpbmdNYWNoaW5lXCI6XG4gICAge1xuICAgICAgICBuYW1lOlwid2FzaGluZ01hY2hpbmVcIixcbiAgICAgICAgdXNlZDpmYWxzZSxcbiAgICAgICAgdG9vbDpcIuWNt+i9tFwiLCAgICAvL+WvueW6lOeahOW6lOivpeS9v+eUqOeahOW3peWFt1xuICAgICAgICB1c2VkSW5mbzon6K+35L2/55So6IOM5YyF5Lit55qE5bel5YW36L+b6KGM5pON5L2cJyxcbiAgICAgICAgbm90VXNlZEluZm86XCLmtJfooaPmnLrlt7Lnu4/ooqvkvb/nlKjkuoZcIlxuICAgIH1cbn1cblxud2luZG93Lkl0ZW1zID0ge1xuICAgIFwiY2hwMV9zY2VuZTFcIjpjaHAxX3NjZW5lMV9pdGVtcyxcbiAgICBcImNocDJfc2NlbmUxXCI6Y2hwMl9zY2VuZTFfaXRlbXMsXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/info/sceneinfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6dea9PRR5VAsYO1qNNgHnRZ', 'sceneinfo');
// scripts/info/sceneinfo.js

"use strict";

// 第一章的门
var chp1_303_doors = {
  "door1": "chp1_一楼走廊",
  "door2": "chp1_一楼走廊"
};
var chp1_302_doors = {
  "door1": "chp1_一楼走廊"
};
var chp1_301_doors = {
  "door1": "chp1_一楼走廊"
};
var chp1_201_doors = {
  "door1": "chp1_二楼走廊"
};
var chp1_202_doors = {
  "door1": "chp1_二楼走廊"
};
var chp1_203_doors = {
  "door1": "chp1_二楼走廊"
};
var chp1_zoulangF1_doors = {
  "door1": "chp1_301",
  "door2": "chp1_302",
  "door3": "chp1_303"
};
var chp1_zoulangF2_doors = {
  "door1": "chp1_201",
  "door2": "chp1_202",
  "door3": "chp1_203"
};
var chp2_scene1_doors = {};
window.scenes = {
  // chapter 1 scene1 
  "chp1_303": chp1_303_doors,
  "chp1_302": chp1_302_doors,
  "chp1_301": chp1_301_doors,
  "chp1_一楼走廊": chp1_zoulangF1_doors,
  "chp1_二楼走廊": chp1_zoulangF2_doors
};
window.player = {
  pos_X: 100.743,
  pos_Y: 90.511,
  enterGame: false
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vc2NlbmVpbmZvLmpzIl0sIm5hbWVzIjpbImNocDFfMzAzX2Rvb3JzIiwiY2hwMV8zMDJfZG9vcnMiLCJjaHAxXzMwMV9kb29ycyIsImNocDFfMjAxX2Rvb3JzIiwiY2hwMV8yMDJfZG9vcnMiLCJjaHAxXzIwM19kb29ycyIsImNocDFfem91bGFuZ0YxX2Rvb3JzIiwiY2hwMV96b3VsYW5nRjJfZG9vcnMiLCJjaHAyX3NjZW5lMV9kb29ycyIsIndpbmRvdyIsInNjZW5lcyIsInBsYXllciIsInBvc19YIiwicG9zX1kiLCJlbnRlckdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFJQSxjQUFjLEdBQUc7RUFDakIsU0FBVSxXQURPO0VBRWpCLFNBQVU7QUFGTyxDQUFyQjtBQUtBLElBQUlDLGNBQWMsR0FBRztFQUNqQixTQUFVO0FBRE8sQ0FBckI7QUFJQSxJQUFJQyxjQUFjLEdBQUc7RUFDakIsU0FBVTtBQURPLENBQXJCO0FBS0EsSUFBSUMsY0FBYyxHQUFHO0VBQ2pCLFNBQVU7QUFETyxDQUFyQjtBQUlBLElBQUlDLGNBQWMsR0FBRztFQUNqQixTQUFVO0FBRE8sQ0FBckI7QUFJQSxJQUFJQyxjQUFjLEdBQUc7RUFDakIsU0FBVTtBQURPLENBQXJCO0FBS0EsSUFBSUMsb0JBQW9CLEdBQUc7RUFDdkIsU0FBVSxVQURhO0VBRXZCLFNBQVUsVUFGYTtFQUd2QixTQUFVO0FBSGEsQ0FBM0I7QUFNQSxJQUFJQyxvQkFBb0IsR0FBRztFQUN2QixTQUFVLFVBRGE7RUFFdkIsU0FBVSxVQUZhO0VBR3ZCLFNBQVU7QUFIYSxDQUEzQjtBQU9BLElBQUlDLGlCQUFpQixHQUFHLEVBQXhCO0FBR0FDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQjtFQUNaO0VBQ0EsWUFBYVYsY0FGRDtFQUdaLFlBQWFDLGNBSEQ7RUFJWixZQUFhQyxjQUpEO0VBS1osYUFBY0ksb0JBTEY7RUFNWixhQUFjQztBQU5GLENBQWhCO0FBVUFFLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQjtFQUNaQyxLQUFLLEVBQUcsT0FESTtFQUVaQyxLQUFLLEVBQUcsTUFGSTtFQUdaQyxTQUFTLEVBQUM7QUFIRSxDQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g56ys5LiA56ug55qE6ZeoXG5sZXQgY2hwMV8zMDNfZG9vcnMgPSB7XG4gICAgXCJkb29yMVwiIDogXCJjaHAxX+S4gOalvOi1sOW7ilwiLFxuICAgIFwiZG9vcjJcIiA6IFwiY2hwMV/kuIDmpbzotbDlu4pcIixcbn07XG5cbmxldCBjaHAxXzMwMl9kb29ycyA9IHtcbiAgICBcImRvb3IxXCIgOiBcImNocDFf5LiA5qW86LWw5buKXCIsXG59XG5cbmxldCBjaHAxXzMwMV9kb29ycyA9IHtcbiAgICBcImRvb3IxXCIgOiBcImNocDFf5LiA5qW86LWw5buKXCIsXG59XG5cblxubGV0IGNocDFfMjAxX2Rvb3JzID0ge1xuICAgIFwiZG9vcjFcIiA6IFwiY2hwMV/kuozmpbzotbDlu4pcIixcbn07XG5cbmxldCBjaHAxXzIwMl9kb29ycyA9IHtcbiAgICBcImRvb3IxXCIgOiBcImNocDFf5LqM5qW86LWw5buKXCIsXG59XG5cbmxldCBjaHAxXzIwM19kb29ycyA9IHtcbiAgICBcImRvb3IxXCIgOiBcImNocDFf5LqM5qW86LWw5buKXCIsXG59XG5cblxubGV0IGNocDFfem91bGFuZ0YxX2Rvb3JzID0ge1xuICAgIFwiZG9vcjFcIiA6IFwiY2hwMV8zMDFcIixcbiAgICBcImRvb3IyXCIgOiBcImNocDFfMzAyXCIsXG4gICAgXCJkb29yM1wiIDogXCJjaHAxXzMwM1wiLFxufVxuXG5sZXQgY2hwMV96b3VsYW5nRjJfZG9vcnMgPSB7XG4gICAgXCJkb29yMVwiIDogXCJjaHAxXzIwMVwiLFxuICAgIFwiZG9vcjJcIiA6IFwiY2hwMV8yMDJcIixcbiAgICBcImRvb3IzXCIgOiBcImNocDFfMjAzXCIsXG59XG5cblxubGV0IGNocDJfc2NlbmUxX2Rvb3JzID0ge1xufTtcblxud2luZG93LnNjZW5lcyA9IHtcbiAgICAvLyBjaGFwdGVyIDEgc2NlbmUxIFxuICAgIFwiY2hwMV8zMDNcIiA6IGNocDFfMzAzX2Rvb3JzLFxuICAgIFwiY2hwMV8zMDJcIiA6IGNocDFfMzAyX2Rvb3JzLFxuICAgIFwiY2hwMV8zMDFcIiA6IGNocDFfMzAxX2Rvb3JzLFxuICAgIFwiY2hwMV/kuIDmpbzotbDlu4pcIiA6IGNocDFfem91bGFuZ0YxX2Rvb3JzLFxuICAgIFwiY2hwMV/kuozmpbzotbDlu4pcIiA6IGNocDFfem91bGFuZ0YyX2Rvb3JzLFxufVxuXG5cbndpbmRvdy5wbGF5ZXIgPSB7XG4gICAgcG9zX1ggOiAxMDAuNzQzLFxuICAgIHBvc19ZIDogOTAuNTExLFxuICAgIGVudGVyR2FtZTpmYWxzZSxcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lamp/switchbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4b1bRnVINOIqgcR+RbRP9l', 'switchbutton');
// scripts/game_chp1/cp1_lamp/switchbutton.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.color = 1;
cc.Class({
  "extends": cc.Component,
  start: function start() {
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var usetool = cc.find("Canvas/lampshade"); //通过全路径获取对应节点

      var num = cc.find("Canvas/num");

      if (openlamp == 0) {} else if (openlamp == 1) {
        if (color == 1) {
          cc.loader.loadRes("shade/2", cc.SpriteFrame, function (err, spriteFrame) {
            usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            color++;
          });
          cc.loader.loadRes("num/2", cc.SpriteFrame, function (err, spriteFrame) {
            num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        } else if (color == 2) {
          cc.loader.loadRes("shade/3", cc.SpriteFrame, function (err, spriteFrame) {
            usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            color++;
          });
          cc.loader.loadRes("num/3", cc.SpriteFrame, function (err, spriteFrame) {
            num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        } else if (color == 3) {
          cc.loader.loadRes("shade/4", cc.SpriteFrame, function (err, spriteFrame) {
            usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            color++;
          });
          cc.loader.loadRes("num/4", cc.SpriteFrame, function (err, spriteFrame) {
            num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        } else if (color == 4) {
          cc.loader.loadRes("shade/1", cc.SpriteFrame, function (err, spriteFrame) {
            usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            color = 1;
          });
          cc.loader.loadRes("num/1", cc.SpriteFrame, function (err, spriteFrame) {
            num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        }
      }
    }.bind(this), this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbGFtcC9zd2l0Y2hidXR0b24uanMiXSwibmFtZXMiOlsid2luZG93IiwiY29sb3IiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsInVzZXRvb2wiLCJmaW5kIiwibnVtIiwib3BlbmxhbXAiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsS0FBUCxHQUFhLENBQWI7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFJTEMsS0FKSyxtQkFJSTtJQUNMLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTCxFQUFFLENBQUNNLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsWUFBWTtNQUNuRCxJQUFJQyxPQUFPLEdBQUdULEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLGtCQUFSLENBQWQsQ0FEbUQsQ0FDUjs7TUFDM0MsSUFBSUMsR0FBRyxHQUFDWCxFQUFFLENBQUNVLElBQUgsQ0FBUSxZQUFSLENBQVI7O01BQ0EsSUFBR0UsUUFBUSxJQUFFLENBQWIsRUFDQSxDQUNILENBRkcsTUFHSyxJQUFHQSxRQUFRLElBQUUsQ0FBYixFQUNMO1FBQ0ksSUFBR2IsS0FBSyxJQUFFLENBQVYsRUFDQTtVQUNJQyxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixTQUFsQixFQUE2QmQsRUFBRSxDQUFDZSxXQUFoQyxFQUE2QyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7WUFDekVSLE9BQU8sQ0FBQ1MsWUFBUixDQUFxQmxCLEVBQUUsQ0FBQ21CLE1BQXhCLEVBQWdDRixXQUFoQyxHQUE4Q0EsV0FBOUM7WUFDQWxCLEtBQUs7VUFDUixDQUhHO1VBSUFDLEVBQUUsQ0FBQ2EsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTJCZCxFQUFFLENBQUNlLFdBQTlCLEVBQTJDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtZQUN2RU4sR0FBRyxDQUFDTyxZQUFKLENBQWlCbEIsRUFBRSxDQUFDbUIsTUFBcEIsRUFBNEJGLFdBQTVCLEdBQTBDQSxXQUExQztVQUNILENBRkc7UUFHSCxDQVRELE1BVUssSUFBR2xCLEtBQUssSUFBRSxDQUFWLEVBQ0w7VUFDSUMsRUFBRSxDQUFDYSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsU0FBbEIsRUFBNkJkLEVBQUUsQ0FBQ2UsV0FBaEMsRUFBNkMsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1lBQ3JFUixPQUFPLENBQUNTLFlBQVIsQ0FBcUJsQixFQUFFLENBQUNtQixNQUF4QixFQUFnQ0YsV0FBaEMsR0FBOENBLFdBQTlDO1lBQ0FsQixLQUFLO1VBQ1IsQ0FIRDtVQUlBQyxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEyQmQsRUFBRSxDQUFDZSxXQUE5QixFQUEyQyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7WUFDbkVOLEdBQUcsQ0FBQ08sWUFBSixDQUFpQmxCLEVBQUUsQ0FBQ21CLE1BQXBCLEVBQTRCRixXQUE1QixHQUEwQ0EsV0FBMUM7VUFDSCxDQUZEO1FBR0gsQ0FUSSxNQVVBLElBQUdsQixLQUFLLElBQUUsQ0FBVixFQUNMO1VBQ0lDLEVBQUUsQ0FBQ2EsTUFBSCxDQUFVQyxPQUFWLENBQWtCLFNBQWxCLEVBQTZCZCxFQUFFLENBQUNlLFdBQWhDLEVBQTZDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtZQUNyRVIsT0FBTyxDQUFDUyxZQUFSLENBQXFCbEIsRUFBRSxDQUFDbUIsTUFBeEIsRUFBZ0NGLFdBQWhDLEdBQThDQSxXQUE5QztZQUNBbEIsS0FBSztVQUNSLENBSEQ7VUFJQUMsRUFBRSxDQUFDYSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkJkLEVBQUUsQ0FBQ2UsV0FBOUIsRUFBMkMsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1lBQ25FTixHQUFHLENBQUNPLFlBQUosQ0FBaUJsQixFQUFFLENBQUNtQixNQUFwQixFQUE0QkYsV0FBNUIsR0FBMENBLFdBQTFDO1VBQ0gsQ0FGRDtRQUdILENBVEksTUFVQSxJQUFHbEIsS0FBSyxJQUFFLENBQVYsRUFDTDtVQUNJQyxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixTQUFsQixFQUE2QmQsRUFBRSxDQUFDZSxXQUFoQyxFQUE2QyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7WUFDckVSLE9BQU8sQ0FBQ1MsWUFBUixDQUFxQmxCLEVBQUUsQ0FBQ21CLE1BQXhCLEVBQWdDRixXQUFoQyxHQUE4Q0EsV0FBOUM7WUFDQWxCLEtBQUssR0FBQyxDQUFOO1VBQ0gsQ0FIRDtVQUlBQyxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEyQmQsRUFBRSxDQUFDZSxXQUE5QixFQUEyQyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7WUFDbkVOLEdBQUcsQ0FBQ08sWUFBSixDQUFpQmxCLEVBQUUsQ0FBQ21CLE1BQXBCLEVBQTRCRixXQUE1QixHQUEwQ0EsV0FBMUM7VUFDSCxDQUZEO1FBR0g7TUFDSjtJQUNBLENBakRzQyxDQWlEckNHLElBakRxQyxDQWlEaEMsSUFqRGdDLENBQTNDLEVBaURrQixJQWpEbEI7RUFrREg7QUF2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbndpbmRvdy5jb2xvcj0xO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgdXNldG9vbCA9IGNjLmZpbmQoXCJDYW52YXMvbGFtcHNoYWRlXCIpOyAvL+mAmui/h+WFqOi3r+W+hOiOt+WPluWvueW6lOiKgueCuVxyXG4gICAgICAgICAgICBsZXQgbnVtPWNjLmZpbmQoXCJDYW52YXMvbnVtXCIpO1xyXG4gICAgICAgICAgICBpZihvcGVubGFtcD09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihvcGVubGFtcD09MSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoY29sb3I9PTEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaGFkZS8yXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXRvb2wuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcisrO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJudW0vMlwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjb2xvcj09MilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNoYWRlLzNcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXRvb2wuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IrKztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIm51bS8zXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY29sb3I9PTMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaGFkZS80XCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2V0b29sLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJudW0vNFwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNvbG9yPT00KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hhZGUvMVwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNldG9vbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwibnVtLzFcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/camera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bb931tEJBIep+u6RiNUV1s', 'camera');
// scripts/controller/camera.js

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
    target: cc.Node,
    map: cc.Node
  },
  start: function start() {
    var mapWidth = cc.find("Canvas/bg/maps").width;
    var canvasWidth = cc.find("Canvas").width;
    console.log("canvaswidth:" + canvasWidth);
    this.max_x = mapWidth - canvasWidth;
  },
  cameraFollow: function cameraFollow() {
    if (!this.target) {
      console.log("null target");
      return;
    } // 实际上移动的东西是body


    var worldPos = this.target.convertToWorldSpaceAR(cc.v2(0, 0)); //获取到player的世界坐标的位置

    var nodePos = this.node.parent.convertToNodeSpaceAR(worldPos); //获取到player的世界坐标的位置

    if (nodePos.x <= 0 || nodePos.x >= this.max_x) {
      return;
    }

    this.node.x = nodePos.x;
  },
  update: function update(dt) {
    if (this.target == null) {
      console.log("don't get the node");
      return;
    }

    this.cameraFollow();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvY2FtZXJhLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0IiwiTm9kZSIsIm1hcCIsInN0YXJ0IiwibWFwV2lkdGgiLCJmaW5kIiwid2lkdGgiLCJjYW52YXNXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXhfeCIsImNhbWVyYUZvbGxvdyIsIndvcmxkUG9zIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJub2RlUG9zIiwibm9kZSIsInBhcmVudCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFDSixFQUFFLENBQUNLLElBREY7SUFFUkMsR0FBRyxFQUFDTixFQUFFLENBQUNLO0VBRkMsQ0FIUDtFQVNMRSxLQVRLLG1CQVNJO0lBQ0wsSUFBSUMsUUFBUSxHQUFHUixFQUFFLENBQUNTLElBQUgsQ0FBUSxnQkFBUixFQUEwQkMsS0FBekM7SUFDQSxJQUFJQyxXQUFXLEdBQUdYLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRLFFBQVIsRUFBa0JDLEtBQXBDO0lBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFlRixXQUEzQjtJQUNBLEtBQUtHLEtBQUwsR0FBYU4sUUFBUSxHQUFHRyxXQUF4QjtFQUNILENBZEk7RUFpQkxJLFlBakJLLDBCQWlCUztJQUVWLElBQUcsQ0FBQyxLQUFLWCxNQUFULEVBQWlCO01BQ2JRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7TUFDQTtJQUNILENBTFMsQ0FNVjs7O0lBQ0EsSUFBSUcsUUFBUSxHQUFHLEtBQUtaLE1BQUwsQ0FBWWEscUJBQVosQ0FBa0NqQixFQUFFLENBQUNrQixFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBbEMsQ0FBZixDQVBVLENBT21EOztJQUU3RCxJQUFJQyxPQUFPLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxvQkFBakIsQ0FBc0NOLFFBQXRDLENBQWQsQ0FUVSxDQVNvRDs7SUFFOUQsSUFBR0csT0FBTyxDQUFDSSxDQUFSLElBQVksQ0FBWixJQUFnQkosT0FBTyxDQUFDSSxDQUFSLElBQVksS0FBS1QsS0FBcEMsRUFBMEM7TUFDdEM7SUFDSDs7SUFDRCxLQUFLTSxJQUFMLENBQVVHLENBQVYsR0FBY0osT0FBTyxDQUFDSSxDQUF0QjtFQUNILENBaENJO0VBa0NMQyxNQWxDSyxrQkFrQ0dDLEVBbENILEVBa0NPO0lBQ1IsSUFBRyxLQUFLckIsTUFBTCxJQUFlLElBQWxCLEVBQXVCO01BQ25CUSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtNQUNBO0lBQ0g7O0lBQ0QsS0FBS0UsWUFBTDtFQUNIO0FBeENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRhcmdldDpjYy5Ob2RlLFxuICAgICAgICBtYXA6Y2MuTm9kZSxcbiAgICB9LFxuXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHZhciBtYXBXaWR0aCA9IGNjLmZpbmQoXCJDYW52YXMvYmcvbWFwc1wiKS53aWR0aDtcbiAgICAgICAgdmFyIGNhbnZhc1dpZHRoID0gY2MuZmluZChcIkNhbnZhc1wiKS53aWR0aDtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW52YXN3aWR0aDpcIitjYW52YXNXaWR0aCk7XG4gICAgICAgIHRoaXMubWF4X3ggPSBtYXBXaWR0aCAtIGNhbnZhc1dpZHRoO1xuICAgIH0sXG5cblxuICAgIGNhbWVyYUZvbGxvdygpe1xuXG4gICAgICAgIGlmKCF0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJudWxsIHRhcmdldFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDlrp7pmYXkuIrnp7vliqjnmoTkuJzopb/mmK9ib2R5XG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMudGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKTsvL+iOt+WPluWIsHBsYXllcueahOS4lueVjOWdkOagh+eahOS9jee9rlxuICAgICAgXG4gICAgICAgIGxldCBub2RlUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7Ly/ojrflj5bliLBwbGF5ZXLnmoTkuJbnlYzlnZDmoIfnmoTkvY3nva5cblxuICAgICAgICBpZihub2RlUG9zLnggPD0wIHx8bm9kZVBvcy54ID49dGhpcy5tYXhfeCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnggPSBub2RlUG9zLng7XG4gICAgfSxcblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYodGhpcy50YXJnZXQgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvbid0IGdldCB0aGUgbm9kZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbWVyYUZvbGxvdygpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cup/2_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '402c0aG7DdAKJL+j8CQklAs', '2_java');
// scripts/game_chp1/cp1_cup/2_java.js

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
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      listen[touchcnt] = 1;
      touchcnt++;
    });
  },
  update: function update(dt) {
    var self = this;

    if (cup[1] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[1] == 0) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY3VwLzJfamF2YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsImxpc3RlbiIsInRvdWNoY250IiwidXBkYXRlIiwiZHQiLCJzZWxmIiwiY3VwIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxNQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFpQixDQUFqQjtNQUNBQSxRQUFRO0lBR1gsQ0FMRDtFQU1ILENBaENJO0VBa0NMQyxNQWxDSyxrQkFrQ0dDLEVBbENILEVBa0NPO0lBQ1IsSUFBSUMsSUFBSSxHQUFDLElBQVQ7O0lBQ0EsSUFBR0MsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtNQUNUaEIsRUFBRSxDQUFDaUIsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCbEIsRUFBRSxDQUFDbUIsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETixJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ0QixFQUFFLENBQUN1QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO01BQ0QsQ0FGSDtJQUdIOztJQUNELElBQUdMLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBUSxDQUFYLEVBQWE7TUFDVGhCLEVBQUUsQ0FBQ2lCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmxCLEVBQUUsQ0FBQ21CLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtRQUNyRE4sSUFBSSxDQUFDVixJQUFMLENBQVVpQixZQUFWLENBQXVCdEIsRUFBRSxDQUFDdUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBL0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxpc3Rlblt0b3VjaGNudF09MTtcclxuICAgICAgICAgICAgdG91Y2hjbnQrKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKGN1cFsxXT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY3VwWzFdPT0wKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0 - 012.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c5b3Ds/bFACI6bkcSbr2Wb', '0 - 012');
// scripts/0 - 012.js

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
    //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
    //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
    var index = 12;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 12;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAgLSAwMTIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInF3bnVtIiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMO0lBQ0E7SUFDQSxJQUFJQyxLQUFLLEdBQUMsRUFBVjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxLQUFLLENBQUNQLEtBQUQsQ0FBTCxHQUFhLENBQUNPLEtBQUssQ0FBQ1AsS0FBRCxDQUFuQjtNQUNBLElBQUdBLEtBQUssSUFBRSxFQUFWLEVBQWFPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDYixJQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO01BQ1osSUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDZCxJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtJQUNqQixDQU5EO0VBU0gsQ0F0Q0k7RUF3Q0xRLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087SUFDUixJQUFJVCxLQUFLLEdBQUMsRUFBVjtJQUNBLElBQUlVLElBQUksR0FBQyxJQUFUOztJQUNBLElBQUdILEtBQUssQ0FBQ1AsS0FBRCxDQUFMLElBQWMsQ0FBakIsRUFBbUI7TUFDZkwsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCakIsRUFBRSxDQUFDa0IsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETCxJQUFJLENBQUNULElBQUwsQ0FBVWUsWUFBVixDQUF1QnJCLEVBQUUsQ0FBQ3NCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR1IsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFDLENBQWxCLEVBQW9CO01BQ2hCTCxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMEJqQixFQUFFLENBQUNrQixXQUE3QixFQUF5QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDckRMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MTI7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBxd251bVtpbmRleF09LXF3bnVtW2luZGV4XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg8PTExKXF3bnVtW2luZGV4KzRdPS1xd251bVtpbmRleCs0XTtcclxuICAgICAgICAgICAgaWYoaW5kZXg+PTQpcXdudW1baW5kZXgtNF09LXF3bnVtW2luZGV4LTRdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0wKXF3bnVtW2luZGV4LTFdPS1xd251bVtpbmRleC0xXTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9Mylxd251bVtpbmRleCsxXT0tcXdudW1baW5kZXgrMV07XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IGluZGV4PTEyO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '481d8hEjRZH94/shqoYwPd8', 'button');
// scripts/game_chp1/cp1_washingMachine/button.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 0;
        _this.upper_node = null;
        _this.isClick = true;
        _this.button_name = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        cc.log(this.button_name.string);
        if (this.button_name.string == "button_1")
            this.value = 1;
        if (this.button_name.string == "button_2")
            this.value = 3;
        if (this.button_name.string == "button_3")
            this.value = 11;
        if (this.button_name.string == "button_4")
            this.value = 29;
        if (this.button_name.string == "button_5")
            this.value = 97;
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchstart, this);
    };
    NewClass.prototype.touchstart = function () {
        cc.log("start");
        if (this.isClick == true) {
            this.upper_node.emit("addSocre", this);
            this.isClick = false;
        }
        else {
            this.upper_node.emit("decraseScore", this);
            this.isClick = true;
        }
    };
    NewClass.prototype.changcolor = function () {
        cc.log("changcolor");
        if (this.isClick == true) {
            this.node.color = cc.Color.YELLOW;
        }
        else {
            this.node.color = cc.Color.BLUE;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "upper_node", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "button_name", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBDQztRQXpDQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsaUJBQVcsR0FBYSxJQUFJLENBQUM7O1FBZ0M3QixpQkFBaUI7SUFDbkIsQ0FBQztJQS9CQyx5QkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRTNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQXBDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBSzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1U7SUFUVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEM1QjtJQUFELGVBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMENqRDtrQkExQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHVwcGVyX25vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIGlzQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgYnV0dG9uX25hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICBvbkxvYWQoKSB7XG4gICAgY2MubG9nKHRoaXMuYnV0dG9uX25hbWUuc3RyaW5nKTtcbiAgICBpZiAodGhpcy5idXR0b25fbmFtZS5zdHJpbmcgPT0gXCJidXR0b25fMVwiKSB0aGlzLnZhbHVlID0gMTtcbiAgICBpZiAodGhpcy5idXR0b25fbmFtZS5zdHJpbmcgPT0gXCJidXR0b25fMlwiKSB0aGlzLnZhbHVlID0gMztcbiAgICBpZiAodGhpcy5idXR0b25fbmFtZS5zdHJpbmcgPT0gXCJidXR0b25fM1wiKSB0aGlzLnZhbHVlID0gMTE7XG4gICAgaWYgKHRoaXMuYnV0dG9uX25hbWUuc3RyaW5nID09IFwiYnV0dG9uXzRcIikgdGhpcy52YWx1ZSA9IDI5O1xuICAgIGlmICh0aGlzLmJ1dHRvbl9uYW1lLnN0cmluZyA9PSBcImJ1dHRvbl81XCIpIHRoaXMudmFsdWUgPSA5NztcblxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaHN0YXJ0LCB0aGlzKTtcbiAgfVxuXG4gIHRvdWNoc3RhcnQoKSB7XG4gICAgY2MubG9nKFwic3RhcnRcIik7XG4gICAgaWYgKHRoaXMuaXNDbGljayA9PSB0cnVlKSB7XG4gICAgICB0aGlzLnVwcGVyX25vZGUuZW1pdChcImFkZFNvY3JlXCIsIHRoaXMpO1xuICAgICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBwZXJfbm9kZS5lbWl0KFwiZGVjcmFzZVNjb3JlXCIsIHRoaXMpO1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2NvbG9yKCkge1xuICAgIGNjLmxvZyhcImNoYW5nY29sb3JcIik7XG4gICAgaWYgKHRoaXMuaXNDbGljayA9PSB0cnVlKSB7XG4gICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMVUU7XG4gICAgfVxuICB9XG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cup/3_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca069yV8pxB37RadNUVO5Hv', '3_java');
// scripts/game_chp1/cp1_cup/3_java.js

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
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      listen[touchcnt] = 2;
      touchcnt++;
    });
  },
  update: function update(dt) {
    var self = this;

    if (cup[2] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[2] == 0) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY3VwLzNfamF2YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsImxpc3RlbiIsInRvdWNoY250IiwidXBkYXRlIiwiZHQiLCJzZWxmIiwiY3VwIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxNQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFpQixDQUFqQjtNQUNBQSxRQUFRO0lBR1gsQ0FMRDtFQU1ILENBaENJO0VBa0NMQyxNQWxDSyxrQkFrQ0dDLEVBbENILEVBa0NPO0lBQ1IsSUFBSUMsSUFBSSxHQUFDLElBQVQ7O0lBQ0EsSUFBR0MsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtNQUNUaEIsRUFBRSxDQUFDaUIsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCbEIsRUFBRSxDQUFDbUIsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETixJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ0QixFQUFFLENBQUN1QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO01BQ0QsQ0FGSDtJQUdIOztJQUNELElBQUdMLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBUSxDQUFYLEVBQWE7TUFDVGhCLEVBQUUsQ0FBQ2lCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmxCLEVBQUUsQ0FBQ21CLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtRQUNyRE4sSUFBSSxDQUFDVixJQUFMLENBQVVpQixZQUFWLENBQXVCdEIsRUFBRSxDQUFDdUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBL0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxpc3Rlblt0b3VjaGNudF09MjtcclxuICAgICAgICAgICAgdG91Y2hjbnQrKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKGN1cFsyXT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY3VwWzJdPT0wKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cup/5_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6082dqYZChAFYKh6VS6q+wR', '5_java');
// scripts/game_chp1/cp1_cup/5_java.js

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
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      listen[touchcnt] = 4;
      touchcnt++;
    });
  },
  update: function update(dt) {
    var self = this;

    if (cup[4] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[4] == 0) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY3VwLzVfamF2YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsImxpc3RlbiIsInRvdWNoY250IiwidXBkYXRlIiwiZHQiLCJzZWxmIiwiY3VwIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMEMsVUFBU0MsS0FBVCxFQUFlO01BQ3JEQyxNQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFpQixDQUFqQjtNQUNBQSxRQUFRO0lBR1gsQ0FMRDtFQU1ILENBaENJO0VBa0NMQyxNQWxDSyxrQkFrQ0dDLEVBbENILEVBa0NPO0lBQ1IsSUFBSUMsSUFBSSxHQUFDLElBQVQ7O0lBQ0EsSUFBR0MsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtNQUNUaEIsRUFBRSxDQUFDaUIsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQXlCbEIsRUFBRSxDQUFDbUIsV0FBNUIsRUFBd0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ3BETixJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ0QixFQUFFLENBQUN1QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO01BQ0QsQ0FGSDtJQUdIOztJQUNELElBQUdMLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBUSxDQUFYLEVBQWE7TUFDVGhCLEVBQUUsQ0FBQ2lCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmxCLEVBQUUsQ0FBQ21CLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtRQUNyRE4sSUFBSSxDQUFDVixJQUFMLENBQVVpQixZQUFWLENBQXVCdEIsRUFBRSxDQUFDdUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDtFQUVKO0FBL0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxpc3Rlblt0b3VjaGNudF09NDtcclxuICAgICAgICAgICAgdG91Y2hjbnQrKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKGN1cFs0XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY3VwWzRdPT0wKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/check_out.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5c1bdqmphENrIC/h/OMPV+', 'check_out');
// scripts/game_chp1/cp1_washingMachine/check_out.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var config_1 = require("./config");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.config = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.node.on("check_out", this.check_out, this);
    };
    NewClass.prototype.check_out = function () {
        cc.log("check_out");
        if (this.config.value == 111) {
            this.label.string = "答案正确";
        }
        else {
            this.label.string = "答案错误";
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(config_1.default)
    ], NewClass.prototype, "config", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY2hlY2tfb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxtQ0FBOEI7QUFFOUI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvQkM7UUFsQkMsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVcsSUFBSSxDQUFDOztRQWN0QixpQkFBaUI7SUFDbkIsQ0FBQztJQWJXLHlCQUFNLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDRSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQzs0Q0FDSztJQUxILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvQjVCO0lBQUQsZUFBQztDQXBCRCxBQW9CQyxDQXBCcUMsRUFBRSxDQUFDLFNBQVMsR0FvQmpEO2tCQXBCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY29uZmlnKVxuICBjb25maWc6IGNvbmZpZyA9IG51bGw7XG5cbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUub24oXCJjaGVja19vdXRcIiwgdGhpcy5jaGVja19vdXQsIHRoaXMpO1xuICB9XG4gIGNoZWNrX291dCgpIHtcbiAgICBjYy5sb2coXCJjaGVja19vdXRcIik7XG4gICAgaWYgKHRoaXMuY29uZmlnLnZhbHVlID09IDExMSkge1xuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIuetlOahiOato+ehrlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi562U5qGI6ZSZ6K+vXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0fb1xxAB1JxLApMiumEP3S', 'config');
// scripts/game_chp1/cp1_washingMachine/config.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        this.node.on("addSocre", this.addSocre, this);
        this.node.on("decraseScore", this.decraseScore, this);
        this.node.on("check", this.check, this);
    };
    NewClass.prototype.addSocre = function (below_node) {
        this.value = this.value + below_node.value;
        cc.log(this.value);
        cc.log(below_node.button_name.string + "按下");
        if (this.value == 141)
            cc.log("true");
    };
    NewClass.prototype.decraseScore = function (below_node) {
        this.value = this.value - below_node.value;
        cc.log(this.value);
        cc.log(below_node.button_name.string + "按下");
        if (this.value == 141)
            cc.log("true");
    };
    NewClass.prototype.check = function () {
        if (this.value == 111) {
            cc.log("true");
        }
        else
            cc.log("false");
    };
    __decorate([
        property
    ], NewClass.prototype, "value", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtDQztRQWhDQyxXQUFLLEdBQVcsQ0FBQyxDQUFDOztRQStCbEIsaUJBQWlCO0lBQ25CLENBQUM7SUE5QkMsd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxVQUFzQjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUMzQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHO1lBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsK0JBQVksR0FBWixVQUFhLFVBQXNCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUc7WUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hCOztZQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQTdCRDtRQURDLFFBQVE7MkNBQ1M7SUFGQyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0M1QjtJQUFELGVBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBa0NqRDtrQkFsQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBiZWxvd19ub2RlIGZyb20gXCIuL2J1dHRvblwiO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5XG4gIHZhbHVlOiBudW1iZXIgPSAwO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIC8vIG9uTG9hZCAoKSB7fVxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKFwiYWRkU29jcmVcIiwgdGhpcy5hZGRTb2NyZSwgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9uKFwiZGVjcmFzZVNjb3JlXCIsIHRoaXMuZGVjcmFzZVNjb3JlLCB0aGlzKTtcbiAgICB0aGlzLm5vZGUub24oXCJjaGVja1wiLCB0aGlzLmNoZWNrLCB0aGlzKTtcbiAgfVxuXG4gIGFkZFNvY3JlKGJlbG93X25vZGU6IGJlbG93X25vZGUpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIGJlbG93X25vZGUudmFsdWU7XG4gICAgY2MubG9nKHRoaXMudmFsdWUpO1xuICAgIGNjLmxvZyhiZWxvd19ub2RlLmJ1dHRvbl9uYW1lLnN0cmluZyArIFwi5oyJ5LiLXCIpO1xuXG4gICAgaWYgKHRoaXMudmFsdWUgPT0gMTQxKSBjYy5sb2coXCJ0cnVlXCIpO1xuICB9XG4gIGRlY3Jhc2VTY29yZShiZWxvd19ub2RlOiBiZWxvd19ub2RlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgLSBiZWxvd19ub2RlLnZhbHVlO1xuICAgIGNjLmxvZyh0aGlzLnZhbHVlKTtcbiAgICBjYy5sb2coYmVsb3dfbm9kZS5idXR0b25fbmFtZS5zdHJpbmcgKyBcIuaMieS4i1wiKTtcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAxNDEpIGNjLmxvZyhcInRydWVcIik7XG4gIH1cblxuICBjaGVjaygpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAxMTEpIHtcbiAgICAgIGNjLmxvZyhcInRydWVcIik7XG4gICAgfSBlbHNlIGNjLmxvZyhcImZhbHNlXCIpO1xuICB9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/check.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95848E/ILxPZ4MZH0DS496P', 'check');
// scripts/game_chp1/cp1_washingMachine/check.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.upper_node = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchstart, this);
    };
    NewClass.prototype.touchstart = function () {
        this.upper_node.emit("check", this);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "upper_node", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY2hlY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBVUM7UUFSQyxnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUFRN0IsQ0FBQztJQU5DLHlCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBUEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUZSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FVNUI7SUFBRCxlQUFDO0NBVkQsQUFVQyxDQVZxQyxFQUFFLENBQUMsU0FBUyxHQVVqRDtrQkFWb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgdXBwZXJfbm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaHN0YXJ0LCB0aGlzKTtcbiAgfVxuICB0b3VjaHN0YXJ0KCkge1xuICAgIHRoaXMudXBwZXJfbm9kZS5lbWl0KFwiY2hlY2tcIiwgdGhpcyk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/llj/assets/script/switchbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bfdd5NDPTxMqpAEdVY36I8+', 'switchbutton');
// llj/assets/script/switchbutton.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.color = 1;
cc.Class({
  "extends": cc.Component,
  start: function start() {
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var usetool = cc.find("Canvas/lampshade"); //通过全路径获取对应节点

      var num = cc.find("Canvas/num");

      if (openlamp == 0) {} else if (openlamp == 1) {
        if (color == 1) {
          cc.loader.loadRes("shade/2", cc.SpriteFrame, function (err, spriteFrame) {
            usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            color++;
          });
          cc.loader.loadRes("num/2", cc.SpriteFrame, function (err, spriteFrame) {
            num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        } else if (color == 2) {
          cc.loader.loadRes("shade/3", cc.SpriteFrame, function (err, spriteFrame) {
            usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            color++;
          });
          cc.loader.loadRes("num/3", cc.SpriteFrame, function (err, spriteFrame) {
            num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        } else if (color == 3) {
          cc.loader.loadRes("shade/4", cc.SpriteFrame, function (err, spriteFrame) {
            usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            color++;
          });
          cc.loader.loadRes("num/4", cc.SpriteFrame, function (err, spriteFrame) {
            num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        } else if (color == 4) {
          cc.loader.loadRes("shade/1", cc.SpriteFrame, function (err, spriteFrame) {
            usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            color = 1;
          });
          cc.loader.loadRes("num/1", cc.SpriteFrame, function (err, spriteFrame) {
            num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        }
      }
    }.bind(this), this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9sbGovYXNzZXRzL3NjcmlwdC9zd2l0Y2hidXR0b24uanMiXSwibmFtZXMiOlsid2luZG93IiwiY29sb3IiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsInVzZXRvb2wiLCJmaW5kIiwibnVtIiwib3BlbmxhbXAiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsS0FBUCxHQUFhLENBQWI7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFJTEMsS0FKSyxtQkFJSTtJQUNMLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTCxFQUFFLENBQUNNLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsWUFBWTtNQUNuRCxJQUFJQyxPQUFPLEdBQUdULEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLGtCQUFSLENBQWQsQ0FEbUQsQ0FDUjs7TUFDM0MsSUFBSUMsR0FBRyxHQUFDWCxFQUFFLENBQUNVLElBQUgsQ0FBUSxZQUFSLENBQVI7O01BQ0EsSUFBR0UsUUFBUSxJQUFFLENBQWIsRUFDQSxDQUNILENBRkcsTUFHSyxJQUFHQSxRQUFRLElBQUUsQ0FBYixFQUNMO1FBQ0ksSUFBR2IsS0FBSyxJQUFFLENBQVYsRUFDQTtVQUNJQyxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixTQUFsQixFQUE2QmQsRUFBRSxDQUFDZSxXQUFoQyxFQUE2QyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7WUFDekVSLE9BQU8sQ0FBQ1MsWUFBUixDQUFxQmxCLEVBQUUsQ0FBQ21CLE1BQXhCLEVBQWdDRixXQUFoQyxHQUE4Q0EsV0FBOUM7WUFDQWxCLEtBQUs7VUFDUixDQUhHO1VBSUFDLEVBQUUsQ0FBQ2EsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTJCZCxFQUFFLENBQUNlLFdBQTlCLEVBQTJDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtZQUN2RU4sR0FBRyxDQUFDTyxZQUFKLENBQWlCbEIsRUFBRSxDQUFDbUIsTUFBcEIsRUFBNEJGLFdBQTVCLEdBQTBDQSxXQUExQztVQUNILENBRkc7UUFHSCxDQVRELE1BVUssSUFBR2xCLEtBQUssSUFBRSxDQUFWLEVBQ0w7VUFDSUMsRUFBRSxDQUFDYSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsU0FBbEIsRUFBNkJkLEVBQUUsQ0FBQ2UsV0FBaEMsRUFBNkMsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1lBQ3JFUixPQUFPLENBQUNTLFlBQVIsQ0FBcUJsQixFQUFFLENBQUNtQixNQUF4QixFQUFnQ0YsV0FBaEMsR0FBOENBLFdBQTlDO1lBQ0FsQixLQUFLO1VBQ1IsQ0FIRDtVQUlBQyxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEyQmQsRUFBRSxDQUFDZSxXQUE5QixFQUEyQyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7WUFDbkVOLEdBQUcsQ0FBQ08sWUFBSixDQUFpQmxCLEVBQUUsQ0FBQ21CLE1BQXBCLEVBQTRCRixXQUE1QixHQUEwQ0EsV0FBMUM7VUFDSCxDQUZEO1FBR0gsQ0FUSSxNQVVBLElBQUdsQixLQUFLLElBQUUsQ0FBVixFQUNMO1VBQ0lDLEVBQUUsQ0FBQ2EsTUFBSCxDQUFVQyxPQUFWLENBQWtCLFNBQWxCLEVBQTZCZCxFQUFFLENBQUNlLFdBQWhDLEVBQTZDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtZQUNyRVIsT0FBTyxDQUFDUyxZQUFSLENBQXFCbEIsRUFBRSxDQUFDbUIsTUFBeEIsRUFBZ0NGLFdBQWhDLEdBQThDQSxXQUE5QztZQUNBbEIsS0FBSztVQUNSLENBSEQ7VUFJQUMsRUFBRSxDQUFDYSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkJkLEVBQUUsQ0FBQ2UsV0FBOUIsRUFBMkMsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1lBQ25FTixHQUFHLENBQUNPLFlBQUosQ0FBaUJsQixFQUFFLENBQUNtQixNQUFwQixFQUE0QkYsV0FBNUIsR0FBMENBLFdBQTFDO1VBQ0gsQ0FGRDtRQUdILENBVEksTUFVQSxJQUFHbEIsS0FBSyxJQUFFLENBQVYsRUFDTDtVQUNJQyxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixTQUFsQixFQUE2QmQsRUFBRSxDQUFDZSxXQUFoQyxFQUE2QyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7WUFDckVSLE9BQU8sQ0FBQ1MsWUFBUixDQUFxQmxCLEVBQUUsQ0FBQ21CLE1BQXhCLEVBQWdDRixXQUFoQyxHQUE4Q0EsV0FBOUM7WUFDQWxCLEtBQUssR0FBQyxDQUFOO1VBQ0gsQ0FIRDtVQUlBQyxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEyQmQsRUFBRSxDQUFDZSxXQUE5QixFQUEyQyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7WUFDbkVOLEdBQUcsQ0FBQ08sWUFBSixDQUFpQmxCLEVBQUUsQ0FBQ21CLE1BQXBCLEVBQTRCRixXQUE1QixHQUEwQ0EsV0FBMUM7VUFDSCxDQUZEO1FBR0g7TUFDSjtJQUNBLENBakRzQyxDQWlEckNHLElBakRxQyxDQWlEaEMsSUFqRGdDLENBQTNDLEVBaURrQixJQWpEbEI7RUFrREg7QUF2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbndpbmRvdy5jb2xvcj0xO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgdXNldG9vbCA9IGNjLmZpbmQoXCJDYW52YXMvbGFtcHNoYWRlXCIpOyAvL+mAmui/h+WFqOi3r+W+hOiOt+WPluWvueW6lOiKgueCuVxyXG4gICAgICAgICAgICBsZXQgbnVtPWNjLmZpbmQoXCJDYW52YXMvbnVtXCIpO1xyXG4gICAgICAgICAgICBpZihvcGVubGFtcD09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihvcGVubGFtcD09MSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoY29sb3I9PTEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaGFkZS8yXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXRvb2wuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcisrO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJudW0vMlwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjb2xvcj09MilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNoYWRlLzNcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXRvb2wuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IrKztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIm51bS8zXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY29sb3I9PTMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaGFkZS80XCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2V0b29sLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJudW0vNFwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNvbG9yPT00KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hhZGUvMVwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNldG9vbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwibnVtLzFcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/player_ctrl_pc - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e7e0a0TqpJhppp0ePCLXX4', 'player_ctrl_pc - 001');
// scripts/controller/player_ctrl_pc - 001.js

"use strict";

var State = {
  move: 1,
  attack: 2
};
cc.Class({
  "extends": cc.Component,
  properties: {
    moveMaxspeed: 0,
    //最大移动速度
    playerSpeed: 0,
    jumpSpeed: 0,
    jumpHeight: 0
  },
  // LIFE-CYCLE CALLBACKS:
  initHero: function initHero() {
    this.playerNode = cc.find("Canvas/bg/player/body");
    this.rigid = this.playerNode.getComponent(cc.RigidBody);
    this.heroAni = this.playerNode.getComponent(cc.Animation); // 加速度方向开关

    this._dir = ' '; //主角默认动画

    this.anima = 'idle'; //获取npc的位置

    this.npcs = cc.find("Canvas/background/npcs"); //是否可以进行一个交谈

    this.canTalk = false; // console.log(window)

    if (window.player.enterGame) {
      window.player.enterGame = false;
      this.playerNode.setPosition(window.player['pos_X'], window.player['pos_Y']);
    }

    console.log("x:" + this.playerNode.x);
    console.log("y:" + this.playerNode.y);
  },
  onLoad: function onLoad() {
    this.initHero(); // 监听键盘操作

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this); //监听鼠标事件 

    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
  },
  onDestroy: function onDestroy() {
    //对键盘监听事件解绑
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {
    console.log("this.node pos" + this.node.position);
  },
  // 碰撞检测
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    if (selfCollider.tag == 0) {
      console.log(selfCollider.tag);
      this.canJump = true;
    }
  },
  // 鼠标事件监听
  onMouseDown: function onMouseDown(event) {},
  //键盘事件监听
  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    // console.log("down");
    switch (event.keyCode) {
      case cc.macro.KEY.a:
      case cc.macro.KEY.left:
        console.log("left");
        this._dir = 'left';
        break;

      case cc.macro.KEY.d:
      case cc.macro.KEY.right:
        this._dir = 'right';
        break;

      case cc.macro.KEY.w:
      case cc.macro.KEY.up:
        this._dir = 'up';
        break;

      case cc.macro.KEY.s:
      case cc.macro.KEY.down:
        this._dir = 'down';
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // unset a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
      case cc.macro.KEY.left:
        this._dir = ' ';
        break;

      case cc.macro.KEY.d:
      case cc.macro.KEY.right:
        this._dir = ' ';
        break;

      case cc.macro.KEY.w:
      case cc.macro.KEY.up:
        this._dir = ' ';
        break;

      case cc.macro.KEY.s:
      case cc.macro.KEY.down:
        this._dir = ' ';
        break;
    }
  },
  //获取npc 和计算npc距离
  //人物移动
  heroMove: function heroMove() {
    var lv = this.rigid.linearVelocity;
    var scaleX = Math.abs(this.node.scaleX);
    var anima = this.anima;

    switch (this._dir) {
      case 'left':
        {
          lv.x = -this.playerSpeed; // this.node.scaleX = -scaleX;

          anima = 'runleft';
          break;
        }

      case 'right':
        {
          lv.x = this.playerSpeed;
          this.node.scaleX = scaleX;
          anima = 'runright';
          break;
        }

      default:
        {
          anima = 'idle';
          lv.x = 0;
        }
    }

    this.playerNode.getComponent(cc.RigidBody).linearVelocity = lv;
    this.setAni(anima);
  },
  setAni: function setAni(anima) {
    if (this.anima == anima) {
      return;
    } else {
      this.anima = anima;
      this.heroAni.play(anima);
    }
  },
  update: function update(dt) {
    if (window.BagBackground && window.BagBackground.active == true || Global.gameBg && Global.gameBg.active == true) {
      return;
    }

    this.heroMove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvcGxheWVyX2N0cmxfcGMgLSAwMDEuanMiXSwibmFtZXMiOlsiU3RhdGUiLCJtb3ZlIiwiYXR0YWNrIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtb3ZlTWF4c3BlZWQiLCJwbGF5ZXJTcGVlZCIsImp1bXBTcGVlZCIsImp1bXBIZWlnaHQiLCJpbml0SGVybyIsInBsYXllck5vZGUiLCJmaW5kIiwicmlnaWQiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJoZXJvQW5pIiwiQW5pbWF0aW9uIiwiX2RpciIsImFuaW1hIiwibnBjcyIsImNhblRhbGsiLCJ3aW5kb3ciLCJwbGF5ZXIiLCJlbnRlckdhbWUiLCJzZXRQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ4IiwieSIsIm9uTG9hZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsIm5vZGUiLCJOb2RlIiwiTU9VU0VfRE9XTiIsIm9uTW91c2VEb3duIiwib25EZXN0cm95Iiwib2ZmIiwic3RhcnQiLCJwb3NpdGlvbiIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJ0YWciLCJjYW5KdW1wIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwibGVmdCIsImQiLCJyaWdodCIsInciLCJ1cCIsInMiLCJkb3duIiwiaGVyb01vdmUiLCJsdiIsImxpbmVhclZlbG9jaXR5Iiwic2NhbGVYIiwiTWF0aCIsImFicyIsInNldEFuaSIsInBsYXkiLCJ1cGRhdGUiLCJkdCIsIkJhZ0JhY2tncm91bmQiLCJhY3RpdmUiLCJHbG9iYWwiLCJnYW1lQmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHO0VBQ1ZDLElBQUksRUFBRSxDQURJO0VBRVZDLE1BQU0sRUFBRTtBQUZFLENBQWQ7QUFLQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRSxDQUROO0lBQ1k7SUFDcEJDLFdBQVcsRUFBRSxDQUZMO0lBR1JDLFNBQVMsRUFBRSxDQUhIO0lBSVJDLFVBQVUsRUFBRTtFQUpKLENBSFA7RUFVTDtFQUNBQyxRQVhLLHNCQVdNO0lBQ1AsS0FBS0MsVUFBTCxHQUFrQlQsRUFBRSxDQUFDVSxJQUFILENBQVEsdUJBQVIsQ0FBbEI7SUFHQSxLQUFLQyxLQUFMLEdBQWEsS0FBS0YsVUFBTCxDQUFnQkcsWUFBaEIsQ0FBNkJaLEVBQUUsQ0FBQ2EsU0FBaEMsQ0FBYjtJQUNBLEtBQUtDLE9BQUwsR0FBZSxLQUFLTCxVQUFMLENBQWdCRyxZQUFoQixDQUE2QlosRUFBRSxDQUFDZSxTQUFoQyxDQUFmLENBTE8sQ0FRUDs7SUFDQSxLQUFLQyxJQUFMLEdBQVksR0FBWixDQVRPLENBV1A7O0lBQ0EsS0FBS0MsS0FBTCxHQUFhLE1BQWIsQ0FaTyxDQWNQOztJQUNBLEtBQUtDLElBQUwsR0FBWWxCLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLHdCQUFSLENBQVosQ0FmTyxDQWlCUDs7SUFDQSxLQUFLUyxPQUFMLEdBQWUsS0FBZixDQWxCTyxDQW1CUDs7SUFDQSxJQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsU0FBakIsRUFBMkI7TUFDdkJGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxTQUFkLEdBQTBCLEtBQTFCO01BQ0EsS0FBS2IsVUFBTCxDQUFnQmMsV0FBaEIsQ0FBNEJILE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLE9BQWQsQ0FBNUIsRUFBbURELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLE9BQWQsQ0FBbkQ7SUFDSDs7SUFDREcsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBSyxLQUFLaEIsVUFBTCxDQUFnQmlCLENBQWpDO0lBQ0FGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQUssS0FBS2hCLFVBQUwsQ0FBZ0JrQixDQUFqQztFQUNILENBckNJO0VBdUNMQyxNQUFNLEVBQUUsa0JBQVk7SUFFaEIsS0FBS3BCLFFBQUwsR0FGZ0IsQ0FJaEI7O0lBQ0FSLEVBQUUsQ0FBQzZCLFdBQUgsQ0FBZUMsRUFBZixDQUFrQjlCLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBM0MsRUFBcUQsS0FBS0MsU0FBMUQsRUFBcUUsSUFBckU7SUFDQWxDLEVBQUUsQ0FBQzZCLFdBQUgsQ0FBZUMsRUFBZixDQUFrQjlCLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkcsTUFBM0MsRUFBbUQsS0FBS0MsT0FBeEQsRUFBaUUsSUFBakUsRUFOZ0IsQ0FRaEI7O0lBQ0EsS0FBS0MsSUFBTCxDQUFVUCxFQUFWLENBQWE5QixFQUFFLENBQUNzQyxJQUFILENBQVFOLFNBQVIsQ0FBa0JPLFVBQS9CLEVBQTJDLEtBQUtDLFdBQWhELEVBQTZELElBQTdEO0VBRUgsQ0FsREk7RUFvRExDLFNBcERLLHVCQW9ETztJQUNSO0lBQ0F6QyxFQUFFLENBQUM2QixXQUFILENBQWVhLEdBQWYsQ0FBbUIxQyxFQUFFLENBQUMrQixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTVDLEVBQXNELEtBQUtDLFNBQTNELEVBQXNFLElBQXRFO0lBQ0FsQyxFQUFFLENBQUM2QixXQUFILENBQWVhLEdBQWYsQ0FBbUIxQyxFQUFFLENBQUMrQixXQUFILENBQWVDLFNBQWYsQ0FBeUJHLE1BQTVDLEVBQW9ELEtBQUtDLE9BQXpELEVBQWtFLElBQWxFO0VBQ0gsQ0F4REk7RUEyRExPLEtBM0RLLG1CQTJERztJQUNKbkIsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQWlCLEtBQUtZLElBQUwsQ0FBVU8sUUFBdkM7RUFDSCxDQTdESTtFQStETDtFQUNBQyxjQUFjLEVBQUUsd0JBQVVDLE9BQVYsRUFBbUJDLFlBQW5CLEVBQWlDQyxhQUFqQyxFQUFnRDtJQUM1RCxJQUFJRCxZQUFZLENBQUNFLEdBQWIsSUFBb0IsQ0FBeEIsRUFBMkI7TUFDdkJ6QixPQUFPLENBQUNDLEdBQVIsQ0FBWXNCLFlBQVksQ0FBQ0UsR0FBekI7TUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBZjtJQUNIO0VBQ0osQ0FyRUk7RUF3RUw7RUFDQVYsV0FBVyxFQUFFLHFCQUFVVyxLQUFWLEVBQWlCLENBRTdCLENBM0VJO0VBK0VMO0VBQ0FqQixTQWhGSyxxQkFnRktpQixLQWhGTCxFQWdGWTtJQUNiO0lBQ0E7SUFDQSxRQUFRQSxLQUFLLENBQUNDLE9BQWQ7TUFDSSxLQUFLcEQsRUFBRSxDQUFDcUQsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO01BQ0EsS0FBS3ZELEVBQUUsQ0FBQ3FELEtBQUgsQ0FBU0MsR0FBVCxDQUFhRSxJQUFsQjtRQUNJaEMsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtRQUNBLEtBQUtULElBQUwsR0FBWSxNQUFaO1FBQ0E7O01BQ0osS0FBS2hCLEVBQUUsQ0FBQ3FELEtBQUgsQ0FBU0MsR0FBVCxDQUFhRyxDQUFsQjtNQUNBLEtBQUt6RCxFQUFFLENBQUNxRCxLQUFILENBQVNDLEdBQVQsQ0FBYUksS0FBbEI7UUFDSSxLQUFLMUMsSUFBTCxHQUFZLE9BQVo7UUFDQTs7TUFDSixLQUFLaEIsRUFBRSxDQUFDcUQsS0FBSCxDQUFTQyxHQUFULENBQWFLLENBQWxCO01BQ0EsS0FBSzNELEVBQUUsQ0FBQ3FELEtBQUgsQ0FBU0MsR0FBVCxDQUFhTSxFQUFsQjtRQUNJLEtBQUs1QyxJQUFMLEdBQVksSUFBWjtRQUNBOztNQUNKLEtBQUtoQixFQUFFLENBQUNxRCxLQUFILENBQVNDLEdBQVQsQ0FBYU8sQ0FBbEI7TUFDQSxLQUFLN0QsRUFBRSxDQUFDcUQsS0FBSCxDQUFTQyxHQUFULENBQWFRLElBQWxCO1FBQ0ksS0FBSzlDLElBQUwsR0FBWSxNQUFaO1FBQ0E7SUFqQlI7RUFtQkgsQ0F0R0k7RUF3R0xvQixPQXhHSyxtQkF3R0dlLEtBeEdILEVBd0dVO0lBQ1g7SUFDQSxRQUFRQSxLQUFLLENBQUNDLE9BQWQ7TUFDSSxLQUFLcEQsRUFBRSxDQUFDcUQsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO01BQ0EsS0FBS3ZELEVBQUUsQ0FBQ3FELEtBQUgsQ0FBU0MsR0FBVCxDQUFhRSxJQUFsQjtRQUNJLEtBQUt4QyxJQUFMLEdBQVksR0FBWjtRQUNBOztNQUNKLEtBQUtoQixFQUFFLENBQUNxRCxLQUFILENBQVNDLEdBQVQsQ0FBYUcsQ0FBbEI7TUFDQSxLQUFLekQsRUFBRSxDQUFDcUQsS0FBSCxDQUFTQyxHQUFULENBQWFJLEtBQWxCO1FBQ0ksS0FBSzFDLElBQUwsR0FBWSxHQUFaO1FBQ0E7O01BQ0osS0FBS2hCLEVBQUUsQ0FBQ3FELEtBQUgsQ0FBU0MsR0FBVCxDQUFhSyxDQUFsQjtNQUNBLEtBQUszRCxFQUFFLENBQUNxRCxLQUFILENBQVNDLEdBQVQsQ0FBYU0sRUFBbEI7UUFDSSxLQUFLNUMsSUFBTCxHQUFZLEdBQVo7UUFDQTs7TUFDSixLQUFLaEIsRUFBRSxDQUFDcUQsS0FBSCxDQUFTQyxHQUFULENBQWFPLENBQWxCO01BQ0EsS0FBSzdELEVBQUUsQ0FBQ3FELEtBQUgsQ0FBU0MsR0FBVCxDQUFhUSxJQUFsQjtRQUNJLEtBQUs5QyxJQUFMLEdBQVksR0FBWjtRQUNBO0lBaEJSO0VBa0JILENBNUhJO0VBK0hMO0VBRUE7RUFDQStDLFFBbElLLHNCQWtJTTtJQUNQLElBQUlDLEVBQUUsR0FBRyxLQUFLckQsS0FBTCxDQUFXc0QsY0FBcEI7SUFDQSxJQUFJQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUsvQixJQUFMLENBQVU2QixNQUFuQixDQUFiO0lBQ0EsSUFBSWpELEtBQUssR0FBRyxLQUFLQSxLQUFqQjs7SUFDQSxRQUFRLEtBQUtELElBQWI7TUFDSSxLQUFLLE1BQUw7UUFBYTtVQUNUZ0QsRUFBRSxDQUFDdEMsQ0FBSCxHQUFPLENBQUMsS0FBS3JCLFdBQWIsQ0FEUyxDQUVUOztVQUNBWSxLQUFLLEdBQUcsU0FBUjtVQUNBO1FBQ0g7O01BQ0QsS0FBSyxPQUFMO1FBQWM7VUFDVitDLEVBQUUsQ0FBQ3RDLENBQUgsR0FBTyxLQUFLckIsV0FBWjtVQUNBLEtBQUtnQyxJQUFMLENBQVU2QixNQUFWLEdBQW1CQSxNQUFuQjtVQUNBakQsS0FBSyxHQUFHLFVBQVI7VUFDQTtRQUNIOztNQUNEO1FBQVM7VUFDTEEsS0FBSyxHQUFHLE1BQVI7VUFDQStDLEVBQUUsQ0FBQ3RDLENBQUgsR0FBTyxDQUFQO1FBQ0g7SUFoQkw7O0lBa0JBLEtBQUtqQixVQUFMLENBQWdCRyxZQUFoQixDQUE2QlosRUFBRSxDQUFDYSxTQUFoQyxFQUEyQ29ELGNBQTNDLEdBQTRERCxFQUE1RDtJQUNBLEtBQUtLLE1BQUwsQ0FBWXBELEtBQVo7RUFDSCxDQTFKSTtFQTRKTG9ELE1BNUpLLGtCQTRKRXBELEtBNUpGLEVBNEpTO0lBQ1YsSUFBSSxLQUFLQSxLQUFMLElBQWNBLEtBQWxCLEVBQXlCO01BQ3JCO0lBQ0gsQ0FGRCxNQUdLO01BQ0QsS0FBS0EsS0FBTCxHQUFhQSxLQUFiO01BQ0EsS0FBS0gsT0FBTCxDQUFhd0QsSUFBYixDQUFrQnJELEtBQWxCO0lBQ0g7RUFDSixDQXBLSTtFQXdLTHNELE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQ2xCLElBQUlwRCxNQUFNLENBQUNxRCxhQUFQLElBQXdCckQsTUFBTSxDQUFDcUQsYUFBUCxDQUFxQkMsTUFBckIsSUFBOEIsSUFBdkQsSUFDQ0MsTUFBTSxDQUFDQyxNQUFQLElBQWlCRCxNQUFNLENBQUNDLE1BQVAsQ0FBY0YsTUFBZCxJQUF3QixJQUQ3QyxFQUNrRDtNQUM5QztJQUNIOztJQUNELEtBQUtYLFFBQUw7RUFFSDtBQS9LSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTdGF0ZSA9IHtcbiAgICBtb3ZlOiAxLFxuICAgIGF0dGFjazogMixcbn07XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1vdmVNYXhzcGVlZDogMCwgICAgLy/mnIDlpKfnp7vliqjpgJ/luqZcbiAgICAgICAgcGxheWVyU3BlZWQ6IDAsXG4gICAgICAgIGp1bXBTcGVlZDogMCxcbiAgICAgICAganVtcEhlaWdodDogMCxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgaW5pdEhlcm8oKSB7XG4gICAgICAgIHRoaXMucGxheWVyTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvYmcvcGxheWVyL2JvZHlcIik7XG5cblxuICAgICAgICB0aGlzLnJpZ2lkID0gdGhpcy5wbGF5ZXJOb2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICB0aGlzLmhlcm9BbmkgPSB0aGlzLnBsYXllck5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG5cblxuICAgICAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNcbiAgICAgICAgdGhpcy5fZGlyID0gJyAnO1xuXG4gICAgICAgIC8v5Li76KeS6buY6K6k5Yqo55S7XG4gICAgICAgIHRoaXMuYW5pbWEgPSAnaWRsZSc7XG5cbiAgICAgICAgLy/ojrflj5ZucGPnmoTkvY3nva5cbiAgICAgICAgdGhpcy5ucGNzID0gY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kL25wY3NcIik7XG5cbiAgICAgICAgLy/mmK/lkKblj6/ku6Xov5vooYzkuIDkuKrkuqTosIhcbiAgICAgICAgdGhpcy5jYW5UYWxrID0gZmFsc2U7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdylcbiAgICAgICAgaWYod2luZG93LnBsYXllci5lbnRlckdhbWUpe1xuICAgICAgICAgICAgd2luZG93LnBsYXllci5lbnRlckdhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyTm9kZS5zZXRQb3NpdGlvbih3aW5kb3cucGxheWVyWydwb3NfWCddLHdpbmRvdy5wbGF5ZXJbJ3Bvc19ZJ10pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwieDpcIit0aGlzLnBsYXllck5vZGUueCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwieTpcIit0aGlzLnBsYXllck5vZGUueSk7XG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuaW5pdEhlcm8oKTtcblxuICAgICAgICAvLyDnm5HlkKzplK7nm5jmk43kvZxcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG5cbiAgICAgICAgLy/nm5HlkKzpvKDmoIfkuovku7YgXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm9uTW91c2VEb3duLCB0aGlzKTtcblxuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8v5a+56ZSu55uY55uR5ZCs5LqL5Lu26Kej57uRXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfSxcblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5ub2RlIHBvc1wiKyB0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgIH0sXG5cbiAgICAvLyDnorDmkp7mo4DmtYtcbiAgICBvbkJlZ2luQ29udGFjdDogZnVuY3Rpb24gKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAoc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmQ29sbGlkZXIudGFnKTtcbiAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvLyDpvKDmoIfkuovku7bnm5HlkKxcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICB9LFxuXG5cblxuICAgIC8v6ZSu55uY5LqL5Lu255uR5ZCsXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIC8vIHNldCBhIGZsYWcgd2hlbiBrZXkgcHJlc3NlZFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRvd25cIik7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpciA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXIgPSAncmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxuICAgICAgICAgICAgICAgIHRoaXMuX2RpciA9ICd1cCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXIgPSAnZG93bic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25LZXlVcChldmVudCkge1xuICAgICAgICAvLyB1bnNldCBhIGZsYWcgd2hlbiBrZXkgcmVsZWFzZWRcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXIgPSAnICc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyID0gJyAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxuICAgICAgICAgICAgICAgIHRoaXMuX2RpciA9ICcgJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxuICAgICAgICAgICAgICAgIHRoaXMuX2RpciA9ICcgJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8v6I635Y+WbnBjIOWSjOiuoeeul25wY+i3neemu1xuXG4gICAgLy/kurrniannp7vliqhcbiAgICBoZXJvTW92ZSgpIHtcbiAgICAgICAgbGV0IGx2ID0gdGhpcy5yaWdpZC5saW5lYXJWZWxvY2l0eTtcbiAgICAgICAgbGV0IHNjYWxlWCA9IE1hdGguYWJzKHRoaXMubm9kZS5zY2FsZVgpO1xuICAgICAgICBsZXQgYW5pbWEgPSB0aGlzLmFuaW1hO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX2Rpcikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcbiAgICAgICAgICAgICAgICBsdi54ID0gLXRoaXMucGxheWVyU3BlZWQ7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlWCA9IC1zY2FsZVg7XG4gICAgICAgICAgICAgICAgYW5pbWEgPSAncnVubGVmdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHtcbiAgICAgICAgICAgICAgICBsdi54ID0gdGhpcy5wbGF5ZXJTcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gc2NhbGVYO1xuICAgICAgICAgICAgICAgIGFuaW1hID0gJ3J1bnJpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBhbmltYSA9ICdpZGxlJztcbiAgICAgICAgICAgICAgICBsdi54ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllck5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBsdjtcbiAgICAgICAgdGhpcy5zZXRBbmkoYW5pbWEpO1xuICAgIH0sXG5cbiAgICBzZXRBbmkoYW5pbWEpIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWEgPT0gYW5pbWEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWEgPSBhbmltYTtcbiAgICAgICAgICAgIHRoaXMuaGVyb0FuaS5wbGF5KGFuaW1hKTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYoKHdpbmRvdy5CYWdCYWNrZ3JvdW5kICYmIHdpbmRvdy5CYWdCYWNrZ3JvdW5kLmFjdGl2ZSA9PXRydWUpfHxcbiAgICAgICAgICAgIEdsb2JhbC5nYW1lQmcgJiYgR2xvYmFsLmdhbWVCZy5hY3RpdmUgPT0gdHJ1ZSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oZXJvTW92ZSgpO1xuXG4gICAgfSxcblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/llj/assets/script/setbuttom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50f502tUYFB+oYjgNgV6gLq', 'setbuttom');
// llj/assets/script/setbuttom.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.openlamp = 0;
cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    //点击使用物品会使物品图片出现在左上角
    this.node.pic = 'shade/1';
    var num = cc.find("Canvas/num");
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var usetool = cc.find("Canvas/lampshade"); //通过全路径获取对应节点

      if (openlamp == 0) {
        cc.loader.loadRes("shade/1", cc.SpriteFrame, function (err, spriteFrame) {
          usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes("num/1", cc.SpriteFrame, function (err, spriteFrame) {
          num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        openlamp++;
      } else if (openlamp == 1) {
        cc.loader.loadRes(null, cc.SpriteFrame, function (err, spriteFrame) {
          usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes(null, cc.SpriteFrame, function (err, spriteFrame) {
          num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        openlamp--;
      }
    }.bind(this), this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9sbGovYXNzZXRzL3NjcmlwdC9zZXRidXR0b20uanMiXSwibmFtZXMiOlsid2luZG93Iiwib3BlbmxhbXAiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwibm9kZSIsInBpYyIsIm51bSIsImZpbmQiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwidXNldG9vbCIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWdCLENBQWhCO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBS0xDLEtBTEssbUJBS0k7SUFDTDtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsR0FBVixHQUFjLFNBQWQ7SUFDQSxJQUFJQyxHQUFHLEdBQUNQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRLFlBQVIsQ0FBUjtJQUNBLEtBQUtILElBQUwsQ0FBVUksRUFBVixDQUFhVCxFQUFFLENBQUNVLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsWUFBWTtNQUNuRCxJQUFJQyxPQUFPLEdBQUdiLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRLGtCQUFSLENBQWQsQ0FEbUQsQ0FDUjs7TUFDM0MsSUFBR1QsUUFBUSxJQUFFLENBQWIsRUFDQTtRQUFDQyxFQUFFLENBQUNjLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixTQUFsQixFQUE2QmYsRUFBRSxDQUFDZ0IsV0FBaEMsRUFBNkMsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1VBQ3RFTCxPQUFPLENBQUNNLFlBQVIsQ0FBcUJuQixFQUFFLENBQUNvQixNQUF4QixFQUFnQ0YsV0FBaEMsR0FBOENBLFdBQTlDO1FBQ0gsQ0FGQTtRQUdEbEIsRUFBRSxDQUFDYyxNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkJmLEVBQUUsQ0FBQ2dCLFdBQTlCLEVBQTJDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtVQUNuRVgsR0FBRyxDQUFDWSxZQUFKLENBQWlCbkIsRUFBRSxDQUFDb0IsTUFBcEIsRUFBNEJGLFdBQTVCLEdBQTBDQSxXQUExQztRQUNILENBRkQ7UUFHQW5CLFFBQVE7TUFDWCxDQVJHLE1BU0ssSUFBR0EsUUFBUSxJQUFFLENBQWIsRUFDTDtRQUNJQyxFQUFFLENBQUNjLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixJQUFsQixFQUF3QmYsRUFBRSxDQUFDZ0IsV0FBM0IsRUFBd0MsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1VBQ2hFTCxPQUFPLENBQUNNLFlBQVIsQ0FBcUJuQixFQUFFLENBQUNvQixNQUF4QixFQUFnQ0YsV0FBaEMsR0FBOENBLFdBQTlDO1FBQ0gsQ0FGRDtRQUdBbEIsRUFBRSxDQUFDYyxNQUFILENBQVVDLE9BQVYsQ0FBa0IsSUFBbEIsRUFBd0JmLEVBQUUsQ0FBQ2dCLFdBQTNCLEVBQXdDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtVQUNoRVgsR0FBRyxDQUFDWSxZQUFKLENBQWlCbkIsRUFBRSxDQUFDb0IsTUFBcEIsRUFBNEJGLFdBQTVCLEdBQTBDQSxXQUExQztRQUNILENBRkQ7UUFHQW5CLFFBQVE7TUFDWDtJQUNBLENBckJzQyxDQXFCckNzQixJQXJCcUMsQ0FxQmhDLElBckJnQyxDQUEzQyxFQXFCa0IsSUFyQmxCO0VBcUJ5QjtBQTlCeEIsQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbndpbmRvdy5vcGVubGFtcD0wO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgfSxcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+eCueWHu+S9v+eUqOeJqeWTgeS8muS9v+eJqeWTgeWbvueJh+WHuueOsOWcqOW3puS4iuinklxyXG4gICAgICAgIHRoaXMubm9kZS5waWM9J3NoYWRlLzEnO1xyXG4gICAgICAgIGxldCBudW09Y2MuZmluZChcIkNhbnZhcy9udW1cIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHVzZXRvb2wgPSBjYy5maW5kKFwiQ2FudmFzL2xhbXBzaGFkZVwiKTsgLy/pgJrov4flhajot6/lvoTojrflj5blr7nlupToioLngrlcclxuICAgICAgICAgICAgaWYob3BlbmxhbXA9PTApXHJcbiAgICAgICAgICAgIHtjYy5sb2FkZXIubG9hZFJlcyhcInNoYWRlLzFcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1c2V0b29sLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIm51bS8xXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgbnVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvcGVubGFtcCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihvcGVubGFtcD09MSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMobnVsbCwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNldG9vbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhudWxsLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb3BlbmxhbXAtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO31cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
