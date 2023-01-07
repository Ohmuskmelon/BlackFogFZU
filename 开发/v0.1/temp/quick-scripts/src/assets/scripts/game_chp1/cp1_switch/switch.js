"use strict";
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