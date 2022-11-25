const State = {
    move: 1,
    attack: 2,
};

cc.Class({
    extends: cc.Component,

    properties: {
        moveMaxspeed: 0,    //最大移动速度
        playerSpeed: 0,
        jumpSpeed: 0,
        jumpHeight: 0,
    },

    // LIFE-CYCLE CALLBACKS:
    initHero() {
        this.playerNode = cc.find("Canvas/bg/player/body");


        this.rigid = this.playerNode.getComponent(cc.RigidBody);
        this.heroAni = this.playerNode.getComponent(cc.Animation);
        // console.log("exit: "+ this.playerNode.name);


        // 加速度方向开关
        this._dir = ' ';

        //主角默认动画
        this.anima = 'idle';

        //获取npc的位置
        // this.parent = this.node.parent
        this.npcs = cc.find("Canvas/background/npcs");
        // console.log(this.npcs.name);
        // console.log(this.npcs.type);

        //是否可以进行一个交谈
        this.canTalk = false;
        // for(var collider of colliders){
        //     // hero的每一个collider都 设置摩擦力为0
        //    collider.friction = 0;
        // }
    },

    onLoad: function () {

        this.initHero();

        // 监听键盘操作
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        //监听鼠标事件 
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);

    },

    onDestroy() {
        //对键盘监听事件解绑
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },


    start() {

    },

    // 碰撞检测
    onBeginContact: function (contact, selfCollider, otherCollider) {
        if (selfCollider.tag == 0) {
            console.log(selfCollider.tag);
            this.canJump = true;
        }
    },


    // 鼠标事件监听
    onMouseDown: function (event) {

    },



    //键盘事件监听
    onKeyDown(event) {
        // set a flag when key pressed
        // console.log("down");
        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.left:
                console.log("left");
                this._dir = 'left';
                break;
            case cc.macro.KEY.d:
            case cc.macro.KEY.right:
                this._dir = 'right';
                break;
            case cc.macro.KEY.w:
            case cc.macro.KEY.up:
                this._dir = 'up';
                break;
            case cc.macro.KEY.s:
            case cc.macro.KEY.down:
                this._dir = 'down';
                break;
        }
    },

    onKeyUp(event) {
        // unset a flag when key released
        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.left:
                this._dir = ' ';
                break;
            case cc.macro.KEY.d:
            case cc.macro.KEY.right:
                this._dir = ' ';
                break;
            case cc.macro.KEY.w:
            case cc.macro.KEY.up:
                this._dir = ' ';
                break;
            case cc.macro.KEY.s:
            case cc.macro.KEY.down:
                this._dir = ' ';
                break;
        }
    },


    //获取npc 和计算npc距离

    //人物移动
    heroMove() {
        let lv = this.rigid.linearVelocity;
        let scaleX = Math.abs(this.node.scaleX);
        let anima = this.anima;
        switch (this._dir) {
            case 'left': {
                lv.x = -this.playerSpeed;
                this.node.scaleX = -scaleX;
                anima = 'run';
                break;
            }
            case 'right': {
                lv.x = this.playerSpeed;
                this.node.scaleX = scaleX;
                anima = 'run';
                break;
            }
            default: {
                anima = 'idle';
                lv.x = 0;
            }
        }
        // console.log(lv.x + " "+ lv.y);
        this.playerNode.getComponent(cc.RigidBody).linearVelocity = lv;
        // console.log(this.playerNode.getComponent(cc.RigidBody).linearVelocity.x);
        // console.log("v_y"+this.node.getComponent(cc.RigidBody).linearVelocity.y);
        this.setAni(anima);
    },

    setAni(anima) {
        if (this.anima == anima) {
            return;
        }
        else {
            this.anima = anima;
            this.heroAni.play(anima);
        }
    },



    update: function (dt) {

        this.heroMove();

    },

});
