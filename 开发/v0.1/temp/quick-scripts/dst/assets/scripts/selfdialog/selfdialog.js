
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/selfdialog/selfdialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78faevrZu1NxKw/vYWH7Hyl', 'selfdialog');
// scripts/selfdialog/selfdialog.js

"use strict";

// let text = [
//     { state: 'space', content: 'press SPACE to load another scene' },
//     { state: 'j', content: 'press j to talk to the ghost' },
//     { state: 'k', content: 'press k to take the tool' },
// ]
cc.Class({
  "extends": cc.Component,
  properties: {
    textLable: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  init: function init() {
    this.currentScene = cc.director.getScene()._name;
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
  setTextData: function setTextData() {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.nowText = textData;
    this.textLable.string = window.selfDialog[this.currentScene][this.node.name];
  },
  canShow: function canShow() {
    return Global.itemType != " ";
  },
  showContext: function showContext(dt) {
    this.tt += dt;

    if (!this.isShowed) {
      console.log("type:" + Global.itemType);
      this.setTextData();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NlbGZkaWFsb2cvc2VsZmRpYWxvZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJsZSIsIkxhYmVsIiwiaW5pdCIsImN1cnJlbnRTY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJfbmFtZSIsIm5vd1RleHQiLCJ0ZXh0RW5kIiwidHQiLCJ0ZXh0SW5kZXgiLCJpc1Nob3dlZCIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIm9uTG9hZCIsInNldFRleHREYXRhIiwidGV4dERhdGEiLCJzdHJpbmciLCJ3aW5kb3ciLCJzZWxmRGlhbG9nIiwibmFtZSIsImNhblNob3ciLCJHbG9iYWwiLCJpdGVtVHlwZSIsInNob3dDb250ZXh0IiwiZHQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2xpY2UiLCJjbG9zZURpYWxvZyIsImFjdGl2ZSIsIm9uRGlzYWJsZSIsInN0YXJ0IiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFO0lBQ1ZDLFNBQVMsRUFBRUosRUFBRSxDQUFDSztFQURKLENBSEw7RUFPUDtFQUVBQyxJQVRPLGtCQVNBO0lBQ0wsS0FBS0MsWUFBTCxHQUFvQlAsRUFBRSxDQUFDUSxRQUFILENBQVlDLFFBQVosR0FBdUJDLEtBQTNDO0lBRUEsS0FBS0MsT0FBTCxHQUFlLElBQWY7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBZjtJQUNBLEtBQUtDLEVBQUwsR0FBVSxDQUFWO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixDQUFDLENBQWxCO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixLQUFoQjtJQUNBLEtBQUtYLFNBQUwsR0FBaUIsS0FBS1ksSUFBTCxDQUNkQyxjQURjLENBQ0MsV0FERCxFQUVkQyxZQUZjLENBRURsQixFQUFFLENBQUNLLEtBRkYsQ0FBakI7RUFHRCxDQXBCTTtFQXNCUGMsTUF0Qk8sb0JBc0JFO0lBQ1AsS0FBS2IsSUFBTDtFQUNELENBeEJNO0VBMEJQYyxXQTFCTyx5QkEwQk87SUFDWixJQUFJLENBQUMsS0FBS1IsT0FBVixFQUFtQjtJQUNuQixLQUFLQSxPQUFMLEdBQWUsS0FBZjtJQUNBLEtBQUtELE9BQUwsR0FBZVUsUUFBZjtJQUNBLEtBQUtqQixTQUFMLENBQWVrQixNQUFmLEdBQXdCQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsS0FBS2pCLFlBQXZCLEVBQXFDLEtBQUtTLElBQUwsQ0FBVVMsSUFBL0MsQ0FBeEI7RUFDRCxDQS9CTTtFQWlDUEMsT0FqQ08scUJBaUNHO0lBQ1IsT0FBT0MsTUFBTSxDQUFDQyxRQUFQLElBQW1CLEdBQTFCO0VBQ0QsQ0FuQ007RUFxQ1BDLFdBckNPLHVCQXFDS0MsRUFyQ0wsRUFxQ1M7SUFDZCxLQUFLakIsRUFBTCxJQUFXaUIsRUFBWDs7SUFDQSxJQUFJLENBQUMsS0FBS2YsUUFBVixFQUFvQjtNQUNsQmdCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVVMLE1BQU0sQ0FBQ0MsUUFBN0I7TUFDQSxLQUFLUixXQUFMOztNQUNBLElBQUksS0FBS1AsRUFBTCxJQUFXLElBQWYsRUFBcUI7UUFDbkIsSUFBSSxLQUFLVCxTQUFMLENBQWVrQixNQUFmLENBQXNCVyxNQUF0QixHQUErQixLQUFLdEIsT0FBTCxDQUFhc0IsTUFBaEQsRUFBd0Q7VUFDdEQsS0FBSzdCLFNBQUwsQ0FBZWtCLE1BQWYsR0FBd0IsS0FBS1gsT0FBTCxDQUFhdUIsS0FBYixDQUFtQixDQUFuQixFQUFxQixLQUFLOUIsU0FBTCxDQUFla0IsTUFBZixDQUFzQlcsTUFBdEIsR0FBK0IsQ0FBcEQsQ0FBeEI7UUFDRCxDQUZELE1BRU87VUFDTCxLQUFLckIsT0FBTCxHQUFlLElBQWY7VUFDQSxLQUFLRyxRQUFMLEdBQWdCLElBQWhCO1FBQ0Q7O1FBQ0QsS0FBS0YsRUFBTCxHQUFVLENBQVY7TUFDRDtJQUNGO0VBQ0YsQ0FwRE07RUFzRFBzQixXQXRETyx5QkFzRE87SUFDWixLQUFLbkIsSUFBTCxDQUFVb0IsTUFBVixHQUFtQixLQUFuQjtFQUNELENBeERNO0VBMERQQyxTQTFETyx1QkEwREs7SUFDVixLQUFLakMsU0FBTCxDQUFla0IsTUFBZixHQUF3QixFQUF4QjtJQUNBLEtBQUtoQixJQUFMO0VBQ0QsQ0E3RE07RUErRFBnQyxLQS9ETyxtQkErREMsQ0FBRSxDQS9ESDtFQWlFUEMsTUFqRU8sa0JBaUVBVCxFQWpFQSxFQWlFSTtJQUNULEtBQUtELFdBQUwsQ0FBaUJDLEVBQWpCO0VBQ0Q7QUFuRU0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IHRleHQgPSBbXG4vLyAgICAgeyBzdGF0ZTogJ3NwYWNlJywgY29udGVudDogJ3ByZXNzIFNQQUNFIHRvIGxvYWQgYW5vdGhlciBzY2VuZScgfSxcbi8vICAgICB7IHN0YXRlOiAnaicsIGNvbnRlbnQ6ICdwcmVzcyBqIHRvIHRhbGsgdG8gdGhlIGdob3N0JyB9LFxuLy8gICAgIHsgc3RhdGU6ICdrJywgY29udGVudDogJ3ByZXNzIGsgdG8gdGFrZSB0aGUgdG9vbCcgfSxcbi8vIF1cblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHRleHRMYWJsZTogY2MuTGFiZWwsXG4gIH0sXG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWU7XG5cbiAgICB0aGlzLm5vd1RleHQgPSBudWxsO1xuICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XG4gICAgdGhpcy50dCA9IDA7XG4gICAgdGhpcy50ZXh0SW5kZXggPSAtMTtcbiAgICB0aGlzLmlzU2hvd2VkID0gZmFsc2U7XG4gICAgdGhpcy50ZXh0TGFibGUgPSB0aGlzLm5vZGVcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRMYWJlbFwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9LFxuXG4gIHNldFRleHREYXRhKCkge1xuICAgIGlmICghdGhpcy50ZXh0RW5kKSByZXR1cm47XG4gICAgdGhpcy50ZXh0RW5kID0gZmFsc2U7XG4gICAgdGhpcy5ub3dUZXh0ID0gdGV4dERhdGE7XG4gICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gd2luZG93LnNlbGZEaWFsb2dbdGhpcy5jdXJyZW50U2NlbmVdW3RoaXMubm9kZS5uYW1lXTtcbiAgfSxcblxuICBjYW5TaG93KCkge1xuICAgIHJldHVybiBHbG9iYWwuaXRlbVR5cGUgIT0gXCIgXCI7XG4gIH0sXG5cbiAgc2hvd0NvbnRleHQoZHQpIHtcbiAgICB0aGlzLnR0ICs9IGR0O1xuICAgIGlmICghdGhpcy5pc1Nob3dlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0eXBlOlwiICsgR2xvYmFsLml0ZW1UeXBlKTtcbiAgICAgIHRoaXMuc2V0VGV4dERhdGEoKTtcbiAgICAgIGlmICh0aGlzLnR0ID49IDAuMDUpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dExhYmxlLnN0cmluZy5sZW5ndGggPCB0aGlzLm5vd1RleHQubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gdGhpcy5ub3dUZXh0LnNsaWNlKDAsdGhpcy50ZXh0TGFibGUuc3RyaW5nLmxlbmd0aCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5pc1Nob3dlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfSxcblxuICBvbkRpc2FibGUoKSB7XG4gICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLmluaXQoKTtcbiAgfSxcblxuICBzdGFydCgpIHt9LFxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMuc2hvd0NvbnRleHQoZHQpO1xuICB9LFxufSk7XG4iXX0=