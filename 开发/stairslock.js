// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let res1 =1 ;let res2 =2 ;let res3 =3 ;
let res4 = 4; let res5 = 5; let res6 =6 ;
let res7 =7 ; let res8 =8 ; let res9 =9 ;
let res = "";
window.lockOfStairsInCP0 =false;
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
    stairLock1 (){
        res =res+res1;

        cc.log(res);
    },
    stairLock2 (){
        res =res+res2;
        cc.log(res);
    },
    stairLock3 (){
        res =res+res3;
        cc.log(res);
    },
    stairLock4 (){
        res =res+res4;
        cc.log(res);
    },
    stairLock5 (){
        res =res+res5;
        cc.log(res);
    },
    stairLock6 (){
        res =res+res6;
        cc.log(res);
    },
    stairLock7 (){
        res =res+res7;
        cc.log(res);
    },
    stairLock8 (){
        res =res+res8;
        cc.log(res);
    },
    stairLock9 (){
        res =res+res9;
        cc.log(res);
    },
    stairLockJudge (){
        if(res.length<4){
            cc.log(res)
        }
        else if(res.length===4&&(res==="9882")){
            cc.log("success")
            window.lockOfStairsInCP0 =true;
        }else {
            cc.log("fail")
            res ="";
        }
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
