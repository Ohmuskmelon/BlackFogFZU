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
        mynode:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.tip =  cc.find("Canvas/Main Camera/tip");
        this.textLabel = this.tip.getChildByName("textLabel").getComponent(cc.Label);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        cc.game.addPersistRootNode(this.mynode);
    },


    start () {
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onKeyDown(event){
        // 背包按钮
        this.contactItem = window.Global.itemName;
        this.scene = window.Global.currentScene;
        if(event.keyCode == cc.macro.KEY.r){
            console.log("InUse:"+window.InUse);
            if(window.Items[this.scene][this.contactItem].used == false){
                if(window.InUse == (window.Items[this.scene][this.contactItem].tool)){
                    console.log("correct tool");
                    this.textLabel.string = "correct tool";
                    window.Items[this.scene][this.contactItem].used = true;
                }
                else if(window.InUse == ''){
                    this.textLabel.string = "please take a tool";
                    console.log("please take the tool");
                }
                else{
                    this.textLabel.string = " wrong tool";
                    console.log("wrong tool");
                }
            }else{
                this.textLabel.string = "the item has been used";
            }
        }
    },
});
