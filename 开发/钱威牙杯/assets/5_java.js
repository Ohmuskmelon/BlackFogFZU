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
        this.node.on(cc.Node.EventType.MOUSE_DOWN,function(event){
            listen[touchcnt]=4;
            touchcnt++;
            
            
        })
    },

    update (dt) {
        let self=this;
        if(cup[4]==1){
            cc.loader.loadRes("tall",cc.SpriteFrame,function(err,sp){
                self.node.getComponent(cc.Sprite).spriteFrame=sp;
              })
        }
        if(cup[4]==0){
            cc.loader.loadRes("short",cc.SpriteFrame,function(err,sp){
                self.node.getComponent(cc.Sprite).spriteFrame=sp;
            })
        }

    },
});
