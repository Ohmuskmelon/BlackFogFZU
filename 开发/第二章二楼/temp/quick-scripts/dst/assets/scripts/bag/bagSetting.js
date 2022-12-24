
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhZy9iYWdTZXR0aW5nLmpzIl0sIm5hbWVzIjpbIlRPT0xTIiwid2luZG93IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJpbnRyb2R1Y3Rpb24iLCJvbkxvYWQiLCJmaW5kIiwidG9vbHNBcnJheSIsIkJhZyIsInRvb2xNYXAiLCJjb25zb2xlIiwibG9nIiwic3Bhd25Ub29scyIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsImxlbmd0aCIsImkiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpZCIsIm5hbWUiLCJpbml0SW5mbyIsInB1c2giLCJhZGRDaGlsZCIsImNoaWxkcmVuU2V0IiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJiYWdCdG4iLCJwYXJlbnQiLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbW92ZUZyb21QYXJlbnQiLCJCYWdCYWNrZ3JvdW5kIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEtBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFuQjtBQUVBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFSixFQUFFLENBQUNLLElBRFA7SUFFUkMsVUFBVSxFQUFFTixFQUFFLENBQUNPLE1BRlA7SUFHUkMsWUFBWSxFQUFDUixFQUFFLENBQUNLO0VBSFIsQ0FIUDtFQVNMO0VBRUFJLE1BWEssb0JBV0k7SUFDTCxLQUFLTCxVQUFMLEdBQWtCSixFQUFFLENBQUNVLElBQUgsQ0FBUSxxQ0FBUixDQUFsQjtJQUNBLEtBQUtKLFVBQUwsR0FBa0JOLEVBQUUsQ0FBQ1Us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QUsxQixVQUFMLENBQWdCNkIsT0FBaEIsQ0FBd0IsVUFBQUMsT0FBTyxFQUFJO1FBQy9CQSxPQUFPLENBQUNDLGdCQUFSO01BQ0gsQ0FGRDtNQUdBLEtBQUtsQyxZQUFMLENBQWtCNkIsTUFBbEIsR0FBMkIsS0FBM0I7SUFFSCxDQVZELE1BV0s7TUFDRDtNQUNBdkIsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtNQUNBLEtBQUtYLFVBQUwsQ0FBZ0JtQyxNQUFoQixDQUF1QkYsTUFBdkIsR0FBZ0MsSUFBaEMsQ0FIQyxDQUtEOztNQUNBLEtBQUtyQixVQUFMO0lBQ0g7O0lBQ0RqQixNQUFNLENBQUM0QyxhQUFQLEdBQXVCLEtBQUt2QyxVQUFMLENBQWdCbUMsTUFBdkM7RUFDSCxDQTFFSTtFQTJFTEssTUEzRUssb0JBMkVJLENBRVI7QUE3RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRPT0xTID0gd2luZG93LlRPT0xTO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBncmlkTGF5b3V0OiBjYy5Ob2RlLFxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgICAgIGludHJvZHVjdGlvbjpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0ID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9iYWcvYmFnQmcvbGF5b3V0XCIpO1xuICAgICAgICB0aGlzLnRvb2xQcmVmYWIgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy90b29sXCIpO1xuICAgICAgICB0aGlzLmludHJvZHVjdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL2ludHJvXCIpO1xuICAgICAgICB0aGlzLnRvb2xzQXJyYXkgPSB3aW5kb3cuQmFnO1xuICAgICAgICB0aGlzLnRvb2xNYXAgPSB0b29sTWFwO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvb2xNYXApO1xuICAgIH0sXG5cbiAgICBzcGF3blRvb2xzKCkge1xuICAgICAgICAvLyDpppblhYjnoa7lrppncmlkTGF5b3V055qE5ZCE5Liq5bGe5oCnXG4gICAgICAgIGxldCBjZWxsV2lkdGggPSB0aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjEwNTtcbiAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yMTU7XG4gICAgICAgIGxldCBzcGFjaW5nWCA9IHRoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMDIyO1xuICAgICAgICBsZXQgc3BhY2luZ1kgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNDU7XG5cbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xuICAgICAgICB0aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUuaGVpZ2h0ID0gY2VsbEhlaWdodDtcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XG4gICAgICAgIHRoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xuXG4gICAgICAgIC8vIOagueaNrlRPT0xT55Sf5oiQ55u45bqU55qE6YGT5YW3XG5cbiAgICAgICAgY29uc29sZS5sb2coQmFnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJCYWcgc2l6ZTpcIiArIEJhZy5sZW5ndGgpO1xuXG4gICAgICAgIHRoaXMudG9vbHNBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5CYWcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUodGhpcy50b29sUHJlZmFiKTtcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMudG9vbE1hcFt3aW5kb3cuQmFnW2ldLm5hbWVdO1xuICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ2JhZ1Rvb2wnKS5pbml0SW5mbyh3aW5kb3cuVE9PTFNbaWRdKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHNBcnJheS5wdXNoKHRvb2wpO1xuICAgICAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmFkZENoaWxkKHRvb2wpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGlsZHJlblNldCA9IHRoaXMuZ3JpZExheW91dC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuU2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZHJlblNldFtpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJhZ0J0bigpIHtcbiAgICAgICAgLy8g6IOM5YyF5oyJ6ZKuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ3JpZCBwYXJlbnQgYWN0aXZlOiBcIiArIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlKTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlKSB7XG4gICAgICAgICAgICAvLyDpmpDol4/oioLngrlcbiAgICAgICAgICAgIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXG4gICAgICAgICAgICB0aGlzLnRvb2xzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaYvuekuuiKgueCuVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWdCZyBhY3RpdmVcIik7XG4gICAgICAgICAgICB0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIOeUn+aIkOaJgOaciemBk+WFt1xuICAgICAgICAgICAgdGhpcy5zcGF3blRvb2xzKCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LkJhZ0JhY2tncm91bmQgPSB0aGlzLmdyaWRMYXlvdXQucGFyZW50O1xuICAgIH0sXG4gICAgdXBkYXRlKCkge1xuXG4gICAgfVxufSk7XG4iXX0=