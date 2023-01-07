"use strict";
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