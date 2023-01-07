
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_sheguan/showStone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1c334NI1RJ1okAeIYXfAfh', 'showStone');
// scripts/game_chp1/cp1_lock_sheguan/showStone.js

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
    label: cc.Label,
    thisNode: cc.Node,
    successNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    if (window.lockOfGateCP1 == true) {
      this.label.getComponent(cc.Label).string = "密码正确，请拿走石头";
      this.successNode.active = true;
      this.thisNode.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja19zaGVndWFuL3Nob3dTdG9uZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwiTGFiZWwiLCJ0aGlzTm9kZSIsIk5vZGUiLCJzdWNjZXNzTm9kZSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJ3aW5kb3ciLCJsb2NrT2ZHYXRlQ1AxIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFDSixFQUFFLENBQUNLLEtBREQ7SUFFUkMsUUFBUSxFQUFDTixFQUFFLENBQUNPLElBRko7SUFHUkMsV0FBVyxFQUFDUixFQUFFLENBQUNPO0VBSFAsQ0FIUDtFQVFMO0VBRUE7RUFHQUUsS0FiSyxtQkFhSSxDQUNSLENBZEk7RUFnQkxDLE1BaEJLLGtCQWdCR0MsRUFoQkgsRUFnQk87SUFDUixJQUFJQyxNQUFNLENBQUNDLGFBQVAsSUFBd0IsSUFBNUIsRUFBaUM7TUFDN0IsS0FBS1QsS0FBTCxDQUFXVSxZQUFYLENBQXdCZCxFQUFFLENBQUNLLEtBQTNCLEVBQWtDVSxNQUFsQyxHQUEyQyxZQUEzQztNQUNBLEtBQUtQLFdBQUwsQ0FBaUJRLE1BQWpCLEdBQTBCLElBQTFCO01BQ0EsS0FBS1YsUUFBTCxDQUFjVSxNQUFkLEdBQXVCLEtBQXZCO0lBQ0g7RUFDSjtBQXRCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgdGhpc05vZGU6Y2MuTm9kZSxcbiAgICAgICAgc3VjY2Vzc05vZGU6Y2MuTm9kZSxcbiAgICB9LFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuICAgIFxuXG4gICAgc3RhcnQgKCkge1xuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9ja09mR2F0ZUNQMSA9PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuWvhueggeato+ehru+8jOivt+aLv+i1sOefs+WktFwiO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50aGlzTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==