"use strict";
cc._RF.push(module, '42c1bKzAm1NcbupIQ+ZDUPX', 'block');
// script/block.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on('touchstart', this.touchStart, this);
    this.node.on('touchmove', this.touchMove, this);
    this.node.on('touchend', this.touchEnd, this);
  },
  touchStart: function touchStart(e) {
    this.node.opacity = 128;
    this.startPos = this.node.position;
    this.node.zIndex = 1;
  },
  touchMove: function touchMove(e) {
    var delta = e.getDelta();
    this.node.x += delta.x;
    this.node.y += delta.y;
  },
  touchEnd: function touchEnd(e) {
    this.node.opacity = 255;
    this.node.zIndex = 0;
    var width = this.node.width;
    var height = this.node.height;
    var index = this.getPos2Index(this.node.position);
    cc.log(index); //cc.log(123456)
    //cc.log(window.game);
    //cc.log(window.game.picNodeArr[1][1]);
    //cc.log("index的值");
    //cc.log();

    var tmpNode = window.game.picNodeArr[parseInt(index.i)][parseInt(index.j)];

    if (tmpNode) {
      this.node.setPosition(index.j * width, -index.i * height);
      cc.log(this.startPos);
      tmpNode.setPosition(this.startPos);
      var stIndex = this.getPos2Index(this.startPos);
      cc.log(stIndex.i + " " + stIndex.j);
      window.game.picNodeArr[stIndex.i][stIndex.j] = tmpNode;
      window.game.picNodeArr[index.i][index.j] = this.node;
      cc.log(index.i + " " + index.j);
    } else {
      this.node.setPosition(this.startPos);
    }
  },
  getPos2Index: function getPos2Index(pos) {
    var width = this.node.width;
    var height = this.node.height;
    cc.log(width);
    var i = Math.abs(parseInt(pos.y / height));
    var j = Math.abs(parseInt(pos.x / width));
    return {
      i: i,
      j: j
    };
  },
  init: function init(picTexture, pos) {
    var sprite = this.node.getComponent(cc.Sprite);
    var width = this.node.width;
    var height = this.node.height;
    var frame = new cc.SpriteFrame(picTexture, cc.rect(parseInt(pos.x * width), parseInt(pos.y * height), width, height));
    sprite.spriteFrame = frame;
  },
  onDestroy: function onDestroy() {
    this.node.off('touchstart', this.touchStart, this);
    this.node.off('touchmove', this.touchMove, this);
    this.node.off('touchend', this.touchEnd, this);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();