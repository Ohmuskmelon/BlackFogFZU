// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


cc.Class({
    extends: cc.Component,

    properties: {

    },

    initHero() {
        this._speed = 200;
        this._dir = cc.v2(1, 1);
        this._state = ' ';
        this._anim = this.node.getComponent(cc.Animation);
    },

    setState(state) {
        if (this._state == state) return;
        this._state = state;
    },

    setDir(state) {
        switch (state) {
            case 'hero_up': {
                this._dir.y = 1;
                break;
            }
            case 'hero_down': {
                this._dir.y = -1;
                break;
            }
            case 'hero_left': {
                this._dir.x = -1;
                break;
            }
            case 'hero_right': {
                this._dir.x = 1;
                break;
            }
        }
    },

    onLoad() {
        this.initHero();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.door = cc.find("Canvas/Player/door");
    },

    moveHero(state) {
        switch (state) {
            case 'hero_up': {
                this._lv.y = this._dir.y * this._speed;
                this._lv.x = 0;
                break;
            }
            case 'hero_down': {
                this._lv.y = this._dir.y * this._speed;
                this._lv.x = 0;
                break;
            }
            case 'hero_left': {
                this._lv.x = this._dir.x * this._speed;
                this._lv.y = 0;
                break;
            }
            case 'hero_right': {
                this._lv.x = this._dir.x * this._speed;
                this._lv.y = 0;
                break;
            }
        }
        this._anim.play(this._state);
        this.node.getComponent(cc.RigidBody).linearVelocity = this._lv;
    },

    stopHero() {
        this._lv.x = 0;
        this._lv.y = 0;
        this.node.getComponent(cc.RigidBody).linearVelocity = this._lv;
    },

    onKeyDown(event) {
        var KEY = cc.macro.KEY;
        this._lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        switch (event.keyCode) {
            case KEY.w:
            case KEY.up: {
                console.log('up');
                this.setState('hero_up');
                this.setDir(this._state);
                this.moveHero(this._state);
                break;
            }
            case KEY.s:
            case KEY.down: {
                console.log('down');
                this.setState('hero_down');
                this.setDir(this._state);
                this.moveHero(this._state);
                break;
            }
            case KEY.a:
            case KEY.left: {
                console.log('left');
                this.setState('hero_left');
                this.setDir(this._state);
                this.moveHero(this._state);
                break;
            }
            case KEY.d:
            case KEY.right: {
                console.log('right');
                this.setState('hero_right');
                this.setDir(this._state);
                this.moveHero(this._state);
                break;
            }
            // case KEY.space: {
            //     console.log('switch');
            //     cc.director.loadScene("2");
            //     break;
            // }
        }
    },

    onKeyUp(event) {
        var KEY = cc.macro.KEY;
        this._lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        switch (event.keyCode) {
            case KEY.w:
            case KEY.up: {
                console.log('up');
                this.setState('hero_up');
                this.setDir(this._state);
                this.stopHero(this._state);
                break;
            }
            case KEY.s:
            case KEY.down: {
                console.log('down');
                this.setState('hero_down');
                this.setDir(this._state);
                this.stopHero(this._state);
                break;
            }
            case KEY.a:
            case KEY.left: {
                console.log('left');
                this.setState('hero_left');
                this.setDir(this._state);
                this.stopHero(this._state);
                break;
            }
            case KEY.d:
            case KEY.right: {
                console.log('right');
                this.setState('hero_right');
                this.setDir(this._state);
                this.stopHero(this._state);
                break;
            }
        }
    },

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    update(dt) {

    },


});
