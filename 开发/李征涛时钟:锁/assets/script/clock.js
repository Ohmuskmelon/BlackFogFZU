// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let res1 =15; let res2 =3;let res ="";
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
    //7��25��
    clock1(){
        //cc.log(this.node.angle);
        res = this.node.angle;
        this.node.angle = this.node.angle-30;
        res1 = ((-res%360)/6+20)%60
        //cc.log(res1+"")

    },
    clock2(){
        res = this.node.angle;
        this.node.angle = this.node.angle-30;
        res2 =((-res%360)/30+4)%12
        //cc.log(res2)

    },
    clockJudge(){
         res = res2+"时"+res1+"分";
         cc.log(res)
       if(res === "7时25分"){
           cc.log("success")
        }
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
