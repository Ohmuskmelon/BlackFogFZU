
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