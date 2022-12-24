"use strict";
cc._RF.push(module, 'c54c7nKsO9NjJ876O9hvrCX', 'game - 001');
// scripts/controller/game - 001.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var inArr = [0, 0];
var closeItem = {
  door: 0,
  ghost: 1
};
cc.Class({
  "extends": cc.Component,
  properties: {
    mapNodes: cc.Node,
    useItem: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getPhysicsManager().debugDrawFlags = 0;
    cc.director.getPhysicsManager().gravity = cc.v2(0, -640);
    window.Global = {
      IsShowing: null,
      InArr: null,
      CloseItem: null,
      contact: null,
      id: null,
      currentScene: String,
      itemType: String,
      itemName: String,
      npcsMap: Map,
      gameBg: cc.Node,
      itemsMap: Map,
      doorsMap: Map
    };
  },
  start: function start() {
    console.log("start");
    Global.IsShowing = false;
    Global.InArr = inArr;
    Global.CloseItem = closeItem;
    Global.contact = ' ';
    Global.id = 0;
    Global.itemType = ' ';
    Global.itemName = ' ';
    Global.currentScene = cc.director.getScene()._name;
    console.log(Global.currentScene);
    this.initScenes();
    this.initAllNodes();
    this.initPaths();
    this.initTips(); // this.initMap(this.mapNodes);
  },
  //加载场景和门之间的对应关系
  initScenes: function initScenes() {},
  //重新加载场景，恢复原先的物品状态
  initAllNodes: function initAllNodes() {},
  //记录所有的节点路径，可选
  initPaths: function initPaths() {},
  //初始化弹窗的状态
  initTips: function initTips() {},
  initMap: function initMap() {}
});

cc._RF.pop();