"use strict";
cc._RF.push(module, '6e7e0a0TqpJhppp0ePCLXX4', 'player_ctrl_pc - 001');
// scripts/controller/player_ctrl_pc - 001.js

"use strict";

var State = {
  move: 1,
  attack: 2
};
cc.Class({
  "extends": cc.Component,
  properties: {
    moveMaxspeed: 0,
    //最大移动速度
    playerSpeed: 0,
    jumpSpeed: 0,
    jumpHeight: 0,
    playerNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  initHero: function initHero() {
    this.playerNode = cc.find("Canvas/bg/player");
    this.rigid = this.playerNode.getComponent(cc.RigidBody);
    this.heroAni = this.playerNode.getComponent(cc.Animation); // 加速度方向开关

    this._dir = ' '; //主角默认动画

    this.anima = 'idle'; //获取npc的位置

    this.npcs = cc.find("Canvas/background/npcs"); //是否可以进行一个交谈

    this.canTalk = false;
    console.log("enterGame:" + window.player.enterGame);
    this.currentScene = cc.director.getScene()._name;

    if (window.player.enterGame) {
      window.player.enterGame = false;
      this.playerNode.setPosition(window.player['pos_X'], window.player['pos_Y']);
      console.log("playerPos" + this.playerNode.position);
    } // 场景中，离开场景
    else if (window.playerPosition[this.currentScene] != null) {
      var pos = window.playerPosition[this.currentScene];
      this.playerNode.setPosition(pos.x, pos.y);
      console.log("playerPos" + this.playerNode.position);
    }

    console.log("x:" + this.playerNode.x);
    console.log("y:" + this.playerNode.y);
  },
  onLoad: function onLoad() {
    console.log(window.player.enterGame);
    this.initHero(); // 监听键盘操作

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this); //监听鼠标事件 

    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
  },
  onDestroy: function onDestroy() {
    //对键盘监听事件解绑
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {
    console.log("this.node pos" + this.playerNode.position);
  },
  // 碰撞检测
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    if (selfCollider.tag == 0) {
      console.log(selfCollider.tag);
      this.canJump = true;
    }
  },
  // 鼠标事件监听
  onMouseDown: function onMouseDown(event) {},
  //键盘事件监听
  onKeyDown: function onKeyDown(event) {
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
  onKeyUp: function onKeyUp(event) {
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
  heroMove: function heroMove() {
    var lv = this.rigid.linearVelocity;
    var scaleX = Math.abs(this.node.scaleX);
    var anima = this.anima;

    switch (this._dir) {
      case 'left':
        {
          lv.x = -this.playerSpeed; // this.node.scaleX = -scaleX;

          anima = 'runleft';
          break;
        }

      case 'right':
        {
          lv.x = this.playerSpeed;
          this.node.scaleX = scaleX;
          anima = 'runright';
          break;
        }

      default:
        {
          anima = 'idle';
          lv.x = 0;
        }
    }

    this.playerNode.getComponent(cc.RigidBody).linearVelocity = lv;
    this.setAni(anima);
  },
  setAni: function setAni(anima) {
    if (this.anima == anima) {
      return;
    } else {
      this.anima = anima;
      this.heroAni.play(anima);
    }
  },
  update: function update(dt) {
    if (window.BagBackground && window.BagBackground.active == true || Global.gameBg && Global.gameBg.active == true) {
      return;
    }

    this.heroMove();
  }
});

cc._RF.pop();