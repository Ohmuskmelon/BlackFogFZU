// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        nodeBody:cc.Node,
        anima:cc.Animation,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    // onKeyDown(event){
    //     if(this.cantake && event.keyCode == cc.macro.KEY.k){
    //         console.log("press k");
    //         this.saveState();
    //         this.collect();
    //     }
    // },

    // onKeyDown(event) {
    //     if (Items.InArr[Global.CloseItem.picture] == 1) {
    //         if (event.keyCode == cc.macro.KEY.t) {
    //             if (!TOOLS[toolMap.picture].inBag){
    //                 TOOLS[toolMap.picture].inBag = true;
    //                 window.Bag.push(TOOLS[toolMap.picture]);
    //                 for (var key in window.Bag){
    //                     console.log(window.Bag[key].name);
    //                 }
    //                 this.node.destroy();
    //             }
    //         }
    //     }
    // },

    saveState(){


    },

    setAnima(){
        if(this.anima){
            this.anima.play("takeItem");
        }
    },
    collect(){
        this.nodeBody.active = false ;
    },

    canTake(){
        return Global.itemType == 'items' && this.node.name == Global.itemName;
    },

    start () {

    },

    update (dt) {
        this.cantake = this.canTake();
    },
});
