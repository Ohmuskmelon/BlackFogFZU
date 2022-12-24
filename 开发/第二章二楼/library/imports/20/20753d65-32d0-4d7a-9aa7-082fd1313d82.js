"use strict";
cc._RF.push(module, '207531lMtBNepqnCC/RMT2C', 'bagSetting');
// scripts/bag/bagSetting.js

"use strict";

var TOOLS = window.TOOLS;
cc.Class({
  "extends": cc.Component,
  properties: {
    gridLayout: cc.Node,
    toolPrefab: cc.Prefab,
    introduction: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.gridLayout = cc.find("Canvas/Main Camera/bag/bagBg/layout");
    this.toolPrefab = cc.find("Canvas/Main Camera/bag/tool");
    this.introduction = cc.find("Canvas/Main Camera/bag/intro");
    this.toolsArray = window.Bag;
    this.toolMap = toolMap;
    console.log(this.toolMap);
  },
  spawnTools: function spawnTools() {
    // 首先确定gridLayout的各个属性
    var cellWidth = this.gridLayout.width * 0.105;
    var cellHeight = this.gridLayout.height * 0.215;
    var spacingX = this.gridLayout.width * 0.022;
    var spacingY = this.gridLayout.height * 0.045;
    this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
    this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
    this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
    this.gridLayout.getComponent(cc.Layout).spacingY = spacingY; // 根据TOOLS生成相应的道具

    console.log(Bag);
    console.log("Bag size:" + Bag.length);
    this.toolsArray = [];

    for (var _i = 0; _i < window.Bag.length; _i++) {
      var tool = cc.instantiate(this.toolPrefab);
      var id = this.toolMap[window.Bag[_i].name];
      tool.getComponent('bagTool').initInfo(window.TOOLS[id]);
      this.toolsArray.push(tool);
      this.gridLayout.addChild(tool);
    }

    var childrenSet = this.gridLayout.children;

    for (i = 0; i < childrenSet.length; i++) {
      childrenSet[i].active = true;
    }
  },
  bagBtn: function bagBtn() {
    // 背包按钮
    console.log("grid parent active: " + this.gridLayout.parent.active);

    if (this.gridLayout.parent.active) {
      // 隐藏节点
      this.gridLayout.parent.active = false; // 删除所有道具(或者不删，只是隐藏，自己决定)

      this.toolsArray.forEach(function (element) {
        element.removeFromParent();
      });
      this.introduction.active = false;
    } else {
      // 显示节点
      console.log("bagBg active");
      this.gridLayout.parent.active = true; // 生成所有道具

      this.spawnTools();
    }

    window.BagBackground = this.gridLayout.parent;
  },
  update: function update() {}
});

cc._RF.pop();