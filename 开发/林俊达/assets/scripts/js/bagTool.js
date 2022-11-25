// cc.Class({
//     extends: cc.Component,

//     properties: {
//     },

//     // LIFE-CYCLE CALLBACKS:

//     initInfo (info) {
//         // 初始化该道具相关信息

//         // 图片
//         var self = this;
//         cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
//             self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
//         });

//         // 介绍
//         this.node.intro = info['intro'];
//         this.node.on(cc.Node.EventType.MOUSE_MOVE, function () {
//             let searchNode = cc.find("Canvas/intro"); //通过全路径获取对应节点
//             searchNode.getComponent(cc.Label).string=this.node.intro;
//             }.bind(this), this);

//         //点击使用物品会使物品图片出现在左上角
//         this.node.pic=info['picUrl'];
//         this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
//             let usetool = cc.find("Canvas/usetool"); //通过全路径获取对应节点
//             cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
//                 usetool.getComponent(cc.Sprite).spriteFrame = spriteFrame;
//             });
//             }.bind(this), this);
//     },
// });
