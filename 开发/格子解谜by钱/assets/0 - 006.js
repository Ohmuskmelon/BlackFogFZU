// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        //window.qwnum=[-1,1,1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1];
        //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
        let index=6;
        this.node.on(cc.Node.EventType.MOUSE_DOWN,function(event){
            qwnum[index]=-qwnum[index];
            if(index<=11)qwnum[index+4]=-qwnum[index+4];
            if(index>=4)qwnum[index-4]=-qwnum[index-4];
            if(index%4!=0)qwnum[index-1]=-qwnum[index-1];
            if(index%4!=3)qwnum[index+1]=-qwnum[index+1];
        })
    
     
    },

    update (dt) {
        let index=6;
        let self=this;
        if(qwnum[index]==1){
            cc.loader.loadRes("tall",cc.SpriteFrame,function(err,sp){
                self.node.getComponent(cc.Sprite).spriteFrame=sp;
              })
        }
        if(qwnum[index]==-1){
            cc.loader.loadRes("short",cc.SpriteFrame,function(err,sp){
                self.node.getComponent(cc.Sprite).spriteFrame=sp;
            })
        }

    },
});
