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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.currentScene = cc.director.getScene()._name;
        this.nextScene = '';
        this.currentDoor = '';
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

    },
    changeScene(){
        console.log("current scene: "+ this.currentScene);
        console.log("current doorToScene: "+ Global.doorToScenes);
        
        let scenes = Global.doorToScenes[this.currentScene];
        console.log("scenes: "+scenes);
        this.nextScene = scenes[this.currentDoor];
        cc.director.loadScene(this.nextScene);
    },
    // onButtonClick(){
    //     //预加载
    //     cc.director.preloadScene('game',function(){
    //         cc.director.loadScene("game");
    //     });
    // },
    // onButtonBack(){
    //     cc.director.loadScene("nemu");
    // },
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
        // console.log("current door:" + this.currentDoor);
    },
});
