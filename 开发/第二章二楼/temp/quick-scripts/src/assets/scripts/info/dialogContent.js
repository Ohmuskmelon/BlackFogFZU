"use strict";
cc._RF.push(module, '27d86vwvnRCfL1Wlmh2eoVl', 'dialogContent');
// scripts/info/dialogContent.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    window.Dialog = {
      contents: Map
    };
  },
  start: function start() {
    //chp1 scene 1 contents
    var chp1_scene1_npc1_content = [{
      role: 2,
      content: "你好，我是NPC.欢迎来到场景1"
    }, {
      role: 1,
      content: "dadadadada"
    } //当前的testData
    ];
    var chp1_scene1_npc2_content = [{
      role: 2,
      content: "This is scene1"
    }, {
      role: 1,
      content: "hhhhhhhhh"
    } //当前的testData
    ];
    var chp1_scene1_npc3_content = [{
      role: 2,
      content: "scene1 npc3"
    }, {
      role: 1,
      content: "jjjjjjjj"
    } //当前的testData
    ];
    var contents_Chp1_Scene1 = new Map();
    contents_Chp1_Scene1['npc1'] = chp1_scene1_npc1_content;
    contents_Chp1_Scene1['npc2'] = chp1_scene1_npc2_content;
    contents_Chp1_Scene1['npc3'] = chp1_scene1_npc3_content;
    Dialog.contents['chp1_scene1'] = contents_Chp1_Scene1; //chp2 scene1 contents

    var chp2_scene1_npc1_content = [{
      role: 2,
      content: "scene 2 npc1"
    }, {
      role: 1,
      content: "aaaaaaaa"
    } //当前的testData
    ];
    var chp2_scene1_npc2_content = [{
      role: 2,
      content: "scene 2 npc1"
    }, {
      role: 1,
      content: "bbbbbbbbbbbbbbbb"
    } //当前的testData
    ];
    var contents_Chp2_Scene1 = new Map();
    contents_Chp2_Scene1['npc1'] = chp2_scene1_npc1_content;
    contents_Chp2_Scene1['npc2'] = chp2_scene1_npc2_content;
    Dialog.contents['chp2_scene1'] = contents_Chp2_Scene1;
  } // update (dt) {},

});

cc._RF.pop();