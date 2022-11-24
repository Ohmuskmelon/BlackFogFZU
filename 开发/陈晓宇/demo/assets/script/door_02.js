// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var isDoorClosed = false;

cc.Class({
    extends: cc.Component,

    properties: {
        tips : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        isDoorClosed = false;
        this.playerNode = cc.find("Canvas/Player/hero");
        this.tt = 0;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    start() {

    },

    doorAction(tt) {
        let p_pos = this.playerNode.position;
        let e_pos = this.node.position;
        let dis = cc.Vec2.distance(e_pos, p_pos);
        if (dis <= 10) {
            isDoorClosed = true;
            this.tips.active = true;
        } else {
            isDoorClosed = false;
            this.tips.active = false;
            
        }
    },

    onKeyDown(event) {
        if (isDoorClosed)
            if (event.keyCode == cc.macro.KEY.space){
                this.tips.active = false;
                cc.director.loadScene("main");
            }
    },

    update(dt) {
        this.tt += dt;
        if (this.tt >= 0.3) {
            this.doorAction(dt);
            this.tt = 0;
        }
    },

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }
});

module.exports = {
    getDoorClosed(){
        return isDoorClosed;
    }
}