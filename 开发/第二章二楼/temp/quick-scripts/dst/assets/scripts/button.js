
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b14c8Gs9RI4ptogT/k0CVp', 'button');
// scripts/button.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.count = 0;
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
      var paper = cc.find("Canvas/color2");

      if (count == 0) {
        cc.loader.loadRes("color/color1", cc.SpriteFrame, function (err, spriteFrame) {
          paper.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        count++;
      } else {
        cc.loader.loadRes("color/color3", cc.SpriteFrame, function (err, spriteFrame) {
          paper.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
      }
    }.bind(this), this);
  }
} // update (dt) {},
);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjb3VudCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsInBhcGVyIiwiZmluZCIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWEsQ0FBYjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsS0F6QkssbUJBeUJJO0lBQ0wsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxZQUFZO01BQ25ELElBQUlDLEtBQUssR0FBQ1YsRUFBRSxDQUFDVyxJQUFILENBQVEsZUFBUixDQUFWOztNQUNBLElBQUdaLEtBQUssSUFBRSxDQUFWLEVBQ0o7UUFBQ0MsRUFBRSxDQUFDWSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsY0FBbEIsRUFBa0NiLEVBQUUsQ0FBQ2MsV0FBckMsRUFBa0QsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO1VBQ3ZFTixLQUFLLENBQUNPLFlBQU4sQ0FBbUJqQixFQUFFLENBQUNrQixNQUF0QixFQUE4QkYsV0FBOUIsR0FBNENBLFdBQTVDO1FBQ0gsQ0FGSjtRQUdEakIsS0FBSztNQUFJLENBSkwsTUFNQTtRQUNJQyxFQUFFLENBQUNZLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixjQUFsQixFQUFrQ2IsRUFBRSxDQUFDYyxXQUFyQyxFQUFrRCxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7VUFDMUVOLEtBQUssQ0FBQ08sWUFBTixDQUFtQmpCLEVBQUUsQ0FBQ2tCLE1BQXRCLEVBQThCRixXQUE5QixHQUE0Q0EsV0FBNUM7UUFDSCxDQUZEO01BR0g7SUFDQSxDQWJzQyxDQWFyQ0csSUFicUMsQ0FhaEMsSUFiZ0MsQ0FBM0MsRUFha0IsSUFibEI7RUFheUI7QUF2Q3hCLENBQVQsQ0EwQ0k7QUExQ0oiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG53aW5kb3cuY291bnQ9MDtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgcGFwZXI9Y2MuZmluZChcIkNhbnZhcy9jb2xvcjJcIik7XHJcbiAgICAgICAgICAgIGlmKGNvdW50PT0wKVxyXG4gICAgICAgIHtjYy5sb2FkZXIubG9hZFJlcyhcImNvbG9yL2NvbG9yMVwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHBhcGVyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvdW50Kys7fVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiY29sb3IvY29sb3IzXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcGVyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO31cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbik7XHJcbiJdfQ==