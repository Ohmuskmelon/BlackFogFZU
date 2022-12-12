// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.lockOfClosetInCP1 = false;
let res1 =0;let res2 =0; let res3 =0 ;let res4 =0;let res ="";
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
        },
        sprite_Frame3 :{
            default : null,
            type :cc.SpriteFrame
        },
        sprite_Frame4 :{
            default : null,
            type :cc.SpriteFrame
        },sprite_Frame5 :{
            default : null,
            type :cc.SpriteFrame
        },
        sprite_Frame6 :{
            default : null,
            type :cc.SpriteFrame
        },sprite_Frame7 :{
            default : null,
            type :cc.SpriteFrame
        },
        sprite_Frame8 :{
            default : null,
            type :cc.SpriteFrame
        },sprite_Frame9 :{
            default : null,
            type :cc.SpriteFrame
        },
        sprite_Frame0 :{
            default : null,
            type :cc.SpriteFrame
        },
        sprite_FrameOpen :{
            default : null,
            type :cc.SpriteFrame
        }
    },

    // LIFE-CYCLE CALLBACKS:
    closet1(){
        let button1 =this.node.getComponent(cc.Button);

        switch (res1) {
            case 0 : button1.normalSprite = this.sprite_Frame1;break;
            case 1 : button1.normalSprite = this.sprite_Frame2;break;
            case 2: button1.normalSprite = this.sprite_Frame3;break;
            case 3: button1.normalSprite = this.sprite_Frame4;break;
            case 4 : button1.normalSprite = this.sprite_Frame5;break;
            case 5: button1.normalSprite = this.sprite_Frame6;break;
            case 6: button1.normalSprite = this.sprite_Frame7;break;
            case 7: button1.normalSprite = this.sprite_Frame8;break;
            case 8: button1.normalSprite = this.sprite_Frame9;break;
            case 9: button1.normalSprite = this.sprite_Frame0;break;
        }res1 ++;
        if(res1===10){
            res1=0;
        }
    },
    closet2(){
        let button2 =this.node.getComponent(cc.Button);
        switch (res2) {
            case 0 : button2.normalSprite = this.sprite_Frame1;break;
            case 1 : button2.normalSprite = this.sprite_Frame2;break;
            case 2 : button2.normalSprite = this.sprite_Frame3;break;
            case 3 : button2.normalSprite = this.sprite_Frame4;break;
            case 4 : button2.normalSprite = this.sprite_Frame5;break;
            case 5 : button2.normalSprite = this.sprite_Frame6;break;
            case 6 : button2.normalSprite = this.sprite_Frame7;break;
            case 7 : button2.normalSprite = this.sprite_Frame8;break;
            case 8 : button2.normalSprite = this.sprite_Frame9;break;
            case 9 : button2.normalSprite = this.sprite_Frame0;break;
        }res2 ++;
        if(res2===10){
            res2=0;
        }
    },
    closet3(){
        let button3 =this.node.getComponent(cc.Button);
        switch (res3) {
            case 0 : button3.normalSprite = this.sprite_Frame1;break;
            case 1 : button3.normalSprite = this.sprite_Frame2;break;
            case 2 : button3.normalSprite = this.sprite_Frame3;break;
            case 3 : button3.normalSprite = this.sprite_Frame4;break;
            case 4 : button3.normalSprite = this.sprite_Frame5;break;
            case 5 : button3.normalSprite = this.sprite_Frame6;break;
            case 6 : button3.normalSprite = this.sprite_Frame7;break;
            case 7 : button3.normalSprite = this.sprite_Frame8;break;
            case 8 : button3.normalSprite = this.sprite_Frame9;break;
            case 9 : button3.normalSprite = this.sprite_Frame0;break;
        }res3 ++;
        if(res3===10){
            res3=0;
        }
    },
    closet4(){
        let button4 =this.node.getComponent(cc.Button);
        switch (res4) {
            case 0 : button4.normalSprite = this.sprite_Frame1;break;
            case 1 : button4.normalSprite = this.sprite_Frame2;break;
            case 2 : button4.normalSprite = this.sprite_Frame3;break;
            case 3 : button4.normalSprite = this.sprite_Frame4;break;
            case 4 : button4.normalSprite = this.sprite_Frame5;break;
            case 5 : button4.normalSprite = this.sprite_Frame6;break;
            case 6 : button4.normalSprite = this.sprite_Frame7;break;
            case 7 : button4.normalSprite = this.sprite_Frame8;break;
            case 8 : button4.normalSprite = this.sprite_Frame9;break;
            case 9 : button4.normalSprite = this.sprite_Frame0;break;
        }res4 ++;
        if(res4===10){
            res4=0;
        }
    },
    closetJudge(){
        res =''+res1+res2+res3+res4;
        cc.log(res);
        if(res==="0002"){
            let closet =this.node.parent.getComponent(cc.Sprite);
            cc.log(closet)
            cc.log(this.node.sprite_FrameOpen)
            closet.spriteFrame = this.sprite_FrameOpen;
            cc.log("success");
            window.lockOfClosetInCP1 = true;
        }
    },
     // onLoad () {
     //
     // },

    start () {

    },

    // update (dt) {},
});
