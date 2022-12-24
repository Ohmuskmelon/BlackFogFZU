
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
    name: "player",
    url: "role/player"
  },
  2: {
    name: "npc1",
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
    var content = Dialog.contents[Global.currentScene]; // console.log(content);

    if (Global.itemType != 'npcs' || Global.itemName == ' ') {
      return defaultContents;
    }

    return content[Global.itemName];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RpYWxvZy9kaWFsb2cgLSAwMDEuanMiXSwibmFtZXMiOlsicm9sZU1hcCIsIm5hbWUiLCJ1cmwiLCJkZWZhdWx0Q29udGVudHMiLCJyb2xlIiwiY29udGVudCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGljU3ByaXRlIiwiU3ByaXRlIiwibmFtZUxhYmVsIiwiTGFiZWwiLCJ0ZXh0TGFiZWwiLCJub2RlQm9keSIsIk5vZGUiLCJvbkxvYWQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJjYW5UYWxrIiwibnBjTmFtZSIsImluaXREaWFsb2ciLCJjb25zb2xlIiwibG9nIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImoiLCJjYW5TaG93RGlhbG9nIiwic2hvd0RpYWxvZyIsInN0YXJ0IiwiR2xvYmFsIiwiaXRlbVR5cGUiLCJpbml0Q29udGVudCIsImN1cnJlbnRTY2VuZSIsIkRpYWxvZyIsImNvbnRlbnRzIiwiaXRlbU5hbWUiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwiY29udGVudEFyciIsInRleHRJbmRleCIsImdldENvbXBvbmVudCIsInN0cmluZyIsImxlbmd0aCIsInNldFRleHREYXRhIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0YSIsInJlc291cmNlcyIsImxvYWQiLCJTcHJpdGVGcmFtZSIsImVyciIsInRleHR1cmUiLCJzcHJpdGVGcmFtZSIsInNob3dDb250ZXh0IiwiZHQiLCJzbGljZSIsInVwZGF0ZSIsIm9uRGVzdHJveSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJQSxPQUFPLEdBQUc7RUFDVixHQUFHO0lBQ0NDLElBQUksRUFBRSxR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RyxXQXJISyx5QkFxSFM7SUFDVjtJQUNBLEtBQUt6QyxRQUFMLENBQWNLLE1BQWQsR0FBdUIsS0FBdkI7RUFDSCxDQXhISTtFQTBITCtDLE1BMUhLLGtCQTBIRUYsRUExSEYsRUEwSE07SUFDUCxLQUFLNUMsT0FBTCxHQUFlLEtBQUtnQixhQUFMLEVBQWY7O0lBQ0EsSUFBSSxLQUFLaEIsT0FBTCxJQUFnQixLQUFLQyxPQUFMLElBQWdCa0IsTUFBTSxDQUFDTSxRQUEzQyxFQUFxRDtNQUNqRHRCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtILE9BQWpCO01BQ0EsS0FBS0EsT0FBTCxHQUFla0IsTUFBTSxDQUFDTSxRQUF0QjtNQUNBLElBQUl6QyxPQUFPLEdBQUcsS0FBS3FDLFdBQUwsRUFBZDtNQUNBbEIsT0FBTyxDQUFDQyxHQUFSLENBQVlwQixPQUFaO01BQ0EsS0FBSzZDLFVBQUwsR0FBa0I3QyxPQUFsQjtJQUNIOztJQUNELElBQUksS0FBS2dCLE9BQVQsRUFBa0I7TUFDZCxLQUFLMkMsV0FBTCxDQUFpQkMsRUFBakI7SUFDSCxDQUZELE1BR0s7TUFDRCxLQUFLbEQsUUFBTCxDQUFjSyxNQUFkLEdBQXVCLEtBQXZCO0lBQ0g7RUFDSixDQXpJSTtFQTJJTGdELFNBM0lLLHVCQTJJTztJQUNSOUQsRUFBRSxDQUFDb0IsV0FBSCxDQUFlMkMsR0FBZixDQUFtQi9ELEVBQUUsQ0FBQ3NCLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBc0QsS0FBS0MsU0FBM0QsRUFBc0UsSUFBdEU7RUFDSDtBQTdJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmxldCByb2xlTWFwID0ge1xuICAgIDE6IHtcbiAgICAgICAgbmFtZTogXCJwbGF5ZXJcIixcbiAgICAgICAgdXJsOiBcInJvbGUvcGxheWVyXCJcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgICAgbmFtZTogXCJucGMxXCIsXG4gICAgICAgIHVybDogXCJcIlxuICAgIH1cbn1cblxuXG52YXIgZGVmYXVsdENvbnRlbnRzID0gW1xuICAgIHsgcm9sZTogMiwgY29udGVudDogXCJXZWxjb21lIHRvIEZaVSxoaGhoaFwiIH0sXG4gICAgeyByb2xlOiAxLCBjb250ZW50OiBcIkhlbGxvLEknbSBIdWlrZXJcIiB9LCAgLy/lvZPliY3nmoR0ZXN0RGF0YVxuXTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGljU3ByaXRlOiBjYy5TcHJpdGUsXG4gICAgICAgIG5hbWVMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIHRleHRMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIG5vZGVCb2R5OiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9keVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlQm9keSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIik7XG4gICAgICAgIHRoaXMubm9kZUJvZHkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FuVGFsayA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ucGNOYW1lID0gJyAnO1xuICAgICAgICB0aGlzLmluaXREaWFsb2coKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaWFsb2cgc3VjY2Vzc1wiKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuaiAmJiB0aGlzLmNhblNob3dEaWFsb2coKSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlQm9keS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZXNzIGogdG8gdGFsa1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICBjYW5TaG93RGlhbG9nKCkge1xuICAgICAgICBpZiAoR2xvYmFsLml0ZW1UeXBlID09IFwibnBjc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8v5Yid5aeL5YyW5a+56K+d5YaF5a65XG4gICAgaW5pdENvbnRlbnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC5jdXJyZW50U2NlbmUpO1xuICAgICAgICB2YXIgY29udGVudCA9IERpYWxvZy5jb250ZW50c1tHbG9iYWwuY3VycmVudFNjZW5lXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudCk7XG4gICAgICAgIGlmIChHbG9iYWwuaXRlbVR5cGUgIT0gJ25wY3MnIHx8IEdsb2JhbC5pdGVtTmFtZSA9PSAnICcpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29udGVudHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnRbR2xvYmFsLml0ZW1OYW1lXTtcbiAgICB9LFxuXG5cbiAgICAvL+WIneWni+WMluWvueivneezu+e7n1xuICAgIGluaXREaWFsb2coKSB7XG4gICAgICAgIHRoaXMubm93VGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XG4gICAgICAgIHRoaXMudHQgPSAwOyAvL+aSreaUvueahOaAu+aXtumVv1xuICAgICAgICB0aGlzLmNvbnRlbnRBcnIgPSBkZWZhdWx0Q29udGVudHM7XG4gICAgICAgIHRoaXMudGV4dEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMudGV4dExhYmVsID0gdGhpcy5ub2RlQm9keS5nZXRDaGlsZEJ5TmFtZShcInRleHRMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLm5hbWVMYWJlbCA9IHRoaXMubm9kZUJvZHkuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nID0gJyc7XG4gICAgfSxcblxuICAgIC8vIOaYvuekuuWvueivneeahOmAu+i+kVxuICAgIHNob3dEaWFsb2coKSB7XG4gICAgICAgIGlmICgrK3RoaXMudGV4dEluZGV4IDwgdGhpcy5jb250ZW50QXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IGluZGV4OlwiICsgdGhpcy50ZXh0SW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLmNvbnRlbnRBcnJbdGhpcy50ZXh0SW5kZXhdKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udGVudEFyclt0aGlzLnRleHRJbmRleF0uY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL+WFs+mXreWvueivneahhlxuICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xuICAgICAgICAgICAgdGhpcy50ZXh0SW5kZXggPSAtMTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0YSkge1xuICAgICAgICAvLyDkuIDooYzlsJrmnKrmkq3mlL7lroxcbiAgICAgICAgaWYgKCF0aGlzLnRleHRFbmQpIHJldHVybjtcbiAgICAgICAgdGhpcy50ZXh0RW5kID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5uYW1lTGFiZWwuc3RyaW5nID0gcm9sZU1hcFt0ZXh0RGF0YS5yb2xlXS5uYW1lOy8vdGV4dERhdGHmmK/op5LoibLnvJblj7cg5LuOcm9sZU1hcOS4reiOt+WPluinkuiJsueahOWQjeWtl1xuICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmcgPSAnJztcbiAgICAgICAgdGhpcy5ub3dUZXh0ID0gdGV4dERhdGEuY29udGVudDtcblxuICAgICAgICAvLyDkv67mlLnlpLTlg49cbiAgICAgICAgaWYgKHRoaXMuY2FuVGFsayAmJiB0aGlzLm5wY05hbWUhPScgJykge1xuICAgICAgICAgICAgcm9sZU1hcFsyXS51cmwgPSBcInJvbGUvXCIrR2xvYmFsLmN1cnJlbnRTY2VuZStcIi9cIitHbG9iYWwuaXRlbU5hbWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb2xlTWFwW3RleHREYXRhLnJvbGVdLnVybClcbiAgICAgICAgfVxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChyb2xlTWFwW3RleHREYXRhLnJvbGVdLnVybCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGljU3ByaXRlLnNwcml0ZUZyYW1lID0gdGV4dHVyZTtcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgc2hvd0NvbnRleHQoZHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vd1RleHQpIHJldHVybjtcbiAgICAgICAgdGhpcy50dCArPSBkdDtcblxuICAgICAgICBpZiAodGhpcy50dCA+PSAwLjAyKSB7ICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGggPCB0aGlzLm5vd1RleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nID0gdGhpcy5ub3dUZXh0LnNsaWNlKDAsIHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50dCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIHRleHRMYWJlbDogXCIgKyB0aGlzLnRleHRMYWJlbC5zdHJpbmcpO1xuICAgIH0sXG5cbiAgICBjbG9zZURpYWxvZygpIHtcbiAgICAgICAgLy8g55u05o6l5LiN5pi+56S65b2T5YmN55qE6IqC54K5XG4gICAgICAgIHRoaXMubm9kZUJvZHkuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmNhblRhbGsgPSB0aGlzLmNhblNob3dEaWFsb2coKTtcbiAgICAgICAgaWYgKHRoaXMuY2FuVGFsayAmJiB0aGlzLm5wY05hbWUgIT0gR2xvYmFsLml0ZW1OYW1lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5wY05hbWUpO1xuICAgICAgICAgICAgdGhpcy5ucGNOYW1lID0gR2xvYmFsLml0ZW1OYW1lXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuaW5pdENvbnRlbnQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50QXJyID0gY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYW5UYWxrKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZXh0KGR0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZUJvZHkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfSxcblxufSk7XG4iXX0=