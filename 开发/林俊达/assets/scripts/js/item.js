// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var Material = require("./bagInfo");
 
let TOOLS = Material.TOOLS;
let toolMap = Material.toolMap;

cc.Class({
    extends: cc.Component,

    properties: {
        // item:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:


    onLoad () {
        this.tt = 0;
        this.playerNode = cc.find("Canvas/bg/player/body");
        this.name = this.node.name;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    start () {
    },

    ItemAction(tt) {
        let p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0,0));
        let e_pos =  this.node.convertToWorldSpaceAR(cc.v2(0,0));
        let dis = cc.Vec2.distance(e_pos, p_pos);
        console.log("dist:"+dis);
        if (dis <= 50) {
            Items.InArr[Items.CloseItem[this.name]] = 1;
            this.isIn = true;
        } else {
            if (Items.InArr[Items.CloseItem[this.name]] != 0) {
                Items.InArr[Items.CloseItem[this.name]] = 0;
            }
            this.isIn = false;
        }
        // console.log(Items.InMap[Global.currentScene]);
    },

    onKeyDown(event) {
        if (Items.InArr[Items.CloseItem[this.name]] == 1) {
            console.log(this.node.name);
            if (event.keyCode == cc.macro.KEY.k) {
                if (!TOOLS[toolMap[this.name]].inBag){
                    TOOLS[toolMap[this.name]].inBag = true;
                    window.Bag.push(TOOLS[toolMap[this.name]]);
                    for (var key in window.Bag){
                        console.log(window.Bag[key].name);
                    }
                    this.node.destroy();
                }
            }
        }
    },

    update(dt) {
        this.tt += dt;
        if (this.tt >=0.3) {
            this.ItemAction(this.tt);
            this.tt = 0;
        }
    },
 
    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        if (Items.InArr[Items.CloseItem[this.name]] != 0) {
            Items.InArr[Items.CloseItem[this.name]]  = 0;
            // this.tips.active = false;
        }
    }
});
