// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        tip: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    


    initNpc() {
        this.charType = this.node.parent.name;
        this.playerNode = cc.find("Canvas/bg/player/body");
        this.tt = 0;
        this.canShow = false;
    },

    onLoad () {
        this.tip =  cc.find("Canvas/Main Camera/tip");
        this.initNpc();
    },

    start() {
    },

    itemAction(dt) {
        let p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0,0));
        let e_pos = this.node.convertToWorldSpaceAR(cc.v2(0,0));
        let dis = cc.Vec2.distance(e_pos, p_pos);

        if (dis < 30 && this.canShow == false) {
            Global.itemType = this.charType;
            Global.itemName = this.node.name;
            this.tip.active = true;
            this.canShow = true;
        }
        else  {
            if (dis >= 30 && this.canShow == true) {
                this.tip.active = false;
                this.canShow = false;
                Global.itemType = ' ';
                Global.itemName = ' ';
            }
        }
    },

    update(dt) {
        this.tt += dt;
        if (this.tt >= 0.3) {
            this.itemAction(dt);
            this.tt = 0;
        }
    },
});
