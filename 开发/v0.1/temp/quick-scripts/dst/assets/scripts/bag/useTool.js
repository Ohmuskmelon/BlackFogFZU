
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bag/useTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2b6cvDWZNN26Y1dl2eZzuq', 'useTool');
// scripts/bag/useTool.js

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
    tip: cc.Node,
    mynode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.textLabel = this.tip.getChildByName("textLabel").getComponent(cc.Label);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    cc.game.addPersistRootNode(this.mynode);
  },
  start: function start() {// cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(event) {
    // 背包按钮
    this.contactItem = window.Global.itemName;
    this.scene = window.Global.currentScene;

    if (event.keyCode == cc.macro.KEY.r) {
      console.log("InUse:" + window.InUse);

      if (window.Items[this.scene][this.contactItem].used == false) {
        if (window.InUse == window.Items[this.scene][this.contactItem].tool) {
          console.log("correct tool");
          this.textLabel.string = "工具使用成功！l";
          window.Items[this.scene][this.contactItem].used = true;
        } else if (window.InUse == '') {
          this.textLabel.string = "请先手持工具（在背包界面点击工具即可手持）";
          console.log("please take the tool");
        } else {
          this.textLabel.string = "错误的工具！";
          console.log("wrong tool");
        }
      } else {
        this.textLabel.string = "这件工具好像已经被使用过了哦";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhZy91c2VUb29sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwIiwiTm9kZSIsIm15bm9kZSIsIm9uTG9hZCIsImZpbmQiLCJ0ZXh0TGFiZWwiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsInN0YXJ0IiwiZXZlbnQiLCJjb250YWN0SXRlbSIsIndpbmRvdyIsIkdsb2JhbCIsIml0ZW1OYW1lIiwic2NlbmUiLCJjdXJyZW50U2NlbmUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJyIiwiY29uc29sZSIsImxvZyIsIkluVXNlIiwiSXRlbXMiLCJ1c2VkIiwidG9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEdBQUcsRUFBQ0osRUFBRSxDQUFDSyxJQURDO0lBRVJDLE1BQU0sRUFBQ04sRUFBRSxDQUFDSztFQUZGLENBSFA7RUFRTDtFQUVBRSxNQVZLLG9CQVVLO0lBQ04sS0FBS0gsR0FBTCxHQUFZSixFQUFFLENBQUNRLElBQUgsQ0FBUSx3QkFBUixDQUFaO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixLQUFLTCxHQUFMLENBQVNNLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLFlBQXJDLENBQWtEWCxFQUFFLENBQUNZLEtBQXJELENBQWpCO0lBQ0FaLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxFQUFmLENBQWtCZCxFQUFFLENBQUNlLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBM0MsRUFBcUQsS0FBS0MsU0FBMUQsRUFBcUUsSUFBckU7SUFDQWxCLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxFQUFmLENBQWtCZCxFQUFFLENBQUNlLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkcsTUFBM0MsRUFBbUQsS0FBS0MsT0FBeEQsRUFBaUUsSUFBakU7SUFDQXBCLEVBQUUsQ0FBQ3FCLElBQUgsQ0FBUUMsa0JBQVIsQ0FBMkIsS0FBS2hCLE1BQWhDO0VBQ0gsQ0FoQkk7RUFtQkxpQixLQW5CSyxtQkFtQkksQ0FDTDtFQUNILENBckJJO0VBdUJMTCxTQXZCSyxxQkF1QktNLEtBdkJMLEVBdUJXO0lBQ1o7SUFDQSxLQUFLQyxXQUFMLEdBQW1CQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsUUFBakM7SUFDQSxLQUFLQyxLQUFMLEdBQWFILE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRyxZQUEzQjs7SUFDQSxJQUFHTixLQUFLLENBQUNPLE9BQU4sSUFBaUIvQixFQUFFLENBQUNnQyxLQUFILENBQVNDLEdBQVQsQ0FBYUMsQ0FBakMsRUFBbUM7TUFDL0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVNWLE1BQU0sQ0FBQ1csS0FBNUI7O01BQ0EsSUFBR1gsTUFBTSxDQUFDWSxLQUFQLENBQWEsS0FBS1QsS0FBbEIsRUFBeUIsS0FBS0osV0FBOUIsRUFBMkNjLElBQTNDLElBQW1ELEtBQXRELEVBQTREO1FBQ3hELElBQUdiLE1BQU0sQ0FBQ1csS0FBUCxJQUFpQlgsTUFBTSxDQUFDWSxLQUFQLENBQWEsS0FBS1QsS0FBbEIsRUFBeUIsS0FBS0osV0FBOUIsRUFBMkNlLElBQS9ELEVBQXFFO1VBQ2pFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO1VBQ0EsS0FBSzNCLFNBQUwsQ0FBZWdDLE1BQWYsR0FBd0IsVUFBeEI7VUFDQWYsTUFBTSxDQUFDWSxLQUFQLENBQWEsS0FBS1QsS0FBbEIsRUFBeUIsS0FBS0osV0FBOUIsRUFBMkNjLElBQTNDLEdBQWtELElBQWxEO1FBQ0gsQ0FKRCxNQUtLLElBQUdiLE1BQU0sQ0FBQ1csS0FBUCxJQUFnQixFQUFuQixFQUFzQjtVQUN2QixLQUFLNUIsU0FBTCxDQUFlZ0MsTUFBZixHQUF3Qix1QkFBeEI7VUFDQU4sT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7UUFDSCxDQUhJLE1BSUQ7VUFDQSxLQUFLM0IsU0FBTCxDQUFlZ0MsTUFBZixHQUF3QixRQUF4QjtVQUNBTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO1FBQ0g7TUFDSixDQWRELE1BY0s7UUFDRCxLQUFLM0IsU0FBTCxDQUFlZ0MsTUFBZixHQUF3QixnQkFBeEI7TUFDSDtJQUNKO0VBQ0o7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwOmNjLk5vZGUsXG4gICAgICAgIG15bm9kZTpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMudGlwID0gIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvdGlwXCIpO1xuICAgICAgICB0aGlzLnRleHRMYWJlbCA9IHRoaXMudGlwLmdldENoaWxkQnlOYW1lKFwidGV4dExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm15bm9kZSk7XG4gICAgfSxcblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25LZXlEb3duKGV2ZW50KXtcbiAgICAgICAgLy8g6IOM5YyF5oyJ6ZKuXG4gICAgICAgIHRoaXMuY29udGFjdEl0ZW0gPSB3aW5kb3cuR2xvYmFsLml0ZW1OYW1lO1xuICAgICAgICB0aGlzLnNjZW5lID0gd2luZG93Lkdsb2JhbC5jdXJyZW50U2NlbmU7XG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJblVzZTpcIit3aW5kb3cuSW5Vc2UpO1xuICAgICAgICAgICAgaWYod2luZG93Lkl0ZW1zW3RoaXMuc2NlbmVdW3RoaXMuY29udGFjdEl0ZW1dLnVzZWQgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5JblVzZSA9PSAod2luZG93Lkl0ZW1zW3RoaXMuc2NlbmVdW3RoaXMuY29udGFjdEl0ZW1dLnRvb2wpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0IHRvb2xcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZyA9IFwi5bel5YW35L2/55So5oiQ5Yqf77yBbFwiO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuSXRlbXNbdGhpcy5zY2VuZV1bdGhpcy5jb250YWN0SXRlbV0udXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYod2luZG93LkluVXNlID09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nID0gXCLor7flhYjmiYvmjIHlt6XlhbfvvIjlnKjog4zljIXnlYzpnaLngrnlh7vlt6XlhbfljbPlj6/miYvmjIHvvIlcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UgdGFrZSB0aGUgdG9vbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nID0gXCLplJnor6/nmoTlt6XlhbfvvIFcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3cm9uZyB0b29sXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZyA9IFwi6L+Z5Lu25bel5YW35aW95YOP5bey57uP6KKr5L2/55So6L+H5LqG5ZOmXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=