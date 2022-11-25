// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

const input = {};

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    _speed : number = 0;
    jump_speed :number = 0;

    anima:any;

    hero_ani:cc.Animation;

    isUp:boolean

    isDown:boolean

    isRight:boolean
    
    isLeft:boolean
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._speed = 200;
        this.jump_speed = 1;
        this.isDown  =false;
        this.isLeft = false;
        this.isRight = false;
        this.isUp =false;
        this.anima = 'idle';
        this.hero_ani = this.node.getComponent(cc.Animation);
        // this.anima = this.node.getComponent(cc.Animation);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    }
    onDestroy(){
        //对键盘监听事件解绑
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    }
    start () {

    }

    update (dt) {
        this.hero_move();
    }

    onKeyDown (event) {
        // set a flag when key pressed
        input[event.keyCode] = 1;
    }

    onKeyUp (event) {
        // unset a flag when key released
        input[event.keyCode] = 0;
    }
    // onKeyUp(event:any){
    //     switch(event.keyCode){
    //         case cc.macro.KEY.up:
    //         case cc.macro.KEY.w:
    //         case cc.macro.KEY.space:
    //             this.isUp = false;
    //             console.log("release ↑");
    //             break;
    //         case cc.macro.KEY.down:
    //         case cc.macro.KEY.s:
    //             this.isDown = false;
    //             console.log("release ↓");
    //             break;
    //         case cc.macro.KEY.left:
    //         case cc.macro.KEY.a:
    //             this.isLeft = false;
    //             console.log("release ←");
    //             break;
    //         case cc.macro.KEY.right:
    //         case cc.macro.KEY.d:
    //             this.isRight = false;
    //             console.log("release →");
    //             break;
    //     }
    // }

    // onKeyDown(event:any){
    //     switch(event.keyCode){
    //         case cc.macro.KEY.up:
    //         case cc.macro.KEY.w:
    //         case cc.macro.KEY.space:
    //             this.isUp = true;
    //             console.log("press ↑");
    //             break;
    //         case cc.macro.KEY.down:
    //         case cc.macro.KEY.s:
    //             this.isDown = true;
    //             console.log("press ↓");
    //             break;
    //         case cc.macro.KEY.left:
    //         case cc.macro.KEY.a:
    //             this.isLeft = true;
    //             console.log("press ←");
    //             break;
    //         case cc.macro.KEY.right:
    //         case cc.macro.KEY.d:
    //             this.isRight = true;
    //             console.log("press →");
    //             break;
    //     }
    // }
    // hero_move(){
        
    //     let anima = this.anima;                          //动画

    //     let scaleX = Math.abs(this.node.scaleX);                //人物转向

    //     let lv = this.node.getComponent(cc.RigidBody).linearVelocity;                // 获取刚体的线性速度

    //     if(this.isRight){
    //         //如果向左，转向
    //         this.node.scaleX = scaleX;
    //         lv.x = 1;
    //         this.anima_name= 'run';
    //     }
    //     else if(this.isLeft){
    //          //如果朝向右，转向
    //         this.node.scaleX = -scaleX;
    //         lv.x = -1;
    //         this.anima_name = 'run';
    //     }
    //     else{
    //         // lv.x = 0;
    //         this.anima_name = 'idle';
    //     }

    //     if(this.isUp){
    //         console.log("jump");
    //         lv.y = this.jump_speed;
    //         this.isUp = false;
    //     }

    //     else if(this.isDown){
    //         lv.y = -this.jump_speed;
    //     }
    //     if(anima){
    //         this.setAni(this.anima_name);
    //     }
    //     lv.x = lv.x*this._speed;
    //     lv.y = lv.y*this._speed;
    //     this.node.getComponent(cc.RigidBody).linearVelocity = lv;
    //     console.log("speed:"+ lv.x + " "+ lv.y);
    // }

    setAni(anima){
        if(this.anima == anima){
            console.log(this.anima);
            return;
        }
        else{
            this.anima = anima;
            this.hero_ani.play(anima);
            console.log(this.anima);
        }
    }

    hero_move(){
        let lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        let scaleX = Math.abs(this.node.scaleX);
        let anima = this.anima;
        if(input[cc.macro.KEY.a] || input[cc.macro.KEY.left] ){
            console.log("press a/←");
            lv.x = -1;
            this.node.scaleX = -scaleX;
            anima = 'run';
        }
        else if(input[cc.macro.KEY.d] || input[cc.macro.KEY.right] ){
            console.log("press d/→");
            lv.x = 1;
            this.node.scaleX = scaleX;
            anima = "run";
        }
        else{
            lv.x = 0;
            anima = 'idle';
            // console.log(this.lv.x+"\t"+this.lv.y);
        }
        // if(input[cc.macro.KEY.w]  || input[cc.macro.KEY.up] ){
        //     this.lv.y = 1;
        //     console.log("press w/↑");
        // }
        // else if(input[cc.macro.KEY.s] || input[cc.macro.KEY.down] ){

        //     this.lv.y = -1;
        //     console.log("press s/↓");
        // }
        // this.lv.x = this.lv.x*this._speed;
        // this.lv.y = this.lv.y*this.jump_speed;
        if(lv.x){
            lv.x = lv.x*this._speed;
        }
        else{
            lv.x = 0;
        }


        console.log(lv.x + " "+ lv.y);
        this.node.getComponent(cc.RigidBody).linearVelocity = lv;

        if(anima){
            this.setAni(anima);
        }
    }
}
