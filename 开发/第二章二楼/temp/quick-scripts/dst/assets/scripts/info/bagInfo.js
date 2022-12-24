
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
  name: '卷轴',
  // 道具名称，对应resources/tools中的图片名字
  intro: '这是一个卷轴',
  // 道具介绍，当玩家在背包中点击道具后，显示介绍
  picUrl: "tools/卷轴",
  // 动态加载路径
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '心经',
  intro: '欲练此功，必先自宫',
  picUrl: "tools/心经",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '火腿',
  intro: '来自金华',
  picUrl: 'tools/火腿',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '煎饺',
  intro: '挺好吃的',
  picUrl: 'tools/煎饺',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '烈酒',
  intro: '武松当年喝这个的话，可能过不了岗',
  picUrl: 'tools/烈酒',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '金钥匙',
  intro: '金色的要钥匙',
  picUrl: 'tools/金钥匙',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '银钥匙',
  intro: '银色的钥匙',
  picUrl: 'tools/银钥匙',
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}, {
  name: '黄石',
  intro: '来自黄石公园的石头叫做黄石',
  picUrl: "tools/黄石",
  connect: null,
  numOfCon: 0,
  inBag: false,
  isActive: false
}];
window.toolMap = {
  "卷轴": 0,
  "心经": 1,
  "火腿": 2,
  "煎饺": 3,
  "烈酒": 4,
  "金钥匙": 5,
  "银钥匙": 6,
  "黄石": 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vYmFnSW5mby5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJUT09MUyIsIm5hbWUiLCJpbnRybyIsInBpY1VybCIsImNvbm5lY3QiLCJudW1PZkNvbiIsImluQmFnIiwiaXNBY3RpdmUiLCJ0b29sTWFwIiwiQmFnIiwiSW5Vc2UiLCJUb29sVXNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWUsQ0FDWDtFQUNJQyxJQUFJLEVBQUUsSUFEVjtFQUN1QztFQUNuQ0MsS0FBSyxFQUFFLFFBRlg7RUFFb0M7RUFDaENDLE1BQU0sRUFBRSxVQUhaO0VBR3VDO0VBQ25DQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQURXLEVBVVg7RUFDSU4sSUFBSSxFQUFFLElBRFY7RUFFSUMsS0FBSyxFQUFFLFdBRlg7RUFHSUMsTUFBTSxFQUFFLFVBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0FWVyxFQW1CWDtFQUNJTixJQUFJLEVBQUUsSUFEVjtFQUVJQyxLQUFLLEVBQUUsTUFGWDtFQUdJQyxNQUFNLEVBQUUsVUFIWjtFQUlJQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQW5CVyxFQTRCWDtFQUNJTixJQUFJLEVBQUUsSUFEVjtFQUVJQyxLQUFLLEVBQUUsTUFGWDtFQUdJQyxNQUFNLEVBQUUsVUFIWjtFQUlJQyxPQUFPLEVBQUUsSUFKYjtFQUtJQyxRQUFRLEVBQUUsQ0FMZDtFQU1JQyxLQUFLLEVBQUUsS0FOWDtFQU9JQyxRQUFRLEVBQUc7QUFQZixDQTVCVyxFQXFDWDtFQUNJTixJQUFJLEVBQUUsSUFEVjtFQUVJQyxLQUFLLEVBQUUsa0JBRlg7RUFHSUMsTUFBTSxFQUFFLFVBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0FyQ1csRUE4Q1g7RUFDSU4sSUFBSSxFQUFFLEtBRFY7RUFFSUMsS0FBSyxFQUFFLFFBRlg7RUFHSUMsTUFBTSxFQUFFLFdBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0E5Q1csRUF1RFg7RUFDSU4sSUFBSSxFQUFFLEtBRFY7RUFFSUMsS0FBSyxFQUFFLE9BRlg7RUFHSUMsTUFBTSxFQUFFLFdBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0F2RFcsRUFnRVg7RUFDSU4sSUFBSSxFQUFFLElBRFY7RUFFSUMsS0FBSyxFQUFFLGVBRlg7RUFHSUMsTUFBTSxFQUFFLFVBSFo7RUFJSUMsT0FBTyxFQUFFLElBSmI7RUFLSUMsUUFBUSxFQUFFLENBTGQ7RUFNSUMsS0FBSyxFQUFFLEtBTlg7RUFPSUMsUUFBUSxFQUFHO0FBUGYsQ0FoRVcsQ0FBZjtBQTRFQVIsTUFBTSxDQUFDUyxPQUFQLEdBQWlCO0VBQ2IsTUFBTyxDQURNO0VBRWIsTUFBTyxDQUZNO0VBR2IsTUFBTSxDQUhPO0VBSWIsTUFBSyxDQUpRO0VBS2IsTUFBSyxDQUxRO0VBTWIsT0FBTSxDQU5PO0VBT2IsT0FBTSxDQVBPO0VBUWIsTUFBSztBQVJRLENBQWpCO0FBVUFULE1BQU0sQ0FBQ1UsR0FBUCxHQUFhLEVBQWI7QUFDQVYsTUFBTSxDQUFDVyxLQUFQLEdBQWUsRUFBZjtBQUNBWCxNQUFNLENBQUNZLFFBQVAsR0FBa0IsS0FBbEIsRUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LlRPT0xTID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ+WNt+i9tCcsICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YGT5YW35ZCN56ew77yM5a+55bqUcmVzb3VyY2VzL3Rvb2xz5Lit55qE5Zu+54mH5ZCN5a2XXG4gICAgICAgIGludHJvOiAn6L+Z5piv5LiA5Liq5Y236L20JywgICAgICAgICAgICAgICAgLy8g6YGT5YW35LuL57uN77yM5b2T546p5a625Zyo6IOM5YyF5Lit54K55Ye76YGT5YW35ZCO77yM5pi+56S65LuL57uNXG4gICAgICAgIHBpY1VybDogXCJ0b29scy/ljbfovbRcIiAsICAgICAgICAgICAgICAgLy8g5Yqo5oCB5Yqg6L296Lev5b6EXG4gICAgICAgIGNvbm5lY3Q6IG51bGwsXG4gICAgICAgIG51bU9mQ29uOiAwLFxuICAgICAgICBpbkJhZzogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlIDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICflv4Pnu48nLFxuICAgICAgICBpbnRybzogJ+assue7g+atpOWKn++8jOW/heWFiOiHquWuqycsXG4gICAgICAgIHBpY1VybDogXCJ0b29scy/lv4Pnu49cIiAgLCAgIFxuICAgICAgICBjb25uZWN0OiBudWxsLFxuICAgICAgICBudW1PZkNvbjogMCxcbiAgICAgICAgaW5CYWc6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlLCAgICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAn54Gr6IW/JyxcbiAgICAgICAgaW50cm86ICfmnaXoh6rph5HljY4nLFxuICAgICAgICBwaWNVcmw6ICd0b29scy/ngavohb8nICxcbiAgICAgICAgY29ubmVjdDogbnVsbCxcbiAgICAgICAgbnVtT2ZDb246IDAsXG4gICAgICAgIGluQmFnOiBmYWxzZSxcbiAgICAgICAgaXNBY3RpdmUgOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ+eFjumluicsXG4gICAgICAgIGludHJvOiAn5oy65aW95ZCD55qEJyxcbiAgICAgICAgcGljVXJsOiAndG9vbHMv54WO6aW6JyAsXG4gICAgICAgIGNvbm5lY3Q6IG51bGwsXG4gICAgICAgIG51bU9mQ29uOiAwLFxuICAgICAgICBpbkJhZzogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlIDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICfng4jphZInLFxuICAgICAgICBpbnRybzogJ+atpuadvuW9k+W5tOWWnei/meS4queahOivne+8jOWPr+iDvei/h+S4jeS6huWylycsXG4gICAgICAgIHBpY1VybDogJ3Rvb2xzL+eDiOmFkicgLFxuICAgICAgICBjb25uZWN0OiBudWxsLFxuICAgICAgICBudW1PZkNvbjogMCxcbiAgICAgICAgaW5CYWc6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAn6YeR6ZKl5YyZJyxcbiAgICAgICAgaW50cm86ICfph5HoibLnmoTopoHpkqXljJknLFxuICAgICAgICBwaWNVcmw6ICd0b29scy/ph5HpkqXljJknLFxuICAgICAgICBjb25uZWN0OiBudWxsLFxuICAgICAgICBudW1PZkNvbjogMCxcbiAgICAgICAgaW5CYWc6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAn6ZO26ZKl5YyZJyxcbiAgICAgICAgaW50cm86ICfpk7boibLnmoTpkqXljJknLFxuICAgICAgICBwaWNVcmw6ICd0b29scy/pk7bpkqXljJknLCBcbiAgICAgICAgY29ubmVjdDogbnVsbCxcbiAgICAgICAgbnVtT2ZDb246IDAsXG4gICAgICAgIGluQmFnOiBmYWxzZSxcbiAgICAgICAgaXNBY3RpdmUgOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ+m7hOefsycsXG4gICAgICAgIGludHJvOiAn5p2l6Ieq6buE55+z5YWs5Zut55qE55+z5aS05Y+r5YGa6buE55+zJyxcbiAgICAgICAgcGljVXJsOiBcInRvb2xzL+m7hOefs1wiICxcbiAgICAgICAgY29ubmVjdDogbnVsbCxcbiAgICAgICAgbnVtT2ZDb246IDAsXG4gICAgICAgIGluQmFnOiBmYWxzZSxcbiAgICAgICAgaXNBY3RpdmUgOiBmYWxzZSxcbiAgICB9XG5dO1xuXG5cdFxud2luZG93LnRvb2xNYXAgPSB7XG4gICAgXCLljbfovbRcIiA6IDAsXG4gICAgXCLlv4Pnu49cIiA6IDEsXG4gICAgXCLngavohb9cIjogMixcbiAgICBcIueFjumlulwiOjMsXG4gICAgXCLng4jphZJcIjo0LFxuICAgIFwi6YeR6ZKl5YyZXCI6NSxcbiAgICBcIumTtumSpeWMmVwiOjYsXG4gICAgXCLpu4Tnn7NcIjo3LFxufVxud2luZG93LkJhZyA9IFtdO1xud2luZG93LkluVXNlID0gJyc7XG53aW5kb3cuVG9vbFVzZWQgPSBmYWxzZTtcbi8vIHdpbmRvdy5CYWdCYWNrZ3JvdW5kID0gbnVsbDtcbiJdfQ==