// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.openlamp=0;
cc.Class({
    extends: cc.Component,

    properties: {
    },
    start () {
        //点击使用物品会使物品图片出现在左上角
        this.node.pic='shade/1';
        let num=cc.find("Canvas/num");
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            let usetool = cc.find("Canvas/lampshade"); //通过全路径获取对应节点
            if(openlamp==0)
            {cc.loader.loadRes("shade/1", cc.SpriteFrame, function (err, spriteFrame) {
                usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            cc.loader.loadRes("num/1", cc.SpriteFrame, function (err, spriteFrame) {
                num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            openlamp++;
        }
            else if(openlamp==1)
            {
                cc.loader.loadRes(null, cc.SpriteFrame, function (err, spriteFrame) {
                    usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                cc.loader.loadRes(null, cc.SpriteFrame, function (err, spriteFrame) {
                    num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                openlamp--;
            }
            }.bind(this), this);}
});
