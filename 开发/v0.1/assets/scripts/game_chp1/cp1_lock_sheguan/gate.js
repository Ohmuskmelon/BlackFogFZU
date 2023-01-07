// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle gate


window.lockOfGateCP1 =false;
let gate1 = 1; let gate2 =2 ;let gate3 = 3 ;  let gate4 = 4;
let gate5 =5;let gate6 = 6;let gate7 = 7;let gate8 = 8;let gate9 = 9;let res ="";
cc.Class({
    extends: cc.Component,

    properties: {
        // label:cc.Label,
        // thisNode:cc.Node,
        // successNode:cc.Node,
    },
    gate1 (){
        res =res+gate1;

        cc.log(res);
    },
    gate2 (){
        res =res+gate2;
        cc.log(res);
    },
    gate3 (){
        res =res+gate3;
        cc.log(res);
    },
    gate4 (){
        res =res+gate4;
        cc.log(res);
    },
    gate5 (){
        res =res+gate5;
        cc.log(res);
    },
    gate6 (){
        res =res+gate6;
        cc.log(res);
    },
    gate7 (){
        res =res+gate7;
        cc.log(res);
    },
    gate8 (){
        res =res+gate8;
        cc.log(res);
    },
    gate9 (){
        res =res+gate9;
        cc.log(res);
    },
    gateJudge (){
        if(res.length<4){
            cc.log(res)
        }
        else if(res.length===4&&(res==="3692")){
            cc.log("success");
            window.lockOfGateCP1 =true;
            cc.find("Canvas/Label").getComponent(cc.Label).string = "密码正确，请拿走石头";
            // this.node.active = true;
        }else {
            cc.find("Canvas/Label").getComponent(cc.Label).string = "密码错误，请重试";
            cc.log("fail")
            res ="";
        }
    },


    start () {

    },

    // update (dt) {},
});
