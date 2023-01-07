
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_switch/switch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'efbe1Uv2OtAB5rrrirEZfoB', 'switch');
// scripts/game_chp1/cp1_switch/switch.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

/*
电闸
 */
window.lockOfSwitchInCP1 = false;
var res1 = 1;
var res2 = 1;
var res3 = -1;
var res4 = 1;
var res5 = -1;
var res6 = 1;
var res7 = 1;
var res8 = -1;
cc.Class({
  "extends": cc.Component,
  properties: {
    sprite_Frame1: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame2: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  switch1: function switch1() {
    var button1 = this.node.getComponent(cc.Button);
    res1 = -res1;

    if (res1 === 1) {
      button1.normalSprite = this.sprite_Frame1;
    } else {
      button1.normalSprite = this.sprite_Frame2;
    }

    cc.log("res1" + res1);
  },
  switch2: function switch2() {
    var button2 = this.node.getComponent(cc.Button);
    res2 = -res2;

    if (res2 === 1) {
      button2.normalSprite = this.sprite_Frame1;
    } else {
      button2.normalSprite = this.sprite_Frame2;
    }

    cc.log("res2" + res2);
  },
  switch3: function switch3() {
    var button3 = this.node.getComponent(cc.Button);

    if (res3 === 1) {
      button3.normalSprite = this.sprite_Frame1;
    } else {
      button3.normalSprite = this.sprite_Frame2;
    }

    res3 = -res3;
    cc.log(res3);
  },
  switch4: function switch4() {
    var button4 = this.node.getComponent(cc.Button);

    if (res4 === 1) {
      button4.normalSprite = this.sprite_Frame1;
    } else {
      button4.normalSprite = this.sprite_Frame2;
    }

    res4 = -res4;
    cc.log(res4);
  },
  switch5: function switch5() {
    var button5 = this.node.getComponent(cc.Button);

    if (res5 === 1) {
      button5.normalSprite = this.sprite_Frame1;
    } else {
      button5.normalSprite = this.sprite_Frame2;
    }

    res5 = -res5;
    cc.log(res5);
  },
  switch6: function switch6() {
    var button6 = this.node.getComponent(cc.Button);

    if (res6 === 1) {
      button6.normalSprite = this.sprite_Frame1;
    } else {
      button6.normalSprite = this.sprite_Frame2;
    }

    res6 = -res6;
    cc.log(res6);
  },
  switch7: function switch7() {
    var button7 = this.node.getComponent(cc.Button);

    if (res7 === 1) {
      button7.normalSprite = this.sprite_Frame1;
    } else {
      button7.normalSprite = this.sprite_Frame2;
    }

    res7 = -res7;
    cc.log(res7);
  },
  switch8: function switch8() {
    var button8 = this.node.getComponent(cc.Button);

    if (res8 == 1) {
      button8.normalSprite = this.sprite_Frame1;
    } else {
      button8.normalSprite = this.sprite_Frame2;
    }

    res8 = -res8;
    cc.log(res8);
  },
  switch9: function switch9() {
    if (res1 + res3 + res2 + res4 + res5 + res6 + res7 + res8 == 8) {
      window.lockOfSwitchInCP1 = true;
      cc.log("success");
      cc.find("Canvas/Label").getComponent(cc.Label).string = "恭喜你，答对了";
    }

    ;
    cc.log(res1 + res3 + res2 + res4 + res5 + res6 + res7 + res8);
  },
  //  onLoad () {
  //      res1 = 0;
  //      res2 = 0;
  //      res3 = 0;
  //      res4 = 0;
  //      res5 = 0;
  //      res6 = 0;
  //      res7 = 0;
  //      res8 = 0;
  //      res9 = 0;   
  //  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfc3dpdGNoL3N3aXRjaC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJsb2NrT2ZTd2l0Y2hJbkNQMSIsInJlczEiLCJyZXMyIiwicmVzMyIsInJlczQiLCJyZXM1IiwicmVzNiIsInJlczciLCJyZXM4IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcHJpdGVfRnJhbWUxIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlX0ZyYW1lMiIsInN3aXRjaDEiLCJidXR0b24xIiwibm9kZSIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsIm5vcm1hbFNwcml0ZSIsImxvZyIsInN3aXRjaDIiLCJidXR0b24yIiwic3dpdGNoMyIsImJ1dHRvbjMiLCJzd2l0Y2g0IiwiYnV0dG9uNCIsInN3aXRjaDUiLCJidXR0b241Iiwic3dpdGNoNiIsImJ1dHRvbjYiLCJzd2l0Y2g3IiwiYnV0dG9uNyIsInN3aXRjaDgiLCJidXR0b244Iiwic3dpdGNoOSIsImZpbmQiLCJMYWJlbCIsInN0cmluZyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxpQkFBUCxHQUEyQixLQUEzQjtBQUNBLElBQUlDLElBQUksR0FBRyxDQUFYO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBWSxJQUFJQyxJQUFJLEdBQUUsQ0FBQyxDQUFYO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBWSxJQUFJQyxJQUFJLEdBQUUsQ0FBQyxDQUFYO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFDL0QsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBWSxJQUFJQyxJQUFJLEdBQUUsQ0FBQyxDQUFYO0FBQ1pDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQ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QTlDLEVBQWdEO01BQzVDVCxNQUFNLENBQUNDLGlCQUFQLEdBQTJCLElBQTNCO01BQ0FTLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPLFNBQVA7TUFDQWQsRUFBRSxDQUFDOEIsSUFBSCxDQUFRLGNBQVIsRUFBd0JuQixZQUF4QixDQUFxQ1gsRUFBRSxDQUFDK0IsS0FBeEMsRUFBK0NDLE1BQS9DLEdBQXdELFNBQXhEO0lBQ0g7O0lBQUE7SUFDRGhDLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPdEIsSUFBSSxHQUFDRSxJQUFMLEdBQVVELElBQVYsR0FBZUUsSUFBZixHQUFvQkMsSUFBcEIsR0FBeUJDLElBQXpCLEdBQThCQyxJQUE5QixHQUFtQ0MsSUFBMUM7RUFFSCxDQWpISTtFQW1ITDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUFrQyxLQS9ISyxtQkErSEksQ0FFUixDQWpJSSxDQW1JTDs7QUFuSUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLypcbueUtemXuFxuICovXG53aW5kb3cubG9ja09mU3dpdGNoSW5DUDEgPSBmYWxzZTtcbmxldCByZXMxID0gMTtsZXQgcmVzMiA9MTtsZXQgcmVzMyA9LTE7bGV0IHJlczQgPTE7bGV0IHJlczUgPS0xO2xldCByZXM2ID0xO1xubGV0IHJlczcgPTE7bGV0IHJlczggPS0xO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICBzcHJpdGVfRnJhbWUxIDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTIgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzd2l0Y2gxICgpe1xuICAgICAgICBsZXQgYnV0dG9uMSA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICByZXMxID0tcmVzMTtcbiAgICAgICAgaWYocmVzMT09PTEpe1xuICAgICAgICAgICAgYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKFwicmVzMVwiK3JlczEpO1xuXG4gICAgfSxcbiAgICBzd2l0Y2gyICgpe1xuICAgICAgICBsZXQgYnV0dG9uMiA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICByZXMyID0tcmVzMjtcbiAgICAgICAgaWYocmVzMj09PTEpe1xuICAgICAgICAgICAgYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKFwicmVzMlwiK3JlczIpO1xuICAgIH0sXG4gICAgc3dpdGNoMyAoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjMgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblxuICAgICAgICBpZihyZXMzPT09MSl7XG4gICAgICAgICAgICBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cbiAgICAgICAgcmVzMyA9LXJlczM7XG4gICAgICAgIGNjLmxvZyhyZXMzKTtcbiAgICB9LFxuICAgIHN3aXRjaDQgKCl7XG4gICAgICAgIGxldCBidXR0b240ID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG5cbiAgICAgICAgaWYocmVzND09PTEpe1xuICAgICAgICAgICAgYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG4gICAgICAgIHJlczQgPS1yZXM0O1xuICAgICAgICBjYy5sb2cocmVzNCk7XG4gICAgfSxcbiAgICBzd2l0Y2g1ICgpe1xuICAgICAgICBsZXQgYnV0dG9uNSA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXG4gICAgICAgIGlmKHJlczU9PT0xKXtcbiAgICAgICAgICAgIGJ1dHRvbjUubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUxXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYnV0dG9uNS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTJcbiAgICAgICAgfVxuICAgICAgICByZXM1ID0tcmVzNTtcbiAgICAgICAgY2MubG9nKHJlczUpO1xuICAgIH0sXG4gICAgc3dpdGNoNiAoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjYgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblxuICAgICAgICBpZihyZXM2PT09MSl7XG4gICAgICAgICAgICBidXR0b242Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjYubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cbiAgICAgICAgcmVzNiA9LXJlczY7XG4gICAgICAgIGNjLmxvZyhyZXM2KTtcbiAgICB9LFxuICAgIHN3aXRjaDcgKCl7XG4gICAgICAgIGxldCBidXR0b243ID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG5cbiAgICAgICAgaWYocmVzNz09PTEpe1xuICAgICAgICAgICAgYnV0dG9uNy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b243Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG4gICAgICAgIHJlczcgPS1yZXM3O1xuICAgICAgICBjYy5sb2cocmVzNyk7XG4gICAgfSxcbiAgICBzd2l0Y2g4ICgpe1xuICAgICAgICBsZXQgYnV0dG9uOCA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXG4gICAgICAgIGlmKHJlczg9PTEpe1xuICAgICAgICAgICAgYnV0dG9uOC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b244Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG4gICAgICAgIHJlczggPS1yZXM4O1xuICAgICAgICBjYy5sb2cocmVzOCk7XG4gICAgfSxcbiAgICBzd2l0Y2g5ICgpe1xuXG4gICAgICAgIGlmKChyZXMxK3JlczMrcmVzMityZXM0K3JlczUrcmVzNityZXM3K3JlczgpPT04KXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NrT2ZTd2l0Y2hJbkNQMSA9IHRydWU7XG4gICAgICAgICAgICBjYy5sb2coXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5oGt5Zac5L2g77yM562U5a+55LqGXCI7XG4gICAgICAgIH07XG4gICAgICAgIGNjLmxvZyhyZXMxK3JlczMrcmVzMityZXM0K3JlczUrcmVzNityZXM3K3JlczgpXG5cbiAgICB9LFxuXG4gICAgLy8gIG9uTG9hZCAoKSB7XG4gICAgLy8gICAgICByZXMxID0gMDtcbiAgICAvLyAgICAgIHJlczIgPSAwO1xuICAgIC8vICAgICAgcmVzMyA9IDA7XG4gICAgLy8gICAgICByZXM0ID0gMDtcbiAgICAvLyAgICAgIHJlczUgPSAwO1xuICAgIC8vICAgICAgcmVzNiA9IDA7XG4gICAgLy8gICAgICByZXM3ID0gMDtcbiAgICAvLyAgICAgIHJlczggPSAwO1xuICAgIC8vICAgICAgcmVzOSA9IDA7ICAgXG4gICAgLy8gIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==