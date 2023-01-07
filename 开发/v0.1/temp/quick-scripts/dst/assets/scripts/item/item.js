
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/item/item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '025deL+2dJLXoRgZY3soCxp', 'item');
// scripts/item/item.js

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
    tip: cc.Node
  },
  start: function start() {
    this.name = this.node.name;
    this.scene = Global.currentScene;
    this.tip = cc.find("Canvas/Main Camera/tip");
    this.isUsed = false;
    this.item = window.Items[this.scene][this.name].item;
    this.tool = window.Items[this.scene][this.name].tool;
  },
  contactWithTool: function contactWithTool() {
    this.isUsed = window.Items[this.scene][this.name].used;

    if (this.tool == window.Inuse) {
      if (this.isUsed) {
        this.tip.getChildByName("textLabel").getComponent(cc.Label).string = this.item.notUsedInfo;
      } else {
        window.Items[this.scene][this.name].used = true;
        this.tip.getChildByName("textLabel").getComponent(cc.Label).string = this.item.usedInfo;
      }
    } else {
      this.tip.active = true;
    }
  },
  update: function update(dt) {
    if (Global.itemType == 'items' && Global.itemName == this.name) {
      this.contactWithTool();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2l0ZW0vaXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpcCIsIk5vZGUiLCJzdGFydCIsIm5hbWUiLCJub2RlIiwic2NlbmUiLCJHbG9iYWwiLCJjdXJyZW50U2NlbmUiLCJmaW5kIiwiaXNVc2VkIiwiaXRlbSIsIndpbmRvdyIsIkl0ZW1zIiwidG9vbCIsImNvbnRhY3RXaXRoVG9vbCIsInVzZWQiLCJJbnVzZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJub3RVc2VkSW5mbyIsInVzZWRJbmZvIiwiYWN0aXZlIiwidXBkYXRlIiwiZHQiLCJpdGVtVHlwZSIsIml0ZW1OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsR0FBRyxFQUFDSixFQUFFLENBQUNLO0VBREMsQ0FIUDtFQU9MQyxLQVBLLG1CQU9JO0lBQ0wsS0FBS0MsSUFBTCxHQUFZLEtBQUtDLElBQUwsQ0FBVUQsSUFBdEI7SUFDQSxLQUFLRSxLQUFMLEdBQWFDLE1BQU0sQ0FBQ0MsWUFBcEI7SUFDQSxLQUFLUCxHQUFMLEdBQVdKLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLHdCQUFSLENBQVg7SUFDQSxLQUFLQyxNQUFMLEdBQWMsS0FBZDtJQUNBLEtBQUtDLElBQUwsR0FBWUMsTUFBTSxDQUFDQyxLQUFQLENBQWEsS0FBS1AsS0FBbEIsRUFBeUIsS0FBS0YsSUFBOUIsRUFBb0NPLElBQWhEO0lBQ0EsS0FBS0csSUFBTCxHQUFZRixNQUFNLENBQUNDLEtBQVAsQ0FBYSxLQUFLUCxLQUFsQixFQUF5QixLQUFLRixJQUE5QixFQUFvQ1UsSUFBaEQ7RUFDSCxDQWRJO0VBZ0JMQyxlQWhCSyw2QkFnQlk7SUFDYixLQUFLTCxNQUFMLEdBQWNFLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEtBQUtQLEtBQWxCLEVBQXlCLEtBQUtGLElBQTlCLEVBQW9DWSxJQUFsRDs7SUFFQSxJQUFHLEtBQUtGLElBQUwsSUFBYUYsTUFBTSxDQUFDSyxLQUF2QixFQUE2QjtNQUN6QixJQUFHLEtBQUtQLE1BQVIsRUFBZTtRQUNYLEtBQUtULEdBQUwsQ0FBU2lCLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLFlBQXJDLENBQWtEdEIsRUFBRSxDQUFDdUIsS0FBckQsRUFBNERDLE1BQTVELEdBQXFFLEtBQUtWLElBQUwsQ0FBVVcsV0FBL0U7TUFDSCxDQUZELE1BR0k7UUFDQVYsTUFBTSxDQUFDQyxLQUFQLENBQWEsS0FBS1AsS0FBbEIsRUFBeUIsS0FBS0YsSUFBOUIsRUFBb0NZLElBQXBDLEdBQTJDLElBQTNDO1FBQ0EsS0FBS2YsR0FBTCxDQUFTaUIsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsWUFBckMsQ0FBa0R0QixFQUFFLENBQUN1QixLQUFyRCxFQUE0REMsTUFBNUQsR0FBcUUsS0FBS1YsSUFBTCxDQUFVWSxRQUEvRTtNQUNIO0lBQ0osQ0FSRCxNQVFLO01BQ0QsS0FBS3RCLEdBQUwsQ0FBU3VCLE1BQVQsR0FBa0IsSUFBbEI7SUFDSDtFQUNKLENBOUJJO0VBZ0NMQyxNQWhDSyxrQkFnQ0dDLEVBaENILEVBZ0NPO0lBQ1IsSUFBR25CLE1BQU0sQ0FBQ29CLFFBQVAsSUFBbUIsT0FBbkIsSUFBOEJwQixNQUFNLENBQUNxQixRQUFQLElBQW1CLEtBQUt4QixJQUF6RCxFQUE4RDtNQUMxRCxLQUFLVyxlQUFMO0lBQ0g7RUFDSjtBQXBDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXA6Y2MuTm9kZVxuICAgIH0sXG4gICAgXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IEdsb2JhbC5jdXJyZW50U2NlbmU7XG4gICAgICAgIHRoaXMudGlwID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS90aXBcIik7XG4gICAgICAgIHRoaXMuaXNVc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXRlbSA9IHdpbmRvdy5JdGVtc1t0aGlzLnNjZW5lXVt0aGlzLm5hbWVdLml0ZW07XG4gICAgICAgIHRoaXMudG9vbCA9IHdpbmRvdy5JdGVtc1t0aGlzLnNjZW5lXVt0aGlzLm5hbWVdLnRvb2w7XG4gICAgfSxcblxuICAgIGNvbnRhY3RXaXRoVG9vbCgpe1xuICAgICAgICB0aGlzLmlzVXNlZCA9IHdpbmRvdy5JdGVtc1t0aGlzLnNjZW5lXVt0aGlzLm5hbWVdLnVzZWQ7XG5cbiAgICAgICAgaWYodGhpcy50b29sID09IHdpbmRvdy5JbnVzZSl7XG4gICAgICAgICAgICBpZih0aGlzLmlzVXNlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy50aXAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLml0ZW0ubm90VXNlZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHdpbmRvdy5JdGVtc1t0aGlzLnNjZW5lXVt0aGlzLm5hbWVdLnVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudGlwLmdldENoaWxkQnlOYW1lKFwidGV4dExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5pdGVtLnVzZWRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMudGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZihHbG9iYWwuaXRlbVR5cGUgPT0gJ2l0ZW1zJyAmJiBHbG9iYWwuaXRlbU5hbWUgPT0gdGhpcy5uYW1lKXtcbiAgICAgICAgICAgIHRoaXMuY29udGFjdFdpdGhUb29sKCk7XG4gICAgICAgIH0gICBcbiAgICB9LFxufSk7XG4iXX0=