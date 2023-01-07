
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_cup/3_java.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca069yV8pxB37RadNUVO5Hv', '3_java');
// scripts/game_chp1/cp1_cup/3_java.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfY3VwLzNfamF2YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsImxpc3RlbiIsInRvdWNoY250IiwidXBkYXRlIiwiZHQiLCJzZWxmIiwiY3VwIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3AiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFLENBQ1Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlUsQ0FITDtFQXFCUDtFQUVBO0VBRUFDLEtBekJPLG1CQXlCQztJQUNOLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsVUFBVUMsS0FBVixFQUFpQjtNQUMxREMsTUFBTSxDQUFDQyxRQUFELENBQU4sR0FBbUIsQ0FBbkI7TUFDQUEsUUFBUTtJQUNULENBSEQ7RUFJRCxDQTlCTTtFQWdDUEMsTUFoQ08sa0JBZ0NBQyxFQWhDQSxFQWdDSTtJQUNULElBQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLElBQUlDLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxDQUFkLEVBQWlCO01BQ2ZoQixFQUFFLENBQUNpQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBMEJsQixFQUFFLENBQUNtQixXQUE3QixFQUEwQyxVQUFVQyxHQUFWLEVBQWVDLEVBQWYsRUFBbUI7UUFDM0ROLElBQUksQ0FBQ1YsSUFBTCxDQUFVaUIsWUFBVixDQUF1QnRCLEVBQUUsQ0FBQ3VCLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUFnREgsRUFBaEQ7TUFDRCxDQUZEO0lBR0Q7O0lBQ0QsSUFBSUwsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFVLENBQWQsRUFBaUI7TUFDZmhCLEVBQUUsQ0FBQ2lCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEyQmxCLEVBQUUsQ0FBQ21CLFdBQTlCLEVBQTJDLFVBQVVDLEdBQVYsRUFBZUMsRUFBZixFQUFtQjtRQUM1RE4sSUFBSSxDQUFDVixJQUFMLENBQVVpQixZQUFWLENBQXVCdEIsRUFBRSxDQUFDdUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdESCxFQUFoRDtNQUNELENBRkQ7SUFHRDtFQUNGO0FBNUNNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgLy8gZm9vOiB7XHJcbiAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgIC8vIH0sXHJcbiAgICAvLyBiYXI6IHtcclxuICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBsaXN0ZW5bdG91Y2hjbnRdID0gMjtcclxuICAgICAgdG91Y2hjbnQrKztcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKGN1cFsyXSA9PSAxKSB7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ApIHtcclxuICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VwWzJdID09IDApIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaG9ydFwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ApIHtcclxuICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiJdfQ==