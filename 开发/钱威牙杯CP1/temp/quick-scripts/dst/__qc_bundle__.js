
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
require('./assets/1_java');
require('./assets/2_java');
require('./assets/3_java');
require('./assets/4_java');
require('./assets/5_java');

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
                    var __filename = 'preview-scripts/assets/1_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51178HXPsBKEr6kOcKrGoe8', '1_java');
// 1_java.js

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

    if (cup[0] == 0 && cup[1] == 0 && cup[2] == 1 && cup[3] == 0 && cup[4] == 1 && lockOfCupsInCP1 == -1) {
      lockOfCupsInCP1 = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMV9qYXZhLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJ3aW5kb3ciLCJjdXAiLCJsaXN0ZW4iLCJ0b3VjaGNudCIsImxvY2tPZkN1cHNJbkNQMSIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiZXZlbnQiLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiY2hhbmdlX2EiLCJjaGFuZ2VfYiIsInQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0xDLElBQUFBLE1BQU0sQ0FBQ0MsR0FBUCxHQUFXLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBWDtBQUNBRCxJQUFBQSxNQUFNLENBQUNFLE1BQVAsR0FBYyxDQUFDLENBQUMsQ0FBRixFQUFJLENBQUMsQ0FBTCxDQUFkO0FBQ0FGLElBQUFBLE1BQU0sQ0FBQ0csUUFBUCxHQUFnQixDQUFoQjtBQUNBSCxJQUFBQSxNQUFNLENBQUNJLGVBQVAsR0FBdUIsQ0FBQyxDQUF4QixDQUpLLENBS0w7O0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFYLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRSLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLEdBQWlCLENBQWpCO0FBQ0FBLE1BQUFBLFFBQVE7QUFHWCxLQUxEO0FBT0gsR0F0Q0k7QUF3Q0xRLEVBQUFBLE1BeENLLGtCQXdDR0MsRUF4Q0gsRUF3Q087QUFDUixRQUFJQyxJQUFJLEdBQUMsSUFBVDs7QUFDQSxRQUFHWixHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO0FBQ1ROLE1BQUFBLEVBQUUsQ0FBQ21CLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixNQUFsQixFQUF5QnBCLEVBQUUsQ0FBQ3FCLFdBQTVCLEVBQXdDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNwREwsUUFBQUEsSUFBSSxDQUFDUixJQUFMLENBQVVjLFlBQVYsQ0FBdUJ4QixFQUFFLENBQUN5QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0QsT0FGSDtBQUdIOztBQUNELFFBQUdqQixHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO0FBQ1ROLE1BQUFBLEVBQUUsQ0FBQ21CLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQnBCLEVBQUUsQ0FBQ3FCLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtBQUNyREwsUUFBQUEsSUFBSSxDQUFDUixJQUFMLENBQVVjLFlBQVYsQ0FBdUJ4QixFQUFFLENBQUN5QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIOztBQUVELFFBQUdmLFFBQVEsSUFBRSxDQUFiLEVBQWU7QUFDWEEsTUFBQUEsUUFBUSxHQUFDLENBQVQ7QUFDQSxVQUFJbUIsUUFBUSxHQUFDcEIsTUFBTSxDQUFDLENBQUQsQ0FBbkI7QUFDQSxVQUFJcUIsUUFBUSxHQUFDckIsTUFBTSxDQUFDLENBQUQsQ0FBbkI7QUFDQSxVQUFJc0IsQ0FBQyxHQUFDdkIsR0FBRyxDQUFDcUIsUUFBRCxDQUFUO0FBQ0FyQixNQUFBQSxHQUFHLENBQUNxQixRQUFELENBQUgsR0FBY3JCLEdBQUcsQ0FBQ3NCLFFBQUQsQ0FBakI7QUFDQXRCLE1BQUFBLEdBQUcsQ0FBQ3NCLFFBQUQsQ0FBSCxHQUFjQyxDQUFkO0FBQ0F0QixNQUFBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVUsQ0FBQyxDQUFYO0FBQ0FBLE1BQUFBLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBVSxDQUFDLENBQVg7QUFDSDs7QUFDRCxRQUFHRCxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBUixJQUFXQSxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBbkIsSUFBc0JBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBUSxDQUE5QixJQUFpQ0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQXpDLElBQTRDQSxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBcEQsSUFBdURHLGVBQWUsSUFBRSxDQUFDLENBQTVFLEVBQThFO0FBQzFFQSxNQUFBQSxlQUFlLEdBQUMsQ0FBaEI7QUFDQXFCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDSDtBQUVKO0FBcEVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB3aW5kb3cuY3VwPVswLDEsMCwxLDBdO1xyXG4gICAgICAgIHdpbmRvdy5saXN0ZW49Wy0xLC0xXTtcclxuICAgICAgICB3aW5kb3cudG91Y2hjbnQ9MDtcclxuICAgICAgICB3aW5kb3cubG9ja09mQ3Vwc0luQ1AxPS0xO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxpc3Rlblt0b3VjaGNudF09MDtcclxuICAgICAgICAgICAgdG91Y2hjbnQrKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIGlmKGN1cFswXT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY3VwWzBdPT0wKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0b3VjaGNudD09Mil7XHJcbiAgICAgICAgICAgIHRvdWNoY250PTA7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2VfYT1saXN0ZW5bMF07XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2VfYj1saXN0ZW5bMV07XHJcbiAgICAgICAgICAgIHZhciB0PWN1cFtjaGFuZ2VfYV07XHJcbiAgICAgICAgICAgIGN1cFtjaGFuZ2VfYV09Y3VwW2NoYW5nZV9iXTtcclxuICAgICAgICAgICAgY3VwW2NoYW5nZV9iXT10O1xyXG4gICAgICAgICAgICBsaXN0ZW5bMF09LTE7XHJcbiAgICAgICAgICAgIGxpc3RlblsxXT0tMTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGN1cFswXT09MCYmY3VwWzFdPT0wJiZjdXBbMl09PTEmJmN1cFszXT09MCYmY3VwWzRdPT0xJiZsb2NrT2ZDdXBzSW5DUDE9PS0xKXtcclxuICAgICAgICAgICAgbG9ja09mQ3Vwc0luQ1AxPTE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5p2v5a2Q6aG65bqP5pGG5pS+5oiQ5YqfXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/2_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '402c0aG7DdAKJL+j8CQklAs', '2_java');
// 2_java.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMl9qYXZhLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwibGlzdGVuIiwidG91Y2hjbnQiLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJjdXAiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0wsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLEdBQWlCLENBQWpCO0FBQ0FBLE1BQUFBLFFBQVE7QUFHWCxLQUxEO0FBTUgsR0FoQ0k7QUFrQ0xDLEVBQUFBLE1BbENLLGtCQWtDR0MsRUFsQ0gsRUFrQ087QUFDUixRQUFJQyxJQUFJLEdBQUMsSUFBVDs7QUFDQSxRQUFHQyxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO0FBQ1RoQixNQUFBQSxFQUFFLENBQUNpQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJsQixFQUFFLENBQUNtQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcEROLFFBQUFBLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnRCLEVBQUUsQ0FBQ3VCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7QUFDRCxPQUZIO0FBR0g7O0FBQ0QsUUFBR0wsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtBQUNUaEIsTUFBQUEsRUFBRSxDQUFDaUIsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTBCbEIsRUFBRSxDQUFDbUIsV0FBN0IsRUFBeUMsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO0FBQ3JETixRQUFBQSxJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ0QixFQUFFLENBQUN1QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgbGlzdGVuW3RvdWNoY250XT0xO1xyXG4gICAgICAgICAgICB0b3VjaGNudCsrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYoY3VwWzFdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbMV09PTApe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNob3J0XCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/3_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca069yV8pxB37RadNUVO5Hv', '3_java');
// 3_java.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcM19qYXZhLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwibGlzdGVuIiwidG91Y2hjbnQiLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJjdXAiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0wsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLEdBQWlCLENBQWpCO0FBQ0FBLE1BQUFBLFFBQVE7QUFHWCxLQUxEO0FBTUgsR0FoQ0k7QUFrQ0xDLEVBQUFBLE1BbENLLGtCQWtDR0MsRUFsQ0gsRUFrQ087QUFDUixRQUFJQyxJQUFJLEdBQUMsSUFBVDs7QUFDQSxRQUFHQyxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO0FBQ1RoQixNQUFBQSxFQUFFLENBQUNpQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJsQixFQUFFLENBQUNtQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcEROLFFBQUFBLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnRCLEVBQUUsQ0FBQ3VCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7QUFDRCxPQUZIO0FBR0g7O0FBQ0QsUUFBR0wsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtBQUNUaEIsTUFBQUEsRUFBRSxDQUFDaUIsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTBCbEIsRUFBRSxDQUFDbUIsV0FBN0IsRUFBeUMsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO0FBQ3JETixRQUFBQSxJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ0QixFQUFFLENBQUN1QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgbGlzdGVuW3RvdWNoY250XT0yO1xyXG4gICAgICAgICAgICB0b3VjaGNudCsrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYoY3VwWzJdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbMl09PTApe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNob3J0XCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/4_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e03b8ROOF9La4wgX65snXcx', '4_java');
// 4_java.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcNF9qYXZhLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwibGlzdGVuIiwidG91Y2hjbnQiLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJjdXAiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0wsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLEdBQWlCLENBQWpCO0FBQ0FBLE1BQUFBLFFBQVE7QUFHWCxLQUxEO0FBTUgsR0FoQ0k7QUFrQ0xDLEVBQUFBLE1BbENLLGtCQWtDR0MsRUFsQ0gsRUFrQ087QUFDUixRQUFJQyxJQUFJLEdBQUMsSUFBVDs7QUFDQSxRQUFHQyxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO0FBQ1RoQixNQUFBQSxFQUFFLENBQUNpQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJsQixFQUFFLENBQUNtQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcEROLFFBQUFBLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnRCLEVBQUUsQ0FBQ3VCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7QUFDRCxPQUZIO0FBR0g7O0FBQ0QsUUFBR0wsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtBQUNUaEIsTUFBQUEsRUFBRSxDQUFDaUIsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTBCbEIsRUFBRSxDQUFDbUIsV0FBN0IsRUFBeUMsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO0FBQ3JETixRQUFBQSxJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ0QixFQUFFLENBQUN1QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgbGlzdGVuW3RvdWNoY250XT0zO1xyXG4gICAgICAgICAgICB0b3VjaGNudCsrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYoY3VwWzNdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbM109PTApe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNob3J0XCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/5_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6082dqYZChAFYKh6VS6q+wR', '5_java');
// 5_java.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcNV9qYXZhLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwibGlzdGVuIiwidG91Y2hjbnQiLCJ1cGRhdGUiLCJkdCIsInNlbGYiLCJjdXAiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0wsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7QUFDckRDLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLEdBQWlCLENBQWpCO0FBQ0FBLE1BQUFBLFFBQVE7QUFHWCxLQUxEO0FBTUgsR0FoQ0k7QUFrQ0xDLEVBQUFBLE1BbENLLGtCQWtDR0MsRUFsQ0gsRUFrQ087QUFDUixRQUFJQyxJQUFJLEdBQUMsSUFBVDs7QUFDQSxRQUFHQyxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVEsQ0FBWCxFQUFhO0FBQ1RoQixNQUFBQSxFQUFFLENBQUNpQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJsQixFQUFFLENBQUNtQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7QUFDcEROLFFBQUFBLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnRCLEVBQUUsQ0FBQ3VCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUE4Q0gsRUFBOUM7QUFDRCxPQUZIO0FBR0g7O0FBQ0QsUUFBR0wsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLENBQVgsRUFBYTtBQUNUaEIsTUFBQUEsRUFBRSxDQUFDaUIsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTBCbEIsRUFBRSxDQUFDbUIsV0FBN0IsRUFBeUMsVUFBU0MsR0FBVCxFQUFhQyxFQUFiLEVBQWdCO0FBQ3JETixRQUFBQSxJQUFJLENBQUNWLElBQUwsQ0FBVWlCLFlBQVYsQ0FBdUJ0QixFQUFFLENBQUN1QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO0FBQ0gsT0FGRDtBQUdIO0FBRUo7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgbGlzdGVuW3RvdWNoY250XT00O1xyXG4gICAgICAgICAgICB0b3VjaGNudCsrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYoY3VwWzRdPT0xKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0YWxsXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXBbNF09PTApe1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNob3J0XCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwKXtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1zcDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
