
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bag/bagTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '675b4MjrUtDsbeqAip2bkSk', 'bagTool');
// scripts/bag/bagTool.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  initInfo: function initInfo(info) {
    // 初始化该道具相关信息
    // 图片
    var self = this;
    cc.resources.load(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
      self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    }); // 介绍

    this.node.intro = info['intro'];
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var searchNode = cc.find("Canvas/Main Camera/bag/intro"); //通过全路径获取对应节点

      searchNode.getComponent(cc.Label).string = this.node.intro;
      searchNode.active = true;
    }.bind(this), this); // 点击使用物品会使物品图片出现在右上角

    this.node.pic = info['picUrl'];
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      var usetool = cc.find("Canvas/Main Camera/bag/useTool/body"); //通过全路径获取对应节点

      cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
        usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      });
      window.InUse = info['name'];
    }.bind(this), this);
    console.log("In use tool:" + window.InUse);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhZy9iYWdUb29sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdEluZm8iLCJpbmZvIiwic2VsZiIsInJlc291cmNlcyIsImxvYWQiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImludHJvIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsInNlYXJjaE5vZGUiLCJmaW5kIiwiTGFiZWwiLCJzdHJpbmciLCJhY3RpdmUiLCJiaW5kIiwicGljIiwidXNldG9vbCIsImxvYWRlciIsImxvYWRSZXMiLCJ3aW5kb3ciLCJJblVzZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBTUw7RUFFQUMsUUFSSyxvQkFRS0MsSUFSTCxFQVFXO0lBQ1o7SUFFQTtJQUNBLElBQUlDLElBQUksR0FBRyxJQUFYO0lBQ0FOLEVBQUUsQ0FBQ08sU0FBSCxDQUFhQyxJQUFiLENBQWtCSCxJQUFJLENBQUMsUUFBRCxDQUF0QixFQUFrQ0wsRUFBRSxDQUFDUyxXQUFyQyxFQUFrRCxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7TUFDMUVMLElBQUksQ0FBQ00sSUFBTCxDQUFVQyxZQUFWLENBQXVCYixFQUFFLENBQUNjLE1BQTFCLEVBQWtDSCxXQUFsQyxHQUFnREEsV0FBaEQ7SUFDSCxDQUZELEVBTFksQ0FTWjs7SUFDQSxLQUFLQyxJQUFMLENBQVVHLEtBQVYsR0FBa0JWLElBQUksQ0FBQyxPQUFELENBQXRCO0lBQ0EsS0FBS08sSUFBTCxDQUFVSSxFQUFWLENBQWFoQixFQUFFLENBQUNpQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTJDLFlBQVk7TUFDbkQsSUFBSUMsVUFBVSxHQUFHcEIsRUFBRSxDQUFDcUIsSUFBSCxDQUFRLDhCQUFSLENBQWpCLENBRG1ELENBQ087O01BQzFERCxVQUFVLENBQUNQLFlBQVgsQ0FBd0JiLEVBQUUsQ0FBQ3NCLEtBQTNCLEVBQWtDQyxNQUFsQyxHQUF5QyxLQUFLWCxJQUFMLENBQVVHLEtBQW5EO01BQ0FLLFVBQVUsQ0FBQ0ksTUFBWCxHQUFvQixJQUFwQjtJQUNDLENBSnNDLENBSXJDQyxJQUpxQyxDQUloQyxJQUpnQyxDQUEzQyxFQUlrQixJQUpsQixFQVhZLENBaUJaOztJQUNBLEtBQUtiLElBQUwsQ0FBVWMsR0FBVixHQUFjckIsSUFBSSxDQUFDLFFBQUQsQ0FBbEI7SUFDQSxLQUFLTyxJQUFMLENBQVVJLEVBQVYsQ0FBYWhCLEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsWUFBWTtNQUNuRCxJQUFJUSxPQUFPLEdBQUczQixFQUFFLENBQUNxQixJQUFILENBQVEscUNBQVIsQ0FBZCxDQURtRCxDQUNXOztNQUM5RHJCLEVBQUUsQ0FBQzRCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQnhCLElBQUksQ0FBQyxRQUFELENBQXRCLEVBQWtDTCxFQUFFLENBQUNTLFdBQXJDLEVBQWtELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtRQUMxRWdCLE9BQU8sQ0FBQ2QsWUFBUixDQUFxQmIsRUFBRSxDQUFDYyxNQUF4QixFQUFnQ0gsV0FBaEMsR0FBOENBLFdBQTlDO01BQ0gsQ0FGRDtNQUdBbUIsTUFBTSxDQUFDQyxLQUFQLEdBQWUxQixJQUFJLENBQUMsTUFBRCxDQUFuQjtJQUNILENBTjBDLENBTXpDb0IsSUFOeUMsQ0FNcEMsSUFOb0MsQ0FBM0MsRUFNYyxJQU5kO0lBT0FPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFnQkgsTUFBTSxDQUFDQyxLQUFuQztFQUNIO0FBbkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgaW5pdEluZm8gKGluZm8pIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW6K+l6YGT5YW355u45YWz5L+h5oGvXG4gXG4gICAgICAgIC8vIOWbvueJh1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGluZm9bJ3BpY1VybCddLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICB9KTtcbiBcbiAgICAgICAgLy8g5LuL57uNXG4gICAgICAgIHRoaXMubm9kZS5pbnRybyA9IGluZm9bJ2ludHJvJ107XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvYmFnL2ludHJvXCIpOyAvL+mAmui/h+WFqOi3r+W+hOiOt+WPluWvueW6lOiKgueCuVxuICAgICAgICAgICAgc2VhcmNoTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz10aGlzLm5vZGUuaW50cm87XG4gICAgICAgICAgICBzZWFyY2hOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO1xuIFxuICAgICAgICAvLyDngrnlh7vkvb/nlKjnianlk4HkvJrkvb/nianlk4Hlm77niYflh7rnjrDlnKjlj7PkuIrop5JcbiAgICAgICAgdGhpcy5ub2RlLnBpYz1pbmZvWydwaWNVcmwnXTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB1c2V0b29sID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9iYWcvdXNlVG9vbC9ib2R5XCIpOyAvL+mAmui/h+WFqOi3r+W+hOiOt+WPluWvueW6lOiKgueCuVxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoaW5mb1sncGljVXJsJ10sIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIHVzZXRvb2wuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LkluVXNlID0gaW5mb1snbmFtZSddO1xuICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluIHVzZSB0b29sOlwiKyB3aW5kb3cuSW5Vc2UpO1xuICAgIH0sXG59KTtcbiJdfQ==