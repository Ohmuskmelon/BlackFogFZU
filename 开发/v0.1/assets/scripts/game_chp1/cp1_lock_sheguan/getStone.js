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
        noStone:cc.Node,
        withStone:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    getStone(){
        this.withStone.active = false;
        this.noStone.active = true;
        this.label.getComponent(cc.Label).string = "石头已被成功取走";
        if (!window.TOOLS[window.toolMap["蓝色宝石"]].inBag){
            window.TOOLS[window.toolMap["蓝色宝石"]].inBag = true;
            window.Bag.push(window.TOOLS[window.toolMap["蓝色宝石"]]);
            for (var key in window.Bag){
                console.log(window.Bag[key].name);
            }
        }
    },

    start () {

    },

});
