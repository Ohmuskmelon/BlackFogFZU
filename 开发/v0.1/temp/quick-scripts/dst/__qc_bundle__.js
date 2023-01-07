
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
require('./assets/scripts/bag/bagSetting');
require('./assets/scripts/bag/bagTool');
require('./assets/scripts/bag/useTool');
require('./assets/scripts/changeback');
require('./assets/scripts/chp1/F1ToF2');
require('./assets/scripts/chp1/F1orF2');
require('./assets/scripts/chp1/IsLockOfClosetIn302');
require('./assets/scripts/chp1/disableLock');
require('./assets/scripts/chp1/isLockOf301');
require('./assets/scripts/chp1/lockOf301');
require('./assets/scripts/chp1/openDoorOfManager');
require('./assets/scripts/comeBackToFirstPage');
require('./assets/scripts/controlUIInFirstPage');
require('./assets/scripts/controller/camera');
require('./assets/scripts/controller/changeScene');
require('./assets/scripts/controller/game - 001');
require('./assets/scripts/controller/loadState');
require('./assets/scripts/controller/player_ctrl_pc - 001');
require('./assets/scripts/controller/saveState');
require('./assets/scripts/dialog/dialog - 001');
require('./assets/scripts/game_chp1/cp1_301_wall/301_phone');
require('./assets/scripts/game_chp1/cp1_cloth/1_js');
require('./assets/scripts/game_chp1/cp1_cloth/2_js');
require('./assets/scripts/game_chp1/cp1_cloth/3_js');
require('./assets/scripts/game_chp1/cp1_cloth/4_js');
require('./assets/scripts/game_chp1/cp1_cup/1_java');
require('./assets/scripts/game_chp1/cp1_cup/2_java');
require('./assets/scripts/game_chp1/cp1_cup/3_java');
require('./assets/scripts/game_chp1/cp1_cup/4_java');
require('./assets/scripts/game_chp1/cp1_cup/5_java');
require('./assets/scripts/game_chp1/cp1_lamp/isClosetClosed');
require('./assets/scripts/game_chp1/cp1_lamp/setbuttom');
require('./assets/scripts/game_chp1/cp1_lamp/switchbutton');
require('./assets/scripts/game_chp1/cp1_lock_302/checkPhone');
require('./assets/scripts/game_chp1/cp1_lock_302/closet');
require('./assets/scripts/game_chp1/cp1_lock_302/getphone');
require('./assets/scripts/game_chp1/cp1_lock_sheguan/addStone');
require('./assets/scripts/game_chp1/cp1_lock_sheguan/gate');
require('./assets/scripts/game_chp1/cp1_lock_sheguan/getStone');
require('./assets/scripts/game_chp1/cp1_lock_sheguan/showStone');
require('./assets/scripts/game_chp1/cp1_lock_stair/lockOfStairsTip');
require('./assets/scripts/game_chp1/cp1_lock_stair/stairclock');
require('./assets/scripts/game_chp1/cp1_lock_stair/stairlock');
require('./assets/scripts/game_chp1/cp1_switch/showsuccess');
require('./assets/scripts/game_chp1/cp1_switch/switch');
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
require('./assets/scripts/savestate');
require('./assets/scripts/selfdialog/selfdialog');
require('./assets/scripts/selfdialog/selfdialogInfo');
require('./assets/scripts/tip/tips');
require('./assets/scripts/tip/trigger');
require('./assets/scripts/tool/tool');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhZy9iYWdTZXR0aW5nLmpzIl0sIm5hbWVzIjpbIlRPT0xTIiwid2luZG93IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJpbnRyb2R1Y3Rpb24iLCJvbkxvYWQiLCJmaW5kIiwidG9vbHNBcnJheSIsIkJhZyIsInRvb2xNYXAiLCJjb25zb2xlIiwibG9nIiwic3Bhd25Ub29scyIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsImxlbmd0aCIsImkiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpZCIsIm5hbWUiLCJpbml0SW5mbyIsInB1c2giLCJhZGRDaGlsZCIsImNoaWxkcmVuU2V0IiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJiYWdCdG4iLCJwYXJlbnQiLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbW92ZUZyb21QYXJlbnQiLCJCYWdCYWNrZ3JvdW5kIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEtBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFuQjtBQUVBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFSixFQUFFLENBQUNLLElBRFA7SUFFUkMsVUFBVSxFQUFFTixFQUFFLENBQUNPLE1BRlA7SUFHUkMsWUFBWSxFQUFDUixFQUFFLENBQUNLO0VBSFIsQ0FIUDtFQVNMO0VBRUFJLE1BWEssb0JBV0k7SUFDTCxLQUFLTCxVQUFMLEdBQWtCSixFQUFFLENBQUNVLElBQUgsQ0FBUSxxQ0FBUixDQUFsQjtJQUNBLEtBQUtKLFVBQUwsR0FBa0JOLEVBQUUsQ0FBQ1Us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QUsxQixVQUFMLENBQWdCNkIsT0FBaEIsQ0FBd0IsVUFBQUMsT0FBTyxFQUFJO1FBQy9CQSxPQUFPLENBQUNDLGdCQUFSO01BQ0gsQ0FGRDtNQUdBLEtBQUtsQyxZQUFMLENBQWtCNkIsTUFBbEIsR0FBMkIsS0FBM0I7SUFFSCxDQVZELE1BV0s7TUFDRDtNQUNBdkIsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtNQUNBLEtBQUtYLFVBQUwsQ0FBZ0JtQyxNQUFoQixDQUF1QkYsTUFBdkIsR0FBZ0MsSUFBaEMsQ0FIQyxDQUtEOztNQUNBLEtBQUtyQixVQUFMO0lBQ0g7O0lBQ0RqQixNQUFNLENBQUM0QyxhQUFQLEdBQXVCLEtBQUt2QyxVQUFMLENBQWdCbUMsTUFBdkM7RUFDSCxDQTFFSTtFQTJFTEssTUEzRUssb0JBMkVJLENBRVI7QUE3RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRPT0xTID0gd2luZG93LlRPT0xTO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBncmlkTGF5b3V0OiBjYy5Ob2RlLFxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgICAgIGludHJvZHVjdGlvbjpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0ID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9iYWcvYmFnQmcvbGF5b3V0XCIpO1xuICAgICAgICB0aGlzLnRvb2xQcmVmYWIgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy90b29sXCIpO1xuICAgICAgICB0aGlzLmludHJvZHVjdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL2ludHJvXCIpO1xuICAgICAgICB0aGlzLnRvb2xzQXJyYXkgPSB3aW5kb3cuQmFnO1xuICAgICAgICB0aGlzLnRvb2xNYXAgPSB0b29sTWFwO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvb2xNYXApO1xuICAgIH0sXG5cbiAgICBzcGF3blRvb2xzKCkge1xuICAgICAgICAvLyDpppblhYjnoa7lrppncmlkTGF5b3V055qE5ZCE5Liq5bGe5oCnXG4gICAgICAgIGxldCBjZWxsV2lkdGggPSB0aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjEwNTtcbiAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yMTU7XG4gICAgICAgIGxldCBzcGFjaW5nWCA9IHRoaXMuZ3JpZExheW91dC53aWR0aCAqIDAuMDIyO1xuICAgICAgICBsZXQgc3BhY2luZ1kgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNDU7XG5cbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xuICAgICAgICB0aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUuaGVpZ2h0ID0gY2VsbEhlaWdodDtcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XG4gICAgICAgIHRoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xuXG4gICAgICAgIC8vIOagueaNrlRPT0xT55Sf5oiQ55u45bqU55qE6YGT5YW3XG5cbiAgICAgICAgY29uc29sZS5sb2coQmFnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJCYWcgc2l6ZTpcIiArIEJhZy5sZW5ndGgpO1xuXG4gICAgICAgIHRoaXMudG9vbHNBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5CYWcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUodGhpcy50b29sUHJlZmFiKTtcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMudG9vbE1hcFt3aW5kb3cuQmFnW2ldLm5hbWVdO1xuICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ2JhZ1Rvb2wnKS5pbml0SW5mbyh3aW5kb3cuVE9PTFNbaWRdKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHNBcnJheS5wdXNoKHRvb2wpO1xuICAgICAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmFkZENoaWxkKHRvb2wpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGlsZHJlblNldCA9IHRoaXMuZ3JpZExheW91dC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuU2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZHJlblNldFtpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJhZ0J0bigpIHtcbiAgICAgICAgLy8g6IOM5YyF5oyJ6ZKuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ3JpZCBwYXJlbnQgYWN0aXZlOiBcIiArIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlKTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlKSB7XG4gICAgICAgICAgICAvLyDpmpDol4/oioLngrlcbiAgICAgICAgICAgIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXG4gICAgICAgICAgICB0aGlzLnRvb2xzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaYvuekuuiKgueCuVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWdCZyBhY3RpdmVcIik7XG4gICAgICAgICAgICB0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIOeUn+aIkOaJgOaciemBk+WFt1xuICAgICAgICAgICAgdGhpcy5zcGF3blRvb2xzKCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LkJhZ0JhY2tncm91bmQgPSB0aGlzLmdyaWRMYXlvdXQucGFyZW50O1xuICAgIH0sXG4gICAgdXBkYXRlKCkge1xuXG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cloth/2_js.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50507dCFChIIKzoD0Ej8zpe', '2_js');
// scripts/game_chp1/cp1_cloth/2_js.js

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
    var thisnode = 1;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      listen[touchcnt] = thisnode;
      touchcnt++;
    });
  },
  update: function update(dt) {
    var self = this;

    if (cup[1] == 0) {
      cc.loader.loadRes("衣服", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[1] == 1) {
      cc.loader.loadRes("袜子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[1] == 2) {
      cc.loader.loadRes("裤子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[1] == 3) {
      cc.loader.loadRes("帽子", cc.SpriteFrame, function (err, sp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY2xvdGgvMl9qcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwidGhpc25vZGUiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwibGlzdGVuIiwidG91Y2hjbnQiLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJjdXAiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsS0F6QkssbUJBeUJJO0lBQ0wsSUFBSUMsUUFBUSxHQUFDLENBQWI7SUFDQSxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVAsRUFBRSxDQUFDUSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTBDLFVBQVNDLEtBQVQsRUFBZTtNQUNyREMsTUFBTSxDQUFDQyxRQUFELENBQU4sR0FBaUJSLFFBQWpCO01BQ0FRLFFBQVE7SUFDWCxDQUhEO0VBSUgsQ0EvQkk7RUFpQ0xDLE1BakNLLGtCQWlDR0MsRUFqQ0gsRUFpQ087SUFDUixJQUFJQyxJQUFJLEdBQUMsSUFBVDs7SUFDQSxJQUFHQyxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO01BQ1RqQixFQUFFLENBQUNrQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsSUFBbEIsRUFBdUJuQixFQUFFLENBQUNvQixXQUExQixFQUFzQyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDbEROLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnZCLEVBQUUsQ0FBQ3dCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR0wsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtNQUNUakIsRUFBRSxDQUFDa0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLElBQWxCLEVBQXVCbkIsRUFBRSxDQUFDb0IsV0FBMUIsRUFBc0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ2xETixJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ2QixFQUFFLENBQUN3QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO01BQ0gsQ0FGRDtJQUdIOztJQUNELElBQUdMLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBUSxDQUFYLEVBQWE7TUFDVGpCLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixJQUFsQixFQUF1Qm5CLEVBQUUsQ0FBQ29CLFdBQTFCLEVBQXNDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtRQUNsRE4sSUFBSSxDQUFDVixJQUFMLENBQVVpQixZQUFWLENBQXVCdkIsRUFBRSxDQUFDd0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDs7SUFDRCxJQUFHTCxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO01BQ1RqQixFQUFFLENBQUNrQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsSUFBbEIsRUFBdUJuQixFQUFFLENBQUNvQixXQUExQixFQUFzQyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDbEROLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnZCLEVBQUUsQ0FBQ3dCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDSCxDQUZEO0lBR0g7RUFFSjtBQXhESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdmFyIHRoaXNub2RlPTE7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBsaXN0ZW5bdG91Y2hjbnRdPXRoaXNub2RlO1xyXG4gICAgICAgICAgICB0b3VjaGNudCsrO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKGN1cFsxXT09MCl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6KGj5pyNXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbMV09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuiinOWtkFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGN1cFsxXT09Mil7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6KOk5a2QXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY3VwWzFdPT0zKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLluL3lrZBcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controlUIInFirstPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a41c47DlGZKZZACWiBCld78', 'controlUIInFirstPage');
// scripts/controlUIInFirstPage.js

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
  startGame: function startGame() {
    console.log(window.playerPosition);

    for (var key in window.playerPosition) {
      console.log(window.playerPosition[key]);
      window.playerPosition[key] = null;
    }

    cc.director.loadScene("chp1_303");
  },
  aboutUs: function aboutUs() {
    cc.director.loadScene("关于我们");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xVSUluRmlyc3RQYWdlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnRHYW1lIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInBsYXllclBvc2l0aW9uIiwia2V5IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJhYm91dFVzIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxDQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQWZRLENBSFA7RUFxQkw7RUFFQTtFQUVBQyxTQXpCSyx1QkF5Qk07SUFDUEMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsY0FBbkI7O0lBQ0EsS0FBSSxJQUFJQyxHQUFSLElBQWVGLE1BQU0sQ0FBQ0MsY0FBdEIsRUFBcUM7TUFDakNILE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLEdBQXRCLENBQVo7TUFDQUYsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxHQUF0QixJQUE4QixJQUE5QjtJQUNIOztJQUNEVCxFQUFFLENBQUNVLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QjtFQUNILENBaENJO0VBa0NMQyxPQWxDSyxxQkFrQ0k7SUFDTFosRUFBRSxDQUFDVSxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7RUFDSCxDQXBDSTtFQXNDTEUsS0F0Q0ssbUJBc0NJLENBRVIsQ0F4Q0ksQ0EwQ0w7O0FBMUNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnRHYW1lKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5wbGF5ZXJQb3NpdGlvbik7XG4gICAgICAgIGZvcih2YXIga2V5IGluIHdpbmRvdy5wbGF5ZXJQb3NpdGlvbil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cucGxheWVyUG9zaXRpb25ba2V5XSk7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyUG9zaXRpb25ba2V5XSA9ICBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImNocDFfMzAzXCIpO1xuICAgIH0sXG5cbiAgICBhYm91dFVzKCl7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIuWFs+S6juaIkeS7rFwiKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/chp1/F1orF2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cefa2JvhtNMBbmCeB7CFHoh', 'F1orF2');
// scripts/chp1/F1orF2.js

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
  goUpstair: function goUpstair() {
    cc.director.loadScene("chp1_三楼走廊");
  },
  goDownstair: function goDownstair() {
    cc.director.loadScene("chp1_一楼大厅");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NocDEvRjFvckYyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ29VcHN0YWlyIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJnb0Rvd25zdGFpciIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsRUFIUDtFQU9MQyxTQVBLLHVCQU9PO0lBQ1JKLEVBQUUsQ0FBQ0ssUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0VBQ0gsQ0FUSTtFQVVMQyxXQVZLLHlCQVVRO0lBQ1RQLEVBQUUsQ0FBQ0ssUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0VBQ0gsQ0FaSTtFQWFMRSxLQWJLLG1CQWFJLENBRVIsQ0FmSSxDQWlCTDs7QUFqQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIGdvVXBzdGFpcigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiY2hwMV/kuInmpbzotbDlu4pcIik7XG4gICAgfSxcbiAgICBnb0Rvd25zdGFpcigpe1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJjaHAxX+S4gOalvOWkp+WOhVwiKTtcbiAgICB9LFxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
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
    this.nextScene = "";
    this.currentDoor = "";
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
    return Global.itemType == "doors";
  },
  saveState: function saveState() {
    var camera = cc.find("Main Camera");
    window.player.pos_X = this.playerNode.getPosition().x;
    window.player.pos_Y = this.playerNode.getPosition().y;
    window.playerPosition[this.currentScene] = this.playerNode.getPosition();
    console.log(window.player.pos_X, window.player.pos_Y);
  },
  onSceneLaunched: function onSceneLaunched() {
    if (window.InUse != "") {
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
      cc.loader.loadRes(tool["picUrl"], cc.SpriteFrame, function (err, spriteFrame) {
        self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        console.log("self in: " + self.name);
      });
    }
  },
  changeScene: function changeScene() {
    this.currentScene = cc.director.getScene()._name;
    var scenes = window.scenes[this.currentScene];
    console.log("current scene:" + this.curreneScene);
    console.log("scenes: " + scenes);
    console.log(scenes);
    this.nextScene = scenes[this.currentDoor];
    console.log("next:" + this.nextScene);
    window.player.previousScene = this.currentScene;
    window.player.previousDoor = this.door.name;

    if (this.nextScene == "chp1_202") {
      if (window.lockOfCupsInCP1 != 1 || window.lockOfWashingMachineInCp1 != 1) {
        console.log(window.lockOfCupsInCP1);
        console.log(window.lockOfWashingMachineInCp1);
        console.log("wrong");
        return;
      }
    } // consol


    console.log(this.nextScene);
    cc.director.loadScene(this.nextScene, this.onSceneLaunched);
  },
  start: function start() {},
  update: function update() {
    // console.log(cc.director.getScene()._name);
    this.canshow = this.canShow();

    if (Global.itemType != "doors") {
      this.currentDoor = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvY2hhbmdlU2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkb29yIiwiTm9kZSIsInBsYXllck5vZGUiLCJvbkxvYWQiLCJjdXJyZW50U2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiX25hbWUiLCJuZXh0U2NlbmUiLCJjdXJyZW50RG9vciIsInVzZUl0ZW0iLCJmaW5kIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsImV2ZW50IiwiY2Fuc2hvdyIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwic2F2ZVN0YXRlIiwiY2hhbmdlU2NlbmUiLCJjYW5TaG93IiwiR2xvYmFsIiwiaXRlbVR5cGUiLCJjYW1lcmEiLCJ3aW5kb3ciLCJwbGF5ZXIiLCJwb3NfWCIsImdldFBvc2l0aW9uIiwieCIsInBvc19ZIiwieSIsInBsYXllclBvc2l0aW9uIiwib25TY2VuZUxhdW5jaGVkIiwiSW5Vc2UiLCJpIiwiQmFnIiwibGVuZ3RoIiwiaWQiLCJ0b29sTWFwIiwidG9vbCIsIlRPT0xTIiwic2VsZiIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic2NlbmVzIiwiY3VycmVuZVNjZW5lIiwicHJldmlvdXNTY2VuZSIsInByZXZpb3VzRG9vciIsImxvY2tPZkN1cHNJbkNQMSIsImxvY2tPZldhc2hpbmdNYWNoaW5lSW5DcDEiLCJsb2FkU2NlbmUiLCJzdGFydCIsInVwZGF0ZSIsIml0ZW1OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNQLFdBQVNELEVBQUUsQ0FBQ0UsU0FETDtFQUdQQyxVQUFVLEVBQUU7SUFDVkMsSUFBSSxFQUFFSixFQUFFLENBQUNLLElBREM7SUFFVkMsVUFBVSxFQUFFTixFQUFFLENBQUNLO0VBRkwsQ0FITDtFQVFQO0VBRUFFLE1BVk8sb0JBVUU7SUFDUCxLQUFLQyxZQUFMLEdBQW9CUixFQUFFLENBQUNTLFFBQUgsQ0FBWUMsUUFBWixHQUF1QkMsS0FBM0M7SUFDQSxLQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0lBQ0EsS0FBS0MsV0FBTCxHQUFtQixFQUFuQjtJQUNBLEtBQUtDLE9BQUwsR0FBZWQsRUFBRSxDQUFDZSxJQUFILENBQVEscUNBQVIsQ0FBZjtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhLEtBQUtILE9BQUwsQ0FBYUksSUFBdEM7SUFDQUYsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtJQUNBakIsRUFBRSxDQUFDbUIsV0FBSCxDQUFlQyxFQUFmLENBQWtCcEIsRUFBRSxDQUFDcUIsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUEzQyxFQUFxRCxLQUFLQyxTQUExRCxFQUFxRSxJQUFyRTtFQUNELENBbEJNO0VBb0JQQSxTQXBCTyxxQkFvQkdDLEtBcEJILEVBb0JVO0lBQ2Y7SUFDQSxJQUFJLEtBQUtDLE9BQUwsSUFBZ0JELEtBQUssQ0FBQ0UsT0FBTixJQUFpQjNCLEVBQUUsQ0FBQzRCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxLQUFsRCxFQUF5RDtNQUN2RGQsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtNQUNBLEtBQUtjLFNBQUw7TUFDQSxLQUFLQyxXQUFMO0lBQ0Q7RUFDRixDQTNCTTtFQTZCUEMsT0E3Qk8scUJBNkJHO0lBQ1IsT0FBT0MsTUFBTSxDQUFDQyxRQUFQLElBQW1CLE9BQTFCO0VBQ0QsQ0EvQk07RUFpQ1BKLFNBakNPLHVCQWlDSztJQUNWLElBQUlLLE1BQU0sR0FBR3BDLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRLGFBQVIsQ0FBYjtJQUVBc0IsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsR0FBc0IsS0FBS2pDLFVBQUwsQ0FBZ0JrQyxXQUFoQixHQUE4QkMsQ0FBcEQ7SUFDQUosTUFBTSxDQUFDQyxNQUFQLENBQWNJLEtBQWQsR0FBc0IsS0FBS3BDLFVBQUwsQ0FBZ0JrQyxXQUFoQixHQUE4QkcsQ0FBcEQ7SUFFQU4sTUFBTSxDQUFDTyxjQUFQLENBQXNCLEtBQUtwQyxZQUEzQixJQUEyQyxLQUFLRixVQUFMLENBQWdCa0MsV0FBaEIsRUFBM0M7SUFDQXhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZb0IsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQTFCLEVBQWlDRixNQUFNLENBQUNDLE1BQVAsQ0FBY0ksS0FBL0M7RUFDRCxDQXpDTTtFQTJDUEcsZUEzQ08sNkJBMkNXO0lBQ2hCLElBQUlSLE1BQU0sQ0FBQ1MsS0FBUCxJQUFnQixFQUFwQixFQUF3QjtNQUN0QixJQUFJQyxDQUFDLEdBQUcsQ0FBUjs7TUFDQSxPQUFPQSxDQUFDLEdBQUdWLE1BQU0sQ0FBQ1csR0FBUCxDQUFXQyxNQUF0QixFQUE4QkYsQ0FBQyxFQUEvQixFQUFtQztRQUNqQyxJQUFJVixNQUFNLENBQUNXLEdBQVAsQ0FBV0QsQ0FBWCxFQUFjN0IsSUFBZCxJQUFzQm1CLE1BQU0sQ0FBQ1MsS0FBakMsRUFBd0M7VUFDdEM7UUFDRDtNQUNGOztNQUNELElBQUlJLEVBQUUsR0FBR2IsTUFBTSxDQUFDYyxPQUFQLENBQWVkLE1BQU0sQ0FBQ1csR0FBUCxDQUFXRCxDQUFYLEVBQWM3QixJQUE3QixDQUFUO01BQ0FGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVFpQyxFQUFwQjtNQUNBLElBQUlFLElBQUksR0FBR2YsTUFBTSxDQUFDZ0IsS0FBUCxDQUFhSCxFQUFiLENBQVg7TUFDQWxDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVVtQyxJQUFJLENBQUNsQyxJQUEzQjtNQUNBLEtBQUtKLE9BQUwsR0FBZWQsRUFBRSxDQUFDZSxJQUFILENBQVEscUNBQVIsQ0FBZjtNQUNBLElBQUl1QyxJQUFJLEdBQUcsS0FBS3hDLE9BQWhCO01BQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWVxQyxJQUFJLENBQUNwQyxJQUFoQztNQUNBbEIsRUFBRSxDQUFDdUQsTUFBSCxDQUFVQyxPQUFWLENBQ0VKLElBQUksQ0FBQyxRQUFELENBRE4sRUFFRXBELEVBQUUsQ0FBQ3lELFdBRkwsRUFHRSxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7UUFDMUJMLElBQUksQ0FBQ00sWUFBTCxDQUFrQjVELEVBQUUsQ0FBQzZELE1BQXJCLEVBQTZCRixXQUE3QixHQUEyQ0EsV0FBM0M7UUFDQTNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQWNxQyxJQUFJLENBQUNwQyxJQUEvQjtNQUNELENBTkg7SUFRRDtFQUNGLENBbkVNO0VBcUVQYyxXQXJFTyx5QkFxRU87SUFDWixLQUFLeEIsWUFBTCxHQUFvQlIsRUFBRSxDQUFDUyxRQUFILENBQVlDLFFBQVosR0FBdUJDLEtBQTNDO0lBQ0EsSUFBSW1ELE1BQU0sR0FBR3pCLE1BQU0sQ0FBQ3lCLE1BQVAsQ0FBYyxLQUFLdEQsWUFBbkIsQ0FBYjtJQUNBUSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBaUIsS0FBSzhDLFlBQWxDO0lBQ0EvQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhNkMsTUFBekI7SUFDQTlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZNkMsTUFBWjtJQUNBLEtBQUtsRCxTQUFMLEdBQWlCa0QsTUFBTSxDQUFDLEtBQUtqRCxXQUFOLENBQXZCO0lBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVUsS0FBS0wsU0FBM0I7SUFFQXlCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjMEIsYUFBZCxHQUE4QixLQUFLeEQsWUFBbkM7SUFDQTZCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjMkIsWUFBZCxHQUE2QixLQUFLN0QsSUFBTCxDQUFVYyxJQUF2Qzs7SUFFQSxJQUFJLEtBQUtOLFNBQUwsSUFBa0IsVUFBdEIsRUFBa0M7TUFDaEMsSUFDRXlCLE1BQU0sQ0FBQzZCLGVBQVAsSUFBMEIsQ0FBMUIsSUFDQTdCLE1BQU0sQ0FBQzhCLHlCQUFQLElBQW9DLENBRnRDLEVBR0U7UUFDQW5ELE9BQU8sQ0FBQ0MsR0FBUixDQUFZb0IsTUFBTSxDQUFDNkIsZUFBbkI7UUFDQWxELE9BQU8sQ0FBQ0MsR0FBUixDQUFZb0IsTUFBTSxDQUFDOEIseUJBQW5CO1FBQ0FuRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO1FBQ0E7TUFDRDtJQUNGLENBdEJXLENBdUJaOzs7SUFDQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0wsU0FBakI7SUFDQVosRUFBRSxDQUFDUyxRQUFILENBQVkyRCxTQUFaLENBQXNCLEtBQUt4RCxTQUEzQixFQUFzQyxLQUFLaUMsZUFBM0M7RUFDRCxDQS9GTTtFQWlHUHdCLEtBakdPLG1CQWlHQyxDQUFFLENBakdIO0VBbUdQQyxNQW5HTyxvQkFtR0U7SUFDUDtJQUNBLEtBQUs1QyxPQUFMLEdBQWUsS0FBS08sT0FBTCxFQUFmOztJQUNBLElBQUlDLE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixPQUF2QixFQUFnQztNQUM5QixLQUFLdEIsV0FBTCxHQUFtQixFQUFuQjtJQUNELENBRkQsTUFFTztNQUNMLEtBQUtBLFdBQUwsR0FBbUJxQixNQUFNLENBQUNxQyxRQUExQjtJQUNEO0VBQ0Y7QUEzR00sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGRvb3I6IGNjLk5vZGUsXG4gICAgcGxheWVyTm9kZTogY2MuTm9kZSxcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lO1xuICAgIHRoaXMubmV4dFNjZW5lID0gXCJcIjtcbiAgICB0aGlzLmN1cnJlbnREb29yID0gXCJcIjtcbiAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgY29uc29sZS5sb2coXCJ1c2VJdGVtOlwiICsgdGhpcy51c2VJdGVtLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwib25sb2FkXCIpO1xuICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICB9LFxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwicHJlc3Mgc3BhY2VcIik7XG4gICAgaWYgKHRoaXMuY2Fuc2hvdyAmJiBldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5zcGFjZSkge1xuICAgICAgY29uc29sZS5sb2coXCJwcmVzcyBzcGFjZVwiKTtcbiAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICB0aGlzLmNoYW5nZVNjZW5lKCk7XG4gICAgfVxuICB9LFxuXG4gIGNhblNob3coKSB7XG4gICAgcmV0dXJuIEdsb2JhbC5pdGVtVHlwZSA9PSBcImRvb3JzXCI7XG4gIH0sXG5cbiAgc2F2ZVN0YXRlKCkge1xuICAgIGxldCBjYW1lcmEgPSBjYy5maW5kKFwiTWFpbiBDYW1lcmFcIik7XG4gICAgXG4gICAgd2luZG93LnBsYXllci5wb3NfWCA9IHRoaXMucGxheWVyTm9kZS5nZXRQb3NpdGlvbigpLng7XG4gICAgd2luZG93LnBsYXllci5wb3NfWSA9IHRoaXMucGxheWVyTm9kZS5nZXRQb3NpdGlvbigpLnk7XG5cbiAgICB3aW5kb3cucGxheWVyUG9zaXRpb25bdGhpcy5jdXJyZW50U2NlbmVdID0gdGhpcy5wbGF5ZXJOb2RlLmdldFBvc2l0aW9uKCk7XG4gICAgY29uc29sZS5sb2cod2luZG93LnBsYXllci5wb3NfWCwgd2luZG93LnBsYXllci5wb3NfWSk7XG4gIH0sXG5cbiAgb25TY2VuZUxhdW5jaGVkKCkge1xuICAgIGlmICh3aW5kb3cuSW5Vc2UgIT0gXCJcIikge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZm9yICg7IGkgPCB3aW5kb3cuQmFnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh3aW5kb3cuQmFnW2ldLm5hbWUgPT0gd2luZG93LkluVXNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBpZCA9IHdpbmRvdy50b29sTWFwW3dpbmRvdy5CYWdbaV0ubmFtZV07XG4gICAgICBjb25zb2xlLmxvZyhcImlkOlwiICsgaWQpO1xuICAgICAgbGV0IHRvb2wgPSB3aW5kb3cuVE9PTFNbaWRdO1xuICAgICAgY29uc29sZS5sb2coXCJ0b29sOlwiICsgdG9vbC5uYW1lKTtcbiAgICAgIHRoaXMudXNlSXRlbSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL3VzZVRvb2wvYm9keVwiKTtcbiAgICAgIHZhciBzZWxmID0gdGhpcy51c2VJdGVtO1xuICAgICAgY29uc29sZS5sb2coXCJzZWxmIG91dDogXCIgKyBzZWxmLm5hbWUpO1xuICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXG4gICAgICAgIHRvb2xbXCJwaWNVcmxcIl0sXG4gICAgICAgIGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgIHNlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGYgaW46IFwiICsgc2VsZi5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG5cbiAgY2hhbmdlU2NlbmUoKSB7XG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lO1xuICAgIGxldCBzY2VuZXMgPSB3aW5kb3cuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lXTtcbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2NlbmU6XCIrdGhpcy5jdXJyZW5lU2NlbmUpO1xuICAgIGNvbnNvbGUubG9nKFwic2NlbmVzOiBcIiArIHNjZW5lcyk7XG4gICAgY29uc29sZS5sb2coc2NlbmVzKTtcbiAgICB0aGlzLm5leHRTY2VuZSA9IHNjZW5lc1t0aGlzLmN1cnJlbnREb29yXTtcbiAgICBjb25zb2xlLmxvZyhcIm5leHQ6XCIgKyB0aGlzLm5leHRTY2VuZSk7XG5cbiAgICB3aW5kb3cucGxheWVyLnByZXZpb3VzU2NlbmUgPSB0aGlzLmN1cnJlbnRTY2VuZTtcbiAgICB3aW5kb3cucGxheWVyLnByZXZpb3VzRG9vciA9IHRoaXMuZG9vci5uYW1lO1xuICAgIFxuICAgIGlmICh0aGlzLm5leHRTY2VuZSA9PSBcImNocDFfMjAyXCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgd2luZG93LmxvY2tPZkN1cHNJbkNQMSAhPSAxIHx8XG4gICAgICAgIHdpbmRvdy5sb2NrT2ZXYXNoaW5nTWFjaGluZUluQ3AxICE9IDFcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9ja09mQ3Vwc0luQ1AxKTtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2tPZldhc2hpbmdNYWNoaW5lSW5DcDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndyb25nXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbFxuICAgIGNvbnNvbGUubG9nKHRoaXMubmV4dFNjZW5lKTtcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5uZXh0U2NlbmUsIHRoaXMub25TY2VuZUxhdW5jaGVkKTtcbiAgfSxcblxuICBzdGFydCgpIHt9LFxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lKTtcbiAgICB0aGlzLmNhbnNob3cgPSB0aGlzLmNhblNob3coKTtcbiAgICBpZiAoR2xvYmFsLml0ZW1UeXBlICE9IFwiZG9vcnNcIikge1xuICAgICAgdGhpcy5jdXJyZW50RG9vciA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudERvb3IgPSBHbG9iYWwuaXRlbU5hbWU7XG4gICAgfVxuICB9LFxufSk7XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVzL2dhbWVDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwIiwiTm9kZSIsInBsYXllck5vZGUiLCJub2RlIiwic3RhcnQiLCJzY2VuZSIsIkdsb2JhbCIsImN1cnJlbnRTY2VuZSIsImZpbmQiLCJpc0luIiwidXNlSXRlbSIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiY2FuU3RhcnRHYW1lIiwicF9wb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsImVfcG9zIiwiZGlzIiwiVmVjMiIsImRpc3RhbmNlIiwiY29uc29sZSIsImxvZyIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiZyIsInNhdmVTdGF0ZSIsImNoYW5nZVNjZW5lIiwiZ2FtZSIsIm5hbWUiLCJuZXh0U2NlbmUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uU2NlbmVMYXVuY2hlZCIsIndpbmRvdyIsInBsYXllciIsInBvc19YIiwiZ2V0UG9zaXRpb24iLCJ4IiwicG9zX1kiLCJ5IiwiZW50ZXJHYW1lIiwiSW5Vc2UiLCJpIiwiQmFnIiwibGVuZ3RoIiwiaWQiLCJ0b29sTWFwIiwidG9vbCIsIlRPT0xTIiwic2VsZiIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwidXBkYXRlIiwiZHQiLCJpdGVtVHlwZSIsIml0ZW1OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsR0FBRyxFQUFDSixF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TUFDMUQsS0FBS1ksU0FBTDtJQUNIO0VBQ0o7QUFsRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwOmNjLk5vZGUsXG4gICAgICAgIHBsYXllck5vZGU6Y2MuTm9kZSxcbiAgICAgICAgbm9kZTpjYy5Ob2RlXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IEdsb2JhbC5jdXJyZW50U2NlbmU7XG4gICAgICAgIHRoaXMudGlwID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS90aXBcIik7XG4gICAgICAgIHRoaXMuaXNJbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBjYW5TdGFydEdhbWUoKXtcbiAgICAgICAgbGV0IHBfcG9zID0gdGhpcy5wbGF5ZXJOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKTtcbiAgICAgICAgbGV0IGVfcG9zID0gIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XG4gICAgICAgIGxldCBkaXMgPSBjYy5WZWMyLmRpc3RhbmNlKGVfcG9zLCBwX3Bvcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlzOlwiK2Rpcyk7XG4gICAgICAgIGlmIChkaXMgPD0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICB0aGlzLmlzSW4gPSB0aGlzLmNhblN0YXJ0R2FtZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluOlwiK3RoaXMuaXNJbik7XG4gICAgICAgIGlmICh0aGlzLmlzSW4pIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNjZW5lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hhbmdlU2NlbmUoKXtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lczogXCIrZ2FtZSk7XG4gICAgICAgIHRoaXMubmV4dFNjZW5lID0gZ2FtZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMubmV4dFNjZW5lLHRoaXMub25TY2VuZUxhdW5jaGVkKTtcbiAgICB9LFxuXG4gICAgc2F2ZVN0YXRlKCl7XG4gICAgICAgIHdpbmRvdy5wbGF5ZXIucG9zX1ggPSB0aGlzLnBsYXllck5vZGUuZ2V0UG9zaXRpb24oKS54O1xuICAgICAgICB3aW5kb3cucGxheWVyLnBvc19ZID0gdGhpcy5wbGF5ZXJOb2RlLmdldFBvc2l0aW9uKCkueTtcbiAgICAgICAgd2luZG93LnBsYXllci5lbnRlckdhbWUgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cucGxheWVyLnBvc19YICx3aW5kb3cucGxheWVyLnBvc19ZKTsgXG4gICAgfSxcblxuICAgIG9uU2NlbmVMYXVuY2hlZCgpe1xuICAgICAgICBpZih3aW5kb3cuSW5Vc2UgIT0nJyl7XG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIGZvciAoOyBpIDwgd2luZG93LkJhZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5CYWdbaV0ubmFtZSA9PSB3aW5kb3cuSW5Vc2Upe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaWQgPSB3aW5kb3cudG9vbE1hcFt3aW5kb3cuQmFnW2ldLm5hbWVdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZDpcIisgaWQpO1xuICAgICAgICAgICAgbGV0IHRvb2wgPSB3aW5kb3cuVE9PTFNbaWRdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b29sOlwiK3Rvb2wubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMudXNlSXRlbTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZiBvdXQ6IFwiK3NlbGYubmFtZSk7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh0b29sWydwaWNVcmwnXSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZiBpbjogXCIrc2VsZi5uYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZihHbG9iYWwuaXRlbVR5cGUgPT0gJ2dhbWVzJyAmJiBHbG9iYWwuaXRlbU5hbWUgPT0gdGhpcy5uYW1lKXtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJHYW1lKCk7XG4gICAgICAgIH0gICBcbiAgICB9LFxufSk7XG4iXX0=
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
    name: "小白",
    url: "role/player"
  },
  2: {
    name: "纸条",
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
    var content = Dialog.contents[window.Global.currentScene]; // console.log(content);

    if (window.Global.itemType != 'npcs' || window.Global.itemName == ' ') {
      return defaultContents;
    }

    return content[window.Global.itemName];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RpYWxvZy9kaWFsb2cgLSAwMDEuanMiXSwibmFtZXMiOlsicm9sZU1hcCIsIm5hbWUiLCJ1cmwiLCJkZWZhdWx0Q29udGVudHMiLCJyb2xlIiwiY29udGVudCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGljU3ByaXRlIiwiU3ByaXRlIiwibmFtZUxhYmVsIiwiTGFiZWwiLCJ0ZXh0TGFiZWwiLCJub2RlQm9keSIsIk5vZGUiLCJvbkxvYWQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJjYW5UYWxrIiwibnBjTmFtZSIsImluaXREaWFsb2ciLCJjb25zb2xlIiwibG9nIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImoiLCJjYW5TaG93RGlhbG9nIiwic2hvd0RpYWxvZyIsInN0YXJ0IiwiR2xvYmFsIiwiaXRlbVR5cGUiLCJpbml0Q29udGVudCIsImN1cnJlbnRTY2VuZSIsIkRpYWxvZyIsImNvbnRlbnRzIiwid2luZG93IiwiaXRlbU5hbWUiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwiY29udGVudEFyciIsInRleHRJbmRleCIsImdldENvbXBvbmVudCIsInN0cmluZyIsImxlbmd0aCIsInNldFRleHREYXRhIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0YSIsInJlc291cmNlcyIsImxvYWQiLCJTcHJpdGVGcmFtZSIsImVyciIsInRleHR1cmUiLCJzcHJpdGVGcmFtZSIsInNob3dDb250ZXh0IiwiZHQiLCJzbGljZSIsInVwZGF0ZSIsIm9uRGVzdHJveSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJQSxPQUFPLEdBQUc7RUFDVixHQUFHO0lBQ0NDLElB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UixDQUFZLHFCQUFxQixLQUFLWCxTQUFMLENBQWV3QyxNQUFoRDtFQUNILENBbkhJO0VBcUhMRyxXQXJISyx5QkFxSFM7SUFDVjtJQUNBLEtBQUsxQyxRQUFMLENBQWNLLE1BQWQsR0FBdUIsS0FBdkI7RUFDSCxDQXhISTtFQTBITGdELE1BMUhLLGtCQTBIRUYsRUExSEYsRUEwSE07SUFDUCxLQUFLN0MsT0FBTCxHQUFlLEtBQUtnQixhQUFMLEVBQWY7O0lBQ0EsSUFBSSxLQUFLaEIsT0FBTCxJQUFnQixLQUFLQyxPQUFMLElBQWdCa0IsTUFBTSxDQUFDTyxRQUEzQyxFQUFxRDtNQUNqRHZCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtILE9BQWpCO01BQ0EsS0FBS0EsT0FBTCxHQUFla0IsTUFBTSxDQUFDTyxRQUF0QjtNQUNBLElBQUkxQyxPQUFPLEdBQUcsS0FBS3FDLFdBQUwsRUFBZDtNQUNBbEIsT0FBTyxDQUFDQyxHQUFSLENBQVlwQixPQUFaO01BQ0EsS0FBSzhDLFVBQUwsR0FBa0I5QyxPQUFsQjtJQUNIOztJQUNELElBQUksS0FBS2dCLE9BQVQsRUFBa0I7TUFDZCxLQUFLNEMsV0FBTCxDQUFpQkMsRUFBakI7SUFDSCxDQUZELE1BR0s7TUFDRCxLQUFLbkQsUUFBTCxDQUFjSyxNQUFkLEdBQXVCLEtBQXZCO0lBQ0g7RUFDSixDQXpJSTtFQTJJTGlELFNBM0lLLHVCQTJJTztJQUNSL0QsRUFBRSxDQUFDb0IsV0FBSCxDQUFlNEMsR0FBZixDQUFtQmhFLEVBQUUsQ0FBQ3NCLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBc0QsS0FBS0MsU0FBM0QsRUFBc0UsSUFBdEU7RUFDSDtBQTdJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmxldCByb2xlTWFwID0ge1xuICAgIDE6IHtcbiAgICAgICAgbmFtZTogXCLlsI/nmb1cIixcbiAgICAgICAgdXJsOiBcInJvbGUvcGxheWVyXCJcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgICAgbmFtZTogXCLnurjmnaFcIixcbiAgICAgICAgdXJsOiBcIlwiXG4gICAgfSxcbn1cblxuXG52YXIgZGVmYXVsdENvbnRlbnRzID0gW1xuICAgIHsgcm9sZTogMiwgY29udGVudDogXCJXZWxjb21lIHRvIEZaVSxoaGhoaFwiIH0sXG4gICAgeyByb2xlOiAxLCBjb250ZW50OiBcIkhlbGxvLEknbSBIdWlrZXJcIiB9LCAgLy/lvZPliY3nmoR0ZXN0RGF0YVxuXTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGljU3ByaXRlOiBjYy5TcHJpdGUsXG4gICAgICAgIG5hbWVMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIHRleHRMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIG5vZGVCb2R5OiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9keVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlQm9keSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIik7XG4gICAgICAgIHRoaXMubm9kZUJvZHkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FuVGFsayA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ucGNOYW1lID0gJyAnO1xuICAgICAgICB0aGlzLmluaXREaWFsb2coKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaWFsb2cgc3VjY2Vzc1wiKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuaiAmJiB0aGlzLmNhblNob3dEaWFsb2coKSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlQm9keS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZXNzIGogdG8gdGFsa1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICBjYW5TaG93RGlhbG9nKCkge1xuICAgICAgICBpZiAoR2xvYmFsLml0ZW1UeXBlID09IFwibnBjc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8v5Yid5aeL5YyW5a+56K+d5YaF5a65XG4gICAgaW5pdENvbnRlbnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC5jdXJyZW50U2NlbmUpO1xuICAgICAgICB2YXIgY29udGVudCA9IERpYWxvZy5jb250ZW50c1t3aW5kb3cuR2xvYmFsLmN1cnJlbnRTY2VuZV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICAgICAgICBpZiAod2luZG93Lkdsb2JhbC5pdGVtVHlwZSAhPSAnbnBjcycgfHwgd2luZG93Lkdsb2JhbC5pdGVtTmFtZSA9PSAnICcpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29udGVudHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnRbd2luZG93Lkdsb2JhbC5pdGVtTmFtZV07XG4gICAgfSxcblxuXG4gICAgLy/liJ3lp4vljJblr7nor53ns7vnu59cbiAgICBpbml0RGlhbG9nKCkge1xuICAgICAgICB0aGlzLm5vd1RleHQgPSBudWxsO1xuICAgICAgICB0aGlzLnRleHRFbmQgPSB0cnVlO1xuICAgICAgICB0aGlzLnR0ID0gMDsgLy/mkq3mlL7nmoTmgLvml7bplb9cbiAgICAgICAgdGhpcy5jb250ZW50QXJyID0gZGVmYXVsdENvbnRlbnRzO1xuICAgICAgICB0aGlzLnRleHRJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLnRleHRMYWJlbCA9IHRoaXMubm9kZUJvZHkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5uYW1lTGFiZWwgPSB0aGlzLm5vZGVCb2R5LmdldENoaWxkQnlOYW1lKFwibmFtZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZyA9ICcnO1xuICAgIH0sXG5cbiAgICAvLyDmmL7npLrlr7nor53nmoTpgLvovpFcbiAgICBzaG93RGlhbG9nKCkge1xuICAgICAgICBpZiAoKyt0aGlzLnRleHRJbmRleCA8IHRoaXMuY29udGVudEFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBpbmRleDpcIiArIHRoaXMudGV4dEluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dERhdGEodGhpcy5jb250ZW50QXJyW3RoaXMudGV4dEluZGV4XSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnRBcnJbdGhpcy50ZXh0SW5kZXhdLmNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy/lhbPpl63lr7nor53moYZcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICAgICAgICAgIHRoaXMudGV4dEluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0VGV4dERhdGEodGV4dERhdGEpIHtcbiAgICAgICAgLy8g5LiA6KGM5bCa5pyq5pKt5pS+5a6MXG4gICAgICAgIGlmICghdGhpcy50ZXh0RW5kKSByZXR1cm47XG4gICAgICAgIHRoaXMudGV4dEVuZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IHJvbGVNYXBbdGV4dERhdGEucm9sZV0ubmFtZTsvL3RleHREYXRh5piv6KeS6Imy57yW5Y+3IOS7jnJvbGVNYXDkuK3ojrflj5bop5LoibLnmoTlkI3lrZdcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nID0gJyc7XG4gICAgICAgIHRoaXMubm93VGV4dCA9IHRleHREYXRhLmNvbnRlbnQ7XG5cbiAgICAgICAgLy8g5L+u5pS55aS05YOPXG4gICAgICAgIGlmICh0aGlzLmNhblRhbGsgJiYgdGhpcy5ucGNOYW1lIT0nICcpIHtcbiAgICAgICAgICAgIHJvbGVNYXBbMl0udXJsID0gXCJyb2xlL1wiK0dsb2JhbC5jdXJyZW50U2NlbmUrXCIvXCIrR2xvYmFsLml0ZW1OYW1lO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocm9sZU1hcFt0ZXh0RGF0YS5yb2xlXS51cmwpXG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocm9sZU1hcFt0ZXh0RGF0YS5yb2xlXS51cmwsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBpY1Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRleHR1cmU7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIHNob3dDb250ZXh0KGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5ub3dUZXh0KSByZXR1cm47XG4gICAgICAgIHRoaXMudHQgKz0gZHQ7XG5cbiAgICAgICAgaWYgKHRoaXMudHQgPj0gMC4wMikgeyAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoIDwgdGhpcy5ub3dUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZyA9IHRoaXMubm93VGV4dC5zbGljZSgwLCB0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dUZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyB0ZXh0TGFiZWw6IFwiICsgdGhpcy50ZXh0TGFiZWwuc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgY2xvc2VEaWFsb2coKSB7XG4gICAgICAgIC8vIOebtOaOpeS4jeaYvuekuuW9k+WJjeeahOiKgueCuVxuICAgICAgICB0aGlzLm5vZGVCb2R5LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5jYW5UYWxrID0gdGhpcy5jYW5TaG93RGlhbG9nKCk7XG4gICAgICAgIGlmICh0aGlzLmNhblRhbGsgJiYgdGhpcy5ucGNOYW1lICE9IEdsb2JhbC5pdGVtTmFtZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ucGNOYW1lKTtcbiAgICAgICAgICAgIHRoaXMubnBjTmFtZSA9IEdsb2JhbC5pdGVtTmFtZVxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmluaXRDb250ZW50KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudEFyciA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FuVGFsaykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGV4dChkdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVCb2R5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH0sXG5cbn0pO1xuIl19
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
  initPlayer: function initPlayer() {
    this.charType = this.node.parent.name;
    this.playerNode = cc.find("Canvas/bg/player");
    this.tt = 0;
    this.canShow = false;
  },
  onLoad: function onLoad() {
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.initPlayer();
  },
  start: function start() {},
  itemAction: function itemAction(dt) {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos); // console.log("type:"+window.Global.itemType+":"+dis);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RpcC90cmlnZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwIiwiTm9kZSIsImluaXRQbGF5ZXIiLCJjaGFyVHlwZSIsIm5vZGUiLCJwYXJlbnQiLCJuYW1lIiwicGxheWVyTm9kZSIsImZpbmQiLCJ0dCIsImNhblNob3ciLCJvbkxvYWQiLCJzdGFydCIsIml0ZW1BY3Rpb24iLCJkdCIsInBfcG9zIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJlX3BvcyIsImRpcyIsIlZlYzIiLCJkaXN0YW5jZSIsIkdsb2JhbCIsIml0ZW1UeXBlIiwiaXRlbU5hbWUiLCJhY3RpdmUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0s7RUFEQSxDQUhQO0VBT0w7RUFLQUMsVUFaSyx3QkFZUTtJQUNULEtBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQUFqQztJQUNBLEtBQUtDLFVBQUwsR0FBa0JYLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLGtCQUFSLENBQWxCO0lBQ0EsS0FBS0MsRUFBTCxHQUFVLENBQVY7SUFDQSxLQUFLQyxPQUFMLEdBQWUsS0FBZjtFQUNILENBakJJO0VBbUJMQyxNQW5CSyxvQkFtQks7SUFDTixLQUFLWCxHQUFMLEdBQVlKLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHdCQUFSLENBQVo7SUFDQSxLQUFLTixVQUFMO0VBQ0gsQ0F0Qkk7RUF3QkxVLEtBeEJLLG1CQXdCRyxDQUNQLENBekJJO0VBMkJMQyxVQTNCSyxzQkEyQk1DLEVBM0JOLEVBMkJVO0lBQ1gsSUFBSUMsS0FBSyxHQUFHLEtBQUtSLFVBQUwsQ0FBZ0JTLHFCQUFoQixDQUFzQ3BCLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUF0QyxDQUFaO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtkLElBQUwsQ0FBVVkscUJBQVYsQ0FBZ0NwQixFQUFFLENBQUNxQixFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBaEMsQ0FBWjtJQUNBLElBQUlFLEdBQUcsR0FBR3ZCLEVBQUUsQ0FBQ3dCLElBQUgsQ0FBUUMsUUFBUixDQUFpQkgsS0FBakIsRUFBd0JILEtBQXhCLENBQVYsQ0FIVyxDQUtYOztJQUNBLElBQUlJLEdBQUcsR0FBRyxHQUFOLElBQWEsS0FBS1QsT0FBTCxJQUFnQixLQUFqQyxFQUF3QztNQUNwQ1ksTUFBTSxDQUFDQyxRQUFQLEdBQWtCLEtBQUtwQixRQUF2QjtNQUNBbUIsTUFBTSxDQUFDRSxRQUFQLEdBQWtCLEtBQUtwQixJQUFMLENBQVVFLElBQTVCO01BQ0EsS0FBS04sR0FBTCxDQUFTeUIsTUFBVCxHQUFrQixJQUFsQjtNQUNBLEtBQUtmLE9BQUwsR0FBZSxJQUFmO0lBQ0gsQ0FMRCxNQU1NO01BQ0YsSUFBSVMsR0FBRyxJQUFJLEdBQVAsSUFBYyxLQUFLVCxPQUFMLElBQWdCLElBQWxDLEVBQXdDO1FBQ3BDLEtBQUtWLEdBQUwsQ0FBU3lCLE1BQVQsR0FBa0IsS0FBbEI7UUFDQSxLQUFLZixPQUFMLEdBQWUsS0FBZjtRQUNBWSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsR0FBbEI7UUFDQUQsTUFBTSxDQUFDRSxRQUFQLEdBQWtCLEdBQWxCO01BQ0g7SUFDSjtFQUNKLENBL0NJO0VBaURMRSxNQWpESyxrQkFpREVaLEVBakRGLEVBaURNO0lBQ1AsS0FBS0wsRUFBTCxJQUFXSyxFQUFYOztJQUNBLElBQUksS0FBS0wsRUFBTCxJQUFXLEdBQWYsRUFBb0I7TUFDaEIsS0FBS0ksVUFBTCxDQUFnQkMsRUFBaEI7TUFDQSxLQUFLTCxFQUFMLEdBQVUsQ0FBVjtJQUNIO0VBQ0o7QUF2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwOiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIFxuXG5cbiAgICBpbml0UGxheWVyKCkge1xuICAgICAgICB0aGlzLmNoYXJUeXBlID0gdGhpcy5ub2RlLnBhcmVudC5uYW1lO1xuICAgICAgICB0aGlzLnBsYXllck5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL2JnL3BsYXllclwiKTtcbiAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICAgIHRoaXMuY2FuU2hvdyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnRpcCA9ICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL3RpcFwiKTtcbiAgICAgICAgdGhpcy5pbml0UGxheWVyKCk7XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgIH0sXG5cbiAgICBpdGVtQWN0aW9uKGR0KSB7XG4gICAgICAgIGxldCBwX3BvcyA9IHRoaXMucGxheWVyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XG4gICAgICAgIGxldCBlX3BvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XG4gICAgICAgIGxldCBkaXMgPSBjYy5WZWMyLmRpc3RhbmNlKGVfcG9zLCBwX3Bvcyk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0eXBlOlwiK3dpbmRvdy5HbG9iYWwuaXRlbVR5cGUrXCI6XCIrZGlzKTtcbiAgICAgICAgaWYgKGRpcyA8IDEwMCAmJiB0aGlzLmNhblNob3cgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIEdsb2JhbC5pdGVtVHlwZSA9IHRoaXMuY2hhclR5cGU7XG4gICAgICAgICAgICBHbG9iYWwuaXRlbU5hbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgICAgICAgICAgIHRoaXMudGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNhblNob3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgIHtcbiAgICAgICAgICAgIGlmIChkaXMgPj0gMTAwICYmIHRoaXMuY2FuU2hvdyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5TaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgR2xvYmFsLml0ZW1UeXBlID0gJyAnO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5pdGVtTmFtZSA9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMudHQgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnR0ID49IDAuMykge1xuICAgICAgICAgICAgdGhpcy5pdGVtQWN0aW9uKGR0KTtcbiAgICAgICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
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
    this.playerNode = cc.find("Canvas/bg/player");
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

    if (dis <= 200) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Rvb2wvdG9vbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpcCIsIk5vZGUiLCJvbkxvYWQiLCJ0dCIsInBsYXllck5vZGUiLCJmaW5kIiwibmFtZSIsIm5vZGUiLCJ3aW5kb3ciLCJUT09MUyIsInRvb2xNYXAiLCJpbkJhZyIsImFjdGl2ZSIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwic3RhcnQiLCJUb29sQWN0aW9uIiwicF9wb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsImVfcG9zIiwiZGlzIiwiVmVjMiIsImRpc3RhbmNlIiwiaXNJbiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImsiLCJCYWciLCJwdXNoIiwia2V5IiwidXBkYXRlIiwiZHQiLCJvbkRlc3Ryb3kiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxHQUFHLEVBQUNKLEVBQUUsQ0FBQ0s7RUFEQyxDQUhQO0VBT0w7RUFHQUMsTUFWSyxvQkFVSztJQUNOLEtBQUtDLEVBQUwsR0FBVSxDQUFWO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQlIsRUFBRSxDQUFDUyxJQUFILENBQVEsa0JBQVIsQ0FBbEI7SUFDQSxLQUFLQyxJQUFMLEdBQVksS0FBS0MsSUFBTCxDQUFVRCxJQUF0Qjs7SUFDQSxJQUFHRSxNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsS0FBS0osSUFBcEIsQ0FBYixFQUF3Q0ssS0FBM0MsRUFBaUQ7TUFDN0MsS0FBS0osSUFBTCxDQUFVSyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0g7O0lBQ0RoQixFQUFFLENBQUNpQixXQUFILENBQWVDLEVBQWYsQ0FBa0JsQixFQUFFLENBQUNtQixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELEVBQXFFLElBQXJFO0VBQ0gsQ0FsQkk7RUFvQkxDLEtBcEJLLG1CQW9CSSxDQUNSLENBckJJO0VBdUJMQyxVQXZCSyxzQkF1Qk1qQixFQXZCTixFQXVCVTtJQUNYLElBQUlrQixLQUFLLEdBQUcsS0FBS2pCLFVBQUwsQ0FBZ0JrQixxQkFBaEIsQ0FBc0MxQixFQUFFLENBQUMyQixFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBdEMsQ0FBWjtJQUNBLElBQUlDLEtBQUssR0FBSSxLQUFLakIsSUFBTCxDQUFVZSxxQkFBVixDQUFnQzFCLEVBQUUsQ0FBQzJCLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFoQyxDQUFiO0lBQ0EsSUFBSUUsR0FBRyxHQUFHN0IsRUFBRSxDQUFDOEIsSUFBSCxDQUFRQyxRQUFSLENBQWlCSCxLQUFqQixFQUF3QkgsS0FBeEIsQ0FBVjs7SUFDQSxJQUFJSSxHQUFHLElBQUksR0FBWCxFQUFnQjtNQUNaLEtBQUtHLElBQUwsR0FBWSxJQUFaO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsS0FBS0EsSUFBTCxHQUFZLEtBQVo7SUFDSDtFQUNKLENBaENJO0VBa0NMVixTQWxDSyxxQkFrQ0tXLEtBbENMLEVBa0NZO0lBQ2IsSUFBSSxLQUFLRCxJQUFULEVBQWU7TUFDWEUsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS3hCLElBQUwsQ0FBVUQsSUFBdEI7O01BQ0EsSUFBSXVCLEtBQUssQ0FBQ0csT0FBTixJQUFpQnBDLEVBQUUsQ0FBQ3FDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQyxFQUFxQztRQUNqQyxJQUFJLENBQUMzQixNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsS0FBS0osSUFBcEIsQ0FBYixFQUF3Q0ssS0FBN0MsRUFBbUQ7VUFDL0NILE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxLQUFLSixJQUFwQixDQUFiLEVBQXdDSyxLQUF4QyxHQUFnRCxJQUFoRDtVQUNBSCxNQUFNLENBQUM0QixHQUFQLENBQVdDLElBQVgsQ0FBZ0I3QixNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsS0FBS0osSUFBcEIsQ0FBYixDQUFoQjs7VUFDQSxLQUFLLElBQUlnQyxHQUFULElBQWdCOUIsTUFBTSxDQUFDNEIsR0FBdkIsRUFBMkI7WUFDdkJOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZdkIsTUFBTSxDQUFDNEIsR0FBUCxDQUFXRSxHQUFYLEVBQWdCaEMsSUFBNUI7VUFDSDs7VUFDRCxLQUFLQyxJQUFMLENBQVVLLE1BQVYsR0FBbUIsS0FBbkI7VUFDQSxLQUFLWixHQUFMLENBQVNZLE1BQVQsR0FBa0IsS0FBbEIsQ0FQK0MsQ0FRL0M7UUFDSDtNQUNKO0lBQ0o7RUFDSixDQWxESTtFQW9ETDJCLE1BcERLLGtCQW9ERUMsRUFwREYsRUFvRE07SUFDUCxLQUFLckMsRUFBTCxJQUFXcUMsRUFBWDs7SUFDQSxJQUFJLEtBQUtyQyxFQUFMLElBQVUsR0FBZCxFQUFtQjtNQUNmLEtBQUtpQixVQUFMLENBQWdCLEtBQUtqQixFQUFyQjtNQUNBLEtBQUtBLEVBQUwsR0FBVSxDQUFWLENBRmUsQ0FHZjtJQUNIO0VBQ0osQ0EzREk7RUE2RExzQyxTQTdESyx1QkE2RE87SUFDUjdDLEVBQUUsQ0FBQ2lCLFdBQUgsQ0FBZTZCLEdBQWYsQ0FBbUI5QyxFQUFFLENBQUNtQixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTVDLEVBQXNELEtBQUtDLFNBQTNELEVBQXNFLElBQXRFO0VBQ0g7QUEvREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRpcDpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICAgIHRoaXMucGxheWVyTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvYmcvcGxheWVyXCIpO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgICAgICAgaWYod2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW3RoaXMubmFtZV1dLmluQmFnKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgIH0sXG5cbiAgICBUb29sQWN0aW9uKHR0KSB7XG4gICAgICAgIGxldCBwX3BvcyA9IHRoaXMucGxheWVyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XG4gICAgICAgIGxldCBlX3BvcyA9ICB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsMCkpO1xuICAgICAgICBsZXQgZGlzID0gY2MuVmVjMi5kaXN0YW5jZShlX3BvcywgcF9wb3MpO1xuICAgICAgICBpZiAoZGlzIDw9IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5pc0luID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNJbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0luKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUubmFtZSk7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuaykge1xuICAgICAgICAgICAgICAgIGlmICghd2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW3RoaXMubmFtZV1dLmluQmFnKXtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW3RoaXMubmFtZV1dLmluQmFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkJhZy5wdXNoKHdpbmRvdy5UT09MU1t3aW5kb3cudG9vbE1hcFt0aGlzLm5hbWVdXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB3aW5kb3cuQmFnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5CYWdba2V5XS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBJdGVtcy5JbkFycltJdGVtcy5DbG9zZUl0ZW1bdGhpcy5uYW1lXV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy50dCArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudHQgPj0wLjMpIHtcbiAgICAgICAgICAgIHRoaXMuVG9vbEFjdGlvbih0aGlzLnR0KTtcbiAgICAgICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93LkJhZyk7XG4gICAgICAgIH1cbiAgICB9LFxuIFxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/selfdialog/selfdialogInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33c67TAGcBLP5mG2Wa2jaeh', 'selfdialogInfo');
// scripts/selfdialog/selfdialogInfo.js

"use strict";

// 自言自语内容
var chp1_303_dialogs = {
  d1: "舍友怎么都不在了，不会背着我在外面偷偷卷吧。",
  d2: "今天外面怎么一个人都没有。",
  d3: "怎么感觉宿舍楼和昨天不太一样，不会我一觉起来睡蒙了吧。"
};
var chp1_zoulang_dialogs = {
  d1: "奇怪，这楼梯间怎么被上了把锁？还是输入密码的。我怎么以前都没意识到"
};
var chp1_302_dialogs = {
  d1: "怎么墙上有个数字？实在是奇怪，也许我应该查看一下",
  d2: "这间宿舍还是挺温馨的，只可惜现在只有我一个人",
  d3: "怎么好像有手机的声音，好像是左边那张床的柜子发出来的，话说……我的手机也不见了，现在拥有一部手机对我的帮助的确很大"
};
var chp1_301_dialogs = {
  d1: "诶，门呢？怎么突然消失了？看来陷入黑雾福大果然会有各种奇异现象的发生，让我想想……学姐曾经说过，如果陷入了黑雾福大，一定要多观察周围，寻找一切可以利用的线索脱身。嗯……我这就去周围看看",
  d2: "怎么墙上有个数字？实在是奇怪，也许我应该查看一下" //d3:"果然门出现了，看来这个黑雾福大也不过如此嘛，我要继续查看其他房间的线索",

};
var chp1_203_dialogs = {
  d1: "这里的洗衣机好像是可以使用的，也许我把它发动起来事情就会有所转机？"
};
var chp1_201_dialogs = {
  d1: "这台洗衣机没办法启动，但是上面的图案却始终显示「暗亮暗暗亮」，同时我捡到一张纸条，上面写着「请不要乱动杯子的顺序」，我试了一下，居然真的完全动不了"
};
var chp1_202_dialogs = {
  d1: "这把钥匙上面有舍管房间的标签，一定是舍管房间的钥匙"
};
var chp1_1Floor_dialogs = {
  d1: "前面就是舍管的房间了，需要一把钥匙才能打开",
  d2: "可恶，这个大门被锁住了，似乎需要某种机关才能解开，也许我要去舍管的房间找找看有没有什么线索"
};
var chp1_managerRoom_dialogs = {
  d1: "看来舍管平日里还是很忙的"
};
window.selfDialog = {
  chp1_303: chp1_303_dialogs,
  chp1_三楼走廊: chp1_zoulang_dialogs,
  chp1_301: chp1_301_dialogs,
  chp1_302: chp1_302_dialogs,
  chp1_203: chp1_203_dialogs,
  chp1_201: chp1_201_dialogs,
  chp1_202: chp1_202_dialogs,
  chp1_一楼大厅: chp1_1Floor_dialogs,
  chp1_舍管房间: chp1_managerRoom_dialogs
}; // 长纸条内容

window.papers = {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NlbGZkaWFsb2cvc2VsZmRpYWxvZ0luZm8uanMiXSwibmFtZXMiOlsiY2hwMV8zMDNfZGlhbG9ncyIsImQxIiwiZDIiLCJkMyIsImNocDFfem91bGFuZ19kaWFsb2dzIiwiY2hwMV8zMDJfZGlhbG9ncyIsImNocDFfMzAxX2RpYWxvZ3MiLCJjaHAxXzIwM19kaWFsb2dzIiwiY2hwMV8yMDFfZGlhbG9ncyIsImNocDFfMjAyX2RpYWxvZ3MiLCJjaHAxXzFGbG9vcl9kaWFsb2dzIiwiY2hwMV9tYW5hZ2VyUm9vbV9kaWFsb2dzIiwid2luZG93Iiwic2VsZkRpYWxvZyIsImNocDFfMzAzIiwiY2hwMV/kuInmpbzotbDlu4oiLCJjaHAxXzMwMSIsImNocDFfMzAyIiwiY2hwMV8yMDMiLCJjaHAxXzIwMSIsImNocDFfMjAyIiwiY2hwMV/kuIDmpbzlpKfljoUiLCJjaHAxX+iIjeeuoeaIv+mXtCIsInBhcGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBLElBQUlBLGdCQUFnQixHQUFHO0VBQ25CQyxFQUFFLEVBQUMsd0JBRGdCO0VBRW5CQyxFQUFFLEVBQUMsZUFGZ0I7RUFHbkJDLEVBQUUsRUFBQztBQUhnQixDQUF2QjtBQU1BLElBQUlDLG9CQUFvQixHQUFHO0VBQ3ZCSCxFQUFFLEVBQUM7QUFEb0IsQ0FBM0I7QUFJQSxJQUFJSSxnQkFBZ0IsR0FBRztFQUNuQkosRUFBRSxFQUFDLDBCQURnQjtFQUVuQkMsRUFBRSxFQUFDLHdCQUZnQjtFQUduQkMsRUFBRSxFQUFDO0FBSGdCLENBQXZCO0FBTUEsSUFBSUcsZ0JBQWdCLEdBQUc7RUFDbkJMLEVBQUUsRUFBQyw4RkFEZ0I7RUFFbkJDLEVBQUUsRUFBQywwQkFGZ0IsQ0FHbkI7O0FBSG1CLENBQXZCO0FBTUEsSUFBSUssZ0JBQWdCLEdBQUc7RUFDbkJOLEVBQUUsRUFBQztBQURnQixDQUF2QjtBQUlBLElBQUlPLGdCQUFnQixHQUFHO0VBQ25CUCxFQUFFLEVBQUM7QUFEZ0IsQ0FBdkI7QUFJQSxJQUFJUSxnQkFBZ0IsR0FBRztFQUNuQlIsRUFBRSxFQUFDO0FBRGdCLENBQXZCO0FBSUEsSUFBSVMsbUJBQW1CLEdBQUc7RUFDdEJULEVBQUUsRUFBQyx1QkFEbUI7RUFFdEJDLEVBQUUsRUFBQztBQUZtQixDQUExQjtBQUtBLElBQUlTLHdCQUF3QixHQUFHO0VBQzNCVixFQUFFLEVBQUM7QUFEd0IsQ0FBL0I7QUFJQVcsTUFBTSxDQUFDQyxVQUFQLEdBQW9CO0VBQ2hCQyxRQUFRLEVBQUNkLGdCQURPO0VBRWhCZSxTQUFTLEVBQUNYLG9CQUZNO0VBR2hCWSxRQUFRLEVBQUNWLGdCQUhPO0VBSWhCVyxRQUFRLEVBQUNaLGdCQUpPO0VBS2hCYSxRQUFRLEVBQUNYLGdCQUxPO0VBTWhCWSxRQUFRLEVBQUNYLGdCQU5PO0VBT2hCWSxRQUFRLEVBQUNYLGdCQVBPO0VBUWhCWSxTQUFTLEVBQUNYLG1CQVJNO0VBU2hCWSxTQUFTLEVBQUNYO0FBVE0sQ0FBcEIsRUFhQTs7QUFJQUMsTUFBTSxDQUFDVyxNQUFQLEdBQWdCLEVBQWhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIOiHquiogOiHquivreWGheWuuVxubGV0IGNocDFfMzAzX2RpYWxvZ3MgPSB7XG4gICAgZDE6XCLoiI3lj4vmgI7kuYjpg73kuI3lnKjkuobvvIzkuI3kvJrog4znnYDmiJHlnKjlpJbpnaLlgbflgbfljbflkKfjgIJcIixcbiAgICBkMjpcIuS7iuWkqeWklumdouaAjuS5iOS4gOS4quS6uumDveayoeacieOAglwiLFxuICAgIGQzOlwi5oCO5LmI5oSf6KeJ5a6/6IiN5qW85ZKM5pio5aSp5LiN5aSq5LiA5qC377yM5LiN5Lya5oiR5LiA6KeJ6LW35p2l552h6JKZ5LqG5ZCn44CCXCIsXG59O1xuXG5sZXQgY2hwMV96b3VsYW5nX2RpYWxvZ3MgPSB7XG4gICAgZDE6XCLlpYfmgKrvvIzov5nmpbzmoq/pl7TmgI7kuYjooqvkuIrkuobmiorplIHvvJ/ov5jmmK/ovpPlhaXlr4bnoIHnmoTjgILmiJHmgI7kuYjku6XliY3pg73msqHmhI/or4bliLBcIixcbn1cblxubGV0IGNocDFfMzAyX2RpYWxvZ3MgPSB7XG4gICAgZDE6XCLmgI7kuYjlopnkuIrmnInkuKrmlbDlrZfvvJ/lrp7lnKjmmK/lpYfmgKrvvIzkuZ/orrjmiJHlupTor6Xmn6XnnIvkuIDkuItcIixcbiAgICBkMjpcIui/memXtOWuv+iIjei/mOaYr+aMuua4qemmqOeahO+8jOWPquWPr+aDnOeOsOWcqOWPquacieaIkeS4gOS4quS6ulwiLFxuICAgIGQzOlwi5oCO5LmI5aW95YOP5pyJ5omL5py655qE5aOw6Z+z77yM5aW95YOP5piv5bem6L656YKj5byg5bqK55qE5p+c5a2Q5Y+R5Ye65p2l55qE77yM6K+d6K+04oCm4oCm5oiR55qE5omL5py65Lmf5LiN6KeB5LqG77yM546w5Zyo5oul5pyJ5LiA6YOo5omL5py65a+55oiR55qE5biu5Yqp55qE56Gu5b6I5aSnXCJcbn1cblxubGV0IGNocDFfMzAxX2RpYWxvZ3MgPSB7XG4gICAgZDE6XCLor7bvvIzpl6jlkaLvvJ/mgI7kuYjnqoHnhLbmtojlpLHkuobvvJ/nnIvmnaXpmbflhaXpu5Hpm77npo/lpKfmnpznhLbkvJrmnInlkITnp43lpYflvILnjrDosaHnmoTlj5HnlJ/vvIzorqnmiJHmg7Pmg7PigKbigKblrablp5Dmm77nu4/or7Tov4fvvIzlpoLmnpzpmbflhaXkuobpu5Hpm77npo/lpKfvvIzkuIDlrpropoHlpJrop4Llr5/lkajlm7TvvIzlr7vmib7kuIDliIflj6/ku6XliKnnlKjnmoTnur/ntKLohLHouqvjgILll6/igKbigKbmiJHov5nlsLHljrvlkajlm7TnnIvnnItcIiwgIFxuICAgIGQyOlwi5oCO5LmI5aKZ5LiK5pyJ5Liq5pWw5a2X77yf5a6e5Zyo5piv5aWH5oCq77yM5Lmf6K645oiR5bqU6K+l5p+l55yL5LiA5LiLXCIsXG4gICAgLy9kMzpcIuaenOeEtumXqOWHuueOsOS6hu+8jOeci+adpei/meS4qum7kembvuemj+Wkp+S5n+S4jei/h+WmguatpOWYm++8jOaIkeimgee7p+e7reafpeeci+WFtuS7luaIv+mXtOeahOe6v+e0olwiLFxufVxuXG5sZXQgY2hwMV8yMDNfZGlhbG9ncyA9IHtcbiAgICBkMTpcIui/memHjOeahOa0l+iho+acuuWlveWDj+aYr+WPr+S7peS9v+eUqOeahO+8jOS5n+iuuOaIkeaKiuWug+WPkeWKqOi1t+adpeS6i+aDheWwseS8muacieaJgOi9rOacuu+8n1wiLCAgXG59XG5cbmxldCBjaHAxXzIwMV9kaWFsb2dzID0ge1xuICAgIGQxOlwi6L+Z5Y+w5rSX6KGj5py65rKh5Yqe5rOV5ZCv5Yqo77yM5L2G5piv5LiK6Z2i55qE5Zu+5qGI5Y205aeL57uI5pi+56S644CM5pqX5Lqu5pqX5pqX5Lqu44CN77yM5ZCM5pe25oiR5o2h5Yiw5LiA5byg57q45p2h77yM5LiK6Z2i5YaZ552A44CM6K+35LiN6KaB5Lmx5Yqo5p2v5a2Q55qE6aG65bqP44CN77yM5oiR6K+V5LqG5LiA5LiL77yM5bGF54S255yf55qE5a6M5YWo5Yqo5LiN5LqGXCIsICBcbn1cblxubGV0IGNocDFfMjAyX2RpYWxvZ3MgPSB7XG4gICAgZDE6XCLov5nmiorpkqXljJnkuIrpnaLmnInoiI3nrqHmiL/pl7TnmoTmoIfnrb7vvIzkuIDlrprmmK/oiI3nrqHmiL/pl7TnmoTpkqXljJlcIiwgIFxufVxuXG5sZXQgY2hwMV8xRmxvb3JfZGlhbG9ncyA9IHtcbiAgICBkMTpcIuWJjemdouWwseaYr+iIjeeuoeeahOaIv+mXtOS6hu+8jOmcgOimgeS4gOaKiumSpeWMmeaJjeiDveaJk+W8gFwiLCAgXG4gICAgZDI6XCLlj6/mgbbvvIzov5nkuKrlpKfpl6jooqvplIHkvY/kuobvvIzkvLzkuY7pnIDopoHmn5Dnp43mnLrlhbPmiY3og73op6PlvIDvvIzkuZ/orrjmiJHopoHljrvoiI3nrqHnmoTmiL/pl7Tmib7mib7nnIvmnInmsqHmnInku4DkuYjnur/ntKJcIlxufVxuXG5sZXQgY2hwMV9tYW5hZ2VyUm9vbV9kaWFsb2dzID0ge1xuICAgIGQxOlwi55yL5p2l6IiN566h5bmz5pel6YeM6L+Y5piv5b6I5b+Z55qEXCIsXG59XG5cbndpbmRvdy5zZWxmRGlhbG9nID0ge1xuICAgIGNocDFfMzAzOmNocDFfMzAzX2RpYWxvZ3MsXG4gICAgY2hwMV/kuInmpbzotbDlu4o6Y2hwMV96b3VsYW5nX2RpYWxvZ3MsXG4gICAgY2hwMV8zMDE6Y2hwMV8zMDFfZGlhbG9ncyxcbiAgICBjaHAxXzMwMjpjaHAxXzMwMl9kaWFsb2dzLFxuICAgIGNocDFfMjAzOmNocDFfMjAzX2RpYWxvZ3MsXG4gICAgY2hwMV8yMDE6Y2hwMV8yMDFfZGlhbG9ncyxcbiAgICBjaHAxXzIwMjpjaHAxXzIwMl9kaWFsb2dzLFxuICAgIGNocDFf5LiA5qW85aSn5Y6FOmNocDFfMUZsb29yX2RpYWxvZ3MsXG4gICAgY2hwMV/oiI3nrqHmiL/pl7Q6Y2hwMV9tYW5hZ2VyUm9vbV9kaWFsb2dzLFxufVxuXG5cbi8vIOmVv+e6uOadoeWGheWuuVxuXG5cblxud2luZG93LnBhcGVycyA9IHtcblxufVxuXG5cblxuXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY3VwLzNfamF2YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsImxpc3RlbiIsInRvdWNoY250IiwidXBkYXRlIiwiZHQiLCJzZWxmIiwiY3VwIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFLENBQ1Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlUsQ0FITDtFQXFCUDtFQUVBO0VBRUFDLEtBekJPLG1CQXlCQztJQUNOLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsVUFBVUMsS0FBVixFQUFpQjtNQUMxREMsTUFBTSxDQUFDQyxRQUFELENBQU4sR0FBbUIsQ0FBbkI7TUFDQUEsUUFBUTtJQUNULENBSEQ7RUFJRCxDQTlCTTtFQWdDUEMsTUFoQ08sa0JBZ0NBQyxFQWhDQSxFQWdDSTtJQUNULElBQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLElBQUlDLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUFkLEVBQWlCO01BQ2ZoQixFQUFFLENBQUNpQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBMEJsQixFQUFFLENBQUNtQixXQUE3QixFQUEwQyxVQUFVQyxHQUFWLEVBQWVDLEVBQWYsRUFBbUI7UUFDM0ROLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnRCLEVBQUUsQ0FBQ3VCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUFnREgsRUFBaEQ7TUFDRCxDQUZEO0lBR0Q7O0lBQ0QsSUFBSUwsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFVLENBQWQsRUFBaUI7TUFDZmhCLEVBQUUsQ0FBQ2lCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEyQmxCLEVBQUUsQ0FBQ21CLFdBQTlCLEVBQTJDLFVBQVVDLEdBQVYsRUFBZUMsRUFBZixFQUFtQjtRQUM1RE4sSUFBSSxDQUFDVixJQUFMLENBQVVpQixZQUFWLENBQXVCdEIsRUFBRSxDQUFDdUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdESCxFQUFoRDtNQUNELENBRkQ7SUFHRDtFQUNGO0FBNUNNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgLy8gZm9vOiB7XHJcbiAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgIC8vIH0sXHJcbiAgICAvLyBiYXI6IHtcclxuICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBsaXN0ZW5bdG91Y2hjbnRdID0gMjtcclxuICAgICAgdG91Y2hjbnQrKztcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKGN1cFsyXSA9PSAxKSB7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ApIHtcclxuICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VwWzJdID09IDApIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ApIHtcclxuICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiJdfQ==
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
  name: '晾衣杆',
  // 道具名称，对应resources/tools中的图片名字
  intro: '用来移动移动衣服和背包',
  // 道具介绍，当玩家在背包中点击道具后，显示介绍
  picUrl: "tools/晾衣杆",
  // 动态加载路径
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '钥匙',
  intro: '可用来打开舍管的房间',
  picUrl: "tools/钥匙",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '蓝色宝石',
  intro: '不知道干什么',
  picUrl: "tools/蓝色宝石",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '手机',
  intro: '用来查看大图',
  picUrl: "tools/手机",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}];
window.toolMap = {
  "晾衣杆": 0,
  "钥匙": 1,
  "蓝色宝石": 2,
  "手机": 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vYmFnSW5mby5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJUT09MUyIsIm5hbWUiLCJpbnRybyIsInBpY1VybCIsImNvbm5lY3QiLCJudW1PZkNvbiIsImluQmFnIiwiaXNBY3RpdmUiLCJ0b29sTWFwIiwiQmFnIiwiSW5Vc2UiLCJUb29sVXNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWUsQ0FDWDtFQUNJQyxJQUFJLEVBQUUsS0FEVjtFQUN3QztFQUNwQ0MsS0FBSyxFQUFFLGFBRlg7RUFFeUM7RUFDckNDLE1BQU0sRUFBRSxXQUhaO0VBR3dDO0VBQ3BDQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQURXLEVBVVg7RUFDSU4sSUFBSSxFQUFFLElBRFY7RUFFSUMsS0FBSyxFQUFFLFlBRlg7RUFHSUMsTUFBTSxFQUFFLFVBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0FWVyxFQW1CWDtFQUNJTixJQUFJLEVBQUUsTUFEVjtFQUVJQyxLQUFLLEVBQUUsUUFGWDtFQUdJQyxNQUFNLEVBQUUsWUFIWjtFQUlJQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQW5CVyxFQTRCWDtFQUNJTixJQUFJLEVBQUUsSUFEVjtFQUVJQyxLQUFLLEVBQUUsUUFGWDtFQUdJQyxNQUFNLEVBQUUsVUFIWjtFQUlJQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQTVCVyxDQUFmO0FBd0NBUixNQUFNLENBQUNTLE9BQVAsR0FBaUI7RUFDYixPQUFXLENBREU7RUFFYixNQUFZLENBRkM7RUFHYixRQUFVLENBSEc7RUFJYixNQUFZO0FBSkMsQ0FBakI7QUFNQVQsTUFBTSxDQUFDVSxHQUFQLEdBQWEsRUFBYjtBQUNBVixNQUFNLENBQUNXLEtBQVAsR0FBZSxFQUFmO0FBQ0FYLE1BQU0sQ0FBQ1ksUUFBUCxHQUFrQixLQUFsQixFQUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuVE9PTFMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAn5pm+6KGj5p2GJywgICAgICAgICAgICAgICAgICAgICAgICAvLyDpgZPlhbflkI3np7DvvIzlr7nlupRyZXNvdXJjZXMvdG9vbHPkuK3nmoTlm77niYflkI3lrZdcbiAgICAgICAgaW50cm86ICfnlKjmnaXnp7vliqjnp7vliqjooaPmnI3lkozog4zljIUnLCAgICAgICAgICAgICAgICAvLyDpgZPlhbfku4vnu43vvIzlvZPnjqnlrrblnKjog4zljIXkuK3ngrnlh7vpgZPlhbflkI7vvIzmmL7npLrku4vnu41cbiAgICAgICAgcGljVXJsOiBcInRvb2xzL+aZvuiho+adhlwiICwgICAgICAgICAgICAgICAvLyDliqjmgIHliqDovb3ot6/lvoRcbiAgICAgICAgY29ubmVjdDogbnVsbCxcbiAgICAgICAgbnVtT2ZDb246IDAsXG4gICAgICAgIGluQmFnOiBmYWxzZSxcbiAgICAgICAgaXNBY3RpdmUgOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ+mSpeWMmScsXG4gICAgICAgIGludHJvOiAn5Y+v55So5p2l5omT5byA6IiN566h55qE5oi/6Ze0JyxcbiAgICAgICAgcGljVXJsOiBcInRvb2xzL+mSpeWMmVwiICAsICAgXG4gICAgICAgIGNvbm5lY3Q6IG51bGwsXG4gICAgICAgIG51bU9mQ29uOiAwLFxuICAgICAgICBpbkJhZzogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlIDogZmFsc2UsICAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICfok53oibLlrp3nn7MnLFxuICAgICAgICBpbnRybzogJ+S4jeefpemBk+W5suS7gOS5iCcsXG4gICAgICAgIHBpY1VybDogXCJ0b29scy/ok53oibLlrp3nn7NcIiAgLCAgIFxuICAgICAgICBjb25uZWN0OiBudWxsLFxuICAgICAgICBudW1PZkNvbjogMCxcbiAgICAgICAgaW5CYWc6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlLCAgICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAn5omL5py6JyxcbiAgICAgICAgaW50cm86ICfnlKjmnaXmn6XnnIvlpKflm74nLFxuICAgICAgICBwaWNVcmw6IFwidG9vbHMv5omL5py6XCIsICAgXG4gICAgICAgIGNvbm5lY3Q6IG51bGwsXG4gICAgICAgIG51bU9mQ29uOiAwLFxuICAgICAgICBpbkJhZzogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlIDogZmFsc2UsICAgICAgICAgXG4gICAgfSxcbl07XG5cblx0XG53aW5kb3cudG9vbE1hcCA9IHtcbiAgICBcIuaZvuiho+adhlwiICAgIDogMCxcbiAgICBcIumSpeWMmVwiICAgICAgOiAxLFxuICAgIFwi6JOd6Imy5a6d55+zXCIgIDogMixcbiAgICBcIuaJi+aculwiICAgICAgOiAzLFxufVxud2luZG93LkJhZyA9IFtdO1xud2luZG93LkluVXNlID0gJyc7XG53aW5kb3cuVG9vbFVzZWQgPSBmYWxzZTtcbi8vIHdpbmRvdy5CYWdCYWNrZ3JvdW5kID0gbnVsbDtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_302/closet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76dd1yUGTpPG6ZqkIbq+xsT', 'closet');
// scripts/game_chp1/cp1_lock_302/closet.js

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
    },
    guizi: {
      "default": null,
      type: cc.SpriteFrame
    },
    openState: cc.Node
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

    if (res === "1024") {
      var closet = this.node.parent.getComponent(cc.Sprite);
      cc.log(closet);
      cc.log(this.node.sprite_FrameOpen);
      closet.spriteFrame = this.sprite_FrameOpen;
      cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = false;
      cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = false;
      cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = false;
      cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = false;
      cc.find("Canvas/柜子大图/柜子+锁关/body_柜子开").active = true; //cc.find("Canvas/柜子大图/柜子+锁关/body_柜子关").active =false;

      cc.log("success");
      window.lockOfClosetInCP1 = true;
    }
  },
  onLoad: function onLoad() {
    res1 = 0;
    res2 = 0;
    res3 = 0;
    res4 = 0;
    res = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja18zMDIvY2xvc2V0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImxvY2tPZkNsb3NldEluQ1AxIiwicmVzMSIsInJlczIiLCJyZXMzIiwicmVzNCIsInJlcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3ByaXRlX0ZyYW1lMSIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInNwcml0ZV9GcmFtZTIiLCJzcHJpdGVfRnJhbWUzIiwic3ByaXRlX0ZyYW1lNCIsInNwcml0ZV9GcmFtZTUiLCJzcHJpdGVfRnJhbWU2Iiwic3ByaXRlX0ZyYW1lNyIsInNwcml0ZV9GcmFtZTgiLCJzcHJpdGVfRnJhbWU5Iiwic3ByaXRlX0ZyYW1lMCIsInNwcml0ZV9GcmFtZU9wZW4iLCJndWl6aSIsIm9wZW5TdGF0ZSIsIk5vZGUiLCJjbG9zZXQxIiwiYnV0dG9uMSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJub3JtYWxTcHJpdGUiLCJjbG9zZXQyIiwiYnV0dG9uMiIsImNsb3NldDMiLCJidXR0b24zIiwiY2xvc2V0NCIsImJ1dHRvbjQiLCJjbG9zZXRKdWRnZSIsImxvZyIsImNsb3NldCIsInBhcmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiZmluZCIsImFjdGl2ZSIsIm9uTG9hZCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLGlCQUFQLEdBQTJCLEtBQTNCO0FBQ0EsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBWSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFhLElBQUlDLElBQUksR0FBRSxDQUFWO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBWSxJQUFJQyxHQUFHLEdBQUUsRUFBVDtBQUNsREMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFF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RSxDQUFDb0MsTUFBakMsQ0FBWjtNQUNBcEMsRUFBRSxDQUFDaUMsR0FBSCxDQUFPQyxNQUFQO01BQ0FsQyxFQUFFLENBQUNpQyxHQUFILENBQU8sS0FBS1gsSUFBTCxDQUFVTixnQkFBakI7TUFDQWtCLE1BQU0sQ0FBQ0csV0FBUCxHQUFxQixLQUFLckIsZ0JBQTFCO01BQ0FoQixFQUFFLENBQUNzQyxJQUFILENBQVEsa0NBQVIsRUFBNENDLE1BQTVDLEdBQW9ELEtBQXBEO01BQ0F2QyxFQUFFLENBQUNzQyxJQUFILENBQVEsa0NBQVIsRUFBNENDLE1BQTVDLEdBQW9ELEtBQXBEO01BQ0F2QyxFQUFFLENBQUNzQyxJQUFILENBQVEsa0NBQVIsRUFBNENDLE1BQTVDLEdBQW9ELEtBQXBEO01BQ0F2QyxFQUFFLENBQUNzQyxJQUFILENBQVEsa0NBQVIsRUFBNENDLE1BQTVDLEdBQW9ELEtBQXBEO01BQ0F2QyxFQUFFLENBQUNzQyxJQUFILENBQVEsNEJBQVIsRUFBc0NDLE1BQXRDLEdBQThDLElBQTlDLENBVFksQ0FVWjs7TUFDQXZDLEVBQUUsQ0FBQ2lDLEdBQUgsQ0FBTyxTQUFQO01BQ0F4QyxNQUFNLENBQUNDLGlCQUFQLEdBQTJCLElBQTNCO0lBQ0g7RUFDSixDQS9JSTtFQWdKTDhDLE1BaEpLLG9CQWdKSztJQUNON0MsSUFBSSxHQUFHLENBQVA7SUFDQUMsSUFBSSxHQUFHLENBQVA7SUFDQUMsSUFBSSxHQUFHLENBQVA7SUFDQUMsSUFBSSxHQUFHLENBQVA7SUFDQUMsR0FBRyxHQUFHLEVBQU47RUFDSCxDQXRKSTtFQXdKTDBDLEtBeEpLLG1CQXdKSSxDQUVSLENBMUpJLENBNEpMOztBQTVKSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxud2luZG93LmxvY2tPZkNsb3NldEluQ1AxID0gZmFsc2U7XG5sZXQgcmVzMSA9MDtsZXQgcmVzMiA9MDsgbGV0IHJlczMgPTAgO2xldCByZXM0ID0wO2xldCByZXMgPVwiXCI7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcHJpdGVfRnJhbWUxIDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTIgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgc3ByaXRlX0ZyYW1lMyA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBzcHJpdGVfRnJhbWU0IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sc3ByaXRlX0ZyYW1lNSA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBzcHJpdGVfRnJhbWU2IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sc3ByaXRlX0ZyYW1lNyA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBzcHJpdGVfRnJhbWU4IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sc3ByaXRlX0ZyYW1lOSA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBzcHJpdGVfRnJhbWUwIDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZU9wZW4gOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgZ3Vpemk6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBvcGVuU3RhdGU6Y2MuTm9kZSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgY2xvc2V0MSgpe1xuICAgICAgICBsZXQgYnV0dG9uMSA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXG4gICAgICAgIHN3aXRjaCAocmVzMSkge1xuICAgICAgICAgICAgY2FzZSAwIDogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTE7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEgOiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMjticmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTM7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU0O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA0IDogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTU7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU2O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNzticmVhaztcbiAgICAgICAgICAgIGNhc2UgNzogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTg7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU5O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMDticmVhaztcbiAgICAgICAgfXJlczEgKys7XG4gICAgICAgIGlmKHJlczE9PT0xMCl7XG4gICAgICAgICAgICByZXMxPTA7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NldDIoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjIgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgc3dpdGNoIChyZXMyKSB7XG4gICAgICAgICAgICBjYXNlIDAgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMTticmVhaztcbiAgICAgICAgICAgIGNhc2UgMSA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAyIDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTM7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNDticmVhaztcbiAgICAgICAgICAgIGNhc2UgNCA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU1O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA1IDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTY7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNzticmVhaztcbiAgICAgICAgICAgIGNhc2UgNyA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU4O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA4IDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMDticmVhaztcbiAgICAgICAgfXJlczIgKys7XG4gICAgICAgIGlmKHJlczI9PT0xMCl7XG4gICAgICAgICAgICByZXMyPTA7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NldDMoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjMgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgc3dpdGNoIChyZXMzKSB7XG4gICAgICAgICAgICBjYXNlIDAgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMTticmVhaztcbiAgICAgICAgICAgIGNhc2UgMSA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAyIDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTM7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNDticmVhaztcbiAgICAgICAgICAgIGNhc2UgNCA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU1O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA1IDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTY7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNzticmVhaztcbiAgICAgICAgICAgIGNhc2UgNyA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU4O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA4IDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMDticmVhaztcbiAgICAgICAgfXJlczMgKys7XG4gICAgICAgIGlmKHJlczM9PT0xMCl7XG4gICAgICAgICAgICByZXMzPTA7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NldDQoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjQgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgc3dpdGNoIChyZXM0KSB7XG4gICAgICAgICAgICBjYXNlIDAgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMTticmVhaztcbiAgICAgICAgICAgIGNhc2UgMSA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAyIDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTM7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNDticmVhaztcbiAgICAgICAgICAgIGNhc2UgNCA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU1O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA1IDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTY7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNzticmVhaztcbiAgICAgICAgICAgIGNhc2UgNyA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU4O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA4IDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMDticmVhaztcbiAgICAgICAgfXJlczQgKys7XG4gICAgICAgIGlmKHJlczQ9PT0xMCl7XG4gICAgICAgICAgICByZXM0PTA7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NldEp1ZGdlKCl7XG4gICAgICAgIHJlcyA9JycrcmVzMStyZXMyK3JlczMrcmVzNDtcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgICAgIGlmKHJlcz09PVwiMTAyNFwiKXtcbiAgICAgICAgICAgIGxldCBjbG9zZXQgPXRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBjYy5sb2coY2xvc2V0KVxuICAgICAgICAgICAgY2MubG9nKHRoaXMubm9kZS5zcHJpdGVfRnJhbWVPcGVuKVxuICAgICAgICAgICAgY2xvc2V0LnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfRnJhbWVPcGVuO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy/mn5zlrZDlpKflm74v5p+c5a2QK+mUgeWFsy9jbG9zZXQvY2xvc2V0MVwiKS5hY3RpdmUgPWZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy/mn5zlrZDlpKflm74v5p+c5a2QK+mUgeWFsy9jbG9zZXQvY2xvc2V0MVwiKS5hY3RpdmUgPWZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy/mn5zlrZDlpKflm74v5p+c5a2QK+mUgeWFsy9jbG9zZXQvY2xvc2V0MVwiKS5hY3RpdmUgPWZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy/mn5zlrZDlpKflm74v5p+c5a2QK+mUgeWFsy9jbG9zZXQvY2xvc2V0MVwiKS5hY3RpdmUgPWZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy/mn5zlrZDlpKflm74v5p+c5a2QK+mUgeWFsy9ib2R5X+afnOWtkOW8gFwiKS5hY3RpdmUgPXRydWU7XG4gICAgICAgICAgICAvL2NjLmZpbmQoXCJDYW52YXMv5p+c5a2Q5aSn5Zu+L+afnOWtkCvplIHlhbMvYm9keV/mn5zlrZDlhbNcIikuYWN0aXZlID1mYWxzZTtcbiAgICAgICAgICAgIGNjLmxvZyhcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB3aW5kb3cubG9ja09mQ2xvc2V0SW5DUDEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICByZXMxID0gMDtcbiAgICAgICAgcmVzMiA9IDA7XG4gICAgICAgIHJlczMgPSAwO1xuICAgICAgICByZXM0ID0gMDtcbiAgICAgICAgcmVzID0gXCJcIjtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
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
    if (window.InUse != "") {
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
      cc.loader.loadRes(tool["picUrl"], cc.SpriteFrame, function (err, spriteFrame) {
        self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        console.log("self in: " + self.name);
      });
    }
  },
  update: function update() {// console.log("this scene" + this.gameScene);
    // console.log("next Scene:" + this.nextScene);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NoYW5nZWJhY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ1c2VJdGVtIiwiZmluZCIsImdhbWVTY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJfbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VTY2VuZSIsIm5leHRTY2VuZSIsIndpbmRvdyIsImdhbWVzIiwibG9hZFNjZW5lIiwib25TY2VuZUxhdW5jaGVkIiwiSW5Vc2UiLCJpIiwiQmFnIiwibGVuZ3RoIiwibmFtZSIsImlkIiwidG9vbE1hcCIsInRvb2wiLCJUT09MUyIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFLEVBSEw7RUFLUEMsTUFMTyxvQkFLRTtJQUNQLEtBQUtDLE9BQUwsR0FBZUwsRUFBRSxDQUFDTSxJQUFILENBQVEscUNBQVIsQ0FBZjtJQUNBLEtBQUtDLFNBQUwsR0FBaUJQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxLQUF4QztJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlLEtBQUtMLFNBQWhDO0VBQ0QsQ0FUTTtFQVdQTSxXQVhPLHlCQVdPO0lBQ1osS0FBS0MsU0FBTCxHQUFpQkMsTUFBTSxDQUFDQyxLQUFQLENBQWEsS0FBS1QsU0FBbEIsQ0FBakI7SUFDQUksT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQWdCLEtBQUtFLFNBQWpDO0lBQ0FkLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZUyxTQUFaLENBQXNCLEtBQUtILFNBQTNCLEVBQXNDLEtBQUtJLGVBQTNDO0VBQ0QsQ0FmTTtFQWlCUEEsZUFqQk8sNkJBaUJXO0lBQ2hCLElBQUlILE1BQU0sQ0FBQ0ksS0FBUCxJQUFnQixFQUFwQixFQUF3QjtNQUN0QixJQUFJQyxDQUFDLEdBQUcsQ0FBUjs7TUFDQSxPQUFPQSxDQUFDLEdBQUdMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXQyxNQUF0QixFQUE4QkYsQ0FBQyxFQUEvQixFQUFtQztRQUNqQyxJQUFJTCxNQUFNLENBQUNNLEdBQVAsQ0FBV0QsQ0FBWCxFQUFjRyxJQUFkLElBQXNCUixNQUFNLENBQUNJLEtBQWpDLEVBQXdDO1VBQ3RDO1FBQ0Q7TUFDRjs7TUFDRCxJQUFJSyxFQUFFLEdBQUdULE1BQU0sQ0FBQ1UsT0FBUCxDQUFlVixNQUFNLENBQUNNLEdBQVAsQ0FBV0QsQ0FBWCxFQUFjRyxJQUE3QixDQUFUO01BRUEsSUFBSUcsSUFBSSxHQUFHWCxNQUFNLENBQUNZLEtBQVAsQ0FBYUgsRUFBYixDQUFYO01BRUEsS0FBS25CLE9BQUwsR0FBZUwsRUFBRSxDQUFDTSxJQUFILENBQVEscUNBQVIsQ0FBZjtNQUNBLElBQUlzQixJQUFJLEdBQUcsS0FBS3ZCLE9BQWhCO01BRUFMLEVBQUUsQ0FBQzZCLE1BQUgsQ0FBVUMsT0FBVixDQUNFSixJQUFJLENBQUMsUUFBRCxDQUROLEVBRUUxQixFQUFFLENBQUMrQixXQUZMLEVBR0UsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1FBQzFCTCxJQUFJLENBQUNNLFlBQUwsQ0FBa0JsQyxFQUFFLENBQUNtQyxNQUFyQixFQUE2QkYsV0FBN0IsR0FBMkNBLFdBQTNDO1FBQ0F0QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFjZ0IsSUFBSSxDQUFDTCxJQUEvQjtNQUNELENBTkg7SUFRRDtFQUNGLENBekNNO0VBMENQYSxNQTFDTyxvQkEwQ0UsQ0FDUDtJQUNBO0VBQ0Q7QUE3Q00sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge30sXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMudXNlSXRlbSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL3VzZVRvb2wvYm9keVwiKTtcbiAgICB0aGlzLmdhbWVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWU7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIHNjZW5lXCIgKyB0aGlzLmdhbWVTY2VuZSk7XG4gIH0sXG5cbiAgY2hhbmdlU2NlbmUoKSB7XG4gICAgdGhpcy5uZXh0U2NlbmUgPSB3aW5kb3cuZ2FtZXNbdGhpcy5nYW1lU2NlbmVdO1xuICAgIGNvbnNvbGUubG9nKFwibmV4dCBTY2VuZTpcIiArIHRoaXMubmV4dFNjZW5lKTtcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5uZXh0U2NlbmUsIHRoaXMub25TY2VuZUxhdW5jaGVkKTtcbiAgfSxcblxuICBvblNjZW5lTGF1bmNoZWQoKSB7XG4gICAgaWYgKHdpbmRvdy5JblVzZSAhPSBcIlwiKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBmb3IgKDsgaSA8IHdpbmRvdy5CYWcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHdpbmRvdy5CYWdbaV0ubmFtZSA9PSB3aW5kb3cuSW5Vc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGlkID0gd2luZG93LnRvb2xNYXBbd2luZG93LkJhZ1tpXS5uYW1lXTtcblxuICAgICAgbGV0IHRvb2wgPSB3aW5kb3cuVE9PTFNbaWRdO1xuXG4gICAgICB0aGlzLnVzZUl0ZW0gPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2JhZy91c2VUb29sL2JvZHlcIik7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMudXNlSXRlbTtcblxuICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXG4gICAgICAgIHRvb2xbXCJwaWNVcmxcIl0sXG4gICAgICAgIGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgIHNlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGYgaW46IFwiICsgc2VsZi5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgc2NlbmVcIiArIHRoaXMuZ2FtZVNjZW5lKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5leHQgU2NlbmU6XCIgKyB0aGlzLm5leHRTY2VuZSk7XG4gIH0sXG59KTtcbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/scripts/chp1/IsLockOfClosetIn302.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '672f3bJy1tCNZV32j9CGwha', 'IsLockOfClosetIn302');
// scripts/chp1/IsLockOfClosetIn302.js

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
    if (window.lockOfClosetInCP1) {
      this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NocDEvSXNMb2NrT2ZDbG9zZXRJbjMwMi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIndpbmRvdyIsImxvY2tPZkNsb3NldEluQ1AxIiwibm9kZSIsImFjdGl2ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUFDLE1BdkJLLG9CQXVCSTtJQUNMLElBQUlDLE1BQU0sQ0FBQ0MsaUJBQVgsRUFBOEI7TUFDMUIsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0g7RUFDSixDQTNCSTtFQTZCTEMsS0E3QkssbUJBNkJHLENBRVAsQ0EvQkksQ0FpQ0w7O0FBakNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2tPZkNsb3NldEluQ1AxKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_301_wall/301_phone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99f09ksAipGYYkPRoekc4sK', '301_phone');
// scripts/game_chp1/cp1_301_wall/301_phone.js

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
    phoneView: cc.Node // foo: {
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
    if (!window.TOOLS[window.toolMap["手机"]].inBag) {
      this.node.active = false;
    }
  },
  displayPhone: function displayPhone() {
    this.phoneView.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfMzAxX3dhbGwvMzAxX3Bob25lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGhvbmVWaWV3IiwiTm9kZSIsIm9uTG9hZCIsIndpbmRvdyIsIlRPT0xTIiwidG9vbE1hcCIsImluQmFnIiwibm9kZSIsImFjdGl2ZSIsImRpc3BsYXlQaG9uZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFHSixFQUFFLENBQUNLLElBRFAsQ0FFUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0VBaEJRLENBSFA7RUFzQkw7RUFFQUMsTUF4Qkssb0JBd0JLO0lBQ04sSUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsSUFBZixDQUFiLEVBQW1DQyxLQUF4QyxFQUE4QztNQUMxQyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7SUFDSDtFQUNKLENBNUJJO0VBOEJMQyxZQTlCSywwQkE4QlM7SUFDVixLQUFLVCxTQUFMLENBQWVRLE1BQWYsR0FBd0IsSUFBeEI7RUFDSCxDQWhDSTtFQWtDTEUsS0FsQ0ssbUJBa0NJLENBRVIsQ0FwQ0ksQ0FzQ0w7O0FBdENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBob25lVmlldyA6IGNjLk5vZGVcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5UT09MU1t3aW5kb3cudG9vbE1hcFtcIuaJi+aculwiXV0uaW5CYWcpe1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRpc3BsYXlQaG9uZSgpe1xuICAgICAgICB0aGlzLnBob25lVmlldy5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_stair/lockOfStairsTip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d92a8j3PFDCpN9LHJ7XRFD', 'lockOfStairsTip');
// scripts/game_chp1/cp1_lock_stair/lockOfStairsTip.js

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
    if (window.lockOfStairsInCP1F3) {
      this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja19zdGFpci9sb2NrT2ZTdGFpcnNUaXAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ3aW5kb3ciLCJsb2NrT2ZTdGFpcnNJbkNQMUYzIiwibm9kZSIsImFjdGl2ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUFDLE1BdkJLLG9CQXVCSTtJQUNMLElBQUlDLE1BQU0sQ0FBQ0MsbUJBQVgsRUFBZ0M7TUFDNUIsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0g7RUFDSixDQTNCSTtFQTZCTEMsS0E3QkssbUJBNkJHLENBRVAsQ0EvQkksQ0FpQ0w7O0FBakNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2tPZlN0YWlyc0luQ1AxRjMpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/chp1/openDoorOfManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bd494lnAFIJbNMT5fL/a0M', 'openDoorOfManager');
// scripts/chp1/openDoorOfManager.js

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
    itemNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    if (window.Items['chp1_一楼大厅']["F1宿管房门"].used == true) {
      cc.find("Canvas/bg/doors/door1").active = true;
      this.itemNode.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NocDEvb3BlbkRvb3JPZk1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtTm9kZSIsIk5vZGUiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwid2luZG93IiwiSXRlbXMiLCJ1c2VkIiwiZmluZCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBQ0osRUFBRSxDQUFDSztFQURKLENBSFA7RUFPTDtFQUVBO0VBRUFDLEtBWEssbUJBV0ksQ0FFUixDQWJJO0VBZUxDLE1BZkssa0JBZUdDLEVBZkgsRUFlTztJQUNSLElBQUdDLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLFdBQWIsRUFBMEIsUUFBMUIsRUFBb0NDLElBQXBDLElBQTRDLElBQS9DLEVBQW9EO01BQ2hEWCxFQUFFLENBQUNZLElBQUgsQ0FBUSx1QkFBUixFQUFpQ0MsTUFBakMsR0FBMEMsSUFBMUM7TUFDQSxLQUFLVCxRQUFMLENBQWNTLE1BQWQsR0FBdUIsS0FBdkI7SUFDSDtFQUNKO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGl0ZW1Ob2RlOmNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYod2luZG93Lkl0ZW1zWydjaHAxX+S4gOalvOWkp+WOhSddW1wiRjHlrr/nrqHmiL/pl6hcIl0udXNlZCA9PSB0cnVlKXtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmcvZG9vcnMvZG9vcjFcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXRlbU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/chp1/F1ToF2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e117fj9pDlB75/6QIMcfAGe', 'F1ToF2');
// scripts/chp1/F1ToF2.js

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
  // onLoad () {},
  start: function start() {},
  F1ToF2: function F1ToF2(dt) {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos); // console.log("type:"+window.Global.itemType+":"+dis);

    if (dis < 100) {
      this.canChange = true;
    }
  },
  update: function update(dt) {
    this.F1ToF2(dt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NocDEvRjFUb0YyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZG9vciIsIk5vZGUiLCJwbGF5ZXJOb2RlIiwic3RhcnQiLCJGMVRvRjIiLCJkdCIsInBfcG9zIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJlX3BvcyIsIm5vZGUiLCJkaXMiLCJWZWMyIiwiZGlzdGFuY2UiLCJjYW5DaGFuZ2UiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0ssSUFERDtJQUVSQyxVQUFVLEVBQUVOLEVBQUUsQ0FBQ0s7RUFGUCxDQUhQO0VBUUw7RUFFQTtFQUVBRSxLQVpLLG1CQVlJLENBRVIsQ0FkSTtFQWVMQyxNQWZLLGtCQWVFQyxFQWZGLEVBZU07SUFDUCxJQUFJQyxLQUFLLEdBQUcsS0FBS0osVUFBTCxDQUFnQksscUJBQWhCLENBQXNDWCxFQUFFLENBQUNZLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUF0QyxDQUFaO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUgscUJBQVYsQ0FBZ0NYLEVBQUUsQ0FBQ1ksRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFSLENBQWhDLENBQVo7SUFDQSxJQUFJRyxHQUFHLEdBQUdmLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUUMsUUFBUixDQUFpQkosS0FBakIsRUFBd0JILEtBQXhCLENBQVYsQ0FITyxDQUtQOztJQUNBLElBQUlLLEdBQUcsR0FBRyxHQUFWLEVBQWU7TUFDWCxLQUFLRyxTQUFMLEdBQWlCLElBQWpCO0lBQ0g7RUFDSixDQXhCSTtFQTRCTEMsTUE1Qkssa0JBNEJHVixFQTVCSCxFQTRCTztJQUNSLEtBQUtELE1BQUwsQ0FBWUMsRUFBWjtFQUNIO0FBOUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGRvb3I6IGNjLk5vZGUsXG4gICAgICAgIHBsYXllck5vZGU6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcbiAgICBGMVRvRjIoZHQpIHtcbiAgICAgICAgbGV0IHBfcG9zID0gdGhpcy5wbGF5ZXJOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKTtcbiAgICAgICAgbGV0IGVfcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKTtcbiAgICAgICAgbGV0IGRpcyA9IGNjLlZlYzIuZGlzdGFuY2UoZV9wb3MsIHBfcG9zKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInR5cGU6XCIrd2luZG93Lkdsb2JhbC5pdGVtVHlwZStcIjpcIitkaXMpO1xuICAgICAgICBpZiAoZGlzIDwgMTAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhbkNoYW5nZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHRoaXMuRjFUb0YyKGR0KTtcbiAgICB9LFxufSk7XG4iXX0=
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
                    var __filename = 'preview-scripts/assets/scripts/chp1/lockOf301.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a455xENSNMR6x1nHpYwJsh', 'lockOf301');
// scripts/chp1/lockOf301.js

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
    if (!window.neatOfClothesInCP1) {
      this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NocDEvbG9ja09mMzAxLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwid2luZG93IiwibmVhdE9mQ2xvdGhlc0luQ1AxIiwibm9kZSIsImFjdGl2ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUFDLE1BdkJLLG9CQXVCSztJQUNOLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxrQkFBWixFQUErQjtNQUMzQixLQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7SUFDSDtFQUNKLENBM0JJO0VBNkJMQyxLQTdCSyxtQkE2QkksQ0FFUixDQS9CSSxDQWlDTDs7QUFqQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5uZWF0T2ZDbG90aGVzSW5DUDEpe1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/chp1/isLockOf301.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93a7bCASXtIvqwOfjl2Vr/r', 'isLockOf301');
// scripts/chp1/isLockOf301.js

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
  onLoad: function onLoad() {},
  start: function start() {
    if (window.neatOfClothesInCP1) {
      this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NocDEvaXNMb2NrT2YzMDEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzdGFydCIsIndpbmRvdyIsIm5lYXRPZkNsb3RoZXNJbkNQMSIsIm5vZGUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxDQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQWZRLENBSFA7RUFxQkw7RUFFQUMsTUF2Qkssb0JBdUJLLENBRVQsQ0F6Qkk7RUEyQkxDLEtBM0JLLG1CQTJCSTtJQUNMLElBQUlDLE1BQU0sQ0FBQ0Msa0JBQVgsRUFBOEI7TUFDMUIsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0g7RUFDSixDQS9CSSxDQWlDTDs7QUFqQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBpZiAod2luZG93Lm5lYXRPZkNsb3RoZXNJbkNQMSl7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
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
    jumpHeight: 0,
    playerNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  initHero: function initHero() {
    this.playerNode = cc.find("Canvas/bg/player");
    this.rigid = this.playerNode.getComponent(cc.RigidBody);
    this.heroAni = this.playerNode.getComponent(cc.Animation); // 加速度方向开关

    this._dir = ' '; //主角默认动画

    this.anima = 'idle'; //获取npc的位置

    this.npcs = cc.find("Canvas/background/npcs"); //是否可以进行一个交谈

    this.canTalk = false;
    console.log("enterGame:" + window.player.enterGame);
    this.currentScene = cc.director.getScene()._name;

    if (window.player.enterGame) {
      window.player.enterGame = false;
      this.playerNode.setPosition(window.player['pos_X'], window.player['pos_Y']);
      console.log("playerPos" + this.playerNode.position);
    } // 场景中，离开场景
    else if (window.playerPosition[this.currentScene] != null) {
      var pos = window.playerPosition[this.currentScene];
      this.playerNode.setPosition(pos.x, pos.y);
      console.log("playerPos" + this.playerNode.position);
    }

    console.log("x:" + this.playerNode.x);
    console.log("y:" + this.playerNode.y);
  },
  onLoad: function onLoad() {
    console.log(window.player.enterGame);
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
    console.log("this.node pos" + this.playerNode.position);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvcGxheWVyX2N0cmxfcGMgLSAwMDEuanMiXSwibmFtZXMiOlsiU3RhdGUiLCJtb3ZlIiwiYXR0YWNrIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtb3ZlTWF4c3BlZWQiLCJwbGF5ZXJTcGVlZCIsImp1bXBTcGVlZCIsImp1bXBIZWlnaHQiLCJwbGF5ZXJOb2RlIiwiTm9kZSIsImluaXRIZXJvIiwiZmluZCIsInJpZ2lkIiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiaGVyb0FuaSIsIkFuaW1hdGlvbiIsIl9kaXIiLCJhbmltYSIsIm5wY3MiLCJjYW5UYWxrIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInBsYXllciIsImVudGVyR2FtZSIsImN1cnJlbnRTY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJfbmFtZSIsInNldFBvc2l0aW9uIiwicG9zaXRpb24iLCJwbGF5ZXJQb3NpdGlvbiIsInBvcyIsIngiLCJ5Iiwib25Mb2FkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwibm9kZSIsIk1PVVNFX0RPV04iLCJvbk1vdXNlRG93biIsIm9uRGVzdHJveSIsIm9mZiIsInN0YXJ0Iiwib25CZWdpbkNvbnRhY3QiLCJjb250YWN0Iiwic2VsZkNvbGxpZGVyIiwib3RoZXJDb2xsaWRlciIsInRhZyIsImNhbkp1bXAiLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJsZWZ0IiwiZCIsInJpZ2h0IiwidyIsInVwIiwicyIsImRvd24iLCJoZXJvTW92ZSIsImx2IiwibGluZWFyVmVsb2NpdHkiLCJzY2FsZVgiLCJNYXRoIiwiYWJzIiwic2V0QW5pIiwicGxheSIsInVwZGF0ZSIsImR0IiwiQmFnQmFja2dyb3VuZCIsImFjdGl2ZSIsIkdsb2JhbCIs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TCxDQUFZekQsS0FBWjtFQUNILENBcEtJO0VBc0tMeUQsTUF0S0ssa0JBc0tFekQsS0F0S0YsRUFzS1M7SUFDVixJQUFJLEtBQUtBLEtBQUwsSUFBY0EsS0FBbEIsRUFBeUI7TUFDckI7SUFDSCxDQUZELE1BR0s7TUFDRCxLQUFLQSxLQUFMLEdBQWFBLEtBQWI7TUFDQSxLQUFLSCxPQUFMLENBQWE2RCxJQUFiLENBQWtCMUQsS0FBbEI7SUFDSDtFQUNKLENBOUtJO0VBa0xMMkQsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsSUFBSXZELE1BQU0sQ0FBQ3dELGFBQVAsSUFBd0J4RCxNQUFNLENBQUN3RCxhQUFQLENBQXFCQyxNQUFyQixJQUE4QixJQUF2RCxJQUNDQyxNQUFNLENBQUNDLE1BQVAsSUFBaUJELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRixNQUFkLElBQXdCLElBRDdDLEVBQ2tEO01BQzlDO0lBQ0g7O0lBQ0QsS0FBS1gsUUFBTDtFQUVIO0FBekxJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN0YXRlID0ge1xuICAgIG1vdmU6IDEsXG4gICAgYXR0YWNrOiAyLFxufTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbW92ZU1heHNwZWVkOiAwLCAgICAvL+acgOWkp+enu+WKqOmAn+W6plxuICAgICAgICBwbGF5ZXJTcGVlZDogMCxcbiAgICAgICAganVtcFNwZWVkOiAwLFxuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxuICAgICAgICBwbGF5ZXJOb2RlIDpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBpbml0SGVybygpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOb2RlID0gY2MuZmluZChcIkNhbnZhcy9iZy9wbGF5ZXJcIik7XG5cblxuICAgICAgICB0aGlzLnJpZ2lkID0gdGhpcy5wbGF5ZXJOb2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICB0aGlzLmhlcm9BbmkgPSB0aGlzLnBsYXllck5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG5cblxuICAgICAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNcbiAgICAgICAgdGhpcy5fZGlyID0gJyAnO1xuXG4gICAgICAgIC8v5Li76KeS6buY6K6k5Yqo55S7XG4gICAgICAgIHRoaXMuYW5pbWEgPSAnaWRsZSc7XG5cbiAgICAgICAgLy/ojrflj5ZucGPnmoTkvY3nva5cbiAgICAgICAgdGhpcy5ucGNzID0gY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kL25wY3NcIik7XG5cbiAgICAgICAgLy/mmK/lkKblj6/ku6Xov5vooYzkuIDkuKrkuqTosIhcbiAgICAgICAgdGhpcy5jYW5UYWxrID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJHYW1lOlwiK3dpbmRvdy5wbGF5ZXIuZW50ZXJHYW1lKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lO1xuXG4gICAgICAgIGlmKHdpbmRvdy5wbGF5ZXIuZW50ZXJHYW1lICl7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyLmVudGVyR2FtZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnNldFBvc2l0aW9uKHdpbmRvdy5wbGF5ZXJbJ3Bvc19YJ10sd2luZG93LnBsYXllclsncG9zX1knXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllclBvc1wiK3RoaXMucGxheWVyTm9kZS5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Zy65pmv5Lit77yM56a75byA5Zy65pmvXG4gICAgICAgIGVsc2UgaWYod2luZG93LnBsYXllclBvc2l0aW9uW3RoaXMuY3VycmVudFNjZW5lXSE9bnVsbCl7XG4gICAgICAgICAgICBsZXQgcG9zID0gd2luZG93LnBsYXllclBvc2l0aW9uW3RoaXMuY3VycmVudFNjZW5lXVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnNldFBvc2l0aW9uKHBvcy54LHBvcy55KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyUG9zXCIrdGhpcy5wbGF5ZXJOb2RlLnBvc2l0aW9uKTtcbiAgICAgICAgfSAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIng6XCIrdGhpcy5wbGF5ZXJOb2RlLngpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInk6XCIrdGhpcy5wbGF5ZXJOb2RlLnkpO1xuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5wbGF5ZXIuZW50ZXJHYW1lKTtcbiAgICAgICAgdGhpcy5pbml0SGVybygpO1xuXG4gICAgICAgIC8vIOebkeWQrOmUruebmOaTjeS9nFxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcblxuICAgICAgICAvL+ebkeWQrOm8oOagh+S6i+S7tiBcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xuXG4gICAgfSxcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy/lr7nplK7nm5jnm5HlkKzkuovku7bop6Pnu5FcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcbiAgICB9LFxuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm5vZGUgcG9zXCIrIHRoaXMucGxheWVyTm9kZS5wb3NpdGlvbik7XG4gICAgfSxcblxuICAgIC8vIOeisOaSnuajgOa1i1xuICAgIG9uQmVnaW5Db250YWN0OiBmdW5jdGlvbiAoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIGlmIChzZWxmQ29sbGlkZXIudGFnID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGZDb2xsaWRlci50YWcpO1xuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8vIOm8oOagh+S6i+S7tuebkeWQrFxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgIH0sXG5cblxuXG4gICAgLy/plK7nm5jkuovku7bnm5HlkKxcbiAgICBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgLy8gc2V0IGEgZmxhZyB3aGVuIGtleSBwcmVzc2VkXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZG93blwiKTtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyID0gJ2xlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxuICAgICAgICAgICAgICAgIHRoaXMuX2RpciA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyID0gJ3VwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxuICAgICAgICAgICAgICAgIHRoaXMuX2RpciA9ICdkb3duJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbktleVVwKGV2ZW50KSB7XG4gICAgICAgIC8vIHVuc2V0IGEgZmxhZyB3aGVuIGtleSByZWxlYXNlZFxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgIHRoaXMuX2RpciA9ICcgJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXIgPSAnICc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyID0gJyAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyID0gJyAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgLy/ojrflj5ZucGMg5ZKM6K6h566XbnBj6Led56a7XG5cbiAgICAvL+S6uueJqeenu+WKqFxuICAgIGhlcm9Nb3ZlKCkge1xuICAgICAgICBsZXQgbHYgPSB0aGlzLnJpZ2lkLmxpbmVhclZlbG9jaXR5O1xuICAgICAgICBsZXQgc2NhbGVYID0gTWF0aC5hYnModGhpcy5ub2RlLnNjYWxlWCk7XG4gICAgICAgIGxldCBhbmltYSA9IHRoaXMuYW5pbWE7XG4gICAgICAgIHN3aXRjaCAodGhpcy5fZGlyKSB7XG4gICAgICAgICAgICBjYXNlICdsZWZ0Jzoge1xuICAgICAgICAgICAgICAgIGx2LnggPSAtdGhpcy5wbGF5ZXJTcGVlZDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2NhbGVYID0gLXNjYWxlWDtcbiAgICAgICAgICAgICAgICBhbmltYSA9ICdydW5sZWZ0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xuICAgICAgICAgICAgICAgIGx2LnggPSB0aGlzLnBsYXllclNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSBzY2FsZVg7XG4gICAgICAgICAgICAgICAgYW5pbWEgPSAncnVucmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGFuaW1hID0gJ2lkbGUnO1xuICAgICAgICAgICAgICAgIGx2LnggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGx2O1xuICAgICAgICB0aGlzLnNldEFuaShhbmltYSk7XG4gICAgfSxcblxuICAgIHNldEFuaShhbmltYSkge1xuICAgICAgICBpZiAodGhpcy5hbmltYSA9PSBhbmltYSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbmltYSA9IGFuaW1hO1xuICAgICAgICAgICAgdGhpcy5oZXJvQW5pLnBsYXkoYW5pbWEpO1xuICAgICAgICB9XG4gICAgfSxcblxuXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZigod2luZG93LkJhZ0JhY2tncm91bmQgJiYgd2luZG93LkJhZ0JhY2tncm91bmQuYWN0aXZlID09dHJ1ZSl8fFxuICAgICAgICAgICAgR2xvYmFsLmdhbWVCZyAmJiBHbG9iYWwuZ2FtZUJnLmFjdGl2ZSA9PSB0cnVlKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhlcm9Nb3ZlKCk7XG5cbiAgICB9LFxuXG59KTtcbiJdfQ==
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
  // 序章游戏
  chp1_序章电闸: "chp1_序章",
  // 第一章游戏索引
  chp1_302_1_lamp: "chp1_302",
  chp1_302_2_lock: "chp1_302",
  chp1_302_柜子大图: "chp1_302",
  chp1_302_数字大图: "chp1_302",
  chp1_301_大图数字: "chp1_301",
  chp1_301_1_cloth: "chp1_301",
  chp1_zoulang_1_lock: "chp1_zoulangF1",
  // 舍管房间
  chp1_舍管房间石头大图: "chp1_舍管房间",
  // 三楼走廊解锁场景
  chp1_三楼走廊解锁: "chp1_三楼走廊",
  chp1_203_1_cup: "chp1_203",
  chp1_203_1_washingMachine: "chp1_203",
  chp1_201_1_findout: "chp1_201",
  // 二楼走廊场景
  F1orF2: "chp1_二楼走廊" // 第二章游戏索引
  // 第三章游戏索引
  // 第四章游戏索引

}; // 楼梯间的锁

window.lockOfStairsInCP1F3 = false; // 衣柜的密码锁

window.lockOfClosetInCP1 = false;
window.lockOfSwitchInCP1 = false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vZ2FtZUluZm8uanMiXSwibmFtZXMiOlsid2luZG93IiwiZ2FtZXMiLCJjaHAxX+W6j+eroOeUtemXuCIsImNocDFfMzAyXzFfbGFtcCIsImNocDFfMzAyXzJfbG9jayIsImNocDFfMzAyX+afnOWtkOWkp+WbviIsImNocDFfMzAyX+aVsOWtl+Wkp+WbviIsImNocDFfMzAxX+Wkp+WbvuaVsOWtlyIsImNocDFfMzAxXzFfY2xvdGgiLCJjaHAxX3pvdWxhbmdfMV9sb2NrIiwiY2hwMV/oiI3nrqHmiL/pl7Tnn7PlpLTlpKflm74iLCJjaHAxX+S4iealvOi1sOW7iuino+mUgSIsImNocDFfMjAzXzFfY3VwIiwiY2hwMV8yMDNfMV93YXNoaW5nTWFjaGluZSIsImNocDFfMjAxXzFfZmluZG91dCIsIkYxb3JGMiIsImxvY2tPZlN0YWlyc0luQ1AxRjMiLCJsb2NrT2ZDbG9zZXRJbkNQMSIsImxvY2tPZlN3aXRjaEluQ1AxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlO0VBQ2I7RUFDQTtFQUNBO0VBRUE7RUFDQUMsU0FBUyxFQUFDLFNBTkc7RUFRYjtFQUNBQyxlQUFlLEVBQUUsVUFUSjtFQVdiQyxlQUFlLEVBQUUsVUFYSjtFQWFiQyxhQUFhLEVBQUMsVUFiRDtFQWViQyxhQUFhLEVBQUMsVUFmRDtFQWlCYkMsYUFBYSxFQUFDLFVBakJEO0VBbUJiQyxnQkFBZ0IsRUFBQyxVQW5CSjtFQXFCYkMsbUJBQW1CLEVBQUUsZ0JBckJSO0VBdUJiO0VBQ0FDLGFBQWEsRUFBQyxXQXhCRDtFQTBCYjtFQUNBQyxXQUFXLEVBQUMsV0EzQkM7RUE2QmJDLGNBQWMsRUFBRSxVQTdCSDtFQStCYkMseUJBQXlCLEVBQUUsVUEvQmQ7RUFpQ2JDLGtCQUFrQixFQUFFLFVBakNQO0VBbUNiO0VBQ0FDLE1BQU0sRUFBRyxXQXBDSSxDQXVDYjtFQUVBO0VBRUE7O0FBM0NhLENBQWYsRUErQ0E7O0FBQ0FmLE1BQU0sQ0FBQ2dCLG1CQUFQLEdBQTZCLEtBQTdCLEVBR0E7O0FBQ0FoQixNQUFNLENBQUNpQixpQkFBUCxHQUEyQixLQUEzQjtBQUVBakIsTUFBTSxDQUFDa0IsaUJBQVAsR0FBMkIsS0FBM0IiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOesrOS4gOeroOa4uOaIj+e0ouW8lVxyXG53aW5kb3cuZ2FtZXMgPSB7XHJcbiAgLy8g5ri45oiP57Si5byV5qC85byPIOWwj+a4uOaIj+WcuuaZrzrljp/lnLrmma9cclxuICAvLyDlsI/muLjmiI/lnLrmma/moLzlvI86IGUuZzogXCJjaHAxX3NjZW5lMV8xX2dhbWUxXCIg6KGo56S6IGNoYXB0ZXIx55qEc2NlbmUx55qE56ysMeWPt+a4uOaIj++8jOWQjeWtl+WPq+WBmmdhbWUxXHJcbiAgLy8g5Y6f5Zy65pmv5qC85byPOiDnq6DoioLlj7df5Zy65pmv5ZCNXHJcblxyXG4gIC8vIOW6j+eroOa4uOaIj1xyXG4gIGNocDFf5bqP56ug55S16Ze4OlwiY2hwMV/luo/nq6BcIixcclxuXHJcbiAgLy8g56ys5LiA56ug5ri45oiP57Si5byVXHJcbiAgY2hwMV8zMDJfMV9sYW1wOiBcImNocDFfMzAyXCIsXHJcblxyXG4gIGNocDFfMzAyXzJfbG9jazogXCJjaHAxXzMwMlwiLFxyXG5cclxuICBjaHAxXzMwMl/mn5zlrZDlpKflm746XCJjaHAxXzMwMlwiLFxyXG5cclxuICBjaHAxXzMwMl/mlbDlrZflpKflm746XCJjaHAxXzMwMlwiLFxyXG5cclxuICBjaHAxXzMwMV/lpKflm77mlbDlrZc6XCJjaHAxXzMwMVwiLFxyXG5cclxuICBjaHAxXzMwMV8xX2Nsb3RoOlwiY2hwMV8zMDFcIixcclxuXHJcbiAgY2hwMV96b3VsYW5nXzFfbG9jazogXCJjaHAxX3pvdWxhbmdGMVwiLFxyXG5cclxuICAvLyDoiI3nrqHmiL/pl7RcclxuICBjaHAxX+iIjeeuoeaIv+mXtOefs+WktOWkp+WbvjpcImNocDFf6IiN566h5oi/6Ze0XCIsXHJcblxyXG4gIC8vIOS4iealvOi1sOW7iuino+mUgeWcuuaZr1xyXG4gIGNocDFf5LiJ5qW86LWw5buK6Kej6ZSBOlwiY2hwMV/kuInmpbzotbDlu4pcIixcclxuXHJcbiAgY2hwMV8yMDNfMV9jdXA6IFwiY2hwMV8yMDNcIixcclxuXHJcbiAgY2hwMV8yMDNfMV93YXNoaW5nTWFjaGluZTogXCJjaHAxXzIwM1wiLFxyXG5cclxuICBjaHAxXzIwMV8xX2ZpbmRvdXQ6IFwiY2hwMV8yMDFcIixcclxuXHJcbiAgLy8g5LqM5qW86LWw5buK5Zy65pmvXHJcbiAgRjFvckYyIDogXCJjaHAxX+S6jOalvOi1sOW7ilwiXHJcblxyXG5cclxuICAvLyDnrKzkuoznq6DmuLjmiI/ntKLlvJVcclxuXHJcbiAgLy8g56ys5LiJ56ug5ri45oiP57Si5byVXHJcblxyXG4gIC8vIOesrOWbm+eroOa4uOaIj+e0ouW8lVxyXG59O1xyXG5cclxuXHJcbi8vIOalvOair+mXtOeahOmUgVxyXG53aW5kb3cubG9ja09mU3RhaXJzSW5DUDFGMyA9IGZhbHNlO1xyXG5cclxuXHJcbi8vIOiho+afnOeahOWvhueggemUgVxyXG53aW5kb3cubG9ja09mQ2xvc2V0SW5DUDEgPSBmYWxzZTtcclxuXHJcbndpbmRvdy5sb2NrT2ZTd2l0Y2hJbkNQMSA9IGZhbHNlOyJdfQ==
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
    cc.director.getPhysicsManager().gravity = cc.v2(0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvZ2FtZSAtIDAwMS5qcyJdLCJuYW1lcyI6WyJpbkFyciIsImNsb3NlSXRlbSIsImRvb3IiLCJnaG9zdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWFwTm9kZXMiLCJOb2RlIiwidXNlSXRlbSIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiZGVidWdEcmF3RmxhZ3MiLCJncmF2aXR5IiwidjIiLCJ3aW5kb3ciLCJHbG9iYWwiLCJJc1Nob3dpbmciLCJJbkFyciIsIkNsb3NlSXRlbSIsImNvbnRhY3QiLCJpZCIsImN1cnJlbnRTY2VuZSIsIlN0cmluZyIsIml0ZW1UeXBlIiwiaXRlbU5hbWUiLCJucGNzTWFwIiwiTWFwIiwiZ2FtZUJnIiwiaXRlbXNNYXAiLCJkb29yc01hcCIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImdldFNjZW5lIiwiX25hbWUiLCJpbml0U2NlbmVzIiwiaW5pdEFsbE5vZGVzIiwiaW5pdFBhdGhzIiwiaW5pdFRpcHMiLCJpbml0TWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVo7QUFDQSxJQUFJQyxTQUFTLEdBQUc7RUFDWkMsSUFBSSxFQUFFLENBRE07RUFFWkMsS0FBSyxFQUFFO0FBRkssQ0FBaEI7QUFJQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxJQURMO0lBRVJDLE9BQU8sRUFBRU4sRUFBRSxDQUFDSztFQUZKLENBSFA7RUFRTDtFQUdBRSxNQVhLLG9CQVdJO0lBQ0xQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ0MsT0FBaEMsR0FBMEMsSUFBMUM7SUFDQVYsRUFBRSxDQUFDUSxRQUFILENBQVlDLGlCQUFaLEdBQWdDRSxjQUFoQyxHQUFpRCxDQUFqRDtJQUNBWCxFQUFFLENBQUNRLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NHLE9BQWhDLEdBQTBDWixFQUFFLENBQUNhLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVCxDQUExQztJQUNBQyxNQUFNLENBQUNDLE1BQVAsR0FBZ0I7TUFDWkMsU0FBUyxFQUFFLElBREM7TUFFWkMsS0FBSyxFQUFFLElBRks7TUFHWkMsU0FBUyxFQUFFLElBSEM7TUFJWkMsT0FBTyxFQUFFLElBSkc7TUFLWkMsRUFBRSxFQUFFLElBTFE7TUFNWkMsWUFBWSxFQUFDQyxNQU5EO01BT1pDLFFBQVEsRUFBQ0QsTUFQRztNQVFaRSxRQUFRLEVBQUNGLE1BUkc7TUFTWkcsT0FBTyxFQUFFQyxHQVRHO01BVVpDLE1BQU0sRUFBQzNCLEVBQUUsQ0FBQ0ssSUFWRTtNQVdadUIsUUFBUSxFQUFFRixHQVhFO01BWVpHLFFBQVEsRUFBRUg7SUFaRSxDQUFoQjtFQWNILENBN0JJO0VBK0JMSSxLQS9CSyxtQkErQkc7SUFDSkMsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtJQUNBakIsTUFBTSxDQUFDQyxTQUFQLEdBQW1CLEtBQW5CO0lBQ0FELE1BQU0sQ0FBQ0UsS0FBUCxHQUFlckIsS0FBZjtJQUNBbUIsTUFBTSxDQUFDRyxTQUFQLEdBQW1CckIsU0FBbkI7SUFDQWtCLE1BQU0sQ0FBQ0ksT0FBUCxHQUFpQixHQUFqQjtJQUNBSixNQUFNLENBQUNLLEVBQVAsR0FBWSxDQUFaO0lBQ0FMLE1BQU0sQ0FBQ1EsUUFBUCxHQUFpQixHQUFqQjtJQUNBUixNQUFNLENBQUNTLFFBQVAsR0FBaUIsR0FBakI7SUFDQVQsTUFBTSxDQUFDTSxZQUFQLEdBQXNCckIsRUFBRSxDQUFDUSxRQUFILENBQVl5QixRQUFaLEdBQXVCQyxLQUE3QztJQUNBSCxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE1BQU0sQ0FBQ00sWUFBbkI7SUFDQSxLQUFLYyxVQUFMO0lBQ0EsS0FBS0MsWUFBTDtJQUNBLEtBQUtDLFNBQUw7SUFDQSxLQUFLQyxRQUFMLEdBZEksQ0FlSjtFQUNILENBL0NJO0VBaURMO0VBQ0FILFVBbERLLHdCQWtETyxDQUNYLENBbkRJO0VBcURMO0VBQ0FDLFlBdERLLDBCQXNEVSxDQUNkLENBdkRJO0VBMERMO0VBQ0FDLFNBM0RLLHVCQTJETyxDQUVYLENBN0RJO0VBK0RMO0VBQ0FDLFFBaEVLLHNCQWdFTSxDQUNWLENBakVJO0VBbUVMQyxPQW5FSyxxQkFtRUssQ0FDVDtBQXBFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5sZXQgaW5BcnIgPSBbMCwgMF07XG5sZXQgY2xvc2VJdGVtID0ge1xuICAgIGRvb3I6IDAsXG4gICAgZ2hvc3Q6IDEsXG59XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtYXBOb2RlczogY2MuTm9kZSxcbiAgICAgICAgdXNlSXRlbTogY2MuTm9kZVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMDtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwgMCk7XG4gICAgICAgIHdpbmRvdy5HbG9iYWwgPSB7XG4gICAgICAgICAgICBJc1Nob3dpbmc6IG51bGwsXG4gICAgICAgICAgICBJbkFycjogbnVsbCxcbiAgICAgICAgICAgIENsb3NlSXRlbTogbnVsbCxcbiAgICAgICAgICAgIGNvbnRhY3Q6IG51bGwsXG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGN1cnJlbnRTY2VuZTpTdHJpbmcsXG4gICAgICAgICAgICBpdGVtVHlwZTpTdHJpbmcsXG4gICAgICAgICAgICBpdGVtTmFtZTpTdHJpbmcsXG4gICAgICAgICAgICBucGNzTWFwOiBNYXAsXG4gICAgICAgICAgICBnYW1lQmc6Y2MuTm9kZSxcbiAgICAgICAgICAgIGl0ZW1zTWFwOiBNYXAsXG4gICAgICAgICAgICBkb29yc01hcDogTWFwLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0XCIpO1xuICAgICAgICBHbG9iYWwuSXNTaG93aW5nID0gZmFsc2U7XG4gICAgICAgIEdsb2JhbC5JbkFyciA9IGluQXJyO1xuICAgICAgICBHbG9iYWwuQ2xvc2VJdGVtID0gY2xvc2VJdGVtO1xuICAgICAgICBHbG9iYWwuY29udGFjdCA9ICcgJztcbiAgICAgICAgR2xvYmFsLmlkID0gMDtcbiAgICAgICAgR2xvYmFsLml0ZW1UeXBlPSAnICc7XG4gICAgICAgIEdsb2JhbC5pdGVtTmFtZT0gJyAnO1xuICAgICAgICBHbG9iYWwuY3VycmVudFNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5fbmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coR2xvYmFsLmN1cnJlbnRTY2VuZSk7XG4gICAgICAgIHRoaXMuaW5pdFNjZW5lcygpO1xuICAgICAgICB0aGlzLmluaXRBbGxOb2RlcygpO1xuICAgICAgICB0aGlzLmluaXRQYXRocygpO1xuICAgICAgICB0aGlzLmluaXRUaXBzKCk7XG4gICAgICAgIC8vIHRoaXMuaW5pdE1hcCh0aGlzLm1hcE5vZGVzKTtcbiAgICB9LFxuXG4gICAgLy/liqDovb3lnLrmma/lkozpl6jkuYvpl7TnmoTlr7nlupTlhbPns7tcbiAgICBpbml0U2NlbmVzKCl7XG4gICAgfSxcblxuICAgIC8v6YeN5paw5Yqg6L295Zy65pmv77yM5oGi5aSN5Y6f5YWI55qE54mp5ZOB54q25oCBXG4gICAgaW5pdEFsbE5vZGVzKCkge1xuICAgIH0sXG4gICAgXG5cbiAgICAvL+iusOW9leaJgOacieeahOiKgueCuei3r+W+hO+8jOWPr+mAiVxuICAgIGluaXRQYXRocygpIHtcblxuICAgIH0sXG5cbiAgICAvL+WIneWni+WMluW8ueeql+eahOeKtuaAgVxuICAgIGluaXRUaXBzKCkge1xuICAgIH0sXG5cbiAgICBpbml0TWFwKCkge1xuICAgIH0sXG5cbn0pO1xuIl19
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
};
var chp1_302_items = {
  "背包": {
    name: "背包",
    used: false,
    tool: "卷轴晾衣杆",
    //对应的应该使用的工具
    usedInfo: '请使用背包中的工具进行操作',
    notUsedInfo: "洗衣机已经被使用了"
  }
}; // 第一章 一楼大厅

var chp1_HallF1_items = {
  "F1宿管房门": {
    name: "F1宿管房门",
    used: false,
    tool: "钥匙",
    //对应的应该使用的工具
    usedInfo: '请使用钥匙打开宿管房间的门',
    notUsedInfo: "宿管房间的门已经打开"
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
  "chp1_302": chp1_302_items,
  "chp1_一楼大厅": chp1_HallF1_items
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vSXRlbUluZm8uanMiXSwibmFtZXMiOlsid2luZG93IiwiY2hwMV9zY2VuZTFfaXRlbXMiLCJuYW1lIiwidXNlZCIsInRvb2wiLCJ1c2VkSW5mbyIsIm5vdFVzZWRJbmZvIiwiY2hwMV8zMDJfaXRlbXMiLCJjaHAxX0hhbGxGMV9pdGVtcyIsImNocDJfc2NlbmUxX2l0ZW1zIiwiSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsaUJBQVAsR0FBMkI7RUFDdkIsa0JBQ0E7SUFDSUMsSUFBSSxFQUFDLGdCQURUO0lBRUlDLElBQUksRUFBQyxLQUZUO0lBR0lDLElBQUksRUFBQyxJQUhUO0lBR2tCO0lBQ2RDLFFBQVEsRUFBQyxlQUpiO0lBS0lDLFdBQVcsRUFBQztFQUxoQixDQUZ1QjtFQVN2QixRQUNBO0lBQ0lKLElBQUksRUFBQyxNQURUO0lBRUlDLElBQUksRUFBQyxLQUZUO0lBR0lDLElBQUksRUFBQyxJQUhUO0lBR2tCO0lBQ2RDLFFBQVEsRUFBQyxlQUpiO0lBS0lDLFdBQVcsRUFBQztFQUxoQjtBQVZ1QixDQUEzQjtBQW1CQSxJQUFJQyxjQUFjLEdBQUc7RUFDakIsTUFDQTtJQUNJTCxJQUFJLEVBQUMsSUFEVDtJQUVJQyxJQUFJLEVBQUMsS0FGVDtJQUdJQyxJQUFJLEVBQUMsT0FIVDtJQUdxQjtJQUNqQkMsUUFBUSxFQUFDLGVBSmI7SUFLSUMsV0FBVyxFQUFDO0VBTGhCO0FBRmlCLENBQXJCLEVBWUE7O0FBQ0EsSUFBSUUsaUJBQWlCLEdBQUc7RUFDcEIsVUFDQTtJQUNJTixJQUFJLEVBQUMsUUFEVDtJQUVJQyxJQUFJLEVBQUMsS0FGVDtJQUdJQyxJQUFJLEVBQUMsSUFIVDtJQUdrQjtJQUNkQyxRQUFRLEVBQUMsZUFKYjtJQUtJQyxXQUFXLEVBQUM7RUFMaEI7QUFGb0IsQ0FBeEIsRUFVQTtBQUNBOztBQUNBTixNQUFNLENBQUNTLGlCQUFQLEdBQTJCO0VBQ3ZCLGtCQUNBO0lBQ0lQLElBQUksRUFBQyxnQkFEVDtJQUVJQyxJQUFJLEVBQUMsS0FGVDtJQUdJQyxJQUFJLEVBQUMsSUFIVDtJQUdrQjtJQUNkQyxRQUFRLEVBQUMsZUFKYjtJQUtJQyxXQUFXLEVBQUM7RUFMaEI7QUFGdUIsQ0FBM0I7QUFXQU4sTUFBTSxDQUFDVSxLQUFQLEdBQWU7RUFDWCxZQUFZSCxjQUREO0VBRVgsYUFBWUM7QUFGRCxDQUFmIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuY2hwMV9zY2VuZTFfaXRlbXMgPSB7XG4gICAgXCJ3YXNoaW5nTWFjaGluZVwiOlxuICAgIHtcbiAgICAgICAgbmFtZTpcIndhc2hpbmdNYWNoaW5lXCIsXG4gICAgICAgIHVzZWQ6ZmFsc2UsXG4gICAgICAgIHRvb2w6XCLljbfovbRcIiwgICAgLy/lr7nlupTnmoTlupTor6Xkvb/nlKjnmoTlt6XlhbdcbiAgICAgICAgdXNlZEluZm86J+ivt+S9v+eUqOiDjOWMheS4reeahOW3peWFt+i/m+ihjOaTjeS9nCcsXG4gICAgICAgIG5vdFVzZWRJbmZvOlwi5rSX6KGj5py65bey57uP6KKr5L2/55So5LqGXCJcbiAgICB9LFxuICAgIFwibGFtcFwiOlxuICAgIHtcbiAgICAgICAgbmFtZTpcImxhbXBcIixcbiAgICAgICAgdXNlZDpmYWxzZSxcbiAgICAgICAgdG9vbDpcIuWNt+i9tFwiLCAgICAvL+WvueW6lOeahOW6lOivpeS9v+eUqOeahOW3peWFt1xuICAgICAgICB1c2VkSW5mbzon6K+35L2/55So6IOM5YyF5Lit55qE5bel5YW36L+b6KGM5pON5L2cJyxcbiAgICAgICAgbm90VXNlZEluZm86XCLmtJfooaPmnLrlt7Lnu4/ooqvkvb/nlKjkuoZcIlxuICAgIH1cbn1cblxubGV0IGNocDFfMzAyX2l0ZW1zID0ge1xuICAgIFwi6IOM5YyFXCI6XG4gICAge1xuICAgICAgICBuYW1lOlwi6IOM5YyFXCIsXG4gICAgICAgIHVzZWQ6ZmFsc2UsXG4gICAgICAgIHRvb2w6XCLljbfovbTmmb7ooaPmnYZcIiwgICAgLy/lr7nlupTnmoTlupTor6Xkvb/nlKjnmoTlt6XlhbdcbiAgICAgICAgdXNlZEluZm86J+ivt+S9v+eUqOiDjOWMheS4reeahOW3peWFt+i/m+ihjOaTjeS9nCcsXG4gICAgICAgIG5vdFVzZWRJbmZvOlwi5rSX6KGj5py65bey57uP6KKr5L2/55So5LqGXCJcbiAgICB9LFxufVxuXG5cbi8vIOesrOS4gOeroCDkuIDmpbzlpKfljoVcbmxldCBjaHAxX0hhbGxGMV9pdGVtcyA9IHtcbiAgICBcIkYx5a6/566h5oi/6ZeoXCI6XG4gICAge1xuICAgICAgICBuYW1lOlwiRjHlrr/nrqHmiL/pl6hcIixcbiAgICAgICAgdXNlZDpmYWxzZSxcbiAgICAgICAgdG9vbDpcIumSpeWMmVwiLCAgICAvL+WvueW6lOeahOW6lOivpeS9v+eUqOeahOW3peWFt1xuICAgICAgICB1c2VkSW5mbzon6K+35L2/55So6ZKl5YyZ5omT5byA5a6/566h5oi/6Ze055qE6ZeoJyxcbiAgICAgICAgbm90VXNlZEluZm86XCLlrr/nrqHmiL/pl7TnmoTpl6jlt7Lnu4/miZPlvIBcIlxuICAgIH0sXG59XG4vLyDnrKzkuoznq6DlnLrmma/nianlk4Fcbi8vIOesrOS6jOeroCDlnLrmma8xIOeJqeWTgVxud2luZG93LmNocDJfc2NlbmUxX2l0ZW1zID0ge1xuICAgIFwid2FzaGluZ01hY2hpbmVcIjpcbiAgICB7XG4gICAgICAgIG5hbWU6XCJ3YXNoaW5nTWFjaGluZVwiLFxuICAgICAgICB1c2VkOmZhbHNlLFxuICAgICAgICB0b29sOlwi5Y236L20XCIsICAgIC8v5a+55bqU55qE5bqU6K+l5L2/55So55qE5bel5YW3XG4gICAgICAgIHVzZWRJbmZvOifor7fkvb/nlKjog4zljIXkuK3nmoTlt6Xlhbfov5vooYzmk43kvZwnLFxuICAgICAgICBub3RVc2VkSW5mbzpcIua0l+iho+acuuW3sue7j+iiq+S9v+eUqOS6hlwiXG4gICAgfVxufVxuXG53aW5kb3cuSXRlbXMgPSB7XG4gICAgXCJjaHAxXzMwMlwiOiBjaHAxXzMwMl9pdGVtcyxcbiAgICBcImNocDFf5LiA5qW85aSn5Y6FXCI6Y2hwMV9IYWxsRjFfaXRlbXMsXG59XG4iXX0=
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

var _window$playerPositio;

// 序章的门
// let chp1_xuzhang_doors = {
//   door1 : "chp1_舍管房间",
// };
// 第一章的门
var chp1_303_doors = {
  door1: "chp1_三楼走廊"
};
var chp1_302_doors = {
  door1: "chp1_三楼走廊"
};
var chp1_301_doors = {
  door1: "chp1_三楼走廊"
};
var chp1_201_doors = {
  door1: "chp1_二楼走廊"
};
var chp1_202_doors = {
  door1: "chp1_二楼走廊"
};
var chp1_203_doors = {
  door1: "chp1_二楼走廊"
};
var chp1_zoulangF3_doors = {
  door1: "chp1_301",
  door2: "chp1_302",
  door3: "chp1_303",
  door4: "chp1_二楼走廊"
};
var chp1_zoulangF2_doors = {
  door1: "chp1_201",
  door2: "chp1_202",
  door3: "chp1_203",
  door4: "F1orF2"
};
var chp1_hallF1doors = {
  door1: "chp1_舍管房间",
  door2: "chp2_scene1",
  door3: "chp1_二楼走廊"
};
var chp1_sheguanF1doors = {
  door1: "chp1_一楼大厅"
};
var chp2_scene1_doors = {};
window.scenes = {
  // 序章
  // chp1_序章:chp1_xuzhang_doors,
  // chapter 1 scene1
  chp1_303: chp1_303_doors,
  chp1_302: chp1_302_doors,
  chp1_301: chp1_301_doors,
  chp1_201: chp1_201_doors,
  chp1_202: chp1_202_doors,
  chp1_203: chp1_203_doors,
  chp1_三楼走廊: chp1_zoulangF3_doors,
  chp1_二楼走廊: chp1_zoulangF2_doors,
  chp1_一楼大厅: chp1_hallF1doors,
  chp1_舍管房间: chp1_sheguanF1doors
};
window.player = {
  pos_X: 100.743,
  pos_Y: 90.511,
  enterGame: false,
  previousScene: "",
  previousDoor: "",
  rememerPosOfDoor: false
};
window.pos_chp1_三楼走廊 = {
  '301': cc.Vec2(600, 200),
  '302': cc.Vec2(1100, 200),
  '303': cc.Vec2(1500, 200),
  '三楼走廊': cc.Vec2(2100, 200)
}; // let pos_chp1_301 = {
// 	'301':cc.Vec2(1100,200),
// };
// let pos_chp1_302 = {
// 	'302':cc.Vec2(1100,200)
// };
// let pos_chp1_303 = {
// 	'303':cc.Vec2(1500,200)
// }

window.playerPosition = (_window$playerPositio = {
  // 当前的场景的门，对应的和下一个场景要主角出现的位置
  chp1_三楼走廊: null,
  chp1_301: null,
  chp1_302: null
}, _window$playerPositio["chp1_302"] = null, _window$playerPositio.chp1_303 = null, _window$playerPositio.chp1_203 = null, _window$playerPositio.chp1_202 = null, _window$playerPositio.chp1_201 = null, _window$playerPositio.chp1_二楼走廊 = null, _window$playerPositio.chp1_一楼大厅 = null, _window$playerPositio.chp1_宿管房间 = null, _window$playerPositio);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vc2NlbmVpbmZvLmpzIl0sIm5hbWVzIjpbImNocDFfMzAzX2Rvb3JzIiwiZG9vcjEiLCJjaHAxXzMwMl9kb29ycyIsImNocDFfMzAxX2Rvb3JzIiwiY2hwMV8yMDFfZG9vcnMiLCJjaHAxXzIwMl9kb29ycyIsImNocDFfMjAzX2Rvb3JzIiwiY2hwMV96b3VsYW5nRjNfZG9vcnMiLCJkb29yMiIsImRvb3IzIiwiZG9vcjQiLCJjaHAxX3pvdWxhbmdGMl9kb29ycyIsImNocDFfaGFsbEYxZG9vcnMiLCJjaHAxX3NoZWd1YW5GMWRvb3JzIiwiY2hwMl9zY2VuZTFfZG9vcnMiLCJ3aW5kb3ciLCJzY2VuZXMiLCJjaHAxXzMwMyIsImNocDFfMzAyIiwiY2hwMV8zMDEiLCJjaHAxXzIwMSIsImNocDFfMjAyIiwiY2hwMV8yMDMiLCJjaHAxX+S4iealvOi1sOW7iiIsImNocDFf5LqM5qW86LWw5buKIiwiY2hwMV/kuIDmpbzlpKfljoUiLCJjaHAxX+iIjeeuoeaIv+mXtCIsInBsYXllciIsInBvc19YIiwicG9zX1kiLCJlbnRlckdhbWUiLCJwcmV2aW91c1NjZW5lIiwicHJldmlvdXNEb29yIiwicmVtZW1lclBvc09mRG9vciIsInBvc19jaHAxX+S4iealvOi1sOW7iiIsImNjIiwiVmVjMiIsInBsYXllclBvc2l0aW9uIiwiY2hwMV/lrr/nrqHmiL/pl7QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBSUEsY0FBYyxHQUFHO0VBQ25CQyxLQUFLLEVBQUc7QUFEVyxDQUFyQjtBQUlBLElBQUlDLGNBQWMsR0FBRztFQUNuQkQsS0FBSyxFQUFHO0FBRFcsQ0FBckI7QUFJQSxJQUFJRSxjQUFjLEdBQUc7RUFDbkJGLEtBQUssRUFBRztBQURXLENBQXJCO0FBSUEsSUFBSUcsY0FBYyxHQUFHO0VBQ25CSCxLQUFLLEVBQUc7QUFEVyxDQUFyQjtBQUlBLElBQUlJLGNBQWMsR0FBRztFQUNuQkosS0FBSyxFQUFHO0FBRFcsQ0FBckI7QUFJQSxJQUFJSyxjQUFjLEdBQUc7RUFDbkJMLEtBQUssRUFBRztBQURXLENBQXJCO0FBSUEsSUFBSU0sb0JBQW9CLEdBQUc7RUFDekJOLEtBQUssRUFBRyxVQURpQjtFQUV6Qk8sS0FBSyxFQUFHLFVBRmlCO0VBR3pCQyxLQUFLLEVBQUcsVUFIaUI7RUFJekJDLEtBQUssRUFBRztBQUppQixDQUEzQjtBQU9BLElBQUlDLG9CQUFvQixHQUFHO0VBQ3pCVixLQUFLLEVBQUUsVUFEa0I7RUFFekJPLEtBQUssRUFBRSxVQUZrQjtFQUd6QkMsS0FBSyxFQUFFLFVBSGtCO0VBSXpCQyxLQUFLLEVBQUU7QUFKa0IsQ0FBM0I7QUFPQSxJQUFJRSxnQkFBZ0IsR0FBRztFQUNyQlgsS0FBSyxFQUFFLFdBRGM7RUFFckJPLEtBQUssRUFBRSxhQUZjO0VBR3JCQyxLQUFLLEVBQUU7QUFIYyxDQUF2QjtBQU1BLElBQUlJLG1CQUFtQixHQUFHO0VBQ3hCWixLQUFLLEVBQUU7QUFEaUIsQ0FBMUI7QUFNQSxJQUFJYSxpQkFBaUIsR0FBRyxFQUF4QjtBQUVBQyxNQUFNLENBQUNDLE1BQVAsR0FBZ0I7RUFDZDtFQUNBO0VBQ0E7RUFDQUMsUUFBUSxFQUFFakIsY0FKSTtFQUtka0IsUUFBUSxFQUFFaEIsY0FMSTtFQU1kaUIsUUFBUSxFQUFFaEIsY0FOSTtFQU9kaUIsUUFBUSxFQUFFaEIsY0FQSTtFQVFkaUIsUUFBUSxFQUFFaEIsY0FSSTtFQVNkaUIsUUFBUSxFQUFFaEIsY0FUSTtFQVVkaUIsU0FBUyxFQUFFaEIsb0JBVkc7RUFXZGlCLFNBQVMsRUFBRWIsb0JBWEc7RUFZZGMsU0FBUyxFQUFFYixnQkFaRztFQWFkYyxTQUFTLEVBQUViO0FBYkcsQ0FBaEI7QUFnQkFFLE1BQU0sQ0FBQ1ksTUFBUCxHQUFnQjtFQUNkQyxLQUFLLEVBQUUsT0FETztFQUVkQyxLQUFLLEVBQUUsTUFGTztFQUdkQyxTQUFTLEVBQUUsS0FIRztFQUlkQyxhQUFhLEVBQUMsRUFKQTtFQUtkQyxZQUFZLEVBQUMsRUFMQztFQU1kQyxnQkFBZ0IsRUFBQztBQU5ILENBQWhCO0FBWUFsQixNQUFNLENBQUNtQixhQUFQLEdBQXVCO0VBQ3RCLE9BQU1DLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLEdBQVIsRUFBWSxHQUFaLENBRGdCO0VBRXRCLE9BQU1ELEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLElBQVIsRUFBYSxHQUFiLENBRmdCO0VBR3RCLE9BQU1ELEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLElBQVIsRUFBYSxHQUFiLENBSGdCO0VBSXRCLFFBQU9ELEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLElBQVIsRUFBYSxHQUFiO0FBSmUsQ0FBdkIsRUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFyQixNQUFNLENBQUNzQixjQUFQO0VBQ0M7RUFDQ2QsU0FBUyxFQUFDLElBRlo7RUFJRUosUUFBUSxFQUFDLElBSlg7RUFNRUQsUUFBUSxFQUFDO0FBTlgsdUNBUVcsSUFSWCx3QkFVRUQsUUFWRixHQVVXLElBVlgsd0JBWUVLLFFBWkYsR0FZVyxJQVpYLHdCQWNFRCxRQWRGLEdBY1csSUFkWCx3QkFnQkVELFFBaEJGLEdBZ0JXLElBaEJYLHdCQWtCRUksU0FsQkYsR0FrQlksSUFsQlosd0JBb0JFQyxTQXBCRixHQW9CWSxJQXBCWix3QkFzQkVhLFNBdEJGLEdBc0JZLElBdEJaIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyDluo/nq6DnmoTpl6hcbi8vIGxldCBjaHAxX3h1emhhbmdfZG9vcnMgPSB7XG4vLyAgIGRvb3IxIDogXCJjaHAxX+iIjeeuoeaIv+mXtFwiLFxuLy8gfTtcblxuLy8g56ys5LiA56ug55qE6ZeoXG5sZXQgY2hwMV8zMDNfZG9vcnMgPSB7XG4gIGRvb3IxIDogXCJjaHAxX+S4iealvOi1sOW7ilwiLFxufTtcblxubGV0IGNocDFfMzAyX2Rvb3JzID0ge1xuICBkb29yMSA6IFwiY2hwMV/kuInmpbzotbDlu4pcIixcbn07XG5cbmxldCBjaHAxXzMwMV9kb29ycyA9IHtcbiAgZG9vcjEgOiBcImNocDFf5LiJ5qW86LWw5buKXCIsXG59O1xuXG5sZXQgY2hwMV8yMDFfZG9vcnMgPSB7XG4gIGRvb3IxIDogXCJjaHAxX+S6jOalvOi1sOW7ilwiLFxufTtcblxubGV0IGNocDFfMjAyX2Rvb3JzID0ge1xuICBkb29yMSA6IFwiY2hwMV/kuozmpbzotbDlu4pcIixcbn07XG5cbmxldCBjaHAxXzIwM19kb29ycyA9IHtcbiAgZG9vcjEgOiBcImNocDFf5LqM5qW86LWw5buKXCIsXG59O1xuXG5sZXQgY2hwMV96b3VsYW5nRjNfZG9vcnMgPSB7XG4gIGRvb3IxIDogXCJjaHAxXzMwMVwiLFxuICBkb29yMiA6IFwiY2hwMV8zMDJcIixcbiAgZG9vcjMgOiBcImNocDFfMzAzXCIsXG4gIGRvb3I0IDogXCJjaHAxX+S6jOalvOi1sOW7ilwiXG59O1xuXG5sZXQgY2hwMV96b3VsYW5nRjJfZG9vcnMgPSB7XG4gIGRvb3IxOiBcImNocDFfMjAxXCIsXG4gIGRvb3IyOiBcImNocDFfMjAyXCIsXG4gIGRvb3IzOiBcImNocDFfMjAzXCIsXG4gIGRvb3I0OiBcIkYxb3JGMlwiLFxufTtcblxubGV0IGNocDFfaGFsbEYxZG9vcnMgPSB7XG4gIGRvb3IxOiBcImNocDFf6IiN566h5oi/6Ze0XCIsXG4gIGRvb3IyOiBcImNocDJfc2NlbmUxXCIsXG4gIGRvb3IzOiBcImNocDFf5LqM5qW86LWw5buKXCIsXG59XG5cbmxldCBjaHAxX3NoZWd1YW5GMWRvb3JzID0ge1xuICBkb29yMTogXCJjaHAxX+S4gOalvOWkp+WOhVwiLFxufVxuXG5cblxubGV0IGNocDJfc2NlbmUxX2Rvb3JzID0ge307XG5cbndpbmRvdy5zY2VuZXMgPSB7XG4gIC8vIOW6j+eroFxuICAvLyBjaHAxX+W6j+eroDpjaHAxX3h1emhhbmdfZG9vcnMsXG4gIC8vIGNoYXB0ZXIgMSBzY2VuZTFcbiAgY2hwMV8zMDM6IGNocDFfMzAzX2Rvb3JzLFxuICBjaHAxXzMwMjogY2hwMV8zMDJfZG9vcnMsXG4gIGNocDFfMzAxOiBjaHAxXzMwMV9kb29ycyxcbiAgY2hwMV8yMDE6IGNocDFfMjAxX2Rvb3JzLFxuICBjaHAxXzIwMjogY2hwMV8yMDJfZG9vcnMsXG4gIGNocDFfMjAzOiBjaHAxXzIwM19kb29ycyxcbiAgY2hwMV/kuInmpbzotbDlu4o6IGNocDFfem91bGFuZ0YzX2Rvb3JzLFxuICBjaHAxX+S6jOalvOi1sOW7ijogY2hwMV96b3VsYW5nRjJfZG9vcnMsXG4gIGNocDFf5LiA5qW85aSn5Y6FOiBjaHAxX2hhbGxGMWRvb3JzLFxuICBjaHAxX+iIjeeuoeaIv+mXtDogY2hwMV9zaGVndWFuRjFkb29ycyxcbn07XG5cbndpbmRvdy5wbGF5ZXIgPSB7XG4gIHBvc19YOiAxMDAuNzQzLFxuICBwb3NfWTogOTAuNTExLFxuICBlbnRlckdhbWU6IGZhbHNlLFxuICBwcmV2aW91c1NjZW5lOlwiXCIsXG4gIHByZXZpb3VzRG9vcjpcIlwiLFxuICByZW1lbWVyUG9zT2ZEb29yOmZhbHNlLCAgXG5cbn07XG5cblxuXG53aW5kb3cucG9zX2NocDFf5LiJ5qW86LWw5buKID0ge1xuXHQnMzAxJzpjYy5WZWMyKDYwMCwyMDApLFxuXHQnMzAyJzpjYy5WZWMyKDExMDAsMjAwKSxcblx0JzMwMyc6Y2MuVmVjMigxNTAwLDIwMCksXG5cdCfkuInmpbzotbDlu4onOmNjLlZlYzIoMjEwMCwyMDApLFxufTtcblxuLy8gbGV0IHBvc19jaHAxXzMwMSA9IHtcbi8vIFx0JzMwMSc6Y2MuVmVjMigxMTAwLDIwMCksXG4vLyB9O1xuXG4vLyBsZXQgcG9zX2NocDFfMzAyID0ge1xuLy8gXHQnMzAyJzpjYy5WZWMyKDExMDAsMjAwKVxuLy8gfTtcbi8vIGxldCBwb3NfY2hwMV8zMDMgPSB7XG4vLyBcdCczMDMnOmNjLlZlYzIoMTUwMCwyMDApXG4vLyB9XG5cbndpbmRvdy5wbGF5ZXJQb3NpdGlvbiA9IHtcblx0Ly8g5b2T5YmN55qE5Zy65pmv55qE6Zeo77yM5a+55bqU55qE5ZKM5LiL5LiA5Liq5Zy65pmv6KaB5Li76KeS5Ye6546w55qE5L2N572uXG4gIGNocDFf5LiJ5qW86LWw5buKOm51bGwsXG4gIFxuICBjaHAxXzMwMTpudWxsLFxuXG4gIGNocDFfMzAyOm51bGwsXG4gIFxuICBjaHAxXzMwMjpudWxsLFxuXG4gIGNocDFfMzAzOm51bGwsXG4gIFxuICBjaHAxXzIwMzpudWxsLFxuXG4gIGNocDFfMjAyOm51bGwsXG5cbiAgY2hwMV8yMDE6bnVsbCxcblxuICBjaHAxX+S6jOalvOi1sOW7ijpudWxsLFxuICBcbiAgY2hwMV/kuIDmpbzlpKfljoU6bnVsbCxcblxuICBjaHAxX+Wuv+euoeaIv+mXtDpudWxsLFxuXG5cbiAgLy8g5ZCO6Z2i6L+Y6KaB6KGl5YWF5LiA5Liq5aSn5Y6F6Zeo5Y+jXG5cbn1cblxuXG4iXX0=
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
text.set("doors", "按下空格即可切换场景");
text.set("npcs", "按下J键查看内容");
text.set("tools", "按下K键拾取物品");
text.set("items", "按下R键使用所选物品");
text.set("games", "按下G键查看");
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
    this.textLable.string = "";
  },
  canShow: function canShow() {
    return Global.itemType != " ";
  },
  showContext: function showContext(dt) {
    this.tt += dt;

    if (!this.isShowed) {
      console.log("type:" + Global.itemType);

      if (window.Global.itemType == 'selfdialogs') {
        var currentscene = cc.director.getScene()._name;

        ;
        var name = window.Global.itemName;
        var content = window.selfDialog[currentscene][name];
        this.setTextData(content);
      } else {
        this.setTextData(text.get(Global.itemType));
      }

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
    this.textLable.string = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RpcC90aXBzLmpzIl0sIm5hbWVzIjpbInRleHQiLCJNYXAiLCJzZXQiLCJLZXkiLCJzcGFjZSIsImoiLCJrIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0TGFibGUiLCJMYWJlbCIsImluaXQiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4IiwiaXNTaG93ZWQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJvbkxvYWQiLCJzZXRUZXh0RGF0YSIsInRleHREYXRhIiwic3RyaW5nIiwiY2FuU2hvdyIsIkdsb2JhbCIsIml0ZW1UeXBlIiwic2hvd0NvbnRleHQiLCJkdCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJjdXJyZW50c2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiX25hbWUiLCJuYW1lIiwiaXRlbU5hbWUiLCJjb250ZW50Iiwic2VsZkRpYWxvZyIsImdldCIsImxlbmd0aCIsInNsaWNlIiwiY2xvc2VEaWFsb2ciLCJhY3RpdmUiLCJvbkRpc2FibGUiLCJzdGFydCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLElBQUlDLEdBQUosRUFBYjtBQUNBRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxPQUFULEVBQWtCLFlBQWxCO0FBQ0FGLElBQUksQ0FBQ0UsR0FBTCxDQUFTLE1BQVQsRUFBaUIsVUFBakI7QUFDQUYsSUFBSSxDQUFDRSxHQUFMLENBQVMsT0FBVCxFQUFrQixVQUFsQjtBQUNBRixJQUFJLENBQUNFLEdBQUwsQ0FBUyxPQUFULEVBQWtCLFlBQWxCO0FBQ0FGLElBQUksQ0FBQ0UsR0FBTCxDQUFTLE9BQVQsRUFBa0IsUUFBbEI7QUFFQSxJQUFJQyxHQUFHLEdBQUc7RUFBRUMsS0FBSyxFQUFFLENBQVQ7RUFBWUMsQ0FBQyxF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RUExRUEsRUEwRUk7SUFDVCxLQUFLRCxXQUFMLENBQWlCQyxFQUFqQjtFQUNEO0FBNUVNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxldCB0ZXh0ID0gW1xuLy8gICAgIHsgc3RhdGU6ICdzcGFjZScsIGNvbnRlbnQ6ICdwcmVzcyBTUEFDRSB0byBsb2FkIGFub3RoZXIgc2NlbmUnIH0sXG4vLyAgICAgeyBzdGF0ZTogJ2onLCBjb250ZW50OiAncHJlc3MgaiB0byB0YWxrIHRvIHRoZSBnaG9zdCcgfSxcbi8vICAgICB7IHN0YXRlOiAnaycsIGNvbnRlbnQ6ICdwcmVzcyBrIHRvIHRha2UgdGhlIHRvb2wnIH0sXG4vLyBdXG5cbmNvbnN0IHRleHQgPSBuZXcgTWFwKCk7XG50ZXh0LnNldChcImRvb3JzXCIsIFwi5oyJ5LiL56m65qC85Y2z5Y+v5YiH5o2i5Zy65pmvXCIpO1xudGV4dC5zZXQoXCJucGNzXCIsIFwi5oyJ5LiLSumUruafpeeci+WGheWuuVwiKTtcbnRleHQuc2V0KFwidG9vbHNcIiwgXCLmjInkuItL6ZSu5ou+5Y+W54mp5ZOBXCIpO1xudGV4dC5zZXQoXCJpdGVtc1wiLCBcIuaMieS4i1LplK7kvb/nlKjmiYDpgInnianlk4FcIik7XG50ZXh0LnNldChcImdhbWVzXCIsIFwi5oyJ5LiLR+mUruafpeeci1wiKTtcblxubGV0IEtleSA9IHsgc3BhY2U6IDAsIGo6IDEsIGs6IDIgfTtcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHRleHRMYWJsZTogY2MuTGFiZWwsXG4gIH0sXG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm5vd1RleHQgPSBudWxsO1xuICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XG4gICAgdGhpcy50dCA9IDA7XG4gICAgdGhpcy50ZXh0SW5kZXggPSAtMTtcbiAgICB0aGlzLmlzU2hvd2VkID0gZmFsc2U7XG4gICAgdGhpcy50ZXh0TGFibGUgPSB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRMYWJlbFwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9LFxuXG4gIHNldFRleHREYXRhKHRleHREYXRhKSB7XG4gICAgaWYgKCF0aGlzLnRleHRFbmQpIHJldHVybjtcbiAgICB0aGlzLnRleHRFbmQgPSBmYWxzZTtcbiAgICB0aGlzLm5vd1RleHQgPSB0ZXh0RGF0YTtcbiAgICB0aGlzLnRleHRMYWJsZS5zdHJpbmcgPSBcIlwiO1xuICB9LFxuXG4gIGNhblNob3coKSB7XG4gICAgcmV0dXJuIEdsb2JhbC5pdGVtVHlwZSAhPSBcIiBcIjtcbiAgfSxcblxuICBzaG93Q29udGV4dChkdCkge1xuICAgIHRoaXMudHQgKz0gZHQ7XG4gICAgaWYgKCF0aGlzLmlzU2hvd2VkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInR5cGU6XCIgKyBHbG9iYWwuaXRlbVR5cGUpO1xuXG4gICAgICBpZih3aW5kb3cuR2xvYmFsLml0ZW1UeXBlID09ICdzZWxmZGlhbG9ncycpe1xuICAgICAgICBsZXQgY3VycmVudHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5fbmFtZTs7XG4gICAgICAgIGxldCBuYW1lID0gd2luZG93Lkdsb2JhbC5pdGVtTmFtZTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB3aW5kb3cuc2VsZkRpYWxvZ1tjdXJyZW50c2NlbmVdW25hbWVdO1xuICAgICAgICB0aGlzLnNldFRleHREYXRhKGNvbnRlbnQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuc2V0VGV4dERhdGEodGV4dC5nZXQoR2xvYmFsLml0ZW1UeXBlKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50dCA+PSAwLjA1KSB7XG4gICAgICAgIGlmICh0aGlzLnRleHRMYWJsZS5zdHJpbmcubGVuZ3RoIDwgdGhpcy5ub3dUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudGV4dExhYmxlLnN0cmluZyA9IHRoaXMubm93VGV4dC5zbGljZShcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0aGlzLnRleHRMYWJsZS5zdHJpbmcubGVuZ3RoICsgMVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50ZXh0RW5kID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmlzU2hvd2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnR0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9LFxuXG4gIG9uRGlzYWJsZSgpIHtcbiAgICB0aGlzLnRleHRMYWJsZS5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9LFxuXG4gIHN0YXJ0KCkge30sXG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5zaG93Q29udGV4dChkdCk7XG4gIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cloth/4_js.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f963RjU8ZP3bMJyA54Q689', '4_js');
// scripts/game_chp1/cp1_cloth/4_js.js

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
    var thisnode = 3;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      listen[touchcnt] = thisnode;
      touchcnt++;
    });
  },
  update: function update(dt) {
    var self = this;

    if (cup[3] == 0) {
      cc.loader.loadRes("衣服", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[3] == 1) {
      cc.loader.loadRes("袜子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[3] == 2) {
      cc.loader.loadRes("裤子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[3] == 3) {
      cc.loader.loadRes("帽子", cc.SpriteFrame, function (err, sp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY2xvdGgvNF9qcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwidGhpc25vZGUiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwibGlzdGVuIiwidG91Y2hjbnQiLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJjdXAiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsS0F6QkssbUJBeUJJO0lBQ0wsSUFBSUMsUUFBUSxHQUFDLENBQWI7SUFDQSxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVAsRUFBRSxDQUFDUSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTBDLFVBQVNDLEtBQVQsRUFBZTtNQUNyREMsTUFBTSxDQUFDQyxRQUFELENBQU4sR0FBaUJSLFFBQWpCO01BQ0FRLFFBQVE7SUFDWCxDQUhEO0VBSUgsQ0EvQkk7RUFpQ0xDLE1BakNLLGtCQWlDR0MsRUFqQ0gsRUFpQ087SUFDUixJQUFJQyxJQUFJLEdBQUMsSUFBVDs7SUFDQSxJQUFHQyxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO01BQ1RqQixFQUFFLENBQUNrQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsSUFBbEIsRUFBdUJuQixFQUFFLENBQUNvQixXQUExQixFQUFzQyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDbEROLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnZCLEVBQUUsQ0FBQ3dCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR0wsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtNQUNUakIsRUFBRSxDQUFDa0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLElBQWxCLEVBQXVCbkIsRUFBRSxDQUFDb0IsV0FBMUIsRUFBc0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ2xETixJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ2QixFQUFFLENBQUN3QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO01BQ0gsQ0FGRDtJQUdIOztJQUNELElBQUdMLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBUSxDQUFYLEVBQWE7TUFDVGpCLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixJQUFsQixFQUF1Qm5CLEVBQUUsQ0FBQ29CLFdBQTFCLEVBQXNDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtRQUNsRE4sSUFBSSxDQUFDVixJQUFMLENBQVVpQixZQUFWLENBQXVCdkIsRUFBRSxDQUFDd0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDs7SUFDRCxJQUFHTCxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO01BQ1RqQixFQUFFLENBQUNrQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsSUFBbEIsRUFBdUJuQixFQUFFLENBQUNvQixXQUExQixFQUFzQyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDbEROLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnZCLEVBQUUsQ0FBQ3dCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDSCxDQUZEO0lBR0g7RUFFSjtBQXhESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdmFyIHRoaXNub2RlPTM7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBsaXN0ZW5bdG91Y2hjbnRdPXRoaXNub2RlO1xyXG4gICAgICAgICAgICB0b3VjaGNudCsrO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKGN1cFszXT09MCl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6KGj5pyNXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbM109PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuiinOWtkFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGN1cFszXT09Mil7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6KOk5a2QXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY3VwWzNdPT0zKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLluL3lrZBcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19
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
    console.log('mapWidth', mapWidth);
    this.max_x = mapWidth - canvasWidth;

    if (window.player.enterGame) {
      this.cameraFollow();
    }
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

    this.node.x = nodePos.x; // console.log("camera max:"+this.max_x);
    // console.log("camera perspective:"+nodePos);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvY2FtZXJhLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0IiwiTm9kZSIsIm1hcCIsInN0YXJ0IiwibWFwV2lkdGgiLCJmaW5kIiwid2lkdGgiLCJjYW52YXNXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXhfeCIsIndpbmRvdyIsInBsYXllciIsImVudGVyR2FtZSIsImNhbWVyYUZvbGxvdyIsIndvcmxkUG9zIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJub2RlUG9zIiwibm9kZSIsInBhcmVudCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFDSixFQUFFLENBQUNLLElBREY7SUFFUkMsR0FBRyxFQUFDTixFQUFFLENBQUNLO0VBRkMsQ0FIUDtFQVNMRSxLQVRLLG1CQVNJO0lBQ0wsSUFBSUMsUUFBUSxHQUFHUixFQUFFLENBQUNTLElBQUgsQ0FBUSxnQkFBUixFQUEwQkMsS0FBekM7SUFDQSxJQUFJQyxXQUFXLEdBQUdYLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRLFFBQVIsRUFBa0JDLEtBQXBDO0lBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFlRixXQUEzQjtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXVCTCxRQUF2QjtJQUNBLEtBQUtNLEtBQUwsR0FBYU4sUUFBUSxHQUFHRyxXQUF4Qjs7SUFDQSxJQUFHSSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsU0FBakIsRUFBMkI7TUFDdkIsS0FBS0MsWUFBTDtJQUNIO0VBQ0osQ0FsQkk7RUFxQkxBLFlBckJLLDBCQXFCUztJQUVWLElBQUcsQ0FBQyxLQUFLZCxNQUFULEVBQWlCO01BQ2JRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7TUFDQTtJQUNILENBTFMsQ0FNVjs7O0lBQ0EsSUFBSU0sUUFBUSxHQUFHLEtBQUtmLE1BQUwsQ0FBWWdCLHFCQUFaLENBQWtDcEIsRUFBRSxDQUFDcUIsRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFSLENBQWxDLENBQWYsQ0FQVSxDQU9tRDs7SUFFN0QsSUFBSUMsT0FBTyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsb0JBQWpCLENBQXNDTixRQUF0QyxDQUFkLENBVFUsQ0FTb0Q7O0lBRTlELElBQUdHLE9BQU8sQ0FBQ0ksQ0FBUixJQUFZLENBQVosSUFBZ0JKLE9BQU8sQ0FBQ0ksQ0FBUixJQUFZLEtBQUtaLEtBQXBDLEVBQTBDO01BQ3RDO0lBQ0g7O0lBQ0QsS0FBS1MsSUFBTCxDQUFVRyxDQUFWLEdBQWNKLE9BQU8sQ0FBQ0ksQ0FBdEIsQ0FkVSxDQWVWO0lBQ0E7RUFDSCxDQXRDSTtFQXdDTEMsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztJQUNSLElBQUcsS0FBS3hCLE1BQUwsSUFBZSxJQUFsQixFQUF1QjtNQUNuQlEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7TUFDQTtJQUNIOztJQUNELEtBQUtLLFlBQUw7RUFDSDtBQTlDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0YXJnZXQ6Y2MuTm9kZSxcbiAgICAgICAgbWFwOmNjLk5vZGUsXG4gICAgfSxcblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB2YXIgbWFwV2lkdGggPSBjYy5maW5kKFwiQ2FudmFzL2JnL21hcHNcIikud2lkdGg7XG4gICAgICAgIHZhciBjYW52YXNXaWR0aCA9IGNjLmZpbmQoXCJDYW52YXNcIikud2lkdGg7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FudmFzd2lkdGg6XCIrY2FudmFzV2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZygnbWFwV2lkdGgnLG1hcFdpZHRoKTtcbiAgICAgICAgdGhpcy5tYXhfeCA9IG1hcFdpZHRoIC0gY2FudmFzV2lkdGg7XG4gICAgICAgIGlmKHdpbmRvdy5wbGF5ZXIuZW50ZXJHYW1lKXtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhRm9sbG93KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBjYW1lcmFGb2xsb3coKXtcblxuICAgICAgICBpZighdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibnVsbCB0YXJnZXRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5a6e6ZmF5LiK56e75Yqo55qE5Lic6KW/5pivYm9keVxuICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLnRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7Ly/ojrflj5bliLBwbGF5ZXLnmoTkuJbnlYzlnZDmoIfnmoTkvY3nva5cbiAgICAgIFxuICAgICAgICBsZXQgbm9kZVBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpOy8v6I635Y+W5YiwcGxheWVy55qE5LiW55WM5Z2Q5qCH55qE5L2N572uXG5cbiAgICAgICAgaWYobm9kZVBvcy54IDw9MCB8fG5vZGVQb3MueCA+PXRoaXMubWF4X3gpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS54ID0gbm9kZVBvcy54O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhbWVyYSBtYXg6XCIrdGhpcy5tYXhfeCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FtZXJhIHBlcnNwZWN0aXZlOlwiK25vZGVQb3MpO1xuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmKHRoaXMudGFyZ2V0ID09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb24ndCBnZXQgdGhlIG5vZGVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW1lcmFGb2xsb3coKTtcbiAgICB9LFxufSk7XG4iXX0=
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
                    var __filename = 'preview-scripts/assets/scripts/chp1/disableLock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9dacuspw1LhpfsCL3uyTak', 'disableLock');
// scripts/chp1/disableLock.js

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
  checkLockChp1F3: function checkLockChp1F3() {
    var node = cc.find("Canvas/bg/games/chp1_三楼走廊解锁");

    if (node != null) {
      console.log(node);

      if (window.lockOfStairsInCP1F3) {
        node.active = false;
        cc.find("Canvas/bg/doors/door4").active = true;
      }
    }
  },
  start: function start() {
    this.checkLockChp1F3();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NocDEvZGlzYWJsZUxvY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjaGVja0xvY2tDaHAxRjMiLCJub2RlIiwiZmluZCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NrT2ZTdGFpcnNJbkNQMUYzIiwiYWN0aXZlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBTUw7RUFFQTtFQUNBQyxlQVRLLDZCQVNZO0lBQ2IsSUFBSUMsSUFBSSxHQUFHTCxFQUFFLENBQUNNLElBQUgsQ0FBUSw2QkFBUixDQUFYOztJQUNBLElBQUdELElBQUksSUFBRSxJQUFULEVBQWM7TUFDVkUsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7O01BQ0EsSUFBR0ksTUFBTSxDQUFDQyxtQkFBVixFQUE4QjtRQUMxQkwsSUFBSSxDQUFDTSxNQUFMLEdBQWMsS0FBZDtRQUNBWCxFQUFFLENBQUNNLElBQUgsQ0FBUSx1QkFBUixFQUFpQ0ssTUFBakMsR0FBMEMsSUFBMUM7TUFDSDtJQUNKO0VBQ0osQ0FsQkk7RUFvQkxDLEtBcEJLLG1CQW9CSTtJQUNMLEtBQUtSLGVBQUw7RUFDSCxDQXRCSSxDQXdCTDs7QUF4QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG4gICAgY2hlY2tMb2NrQ2hwMUYzKCl7XG4gICAgICAgIGxldCBub2RlID0gY2MuZmluZChcIkNhbnZhcy9iZy9nYW1lcy9jaHAxX+S4iealvOi1sOW7iuino+mUgVwiKVxuICAgICAgICBpZihub2RlIT1udWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgaWYod2luZG93LmxvY2tPZlN0YWlyc0luQ1AxRjMpe1xuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iZy9kb29ycy9kb29yNFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5jaGVja0xvY2tDaHAxRjMoKVxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_switch/switch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'efbe1Uv2OtAB5rrrirEZfoB', 'switch');
// scripts/game_chp1/cp1_switch/switch.js

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
      window.lockOfSwitchInCP1 = true;
      cc.log("success");
      cc.find("Canvas/Label").getComponent(cc.Label).string = "恭喜你，答对了";
    }

    ;
    cc.log(res1 + res3 + res2 + res4 + res5 + res6 + res7 + res8);
  },
  //  onLoad () {
  //      res1 = 0;
  //      res2 = 0;
  //      res3 = 0;
  //      res4 = 0;
  //      res5 = 0;
  //      res6 = 0;
  //      res7 = 0;
  //      res8 = 0;
  //      res9 = 0;   
  //  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfc3dpdGNoL3N3aXRjaC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJsb2NrT2ZTd2l0Y2hJbkNQMSIsInJlczEiLCJyZXMyIiwicmVzMyIsInJlczQiLCJyZXM1IiwicmVzNiIsInJlczciLCJyZXM4IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcHJpdGVfRnJhbWUxIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlX0ZyYW1lMiIsInN3aXRjaDEiLCJidXR0b24xIiwibm9kZSIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsIm5vcm1hbFNwcml0ZSIsImxvZyIsInN3aXRjaDIiLCJidXR0b24yIiwic3dpdGNoMyIsImJ1dHRvbjMiLCJzd2l0Y2g0IiwiYnV0dG9uNCIsInN3aXRjaDUiLCJidXR0b241Iiwic3dpdGNoNiIsImJ1dHRvbjYiLCJzd2l0Y2g3IiwiYnV0dG9uNyIsInN3aXRjaDgiLCJidXR0b244Iiwic3dpdGNoOSIsImZpbmQiLCJMYWJlbCIsInN0cmluZyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxpQkFBUCxHQUEyQixLQUEzQjtBQUNBLElBQUlDLElBQUksR0FBRyxDQUFYO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBWSxJQUFJQyxJQUFJLEdBQUUsQ0FBQyxDQUFYO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBWSxJQUFJQyxJQUFJLEdBQUUsQ0FBQyxDQUFYO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFDL0QsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBWSxJQUFJQyxJQUFJLEdBQUUsQ0FBQyxDQUFYO0FBQ1pDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQ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QTlDLEVBQWdEO01BQzVDVCxNQUFNLENBQUNDLGlCQUFQLEdBQTJCLElBQTNCO01BQ0FTLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPLFNBQVA7TUFDQWQsRUFBRSxDQUFDOEIsSUFBSCxDQUFRLGNBQVIsRUFBd0JuQixZQUF4QixDQUFxQ1gsRUFBRSxDQUFDK0IsS0FBeEMsRUFBK0NDLE1BQS9DLEdBQXdELFNBQXhEO0lBQ0g7O0lBQUE7SUFDRGhDLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPdEIsSUFBSSxHQUFDRSxJQUFMLEdBQVVELElBQVYsR0FBZUUsSUFBZixHQUFvQkMsSUFBcEIsR0FBeUJDLElBQXpCLEdBQThCQyxJQUE5QixHQUFtQ0MsSUFBMUM7RUFFSCxDQWpISTtFQW1ITDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUFrQyxLQS9ISyxtQkErSEksQ0FFUixDQWpJSSxDQW1JTDs7QUFuSUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLypcbueUtemXuFxuICovXG53aW5kb3cubG9ja09mU3dpdGNoSW5DUDEgPSBmYWxzZTtcbmxldCByZXMxID0gMTtsZXQgcmVzMiA9MTtsZXQgcmVzMyA9LTE7bGV0IHJlczQgPTE7bGV0IHJlczUgPS0xO2xldCByZXM2ID0xO1xubGV0IHJlczcgPTE7bGV0IHJlczggPS0xO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICBzcHJpdGVfRnJhbWUxIDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTIgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzd2l0Y2gxICgpe1xuICAgICAgICBsZXQgYnV0dG9uMSA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICByZXMxID0tcmVzMTtcbiAgICAgICAgaWYocmVzMT09PTEpe1xuICAgICAgICAgICAgYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKFwicmVzMVwiK3JlczEpO1xuXG4gICAgfSxcbiAgICBzd2l0Y2gyICgpe1xuICAgICAgICBsZXQgYnV0dG9uMiA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICByZXMyID0tcmVzMjtcbiAgICAgICAgaWYocmVzMj09PTEpe1xuICAgICAgICAgICAgYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKFwicmVzMlwiK3JlczIpO1xuICAgIH0sXG4gICAgc3dpdGNoMyAoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjMgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblxuICAgICAgICBpZihyZXMzPT09MSl7XG4gICAgICAgICAgICBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cbiAgICAgICAgcmVzMyA9LXJlczM7XG4gICAgICAgIGNjLmxvZyhyZXMzKTtcbiAgICB9LFxuICAgIHN3aXRjaDQgKCl7XG4gICAgICAgIGxldCBidXR0b240ID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG5cbiAgICAgICAgaWYocmVzND09PTEpe1xuICAgICAgICAgICAgYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG4gICAgICAgIHJlczQgPS1yZXM0O1xuICAgICAgICBjYy5sb2cocmVzNCk7XG4gICAgfSxcbiAgICBzd2l0Y2g1ICgpe1xuICAgICAgICBsZXQgYnV0dG9uNSA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXG4gICAgICAgIGlmKHJlczU9PT0xKXtcbiAgICAgICAgICAgIGJ1dHRvbjUubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUxXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYnV0dG9uNS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTJcbiAgICAgICAgfVxuICAgICAgICByZXM1ID0tcmVzNTtcbiAgICAgICAgY2MubG9nKHJlczUpO1xuICAgIH0sXG4gICAgc3dpdGNoNiAoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjYgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblxuICAgICAgICBpZihyZXM2PT09MSl7XG4gICAgICAgICAgICBidXR0b242Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjYubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cbiAgICAgICAgcmVzNiA9LXJlczY7XG4gICAgICAgIGNjLmxvZyhyZXM2KTtcbiAgICB9LFxuICAgIHN3aXRjaDcgKCl7XG4gICAgICAgIGxldCBidXR0b243ID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG5cbiAgICAgICAgaWYocmVzNz09PTEpe1xuICAgICAgICAgICAgYnV0dG9uNy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b243Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG4gICAgICAgIHJlczcgPS1yZXM3O1xuICAgICAgICBjYy5sb2cocmVzNyk7XG4gICAgfSxcbiAgICBzd2l0Y2g4ICgpe1xuICAgICAgICBsZXQgYnV0dG9uOCA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXG4gICAgICAgIGlmKHJlczg9PTEpe1xuICAgICAgICAgICAgYnV0dG9uOC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b244Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG4gICAgICAgIHJlczggPS1yZXM4O1xuICAgICAgICBjYy5sb2cocmVzOCk7XG4gICAgfSxcbiAgICBzd2l0Y2g5ICgpe1xuXG4gICAgICAgIGlmKChyZXMxK3JlczMrcmVzMityZXM0K3JlczUrcmVzNityZXM3K3JlczgpPT04KXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NrT2ZTd2l0Y2hJbkNQMSA9IHRydWU7XG4gICAgICAgICAgICBjYy5sb2coXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5oGt5Zac5L2g77yM562U5a+55LqGXCI7XG4gICAgICAgIH07XG4gICAgICAgIGNjLmxvZyhyZXMxK3JlczMrcmVzMityZXM0K3JlczUrcmVzNityZXM3K3JlczgpXG5cbiAgICB9LFxuXG4gICAgLy8gIG9uTG9hZCAoKSB7XG4gICAgLy8gICAgICByZXMxID0gMDtcbiAgICAvLyAgICAgIHJlczIgPSAwO1xuICAgIC8vICAgICAgcmVzMyA9IDA7XG4gICAgLy8gICAgICByZXM0ID0gMDtcbiAgICAvLyAgICAgIHJlczUgPSAwO1xuICAgIC8vICAgICAgcmVzNiA9IDA7XG4gICAgLy8gICAgICByZXM3ID0gMDtcbiAgICAvLyAgICAgIHJlczggPSAwO1xuICAgIC8vICAgICAgcmVzOSA9IDA7ICAgXG4gICAgLy8gIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cloth/1_js.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd7451V/hqdGPpFqsid4S6x9', '1_js');
// scripts/game_chp1/cp1_cloth/1_js.js

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
    window.cup = [1, 0, 3, 2];
    window.listen = [-1, -1];
    window.touchcnt = 0;
    window.neatOfClothesInCP1 = 0;
    var thisnode = 0; //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)

    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      listen[touchcnt] = thisnode;
      touchcnt++;
    });
  },
  update: function update(dt) {
    var self = this;

    if (cup[0] == 0) {
      cc.loader.loadRes("衣服", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[0] == 1) {
      cc.loader.loadRes("袜子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[0] == 2) {
      cc.loader.loadRes("裤子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[0] == 3) {
      cc.loader.loadRes("帽子", cc.SpriteFrame, function (err, sp) {
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

    if (cup[0] == 0 && cup[1] == 1 && cup[2] == 2 && cup[3] == 3 && window.neatOfClothesInCP1 == 0) {
      window.neatOfClothesInCP1 = true;
      console.log("衣服顺序摆放成功");
      cc.director.loadScene('chp1_301');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY2xvdGgvMV9qcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwid2luZG93IiwiY3VwIiwibGlzdGVuIiwidG91Y2hjbnQiLCJuZWF0T2ZDbG90aGVzSW5DUDEiLCJ0aGlzbm9kZSIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiZXZlbnQiLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiY2hhbmdlX2EiLCJjaGFuZ2VfYiIsInQiLCJjb25zb2xlIiwibG9nIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxDQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQWZRLENBSFA7RUFxQkw7RUFFQTtFQUVBQyxLQXpCSyxtQkF5Qkk7SUFDTEMsTUFBTSxDQUFDQyxHQUFQLEdBQVcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBQVg7SUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWMsQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFDLENBQUwsQ0FBZDtJQUNBRixNQUFNLENBQUNHLFFBQVAsR0FBZ0IsQ0FBaEI7SUFDQUgsTUFBTSxDQUFDSSxrQkFBUCxHQUEwQixDQUExQjtJQUNBLElBQUlDLFFBQVEsR0FBQyxDQUFiLENBTEssQ0FNTDs7SUFD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QUEyQixDQUExRSxFQUE0RTtNQUN4RUosTUFBTSxDQUFDSSxrQkFBUCxHQUE0QixJQUE1QjtNQUNBc0IsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtNQUNBaEMsRUFBRSxDQUFDaUMsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFVBQXRCO0lBQ0g7RUFFSjtBQTlFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgd2luZG93LmN1cD1bMSwwLDMsMl07XHJcbiAgICAgICAgd2luZG93Lmxpc3Rlbj1bLTEsLTFdO1xyXG4gICAgICAgIHdpbmRvdy50b3VjaGNudD0wO1xyXG4gICAgICAgIHdpbmRvdy5uZWF0T2ZDbG90aGVzSW5DUDE9MDtcclxuICAgICAgICB2YXIgdGhpc25vZGU9MDtcclxuICAgICAgICAvL3RoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBsaXN0ZW5bdG91Y2hjbnRdPXRoaXNub2RlO1xyXG4gICAgICAgICAgICB0b3VjaGNudCsrOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKGN1cFswXT09MCl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6KGj5pyNXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbMF09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuiinOWtkFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGN1cFswXT09Mil7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6KOk5a2QXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY3VwWzBdPT0zKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLluL3lrZBcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodG91Y2hjbnQ9PTIpe1xyXG4gICAgICAgICAgICB0b3VjaGNudD0wO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlX2E9bGlzdGVuWzBdO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlX2I9bGlzdGVuWzFdO1xyXG4gICAgICAgICAgICB2YXIgdD1jdXBbY2hhbmdlX2FdO1xyXG4gICAgICAgICAgICBjdXBbY2hhbmdlX2FdPWN1cFtjaGFuZ2VfYl07XHJcbiAgICAgICAgICAgIGN1cFtjaGFuZ2VfYl09dDtcclxuICAgICAgICAgICAgbGlzdGVuWzBdPS0xO1xyXG4gICAgICAgICAgICBsaXN0ZW5bMV09LTE7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbMF09PTAmJmN1cFsxXT09MSYmY3VwWzJdPT0yJiZjdXBbM109PTMmJndpbmRvdy5uZWF0T2ZDbG90aGVzSW5DUDE9PTApe1xyXG4gICAgICAgICAgICB3aW5kb3cubmVhdE9mQ2xvdGhlc0luQ1AxID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLooaPmnI3pobrluo/mkYbmlL7miJDlip9cIik7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnY2hwMV8zMDEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cloth/3_js.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb973Ctzt1NlbM+OsgvFv9m', '3_js');
// scripts/game_chp1/cp1_cloth/3_js.js

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
    var thisnode = 2;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      listen[touchcnt] = thisnode;
      touchcnt++;
    });
  },
  update: function update(dt) {
    var self = this;

    if (cup[2] == 0) {
      cc.loader.loadRes("衣服", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[2] == 1) {
      cc.loader.loadRes("袜子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[2] == 2) {
      cc.loader.loadRes("裤子", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (cup[2] == 3) {
      cc.loader.loadRes("帽子", cc.SpriteFrame, function (err, sp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY2xvdGgvM19qcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwidGhpc25vZGUiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwibGlzdGVuIiwidG91Y2hjbnQiLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJjdXAiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsS0F6QkssbUJBeUJJO0lBQ0wsSUFBSUMsUUFBUSxHQUFDLENBQWI7SUFDQSxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVAsRUFBRSxDQUFDUSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTBDLFVBQVNDLEtBQVQsRUFBZTtNQUNyREMsTUFBTSxDQUFDQyxRQUFELENBQU4sR0FBaUJSLFFBQWpCO01BQ0FRLFFBQVE7SUFDWCxDQUhEO0VBSUgsQ0EvQkk7RUFpQ0xDLE1BakNLLGtCQWlDR0MsRUFqQ0gsRUFpQ087SUFDUixJQUFJQyxJQUFJLEdBQUMsSUFBVDs7SUFDQSxJQUFHQyxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO01BQ1RqQixFQUFFLENBQUNrQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsSUFBbEIsRUFBdUJuQixFQUFFLENBQUNvQixXQUExQixFQUFzQyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDbEROLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnZCLEVBQUUsQ0FBQ3dCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDRCxDQUZIO0lBR0g7O0lBQ0QsSUFBR0wsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtNQUNUakIsRUFBRSxDQUFDa0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLElBQWxCLEVBQXVCbkIsRUFBRSxDQUFDb0IsV0FBMUIsRUFBc0MsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO1FBQ2xETixJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ2QixFQUFFLENBQUN3QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO01BQ0gsQ0FGRDtJQUdIOztJQUNELElBQUdMLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBUSxDQUFYLEVBQWE7TUFDVGpCLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixJQUFsQixFQUF1Qm5CLEVBQUUsQ0FBQ29CLFdBQTFCLEVBQXNDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtRQUNsRE4sSUFBSSxDQUFDVixJQUFMLENBQVVpQixZQUFWLENBQXVCdkIsRUFBRSxDQUFDd0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNILENBRkQ7SUFHSDs7SUFDRCxJQUFHTCxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO01BQ1RqQixFQUFFLENBQUNrQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsSUFBbEIsRUFBdUJuQixFQUFFLENBQUNvQixXQUExQixFQUFzQyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDbEROLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnZCLEVBQUUsQ0FBQ3dCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7TUFDSCxDQUZEO0lBR0g7RUFFSjtBQXhESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdmFyIHRoaXNub2RlPTI7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBsaXN0ZW5bdG91Y2hjbnRdPXRoaXNub2RlO1xyXG4gICAgICAgICAgICB0b3VjaGNudCsrO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKGN1cFsyXT09MCl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6KGj5pyNXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbMl09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuiinOWtkFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGN1cFsyXT09Mil7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6KOk5a2QXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY3VwWzJdPT0zKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLluL3lrZBcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19
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
                    var __filename = 'preview-scripts/assets/scripts/comeBackToFirstPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d98eKY+rFBLpsYPJZoLxKq', 'comeBackToFirstPage');
// scripts/comeBackToFirstPage.js

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
  comeBackToFirstPage: function comeBackToFirstPage() {
    window.saveScene = cc.director.getScene()._name;
    cc.director.loadScene("开始游戏");
  },
  comeBackToGame: function comeBackToGame() {
    if (window.saveScene != "") {
      cc.director.loadScene(window.saveScene);
    }
  },
  comeBackFromAbout: function comeBackFromAbout() {
    cc.director.loadScene("开始游戏");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbWVCYWNrVG9GaXJzdFBhZ2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb21lQmFja1RvRmlyc3RQYWdlIiwid2luZG93Iiwic2F2ZVNjZW5lIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsIl9uYW1lIiwibG9hZFNjZW5lIiwiY29tZUJhY2tUb0dhbWUiLCJjb21lQmFja0Zyb21BYm91dCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsbUJBekJLLGlDQXlCZ0I7SUFDakJDLE1BQU0sQ0FBQ0MsU0FBUCxHQUFtQk4sRUFBRSxDQUFDTyxRQUFILENBQVlDLFFBQVosR0FBdUJDLEtBQTFDO0lBQ0FULEVBQUUsQ0FBQ08sUUFBSCxDQUFZRyxTQUFaLENBQXNCLE1BQXRCO0VBQ0gsQ0E1Qkk7RUE4QkxDLGNBOUJLLDRCQThCVztJQUNaLElBQUdOLE1BQU0sQ0FBQ0MsU0FBUCxJQUFvQixFQUF2QixFQUEwQjtNQUN0Qk4sRUFBRSxDQUFDTyxRQUFILENBQVlHLFNBQVosQ0FBc0JMLE1BQU0sQ0FBQ0MsU0FBN0I7SUFDSDtFQUNKLENBbENJO0VBb0NMTSxpQkFwQ0ssK0JBb0NjO0lBQ2ZaLEVBQUUsQ0FBQ08sUUFBSCxDQUFZRyxTQUFaLENBQXNCLE1BQXRCO0VBQ0gsQ0F0Q0k7RUF3Q0xHLEtBeENLLG1CQXdDSSxDQUVSLENBMUNJLENBNENMOztBQTVDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIGNvbWVCYWNrVG9GaXJzdFBhZ2UoKXtcbiAgICAgICAgd2luZG93LnNhdmVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIuW8gOWni+a4uOaIj1wiKTtcbiAgICB9LFxuXG4gICAgY29tZUJhY2tUb0dhbWUoKXtcbiAgICAgICAgaWYod2luZG93LnNhdmVTY2VuZSAhPSBcIlwiKXtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh3aW5kb3cuc2F2ZVNjZW5lKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21lQmFja0Zyb21BYm91dCgpe1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCLlvIDlp4vmuLjmiI9cIik7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
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
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_302/getphone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de076KSCAVKIrOgz0m0LAHy', 'getphone');
// scripts/game_chp1/cp1_lock_302/getphone.js

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
    phone: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  getPhone: function getPhone() {
    this.phone.active = false;

    if (!window.TOOLS[window.toolMap["手机"]].inBag) {
      window.Bag.push(window.TOOLS[window.toolMap["手机"]]);
      window.TOOLS[window.toolMap["手机"]].inBag = true;

      for (var key in window.Bag) {
        console.log(window.Bag[key].name);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja18zMDIvZ2V0cGhvbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwaG9uZSIsIk5vZGUiLCJnZXRQaG9uZSIsImFjdGl2ZSIsIndpbmRvdyIsIlRPT0xTIiwidG9vbE1hcCIsImluQmFnIiwiQmFnIiwicHVzaCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUNKLEVBQUUsQ0FBQ0s7RUFERCxDQUhQO0VBT0w7RUFFQTtFQUNBQyxRQVZLLHNCQVVLO0lBQ04sS0FBS0YsS0FBTCxDQUFXRyxNQUFYLEdBQW9CLEtBQXBCOztJQUNBLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxLQUFQLENBQWFELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLElBQWYsQ0FBYixFQUFtQ0MsS0FBeEMsRUFBOEM7TUFDMUNILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXQyxJQUFYLENBQWdCTCxNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsSUFBZixDQUFiLENBQWhCO01BQ0FGLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxJQUFmLENBQWIsRUFBbUNDLEtBQW5DLEdBQTJDLElBQTNDOztNQUNBLEtBQUssSUFBSUcsR0FBVCxJQUFnQk4sTUFBTSxDQUFDSSxHQUF2QixFQUEyQjtRQUN2QkcsT0FBTyxDQUFDQyxHQUFSLENBQVlSLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXRSxHQUFYLEVBQWdCRyxJQUE1QjtNQUNIO0lBQ0o7RUFDSixDQW5CSTtFQXFCTEMsS0FyQkssbUJBcUJJLENBRVIsQ0F2QkksQ0F5Qkw7O0FBekJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBob25lOmNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuICAgIGdldFBob25lKCl7XG4gICAgICAgIHRoaXMucGhvbmUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghd2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW1wi5omL5py6XCJdXS5pbkJhZyl7XG4gICAgICAgICAgICB3aW5kb3cuQmFnLnB1c2god2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW1wi5omL5py6XCJdXSk7XG4gICAgICAgICAgICB3aW5kb3cuVE9PTFNbd2luZG93LnRvb2xNYXBbXCLmiYvmnLpcIl1dLmluQmFnID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB3aW5kb3cuQmFnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuQmFnW2tleV0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_302/checkPhone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9eed5gIDpF145sbzIl9OZb', 'checkPhone');
// scripts/game_chp1/cp1_lock_302/checkPhone.js

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
    phone: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    console.log('window.TOOLS[window.toolMap["手机"]].inBag', window.TOOLS[window.toolMap["手机"]].inBag);

    if (window.TOOLS[window.toolMap["手机"]].inBag) {
      this.node.active = false;
    }
  },
  getPhone: function getPhone() {
    this.phone.active = false;

    if (!window.TOOLS[window.toolMap["手机"]].inBag) {
      window.Bag.push(window.TOOLS[window.toolMap["手机"]]);
      window.TOOLS[window.toolMap["手机"]].inBag = true;

      for (var key in window.Bag) {
        console.log(window.Bag[key].name);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja18zMDIvY2hlY2tQaG9uZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBob25lIiwiTm9kZSIsIm9uTG9hZCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJUT09MUyIsInRvb2xNYXAiLCJpbkJhZyIsIm5vZGUiLCJhY3RpdmUiLCJnZXRQaG9uZSIsIkJhZyIsInB1c2giLCJrZXkiLCJuYW1lIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUVKLEVBQUUsQ0FBQ0s7RUFERixDQUhQO0VBT0w7RUFFQUMsTUFUSyxvQkFTSTtJQUNMQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQ0FBWixFQUF3REMsTUFBTSxDQUFDQyxLQUFQLENBQWFELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLElBQWYsQ0FBYixFQUFtQ0MsS0FBM0Y7O0lBQ0EsSUFBSUgsTUFBTSxDQUFDQyxLQUFQLENBQWFELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLElBQWYsQ0FBYixFQUFtQ0MsS0FBdkMsRUFBOEM7TUFDMUMsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0g7RUFDSixDQWRJO0VBZUxDLFFBZkssc0JBZU07SUFDUCxLQUFLWCxLQUFMLENBQVdVLE1BQVgsR0FBb0IsS0FBcEI7O0lBQ0EsSUFBSSxDQUFDTCxNQUFNLENBQUNDLEtBQVAsQ0FBYUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsSUFBZixDQUFiLEVBQW1DQyxLQUF4QyxFQUErQztNQUMzQ0gsTUFBTSxDQUFDTyxHQUFQLENBQVdDLElBQVgsQ0FBZ0JSLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxJQUFmLENBQWIsQ0FBaEI7TUFDQUYsTUFBTSxDQUFDQyxLQUFQLENBQWFELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLElBQWYsQ0FBYixFQUFtQ0MsS0FBbkMsR0FBMkMsSUFBM0M7O01BQ0EsS0FBSyxJQUFJTSxHQUFULElBQWdCVCxNQUFNLENBQUNPLEdBQXZCLEVBQTRCO1FBQ3hCVCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDTyxHQUFQLENBQVdFLEdBQVgsRUFBZ0JDLElBQTVCO01BQ0g7SUFDSjtFQUNKLENBeEJJO0VBMEJMQyxLQTFCSyxtQkEwQkcsQ0FFUCxDQTVCSSxDQThCTDs7QUE5QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGhvbmU6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW1wi5omL5py6XCJdXS5pbkJhZycsIHdpbmRvdy5UT09MU1t3aW5kb3cudG9vbE1hcFtcIuaJi+aculwiXV0uaW5CYWcpO1xuICAgICAgICBpZiAod2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW1wi5omL5py6XCJdXS5pbkJhZykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRQaG9uZSgpIHtcbiAgICAgICAgdGhpcy5waG9uZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF3aW5kb3cuVE9PTFNbd2luZG93LnRvb2xNYXBbXCLmiYvmnLpcIl1dLmluQmFnKSB7XG4gICAgICAgICAgICB3aW5kb3cuQmFnLnB1c2god2luZG93LlRPT0xTW3dpbmRvdy50b29sTWFwW1wi5omL5py6XCJdXSk7XG4gICAgICAgICAgICB3aW5kb3cuVE9PTFNbd2luZG93LnRvb2xNYXBbXCLmiYvmnLpcIl1dLmluQmFnID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB3aW5kb3cuQmFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LkJhZ1trZXldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/selfdialog/selfdialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78faevrZu1NxKw/vYWH7Hyl', 'selfdialog');
// scripts/selfdialog/selfdialog.js

"use strict";

// let text = [
//     { state: 'space', content: 'press SPACE to load another scene' },
//     { state: 'j', content: 'press j to talk to the ghost' },
//     { state: 'k', content: 'press k to take the tool' },
// ]
cc.Class({
  "extends": cc.Component,
  properties: {
    textLable: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  init: function init() {
    this.currentScene = cc.director.getScene()._name;
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
  setTextData: function setTextData() {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.nowText = textData;
    this.textLable.string = window.selfDialog[this.currentScene][this.node.name];
  },
  canShow: function canShow() {
    return Global.itemType != " ";
  },
  showContext: function showContext(dt) {
    this.tt += dt;

    if (!this.isShowed) {
      console.log("type:" + Global.itemType);
      this.setTextData();

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
    this.textLable.string = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NlbGZkaWFsb2cvc2VsZmRpYWxvZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJsZSIsIkxhYmVsIiwiaW5pdCIsImN1cnJlbnRTY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJfbmFtZSIsIm5vd1RleHQiLCJ0ZXh0RW5kIiwidHQiLCJ0ZXh0SW5kZXgiLCJpc1Nob3dlZCIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIm9uTG9hZCIsInNldFRleHREYXRhIiwidGV4dERhdGEiLCJzdHJpbmciLCJ3aW5kb3ciLCJzZWxmRGlhbG9nIiwibmFtZSIsImNhblNob3ciLCJHbG9iYWwiLCJpdGVtVHlwZSIsInNob3dDb250ZXh0IiwiZHQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2xpY2UiLCJjbG9zZURpYWxvZyIsImFjdGl2ZSIsIm9uRGlzYWJsZSIsInN0YXJ0IiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFO0lBQ1ZDLFNBQVMsRUFBRUosRUFBRSxDQUFDSztFQURKLENBSEw7RUFPUDtFQUVBQyxJQVRPLGtCQVNBO0lBQ0wsS0FBS0MsWUFBTCxHQUFvQlAsRUFBRSxDQUFDUSxRQUFILENBQVlDLFFBQVosR0FBdUJDLEtBQTNDO0lBRUEsS0FBS0MsT0FBTCxHQUFlLElBQWY7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBZjtJQUNBLEtBQUtDLEVBQUwsR0FBVSxDQUFWO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixDQUFDLENBQWxCO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixLQUFoQjtJQUNBLEtBQUtYLFNBQUwsR0FBaUIsS0FBS1ksSUFBTCxDQUNkQyxjQURjLENBQ0MsV0FERCxFQUVkQyxZQUZjLENBRURsQixFQUFFLENBQUNLLEtBRkYsQ0FBakI7RUFHRCxDQXBCTTtFQXNCUGMsTUF0Qk8sb0JBc0JFO0lBQ1AsS0FBS2IsSUFBTDtFQUNELENBeEJNO0VBMEJQYyxXQTFCTyx5QkEwQk87SUFDWixJQUFJLENBQUMsS0FBS1IsT0FBVixFQUFtQjtJQUNuQixLQUFLQSxPQUFMLEdBQWUsS0FBZjtJQUNBLEtBQUtELE9BQUwsR0FBZVUsUUFBZjtJQUNBLEtBQUtqQixTQUFMLENBQWVrQixNQUFmLEdBQXdCQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsS0FBS2pCLFlBQXZCLEVBQXFDLEtBQUtTLElBQUwsQ0FBVVMsSUFBL0MsQ0FBeEI7RUFDRCxDQS9CTTtFQWlDUEMsT0FqQ08scUJBaUNHO0lBQ1IsT0FBT0MsTUFBTSxDQUFDQyxRQUFQLElBQW1CLEdBQTFCO0VBQ0QsQ0FuQ007RUFxQ1BDLFdBckNPLHVCQXFDS0MsRUFyQ0wsRUFxQ1M7SUFDZCxLQUFLakIsRUFBTCxJQUFXaUIsRUFBWDs7SUFDQSxJQUFJLENBQUMsS0FBS2YsUUFBVixFQUFvQjtNQUNsQmdCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVVMLE1BQU0sQ0FBQ0MsUUFBN0I7TUFDQSxLQUFLUixXQUFMOztNQUNBLElBQUksS0FBS1AsRUFBTCxJQUFXLElBQWYsRUFBcUI7UUFDbkIsSUFBSSxLQUFLVCxTQUFMLENBQWVrQixNQUFmLENBQXNCVyxNQUF0QixHQUErQixLQUFLdEIsT0FBTCxDQUFhc0IsTUFBaEQsRUFBd0Q7VUFDdEQsS0FBSzdCLFNBQUwsQ0FBZWtCLE1BQWYsR0FBd0IsS0FBS1gsT0FBTCxDQUFhdUIsS0FBYixDQUFtQixDQUFuQixFQUFxQixLQUFLOUIsU0FBTCxDQUFla0IsTUFBZixDQUFzQlcsTUFBdEIsR0FBK0IsQ0FBcEQsQ0FBeEI7UUFDRCxDQUZELE1BRU87VUFDTCxLQUFLckIsT0FBTCxHQUFlLElBQWY7VUFDQSxLQUFLRyxRQUFMLEdBQWdCLElBQWhCO1FBQ0Q7O1FBQ0QsS0FBS0YsRUFBTCxHQUFVLENBQVY7TUFDRDtJQUNGO0VBQ0YsQ0FwRE07RUFzRFBzQixXQXRETyx5QkFzRE87SUFDWixLQUFLbkIsSUFBTCxDQUFVb0IsTUFBVixHQUFtQixLQUFuQjtFQUNELENBeERNO0VBMERQQyxTQTFETyx1QkEwREs7SUFDVixLQUFLakMsU0FBTCxDQUFla0IsTUFBZixHQUF3QixFQUF4QjtJQUNBLEtBQUtoQixJQUFMO0VBQ0QsQ0E3RE07RUErRFBnQyxLQS9ETyxtQkErREMsQ0FBRSxDQS9ESDtFQWlFUEMsTUFqRU8sa0JBaUVBVCxFQWpFQSxFQWlFSTtJQUNULEtBQUtELFdBQUwsQ0FBaUJDLEVBQWpCO0VBQ0Q7QUFuRU0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IHRleHQgPSBbXG4vLyAgICAgeyBzdGF0ZTogJ3NwYWNlJywgY29udGVudDogJ3ByZXNzIFNQQUNFIHRvIGxvYWQgYW5vdGhlciBzY2VuZScgfSxcbi8vICAgICB7IHN0YXRlOiAnaicsIGNvbnRlbnQ6ICdwcmVzcyBqIHRvIHRhbGsgdG8gdGhlIGdob3N0JyB9LFxuLy8gICAgIHsgc3RhdGU6ICdrJywgY29udGVudDogJ3ByZXNzIGsgdG8gdGFrZSB0aGUgdG9vbCcgfSxcbi8vIF1cblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHRleHRMYWJsZTogY2MuTGFiZWwsXG4gIH0sXG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWU7XG5cbiAgICB0aGlzLm5vd1RleHQgPSBudWxsO1xuICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XG4gICAgdGhpcy50dCA9IDA7XG4gICAgdGhpcy50ZXh0SW5kZXggPSAtMTtcbiAgICB0aGlzLmlzU2hvd2VkID0gZmFsc2U7XG4gICAgdGhpcy50ZXh0TGFibGUgPSB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRMYWJlbFwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9LFxuXG4gIHNldFRleHREYXRhKCkge1xuICAgIGlmICghdGhpcy50ZXh0RW5kKSByZXR1cm47XG4gICAgdGhpcy50ZXh0RW5kID0gZmFsc2U7XG4gICAgdGhpcy5ub3dUZXh0ID0gdGV4dERhdGE7XG4gICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gd2luZG93LnNlbGZEaWFsb2dbdGhpcy5jdXJyZW50U2NlbmVdW3RoaXMubm9kZS5uYW1lXTtcbiAgfSxcblxuICBjYW5TaG93KCkge1xuICAgIHJldHVybiBHbG9iYWwuaXRlbVR5cGUgIT0gXCIgXCI7XG4gIH0sXG5cbiAgc2hvd0NvbnRleHQoZHQpIHtcbiAgICB0aGlzLnR0ICs9IGR0O1xuICAgIGlmICghdGhpcy5pc1Nob3dlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0eXBlOlwiICsgR2xvYmFsLml0ZW1UeXBlKTtcbiAgICAgIHRoaXMuc2V0VGV4dERhdGEoKTtcbiAgICAgIGlmICh0aGlzLnR0ID49IDAuMDUpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dExhYmxlLnN0cmluZy5sZW5ndGggPCB0aGlzLm5vd1RleHQubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gdGhpcy5ub3dUZXh0LnNsaWNlKDAsdGhpcy50ZXh0TGFibGUuc3RyaW5nLmxlbmd0aCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5pc1Nob3dlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfSxcblxuICBvbkRpc2FibGUoKSB7XG4gICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLmluaXQoKTtcbiAgfSxcblxuICBzdGFydCgpIHt9LFxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMuc2hvd0NvbnRleHQoZHQpO1xuICB9LFxufSk7XG4iXX0=
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
    // 纸条内容视为npc
    //chp1 三楼走廊的 纸条内容 
    var chp1_zoulangF3_d1_content = [{
      role: 2,
      content: "今天是2015年元旦，我和我的舍友们好像来到了传说中的黑雾福大，宿舍楼里好像就只有我和我的舍友们，听说在这里会看到以前学长的留言，那我也留下我的留言吧。"
    }, {
      role: 2,
      content: "如果现在正在看留言的你被某个密码锁困住了，别担心，可能这个锁的密码能够从某些墙上找到一些线索"
    }, {
      role: 1,
      content: "原来这里就是黑雾福大，以前听学姐提到过，听说黑雾福大会把学生和老师困在这里，我还以为是都市传说呢，没想到是真的。"
    }, {
      role: 1,
      content: "虽然不清楚具体是什么情况，总之先出宿舍楼吧。"
    }, {
      role: 1,
      content: "既然是黑雾福大，那也别怪我私闯宿舍了，我应该去其他宿舍找找线索。"
    } //当前的testData
    ];
    var contents_Chp1_Scene1 = new Map();
    contents_Chp1_Scene1['npc1'] = chp1_zoulangF3_d1_content;
    window.Dialog.contents['chp1_三楼走廊'] = contents_Chp1_Scene1;
    var chp1_301_paper1_content = [{
      role: 2,
      content: "如果有人看到的话，请记住这间宿舍的门会自己消失，但是也许是这间宿舍原来的成员有强迫症，将外面挂着的衣服按照一定的顺序来排序，门就能出现，真是神奇。"
    }, {
      role: 1,
      content: "看起来门的消失和外面挂着的衣服有关，虽然很扯蛋，但是我要去看看，也许我能找到什么线索"
    }];
    var chp1_301_paper2_content = [{
      role: 2,
      content: "我的强迫症实在太严重了，但是我的舍友老是会忘记我衣物的晾晒顺序"
    }, {
      role: 2,
      content: "「4231」，希望这样的方法能够让舍友记住"
    }, {
      role: 2,
      content: "为了防止舍友忘记这串数字代表什么，我就给个提示吧："
    }, {
      role: 2,
      content: "妈妈给小明买了一条破洞裤，这条裤子在膝盖处有一处破洞，但是小明却坚持声称这条裤子有4个洞，其实妈妈是对的，小明也是对的"
    }];
    var contents_Chp1_301 = new Map();
    contents_Chp1_301['npc1'] = chp1_301_paper1_content;
    contents_Chp1_301['npc2'] = chp1_301_paper2_content;
    window.Dialog.contents['chp1_301'] = contents_Chp1_301;
    var chp1_2Floor_paper1_content = [{
      role: 2,
      content: "真的是很震惊！没想到201和203在黑雾福大中竟如此诡异，它们是完全对称的！希望之后读到这个纸条的人一定要记住"
    }, {
      role: 1,
      content: "201和203是对称的？也许这是我能进入202宿舍的关键"
    }];
    var contents_Chp1_2Floor = new Map();
    contents_Chp1_2Floor['npc1'] = chp1_2Floor_paper1_content;
    window.Dialog.contents['chp1_二楼走廊'] = contents_Chp1_2Floor; //chp2 scene1 contents

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
    window.Dialog.contents['chp2_scene1'] = contents_Chp2_Scene1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vZGlhbG9nQ29udGVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIndpbmRvdyIsIkRpYWxvZyIsImNvbnRlbnRzIiwiTWFwIiwic3RhcnQiLCJjaHAxX3pvdWxhbmdGM19kMV9jb250ZW50Iiwicm9sZSIsImNvbnRlbnQiLCJjb250ZW50c19DaHAxX1NjZW5lMSIsImNocDFfMzAxX3BhcGVyMV9jb250ZW50IiwiY2hwMV8zMDFfcGFwZXIyX2NvbnRlbnQiLCJjb250ZW50c19DaHAxXzMwMSIsImNocDFfMkZsb29yX3BhcGVyMV9jb250ZW50IiwiY29udGVudHNfQ2hwMV8yRmxvb3IiLCJjaHAyX3NjZW5lMV9ucGMxX2NvbnRlbnQiLCJjaHAyX3NjZW5lMV9ucGMyX2NvbnRlbnQiLCJjb250ZW50c19DaHAyX1NjZW5lMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLEVBSFA7RUFNTDtFQUVBQyxNQVJLLG9CQVFLO0lBQ05DLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQjtNQUNaQyxRQUFRLEVBQUNDO0lBREcsQ0FBaEI7RUFHSCxDQVpJO0VBY0xDLEtBZEssbUJBY0k7SUFHTDtJQUVBO0lBQ0EsSUFBSUMseUJBQXlCLEdBQUUsQ0FDM0I7TUFBQ0MsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRDJCLEVBRTNCO01BQUNELElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUYyQixFQUczQjtNQUFDRCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FIMkIsRUFJM0I7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBSjJCLEVBSzNCO01BQUNELElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUwyQixDQUs0QjtJQUw1QixDQUEvQjtJQVFBLElBQUlDLG9CQUFvQixHQUFHLElBQUlMLEdBQUosRUFBM0I7SUFDQUssb0JBQW9CLENBQUMsTUFBRCxDQUFwQixHQUErQkgseUJBQS9CO0lBRUFMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxRQUFkLENBQXVCLFdBQXZCLElBQXNDTSxvQkFBdEM7SUFHQSxJQUFJQyx1QkFBdUIsR0FBRSxDQUN6QjtNQUFDSCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FEeUIsRUFFekI7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRnlCLENBQTdCO0lBS0EsSUFBSUcsdUJBQXVCLEdBQUUsQ0FDekI7TUFBQ0osSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRHlCLEVBRXpCO01BQUNELElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUZ5QixFQUd6QjtNQUFDRCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FIeUIsRUFJekI7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBSnlCLENBQTdCO0lBT0EsSUFBSUksaUJBQWlCLEdBQUcsSUFBSVIsR0FBSixFQUF4QjtJQUNBUSxpQkFBaUIsQ0FBQyxNQUFELENBQWpCLEdBQTRCRix1QkFBNUI7SUFDQUUsaUJBQWlCLENBQUMsTUFBRCxDQUFqQixHQUE0QkQsdUJBQTVCO0lBR0FWLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxRQUFkLENBQXVCLFVBQXZCLElBQXFDUyxpQkFBckM7SUFHQSxJQUFJQywwQkFBMEIsR0FBRSxDQUM1QjtNQUFDTixJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FENEIsRUFFNUI7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRjRCLENBQWhDO0lBTUEsSUFBSU0sb0JBQW9CLEdBQUcsSUFBSVYsR0FBSixFQUEzQjtJQUNBVSxvQkFBb0IsQ0FBQyxNQUFELENBQXBCLEdBQStCRCwwQkFBL0I7SUFFQVosTUFBTSxDQUFDQyxNQUFQLENBQWNDLFFBQWQsQ0FBdUIsV0FBdkIsSUFBc0NXLG9CQUF0QyxDQWpESyxDQXNETDs7SUFFQSxJQUFJQyx3QkFBd0IsR0FBRSxDQUMxQjtNQUFDUixJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FEMEIsRUFFMUI7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRjBCLENBRUs7SUFGTCxDQUE5QjtJQU9BLElBQUlRLHdCQUF3QixHQUFFLENBQzFCO01BQUNULElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUQwQixFQUUxQjtNQUFDRCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FGMEIsQ0FFYTtJQUZiLENBQTlCO0lBTUEsSUFBSVMsb0JBQW9CLEdBQUcsSUFBSWIsR0FBSixFQUEzQjtJQUNBYSxvQkFBb0IsQ0FBQyxNQUFELENBQXBCLEdBQStCRix3QkFBL0I7SUFDQUUsb0JBQW9CLENBQUMsTUFBRCxDQUFwQixHQUErQkQsd0JBQS9CO0lBRUFmLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxRQUFkLENBQXVCLGFBQXZCLElBQXdDYyxvQkFBeEM7RUFDSCxDQXhGSSxDQTBGTDs7QUExRkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB3aW5kb3cuRGlhbG9nID0ge1xuICAgICAgICAgICAgY29udGVudHM6TWFwLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHsgXG5cblxuICAgICAgICAvLyDnurjmnaHlhoXlrrnop4bkuLpucGNcblxuICAgICAgICAvL2NocDEg5LiJ5qW86LWw5buK55qEIOe6uOadoeWGheWuuSBcbiAgICAgICAgbGV0IGNocDFfem91bGFuZ0YzX2QxX2NvbnRlbnQgPVtcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCLku4rlpKnmmK8yMDE15bm05YWD5pem77yM5oiR5ZKM5oiR55qE6IiN5Y+L5Lus5aW95YOP5p2l5Yiw5LqG5Lyg6K+05Lit55qE6buR6Zu+56aP5aSn77yM5a6/6IiN5qW86YeM5aW95YOP5bCx5Y+q5pyJ5oiR5ZKM5oiR55qE6IiN5Y+L5Lus77yM5ZCs6K+05Zyo6L+Z6YeM5Lya55yL5Yiw5Lul5YmN5a2m6ZW/55qE55WZ6KiA77yM6YKj5oiR5Lmf55WZ5LiL5oiR55qE55WZ6KiA5ZCn44CCXCJ9LFxuICAgICAgICAgICAge3JvbGU6MiwgY29udGVudDpcIuWmguaenOeOsOWcqOato+WcqOeci+eVmeiogOeahOS9oOiiq+afkOS4quWvhueggemUgeWbsOS9j+S6hu+8jOWIq+aLheW/g++8jOWPr+iDvei/meS4qumUgeeahOWvhueggeiDveWkn+S7juafkOS6m+WimeS4iuaJvuWIsOS4gOS6m+e6v+e0olwifSxcbiAgICAgICAgICAgIHtyb2xlOjEsIGNvbnRlbnQ6XCLljp/mnaXov5nph4zlsLHmmK/pu5Hpm77npo/lpKfvvIzku6XliY3lkKzlrablp5Dmj5DliLDov4fvvIzlkKzor7Tpu5Hpm77npo/lpKfkvJrmiorlrabnlJ/lkozogIHluIjlm7DlnKjov5nph4zvvIzmiJHov5jku6XkuLrmmK/pg73luILkvKDor7TlkaLvvIzmsqHmg7PliLDmmK/nnJ/nmoTjgIJcIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50Olwi6Jm954S25LiN5riF5qWa5YW35L2T5piv5LuA5LmI5oOF5Ya177yM5oC75LmL5YWI5Ye65a6/6IiN5qW85ZCn44CCXCJ9LFxuICAgICAgICAgICAge3JvbGU6MSwgY29udGVudDpcIuaXoueEtuaYr+m7kembvuemj+Wkp++8jOmCo+S5n+WIq+aAquaIkeengemXr+Wuv+iIjeS6hu+8jOaIkeW6lOivpeWOu+WFtuS7luWuv+iIjeaJvuaJvue6v+e0ouOAglwifSwgIC8v5b2T5YmN55qEdGVzdERhdGFcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb250ZW50c19DaHAxX1NjZW5lMSA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29udGVudHNfQ2hwMV9TY2VuZTFbJ25wYzEnXSA9IGNocDFfem91bGFuZ0YzX2QxX2NvbnRlbnQ7XG5cbiAgICAgICAgd2luZG93LkRpYWxvZy5jb250ZW50c1snY2hwMV/kuInmpbzotbDlu4onXSA9IGNvbnRlbnRzX0NocDFfU2NlbmUxO1xuXG5cbiAgICAgICAgbGV0IGNocDFfMzAxX3BhcGVyMV9jb250ZW50ID1bXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwi5aaC5p6c5pyJ5Lq655yL5Yiw55qE6K+d77yM6K+36K6w5L2P6L+Z6Ze05a6/6IiN55qE6Zeo5Lya6Ieq5bex5raI5aSx77yM5L2G5piv5Lmf6K645piv6L+Z6Ze05a6/6IiN5Y6f5p2l55qE5oiQ5ZGY5pyJ5by66L+r55eH77yM5bCG5aSW6Z2i5oyC552A55qE6KGj5pyN5oyJ54Wn5LiA5a6a55qE6aG65bqP5p2l5o6S5bqP77yM6Zeo5bCx6IO95Ye6546w77yM55yf5piv56We5aWH44CCXCJ9LFxuICAgICAgICAgICAge3JvbGU6MSwgY29udGVudDpcIueci+i1t+adpemXqOeahOa2iOWkseWSjOWklumdouaMguedgOeahOiho+acjeacieWFs++8jOiZveeEtuW+iOaJr+ibi++8jOS9huaYr+aIkeimgeWOu+eci+eci++8jOS5n+iuuOaIkeiDveaJvuWIsOS7gOS5iOe6v+e0olwifSxcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgY2hwMV8zMDFfcGFwZXIyX2NvbnRlbnQgPVtcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCLmiJHnmoTlvLrov6vnl4flrp7lnKjlpKrkuKXph43kuobvvIzkvYbmmK/miJHnmoToiI3lj4vogIHmmK/kvJrlv5jorrDmiJHooaPniannmoTmmb7mmZLpobrluo9cIn0sXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwi44CMNDIzMeOAje+8jOW4jOacm+i/meagt+eahOaWueazleiDveWkn+iuqeiIjeWPi+iusOS9j1wifSxcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCLkuLrkuobpmLLmraLoiI3lj4vlv5jorrDov5nkuLLmlbDlrZfku6Pooajku4DkuYjvvIzmiJHlsLHnu5nkuKrmj5DnpLrlkKfvvJpcIn0sXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwi5aaI5aaI57uZ5bCP5piO5Lmw5LqG5LiA5p2h56C05rSe6KOk77yM6L+Z5p2h6KOk5a2Q5Zyo6Iad55uW5aSE5pyJ5LiA5aSE56C05rSe77yM5L2G5piv5bCP5piO5Y205Z2a5oyB5aOw56ew6L+Z5p2h6KOk5a2Q5pyJNOS4qua0nu+8jOWFtuWunuWmiOWmiOaYr+WvueeahO+8jOWwj+aYjuS5n+aYr+WvueeahFwifSxcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb250ZW50c19DaHAxXzMwMSA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29udGVudHNfQ2hwMV8zMDFbJ25wYzEnXSA9IGNocDFfMzAxX3BhcGVyMV9jb250ZW50O1xuICAgICAgICBjb250ZW50c19DaHAxXzMwMVsnbnBjMiddID0gY2hwMV8zMDFfcGFwZXIyX2NvbnRlbnQ7XG5cblxuICAgICAgICB3aW5kb3cuRGlhbG9nLmNvbnRlbnRzWydjaHAxXzMwMSddID0gY29udGVudHNfQ2hwMV8zMDE7XG5cblxuICAgICAgICBsZXQgY2hwMV8yRmxvb3JfcGFwZXIxX2NvbnRlbnQgPVtcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCLnnJ/nmoTmmK/lvojpnIfmg4rvvIHmsqHmg7PliLAyMDHlkowyMDPlnKjpu5Hpm77npo/lpKfkuK3nq5/lpoLmraTor6HlvILvvIzlroPku6zmmK/lrozlhajlr7nnp7DnmoTvvIHluIzmnJvkuYvlkI7or7vliLDov5nkuKrnurjmnaHnmoTkurrkuIDlrpropoHorrDkvY9cIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50OlwiMjAx5ZKMMjAz5piv5a+556ew55qE77yf5Lmf6K646L+Z5piv5oiR6IO96L+b5YWlMjAy5a6/6IiN55qE5YWz6ZSuXCJ9LFxuICAgICAgICBdO1xuXG4gICAgICAgIFxuICAgICAgICBsZXQgY29udGVudHNfQ2hwMV8yRmxvb3IgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnRlbnRzX0NocDFfMkZsb29yWyducGMxJ10gPSBjaHAxXzJGbG9vcl9wYXBlcjFfY29udGVudDtcbiBcbiAgICAgICAgd2luZG93LkRpYWxvZy5jb250ZW50c1snY2hwMV/kuozmpbzotbDlu4onXSA9IGNvbnRlbnRzX0NocDFfMkZsb29yO1xuXG5cblxuXG4gICAgICAgIC8vY2hwMiBzY2VuZTEgY29udGVudHNcblxuICAgICAgICBsZXQgY2hwMl9zY2VuZTFfbnBjMV9jb250ZW50ID1bXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwic2NlbmUgMiBucGMxXCJ9LFxuICAgICAgICAgICAge3JvbGU6MSwgY29udGVudDpcImFhYWFhYWFhXCJ9LCAgLy/lvZPliY3nmoR0ZXN0RGF0YVxuICAgICAgICBdO1xuXG5cbiAgICAgICAgXG4gICAgICAgIGxldCBjaHAyX3NjZW5lMV9ucGMyX2NvbnRlbnQgPVtcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCJzY2VuZSAyIG5wYzFcIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50OlwiYmJiYmJiYmJiYmJiYmJiYlwifSwgIC8v5b2T5YmN55qEdGVzdERhdGFcbiAgICAgICAgXTtcblxuXG4gICAgICAgIGxldCBjb250ZW50c19DaHAyX1NjZW5lMSA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29udGVudHNfQ2hwMl9TY2VuZTFbJ25wYzEnXSA9IGNocDJfc2NlbmUxX25wYzFfY29udGVudCA7XG4gICAgICAgIGNvbnRlbnRzX0NocDJfU2NlbmUxWyducGMyJ10gPSBjaHAyX3NjZW5lMV9ucGMyX2NvbnRlbnQgO1xuXG4gICAgICAgIHdpbmRvdy5EaWFsb2cuY29udGVudHNbJ2NocDJfc2NlbmUxJ10gPSBjb250ZW50c19DaHAyX1NjZW5lMTtcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_sheguan/showStone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1c334NI1RJ1okAeIYXfAfh', 'showStone');
// scripts/game_chp1/cp1_lock_sheguan/showStone.js

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
    thisNode: cc.Node,
    successNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    if (window.lockOfGateCP1 == true) {
      this.label.getComponent(cc.Label).string = "密码正确，请拿走石头";
      this.successNode.active = true;
      this.thisNode.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja19zaGVndWFuL3Nob3dTdG9uZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwiTGFiZWwiLCJ0aGlzTm9kZSIsIk5vZGUiLCJzdWNjZXNzTm9kZSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJ3aW5kb3ciLCJsb2NrT2ZHYXRlQ1AxIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFDSixFQUFFLENBQUNLLEtBREQ7SUFFUkMsUUFBUSxFQUFDTixFQUFFLENBQUNPLElBRko7SUFHUkMsV0FBVyxFQUFDUixFQUFFLENBQUNPO0VBSFAsQ0FIUDtFQVFMO0VBRUE7RUFHQUUsS0FiSyxtQkFhSSxDQUNSLENBZEk7RUFnQkxDLE1BaEJLLGtCQWdCR0MsRUFoQkgsRUFnQk87SUFDUixJQUFJQyxNQUFNLENBQUNDLGFBQVAsSUFBd0IsSUFBNUIsRUFBaUM7TUFDN0IsS0FBS1QsS0FBTCxDQUFXVSxZQUFYLENBQXdCZCxFQUFFLENBQUNLLEtBQTNCLEVBQWtDVSxNQUFsQyxHQUEyQyxZQUEzQztNQUNBLEtBQUtQLFdBQUwsQ0FBaUJRLE1BQWpCLEdBQTBCLElBQTFCO01BQ0EsS0FBS1YsUUFBTCxDQUFjVSxNQUFkLEdBQXVCLEtBQXZCO0lBQ0g7RUFDSjtBQXRCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgdGhpc05vZGU6Y2MuTm9kZSxcbiAgICAgICAgc3VjY2Vzc05vZGU6Y2MuTm9kZSxcbiAgICB9LFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuICAgIFxuXG4gICAgc3RhcnQgKCkge1xuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9ja09mR2F0ZUNQMSA9PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuWvhueggeato+ehru+8jOivt+aLv+i1sOefs+WktFwiO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50aGlzTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_sheguan/addStone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74555x08xdLIIpOZokpIWNQ', 'addStone');
// scripts/game_chp1/cp1_lock_sheguan/addStone.js

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
  onLoad: function onLoad() {},
  addStone: function addStone() {
    cc.find("Canvas/NoStone").active = false;
    cc.find("Canvas/Label").getComponent(cc.Label).string = "请输入密码";
    cc.find("Canvas/gate").active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja19zaGVndWFuL2FkZFN0b25lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiYWRkU3RvbmUiLCJmaW5kIiwiYWN0aXZlIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLEVBSFA7RUFPTDtFQUVBQyxNQVRLLG9CQVNLLENBQUUsQ0FUUDtFQVdMQyxRQVhLLHNCQVdLO0lBQ05MLEVBQUUsQ0FBQ00sSUFBSCxDQUFRLGdCQUFSLEVBQTBCQyxNQUExQixHQUFtQyxLQUFuQztJQUNBUCxFQUFFLENBQUNNLElBQUgsQ0FBUSxjQUFSLEVBQXdCRSxZQUF4QixDQUFxQ1IsRUFBRSxDQUFDUyxLQUF4QyxFQUErQ0MsTUFBL0MsR0FBd0QsT0FBeEQ7SUFDQVYsRUFBRSxDQUFDTSxJQUFILENBQVEsYUFBUixFQUF1QkMsTUFBdkIsR0FBZ0MsSUFBaEM7RUFDSCxDQWZJO0VBZ0JMSSxLQWhCSyxtQkFnQkksQ0FDUixDQWpCSSxDQW1CTDs7QUFuQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICBcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge30sXG5cbiAgICBhZGRTdG9uZSgpe1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL05vU3RvbmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuivt+i+k+WFpeWvhueggVwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhdGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHN0YXJ0ICgpIHtcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
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
    cc.log(window.lockOfCupsInCP1);
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

    if (cup[0] == 0 && cup[1] == 0 && cup[2] == 1 && cup[3] == 0 && cup[4] == 1 && window.lockOfCupsInCP1 == -1) {
      window.lockOfCupsInCP1 = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY3VwLzFfamF2YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwid2luZG93IiwiY3VwIiwibGlzdGVuIiwidG91Y2hjbnQiLCJsb2NrT2ZDdXBzSW5DUDEiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwidXBkYXRlIiwiZHQiLCJsb2ciLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImNoYW5nZV9hIiwiY2hhbmdlX2IiLCJ0IiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFLENBQ1Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlUsQ0FITDtFQXFCUDtFQUVBO0VBRUFDLEtBekJPLG1CQXlCQztJQUNOQyxNQUFNLENBQUNDLEdBQVAsR0FBYSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWI7SUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLENBQWhCO0lBQ0FGLE1BQU0sQ0FBQ0csUUFBUCxHQUFrQixDQUFsQjtJQUNBSCxNQUFNLENBQUNJLGVBQVAsR0FBeUIsQ0FBQyxDQUExQixDQUpNLENBTU47O0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFYLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxVQUFVQyxLQUFWLEVBQWlCO01BQzFEUixNQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFtQixDQUFuQjtNQUNBQSxRQUFRO0lBQ1QsQ0FIRDtFQUlELENBcENNO0VBc0NQUSxNQXRDTyxrQkFzQ0FDLEVBdENBLEVBc0NJO0lBQ1RqQixFQUFFLENBQUNrQixHQUFILENBQU9iLE1BQU0sQ0FBQ0ksZUFBZDtJQUNBLElBQUlVLElBQUksR0FBRyxJQUFYOztJQUNBLElBQUliLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUFkLEVBQWlCO01BQ2ZOLEVBQUUsQ0FBQ29CLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixNQUFsQixFQUEwQnJCLEVBQUUsQ0FBQ3NCLFdBQTdCLEVBQTBDLFVBQVVDLEdBQVYsRUFBZUMsRUFBZixFQUFtQjtRQUMzREwsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJ6QixFQUFFLENBQUMwQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBZ0RILEVBQWhEO01BQ0QsQ0FGRDtJQUdEOztJQUNELElBQUlsQixHQUFHLENBQUMsQ0FBRCxDQUFILElBQVUsQ0FBZCxFQUFpQjtNQUNmTixFQUFFLENBQUNvQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkJyQixFQUFFLENBQUNzQixXQUE5QixFQUEyQyxVQUFVQyxHQUFWLEVBQWVDLEVBQWYsRUFBbUI7UUFDNURMLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCekIsRUFBRSxDQUFDMEIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdESCxFQUFoRDtNQUNELENBRkQ7SUFHRDs7SUFFRCxJQUFJaEIsUUFBUSxJQUFJLENBQWhCLEVBQW1CO01BQ2pCQSxRQUFRLEdBQUcsQ0FBWDtNQUNBLElBQUlvQixRQUFRLEdBQUdyQixNQUFNLENBQUMsQ0FBRCxDQUFyQjtNQUNBLElBQUlzQixRQUFRLEdBQUd0QixNQUFNLENBQUMsQ0FBRCxDQUFyQjtNQUNBLElBQUl1QixDQUFDLEdBQUd4QixHQUFHLENBQUNzQixRQUFELENBQVg7TUFDQXRCLEdBQUcsQ0FBQ3NCLFFBQUQsQ0FBSCxHQUFnQnRCLEdBQUcsQ0FBQ3VCLFFBQUQsQ0FBbkI7TUFDQXZCLEdBQUcsQ0FBQ3VCLFFBQUQsQ0FBSCxHQUFnQkMsQ0FBaEI7TUFDQXZCLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUFDLENBQWI7TUFDQUEsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBQUMsQ0FBYjtJQUNEOztJQUNELElBQ0VELEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUFWLElBQ0FBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQURWLElBRUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUZWLElBR0FBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUhWLElBSUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUpWLElBS0FELE1BQU0sQ0FBQ0ksZUFBUCxJQUEwQixDQUFDLENBTjdCLEVBT0U7TUFDQUosTUFBTSxDQUFDSSxlQUFQLEdBQXlCLENBQXpCO01BQ0FzQixPQUFPLENBQUNiLEdBQVIsQ0FBWSxVQUFaO0lBQ0Q7RUFDRjtBQXpFTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIC8vIGZvbzoge1xyXG4gICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gYmFyOiB7XHJcbiAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuICB9LFxyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHdpbmRvdy5jdXAgPSBbMCwgMSwgMCwgMSwgMF07XHJcbiAgICB3aW5kb3cubGlzdGVuID0gWy0xLCAtMV07XHJcbiAgICB3aW5kb3cudG91Y2hjbnQgPSAwO1xyXG4gICAgd2luZG93LmxvY2tPZkN1cHNJbkNQMSA9IC0xO1xyXG5cclxuICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgbGlzdGVuW3RvdWNoY250XSA9IDA7XHJcbiAgICAgIHRvdWNoY250Kys7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUoZHQpIHtcclxuICAgIGNjLmxvZyh3aW5kb3cubG9ja09mQ3Vwc0luQ1AxKTtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChjdXBbMF0gPT0gMSkge1xyXG4gICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInRhbGxcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwKSB7XHJcbiAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3A7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cFswXSA9PSAwKSB7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwKSB7XHJcbiAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3A7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b3VjaGNudCA9PSAyKSB7XHJcbiAgICAgIHRvdWNoY250ID0gMDtcclxuICAgICAgdmFyIGNoYW5nZV9hID0gbGlzdGVuWzBdO1xyXG4gICAgICB2YXIgY2hhbmdlX2IgPSBsaXN0ZW5bMV07XHJcbiAgICAgIHZhciB0ID0gY3VwW2NoYW5nZV9hXTtcclxuICAgICAgY3VwW2NoYW5nZV9hXSA9IGN1cFtjaGFuZ2VfYl07XHJcbiAgICAgIGN1cFtjaGFuZ2VfYl0gPSB0O1xyXG4gICAgICBsaXN0ZW5bMF0gPSAtMTtcclxuICAgICAgbGlzdGVuWzFdID0gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIGN1cFswXSA9PSAwICYmXHJcbiAgICAgIGN1cFsxXSA9PSAwICYmXHJcbiAgICAgIGN1cFsyXSA9PSAxICYmXHJcbiAgICAgIGN1cFszXSA9PSAwICYmXHJcbiAgICAgIGN1cFs0XSA9PSAxICYmXHJcbiAgICAgIHdpbmRvdy5sb2NrT2ZDdXBzSW5DUDEgPT0gLTFcclxuICAgICkge1xyXG4gICAgICB3aW5kb3cubG9ja09mQ3Vwc0luQ1AxID0gMTtcclxuICAgICAgY29uc29sZS5sb2coXCLmna/lrZDpobrluo/mkYbmlL7miJDlip9cIik7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_switch/showsuccess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d650h5UGFK7rDtV3DzOcMi', 'showsuccess');
// scripts/game_chp1/cp1_switch/showsuccess.js

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
    label: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    if (window.lockOfSwitchInCP1 == false) {
      this.label.getComponent(cc.Label).string = "恭喜你，答对了";
    }
  },
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfc3dpdGNoL3Nob3dzdWNjZXNzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGFiZWwiLCJMYWJlbCIsInN0YXJ0Iiwid2luZG93IiwibG9ja09mU3dpdGNoSW5DUDEiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBQ0osRUFBRSxDQUFDSztFQURELENBSFA7RUFPTDtFQUVBO0VBRUFDLEtBWEssbUJBV0k7SUFDTCxJQUFHQyxNQUFNLENBQUNDLGlCQUFQLElBQTRCLEtBQS9CLEVBQXFDO01BQ2pDLEtBQUtKLEtBQUwsQ0FBV0ssWUFBWCxDQUF3QlQsRUFBRSxDQUFDSyxLQUEzQixFQUFrQ0ssTUFBbEMsR0FBMkMsU0FBM0M7SUFDSDtFQUNKLENBZkk7RUFpQkxDLE1BakJLLGtCQWlCR0MsRUFqQkgsRUFpQk8sQ0FDWDtBQWxCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDpjYy5MYWJlbCxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGlmKHdpbmRvdy5sb2NrT2ZTd2l0Y2hJbkNQMSA9PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmga3llpzkvaDvvIznrZTlr7nkuoZcIjtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgfSxcblxufSk7XG4iXX0=
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
            this.node.color = cc.Color.RED;
            this.isClick = false;
        }
        else {
            this.node.color = cc.Color.BLACK;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY2hhbmdjb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7QUFFaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFDRSx3QkFBd0I7UUFEMUIscUVBdUJDO1FBcEJDLGVBQWU7UUFDZixhQUFPLEdBQVksSUFBSSxDQUFDOztRQWtCeEIsaUJBQWlCO0lBQ25CLENBQUM7SUFqQkMseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCw2QkFBVSxHQUFWO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFFL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQXBCa0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVCNUI7SUFBRCxlQUFDO0NBdkJELEFBdUJDLENBdkJxQyxFQUFFLENBQUMsU0FBUyxHQXVCakQ7a0JBdkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIC8vIG9uTG9hZCAoKSB7fVxuICBpc0NsaWNrOiBib29sZWFuID0gdHJ1ZTtcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmNoYW5nY29sb3IsIHRoaXMpO1xuICB9XG4gIGNoYW5nY29sb3IoKSB7XG4gICAgY2MubG9nKFwiYmFja2dyb3VuZF9jaGFuZ2Vjb2xvclwiKTtcbiAgICBpZiAodGhpcy5pc0NsaWNrID09IHRydWUpIHtcbiAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcblxuICAgICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCA9IHRoaXMuaXNDbGljay52YWx1ZU9mO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
        if (this.value == 111)
            cc.log("true");
    };
    NewClass.prototype.decraseScore = function (below_node) {
        this.value = this.value - below_node.value;
        cc.log(this.value);
        cc.log(below_node.button_name.string + "按下");
        if (this.value == 111)
            cc.log("true");
    };
    NewClass.prototype.check = function () {
        if (this.value == 111) {
            cc.log("true");
            window.lockOfWashingMachineInCp1 = 1;
        }
        else {
            cc.log("false");
            window.lockOfWashingMachineInCp1 = 0;
        }
        cc.log(window.lockOfWashingMachineInCp1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVDQztRQXJDQyxXQUFLLEdBQVcsQ0FBQyxDQUFDOztRQW9DbEIsaUJBQWlCO0lBQ25CLENBQUM7SUFuQ0Msd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxVQUFzQjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUMzQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHO1lBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsK0JBQVksR0FBWixVQUFhLFVBQXNCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUc7WUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLHlCQUF5QixHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMseUJBQXlCLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBbENEO1FBREMsUUFBUTsyQ0FDUztJQUZDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1QzVCO0lBQUQsZUFBQztDQXZDRCxBQXVDQyxDQXZDcUMsRUFBRSxDQUFDLFNBQVMsR0F1Q2pEO2tCQXZDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IGJlbG93X25vZGUgZnJvbSBcIi4vYnV0dG9uXCI7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHlcbiAgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgLy8gb25Mb2FkICgpIHt9XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vZGUub24oXCJhZGRTb2NyZVwiLCB0aGlzLmFkZFNvY3JlLCB0aGlzKTtcbiAgICB0aGlzLm5vZGUub24oXCJkZWNyYXNlU2NvcmVcIiwgdGhpcy5kZWNyYXNlU2NvcmUsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbihcImNoZWNrXCIsIHRoaXMuY2hlY2ssIHRoaXMpO1xuICB9XG5cbiAgYWRkU29jcmUoYmVsb3dfbm9kZTogYmVsb3dfbm9kZSkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgYmVsb3dfbm9kZS52YWx1ZTtcbiAgICBjYy5sb2codGhpcy52YWx1ZSk7XG4gICAgY2MubG9nKGJlbG93X25vZGUuYnV0dG9uX25hbWUuc3RyaW5nICsgXCLmjInkuItcIik7XG5cbiAgICBpZiAodGhpcy52YWx1ZSA9PSAxMTEpIGNjLmxvZyhcInRydWVcIik7XG4gIH1cbiAgZGVjcmFzZVNjb3JlKGJlbG93X25vZGU6IGJlbG93X25vZGUpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSAtIGJlbG93X25vZGUudmFsdWU7XG4gICAgY2MubG9nKHRoaXMudmFsdWUpO1xuICAgIGNjLmxvZyhiZWxvd19ub2RlLmJ1dHRvbl9uYW1lLnN0cmluZyArIFwi5oyJ5LiLXCIpO1xuICAgIGlmICh0aGlzLnZhbHVlID09IDExMSkgY2MubG9nKFwidHJ1ZVwiKTtcbiAgfVxuXG4gIGNoZWNrKCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09IDExMSkge1xuICAgICAgY2MubG9nKFwidHJ1ZVwiKTtcbiAgICAgIHdpbmRvdy5sb2NrT2ZXYXNoaW5nTWFjaGluZUluQ3AxID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2MubG9nKFwiZmFsc2VcIik7XG4gICAgICB3aW5kb3cubG9ja09mV2FzaGluZ01hY2hpbmVJbkNwMSA9IDA7XG4gICAgfVxuICAgIGNjLmxvZyh3aW5kb3cubG9ja09mV2FzaGluZ01hY2hpbmVJbkNwMSk7XG4gIH1cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
            this.label.string = "洗衣机发动了！";
            window.lockOfWashingMachineInCp1 = 1;
            cc.log(window.lockOfWashingMachineInCp1);
        }
        else {
            this.label.string = "洗衣机还没发动！";
            window.lockOfWashingMachineInCp1 = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY2hlY2tfb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxtQ0FBOEI7QUFTOUI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1QkM7UUFyQkMsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVcsSUFBSSxDQUFDOztRQWlCdEIsaUJBQWlCO0lBQ25CLENBQUM7SUFoQlcseUJBQU0sR0FBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNFLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLENBQUM7WUFDckMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQzs0Q0FDSztJQUxILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1QjVCO0lBQUQsZUFBQztDQXZCRCxBQXVCQyxDQXZCcUMsRUFBRSxDQUFDLFNBQVMsR0F1QmpEO2tCQXZCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy/orr7nva7lhajlsYDlsZ7mgKdcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLy93aW5kb3flr7nosaHlsZ7mgKdcbiAgICBsb2NrT2ZXYXNoaW5nTWFjaGluZUluQ3AxOiBudW1iZXI7IC8v5Yqg5YWl5a+56LGhXG4gIH1cbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY29uZmlnKVxuICBjb25maWc6IGNvbmZpZyA9IG51bGw7XG5cbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUub24oXCJjaGVja19vdXRcIiwgdGhpcy5jaGVja19vdXQsIHRoaXMpO1xuICB9XG4gIGNoZWNrX291dCgpIHtcbiAgICBjYy5sb2coXCJjaGVja19vdXRcIik7XG4gICAgaWYgKHRoaXMuY29uZmlnLnZhbHVlID09IDExMSkge1xuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIua0l+iho+acuuWPkeWKqOS6hu+8gVwiO1xuICAgICAgd2luZG93LmxvY2tPZldhc2hpbmdNYWNoaW5lSW5DcDEgPSAxO1xuICAgICAgY2MubG9nKHdpbmRvdy5sb2NrT2ZXYXNoaW5nTWFjaGluZUluQ3AxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIua0l+iho+acuui/mOayoeWPkeWKqO+8gVwiO1xuICAgICAgd2luZG93LmxvY2tPZldhc2hpbmdNYWNoaW5lSW5DcDEgPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
        if (this.button_name.string == "放水按钮1")
            this.value = 1;
        if (this.button_name.string == "放水按钮2")
            this.value = 3;
        if (this.button_name.string == "放水按钮3")
            this.value = 11;
        if (this.button_name.string == "放水按钮4")
            this.value = 29;
        if (this.button_name.string == "放水按钮5")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBDQztRQXpDQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsaUJBQVcsR0FBYSxJQUFJLENBQUM7O1FBZ0M3QixpQkFBaUI7SUFDbkIsQ0FBQztJQS9CQyx5QkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRXhELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQXBDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBSzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1U7SUFUVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEM1QjtJQUFELGVBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMENqRDtrQkExQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHVwcGVyX25vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIGlzQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgYnV0dG9uX25hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICBvbkxvYWQoKSB7XG4gICAgY2MubG9nKHRoaXMuYnV0dG9uX25hbWUuc3RyaW5nKTtcbiAgICBpZiAodGhpcy5idXR0b25fbmFtZS5zdHJpbmcgPT0gXCLmlL7msLTmjInpkq4xXCIpIHRoaXMudmFsdWUgPSAxO1xuICAgIGlmICh0aGlzLmJ1dHRvbl9uYW1lLnN0cmluZyA9PSBcIuaUvuawtOaMiemSrjJcIikgdGhpcy52YWx1ZSA9IDM7XG4gICAgaWYgKHRoaXMuYnV0dG9uX25hbWUuc3RyaW5nID09IFwi5pS+5rC05oyJ6ZKuM1wiKSB0aGlzLnZhbHVlID0gMTE7XG4gICAgaWYgKHRoaXMuYnV0dG9uX25hbWUuc3RyaW5nID09IFwi5pS+5rC05oyJ6ZKuNFwiKSB0aGlzLnZhbHVlID0gMjk7XG4gICAgaWYgKHRoaXMuYnV0dG9uX25hbWUuc3RyaW5nID09IFwi5pS+5rC05oyJ6ZKuNVwiKSB0aGlzLnZhbHVlID0gOTc7XG5cbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hzdGFydCwgdGhpcyk7XG4gIH1cblxuICB0b3VjaHN0YXJ0KCkge1xuICAgIGNjLmxvZyhcInN0YXJ0XCIpO1xuICAgIGlmICh0aGlzLmlzQ2xpY2sgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy51cHBlcl9ub2RlLmVtaXQoXCJhZGRTb2NyZVwiLCB0aGlzKTtcbiAgICAgIHRoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwcGVyX25vZGUuZW1pdChcImRlY3Jhc2VTY29yZVwiLCB0aGlzKTtcbiAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdjb2xvcigpIHtcbiAgICBjYy5sb2coXCJjaGFuZ2NvbG9yXCIpO1xuICAgIGlmICh0aGlzLmlzQ2xpY2sgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5CTFVFO1xuICAgIH1cbiAgfVxuICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_stair/stairclock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '120dctfqC9DELFLBN75xzOb', 'stairclock');
// scripts/game_chp1/cp1_lock_stair/stairclock.js

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
      cc.director.loadScene('chp1_stair_game1');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja19zdGFpci9zdGFpcmNsb2NrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsWUFBWTtNQUNuRFQsRUFBRSxDQUFDVSxRQUFILENBQVlDLFNBQVosQ0FBc0Isa0JBQXRCO0lBQ0MsQ0FGc0MsQ0FFckNDLElBRnFDLENBRWhDLElBRmdDLENBQTNDLEVBRWtCLElBRmxCO0VBR0gsQ0E3QkksQ0ErQkw7O0FBL0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdjaHAxX3N0YWlyX2dhbWUxJyk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO1xuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lamp/isClosetClosed.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88ff4RpqJRFDZc6kGqvp0UK', 'isClosetClosed');
// scripts/game_chp1/cp1_lamp/isClosetClosed.js

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
    openCloset: cc.Node // foo: {
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
  onLoad: function onLoad() {},
  start: function start() {
    console.log('window.lockOfClosetInCP1:', window.lockOfClosetInCP1);

    if (window.lockOfClosetInCP1) {
      this.openCloset.active = true;
      this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbGFtcC9pc0Nsb3NldENsb3NlZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9wZW5DbG9zZXQiLCJOb2RlIiwib25Mb2FkIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9ja09mQ2xvc2V0SW5DUDEiLCJhY3RpdmUiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFHSixFQUFFLENBQUNLLElBRFIsQ0FFUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0VBaEJRLENBSFA7RUFzQkw7RUFFQUMsTUF4Qkssb0JBd0JLLENBRVQsQ0ExQkk7RUE0QkxDLEtBNUJLLG1CQTRCSTtJQUNMQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWixFQUF3Q0MsTUFBTSxDQUFDQyxpQkFBL0M7O0lBQ0EsSUFBSUQsTUFBTSxDQUFDQyxpQkFBWCxFQUE4QjtNQUMxQixLQUFLUCxVQUFMLENBQWdCUSxNQUFoQixHQUF5QixJQUF6QjtNQUNBLEtBQUtDLElBQUwsQ0FBVUQsTUFBVixHQUFtQixLQUFuQjtJQUNIO0VBQ0osQ0FsQ0ksQ0FvQ0w7O0FBcENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG9wZW5DbG9zZXQgOiBjYy5Ob2RlLFxuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3cubG9ja09mQ2xvc2V0SW5DUDE6Jyx3aW5kb3cubG9ja09mQ2xvc2V0SW5DUDEpO1xuICAgICAgICBpZiAod2luZG93LmxvY2tPZkNsb3NldEluQ1AxKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5DbG9zZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
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
          this.textLabel.string = "工具使用成功！l";
          window.Items[this.scene][this.contactItem].used = true;
        } else if (window.InUse == '') {
          this.textLabel.string = "请先手持工具（在背包界面点击工具即可手持）";
          console.log("please take the tool");
        } else {
          this.textLabel.string = "错误的工具！";
          console.log("wrong tool");
        }
      } else {
        this.textLabel.string = "这件工具好像已经被使用过了哦";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhZy91c2VUb29sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwIiwiTm9kZSIsIm15bm9kZSIsIm9uTG9hZCIsImZpbmQiLCJ0ZXh0TGFiZWwiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsInN0YXJ0IiwiZXZlbnQiLCJjb250YWN0SXRlbSIsIndpbmRvdyIsIkdsb2JhbCIsIml0ZW1OYW1lIiwic2NlbmUiLCJjdXJyZW50U2NlbmUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJyIiwiY29uc29sZSIsImxvZyIsIkluVXNlIiwiSXRlbXMiLCJ1c2VkIiwidG9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEdBQUcsRUFBQ0osRUFBRSxDQUFDSyxJQURDO0lBRVJDLE1BQU0sRUFBQ04sRUFBRSxDQUFDSztFQUZGLENBSFA7RUFRTDtFQUVBRSxNQVZLLG9CQVVLO0lBQ04sS0FBS0gsR0FBTCxHQUFZSixFQUFFLENBQUNRLElBQUgsQ0FBUSx3QkFBUixDQUFaO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixLQUFLTCxHQUFMLENBQVNNLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLFlBQXJDLENBQWtEWCxFQUFFLENBQUNZLEtBQXJELENBQWpCO0lBQ0FaLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxFQUFmLENBQWtCZCxFQUFFLENBQUNlLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBM0MsRUFBcUQsS0FBS0MsU0FBMUQsRUFBcUUsSUFBckU7SUFDQWxCLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxFQUFmLENBQWtCZCxFQUFFLENBQUNlLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkcsTUFBM0MsRUFBbUQsS0FBS0MsT0FBeEQsRUFBaUUsSUFBakU7SUFDQXBCLEVBQUUsQ0FBQ3FCLElBQUgsQ0FBUUMsa0JBQVIsQ0FBMkIsS0FBS2hCLE1BQWhDO0VBQ0gsQ0FoQkk7RUFtQkxpQixLQW5CSyxtQkFtQkksQ0FDTDtFQUNILENBckJJO0VBdUJMTCxTQXZCSyxxQkF1QktNLEtBdkJMLEVBdUJXO0lBQ1o7SUFDQSxLQUFLQyxXQUFMLEdBQW1CQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsUUFBakM7SUFDQSxLQUFLQyxLQUFMLEdBQWFILE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRyxZQUEzQjs7SUFDQSxJQUFHTixLQUFLLENBQUNPLE9BQU4sSUFBaUIvQixFQUFFLENBQUNnQyxLQUFILENBQVNDLEdBQVQsQ0FBYUMsQ0FBakMsRUFBbUM7TUFDL0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVNWLE1BQU0sQ0FBQ1csS0FBNUI7O01BQ0EsSUFBR1gsTUFBTSxDQUFDWSxLQUFQLENBQWEsS0FBS1QsS0FBbEIsRUFBeUIsS0FBS0osV0FBOUIsRUFBMkNjLElBQTNDLElBQW1ELEtBQXRELEVBQTREO1FBQ3hELElBQUdiLE1BQU0sQ0FBQ1csS0FBUCxJQUFpQlgsTUFBTSxDQUFDWSxLQUFQLENBQWEsS0FBS1QsS0FBbEIsRUFBeUIsS0FBS0osV0FBOUIsRUFBMkNlLElBQS9ELEVBQXFFO1VBQ2pFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO1VBQ0EsS0FBSzNCLFNBQUwsQ0FBZWdDLE1BQWYsR0FBd0IsVUFBeEI7VUFDQWYsTUFBTSxDQUFDWSxLQUFQLENBQWEsS0FBS1QsS0FBbEIsRUFBeUIsS0FBS0osV0FBOUIsRUFBMkNjLElBQTNDLEdBQWtELElBQWxEO1FBQ0gsQ0FKRCxNQUtLLElBQUdiLE1BQU0sQ0FBQ1csS0FBUCxJQUFnQixFQUFuQixFQUFzQjtVQUN2QixLQUFLNUIsU0FBTCxDQUFlZ0MsTUFBZixHQUF3Qix1QkFBeEI7VUFDQU4sT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7UUFDSCxDQUhJLE1BSUQ7VUFDQSxLQUFLM0IsU0FBTCxDQUFlZ0MsTUFBZixHQUF3QixRQUF4QjtVQUNBTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO1FBQ0g7TUFDSixDQWRELE1BY0s7UUFDRCxLQUFLM0IsU0FBTCxDQUFlZ0MsTUFBZixHQUF3QixnQkFBeEI7TUFDSDtJQUNKO0VBQ0o7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwOmNjLk5vZGUsXG4gICAgICAgIG15bm9kZTpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMudGlwID0gIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvdGlwXCIpO1xuICAgICAgICB0aGlzLnRleHRMYWJlbCA9IHRoaXMudGlwLmdldENoaWxkQnlOYW1lKFwidGV4dExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm15bm9kZSk7XG4gICAgfSxcblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25LZXlEb3duKGV2ZW50KXtcbiAgICAgICAgLy8g6IOM5YyF5oyJ6ZKuXG4gICAgICAgIHRoaXMuY29udGFjdEl0ZW0gPSB3aW5kb3cuR2xvYmFsLml0ZW1OYW1lO1xuICAgICAgICB0aGlzLnNjZW5lID0gd2luZG93Lkdsb2JhbC5jdXJyZW50U2NlbmU7XG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJblVzZTpcIit3aW5kb3cuSW5Vc2UpO1xuICAgICAgICAgICAgaWYod2luZG93Lkl0ZW1zW3RoaXMuc2NlbmVdW3RoaXMuY29udGFjdEl0ZW1dLnVzZWQgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5JblVzZSA9PSAod2luZG93Lkl0ZW1zW3RoaXMuc2NlbmVdW3RoaXMuY29udGFjdEl0ZW1dLnRvb2wpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0IHRvb2xcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZyA9IFwi5bel5YW35L2/55So5oiQ5Yqf77yBbFwiO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuSXRlbXNbdGhpcy5zY2VuZV1bdGhpcy5jb250YWN0SXRlbV0udXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYod2luZG93LkluVXNlID09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nID0gXCLor7flhYjmiYvmjIHlt6XlhbfvvIjlnKjog4zljIXnlYzpnaLngrnlh7vlt6XlhbfljbPlj6/miYvmjIHvvIlcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UgdGFrZSB0aGUgdG9vbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nID0gXCLplJnor6/nmoTlt6XlhbfvvIFcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3cm9uZyB0b29sXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZyA9IFwi6L+Z5Lu25bel5YW35aW95YOP5bey57uP6KKr5L2/55So6L+H5LqG5ZOmXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------
