
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_lock_302/closet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76dd1yUGTpPG6ZqkIbq+xsT', 'closet');
// scripts/game_chp1/cp1_lock_302/closet.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.lockOfClosetInCP1 = false;
var res1 = 0;
var res2 = 0;
var res3 = 0;
var res4 = 0;
var res = "";
cc.Class({
  "extends": cc.Component,
  properties: {
    sprite_Frame1: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame2: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame3: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame4: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame5: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame6: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame7: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame8: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame9: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_Frame0: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_FrameOpen: {
      "default": null,
      type: cc.SpriteFrame
    },
    guizi: {
      "default": null,
      type: cc.SpriteFrame
    },
    openState: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  closet1: function closet1() {
    var button1 = this.node.getComponent(cc.Button);

    switch (res1) {
      case 0:
        button1.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button1.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button1.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button1.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button1.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button1.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button1.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button1.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button1.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button1.normalSprite = this.sprite_Frame0;
        break;
    }

    res1++;

    if (res1 === 10) {
      res1 = 0;
    }
  },
  closet2: function closet2() {
    var button2 = this.node.getComponent(cc.Button);

    switch (res2) {
      case 0:
        button2.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button2.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button2.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button2.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button2.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button2.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button2.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button2.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button2.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button2.normalSprite = this.sprite_Frame0;
        break;
    }

    res2++;

    if (res2 === 10) {
      res2 = 0;
    }
  },
  closet3: function closet3() {
    var button3 = this.node.getComponent(cc.Button);

    switch (res3) {
      case 0:
        button3.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button3.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button3.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button3.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button3.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button3.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button3.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button3.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button3.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button3.normalSprite = this.sprite_Frame0;
        break;
    }

    res3++;

    if (res3 === 10) {
      res3 = 0;
    }
  },
  closet4: function closet4() {
    var button4 = this.node.getComponent(cc.Button);

    switch (res4) {
      case 0:
        button4.normalSprite = this.sprite_Frame1;
        break;

      case 1:
        button4.normalSprite = this.sprite_Frame2;
        break;

      case 2:
        button4.normalSprite = this.sprite_Frame3;
        break;

      case 3:
        button4.normalSprite = this.sprite_Frame4;
        break;

      case 4:
        button4.normalSprite = this.sprite_Frame5;
        break;

      case 5:
        button4.normalSprite = this.sprite_Frame6;
        break;

      case 6:
        button4.normalSprite = this.sprite_Frame7;
        break;

      case 7:
        button4.normalSprite = this.sprite_Frame8;
        break;

      case 8:
        button4.normalSprite = this.sprite_Frame9;
        break;

      case 9:
        button4.normalSprite = this.sprite_Frame0;
        break;
    }

    res4++;

    if (res4 === 10) {
      res4 = 0;
    }
  },
  closetJudge: function closetJudge() {
    res = '' + res1 + res2 + res3 + res4;
    cc.log(res);

    if (res === "1024") {
      var closet = this.node.parent.getComponent(cc.Sprite);
      cc.log(closet);
      cc.log(this.node.sprite_FrameOpen);
      closet.spriteFrame = this.sprite_FrameOpen;
      cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = false;
      cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = false;
      cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = false;
      cc.find("Canvas/柜子大图/柜子+锁关/closet/closet1").active = false;
      cc.find("Canvas/柜子大图/柜子+锁关/body_柜子开").active = true; //cc.find("Canvas/柜子大图/柜子+锁关/body_柜子关").active =false;

      cc.log("success");
      window.lockOfClosetInCP1 = true;
    }
  },
  onLoad: function onLoad() {
    res1 = 0;
    res2 = 0;
    res3 = 0;
    res4 = 0;
    res = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfbG9ja18zMDIvY2xvc2V0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImxvY2tPZkNsb3NldEluQ1AxIiwicmVzMSIsInJlczIiLCJyZXMzIiwicmVzNCIsInJlcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3ByaXRlX0ZyYW1lMSIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInNwcml0ZV9GcmFtZTIiLCJzcHJpdGVfRnJhbWUzIiwic3ByaXRlX0ZyYW1lNCIsInNwcml0ZV9GcmFtZTUiLCJzcHJpdGVfRnJhbWU2Iiwic3ByaXRlX0ZyYW1lNyIsInNwcml0ZV9GcmFtZTgiLCJzcHJpdGVfRnJhbWU5Iiwic3ByaXRlX0ZyYW1lMCIsInNwcml0ZV9GcmFtZU9wZW4iLCJndWl6aSIsIm9wZW5TdGF0ZSIsIk5vZGUiLCJjbG9zZXQxIiwiYnV0dG9uMSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJub3JtYWxTcHJpdGUiLCJjbG9zZXQyIiwiYnV0dG9uMiIsImNsb3NldDMiLCJidXR0b24zIiwiY2xvc2V0NCIsImJ1dHRvbjQiLCJjbG9zZXRKdWRnZSIsImxvZyIsImNsb3NldCIsInBhcmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiZmluZCIsImFjdGl2ZSIsIm9uTG9hZCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLGlCQUFQLEdBQTJCLEtBQTNCO0FBQ0EsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBWSxJQUFJQyxJQUFJLEdBQUUsQ0FBVjtBQUFhLElBQUlDLElBQUksR0FBRSxDQUFWO0FBQWEsSUFBSUMsSUFBSSxHQUFFLENBQVY7QUFBWSxJQUFJQyxHQUFHLEdBQUUsRUFBVDtBQUNsREMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLGFBQWEsRUFBRTtNQUNYLFdBQVUsSUFEQztNQUVYQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGRSxDQURQO0lBS1JDLGFBQWEsRUFBRTtNQUNYLFdBQVUsSUFEQztNQUVYRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGRSxDQUxQO0lBU1JFLGFBQWEsRUFBRTtNQUNYLFdBQVUsSUFEQztNQUVYSCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGRSxDQVRQO0lBYVJHLGFBQWEsRUFBRTtNQUNYLFdBQVUsSUFEQztNQUVYSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGRSxDQWJQO0lBZ0JOSSxhQUFhLEVBQUU7TUFDYixXQUFVLElBREc7TUFFYkwsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkksQ0FoQlQ7SUFvQlJLLGFBQWEsRUFBRTtNQUNYLFdBQVUsSUFEQztNQUVYTixJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGRSxDQXBCUDtJQXVCTk0sYUFBYSxFQUFFO01BQ2IsV0FBVSxJQURHO01BRWJQLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZJLENBdkJUO0lBMkJSTyxhQUFhLEVBQUU7TUFDWCxXQUFVLElBREM7TUFFWFIsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkUsQ0EzQlA7SUE4Qk5RLGFBQWEsRUFBRTtNQUNiLFdBQVUsSUFERztNQUViVCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGSSxDQTlCVDtJQWtDUlMsYUFBYSxFQUFFO01BQ1gsV0FBVSxJQURDO01BRVhWLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZFLENBbENQO0lBc0NSVSxnQkFBZ0IsRUFBRTtNQUNkLFdBQVUsSUFESTtNQUVkWCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGSyxDQXRDVjtJQTBDUlcsS0FBSyxFQUFDO01BQ0YsV0FBVSxJQURSO01BRUZaLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZQLENBMUNFO0lBOENSWSxTQUFTLEVBQUNsQixFQUFFLENBQUNtQjtFQTlDTCxDQUhQO0VBb0RMO0VBQ0FDLE9BckRLLHFCQXFESTtJQUNMLElBQUlDLE9BQU8sR0FBRSxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJ2QixFQUFFLENBQUN3QixNQUExQixDQUFiOztJQUVBLFFBQVE3QixJQUFSO01BQ0ksS0FBSyxDQUFMO1FBQVMwQixPQUFPLENBQUNJLFlBQVIsR0FBdUIsS0FBS3JCLGFBQTVCO1FBQTBDOztNQUNuRCxLQUFLLENBQUw7UUFBU2lCLE9BQU8sQ0FBQ0ksWUFBUixHQUF1QixLQUFLbEIsYUFBNUI7UUFBMEM7O01BQ25ELEtBQUssQ0FBTDtRQUFRYyxPQUFPLENBQUNJLFlBQVIsR0FBdUIsS0FBS2pCLGFBQTVCO1FBQTBDOztNQUNsRCxLQUFLLENBQUw7UUFBUWEsT0FBTyxDQUFDSSxZQUFSLEdBQXVCLEtBQUtoQixhQUE1QjtRQUEwQzs7TUFDbEQsS0FBSyxDQUFMO1FBQVNZLE9BQU8sQ0FBQ0ksWUFBUixHQUF1QixLQUFLZixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVFXLE9BQU8sQ0FBQ0ksWUFBUixHQUF1QixLQUFLZCxhQUE1QjtRQUEwQzs7TUFDbEQsS0FBSyxDQUFMO1FBQVFVLE9BQU8sQ0FBQ0ksWUFBUixHQUF1QixLQUFLYixhQUE1QjtRQUEwQzs7TUFDbEQsS0FBSyxDQUFMO1FBQVFTLE9BQU8sQ0FBQ0ksWUFBUixHQUF1QixLQUFLWixhQUE1QjtRQUEwQzs7TUFDbEQsS0FBSyxDQUFMO1FBQVFRLE9BQU8sQ0FBQ0ksWUFBUixHQUF1QixLQUFLWCxhQUE1QjtRQUEwQzs7TUFDbEQsS0FBSyxDQUFMO1FBQVFPLE9BQU8sQ0FBQ0ksWUFBUixHQUF1QixLQUFLVixhQUE1QjtRQUEwQztJQVZ0RDs7SUFXQ3BCLElBQUk7O0lBQ0wsSUFBR0EsSUFBSSxLQUFHLEVBQVYsRUFBYTtNQUNUQSxJQUFJLEdBQUMsQ0FBTDtJQUNIO0VBQ0osQ0F2RUk7RUF3RUwrQixPQXhFSyxxQkF3RUk7SUFDTCxJQUFJQyxPQUFPLEdBQUUsS0FBS0wsSUFBTCxDQUFVQyxZQUFWLENBQXVCdkIsRUFBRSxDQUFDd0IsTUFBMUIsQ0FBYjs7SUFDQSxRQUFRNUIsSUFBUjtNQUNJLEtBQUssQ0FBTDtRQUFTK0IsT0FBTyxDQUFDRixZQUFSLEdBQXVCLEtBQUtyQixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVN1QixPQUFPLENBQUNGLFlBQVIsR0FBdUIsS0FBS2xCLGFBQTVCO1FBQTBDOztNQUNuRCxLQUFLLENBQUw7UUFBU29CLE9BQU8sQ0FBQ0YsWUFBUixHQUF1QixLQUFLakIsYUFBNUI7UUFBMEM7O01BQ25ELEtBQUssQ0FBTDtRQUFTbUIsT0FBTyxDQUFDRixZQUFSLEdBQXVCLEtBQUtoQixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVNrQixPQUFPLENBQUNGLFlBQVIsR0FBdUIsS0FBS2YsYUFBNUI7UUFBMEM7O01BQ25ELEtBQUssQ0FBTDtRQUFTaUIsT0FBTyxDQUFDRixZQUFSLEdBQXVCLEtBQUtkLGFBQTVCO1FBQTBDOztNQUNuRCxLQUFLLENBQUw7UUFBU2dCLE9BQU8sQ0FBQ0YsWUFBUixHQUF1QixLQUFLYixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVNlLE9BQU8sQ0FBQ0YsWUFBUixHQUF1QixLQUFLWixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVNjLE9BQU8sQ0FBQ0YsWUFBUixHQUF1QixLQUFLWCxhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVNhLE9BQU8sQ0FBQ0YsWUFBUixHQUF1QixLQUFLVixhQUE1QjtRQUEwQztJQVZ2RDs7SUFXQ25CLElBQUk7O0lBQ0wsSUFBR0EsSUFBSSxLQUFHLEVBQVYsRUFBYTtNQUNUQSxJQUFJLEdBQUMsQ0FBTDtJQUNIO0VBQ0osQ0F6Rkk7RUEwRkxnQyxPQTFGSyxxQkEwRkk7SUFDTCxJQUFJQyxPQUFPLEdBQUUsS0FBS1AsSUFBTCxDQUFVQyxZQUFWLENBQXVCdkIsRUFBRSxDQUFDd0IsTUFBMUIsQ0FBYjs7SUFDQSxRQUFRM0IsSUFBUjtNQUNJLEtBQUssQ0FBTDtRQUFTZ0MsT0FBTyxDQUFDSixZQUFSLEdBQXVCLEtBQUtyQixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVN5QixPQUFPLENBQUNKLFlBQVIsR0FBdUIsS0FBS2xCLGFBQTVCO1FBQTBDOztNQUNuRCxLQUFLLENBQUw7UUFBU3NCLE9BQU8sQ0FBQ0osWUFBUixHQUF1QixLQUFLakIsYUFBNUI7UUFBMEM7O01BQ25ELEtBQUssQ0FBTDtRQUFTcUIsT0FBTyxDQUFDSixZQUFSLEdBQXVCLEtBQUtoQixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVNvQixPQUFPLENBQUNKLFlBQVIsR0FBdUIsS0FBS2YsYUFBNUI7UUFBMEM7O01BQ25ELEtBQUssQ0FBTDtRQUFTbUIsT0FBTyxDQUFDSixZQUFSLEdBQXVCLEtBQUtkLGFBQTVCO1FBQTBDOztNQUNuRCxLQUFLLENBQUw7UUFBU2tCLE9BQU8sQ0FBQ0osWUFBUixHQUF1QixLQUFLYixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVNpQixPQUFPLENBQUNKLFlBQVIsR0FBdUIsS0FBS1osYUFBNUI7UUFBMEM7O01BQ25ELEtBQUssQ0FBTDtRQUFTZ0IsT0FBTyxDQUFDSixZQUFSLEdBQXVCLEtBQUtYLGFBQTVCO1FBQTBDOztNQUNuRCxLQUFLLENBQUw7UUFBU2UsT0FBTyxDQUFDSixZQUFSLEdBQXVCLEtBQUtWLGFBQTVCO1FBQTBDO0lBVnZEOztJQVdDbEIsSUFBSTs7SUFDTCxJQUFHQSxJQUFJLEtBQUcsRUFBVixFQUFhO01BQ1RBLElBQUksR0FBQyxDQUFMO0lBQ0g7RUFDSixDQTNHSTtFQTRHTGlDLE9BNUdLLHFCQTRHSTtJQUNMLElBQUlDLE9BQU8sR0FBRSxLQUFLVCxJQUFMLENBQVVDLFlBQVYsQ0FBdUJ2QixFQUFFLENBQUN3QixNQUExQixDQUFiOztJQUNBLFFBQVExQixJQUFSO01BQ0ksS0FBSyxDQUFMO1FBQVNpQyxPQUFPLENBQUNOLFlBQVIsR0FBdUIsS0FBS3JCLGFBQTVCO1FBQTBDOztNQUNuRCxLQUFLLENBQUw7UUFBUzJCLE9BQU8sQ0FBQ04sWUFBUixHQUF1QixLQUFLbEIsYUFBNUI7UUFBMEM7O01BQ25ELEtBQUssQ0FBTDtRQUFTd0IsT0FBTyxDQUFDTixZQUFSLEdBQXVCLEtBQUtqQixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVN1QixPQUFPLENBQUNOLFlBQVIsR0FBdUIsS0FBS2hCLGFBQTVCO1FBQTBDOztNQUNuRCxLQUFLLENBQUw7UUFBU3NCLE9BQU8sQ0FBQ04sWUFBUixHQUF1QixLQUFLZixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVNxQixPQUFPLENBQUNOLFlBQVIsR0FBdUIsS0FBS2QsYUFBNUI7UUFBMEM7O01BQ25ELEtBQUssQ0FBTDtRQUFTb0IsT0FBTyxDQUFDTixZQUFSLEdBQXVCLEtBQUtiLGFBQTVCO1FBQTBDOztNQUNuRCxLQUFLLENBQUw7UUFBU21CLE9BQU8sQ0FBQ04sWUFBUixHQUF1QixLQUFLWixhQUE1QjtRQUEwQzs7TUFDbkQsS0FBSyxDQUFMO1FBQVNrQixPQUFPLENBQUNOLFlBQVIsR0FBdUIsS0FBS1gsYUFBNUI7UUFBMEM7O01BQ25ELEtBQUssQ0FBTDtRQUFTaUIsT0FBTyxDQUFDTixZQUFSLEdBQXVCLEtBQUtWLGFBQTVCO1FBQTBDO0lBVnZEOztJQVdDakIsSUFBSTs7SUFDTCxJQUFHQSxJQUFJLEtBQUcsRUFBVixFQUFhO01BQ1RBLElBQUksR0FBQyxDQUFMO0lBQ0g7RUFDSixDQTdISTtFQThITGtDLFdBOUhLLHlCQThIUTtJQUNUakMsR0FBRyxHQUFFLEtBQUdKLElBQUgsR0FBUUMsSUFBUixHQUFhQyxJQUFiLEdBQWtCQyxJQUF2QjtJQUNBRSxFQUFFLENBQUNpQyxHQUFILENBQU9sQyxHQUFQOztJQUNBLElBQUdBLEdBQUcsS0FBRyxNQUFULEVBQWdCO01BQ1osSUFBSW1DLE1BQU0sR0FBRSxLQUFLWixJQUFMLENBQVVhLE1BQVYsQ0FBaUJaLFlBQWpCLENBQThCdkIsRUFBRSxDQUFDb0MsTUFBakMsQ0FBWjtNQUNBcEMsRUFBRSxDQUFDaUMsR0FBSCxDQUFPQyxNQUFQO01BQ0FsQyxFQUFFLENBQUNpQyxHQUFILENBQU8sS0FBS1gsSUFBTCxDQUFVTixnQkFBakI7TUFDQWtCLE1BQU0sQ0FBQ0csV0FBUCxHQUFxQixLQUFLckIsZ0JBQTFCO01BQ0FoQixFQUFFLENBQUNzQyxJQUFILENBQVEsa0NBQVIsRUFBNENDLE1BQTVDLEdBQW9ELEtBQXBEO01BQ0F2QyxFQUFFLENBQUNzQyxJQUFILENBQVEsa0NBQVIsRUFBNENDLE1BQTVDLEdBQW9ELEtBQXBEO01BQ0F2QyxFQUFFLENBQUNzQyxJQUFILENBQVEsa0NBQVIsRUFBNENDLE1BQTVDLEdBQW9ELEtBQXBEO01BQ0F2QyxFQUFFLENBQUNzQyxJQUFILENBQVEsa0NBQVIsRUFBNENDLE1BQTVDLEdBQW9ELEtBQXBEO01BQ0F2QyxFQUFFLENBQUNzQyxJQUFILENBQVEsNEJBQVIsRUFBc0NDLE1BQXRDLEdBQThDLElBQTlDLENBVFksQ0FVWjs7TUFDQXZDLEVBQUUsQ0FBQ2lDLEdBQUgsQ0FBTyxTQUFQO01BQ0F4QyxNQUFNLENBQUNDLGlCQUFQLEdBQTJCLElBQTNCO0lBQ0g7RUFDSixDQS9JSTtFQWdKTDhDLE1BaEpLLG9CQWdKSztJQUNON0MsSUFBSSxHQUFHLENBQVA7SUFDQUMsSUFBSSxHQUFHLENBQVA7SUFDQUMsSUFBSSxHQUFHLENBQVA7SUFDQUMsSUFBSSxHQUFHLENBQVA7SUFDQUMsR0FBRyxHQUFHLEVBQU47RUFDSCxDQXRKSTtFQXdKTDBDLEtBeEpLLG1CQXdKSSxDQUVSLENBMUpJLENBNEpMOztBQTVKSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxud2luZG93LmxvY2tPZkNsb3NldEluQ1AxID0gZmFsc2U7XG5sZXQgcmVzMSA9MDtsZXQgcmVzMiA9MDsgbGV0IHJlczMgPTAgO2xldCByZXM0ID0wO2xldCByZXMgPVwiXCI7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcHJpdGVfRnJhbWUxIDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZTIgOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgc3ByaXRlX0ZyYW1lMyA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBzcHJpdGVfRnJhbWU0IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sc3ByaXRlX0ZyYW1lNSA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBzcHJpdGVfRnJhbWU2IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sc3ByaXRlX0ZyYW1lNyA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBzcHJpdGVfRnJhbWU4IDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sc3ByaXRlX0ZyYW1lOSA6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBzcHJpdGVfRnJhbWUwIDp7XG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgICAgIHR5cGUgOmNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZV9GcmFtZU9wZW4gOntcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgdHlwZSA6Y2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgZ3Vpemk6e1xuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXG4gICAgICAgICAgICB0eXBlIDpjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBvcGVuU3RhdGU6Y2MuTm9kZSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgY2xvc2V0MSgpe1xuICAgICAgICBsZXQgYnV0dG9uMSA9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXG4gICAgICAgIHN3aXRjaCAocmVzMSkge1xuICAgICAgICAgICAgY2FzZSAwIDogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTE7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEgOiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMjticmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTM7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU0O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA0IDogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTU7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU2O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNzticmVhaztcbiAgICAgICAgICAgIGNhc2UgNzogYnV0dG9uMS5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTg7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6IGJ1dHRvbjEubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU5O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OiBidXR0b24xLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMDticmVhaztcbiAgICAgICAgfXJlczEgKys7XG4gICAgICAgIGlmKHJlczE9PT0xMCl7XG4gICAgICAgICAgICByZXMxPTA7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NldDIoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjIgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgc3dpdGNoIChyZXMyKSB7XG4gICAgICAgICAgICBjYXNlIDAgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMTticmVhaztcbiAgICAgICAgICAgIGNhc2UgMSA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAyIDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTM7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNDticmVhaztcbiAgICAgICAgICAgIGNhc2UgNCA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU1O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA1IDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTY7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNzticmVhaztcbiAgICAgICAgICAgIGNhc2UgNyA6IGJ1dHRvbjIubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU4O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA4IDogYnV0dG9uMi5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkgOiBidXR0b24yLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMDticmVhaztcbiAgICAgICAgfXJlczIgKys7XG4gICAgICAgIGlmKHJlczI9PT0xMCl7XG4gICAgICAgICAgICByZXMyPTA7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NldDMoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjMgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgc3dpdGNoIChyZXMzKSB7XG4gICAgICAgICAgICBjYXNlIDAgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMTticmVhaztcbiAgICAgICAgICAgIGNhc2UgMSA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAyIDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTM7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNDticmVhaztcbiAgICAgICAgICAgIGNhc2UgNCA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU1O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA1IDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTY7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNzticmVhaztcbiAgICAgICAgICAgIGNhc2UgNyA6IGJ1dHRvbjMubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU4O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA4IDogYnV0dG9uMy5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkgOiBidXR0b24zLm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMDticmVhaztcbiAgICAgICAgfXJlczMgKys7XG4gICAgICAgIGlmKHJlczM9PT0xMCl7XG4gICAgICAgICAgICByZXMzPTA7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NldDQoKXtcbiAgICAgICAgbGV0IGJ1dHRvbjQgPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgc3dpdGNoIChyZXM0KSB7XG4gICAgICAgICAgICBjYXNlIDAgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMTticmVhaztcbiAgICAgICAgICAgIGNhc2UgMSA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWUyO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSAyIDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTM7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNDticmVhaztcbiAgICAgICAgICAgIGNhc2UgNCA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU1O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA1IDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTY7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lNzticmVhaztcbiAgICAgICAgICAgIGNhc2UgNyA6IGJ1dHRvbjQubm9ybWFsU3ByaXRlID0gdGhpcy5zcHJpdGVfRnJhbWU4O2JyZWFrO1xuICAgICAgICAgICAgY2FzZSA4IDogYnV0dG9uNC5ub3JtYWxTcHJpdGUgPSB0aGlzLnNwcml0ZV9GcmFtZTk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkgOiBidXR0b240Lm5vcm1hbFNwcml0ZSA9IHRoaXMuc3ByaXRlX0ZyYW1lMDticmVhaztcbiAgICAgICAgfXJlczQgKys7XG4gICAgICAgIGlmKHJlczQ9PT0xMCl7XG4gICAgICAgICAgICByZXM0PTA7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NldEp1ZGdlKCl7XG4gICAgICAgIHJlcyA9JycrcmVzMStyZXMyK3JlczMrcmVzNDtcbiAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgICAgIGlmKHJlcz09PVwiMTAyNFwiKXtcbiAgICAgICAgICAgIGxldCBjbG9zZXQgPXRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBjYy5sb2coY2xvc2V0KVxuICAgICAgICAgICAgY2MubG9nKHRoaXMubm9kZS5zcHJpdGVfRnJhbWVPcGVuKVxuICAgICAgICAgICAgY2xvc2V0LnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfRnJhbWVPcGVuO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy/mn5zlrZDlpKflm74v5p+c5a2QK+mUgeWFsy9jbG9zZXQvY2xvc2V0MVwiKS5hY3RpdmUgPWZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy/mn5zlrZDlpKflm74v5p+c5a2QK+mUgeWFsy9jbG9zZXQvY2xvc2V0MVwiKS5hY3RpdmUgPWZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy/mn5zlrZDlpKflm74v5p+c5a2QK+mUgeWFsy9jbG9zZXQvY2xvc2V0MVwiKS5hY3RpdmUgPWZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy/mn5zlrZDlpKflm74v5p+c5a2QK+mUgeWFsy9jbG9zZXQvY2xvc2V0MVwiKS5hY3RpdmUgPWZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy/mn5zlrZDlpKflm74v5p+c5a2QK+mUgeWFsy9ib2R5X+afnOWtkOW8gFwiKS5hY3RpdmUgPXRydWU7XG4gICAgICAgICAgICAvL2NjLmZpbmQoXCJDYW52YXMv5p+c5a2Q5aSn5Zu+L+afnOWtkCvplIHlhbMvYm9keV/mn5zlrZDlhbNcIikuYWN0aXZlID1mYWxzZTtcbiAgICAgICAgICAgIGNjLmxvZyhcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB3aW5kb3cubG9ja09mQ2xvc2V0SW5DUDEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICByZXMxID0gMDtcbiAgICAgICAgcmVzMiA9IDA7XG4gICAgICAgIHJlczMgPSAwO1xuICAgICAgICByZXM0ID0gMDtcbiAgICAgICAgcmVzID0gXCJcIjtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=