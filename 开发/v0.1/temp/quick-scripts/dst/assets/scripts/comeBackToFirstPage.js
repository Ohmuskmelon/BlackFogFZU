
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/comeBackToFirstPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d98eKY+rFBLpsYPJZoLxKq', 'comeBackToFirstPage');
// scripts/comeBackToFirstPage.js

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
  comeBackToFirstPage: function comeBackToFirstPage() {
    window.saveScene = cc.director.getScene()._name;
    cc.director.loadScene("开始游戏");
  },
  comeBackToGame: function comeBackToGame() {
    if (window.saveScene != "") {
      cc.director.loadScene(window.saveScene);
    }
  },
  comeBackFromAbout: function comeBackFromAbout() {
    cc.director.loadScene("开始游戏");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbWVCYWNrVG9GaXJzdFBhZ2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb21lQmFja1RvRmlyc3RQYWdlIiwid2luZG93Iiwic2F2ZVNjZW5lIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsIl9uYW1lIiwibG9hZFNjZW5lIiwiY29tZUJhY2tUb0dhbWUiLCJjb21lQmFja0Zyb21BYm91dCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUE7RUFFQUMsbUJBekJLLGlDQXlCZ0I7SUFDakJDLE1BQU0sQ0FBQ0MsU0FBUCxHQUFtQk4sRUFBRSxDQUFDTyxRQUFILENBQVlDLFFBQVosR0FBdUJDLEtBQTFDO0lBQ0FULEVBQUUsQ0FBQ08sUUFBSCxDQUFZRyxTQUFaLENBQXNCLE1BQXRCO0VBQ0gsQ0E1Qkk7RUE4QkxDLGNBOUJLLDRCQThCVztJQUNaLElBQUdOLE1BQU0sQ0FBQ0MsU0FBUCxJQUFvQixFQUF2QixFQUEwQjtNQUN0Qk4sRUFBRSxDQUFDTyxRQUFILENBQVlHLFNBQVosQ0FBc0JMLE1BQU0sQ0FBQ0MsU0FBN0I7SUFDSDtFQUNKLENBbENJO0VBb0NMTSxpQkFwQ0ssK0JBb0NjO0lBQ2ZaLEVBQUUsQ0FBQ08sUUFBSCxDQUFZRyxTQUFaLENBQXNCLE1BQXRCO0VBQ0gsQ0F0Q0k7RUF3Q0xHLEtBeENLLG1CQXdDSSxDQUVSLENBMUNJLENBNENMOztBQTVDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIGNvbWVCYWNrVG9GaXJzdFBhZ2UoKXtcbiAgICAgICAgd2luZG93LnNhdmVTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIuW8gOWni+a4uOaIj1wiKTtcbiAgICB9LFxuXG4gICAgY29tZUJhY2tUb0dhbWUoKXtcbiAgICAgICAgaWYod2luZG93LnNhdmVTY2VuZSAhPSBcIlwiKXtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh3aW5kb3cuc2F2ZVNjZW5lKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21lQmFja0Zyb21BYm91dCgpe1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCLlvIDlp4vmuLjmiI9cIik7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19