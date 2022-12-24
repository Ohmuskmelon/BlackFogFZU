
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
text.set('doors', 'press SPACE to load another scene');
text.set('npcs', 'press j to talk to the npc');
text.set('tools', 'press k to take the tool');
text.set('items', 'press r to use the tool');
text.set('games', 'press g to start the game');
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
    this.textLable.string = '';
  },
  canShow: function canShow() {
    return Global.itemType != ' ';
  },
  showContext: function showContext(dt) {
    this.tt += dt;

    if (!this.isShowed) {
      console.log("type:" + Global.itemType);
      this.setTextData(text.get(Global.itemType));

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
    this.textLable.string = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RpcC90aXBzLmpzIl0sIm5hbWVzIjpbInRleHQiLCJNYXAiLCJzZXQiLCJLZXkiLCJzcGFjZSIsImoiLCJrIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0TGFibGUiLCJMYWJlbCIsImluaXQiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4IiwiaXNTaG93ZWQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJvbkxvYWQiLCJzZXRUZXh0RGF0YSIsInRleHREYXRhIiwic3RyaW5nIiwiY2FuU2hvdyIsIkdsb2JhbCIsIml0ZW1UeXBlIiwic2hvd0NvbnRleHQiLCJkdCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJsZW5ndGgiLCJzbGljZSIsImNsb3NlRGlhbG9nIiwiYWN0aXZlIiwib25EaXNhYmxlIiwic3RhcnQiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxJQUFJQyxHQUFKLEVBQWI7QUFDQUQsSUFBSSxDQUFDRSxHQUFMLENBQVMsT0FBVCxFQUFpQixtQ0FBakI7QUFDQUYsSUFBSSxDQUFDRSxHQUFMLENBQVMsTUFBVCxFQUFnQiw0QkFBaEI7QUFDQUYsSUFBSSxDQUFDRSxHQUFMLENBQVMsT0FBVCxFQUFpQiwwQkFBakI7QUFDQUYsSUFBSSxDQUFDRSxHQUFMLENBQVMsT0FBVCxFQUFpQix5QkFBakI7QUFDQUYsSUFBSSxDQUFDRSxHQUFMLENBQVMsT0FBVCxFQUFpQiwyQkFBakI7QUFHQSxJQUFJQyxHQUFHLEdBQUc7RUFBRUMsS0FBSyxFQUFFLENBQVQ7RUFBWUMsQ0FBQyxFQUFFLENBQWY7RUFBa0JDLENBQUMsRUFBRTtBQUFyQixDQUFWO0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0s7RUFETixDQUhQO0VBT0w7RUFFQUMsSUFUSyxrQkFTRTtJQUNILEtBQUtDLE9BQUwsR0FBZSxJQUFmO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLElBQWY7SUFDQSxLQUFLQyxFQUFMLEdBQVUsQ0FBVjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsQ0FBQyxDQUFsQjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7SUFDQSxLQUFLUCxTQUFMLEdBQWlCLEtBQUtRLElBQUwsQ0FBVUMsY0FBVixDQUF5QixXQUF6QixFQUFzQ0MsWUFBdEMsQ0FBbURkLEVBQUUsQ0FBQ0ssS0FBdEQsQ0FBakI7RUFDSCxDQWhCSTtFQWtCTFUsTUFsQkssb0JBa0JJO0lBQ0wsS0FBS1QsSUFBTDtFQUNILENBcEJJO0VBc0JMVSxXQXRCSyx1QkFzQk9DLFFBdEJQLEVBc0JpQjtJQUNsQixJQUFJLENBQUMsS0FBS1QsT0FBVixFQUFtQjtJQUNuQixLQUFLQSxPQUFMLEdBQWUsS0FBZjtJQUNBLEtBQUtELE9BQUwsR0FBZVUsUUFBZjtJQUNBLEtBQUtiLFNBQUwsQ0FBZWMsTUFBZixHQUF3QixFQUF4QjtFQUNILENBM0JJO0VBNkJMQyxPQTdCSyxxQkE2Qkk7SUFDTCxPQUFPQyxNQUFNLENBQUNDLFFBQVAsSUFBaUIsR0FBeEI7RUFDSCxDQS9CSTtFQW1DTEMsV0FuQ0ssdUJBbUNPQyxFQW5DUCxFQW1DVTtJQUNYLEtBQUtkLEVBQUwsSUFBV2MsRUFBWDs7SUFDQSxJQUFJLENBQUMsS0FBS1osUUFBVixFQUFvQjtNQUNoQmEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBUUwsTUFBTSxDQUFDQyxRQUEzQjtNQUNBLEtBQUtMLFdBQUwsQ0FBaUJ2QixJQUFJLENBQUNpQyxHQUFMLENBQVNOLE1BQU0sQ0FBQ0MsUUFBaEIsQ0FBakI7O01BQ0EsSUFBSSxLQUFLWixFQUFMLElBQVcsSUFBZixFQUFxQjtRQUNqQixJQUFJLEtBQUtMLFNBQUwsQ0FBZWMsTUFBZixDQUFzQlMsTUFBdEIsR0FBK0IsS0FBS3BCLE9BQUwsQ0FBYW9CLE1BQWhELEVBQXdEO1VBQ3BELEtBQUt2QixTQUFMLENBQWVjLE1BQWYsR0FBd0IsS0FBS1gsT0FBTCxDQUFhcUIsS0FBYixDQUFtQixDQUFuQixFQUFzQixLQUFLeEIsU0FBTCxDQUFlYyxNQUFmLENBQXNCUyxNQUF0QixHQUErQixDQUFyRCxDQUF4QjtRQUNILENBRkQsTUFFTztVQUNILEtBQUtuQixPQUFMLEdBQWUsSUFBZjtVQUNBLEtBQUtHLFFBQUwsR0FBZ0IsSUFBaEI7UUFDSDs7UUFDRCxLQUFLRixFQUFMLEdBQVUsQ0FBVjtNQUNIO0lBQ0o7RUFDSixDQWxESTtFQW9ETG9CLFdBcERLLHlCQW9EUztJQUNWLEtBQUtqQixJQUFMLENBQVVrQixNQUFWLEdBQW1CLEtBQW5CO0VBQ0gsQ0F0REk7RUF3RExDLFNBeERLLHVCQXdETztJQUNSLEtBQUszQixTQUFMLENBQWVjLE1BQWYsR0FBd0IsRUFBeEI7SUFDQSxLQUFLWixJQUFMO0VBQ0gsQ0EzREk7RUE2REwwQixLQTdESyxtQkE2REcsQ0FDUCxDQTlESTtFQWdFTEMsTUFoRUssa0JBZ0VFVixFQWhFRixFQWdFTTtJQUNQLEtBQUtELFdBQUwsQ0FBaUJDLEVBQWpCO0VBQ0g7QUFsRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IHRleHQgPSBbXG4vLyAgICAgeyBzdGF0ZTogJ3NwYWNlJywgY29udGVudDogJ3ByZXNzIFNQQUNFIHRvIGxvYWQgYW5vdGhlciBzY2VuZScgfSxcbi8vICAgICB7IHN0YXRlOiAnaicsIGNvbnRlbnQ6ICdwcmVzcyBqIHRvIHRhbGsgdG8gdGhlIGdob3N0JyB9LFxuLy8gICAgIHsgc3RhdGU6ICdrJywgY29udGVudDogJ3ByZXNzIGsgdG8gdGFrZSB0aGUgdG9vbCcgfSxcbi8vIF1cblxuY29uc3QgdGV4dCA9IG5ldyBNYXAoKTtcbnRleHQuc2V0KCdkb29ycycsJ3ByZXNzIFNQQUNFIHRvIGxvYWQgYW5vdGhlciBzY2VuZScpO1xudGV4dC5zZXQoJ25wY3MnLCdwcmVzcyBqIHRvIHRhbGsgdG8gdGhlIG5wYycpO1xudGV4dC5zZXQoJ3Rvb2xzJywncHJlc3MgayB0byB0YWtlIHRoZSB0b29sJyk7XG50ZXh0LnNldCgnaXRlbXMnLCdwcmVzcyByIHRvIHVzZSB0aGUgdG9vbCcpO1xudGV4dC5zZXQoJ2dhbWVzJywncHJlc3MgZyB0byBzdGFydCB0aGUgZ2FtZScpXG4gXG5cbmxldCBLZXkgPSB7IHNwYWNlOiAwLCBqOiAxICxrOiAyfTtcbiBcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0ZXh0TGFibGU6IGNjLkxhYmVsLFxuICAgIH0sXG4gXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5ub3dUZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZXh0RW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICAgIHRoaXMudGV4dEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuaXNTaG93ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50ZXh0TGFibGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9LFxuIFxuICAgIHNldFRleHREYXRhKHRleHREYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy50ZXh0RW5kKSByZXR1cm47XG4gICAgICAgIHRoaXMudGV4dEVuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vd1RleHQgPSB0ZXh0RGF0YTtcbiAgICAgICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gJyc7XG4gICAgfSxcblxuICAgIGNhblNob3coKXtcbiAgICAgICAgcmV0dXJuIEdsb2JhbC5pdGVtVHlwZSE9JyAnO1xuICAgIH0sXG5cbiBcblxuICAgIHNob3dDb250ZXh0KGR0KXtcbiAgICAgICAgdGhpcy50dCArPSBkdDtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2hvd2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR5cGU6XCIrR2xvYmFsLml0ZW1UeXBlKVxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0ZXh0LmdldChHbG9iYWwuaXRlbVR5cGUpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnR0ID49IDAuMDUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0TGFibGUuc3RyaW5nLmxlbmd0aCA8IHRoaXMubm93VGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gdGhpcy5ub3dUZXh0LnNsaWNlKDAsIHRoaXMudGV4dExhYmxlLnN0cmluZy5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRFbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuIFxuICAgIGNsb3NlRGlhbG9nKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy50ZXh0TGFibGUuc3RyaW5nID0gJyc7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG4gXG4gICAgc3RhcnQoKSB7XG4gICAgfSxcbiBcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5zaG93Q29udGV4dChkdCk7XG4gICAgfSxcbn0pOyJdfQ==