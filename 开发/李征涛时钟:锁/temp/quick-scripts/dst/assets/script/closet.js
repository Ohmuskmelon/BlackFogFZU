
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/closet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76dd1yUGTpPG6ZqkIbq+xsT', 'closet');
// script/closet.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.lockOfClosetInCP1 = false;
var res1 = 0;
var res2 = 0;
var res3 = 0;
var res4 = 0;
var res = "";
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
    },
    sprite_Frame3: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame4: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame5: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame6: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame7: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame8: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame9: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame0: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_FrameOpen: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  // LIFE-CYCLE CALLBACKS:
  closet1: function closet1() {
    var button1 = this.node.getComponent(cc.Button);

    switch (res1) {
      case 0:
        button1.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button1.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button1.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button1.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button1.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button1.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button1.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button1.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button1.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button1.normalSprite = this.sprite_Frame0;
        break;
    }

    res1++;

    if (res1 === 10) {
      res1 = 0;
    }
  },
  closet2: function closet2() {
    var button2 = this.node.getComponent(cc.Button);

    switch (res2) {
      case 0:
        button2.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button2.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button2.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button2.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button2.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button2.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button2.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button2.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button2.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button2.normalSprite = this.sprite_Frame0;
        break;
    }

    res2++;

    if (res2 === 10) {
      res2 = 0;
    }
  },
  closet3: function closet3() {
    var button3 = this.node.getComponent(cc.Button);

    switch (res3) {
      case 0:
        button3.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button3.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button3.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button3.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button3.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button3.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button3.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button3.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button3.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button3.normalSprite = this.sprite_Frame0;
        break;
    }

    res3++;

    if (res3 === 10) {
      res3 = 0;
    }
  },
  closet4: function closet4() {
    var button4 = this.node.getComponent(cc.Button);

    switch (res4) {
      case 0:
        button4.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button4.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button4.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button4.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button4.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button4.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button4.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button4.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button4.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button4.normalSprite = this.sprite_Frame0;
        break;
    }

    res4++;

    if (res4 === 10) {
      res4 = 0;
    }
  },
  closetJudge: function closetJudge() {
    res = '' + res1 + res2 + res3 + res4;
    cc.log(res);

    if (res === "0002") {
      var closet = this.node.parent.getComponent(cc.Sprite);
      cc.log(closet);
      cc.log(this.node.sprite_FrameOpen);
      closet.spriteFrame = this.sprite_FrameOpen;
      cc.log("success");
      window.lockOfClosetInCP1 = true;
    }
  },
  // onLoad () {
  //
  // },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY2xvc2V0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImxvY2tPZkNsb3NldEluQ1AxIiwicmVzMSIsInJlczIiLCJyZXMzIiwicmVzNCIsInJlcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3ByaXRlX0ZyYW1lMSIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInNwcml0ZV9GcmFtZTIiLCJzcHJpdGVfRnJhbWUzIiwic3ByaXRlX0ZyYW1lNCIsInNwcml0ZV9GcmFtZTUiLCJzcHJpdGVfRnJhbWU2Iiwic3ByaXRlX0ZyYW1lNyIsInNwcml0ZV9GcmFtZTgiLCJzcHJpdGVfRnJhbWU5Iiwic3ByaXRlX0ZyYW1lMCIsInNwcml0ZV9GcmFtZU9wZW4iLCJjbG9zZXQxIiwiYnV0dG9uMSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJub3JtYWxTcHJpdGUiLCJjbG9zZXQyIiwiYnV0dG9uMiIsImNsb3NldDMiLCJidXR0b24zIiwiY2xvc2V0NCIsImJ1dHRvbjQiLCJjbG9zZXRKdWRnZSIsImxvZyIsImNsb3NldCIsInBhcmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsaUJBQVAsR0FBMkIsS0FBM0I7QUFDQSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFZLElBQUlDLElBQUksR0FBRSxDQUFWO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFZLElBQUlDLEdBQUcsR0FBRSxFQUFUO0FBQ2xEQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsYUFBYSxFQUFFO01BQ1gsV0FBVSxJQURDO01BRVhDLElBQUksRUFBRUws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QVAsR0FBMkIsSUFBM0I7SUFDSDtFQUNKLENBcElJO0VBcUlKO0VBQ0E7RUFDQTtFQUVEeUMsS0F6SUssbUJBeUlJLENBRVIsQ0EzSUksQ0E2SUw7O0FBN0lLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG53aW5kb3cubG9ja09mQ2xvc2V0SW5DUDEgPSBmYWxzZTtcbmxldCByZXMxID0wO2xldCByZXMyID0wOyBsZXQgcmVzMyA9MCA7bGV0IHJlczQgPTA7bGV0IHJlcyA9XCJcIjtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwcml0ZV9GcmFtZTEgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgc3ByaXRlX0ZyYW1lMiA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBzcHJpdGVfRnJhbWUzIDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTQgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxzcHJpdGVfRnJhbWU1IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTYgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxzcHJpdGVfRnJhbWU3IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTggOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxzcHJpdGVfRnJhbWU5IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTAgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgc3ByaXRlX0ZyYW1lT3BlbiA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGNsb3NldDEoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjEgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblxuICAgICAgICBzd2l0Y2ggKHJlczEpIHtcbiAgICAgICAgICAgIGNhc2UgMCA6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUxO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAxIDogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTI7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUzO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNDticmVhaztcbiAgICAgICAgICAgIGNhc2UgNCA6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU1O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNjticmVhaztcbiAgICAgICAgICAgIGNhc2UgNjogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTc7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU4O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lOTticmVhaztcbiAgICAgICAgICAgIGNhc2UgOTogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTA7YnJlYWs7XG4gICAgICAgIH1yZXMxICsrO1xuICAgICAgICBpZihyZXMxPT09MTApe1xuICAgICAgICAgICAgcmVzMT0wO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbG9zZXQyKCl7XG4gICAgICAgIGxldCBidXR0b24yID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHN3aXRjaCAocmVzMikge1xuICAgICAgICAgICAgY2FzZSAwIDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTE7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMjticmVhaztcbiAgICAgICAgICAgIGNhc2UgMiA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUzO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAzIDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTQ7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNTticmVhaztcbiAgICAgICAgICAgIGNhc2UgNSA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU2O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA2IDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTc7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDcgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lODticmVhaztcbiAgICAgICAgICAgIGNhc2UgOCA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU5O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA5IDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTA7YnJlYWs7XG4gICAgICAgIH1yZXMyICsrO1xuICAgICAgICBpZihyZXMyPT09MTApe1xuICAgICAgICAgICAgcmVzMj0wO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbG9zZXQzKCl7XG4gICAgICAgIGxldCBidXR0b24zID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHN3aXRjaCAocmVzMykge1xuICAgICAgICAgICAgY2FzZSAwIDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTE7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMjticmVhaztcbiAgICAgICAgICAgIGNhc2UgMiA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUzO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAzIDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTQ7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNTticmVhaztcbiAgICAgICAgICAgIGNhc2UgNSA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU2O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA2IDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTc7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDcgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lODticmVhaztcbiAgICAgICAgICAgIGNhc2UgOCA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU5O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA5IDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTA7YnJlYWs7XG4gICAgICAgIH1yZXMzICsrO1xuICAgICAgICBpZihyZXMzPT09MTApe1xuICAgICAgICAgICAgcmVzMz0wO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbG9zZXQ0KCl7XG4gICAgICAgIGxldCBidXR0b240ID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHN3aXRjaCAocmVzNCkge1xuICAgICAgICAgICAgY2FzZSAwIDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTE7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMjticmVhaztcbiAgICAgICAgICAgIGNhc2UgMiA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUzO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAzIDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTQ7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNTticmVhaztcbiAgICAgICAgICAgIGNhc2UgNSA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU2O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA2IDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTc7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDcgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lODticmVhaztcbiAgICAgICAgICAgIGNhc2UgOCA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU5O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA5IDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTA7YnJlYWs7XG4gICAgICAgIH1yZXM0ICsrO1xuICAgICAgICBpZihyZXM0PT09MTApe1xuICAgICAgICAgICAgcmVzND0wO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbG9zZXRKdWRnZSgpe1xuICAgICAgICByZXMgPScnK3JlczErcmVzMityZXMzK3JlczQ7XG4gICAgICAgIGNjLmxvZyhyZXMpO1xuICAgICAgICBpZihyZXM9PT1cIjAwMDJcIil7XG4gICAgICAgICAgICBsZXQgY2xvc2V0ID10aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgY2MubG9nKGNsb3NldClcbiAgICAgICAgICAgIGNjLmxvZyh0aGlzLm5vZGUuc3ByaXRlX0ZyYW1lT3BlbilcbiAgICAgICAgICAgIGNsb3NldC5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlX0ZyYW1lT3BlbjtcbiAgICAgICAgICAgIGNjLmxvZyhcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB3aW5kb3cubG9ja09mQ2xvc2V0SW5DUDEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAgLy8gb25Mb2FkICgpIHtcbiAgICAgLy9cbiAgICAgLy8gfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19