
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/block');
require('./assets/script/game');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxibG9jay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsInRvdWNoU3RhcnQiLCJ0b3VjaE1vdmUiLCJ0b3VjaEVuZCIsImUiLCJvcGFjaXR5Iiwic3RhcnRQb3MiLCJwb3NpdGlvbiIsInpJbmRleCIsImRlbHRhIiwiZ2V0RGVsdGEiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaW5kZXgiLCJnZXRQb3MySW5kZXgiLCJsb2ciLCJ0bXBOb2RlIiwid2luZG93IiwiZ2FtZSIsInBpY05vZGVBcnIiLCJwYXJzZUludCIsImkiLCJqIiwic2V0UG9zaXRpb24iLCJzdEluZGV4IiwicG9zIiwiTWF0aCIsImFicyIsImluaXQiLCJwaWNUZXh0dXJlIiwic3ByaXRlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiZnJhbWUiLCJTcHJpdGVGcmFtZSIsInJlY3QiLCJzcHJpdGVGcmFtZSIsIm9uRGVzdHJveSIsIm9mZiIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsRUFIUDtFQU9MO0VBRUNDLE1BVEksb0JBU007SUFDUCxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxZQUFiLEVBQTBCLEtBQUtDLFVBQS9CLEVBQTBDLElBQTFDO0lBQ0EsS0FBS0YsSUFBTCxDQUFVQyxFQUFWLENBQWEsV0FBYixFQUF5QixLQUFLRSxTQUE5QixFQUF3QyxJQUF4QztJQUNDLEtBQUtILElBQUwsQ0FBVUMsRUFBVixDQUFhLFVBQWIsRUFBd0IsS0FBS0csUUFBN0IsRUFBc0MsSUFBdEM7RUFFSCxDQWRHO0VBZUxGLFVBZkssc0JBZU1HLENBZk4sRUFlUTtJQUNULEtB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IGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0Jyx0aGlzLnRvdWNoU3RhcnQsdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2htb3ZlJyx0aGlzLnRvdWNoTW92ZSx0aGlzKTtcbiAgICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hlbmQnLHRoaXMudG91Y2hFbmQsdGhpcyk7XG5cbiAgICAgfSxcbiAgICB0b3VjaFN0YXJ0KGUpe1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9MTI4O1xuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0xO1xuICAgIH0sXG4gICAgdG91Y2hNb3ZlKGUpe1xuICAgICAgICBsZXQgZGVsdGEgPWUuZ2V0RGVsdGEoKTtcbiAgICAgICAgdGhpcy5ub2RlLnggKz1kZWx0YS54O1xuICAgICAgICB0aGlzLm5vZGUueSArPSBkZWx0YS55O1xuICAgIH0sXG4gICAgdG91Y2hFbmQoZSl7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0yNTU7XG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPTA7XG4gICAgICAgIGxldCAgd2lkdGggID10aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICBsZXQgaW5kZXggPXRoaXMuZ2V0UG9zMkluZGV4KHRoaXMubm9kZS5wb3NpdGlvbilcbiAgICAgICAgY2MubG9nKGluZGV4KVxuICAgICAgICAvL2NjLmxvZygxMjM0NTYpXG4gICAgICAgIC8vY2MubG9nKHdpbmRvdy5nYW1lKTtcbiAgICAgICAgLy9jYy5sb2cod2luZG93LmdhbWUucGljTm9kZUFyclsxXVsxXSk7XG4gICAgICAgIC8vY2MubG9nKFwiaW5kZXjnmoTlgLxcIik7XG4gICAgICAgIC8vY2MubG9nKCk7XG4gICAgICAgIGxldCB0bXBOb2RlPXdpbmRvdy5nYW1lLnBpY05vZGVBcnJbcGFyc2VJbnQoaW5kZXguaSldW3BhcnNlSW50KGluZGV4LmopXTtcblxuICAgICAgICBpZih0bXBOb2RlKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihpbmRleC5qKndpZHRoLC1pbmRleC5pKmhlaWdodCk7XG4gICAgICAgICAgICBjYy5sb2codGhpcy5zdGFydFBvcyk7XG4gICAgICAgICAgICB0bXBOb2RlLnNldFBvc2l0aW9uKHRoaXMuc3RhcnRQb3MpO1xuICAgICAgICAgICAgbGV0IHN0SW5kZXggPXRoaXMuZ2V0UG9zMkluZGV4KHRoaXMuc3RhcnRQb3MpO1xuICAgICAgICAgICAgY2MubG9nKHN0SW5kZXguaStcIiBcIitzdEluZGV4LmopO1xuICAgICAgICAgICAgd2luZG93LmdhbWUucGljTm9kZUFycltzdEluZGV4LmldW3N0SW5kZXgual0gPXRtcE5vZGU7XG4gICAgICAgICAgICB3aW5kb3cuZ2FtZS5waWNOb2RlQXJyW2luZGV4LmldW2luZGV4LmpdPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBjYy5sb2coaW5kZXguaStcIiBcIitpbmRleC5qKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuc3RhcnRQb3MpO1xuICAgICAgICB9XG5cbiAgICB9LFxuICAgIGdldFBvczJJbmRleChwb3Mpe1xuICAgICAgICBsZXQgIHdpZHRoICA9dGhpcy5ub2RlLndpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcbiAgICAgICAgY2MubG9nKHdpZHRoKTtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmFicyhwYXJzZUludChwb3MueSAvIGhlaWdodCkpO1xuICAgICAgICBsZXQgaiA9TWF0aC5hYnMocGFyc2VJbnQocG9zLnggLyB3aWR0aCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaSxqXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXQocGljVGV4dHVyZSxwb3Mpe1xuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBsZXQgd2lkdGggPXRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQ7XG4gICAgICAgIGxldCBmcmFtZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUocGljVGV4dHVyZSxjYy5yZWN0KHBhcnNlSW50KHBvcy54KndpZHRoKSxwYXJzZUludChwb3MueSpoZWlnaHQpLHdpZHRoLGhlaWdodCkpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPWZyYW1lO1xuICAgIH0sXG4gICAgb25EZXN0cm95KCl7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ3RvdWNoc3RhcnQnLHRoaXMudG91Y2hTdGFydCx0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZigndG91Y2htb3ZlJyx0aGlzLnRvdWNoTW92ZSx0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZigndG91Y2hlbmQnLHRoaXMudG91Y2hFbmQsdGhpcyk7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmxvY2tQcmVmYWIiLCJQcmVmYWIiLCJvbkxvYWQiLCJ3aW5kb3ciLCJnYW1lIiwicmVzb3VyY2VzIiwibG9hZCIsImVyciIsInRleHR1cmUiLCJwaWNUZXh0dXJlIiwicGljTm9kZUFyciIsIkFycmF5IiwiZnJvbSIsImkiLCJqIiwiYmxvY2siLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJpbml0IiwicmFuZFBpYyIsImV4SW5kZXgiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJleEJsb2NrIiwicG9zIiwicG9zaXRpb24iLCJleFBvcyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFSixFQUFFLENBQUNLO0VBRFIsQ0FIUDtFQVFMQyxNQVJLLG9CQVFLO0lBQUE7O0lBQ05DLE1BQU0sQ0FBQ0MsSUFBUCxHQUFhLElBQWIsQ0FETSxDQUVOOztJQUVBUixFQUFFLENBQUNTLFNBQUgsQ0FBYUMsSUFBYixDQUFrQixHQUFsQixFQUFzQixVQUFDQyxHQUFELEVBQUtDLE9BQUwsRUFBZTtNQUNqQyxLQUFJLENBQUNDLFVBQUwsR0FBbUJELE9BQW5CO01BQ0EsS0FBSSxDQUFDRSxVQUFMLEdBQWtCQyxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDLENBQUQsQ0FBaEIsRUFBcUI7UUFBQSxPQUFNLElBQUlBLEtBQUosQ0FBVSxDQUFWLENBQU47TUFBQSxDQUFyQixDQUFsQixDQUZpQyxDQUdqQztNQUNBOztNQUNBLEtBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtRQUN4QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7VUFDeEIsSUFBSUMsS0FBSyxHQUFHbkIsRUFBRSxDQUFDb0IsV0FBSCxDQUFlLEtBQUksQ0FBQ2hCLFdBQXBCLENBQVo7O1VBQ0EsS0FBSSxDQUFDaUIsSUFBTCxDQUFVQyxRQUFWLENBQW1CSCxLQUFuQjs7VUFDQUEsS0FBSyxDQUFDSSxXQUFOLENBQWtCdkIsRUFBRSxDQUFDd0IsRUFBSCxDQUFNTixDQUFDLEdBQUMsR0FBUixFQUFZLENBQUNELENBQUQsR0FBRyxHQUFmLENBQWxCO1VBQ0NFLEtBQUssQ0FBQ00sWUFBTixDQUFtQixPQUFuQixFQUE0QkMsSUFBNUIsQ0FBaUNkLE9BQWpDLEVBQXlDWixFQUFFLENBQUN3QixFQUFILENBQU1OLENBQU4sRUFBUUQsQ0FBUixDQUF6QyxFQUp1QixDQUt2Qjs7VUFDQSxLQUFJLENBQUNILFVBQUwsQ0FBZ0JHLENBQWhCLEVBQW1CQyxDQUFuQixJQUF1QkMsS0FBdkIsQ0FOdUIsQ0FPeEI7UUFFSDtNQUNKOztNQUNELEtBQUksQ0FBQ1EsT0FBTDtJQUNILENBbEJEO0VBbUJILENBL0JJO0VBZ0NMQSxPQWhDSyxxQkFnQ0k7SUFBQztJQUNOLEtBQUssSUFBSVYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtNQUN4QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7UUFDeEIsSUFBSUMsS0FBSyxHQUFFLEtBQUtMLFVBQUwsQ0FBZ0JHLENBQWhCLEVBQW1CQyxDQUFuQixDQUFYO1FBQ0EsSUFBSVUsT0FBTyxHQUFFO1VBQ1RYLENBQUMsRUFBRVksUUFBUSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsS0FBYyxDQUFmLENBREY7VUFFVGIsQ0FBQyxFQUFFVyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFjLENBQWY7UUFGRixDQUFiO1FBSUEsSUFBSUMsT0FBTyxHQUFHLEtBQUtsQixVQUFMLENBQWdCYyxPQUFPLENBQUNYLENBQXhCLEVBQTJCVyxPQUFPLENBQUNWLENBQW5DLENBQWQ7UUFDQSxJQUFJZSxHQUFHLEdBQUdkLEtBQUssQ0FBQ2UsUUFBaEI7UUFDQSxJQUFJQyxLQUFLLEdBQUdILE9BQU8sQ0FBQ0UsUUFBcEI7UUFDQWYsS0FBSyxDQUFDSSxXQUFOLENBQWtCWSxLQUFsQjtRQUNBSCxPQUFPLENBQUNULFdBQVIsQ0FBb0JVLEdBQXBCO1FBQ0EsS0FBS25CLFVBQUwsQ0FBZ0JHLENBQWhCLEVBQW1CQyxDQUFuQixJQUF1QmMsT0FBdkI7UUFDQSxLQUFLbEIsVUFBTCxDQUFnQmMsT0FBTyxDQUFDWCxDQUF4QixFQUEyQlcsT0FBTyxDQUFDVixDQUFuQyxJQUFzQ0MsS0FBdEM7TUFDSDtJQUNKO0VBQ0osQ0FqREk7RUFrRExpQixLQWxESyxtQkFrREksQ0FFUixDQXBESSxDQXNETDs7QUF0REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYmxvY2tQcmVmYWIgOmNjLlByZWZhYixcblxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB3aW5kb3cuZ2FtZSA9dGhpcztcbiAgICAgICAgLy90aGlzLnBpY05vZGVBcnIgPSBBcnJheS5mcm9tKEFycmF5KDQpLCAoKSA9PiBuZXcgQXJyYXkoNCkpO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKCdkJywoZXJyLHRleHR1cmUpPT57XG4gICAgICAgICAgICB0aGlzLnBpY1RleHR1cmUgID0gdGV4dHVyZTtcbiAgICAgICAgICAgIHRoaXMucGljTm9kZUFyciA9IEFycmF5LmZyb20oQXJyYXkoNCksICgpID0+IG5ldyBBcnJheSg0KSk7XG4gICAgICAgICAgICAvL2NjLmxvZyh0ZXh0dXJlKTtcbiAgICAgICAgICAgIC8vdGhpcy5ibG9ja05vZGUuZ2V0Q29tcG9uZW50KFwiYmxvY2tcIikuaW5pdCh0ZXh0dXJlLGNjLnYyKDEsMCkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oY2MudjIoaioxODAsLWkqMTgwKSk7XG4gICAgICAgICAgICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoJ2Jsb2NrJykuaW5pdCh0ZXh0dXJlLGNjLnYyKGosaSkpO1xuICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYmxvY2snLGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMucGljTm9kZUFycltpXVtqXSA9YmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLnBpY05vZGVBcnJbaV1bal0pO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yYW5kUGljKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmFuZFBpYygpey8v77+977+977+977+9y7Pvv73vv71cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrID10aGlzLnBpY05vZGVBcnJbaV1bal07XG4gICAgICAgICAgICAgICAgbGV0IGV4SW5kZXggPXtcbiAgICAgICAgICAgICAgICAgICAgaSA6cGFyc2VJbnQoTWF0aC5yYW5kb20oKSo0KSxcbiAgICAgICAgICAgICAgICAgICAgaiA6cGFyc2VJbnQoTWF0aC5yYW5kb20oKSo0KSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBleEJsb2NrID0gdGhpcy5waWNOb2RlQXJyW2V4SW5kZXguaV1bZXhJbmRleC5qXTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zICA9YmxvY2sucG9zaXRpb247XG4gICAgICAgICAgICAgICAgbGV0IGV4UG9zID0gZXhCbG9jay5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbihleFBvcyk7XG4gICAgICAgICAgICAgICAgZXhCbG9jay5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgIHRoaXMucGljTm9kZUFycltpXVtqXSA9ZXhCbG9jaztcbiAgICAgICAgICAgICAgICB0aGlzLnBpY05vZGVBcnJbZXhJbmRleC5pXVtleEluZGV4LmpdPWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
