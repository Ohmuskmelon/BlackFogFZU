
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