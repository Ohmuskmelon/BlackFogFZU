// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        label:cc.Label,
        thisNode:cc.Node,
        successNode:cc.Node,
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    

    start () {
    },

    update (dt) {
        if (window.lockOfGateCP1 == true){
            this.label.getComponent(cc.Label).string = "密码正确，请拿走石头";
            this.successNode.active = true;
            this.thisNode.active = false;
        }
    },
});
