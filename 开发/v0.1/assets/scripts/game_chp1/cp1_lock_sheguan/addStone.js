// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    addStone(){
        cc.find("Canvas/NoStone").active = false;
        cc.find("Canvas/Label").getComponent(cc.Label).string = "请输入密码";
        cc.find("Canvas/gate").active = true;
    },
    start () {
    },

    // update (dt) {},
});
