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
    // 纸条内容视为npc
    //chp1 三楼走廊的 纸条内容 
    var chp1_zoulangF3_d1_content = [{
      role: 2,
      content: "今天是2015年元旦，我和我的舍友们好像来到了传说中的黑雾福大，宿舍楼里好像就只有我和我的舍友们，听说在这里会看到以前学长的留言，那我也留下我的留言吧。"
    }, {
      role: 2,
      content: "如果现在正在看留言的你被某个密码锁困住了，别担心，可能这个锁的密码能够从某些墙上找到一些线索"
    }, {
      role: 1,
      content: "原来这里就是黑雾福大，以前听学姐提到过，听说黑雾福大会把学生和老师困在这里，我还以为是都市传说呢，没想到是真的。"
    }, {
      role: 1,
      content: "虽然不清楚具体是什么情况，总之先出宿舍楼吧。"
    }, {
      role: 1,
      content: "既然是黑雾福大，那也别怪我私闯宿舍了，我应该去其他宿舍找找线索。"
    } //当前的testData
    ];
    var contents_Chp1_Scene1 = new Map();
    contents_Chp1_Scene1['npc1'] = chp1_zoulangF3_d1_content;
    window.Dialog.contents['chp1_三楼走廊'] = contents_Chp1_Scene1;
    var chp1_301_paper1_content = [{
      role: 2,
      content: "如果有人看到的话，请记住这间宿舍的门会自己消失，但是也许是这间宿舍原来的成员有强迫症，将外面挂着的衣服按照一定的顺序来排序，门就能出现，真是神奇。"
    }, {
      role: 1,
      content: "看起来门的消失和外面挂着的衣服有关，虽然很扯蛋，但是我要去看看，也许我能找到什么线索"
    }];
    var chp1_301_paper2_content = [{
      role: 2,
      content: "我的强迫症实在太严重了，但是我的舍友老是会忘记我衣物的晾晒顺序"
    }, {
      role: 2,
      content: "「4231」，希望这样的方法能够让舍友记住"
    }, {
      role: 2,
      content: "为了防止舍友忘记这串数字代表什么，我就给个提示吧："
    }, {
      role: 2,
      content: "妈妈给小明买了一条破洞裤，这条裤子在膝盖处有一处破洞，但是小明却坚持声称这条裤子有4个洞，其实妈妈是对的，小明也是对的"
    }];
    var contents_Chp1_301 = new Map();
    contents_Chp1_301['npc1'] = chp1_301_paper1_content;
    contents_Chp1_301['npc2'] = chp1_301_paper2_content;
    window.Dialog.contents['chp1_301'] = contents_Chp1_301;
    var chp1_2Floor_paper1_content = [{
      role: 2,
      content: "真的是很震惊！没想到201和203在黑雾福大中竟如此诡异，它们是完全对称的！希望之后读到这个纸条的人一定要记住"
    }, {
      role: 1,
      content: "201和203是对称的？也许这是我能进入202宿舍的关键"
    }];
    var contents_Chp1_2Floor = new Map();
    contents_Chp1_2Floor['npc1'] = chp1_2Floor_paper1_content;
    window.Dialog.contents['chp1_二楼走廊'] = contents_Chp1_2Floor; //chp2 scene1 contents

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
    window.Dialog.contents['chp2_scene1'] = contents_Chp2_Scene1;
  } // update (dt) {},

});

cc._RF.pop();