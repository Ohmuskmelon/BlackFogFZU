"use strict";
cc._RF.push(module, 'ad69bQ6yfxObLkXrNmIShtL', 'game');
// script/game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    blockPrefab: cc.Prefab
  },
  onLoad: function onLoad() {
    var _this = this;

    window.game = this; //this.picNodeArr = Array.from(Array(4), () => new Array(4));

    cc.resources.load('d', function (err, texture) {
      _this.picTexture = texture;
      _this.picNodeArr = Array.from(Array(4), function () {
        return new Array(4);
      }); //cc.log(texture);
      //this.blockNode.getComponent("block").init(texture,cc.v2(1,0));

      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          var block = cc.instantiate(_this.blockPrefab);

          _this.node.addChild(block);

          block.setPosition(cc.v2(j * 180, -i * 180));
          block.getComponent('block').init(texture, cc.v2(j, i)); //console.log('block',block);

          _this.picNodeArr[i][j] = block; // cc.log(this.picNodeArr[i][j]);
        }
      }

      _this.randPic();
    });
  },
  randPic: function randPic() {
    //����˳��
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        var block = this.picNodeArr[i][j];
        var exIndex = {
          i: parseInt(Math.random() * 4),
          j: parseInt(Math.random() * 4)
        };
        var exBlock = this.picNodeArr[exIndex.i][exIndex.j];
        var pos = block.position;
        var exPos = exBlock.position;
        block.setPosition(exPos);
        exBlock.setPosition(pos);
        this.picNodeArr[i][j] = exBlock;
        this.picNodeArr[exIndex.i][exIndex.j] = block;
      }
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();