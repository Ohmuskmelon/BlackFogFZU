
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/switch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'efbe1Uv2OtAB5rrrirEZfoB', 'switch');
// script/switch.js

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
      window.lockOfSwitchInCP1 = false;
      cc.log("success");
    }

    ;
    cc.log(res1 + res3 + res2 + res4 + res5 + res6 + res7 + res8);
  },
  onLoad: function onLoad() {// cc.resources.load('switch1')
    //  cc.resources.load('switch2')
    // this.sprites =  cc.resources.load("resources/2.png")
    //  console.log(this.sprites);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc3dpdGNoLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImxvY2tPZlN3aXRjaEluQ1AxIiwicmVzMSIsInJlczIiLCJyZXMzIiwicmVzNCIsInJlczUiLCJyZXM2IiwicmVzNyIsInJlczgiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwcml0ZV9GcmFtZTEiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVfRnJhbWUyIiwic3dpdGNoMSIsImJ1dHRvbjEiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwibm9ybWFsU3ByaXRlIiwibG9nIiwic3dpdGNoMiIsImJ1dHRvbjIiLCJzd2l0Y2gzIiwiYnV0dG9uMyIsInN3aXRjaDQiLCJidXR0b240Iiwic3dpdGNoNSIsImJ1dHRvbjUiLCJzd2l0Y2g2IiwiYnV0dG9uNiIsInN3aXRjaDciLCJidXR0b243Iiwic3dpdGNoOCIsImJ1dHRvbjgiLCJzd2l0Y2g5Iiwib25Mb2FkIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLGlCQUFQLEdBQTJCLEtBQTNCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLENBQVg7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFZLElBQUlDLElBQUksR0FBRSxDQUFDLENBQVg7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFZLElBQUlDLElBQUksR0FBRSxDQUFDLENBQVg7QUFBYSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUMvRCxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFZLElBQUlDLElBQUksR0FBRSxDQUFDLENBQVg7QUFDWkMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBRVJDLGFBQWEsRUFBRTtNQUNY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MkIsS0FBM0I7TUFDQVMsRUFBRSxDQUFDYyxHQUFILENBQU8sU0FBUDtJQUNIOztJQUFBO0lBQ0RkLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPdEIsSUFBSSxHQUFDRSxJQUFMLEdBQVVELElBQVYsR0FBZUUsSUFBZixHQUFvQkMsSUFBcEIsR0FBeUJDLElBQXpCLEdBQThCQyxJQUE5QixHQUFtQ0MsSUFBMUM7RUFFSCxDQWhISTtFQWtISitCLE1BbEhJLG9CQWtITSxDQUNOO0lBQ0E7SUFDRDtJQUNBO0VBQ0YsQ0F2SEc7RUF5SExDLEtBekhLLG1CQXlISSxDQUVSLENBM0hJLENBNkhMOztBQTdISyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vKlxu55S16Ze4XG4gKi9cbndpbmRvdy5sb2NrT2ZTd2l0Y2hJbkNQMSA9IGZhbHNlO1xubGV0IHJlczEgPSAxO2xldCByZXMyID0xO2xldCByZXMzID0tMTtsZXQgcmVzNCA9MTtsZXQgcmVzNSA9LTE7bGV0IHJlczYgPTE7XG5sZXQgcmVzNyA9MTtsZXQgcmVzOCA9LTE7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHNwcml0ZV9GcmFtZTEgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgc3ByaXRlX0ZyYW1lMiA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN3aXRjaDEgKCl7XG4gICAgICAgIGxldCBidXR0b24xID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHJlczEgPS1yZXMxO1xuICAgICAgICBpZihyZXMxPT09MSl7XG4gICAgICAgICAgICBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coXCJyZXMxXCIrcmVzMSk7XG5cbiAgICB9LFxuICAgIHN3aXRjaDIgKCl7XG4gICAgICAgIGxldCBidXR0b24yID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHJlczIgPS1yZXMyO1xuICAgICAgICBpZihyZXMyPT09MSl7XG4gICAgICAgICAgICBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coXCJyZXMyXCIrcmVzMik7XG4gICAgfSxcbiAgICBzd2l0Y2gzICgpe1xuICAgICAgICBsZXQgYnV0dG9uMyA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXG4gICAgICAgIGlmKHJlczM9PT0xKXtcbiAgICAgICAgICAgIGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUxXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTJcbiAgICAgICAgfVxuICAgICAgICByZXMzID0tcmVzMztcbiAgICAgICAgY2MubG9nKHJlczMpO1xuICAgIH0sXG4gICAgc3dpdGNoNCAoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjQgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblxuICAgICAgICBpZihyZXM0PT09MSl7XG4gICAgICAgICAgICBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cbiAgICAgICAgcmVzNCA9LXJlczQ7XG4gICAgICAgIGNjLmxvZyhyZXM0KTtcbiAgICB9LFxuICAgIHN3aXRjaDUgKCl7XG4gICAgICAgIGxldCBidXR0b241ID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG5cbiAgICAgICAgaWYocmVzNT09PTEpe1xuICAgICAgICAgICAgYnV0dG9uNS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b241Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMlxuICAgICAgICB9XG4gICAgICAgIHJlczUgPS1yZXM1O1xuICAgICAgICBjYy5sb2cocmVzNSk7XG4gICAgfSxcbiAgICBzd2l0Y2g2ICgpe1xuICAgICAgICBsZXQgYnV0dG9uNiA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXG4gICAgICAgIGlmKHJlczY9PT0xKXtcbiAgICAgICAgICAgIGJ1dHRvbjYubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUxXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYnV0dG9uNi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTJcbiAgICAgICAgfVxuICAgICAgICByZXM2ID0tcmVzNjtcbiAgICAgICAgY2MubG9nKHJlczYpO1xuICAgIH0sXG4gICAgc3dpdGNoNyAoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjcgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblxuICAgICAgICBpZihyZXM3PT09MSl7XG4gICAgICAgICAgICBidXR0b243Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjcubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cbiAgICAgICAgcmVzNyA9LXJlczc7XG4gICAgICAgIGNjLmxvZyhyZXM3KTtcbiAgICB9LFxuICAgIHN3aXRjaDggKCl7XG4gICAgICAgIGxldCBidXR0b244ID10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG5cbiAgICAgICAgaWYocmVzOD09MSl7XG4gICAgICAgICAgICBidXR0b244Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbjgubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyXG4gICAgICAgIH1cbiAgICAgICAgcmVzOCA9LXJlczg7XG4gICAgICAgIGNjLmxvZyhyZXM4KTtcbiAgICB9LFxuICAgIHN3aXRjaDkgKCl7XG5cbiAgICAgICAgaWYoKHJlczErcmVzMytyZXMyK3JlczQrcmVzNStyZXM2K3JlczcrcmVzOCk9PTgpe1xuICAgICAgICAgICAgd2luZG93LmxvY2tPZlN3aXRjaEluQ1AxID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5sb2coXCJzdWNjZXNzXCIpO1xuICAgICAgICB9O1xuICAgICAgICBjYy5sb2cocmVzMStyZXMzK3JlczIrcmVzNCtyZXM1K3JlczYrcmVzNytyZXM4KVxuXG4gICAgfSxcblxuICAgICBvbkxvYWQgKCkge1xuICAgICAgICAgLy8gY2MucmVzb3VyY2VzLmxvYWQoJ3N3aXRjaDEnKVxuICAgICAgICAgLy8gIGNjLnJlc291cmNlcy5sb2FkKCdzd2l0Y2gyJylcbiAgICAgICAgLy8gdGhpcy5zcHJpdGVzID0gIGNjLnJlc291cmNlcy5sb2FkKFwicmVzb3VyY2VzLzIucG5nXCIpXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyh0aGlzLnNwcml0ZXMpO1xuICAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=