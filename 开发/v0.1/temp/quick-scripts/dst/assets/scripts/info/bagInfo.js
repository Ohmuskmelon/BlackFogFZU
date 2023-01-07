
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/info/bagInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ae5eWWmX1NSKqd4amigdRl', 'bagInfo');
// scripts/info/bagInfo.js

"use strict";

window.TOOLS = [{
  name: '晾衣杆',
  // 道具名称，对应resources/tools中的图片名字
  intro: '用来移动移动衣服和背包',
  // 道具介绍，当玩家在背包中点击道具后，显示介绍
  picUrl: "tools/晾衣杆",
  // 动态加载路径
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '钥匙',
  intro: '可用来打开舍管的房间',
  picUrl: "tools/钥匙",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '蓝色宝石',
  intro: '不知道干什么',
  picUrl: "tools/蓝色宝石",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '手机',
  intro: '用来查看大图',
  picUrl: "tools/手机",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}];
window.toolMap = {
  "晾衣杆": 0,
  "钥匙": 1,
  "蓝色宝石": 2,
  "手机": 3
};
window.Bag = [];
window.InUse = '';
window.ToolUsed = false; // window.BagBackground = null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vYmFnSW5mby5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJUT09MUyIsIm5hbWUiLCJpbnRybyIsInBpY1VybCIsImNvbm5lY3QiLCJudW1PZkNvbiIsImluQmFnIiwiaXNBY3RpdmUiLCJ0b29sTWFwIiwiQmFnIiwiSW5Vc2UiLCJUb29sVXNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWUsQ0FDWDtFQUNJQyxJQUFJLEVBQUUsS0FEVjtFQUN3QztFQUNwQ0MsS0FBSyxFQUFFLGFBRlg7RUFFeUM7RUFDckNDLE1BQU0sRUFBRSxXQUhaO0VBR3dDO0VBQ3BDQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQURXLEVBVVg7RUFDSU4sSUFBSSxFQUFFLElBRFY7RUFFSUMsS0FBSyxFQUFFLFlBRlg7RUFHSUMsTUFBTSxFQUFFLFVBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0FWVyxFQW1CWDtFQUNJTixJQUFJLEVBQUUsTUFEVjtFQUVJQyxLQUFLLEVBQUUsUUFGWDtFQUdJQyxNQUFNLEVBQUUsWUFIWjtFQUlJQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQW5CVyxFQTRCWDtFQUNJTixJQUFJLEVBQUUsSUFEVjtFQUVJQyxLQUFLLEVBQUUsUUFGWDtFQUdJQyxNQUFNLEVBQUUsVUFIWjtFQUlJQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQTVCVyxDQUFmO0FBd0NBUixNQUFNLENBQUNTLE9BQVAsR0FBaUI7RUFDYixPQUFXLENBREU7RUFFYixNQUFZLENBRkM7RUFHYixRQUFVLENBSEc7RUFJYixNQUFZO0FBSkMsQ0FBakI7QUFNQVQsTUFBTSxDQUFDVSxHQUFQLEdBQWEsRUFBYjtBQUNBVixNQUFNLENBQUNXLEtBQVAsR0FBZSxFQUFmO0FBQ0FYLE1BQU0sQ0FBQ1ksUUFBUCxHQUFrQixLQUFsQixFQUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuVE9PTFMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAn5pm+6KGj5p2GJywgICAgICAgICAgICAgICAgICAgICAgICAvLyDpgZPlhbflkI3np7DvvIzlr7nlupRyZXNvdXJjZXMvdG9vbHPkuK3nmoTlm77niYflkI3lrZdcbiAgICAgICAgaW50cm86ICfnlKjmnaXnp7vliqjnp7vliqjooaPmnI3lkozog4zljIUnLCAgICAgICAgICAgICAgICAvLyDpgZPlhbfku4vnu43vvIzlvZPnjqnlrrblnKjog4zljIXkuK3ngrnlh7vpgZPlhbflkI7vvIzmmL7npLrku4vnu41cbiAgICAgICAgcGljVXJsOiBcInRvb2xzL+aZvuiho+adhlwiICwgICAgICAgICAgICAgICAvLyDliqjmgIHliqDovb3ot6/lvoRcbiAgICAgICAgY29ubmVjdDogbnVsbCxcbiAgICAgICAgbnVtT2ZDb246IDAsXG4gICAgICAgIGluQmFnOiBmYWxzZSxcbiAgICAgICAgaXNBY3RpdmUgOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ+mSpeWMmScsXG4gICAgICAgIGludHJvOiAn5Y+v55So5p2l5omT5byA6IiN566h55qE5oi/6Ze0JyxcbiAgICAgICAgcGljVXJsOiBcInRvb2xzL+mSpeWMmVwiICAsICAgXG4gICAgICAgIGNvbm5lY3Q6IG51bGwsXG4gICAgICAgIG51bU9mQ29uOiAwLFxuICAgICAgICBpbkJhZzogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlIDogZmFsc2UsICAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICfok53oibLlrp3nn7MnLFxuICAgICAgICBpbnRybzogJ+S4jeefpemBk+W5suS7gOS5iCcsXG4gICAgICAgIHBpY1VybDogXCJ0b29scy/ok53oibLlrp3nn7NcIiAgLCAgIFxuICAgICAgICBjb25uZWN0OiBudWxsLFxuICAgICAgICBudW1PZkNvbjogMCxcbiAgICAgICAgaW5CYWc6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlLCAgICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAn5omL5py6JyxcbiAgICAgICAgaW50cm86ICfnlKjmnaXmn6XnnIvlpKflm74nLFxuICAgICAgICBwaWNVcmw6IFwidG9vbHMv5omL5py6XCIsICAgXG4gICAgICAgIGNvbm5lY3Q6IG51bGwsXG4gICAgICAgIG51bU9mQ29uOiAwLFxuICAgICAgICBpbkJhZzogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlIDogZmFsc2UsICAgICAgICAgXG4gICAgfSxcbl07XG5cblx0XG53aW5kb3cudG9vbE1hcCA9IHtcbiAgICBcIuaZvuiho+adhlwiICAgIDogMCxcbiAgICBcIumSpeWMmVwiICAgICAgOiAxLFxuICAgIFwi6JOd6Imy5a6d55+zXCIgIDogMixcbiAgICBcIuaJi+aculwiICAgICAgOiAzLFxufVxud2luZG93LkJhZyA9IFtdO1xud2luZG93LkluVXNlID0gJyc7XG53aW5kb3cuVG9vbFVzZWQgPSBmYWxzZTtcbi8vIHdpbmRvdy5CYWdCYWNrZ3JvdW5kID0gbnVsbDtcbiJdfQ==