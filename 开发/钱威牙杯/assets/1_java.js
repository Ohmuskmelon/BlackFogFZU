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
        window.cup=[0,1,0,1,0];
        window.listen=[-1,-1];
        window.touchcnt=0;
        window.lockOfCupsInCP1=-1;
        //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)
        this.node.on(cc.Node.EventType.MOUSE_DOWN,function(event){
            listen[touchcnt]=0;
            touchcnt++;
            
            
        })
     
    },

    update (dt) {
        let self=this;
        if(cup[0]==1){
            cc.loader.loadRes("tall",cc.SpriteFrame,function(err,sp){
                self.node.getComponent(cc.Sprite).spriteFrame=sp;
              })
        }
        if(cup[0]==0){
            cc.loader.loadRes("short",cc.SpriteFrame,function(err,sp){
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
        if(cup[0]==0&&cup[1]==0&&cup[2]==1&&cup[3]==0&&cup[4]==1&&lockOfCupsInCP1==-1){
            lockOfCupsInCP1=1;
            console.log("杯子顺序摆放成功");
        }

    },
});
