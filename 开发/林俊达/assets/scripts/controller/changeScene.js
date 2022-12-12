// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        door:cc.Node,
        playerNode:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.currentScene = cc.director.getScene()._name;
        this.nextScene = '';
        this.currentDoor = '';
        this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
        console.log("useItem:"+this.useItem.name);
        console.log("onload");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onKeyDown(event){
        // console.log("press space");
        if(this.canshow && event.keyCode == cc.macro.KEY.space){
            console.log("press space");
            this.saveState();
            this.changeScene();
        }
    },

    canShow(){
        return Global.itemType == 'doors';
    },

    saveState(){
        window.player.pos_X = this.playerNode.getPosition().x;
        window.player.pos_Y = this.playerNode.getPosition().y;
        console.log(window.player.pos_X ,window.player.pos_Y); 
    },

    onSceneLaunched(){
        if(window.InUse !=''){
            let i = 0
            for (; i < window.Bag.length; i++) {
                if(window.Bag[i].name == window.InUse){
                    break;
                }
            }
            let id = window.toolMap[window.Bag[i].name];
            console.log("id:"+ id);
            let tool = window.TOOLS[id];
            console.log("tool:"+tool.name);
            this.useItem = cc.find("Canvas/Main Camera/bag/useTool/body");
            var self = this.useItem;
            console.log("self out: "+self.name);
            cc.loader.loadRes(tool['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
                self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                console.log("self in: "+self.name);
            });
        }
    },

    changeScene(){
        let scenes = window.scenes[this.currentScene];
        console.log("scenes: "+scenes);
        this.nextScene = scenes[this.currentDoor];
        cc.director.loadScene(this.nextScene,this.onSceneLaunched);
        
    },
  
    start () {
        
    },

    update () {
        // console.log(cc.director.getScene()._name);
        this.canshow = this.canShow();
        if(Global.itemType!='doors'){
            this.currentDoor = '';
        }
        else{
            this.currentDoor = Global.itemName;
        }
    },
});
