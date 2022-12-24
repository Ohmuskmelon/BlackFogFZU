
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
require('./assets/0 - 001');
require('./assets/0 - 002');
require('./assets/0 - 003');
require('./assets/0 - 004');
require('./assets/0 - 005');
require('./assets/0 - 006');
require('./assets/0 - 007');
require('./assets/0 - 008');
require('./assets/0 - 009');
require('./assets/0 - 010');
require('./assets/0 - 011');
require('./assets/0 - 012');
require('./assets/0 - 013');
require('./assets/0 - 014');
require('./assets/0 - 015');
require('./assets/0');

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
                    var __filename = 'preview-scripts/assets/0 - 002.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '224c7uJ85xLMprcH4EXwY6y', '0 - 002');
// 0 - 002.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAwMi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxDQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0yO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD0yO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 005.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61780ptNb9Kuog+RlKSJkFe', '0 - 005');
// 0 - 005.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAwNS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxDQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD01O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD01O1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 004.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3741057Yd9EvZ1mlsoDI06T', '0 - 004');
// 0 - 004.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAwNC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxDQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD00O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD00O1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 003.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9abfYQT4tDEL95gXXKrjkx', '0 - 003');
// 0 - 003.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAwMy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ047QUFDQztBQUNBLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxDQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgLy8gd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0zO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD0zO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICBcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 006.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94ea4kV0j1OeqZTtQVLqO4y', '0 - 006');
// 0 - 006.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAwNi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxDQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD02O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD02O1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 009.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa1f81sfDBHhJ141Km6e5ih', '0 - 009');
// 0 - 009.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAwOS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxDQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD05O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD05O1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 008.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf528rAv89AMYJC+KJdgyXY', '0 - 008');
// 0 - 008.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAwOC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxDQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD04O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD04O1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0f65RlOPNAvIO6FKkKaL2N', '0 - 001');
// 0 - 001.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAwMS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxDQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0xO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD0xO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 013.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b9f0kF4vhHSog6hy8g8lYE', '0 - 013');
// 0 - 013.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAxMy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxFQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0xMztcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MTM7XHJcbiAgICAgICAgbGV0IHNlbGY9dGhpcztcclxuICAgICAgICBpZihxd251bVtpbmRleF09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInRhbGxcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09LTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNob3J0XCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 007.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7485cuFjRNLRYN0EPCKaPeX', '0 - 007');
// 0 - 007.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAwNy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxDQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD03O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD03O1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 010.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc3f41IKmlN7aW6H56O4jqu', '0 - 010');
// 0 - 010.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAxMC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxFQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0xMDtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MTA7XHJcbiAgICAgICAgbGV0IHNlbGY9dGhpcztcclxuICAgICAgICBpZihxd251bVtpbmRleF09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInRhbGxcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09LTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNob3J0XCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 012.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c5b3Ds/bFACI6bkcSbr2Wb', '0 - 012');
// 0 - 012.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAxMi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxFQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0xMjtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MTI7XHJcbiAgICAgICAgbGV0IHNlbGY9dGhpcztcclxuICAgICAgICBpZihxd251bVtpbmRleF09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInRhbGxcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09LTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNob3J0XCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 014.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fab14DILZFQ7LO6qcMOTEI', '0 - 014');
// 0 - 014.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAxNC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxFQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0xNDtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MTQ7XHJcbiAgICAgICAgbGV0IHNlbGY9dGhpcztcclxuICAgICAgICBpZihxd251bVtpbmRleF09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInRhbGxcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09LTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNob3J0XCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 011.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b7eaGa165LSIafuFCdPpwD', '0 - 011');
// 0 - 011.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAxMS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0w7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBQyxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxFQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBQ0EsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0xMTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MTE7XHJcbiAgICAgICAgbGV0IHNlbGY9dGhpcztcclxuICAgICAgICBpZihxd251bVtpbmRleF09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInRhbGxcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09LTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNob3J0XCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a636VHHQhEU5GkurZMX19X', '0');
// 0.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwid2luZG93IiwibGF0dGljZURlY3J5cHRpb25JbkNQMiIsInF3bnVtIiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwidXBkYXRlIiwiZHQiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0xDLElBQUFBLE1BQU0sQ0FBQ0Msc0JBQVAsR0FBOEIsQ0FBOUI7QUFDQUQsSUFBQUEsTUFBTSxDQUFDRSxLQUFQLEdBQWEsQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksQ0FBQyxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUFDLENBQXhCLEVBQTBCLENBQTFCLEVBQTRCLENBQTVCLEVBQThCLENBQTlCLEVBQWdDLENBQWhDLEVBQWtDLENBQUMsQ0FBbkMsQ0FBYixDQUZLLENBR0w7O0FBQ0EsUUFBSUMsS0FBSyxHQUFDLENBQVY7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVYsRUFBRSxDQUFDVyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTBDLFVBQVNDLEtBQVQsRUFBZTtBQUNyRFAsTUFBQUEsS0FBSyxDQUFDQyxLQUFELENBQUwsR0FBYSxDQUFDRCxLQUFLLENBQUNDLEtBQUQsQ0FBbkI7QUFDQSxVQUFHQSxLQUFLLElBQUUsRUFBVixFQUFhRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2IsVUFBR0EsS0FBSyxJQUFFLENBQVYsRUFBWUQsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNaLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2QsVUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBUyxDQUFaLEVBQWNELEtBQUssQ0FBQ0MsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNELEtBQUssQ0FBQ0MsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDakIsS0FORDtBQVNILEdBdkNJO0FBeUNMTyxFQUFBQSxNQXpDSyxrQkF5Q0dDLEVBekNILEVBeUNPO0FBQ1IsUUFBSVIsS0FBSyxHQUFDLENBQVY7QUFDQSxRQUFJUyxJQUFJLEdBQUMsSUFBVDs7QUFFQSxRQUFHVixLQUFLLENBQUNDLEtBQUQsQ0FBTCxJQUFjLENBQWpCLEVBQW1CO0FBQ2ZSLE1BQUFBLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixNQUFsQixFQUF5Qm5CLEVBQUUsQ0FBQ29CLFdBQTVCLEVBQXdDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNwREwsUUFBQUEsSUFBSSxDQUFDUixJQUFMLENBQVVjLFlBQVYsQ0FBdUJ2QixFQUFFLENBQUN3QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0QsT0FGSDtBQUdIOztBQUNELFFBQUdmLEtBQUssQ0FBQ0MsS0FBRCxDQUFMLElBQWMsQ0FBQyxDQUFsQixFQUFvQjtBQUNoQlIsTUFBQUEsRUFBRSxDQUFDa0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTBCbkIsRUFBRSxDQUFDb0IsV0FBN0IsRUFBeUMsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO0FBQ3JETCxRQUFBQSxJQUFJLENBQUNSLElBQUwsQ0FBVWMsWUFBVixDQUF1QnZCLEVBQUUsQ0FBQ3dCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7QUFDSCxPQUZEO0FBR0g7O0FBQ0QsU0FBSSxJQUFJSSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLElBQUUsRUFBZixFQUFrQkEsQ0FBQyxFQUFuQixFQUFzQjtBQUNsQixVQUFHbkIsS0FBSyxDQUFDbUIsQ0FBRCxDQUFMLElBQVUsQ0FBYixFQUFlOztBQUNmLFVBQUdBLENBQUMsSUFBRSxFQUFILElBQU9wQixzQkFBc0IsSUFBRSxDQUFsQyxFQUFvQztBQUNoQ0EsUUFBQUEsc0JBQXNCLEdBQUMsQ0FBdkI7QUFDQXFCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSDtBQUNKO0FBQ0o7QUE5REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHdpbmRvdy5sYXR0aWNlRGVjcnlwdGlvbkluQ1AyPTA7XHJcbiAgICAgICAgd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0wO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcXdudW1baW5kZXhdPS1xd251bVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4PD0xMSlxd251bVtpbmRleCs0XT0tcXdudW1baW5kZXgrNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4Pj00KXF3bnVtW2luZGV4LTRdPS1xd251bVtpbmRleC00XTtcclxuICAgICAgICAgICAgaWYoaW5kZXglNCE9MClxd251bVtpbmRleC0xXT0tcXdudW1baW5kZXgtMV07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTMpcXdudW1baW5kZXgrMV09LXF3bnVtW2luZGV4KzFdO1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBpbmRleD0wO1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxd251bVtpbmRleF09PS0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8PTE1O2krKyl7XHJcbiAgICAgICAgICAgIGlmKHF3bnVtW2ldIT0xKWJyZWFrO1xyXG4gICAgICAgICAgICBpZihpPT0xNSYmbGF0dGljZURlY3J5cHRpb25JbkNQMj09MCl7XHJcbiAgICAgICAgICAgICAgICBsYXR0aWNlRGVjcnlwdGlvbkluQ1AyPTE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2NlZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/0 - 015.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d305S5O09E85WR5HFWsoml', '0 - 015');
// 0 - 015.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMCAtIDAxNS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5kZXgiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwicXdudW0iLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ047QUFDQztBQUNBLFFBQUlDLEtBQUssR0FBQyxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLEtBQUssQ0FBQ1AsS0FBRCxDQUFMLEdBQWEsQ0FBQ08sS0FBSyxDQUFDUCxLQUFELENBQW5CO0FBQ0EsVUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYU8sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNiLFVBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNPLEtBQUssQ0FBQ1AsS0FBSyxHQUFDLENBQVAsQ0FBckI7QUFDWixVQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ08sS0FBSyxDQUFDUCxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtBQUNkLFVBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDTyxLQUFLLENBQUNQLEtBQUssR0FBQyxDQUFQLENBQXJCO0FBQ2pCLEtBTkQ7QUFTSCxHQXRDSTtBQXdDTFEsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztBQUNSLFFBQUlULEtBQUssR0FBQyxFQUFWO0FBQ0EsUUFBSVUsSUFBSSxHQUFDLElBQVQ7O0FBRUEsUUFBR0gsS0FBSyxDQUFDUCxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtBQUNmTCxNQUFBQSxFQUFFLENBQUNnQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJqQixFQUFFLENBQUNrQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcERMLFFBQUFBLElBQUksQ0FBQ1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCckIsRUFBRSxDQUFDc0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztBQUNELE9BRkg7QUFHSDs7QUFDRCxRQUFHUixLQUFLLENBQUNQLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7QUFDaEJMLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQmpCLEVBQUUsQ0FBQ2tCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDVCxJQUFMLENBQVVlLFlBQVYsQ0FBdUJyQixFQUFFLENBQUNzQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUF2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgLy8gd2luZG93LnF3bnVtPVstMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTEsMSwxLDEsMSwtMV07XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAgICAgIGxldCBpbmRleD0xNTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MTU7XHJcbiAgICAgICAgbGV0IHNlbGY9dGhpcztcclxuICAgICAgICBcclxuICAgICAgICBpZihxd251bVtpbmRleF09PTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInRhbGxcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09LTEpe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNob3J0XCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
