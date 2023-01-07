
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/dialog/dialog - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab8caVBfEBHpJaZ+h6wgNHk', 'dialog - 001');
// scripts/dialog/dialog - 001.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var roleMap = {
  1: {
    name: "小白",
    url: "role/player"
  },
  2: {
    name: "纸条",
    url: ""
  }
};
var defaultContents = [{
  role: 2,
  content: "Welcome to FZU,hhhhh"
}, {
  role: 1,
  content: "Hello,I'm Huiker"
} //当前的testData
];
cc.Class({
  "extends": cc.Component,
  properties: {
    picSprite: cc.Sprite,
    nameLabel: cc.Label,
    textLabel: cc.Label,
    nodeBody: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // this.node.getChildByName("body").active = false;
    this.nodeBody = this.node.getChildByName("body");
    this.nodeBody.active = false;
    this.canTalk = false;
    this.node.active = true;
    this.npcName = ' ';
    this.initDialog();
    console.log("dialog success");
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(event) {
    if (event.keyCode == cc.macro.KEY.j && this.canShowDialog()) {
      this.nodeBody.active = true;
      this.showDialog();
      console.log("press j to talk");
      console.log(this.node.name);
    }
  },
  start: function start() {},
  canShowDialog: function canShowDialog() {
    if (Global.itemType == "npcs") {
      return true;
    }

    return false;
  },
  //初始化对话内容
  initContent: function initContent() {
    console.log(Global.currentScene);
    var content = Dialog.contents[window.Global.currentScene]; // console.log(content);

    if (window.Global.itemType != 'npcs' || window.Global.itemName == ' ') {
      return defaultContents;
    }

    return content[window.Global.itemName];
  },
  //初始化对话系统
  initDialog: function initDialog() {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.contentArr = defaultContents;
    this.textIndex = -1;
    this.textLabel = this.nodeBody.getChildByName("textLabel").getComponent(cc.Label);
    this.nameLabel = this.nodeBody.getChildByName("nameLabel").getComponent(cc.Label);
    this.textLabel.string = '';
  },
  // 显示对话的逻辑
  showDialog: function showDialog() {
    if (++this.textIndex < this.contentArr.length) {
      console.log("current index:" + this.textIndex);
      this.setTextData(this.contentArr[this.textIndex]); // console.log(this.contentArr[this.textIndex].content);
    } else {
      //关闭对话框
      this.closeDialog();
      this.textIndex = -1;
    }
  },
  setTextData: function setTextData(textData) {
    var _this = this;

    // 一行尚未播放完
    if (!this.textEnd) return;
    this.textEnd = false;
    this.nameLabel.string = roleMap[textData.role].name; //textData是角色编号 从roleMap中获取角色的名字

    this.textLabel.string = '';
    this.nowText = textData.content; // 修改头像

    if (this.canTalk && this.npcName != ' ') {
      roleMap[2].url = "role/" + Global.currentScene + "/" + Global.itemName;
      console.log(roleMap[textData.role].url);
    }

    cc.resources.load(roleMap[textData.role].url, cc.SpriteFrame, function (err, texture) {
      _this.picSprite.spriteFrame = texture;
    });
  },
  showContext: function showContext(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.02) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }

    console.log("this textLabel: " + this.textLabel.string);
  },
  closeDialog: function closeDialog() {
    // 直接不显示当前的节点
    this.nodeBody.active = false;
  },
  update: function update(dt) {
    this.canTalk = this.canShowDialog();

    if (this.canTalk && this.npcName != Global.itemName) {
      console.log(this.npcName);
      this.npcName = Global.itemName;
      var content = this.initContent();
      console.log(content);
      this.contentArr = content;
    }

    if (this.canTalk) {
      this.showContext(dt);
    } else {
      this.nodeBody.active = false;
    }
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RpYWxvZy9kaWFsb2cgLSAwMDEuanMiXSwibmFtZXMiOlsicm9sZU1hcCIsIm5hbWUiLCJ1cmwiLCJkZWZhdWx0Q29udGVudHMiLCJyb2xlIiwiY29udGVudCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGljU3ByaXRlIiwiU3ByaXRlIiwibmFtZUxhYmVsIiwiTGFiZWwiLCJ0ZXh0TGFiZWwiLCJub2RlQm9keSIsIk5vZGUiLCJvbkxvYWQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJjYW5UYWxrIiwibnBjTmFtZSIsImluaXREaWFsb2ciLCJjb25zb2xlIiwibG9nIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImoiLCJjYW5TaG93RGlhbG9nIiwic2hvd0RpYWxvZyIsInN0YXJ0IiwiR2xvYmFsIiwiaXRlbVR5cGUiLCJpbml0Q29udGVudCIsImN1cnJlbnRTY2VuZSIsIkRpYWxvZyIsImNvbnRlbnRzIiwid2luZG93IiwiaXRlbU5hbWUiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwiY29udGVudEFyciIsInRleHRJbmRleCIsImdldENvbXBvbmVudCIsInN0cmluZyIsImxlbmd0aCIsInNldFRleHREYXRhIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0YSIsInJlc291cmNlcyIsImxvYWQiLCJTcHJpdGVGcmFtZSIsImVyciIsInRleHR1cmUiLCJzcHJpdGVGcmFtZSIsInNob3dDb250ZXh0IiwiZHQiLCJzbGljZSIsInVwZGF0ZSIsIm9uRGVzdHJveSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJQSxPQUFPLEdBQUc7RUFDVixHQUFHO0lBQ0NDLElBQUksRUFBRSxJQURQO0lBRUNDLEdBQUcsRUFBRTtFQUZOLENBRE87RUFLVixHQUFHO0lBQ0NELElBQUksRUFBRSxJQURQO0lBRUNDLEdBQUcsRUFBRTtFQUZOO0FBTE8sQ0FBZDtBQVlBLElBQUlDLGVBQWUsR0FBRyxDQUNsQjtFQUFFQyxJQUFJLEVBQUUsQ0FBUjtFQUFXQyxPQUFPLEVBQUU7QUFBcEIsQ0FEa0IsRUFFbEI7RUFBRUQsSUFBSSxFQUFFLENBQVI7RUFBV0MsT0FBTyxFQUFFO0FBQXBCLENBRmtCLENBRXlCO0FBRnpCLENBQXRCO0FBS0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssTUFETjtJQUVSQyxTQUFTLEVBQUVOLEVBQUUsQ0FBQ08sS0FGTjtJQUdSQyxTQUFTLEVBQUVSLEVBQUUsQ0FBQ08sS0FITjtJQUlSRSxRQUFRLEVBQUVULEVBQUUsQ0FBQ1U7RUFKTCxDQUhQO0VBVUw7RUFFQUMsTUFaSyxvQkFZSTtJQUNMO0lBQ0EsS0FBS0YsUUFBTCxHQUFnQixLQUFLRyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsTUFBekIsQ0FBaEI7SUFDQSxLQUFLSixRQUFMLENBQWNLLE1BQWQsR0FBdUIsS0FBdkI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsS0FBZjtJQUNBLEtBQUtILElBQUwsQ0FBVUUsTUFBVixHQUFtQixJQUFuQjtJQUNBLEtBQUtFLE9BQUwsR0FBZSxHQUFmO0lBQ0EsS0FBS0MsVUFBTDtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtJQUNBbkIsRUFBRSxDQUFDb0IsV0FBSCxDQUFlQyxFQUFmLENBQWtCckIsRUFBRSxDQUFDc0IsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUEzQyxFQUFxRCxLQUFLQyxTQUExRCxFQUFxRSxJQUFyRTtFQUNILENBdEJJO0VBd0JMQSxTQXhCSyxxQkF3QktDLEtBeEJMLEVBd0JZO0lBQ2IsSUFBSUEsS0FBSyxDQUFDQyxPQUFOLElBQWlCM0IsRUFBRSxDQUFDNEIsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQTlCLElBQW1DLEtBQUtDLGFBQUwsRUFBdkMsRUFBNkQ7TUFDekQsS0FBS3RCLFFBQUwsQ0FBY0ssTUFBZCxHQUF1QixJQUF2QjtNQUNBLEtBQUtrQixVQUFMO01BQ0FkLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO01BQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtQLElBQUwsQ0FBVWpCLElBQXRCO0lBQ0g7RUFDSixDQS9CSTtFQWlDTHNDLEtBakNLLG1CQWlDRyxDQUVQLENBbkNJO0VBcUNMRixhQXJDSywyQkFxQ1c7SUFDWixJQUFJRyxNQUFNLENBQUNDLFFBQVAsSUFBbUIsTUFBdkIsRUFBK0I7TUFDM0IsT0FBTyxJQUFQO0lBQ0g7O0lBQ0QsT0FBTyxLQUFQO0VBQ0gsQ0ExQ0k7RUE0Q0w7RUFDQUMsV0E3Q0sseUJBNkNTO0lBQ1ZsQixPQUFPLENBQUNDLEdBQVIsQ0FBWWUsTUFBTSxDQUFDRyxZQUFuQjtJQUNBLElBQUl0QyxPQUFPLEdBQUd1QyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQU0sQ0FBQ04sTUFBUCxDQUFjRyxZQUE5QixDQUFkLENBRlUsQ0FHVjs7SUFDQSxJQUFJRyxNQUFNLENBQUNOLE1BQVAsQ0FBY0MsUUFBZCxJQUEwQixNQUExQixJQUFvQ0ssTUFBTSxDQUFDTixNQUFQLENBQWNPLFFBQWQsSUFBMEIsR0FBbEUsRUFBdUU7TUFDbkUsT0FBTzVDLGVBQVA7SUFDSDs7SUFDRCxPQUFPRSxPQUFPLENBQUN5QyxNQUFNLENBQUNOLE1BQVAsQ0FBY08sUUFBZixDQUFkO0VBQ0gsQ0FyREk7RUF3REw7RUFDQXhCLFVBekRLLHdCQXlEUTtJQUNULEtBQUt5QixPQUFMLEdBQWUsSUFBZjtJQUNBLEtBQUtDLE9BQUwsR0FBZSxJQUFmO0lBQ0EsS0FBS0MsRUFBTCxHQUFVLENBQVYsQ0FIUyxDQUdJOztJQUNiLEtBQUtDLFVBQUwsR0FBa0JoRCxlQUFsQjtJQUNBLEtBQUtpRCxTQUFMLEdBQWlCLENBQUMsQ0FBbEI7SUFDQSxLQUFLdEMsU0FBTCxHQUFpQixLQUFLQyxRQUFMLENBQWNJLGNBQWQsQ0FBNkIsV0FBN0IsRUFBMENrQyxZQUExQyxDQUF1RC9DLEVBQUUsQ0FBQ08sS0FBMUQsQ0FBakI7SUFDQSxLQUFLRCxTQUFMLEdBQWlCLEtBQUtHLFFBQUwsQ0FBY0ksY0FBZCxDQUE2QixXQUE3QixFQUEwQ2tDLFlBQTFDLENBQXVEL0MsRUFBRSxDQUFDTyxLQUExRCxDQUFqQjtJQUNBLEtBQUtDLFNBQUwsQ0FBZXdDLE1BQWYsR0FBd0IsRUFBeEI7RUFDSCxDQWxFSTtFQW9FTDtFQUNBaEIsVUFyRUssd0JBcUVRO0lBQ1QsSUFBSSxFQUFFLEtBQUtjLFNBQVAsR0FBbUIsS0FBS0QsVUFBTCxDQUFnQkksTUFBdkMsRUFBK0M7TUFDM0MvQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBbUIsS0FBSzJCLFNBQXBDO01BQ0EsS0FBS0ksV0FBTCxDQUFpQixLQUFLTCxVQUFMLENBQWdCLEtBQUtDLFNBQXJCLENBQWpCLEVBRjJDLENBRzNDO0lBQ0gsQ0FKRCxNQUtLO01BQ0Q7TUFDQSxLQUFLSyxXQUFMO01BQ0EsS0FBS0wsU0FBTCxHQUFpQixDQUFDLENBQWxCO0lBQ0g7RUFDSixDQWhGSTtFQWtGTEksV0FsRkssdUJBa0ZPRSxRQWxGUCxFQWtGaUI7SUFBQTs7SUFDbEI7SUFDQSxJQUFJLENBQUMsS0FBS1QsT0FBVixFQUFtQjtJQUNuQixLQUFLQSxPQUFMLEdBQWUsS0FBZjtJQUVBLEtBQUtyQyxTQUFMLENBQWUwQyxNQUFmLEdBQXdCdEQsT0FBTyxDQUFDMEQsUUFBUSxDQUFDdEQsSUFBVixDQUFQLENBQXVCSCxJQUEvQyxDQUxrQixDQUtrQzs7SUFDcEQsS0FBS2EsU0FBTCxDQUFld0MsTUFBZixHQUF3QixFQUF4QjtJQUNBLEtBQUtOLE9BQUwsR0FBZVUsUUFBUSxDQUFDckQsT0FBeEIsQ0FQa0IsQ0FTbEI7O0lBQ0EsSUFBSSxLQUFLZ0IsT0FBTCxJQUFnQixLQUFLQyxPQUFMLElBQWMsR0FBbEMsRUFBdUM7TUFDbkN0QixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdFLEdBQVgsR0FBaUIsVUFBUXNDLE1BQU0sQ0FBQ0csWUFBZixHQUE0QixHQUE1QixHQUFnQ0gsTUFBTSxDQUFDTyxRQUF4RDtNQUNBdkIsT0FBTyxDQUFDQyxHQUFSLENBQVl6QixPQUFPLENBQUMwRCxRQUFRLENBQUN0RCxJQUFWLENBQVAsQ0FBdUJGLEdBQW5DO0lBQ0g7O0lBQ0RJLEVBQUUsQ0FBQ3FELFNBQUgsQ0FBYUMsSUFBYixDQUFrQjVELE9BQU8sQ0FBQzBELFFBQVEsQ0FBQ3RELElBQVYsQ0FBUCxDQUF1QkYsR0FBekMsRUFBOENJLEVBQUUsQ0FBQ3VELFdBQWpELEVBQThELFVBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtNQUM1RSxLQUFJLENBQUNyRCxTQUFMLENBQWVzRCxXQUFmLEdBQTZCRCxPQUE3QjtJQUNILENBRkQ7RUFHSCxDQW5HSTtFQXFHTEUsV0FyR0ssdUJBcUdPQyxFQXJHUCxFQXFHVztJQUNaLElBQUksQ0FBQyxLQUFLbEIsT0FBVixFQUFtQjtJQUNuQixLQUFLRSxFQUFMLElBQVdnQixFQUFYOztJQUVBLElBQUksS0FBS2hCLEVBQUwsSUFBVyxJQUFmLEVBQXFCO01BQ2pCLElBQUksS0FBS3BDLFNBQUwsQ0FBZXdDLE1BQWYsQ0FBc0JDLE1BQXRCLEdBQStCLEtBQUtQLE9BQUwsQ0FBYU8sTUFBaEQsRUFBd0Q7UUFDcEQsS0FBS3pDLFNBQUwsQ0FBZXdDLE1BQWYsR0FBd0IsS0FBS04sT0FBTCxDQUFhbUIsS0FBYixDQUFtQixDQUFuQixFQUFzQixLQUFLckQsU0FBTCxDQUFld0MsTUFBZixDQUFzQkMsTUFBdEIsR0FBK0IsQ0FBckQsQ0FBeEI7TUFDSCxDQUZELE1BRU87UUFDSCxLQUFLTixPQUFMLEdBQWUsSUFBZjtRQUNBLEtBQUtELE9BQUwsR0FBZSxJQUFmO01BQ0g7O01BQ0QsS0FBS0UsRUFBTCxHQUFVLENBQVY7SUFDSDs7SUFDRDFCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFxQixLQUFLWCxTQUFMLENBQWV3QyxNQUFoRDtFQUNILENBbkhJO0VBcUhMRyxXQXJISyx5QkFxSFM7SUFDVjtJQUNBLEtBQUsxQyxRQUFMLENBQWNLLE1BQWQsR0FBdUIsS0FBdkI7RUFDSCxDQXhISTtFQTBITGdELE1BMUhLLGtCQTBIRUYsRUExSEYsRUEwSE07SUFDUCxLQUFLN0MsT0FBTCxHQUFlLEtBQUtnQixhQUFMLEVBQWY7O0lBQ0EsSUFBSSxLQUFLaEIsT0FBTCxJQUFnQixLQUFLQyxPQUFMLElBQWdCa0IsTUFBTSxDQUFDTyxRQUEzQyxFQUFxRDtNQUNqRHZCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtILE9BQWpCO01BQ0EsS0FBS0EsT0FBTCxHQUFla0IsTUFBTSxDQUFDTyxRQUF0QjtNQUNBLElBQUkxQyxPQUFPLEdBQUcsS0FBS3FDLFdBQUwsRUFBZDtNQUNBbEIsT0FBTyxDQUFDQyxHQUFSLENBQVlwQixPQUFaO01BQ0EsS0FBSzhDLFVBQUwsR0FBa0I5QyxPQUFsQjtJQUNIOztJQUNELElBQUksS0FBS2dCLE9BQVQsRUFBa0I7TUFDZCxLQUFLNEMsV0FBTCxDQUFpQkMsRUFBakI7SUFDSCxDQUZELE1BR0s7TUFDRCxLQUFLbkQsUUFBTCxDQUFjSyxNQUFkLEdBQXVCLEtBQXZCO0lBQ0g7RUFDSixDQXpJSTtFQTJJTGlELFNBM0lLLHVCQTJJTztJQUNSL0QsRUFBRSxDQUFDb0IsV0FBSCxDQUFlNEMsR0FBZixDQUFtQmhFLEVBQUUsQ0FBQ3NCLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBc0QsS0FBS0MsU0FBM0QsRUFBc0UsSUFBdEU7RUFDSDtBQTdJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmxldCByb2xlTWFwID0ge1xuICAgIDE6IHtcbiAgICAgICAgbmFtZTogXCLlsI/nmb1cIixcbiAgICAgICAgdXJsOiBcInJvbGUvcGxheWVyXCJcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgICAgbmFtZTogXCLnurjmnaFcIixcbiAgICAgICAgdXJsOiBcIlwiXG4gICAgfSxcbn1cblxuXG52YXIgZGVmYXVsdENvbnRlbnRzID0gW1xuICAgIHsgcm9sZTogMiwgY29udGVudDogXCJXZWxjb21lIHRvIEZaVSxoaGhoaFwiIH0sXG4gICAgeyByb2xlOiAxLCBjb250ZW50OiBcIkhlbGxvLEknbSBIdWlrZXJcIiB9LCAgLy/lvZPliY3nmoR0ZXN0RGF0YVxuXTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGljU3ByaXRlOiBjYy5TcHJpdGUsXG4gICAgICAgIG5hbWVMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIHRleHRMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIG5vZGVCb2R5OiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9keVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlQm9keSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIik7XG4gICAgICAgIHRoaXMubm9kZUJvZHkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FuVGFsayA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ucGNOYW1lID0gJyAnO1xuICAgICAgICB0aGlzLmluaXREaWFsb2coKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaWFsb2cgc3VjY2Vzc1wiKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuaiAmJiB0aGlzLmNhblNob3dEaWFsb2coKSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlQm9keS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZXNzIGogdG8gdGFsa1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICBjYW5TaG93RGlhbG9nKCkge1xuICAgICAgICBpZiAoR2xvYmFsLml0ZW1UeXBlID09IFwibnBjc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8v5Yid5aeL5YyW5a+56K+d5YaF5a65XG4gICAgaW5pdENvbnRlbnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC5jdXJyZW50U2NlbmUpO1xuICAgICAgICB2YXIgY29udGVudCA9IERpYWxvZy5jb250ZW50c1t3aW5kb3cuR2xvYmFsLmN1cnJlbnRTY2VuZV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICAgICAgICBpZiAod2luZG93Lkdsb2JhbC5pdGVtVHlwZSAhPSAnbnBjcycgfHwgd2luZG93Lkdsb2JhbC5pdGVtTmFtZSA9PSAnICcpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29udGVudHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnRbd2luZG93Lkdsb2JhbC5pdGVtTmFtZV07XG4gICAgfSxcblxuXG4gICAgLy/liJ3lp4vljJblr7nor53ns7vnu59cbiAgICBpbml0RGlhbG9nKCkge1xuICAgICAgICB0aGlzLm5vd1RleHQgPSBudWxsO1xuICAgICAgICB0aGlzLnRleHRFbmQgPSB0cnVlO1xuICAgICAgICB0aGlzLnR0ID0gMDsgLy/mkq3mlL7nmoTmgLvml7bplb9cbiAgICAgICAgdGhpcy5jb250ZW50QXJyID0gZGVmYXVsdENvbnRlbnRzO1xuICAgICAgICB0aGlzLnRleHRJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLnRleHRMYWJlbCA9IHRoaXMubm9kZUJvZHkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5uYW1lTGFiZWwgPSB0aGlzLm5vZGVCb2R5LmdldENoaWxkQnlOYW1lKFwibmFtZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZyA9ICcnO1xuICAgIH0sXG5cbiAgICAvLyDmmL7npLrlr7nor53nmoTpgLvovpFcbiAgICBzaG93RGlhbG9nKCkge1xuICAgICAgICBpZiAoKyt0aGlzLnRleHRJbmRleCA8IHRoaXMuY29udGVudEFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBpbmRleDpcIiArIHRoaXMudGV4dEluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dERhdGEodGhpcy5jb250ZW50QXJyW3RoaXMudGV4dEluZGV4XSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnRBcnJbdGhpcy50ZXh0SW5kZXhdLmNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy/lhbPpl63lr7nor53moYZcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICAgICAgICAgIHRoaXMudGV4dEluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0VGV4dERhdGEodGV4dERhdGEpIHtcbiAgICAgICAgLy8g5LiA6KGM5bCa5pyq5pKt5pS+5a6MXG4gICAgICAgIGlmICghdGhpcy50ZXh0RW5kKSByZXR1cm47XG4gICAgICAgIHRoaXMudGV4dEVuZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IHJvbGVNYXBbdGV4dERhdGEucm9sZV0ubmFtZTsvL3RleHREYXRh5piv6KeS6Imy57yW5Y+3IOS7jnJvbGVNYXDkuK3ojrflj5bop5LoibLnmoTlkI3lrZdcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nID0gJyc7XG4gICAgICAgIHRoaXMubm93VGV4dCA9IHRleHREYXRhLmNvbnRlbnQ7XG5cbiAgICAgICAgLy8g5L+u5pS55aS05YOPXG4gICAgICAgIGlmICh0aGlzLmNhblRhbGsgJiYgdGhpcy5ucGNOYW1lIT0nICcpIHtcbiAgICAgICAgICAgIHJvbGVNYXBbMl0udXJsID0gXCJyb2xlL1wiK0dsb2JhbC5jdXJyZW50U2NlbmUrXCIvXCIrR2xvYmFsLml0ZW1OYW1lO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocm9sZU1hcFt0ZXh0RGF0YS5yb2xlXS51cmwpXG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocm9sZU1hcFt0ZXh0RGF0YS5yb2xlXS51cmwsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBpY1Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRleHR1cmU7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIHNob3dDb250ZXh0KGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5ub3dUZXh0KSByZXR1cm47XG4gICAgICAgIHRoaXMudHQgKz0gZHQ7XG5cbiAgICAgICAgaWYgKHRoaXMudHQgPj0gMC4wMikgeyAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoIDwgdGhpcy5ub3dUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZyA9IHRoaXMubm93VGV4dC5zbGljZSgwLCB0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dUZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyB0ZXh0TGFiZWw6IFwiICsgdGhpcy50ZXh0TGFiZWwuc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgY2xvc2VEaWFsb2coKSB7XG4gICAgICAgIC8vIOebtOaOpeS4jeaYvuekuuW9k+WJjeeahOiKgueCuVxuICAgICAgICB0aGlzLm5vZGVCb2R5LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5jYW5UYWxrID0gdGhpcy5jYW5TaG93RGlhbG9nKCk7XG4gICAgICAgIGlmICh0aGlzLmNhblRhbGsgJiYgdGhpcy5ucGNOYW1lICE9IEdsb2JhbC5pdGVtTmFtZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ucGNOYW1lKTtcbiAgICAgICAgICAgIHRoaXMubnBjTmFtZSA9IEdsb2JhbC5pdGVtTmFtZVxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmluaXRDb250ZW50KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudEFyciA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FuVGFsaykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGV4dChkdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVCb2R5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH0sXG5cbn0pO1xuIl19