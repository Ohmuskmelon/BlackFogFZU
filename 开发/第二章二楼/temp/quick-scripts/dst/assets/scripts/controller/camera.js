
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