
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/setbuttom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50f502tUYFB+oYjgNgV6gLq', 'setbuttom');
// script/setbuttom.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.openlamp = 0;
cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    //点击使用物品会使物品图片出现在左上角
    this.node.pic = 'shade/1';
    var num = cc.find("Canvas/num");
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var usetool = cc.find("Canvas/lampshade"); //通过全路径获取对应节点

      if (openlamp == 0) {
        cc.loader.loadRes("shade/1", cc.SpriteFrame, function (err, spriteFrame) {
          usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes("num/1", cc.SpriteFrame, function (err, spriteFrame) {
          num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        openlamp++;
      } else if (openlamp == 1) {
        cc.loader.loadRes(null, cc.SpriteFrame, function (err, spriteFrame) {
          usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes(null, cc.SpriteFrame, function (err, spriteFrame) {
          num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        openlamp--;
      }
    }.bind(this), this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzZXRidXR0b20uanMiXSwibmFtZXMiOlsid2luZG93Iiwib3BlbmxhbXAiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwibm9kZSIsInBpYyIsIm51bSIsImZpbmQiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwidXNldG9vbCIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWdCLENBQWhCO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBS0xDLEVBQUFBLEtBTEssbUJBS0k7QUFDTDtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsR0FBVixHQUFjLFNBQWQ7QUFDQSxRQUFJQyxHQUFHLEdBQUNQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRLFlBQVIsQ0FBUjtBQUNBLFNBQUtILElBQUwsQ0FBVUksRUFBVixDQUFhVCxFQUFFLENBQUNVLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsWUFBWTtBQUNuRCxVQUFJQyxPQUFPLEdBQUdiLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRLGtCQUFSLENBQWQsQ0FEbUQsQ0FDUjs7QUFDM0MsVUFBR1QsUUFBUSxJQUFFLENBQWIsRUFDQTtBQUFDQyxRQUFBQSxFQUFFLENBQUNjLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixTQUFsQixFQUE2QmYsRUFBRSxDQUFDZ0IsV0FBaEMsRUFBNkMsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO0FBQ3RFTCxVQUFBQSxPQUFPLENBQUNNLFlBQVIsQ0FBcUJuQixFQUFFLENBQUNvQixNQUF4QixFQUFnQ0YsV0FBaEMsR0FBOENBLFdBQTlDO0FBQ0gsU0FGQTtBQUdEbEIsUUFBQUEsRUFBRSxDQUFDYyxNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkJmLEVBQUUsQ0FBQ2dCLFdBQTlCLEVBQTJDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUNuRVgsVUFBQUEsR0FBRyxDQUFDWSxZQUFKLENBQWlCbkIsRUFBRSxDQUFDb0IsTUFBcEIsRUFBNEJGLFdBQTVCLEdBQTBDQSxXQUExQztBQUNILFNBRkQ7QUFHQW5CLFFBQUFBLFFBQVE7QUFDWCxPQVJHLE1BU0ssSUFBR0EsUUFBUSxJQUFFLENBQWIsRUFDTDtBQUNJQyxRQUFBQSxFQUFFLENBQUNjLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixJQUFsQixFQUF3QmYsRUFBRSxDQUFDZ0IsV0FBM0IsRUFBd0MsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO0FBQ2hFTCxVQUFBQSxPQUFPLENBQUNNLFlBQVIsQ0FBcUJuQixFQUFFLENBQUNvQixNQUF4QixFQUFnQ0YsV0FBaEMsR0FBOENBLFdBQTlDO0FBQ0gsU0FGRDtBQUdBbEIsUUFBQUEsRUFBRSxDQUFDYyxNQUFILENBQVVDLE9BQVYsQ0FBa0IsSUFBbEIsRUFBd0JmLEVBQUUsQ0FBQ2dCLFdBQTNCLEVBQXdDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUNoRVgsVUFBQUEsR0FBRyxDQUFDWSxZQUFKLENBQWlCbkIsRUFBRSxDQUFDb0IsTUFBcEIsRUFBNEJGLFdBQTVCLEdBQTBDQSxXQUExQztBQUNILFNBRkQ7QUFHQW5CLFFBQUFBLFFBQVE7QUFDWDtBQUNBLEtBckJzQyxDQXFCckNzQixJQXJCcUMsQ0FxQmhDLElBckJnQyxDQUEzQyxFQXFCa0IsSUFyQmxCO0FBcUJ5QjtBQTlCeEIsQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbndpbmRvdy5vcGVubGFtcD0wO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgfSxcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+eCueWHu+S9v+eUqOeJqeWTgeS8muS9v+eJqeWTgeWbvueJh+WHuueOsOWcqOW3puS4iuinklxyXG4gICAgICAgIHRoaXMubm9kZS5waWM9J3NoYWRlLzEnO1xyXG4gICAgICAgIGxldCBudW09Y2MuZmluZChcIkNhbnZhcy9udW1cIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHVzZXRvb2wgPSBjYy5maW5kKFwiQ2FudmFzL2xhbXBzaGFkZVwiKTsgLy/pgJrov4flhajot6/lvoTojrflj5blr7nlupToioLngrlcclxuICAgICAgICAgICAgaWYob3BlbmxhbXA9PTApXHJcbiAgICAgICAgICAgIHtjYy5sb2FkZXIubG9hZFJlcyhcInNoYWRlLzFcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1c2V0b29sLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIm51bS8xXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgbnVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvcGVubGFtcCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihvcGVubGFtcD09MSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMobnVsbCwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNldG9vbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhudWxsLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb3BlbmxhbXAtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO31cclxufSk7XHJcbiJdfQ==