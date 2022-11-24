// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var Material = require("tools");

var TOOLS = Material.TOOLS;
var toolMap = Material.toolMap;

var data = require("data");

var POINTS = data.POINTS;
var POMAP = data.POMAP;
var pushData = data.pushData;
var getData = data.getData;

cc.Class({
    extends: cc.Component,

    properties: {
        tips: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.playerNode = cc.find("Canvas/Player/hero");
        this.tt = 0;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    start() {

    },

    doorAction(tt) {
        let p_pos = this.playerNode.position;
        let e_pos = this.node.position;
        let dis = cc.Vec2.distance(e_pos, p_pos);
        if (dis <= 10) {
            Global.IsIn = true;
            Global.InArr[Global.CloseItem.computer] = 1;
            this.tips.active = true;
        } else {
            if (Global.IsIn && Global.InArr[Global.CloseItem.computer] != 0) {
                Global.InArr[Global.CloseItem.computer] = 0;
                Global.IsIn = false;
                this.tips.active = false;
            }
        }
        //console.log(Ghost.getGhost());
    },

    onKeyDown(event) {
        if (Global.InArr[Global.CloseItem.computer] == 1) {
            if (event.keyCode == cc.macro.KEY.t) {
                if (!TOOLS[toolMap.computer].inBag){
                    TOOLS[toolMap.computer].inBag = true;
                    window.Bag.push(TOOLS[toolMap.computer]);
                    for (var key in window.Bag){
                        console.log(window.Bag[key]);
                    }
                    this.node.destroy();
                }
            } 
            else if (event.keyCode == cc.macro.KEY.q){
                let data1 = [1,2,3];
                POINTS[POMAP.lockOfSwitchInCP0].state = true;
                pushData(data1, 'data1', POMAP.lockOfSwitchInCP0);
                let data2 = getData('data1', POMAP.lockOfSwitchInCP0);
                console.log(data2);
            }
        }
    },

    update(dt) {
        this.tt += dt;
        if (this.tt >= 0.3) {
            this.doorAction(dt);
            this.tt = 0;
        }
    },

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        if (Global.IsIn && Global.InArr[Global.CloseItem.computer] != 0) {
            Global.InArr[Global.CloseItem.computer] = 0;
            Global.IsIn = false;
            this.tips.active = false;
        }
    }
});