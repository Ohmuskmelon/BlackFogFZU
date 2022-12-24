
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