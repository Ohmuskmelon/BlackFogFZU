// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
    extends: cc.Component,

    properties: {
        tip:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:


    onLoad () {
        this.tt = 0;
        this.playerNode = cc.find("Canvas/bg/player/body");
        this.name = this.node.name;
        if(window.TOOLS[window.toolMap[this.name]].inBag){
            this.node.active = false;
        }
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    start () {
    },

    ToolAction(tt) {
        let p_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0,0));
        let e_pos =  this.node.convertToWorldSpaceAR(cc.v2(0,0));
        let dis = cc.Vec2.distance(e_pos, p_pos);
        if (dis <= 50) {
            this.isIn = true;
        } else {
            this.isIn = false;
        }
    },

    onKeyDown(event) {
        if (this.isIn) {
            console.log(this.node.name);
            if (event.keyCode == cc.macro.KEY.k) {
                if (!window.TOOLS[window.toolMap[this.name]].inBag){
                    window.TOOLS[window.toolMap[this.name]].inBag = true;
                    window.Bag.push(window.TOOLS[window.toolMap[this.name]]);
                    for (var key in window.Bag){
                        console.log(window.Bag[key].name);
                    }
                    this.node.active = false;
                    this.tip.active = false;
                    // Items.InArr[Items.CloseItem[this.name]] = 1;
                }
            }
        }
    },

    update(dt) {
        this.tt += dt;
        if (this.tt >=0.3) {
            this.ToolAction(this.tt);
            this.tt = 0;
            // console.log(window.Bag);
        }
    },
 
    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }
});
