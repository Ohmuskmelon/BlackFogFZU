// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        phone: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        console.log('window.TOOLS[window.toolMap["手机"]].inBag', window.TOOLS[window.toolMap["手机"]].inBag);
        if (window.TOOLS[window.toolMap["手机"]].inBag) {
            this.node.active = false;
        }
    },
    getPhone() {
        this.phone.active = false;
        if (!window.TOOLS[window.toolMap["手机"]].inBag) {
            window.Bag.push(window.TOOLS[window.toolMap["手机"]]);
            window.TOOLS[window.toolMap["手机"]].inBag = true;
            for (var key in window.Bag) {
                console.log(window.Bag[key].name);
            }
        }
    },

    start() {

    },

    // update (dt) {},
});
