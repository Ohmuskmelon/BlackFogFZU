
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