"use strict";
cc._RF.push(module, 'a41c47DlGZKZZACWiBCld78', 'controlUIInFirstPage');
// scripts/controlUIInFirstPage.js

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
  startGame: function startGame() {
    console.log(window.playerPosition);

    for (var key in window.playerPosition) {
      console.log(window.playerPosition[key]);
      window.playerPosition[key] = null;
    }

    cc.director.loadScene("chp1_303");
  },
  aboutUs: function aboutUs() {
    cc.director.loadScene("关于我们");
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();