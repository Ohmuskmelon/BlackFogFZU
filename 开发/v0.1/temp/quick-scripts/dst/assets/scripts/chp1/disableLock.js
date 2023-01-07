
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