// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        door: cc.Node,
        playerNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    F1ToF2(dt) {
        let p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0,0));
        let e_pos = this.node.convertToWorldSpaceAR(cc.v2(0,0));
        let dis = cc.Vec2.distance(e_pos, p_pos);

        // console.log("type:"+window.Global.itemType+":"+dis);
        if (dis < 100) {
            this.canChange = true;
        }
    },

    

    update (dt) {
        this.F1ToF2(dt);
    },
});
