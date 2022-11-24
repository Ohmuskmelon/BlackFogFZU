// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        playerNode : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        if (!this.playerNode)
        {
            console.log('dont get the player!');
            return;
        }
        let w_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0,0));
        let n_pos = this.node.parent.convertToNodeSpaceAR(w_pos);
        this.node.position = n_pos;
    },
});
