
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tip/tips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f55f69NtlD654n2/I4CKFP', 'tips');
// scripts/tip/tips.js

"use strict";

// let text = [
//     { state: 'space', content: 'press SPACE to load another scene' },
//     { state: 'j', content: 'press j to talk to the ghost' },
//     { state: 'k', content: 'press k to take the tool' },
// ]
var text = new Map();
text.set("doors", "按下空格即可切换场景");
text.set("npcs", "按下J键查看内容");
text.set("tools", "按下K键拾取物品");
text.set("items", "按下R键使用所选物品");
text.set("games", "按下G键查看");
var Key = {
  space: 0,
  j: 1,
  k: 2
};
cc.Class({
  "extends": cc.Component,
  properties: {
    textLable: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  init: function init() {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0;
    this.textIndex = -1;
    this.isShowed = false;
    this.textLable = this.node.getChildByName("textLabel").getComponent(cc.Label);
  },
  onLoad: function onLoad() {
    this.init();
  },
  setTextData: function setTextData(textData) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.nowText = textData;
    this.textLable.string = "";
  },
  canShow: function canShow() {
    return Global.itemType != " ";
  },
  showContext: function showContext(dt) {
    this.tt += dt;

    if (!this.isShowed) {
      console.log("type:" + Global.itemType);

      if (window.Global.itemType == 'selfdialogs') {
        var currentscene = cc.director.getScene()._name;

        ;
        var name = window.Global.itemName;
        var content = window.selfDialog[currentscene][name];
        this.setTextData(content);
      } else {
        this.setTextData(text.get(Global.itemType));
      }

      if (this.tt >= 0.05) {
        if (this.textLable.string.length < this.nowText.length) {
          this.textLable.string = this.nowText.slice(0, this.textLable.string.length + 1);
        } else {
          this.textEnd = true;
          this.isShowed = true;
        }

        this.tt = 0;
      }
    }
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  onDisable: function onDisable() {
    this.textLable.string = "";
    this.init();
  },
  start: function start() {},
  update: function update(dt) {
    this.showContext(dt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RpcC90aXBzLmpzIl0sIm5hbWVzIjpbInRleHQiLCJNYXAiLCJzZXQiLCJLZXkiLCJzcGFjZSIsImoiLCJrIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0TGFibGUiLCJMYWJlbCIsImluaXQiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4IiwiaXNTaG93ZWQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJvbkxvYWQiLCJzZXRUZXh0RGF0YSIsInRleHREYXRhIiwic3RyaW5nIiwiY2FuU2hvdyIsIkdsb2JhbCIsIml0ZW1UeXBlIiwic2hvd0NvbnRleHQiLCJkdCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJjdXJyZW50c2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiX25hbWUiLCJuYW1lIiwiaXRlbU5hbWUiLCJjb250ZW50Iiwic2VsZkRpYWxvZyIsImdldCIsImxlbmd0aCIsInNsaWNlIiwiY2xvc2VEaWFsb2ciLCJhY3RpdmUiLCJvbkRpc2FibGUiLCJzdGFydCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLElBQUlDLEdBQUosRUFBYjtBQUNBRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxPQUFULEVBQWtCLFlBQWxCO0FBQ0FGLElBQUksQ0FBQ0UsR0FBTCxDQUFTLE1BQVQsRUFBaUIsVUFBakI7QUFDQUYsSUFBSSxDQUFDRSxHQUFMLENBQVMsT0FBVCxFQUFrQixVQUFsQjtBQUNBRixJQUFJLENBQUNFLEdBQUwsQ0FBUyxPQUFULEVBQWtCLFlBQWxCO0FBQ0FGLElBQUksQ0FBQ0UsR0FBTCxDQUFTLE9BQVQsRUFBa0IsUUFBbEI7QUFFQSxJQUFJQyxHQUFHLEdBQUc7RUFBRUMsS0FBSyxFQUFFLENBQVQ7RUFBWUMsQ0FBQyxF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RUExRUEsRUEwRUk7SUFDVCxLQUFLRCxXQUFMLENBQWlCQyxFQUFqQjtFQUNEO0FBNUVNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxldCB0ZXh0ID0gW1xuLy8gICAgIHsgc3RhdGU6ICdzcGFjZScsIGNvbnRlbnQ6ICdwcmVzcyBTUEFDRSB0byBsb2FkIGFub3RoZXIgc2NlbmUnIH0sXG4vLyAgICAgeyBzdGF0ZTogJ2onLCBjb250ZW50OiAncHJlc3MgaiB0byB0YWxrIHRvIHRoZSBnaG9zdCcgfSxcbi8vICAgICB7IHN0YXRlOiAnaycsIGNvbnRlbnQ6ICdwcmVzcyBrIHRvIHRha2UgdGhlIHRvb2wnIH0sXG4vLyBdXG5cbmNvbnN0IHRleHQgPSBuZXcgTWFwKCk7XG50ZXh0LnNldChcImRvb3JzXCIsIFwi5oyJ5LiL56m65qC85Y2z5Y+v5YiH5o2i5Zy65pmvXCIpO1xudGV4dC5zZXQoXCJucGNzXCIsIFwi5oyJ5LiLSumUruafpeeci+WGheWuuVwiKTtcbnRleHQuc2V0KFwidG9vbHNcIiwgXCLmjInkuItL6ZSu5ou+5Y+W54mp5ZOBXCIpO1xudGV4dC5zZXQoXCJpdGVtc1wiLCBcIuaMieS4i1LplK7kvb/nlKjmiYDpgInnianlk4FcIik7XG50ZXh0LnNldChcImdhbWVzXCIsIFwi5oyJ5LiLR+mUruafpeeci1wiKTtcblxubGV0IEtleSA9IHsgc3BhY2U6IDAsIGo6IDEsIGs6IDIgfTtcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHRleHRMYWJsZTogY2MuTGFiZWwsXG4gIH0sXG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm5vd1RleHQgPSBudWxsO1xuICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XG4gICAgdGhpcy50dCA9IDA7XG4gICAgdGhpcy50ZXh0SW5kZXggPSAtMTtcbiAgICB0aGlzLmlzU2hvd2VkID0gZmFsc2U7XG4gICAgdGhpcy50ZXh0TGFibGUgPSB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRMYWJlbFwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9LFxuXG4gIHNldFRleHREYXRhKHRleHREYXRhKSB7XG4gICAgaWYgKCF0aGlzLnRleHRFbmQpIHJldHVybjtcbiAgICB0aGlzLnRleHRFbmQgPSBmYWxzZTtcbiAgICB0aGlzLm5vd1RleHQgPSB0ZXh0RGF0YTtcbiAgICB0aGlzLnRleHRMYWJsZS5zdHJpbmcgPSBcIlwiO1xuICB9LFxuXG4gIGNhblNob3coKSB7XG4gICAgcmV0dXJuIEdsb2JhbC5pdGVtVHlwZSAhPSBcIiBcIjtcbiAgfSxcblxuICBzaG93Q29udGV4dChkdCkge1xuICAgIHRoaXMudHQgKz0gZHQ7XG4gICAgaWYgKCF0aGlzLmlzU2hvd2VkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInR5cGU6XCIgKyBHbG9iYWwuaXRlbVR5cGUpO1xuXG4gICAgICBpZih3aW5kb3cuR2xvYmFsLml0ZW1UeXBlID09ICdzZWxmZGlhbG9ncycpe1xuICAgICAgICBsZXQgY3VycmVudHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5fbmFtZTs7XG4gICAgICAgIGxldCBuYW1lID0gd2luZG93Lkdsb2JhbC5pdGVtTmFtZTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB3aW5kb3cuc2VsZkRpYWxvZ1tjdXJyZW50c2NlbmVdW25hbWVdO1xuICAgICAgICB0aGlzLnNldFRleHREYXRhKGNvbnRlbnQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuc2V0VGV4dERhdGEodGV4dC5nZXQoR2xvYmFsLml0ZW1UeXBlKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50dCA+PSAwLjA1KSB7XG4gICAgICAgIGlmICh0aGlzLnRleHRMYWJsZS5zdHJpbmcubGVuZ3RoIDwgdGhpcy5ub3dUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudGV4dExhYmxlLnN0cmluZyA9IHRoaXMubm93VGV4dC5zbGljZShcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0aGlzLnRleHRMYWJsZS5zdHJpbmcubGVuZ3RoICsgMVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50ZXh0RW5kID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmlzU2hvd2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnR0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9LFxuXG4gIG9uRGlzYWJsZSgpIHtcbiAgICB0aGlzLnRleHRMYWJsZS5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9LFxuXG4gIHN0YXJ0KCkge30sXG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5zaG93Q29udGV4dChkdCk7XG4gIH0sXG59KTtcbiJdfQ==