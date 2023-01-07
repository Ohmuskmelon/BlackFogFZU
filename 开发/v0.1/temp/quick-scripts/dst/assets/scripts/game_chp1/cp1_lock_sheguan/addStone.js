
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