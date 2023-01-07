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
        window.cup=[1,0,3,2];
        window.listen=[-1,-1];
        window.touchcnt=0;
        window.neatOfClothesInCP1=0;
        var thisnode=0;
        //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
        this.node.on(cc.Node.EventType.MOUSE_DOWN,function(event){
            listen[touchcnt]=thisnode;
            touchcnt++;            
        })
     
    },

    update (dt) {
        let self=this;
        if(cup[0]==0){
            cc.loader.loadRes("衣服",cc.SpriteFrame,function(err,sp){
                self.node.getComponent(cc.Sprite).spriteFrame=sp;
              })
        }
        if(cup[0]==1){
            cc.loader.loadRes("袜子",cc.SpriteFrame,function(err,sp){
                self.node.getComponent(cc.Sprite).spriteFrame=sp;
            })
        }
        if(cup[0]==2){
            cc.loader.loadRes("裤子",cc.SpriteFrame,function(err,sp){
                self.node.getComponent(cc.Sprite).spriteFrame=sp;
            })
        }
        if(cup[0]==3){
            cc.loader.loadRes("帽子",cc.SpriteFrame,function(err,sp){
                self.node.getComponent(cc.Sprite).spriteFrame=sp;
            })
        }

        if(touchcnt==2){
            touchcnt=0;
            var change_a=listen[0];
            var change_b=listen[1];
            var t=cup[change_a];
            cup[change_a]=cup[change_b];
            cup[change_b]=t;
            listen[0]=-1;
            listen[1]=-1; 
        }
        if(cup[0]==0&&cup[1]==1&&cup[2]==2&&cup[3]==3&&window.neatOfClothesInCP1==0){
            window.neatOfClothesInCP1 = true;
            console.log("衣服顺序摆放成功");
            cc.director.loadScene('chp1_301');
        }

    },
});
