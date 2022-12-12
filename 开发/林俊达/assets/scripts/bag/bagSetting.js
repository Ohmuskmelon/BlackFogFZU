var TOOLS = window.TOOLS;

cc.Class({
    extends: cc.Component,

    properties: {
        gridLayout: cc.Node,
        toolPrefab: cc.Prefab,
        introduction:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.gridLayout = cc.find("Canvas/Main Camera/bag/bagBg/layout");
        this.toolPrefab = cc.find("Canvas/Main Camera/bag/tool");
        this.introduction = cc.find("Canvas/Main Camera/bag/intro");
        this.toolsArray = window.Bag;
        this.toolMap = toolMap;
        console.log(this.toolMap);
    },

    spawnTools() {
        // 首先确定gridLayout的各个属性
        let cellWidth = this.gridLayout.width * 0.105;
        let cellHeight = this.gridLayout.height * 0.215;
        let spacingX = this.gridLayout.width * 0.022;
        let spacingY = this.gridLayout.height * 0.045;

        this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
        this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
        this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
        this.gridLayout.getComponent(cc.Layout).spacingY = spacingY;

        // 根据TOOLS生成相应的道具

        console.log(Bag);
        console.log("Bag size:" + Bag.length);

        this.toolsArray = [];
        for (let i = 0; i < window.Bag.length; i++) {
            let tool = cc.instantiate(this.toolPrefab);
            let id = this.toolMap[window.Bag[i].name];
            tool.getComponent('bagTool').initInfo(window.TOOLS[id]);
            this.toolsArray.push(tool);
            this.gridLayout.addChild(tool);
        }
        let childrenSet = this.gridLayout.children;
        for (i = 0; i < childrenSet.length; i++) {
            childrenSet[i].active = true;
        }
    },

    bagBtn() {
        // 背包按钮
        console.log("grid parent active: " + this.gridLayout.parent.active);
        if (this.gridLayout.parent.active) {
            // 隐藏节点
            this.gridLayout.parent.active = false;

            // 删除所有道具(或者不删，只是隐藏，自己决定)
            this.toolsArray.forEach(element => {
                element.removeFromParent();
            });
            this.introduction.active = false;
            
        }
        else {
            // 显示节点
            console.log("bagBg active");
            this.gridLayout.parent.active = true;

            // 生成所有道具
            this.spawnTools();
        }
        window.BagBackground = this.gridLayout.parent;
    },
    update() {

    }
});
