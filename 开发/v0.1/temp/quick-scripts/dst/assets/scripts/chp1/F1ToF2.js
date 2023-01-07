
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