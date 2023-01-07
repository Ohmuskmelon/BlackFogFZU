
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tip/trigger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9b7er95LNEUaUK+4wdErSz', 'trigger');
// scripts/tip/trigger.js

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
    tip: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  initPlayer: function initPlayer() {
    this.charType = this.node.parent.name;
    this.playerNode = cc.find("Canvas/bg/player");
    this.tt = 0;
    this.canShow = false;
  },
  onLoad: function onLoad() {
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.initPlayer();
  },
  start: function start() {},
  itemAction: function itemAction(dt) {
    var p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var e_pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var dis = cc.Vec2.distance(e_pos, p_pos); // console.log("type:"+window.Global.itemType+":"+dis);

    if (dis < 100 && this.canShow == false) {
      Global.itemType = this.charType;
      Global.itemName = this.node.name;
      this.tip.active = true;
      this.canShow = true;
    } else {
      if (dis >= 100 && this.canShow == true) {
        this.tip.active = false;
        this.canShow = false;
        Global.itemType = ' ';
        Global.itemName = ' ';
      }
    }
  },
  update: function update(dt) {
    this.tt += dt;

    if (this.tt >= 0.3) {
      this.itemAction(dt);
      this.tt = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RpcC90cmlnZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwIiwiTm9kZSIsImluaXRQbGF5ZXIiLCJjaGFyVHlwZSIsIm5vZGUiLCJwYXJlbnQiLCJuYW1lIiwicGxheWVyTm9kZSIsImZpbmQiLCJ0dCIsImNhblNob3ciLCJvbkxvYWQiLCJzdGFydCIsIml0ZW1BY3Rpb24iLCJkdCIsInBfcG9zIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJlX3BvcyIsImRpcyIsIlZlYzIiLCJkaXN0YW5jZSIsIkdsb2JhbCIsIml0ZW1UeXBlIiwiaXRlbU5hbWUiLCJhY3RpdmUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0s7RUFEQSxDQUhQO0VBT0w7RUFLQUMsVUFaSyx3QkFZUTtJQUNULEtBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxJQUFqQztJQUNBLEtBQUtDLFVBQUwsR0FBa0JYLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLGtCQUFSLENBQWxCO0lBQ0EsS0FBS0MsRUFBTCxHQUFVLENBQVY7SUFDQSxLQUFLQyxPQUFMLEdBQWUsS0FBZjtFQUNILENBakJJO0VBbUJMQyxNQW5CSyxvQkFtQks7SUFDTixLQUFLWCxHQUFMLEdBQVlKLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHdCQUFSLENBQVo7SUFDQSxLQUFLTixVQUFMO0VBQ0gsQ0F0Qkk7RUF3QkxVLEtBeEJLLG1CQXdCRyxDQUNQLENBekJJO0VBMkJMQyxVQTNCSyxzQkEyQk1DLEVBM0JOLEVBMkJVO0lBQ1gsSUFBSUMsS0FBSyxHQUFHLEtBQUtSLFVBQUwsQ0FBZ0JTLHFCQUFoQixDQUFzQ3BCLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUF0QyxDQUFaO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtkLElBQUwsQ0FBVVkscUJBQVYsQ0FBZ0NwQixFQUFFLENBQUNxQixFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBaEMsQ0FBWjtJQUNBLElBQUlFLEdBQUcsR0FBR3ZCLEVBQUUsQ0FBQ3dCLElBQUgsQ0FBUUMsUUFBUixDQUFpQkgsS0FBakIsRUFBd0JILEtBQXhCLENBQVYsQ0FIVyxDQUtYOztJQUNBLElBQUlJLEdBQUcsR0FBRyxHQUFOLElBQWEsS0FBS1QsT0FBTCxJQUFnQixLQUFqQyxFQUF3QztNQUNwQ1ksTUFBTSxDQUFDQyxRQUFQLEdBQWtCLEtBQUtwQixRQUF2QjtNQUNBbUIsTUFBTSxDQUFDRSxRQUFQLEdBQWtCLEtBQUtwQixJQUFMLENBQVVFLElBQTVCO01BQ0EsS0FBS04sR0FBTCxDQUFTeUIsTUFBVCxHQUFrQixJQUFsQjtNQUNBLEtBQUtmLE9BQUwsR0FBZSxJQUFmO0lBQ0gsQ0FMRCxNQU1NO01BQ0YsSUFBSVMsR0FBRyxJQUFJLEdBQVAsSUFBYyxLQUFLVCxPQUFMLElBQWdCLElBQWxDLEVBQXdDO1FBQ3BDLEtBQUtWLEdBQUwsQ0FBU3lCLE1BQVQsR0FBa0IsS0FBbEI7UUFDQSxLQUFLZixPQUFMLEdBQWUsS0FBZjtRQUNBWSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsR0FBbEI7UUFDQUQsTUFBTSxDQUFDRSxRQUFQLEdBQWtCLEdBQWxCO01BQ0g7SUFDSjtFQUNKLENBL0NJO0VBaURMRSxNQWpESyxrQkFpREVaLEVBakRGLEVBaURNO0lBQ1AsS0FBS0wsRUFBTCxJQUFXSyxFQUFYOztJQUNBLElBQUksS0FBS0wsRUFBTCxJQUFXLEdBQWYsRUFBb0I7TUFDaEIsS0FBS0ksVUFBTCxDQUFnQkMsRUFBaEI7TUFDQSxLQUFLTCxFQUFMLEdBQVUsQ0FBVjtJQUNIO0VBQ0o7QUF2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwOiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIFxuXG5cbiAgICBpbml0UGxheWVyKCkge1xuICAgICAgICB0aGlzLmNoYXJUeXBlID0gdGhpcy5ub2RlLnBhcmVudC5uYW1lO1xuICAgICAgICB0aGlzLnBsYXllck5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL2JnL3BsYXllclwiKTtcbiAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICAgIHRoaXMuY2FuU2hvdyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnRpcCA9ICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL3RpcFwiKTtcbiAgICAgICAgdGhpcy5pbml0UGxheWVyKCk7XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgIH0sXG5cbiAgICBpdGVtQWN0aW9uKGR0KSB7XG4gICAgICAgIGxldCBwX3BvcyA9IHRoaXMucGxheWVyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XG4gICAgICAgIGxldCBlX3BvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XG4gICAgICAgIGxldCBkaXMgPSBjYy5WZWMyLmRpc3RhbmNlKGVfcG9zLCBwX3Bvcyk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0eXBlOlwiK3dpbmRvdy5HbG9iYWwuaXRlbVR5cGUrXCI6XCIrZGlzKTtcbiAgICAgICAgaWYgKGRpcyA8IDEwMCAmJiB0aGlzLmNhblNob3cgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIEdsb2JhbC5pdGVtVHlwZSA9IHRoaXMuY2hhclR5cGU7XG4gICAgICAgICAgICBHbG9iYWwuaXRlbU5hbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgICAgICAgICAgIHRoaXMudGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNhblNob3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgIHtcbiAgICAgICAgICAgIGlmIChkaXMgPj0gMTAwICYmIHRoaXMuY2FuU2hvdyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5TaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgR2xvYmFsLml0ZW1UeXBlID0gJyAnO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5pdGVtTmFtZSA9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMudHQgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnR0ID49IDAuMykge1xuICAgICAgICAgICAgdGhpcy5pdGVtQWN0aW9uKGR0KTtcbiAgICAgICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19