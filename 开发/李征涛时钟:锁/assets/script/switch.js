
// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
/*
电闸
 */
window.lockOfSwitchInCP1 = false;
let res1 = 1;let res2 =1;let res3 =-1;let res4 =1;let res5 =-1;let res6 =1;
let res7 =1;let res8 =-1;
cc.Class({
    extends: cc.Component,

    properties: {

        sprite_Frame1 :{
            default : null,
            type :cc.SpriteFrame
        },
        sprite_Frame2 :{
            default : null,
            type :cc.SpriteFrame
        }
    },

    switch1 (){
        let button1 =this.node.getComponent(cc.Button);
        res1 =-res1;
        if(res1===1){
            button1.normalSprite = this.sprite_Frame1
        }else{
            button1.normalSprite = this.sprite_Frame2
        }

        cc.log("res1"+res1);

    },
    switch2 (){
        let button2 =this.node.getComponent(cc.Button);
        res2 =-res2;
        if(res2===1){
            button2.normalSprite = this.sprite_Frame1
        }else{
            button2.normalSprite = this.sprite_Frame2
        }

        cc.log("res2"+res2);
    },
    switch3 (){
        let button3 =this.node.getComponent(cc.Button);

        if(res3===1){
            button3.normalSprite = this.sprite_Frame1
        }else{
            button3.normalSprite = this.sprite_Frame2
        }
        res3 =-res3;
        cc.log(res3);
    },
    switch4 (){
        let button4 =this.node.getComponent(cc.Button);

        if(res4===1){
            button4.normalSprite = this.sprite_Frame1
        }else{
            button4.normalSprite = this.sprite_Frame2
        }
        res4 =-res4;
        cc.log(res4);
    },
    switch5 (){
        let button5 =this.node.getComponent(cc.Button);

        if(res5===1){
            button5.normalSprite = this.sprite_Frame1
        }else{
            button5.normalSprite = this.sprite_Frame2
        }
        res5 =-res5;
        cc.log(res5);
    },
    switch6 (){
        let button6 =this.node.getComponent(cc.Button);

        if(res6===1){
            button6.normalSprite = this.sprite_Frame1
        }else{
            button6.normalSprite = this.sprite_Frame2
        }
        res6 =-res6;
        cc.log(res6);
    },
    switch7 (){
        let button7 =this.node.getComponent(cc.Button);

        if(res7===1){
            button7.normalSprite = this.sprite_Frame1
        }else{
            button7.normalSprite = this.sprite_Frame2
        }
        res7 =-res7;
        cc.log(res7);
    },
    switch8 (){
        let button8 =this.node.getComponent(cc.Button);

        if(res8==1){
            button8.normalSprite = this.sprite_Frame1
        }else{
            button8.normalSprite = this.sprite_Frame2
        }
        res8 =-res8;
        cc.log(res8);
    },
    switch9 (){

        if((res1+res3+res2+res4+res5+res6+res7+res8)==8){
            window.lockOfSwitchInCP1 = false;
            cc.log("success");
        };
        cc.log(res1+res3+res2+res4+res5+res6+res7+res8)

    },

     onLoad () {
         // cc.resources.load('switch1')
         //  cc.resources.load('switch2')
        // this.sprites =  cc.resources.load("resources/2.png")
        //  console.log(this.sprites);
     },

    start () {

    },

    // update (dt) {},
});
