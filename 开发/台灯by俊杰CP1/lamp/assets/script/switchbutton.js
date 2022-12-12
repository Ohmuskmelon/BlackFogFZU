// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.color=1;
cc.Class({
    extends: cc.Component,


    start () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            let usetool = cc.find("Canvas/lampshade"); //通过全路径获取对应节点
            let num=cc.find("Canvas/num");
            if(openlamp==0)
            {
        }
            else if(openlamp==1)
            {
                if(color==1)
                {
                    cc.loader.loadRes("shade/2", cc.SpriteFrame, function (err, spriteFrame) {
                    usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    color++;
                });
                    cc.loader.loadRes("num/2", cc.SpriteFrame, function (err, spriteFrame) {
                    num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                }
                else if(color==2)
                {
                    cc.loader.loadRes("shade/3", cc.SpriteFrame, function (err, spriteFrame) {
                        usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        color++;
                    });
                    cc.loader.loadRes("num/3", cc.SpriteFrame, function (err, spriteFrame) {
                        num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else if(color==3)
                {
                    cc.loader.loadRes("shade/4", cc.SpriteFrame, function (err, spriteFrame) {
                        usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        color++;
                    });
                    cc.loader.loadRes("num/4", cc.SpriteFrame, function (err, spriteFrame) {
                        num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else if(color==4)
                {
                    cc.loader.loadRes("shade/1", cc.SpriteFrame, function (err, spriteFrame) {
                        usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        color=1;
                    });
                    cc.loader.loadRes("num/1", cc.SpriteFrame, function (err, spriteFrame) {
                        num.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
            }
            }.bind(this), this);
    },

});
