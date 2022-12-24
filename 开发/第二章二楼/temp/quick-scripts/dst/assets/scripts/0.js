
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a636VHHQhEU5GkurZMX19X', '0');
// scripts/0.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    window.latticeDecryptionInCP2 = 0;
    window.qwnum = [-1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1]; //this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event)

    var index = 0;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      qwnum[index] = -qwnum[index];
      if (index <= 11) qwnum[index + 4] = -qwnum[index + 4];
      if (index >= 4) qwnum[index - 4] = -qwnum[index - 4];
      if (index % 4 != 0) qwnum[index - 1] = -qwnum[index - 1];
      if (index % 4 != 3) qwnum[index + 1] = -qwnum[index + 1];
    });
  },
  update: function update(dt) {
    var index = 0;
    var self = this;

    if (qwnum[index] == 1) {
      cc.loader.loadRes("tall", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    if (qwnum[index] == -1) {
      cc.loader.loadRes("short", cc.SpriteFrame, function (err, sp) {
        self.node.getComponent(cc.Sprite).spriteFrame = sp;
      });
    }

    for (var i = 0; i <= 15; i++) {
      if (qwnum[i] != 1) break;

      if (i == 15 && latticeDecryptionInCP2 == 0) {
        latticeDecryptionInCP2 = 1;
        console.log("succeed");
      }
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzLzAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIndpbmRvdyIsImxhdHRpY2VEZWNyeXB0aW9uSW5DUDIiLCJxd251bSIsImluZGV4Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0RPV04iLCJldmVudCIsInVwZGF0ZSIsImR0Iiwic2VsZiIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJpIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBZlEsQ0FIUDtFQXFCTDtFQUVBO0VBRUFDLEtBekJLLG1CQXlCSTtJQUNMQyxNQUFNLENBQUNDLHNCQUFQLEdBQThCLENBQTlCO0lBQ0FELE1BQU0sQ0FBQ0UsS0FBUCxHQUFhLENBQUMsQ0FBQyxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLENBQUMsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBdUIsQ0FBQyxDQUF4QixFQUEwQixDQUExQixFQUE0QixDQUE1QixFQUE4QixDQUE5QixFQUFnQyxDQUFoQyxFQUFrQyxDQUFDLENBQW5DLENBQWIsQ0FGSyxDQUdMOztJQUNBLElBQUlDLEtBQUssR0FBQyxDQUFWO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFWLEVBQUUsQ0FBQ1csSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEwQyxVQUFTQyxLQUFULEVBQWU7TUFDckRQLEtBQUssQ0FBQ0MsS0FBRCxDQUFMLEdBQWEsQ0FBQ0QsS0FBSyxDQUFDQyxLQUFELENBQW5CO01BQ0EsSUFBR0EsS0FBSyxJQUFFLEVBQVYsRUFBYUQsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtNQUNiLElBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVlELEtBQUssQ0FBQ0MsS0FBSyxHQUFDLENBQVAsQ0FBTCxHQUFlLENBQUNELEtBQUssQ0FBQ0MsS0FBSyxHQUFDLENBQVAsQ0FBckI7TUFDWixJQUFHQSxLQUFLLEdBQUMsQ0FBTixJQUFTLENBQVosRUFBY0QsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFMLEdBQWUsQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLLEdBQUMsQ0FBUCxDQUFyQjtNQUNkLElBQUdBLEtBQUssR0FBQyxDQUFOLElBQVMsQ0FBWixFQUFjRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQUwsR0FBZSxDQUFDRCxLQUFLLENBQUNDLEtBQUssR0FBQyxDQUFQLENBQXJCO0lBQ2pCLENBTkQ7RUFTSCxDQXZDSTtFQXlDTE8sTUF6Q0ssa0JBeUNHQyxFQXpDSCxFQXlDTztJQUNSLElBQUlSLEtBQUssR0FBQyxDQUFWO0lBQ0EsSUFBSVMsSUFBSSxHQUFDLElBQVQ7O0lBRUEsSUFBR1YsS0FBSyxDQUFDQyxLQUFELENBQUwsSUFBYyxDQUFqQixFQUFtQjtNQUNmUixFQUFFLENBQUNrQixNQUFILENBQVVDLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUJuQixFQUFFLENBQUNvQixXQUE1QixFQUF3QyxVQUFTQyxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7UUFDcERMLElBQUksQ0FBQ1IsSUFBTCxDQUFVYyxZQUFWLENBQXVCdkIsRUFBRSxDQUFDd0IsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQThDSCxFQUE5QztNQUNELENBRkg7SUFHSDs7SUFDRCxJQUFHZixLQUFLLENBQUNDLEtBQUQsQ0FBTCxJQUFjLENBQUMsQ0FBbEIsRUFBb0I7TUFDaEJSLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEwQm5CLEVBQUUsQ0FBQ29CLFdBQTdCLEVBQXlDLFVBQVNDLEdBQVQsRUFBYUMsRUFBYixFQUFnQjtRQUNyREwsSUFBSSxDQUFDUixJQUFMLENBQVVjLFlBQVYsQ0FBdUJ2QixFQUFFLENBQUN3QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBOENILEVBQTlDO01BQ0gsQ0FGRDtJQUdIOztJQUNELEtBQUksSUFBSUksQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxJQUFFLEVBQWYsRUFBa0JBLENBQUMsRUFBbkIsRUFBc0I7TUFDbEIsSUFBR25CLEtBQUssQ0FBQ21CLENBQUQsQ0FBTCxJQUFVLENBQWIsRUFBZTs7TUFDZixJQUFHQSxDQUFDLElBQUUsRUFBSCxJQUFPcEIsc0JBQXNCLElBQUUsQ0FBbEMsRUFBb0M7UUFDaENBLHNCQUFzQixHQUFDLENBQXZCO1FBQ0FxQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO01BQ0g7SUFDSjtFQUNKO0FBOURJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB3aW5kb3cubGF0dGljZURlY3J5cHRpb25JbkNQMj0wO1xyXG4gICAgICAgIHdpbmRvdy5xd251bT1bLTEsMSwxLDEsMSwtMSwxLDEsMSwxLC0xLDEsMSwxLDEsLTFdO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudClcclxuICAgICAgICBsZXQgaW5kZXg9MDtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHF3bnVtW2luZGV4XT0tcXdudW1baW5kZXhdO1xyXG4gICAgICAgICAgICBpZihpbmRleDw9MTEpcXdudW1baW5kZXgrNF09LXF3bnVtW2luZGV4KzRdO1xyXG4gICAgICAgICAgICBpZihpbmRleD49NClxd251bVtpbmRleC00XT0tcXdudW1baW5kZXgtNF07XHJcbiAgICAgICAgICAgIGlmKGluZGV4JTQhPTApcXdudW1baW5kZXgtMV09LXF3bnVtW2luZGV4LTFdO1xyXG4gICAgICAgICAgICBpZihpbmRleCU0IT0zKXF3bnVtW2luZGV4KzFdPS1xd251bVtpbmRleCsxXTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgaW5kZXg9MDtcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHF3bnVtW2luZGV4XT09MSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGFsbFwiLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9c3A7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXdudW1baW5kZXhdPT0tMSl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hvcnRcIixjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3Ape1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXNwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPD0xNTtpKyspe1xyXG4gICAgICAgICAgICBpZihxd251bVtpXSE9MSlicmVhaztcclxuICAgICAgICAgICAgaWYoaT09MTUmJmxhdHRpY2VEZWNyeXB0aW9uSW5DUDI9PTApe1xyXG4gICAgICAgICAgICAgICAgbGF0dGljZURlY3J5cHRpb25JbkNQMj0xO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZWVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==