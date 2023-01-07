
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/info/ItemInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63271iPQqpCrqbY48OPPyHX', 'ItemInfo');
// scripts/info/ItemInfo.js

"use strict";

window.chp1_scene1_items = {
  "washingMachine": {
    name: "washingMachine",
    used: false,
    tool: "卷轴",
    //对应的应该使用的工具
    usedInfo: '请使用背包中的工具进行操作',
    notUsedInfo: "洗衣机已经被使用了"
  },
  "lamp": {
    name: "lamp",
    used: false,
    tool: "卷轴",
    //对应的应该使用的工具
    usedInfo: '请使用背包中的工具进行操作',
    notUsedInfo: "洗衣机已经被使用了"
  }
};
var chp1_302_items = {
  "背包": {
    name: "背包",
    used: false,
    tool: "卷轴晾衣杆",
    //对应的应该使用的工具
    usedInfo: '请使用背包中的工具进行操作',
    notUsedInfo: "洗衣机已经被使用了"
  }
}; // 第一章 一楼大厅

var chp1_HallF1_items = {
  "F1宿管房门": {
    name: "F1宿管房门",
    used: false,
    tool: "钥匙",
    //对应的应该使用的工具
    usedInfo: '请使用钥匙打开宿管房间的门',
    notUsedInfo: "宿管房间的门已经打开"
  }
}; // 第二章场景物品
// 第二章 场景1 物品

window.chp2_scene1_items = {
  "washingMachine": {
    name: "washingMachine",
    used: false,
    tool: "卷轴",
    //对应的应该使用的工具
    usedInfo: '请使用背包中的工具进行操作',
    notUsedInfo: "洗衣机已经被使用了"
  }
};
window.Items = {
  "chp1_302": chp1_302_items,
  "chp1_一楼大厅": chp1_HallF1_items
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vSXRlbUluZm8uanMiXSwibmFtZXMiOlsid2luZG93IiwiY2hwMV9zY2VuZTFfaXRlbXMiLCJuYW1lIiwidXNlZCIsInRvb2wiLCJ1c2VkSW5mbyIsIm5vdFVzZWRJbmZvIiwiY2hwMV8zMDJfaXRlbXMiLCJjaHAxX0hhbGxGMV9pdGVtcyIsImNocDJfc2NlbmUxX2l0ZW1zIiwiSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsaUJBQVAsR0FBMkI7RUFDdkIsa0JBQ0E7SUFDSUMsSUFBSSxFQUFDLGdCQURUO0lBRUlDLElBQUksRUFBQyxLQUZUO0lBR0lDLElBQUksRUFBQyxJQUhUO0lBR2tCO0lBQ2RDLFFBQVEsRUFBQyxlQUpiO0lBS0lDLFdBQVcsRUFBQztFQUxoQixDQUZ1QjtFQVN2QixRQUNBO0lBQ0lKLElBQUksRUFBQyxNQURUO0lBRUlDLElBQUksRUFBQyxLQUZUO0lBR0lDLElBQUksRUFBQyxJQUhUO0lBR2tCO0lBQ2RDLFFBQVEsRUFBQyxlQUpiO0lBS0lDLFdBQVcsRUFBQztFQUxoQjtBQVZ1QixDQUEzQjtBQW1CQSxJQUFJQyxjQUFjLEdBQUc7RUFDakIsTUFDQTtJQUNJTCxJQUFJLEVBQUMsSUFEVDtJQUVJQyxJQUFJLEVBQUMsS0FGVDtJQUdJQyxJQUFJLEVBQUMsT0FIVDtJQUdxQjtJQUNqQkMsUUFBUSxFQUFDLGVBSmI7SUFLSUMsV0FBVyxFQUFDO0VBTGhCO0FBRmlCLENBQXJCLEVBWUE7O0FBQ0EsSUFBSUUsaUJBQWlCLEdBQUc7RUFDcEIsVUFDQTtJQUNJTixJQUFJLEVBQUMsUUFEVDtJQUVJQyxJQUFJLEVBQUMsS0FGVDtJQUdJQyxJQUFJLEVBQUMsSUFIVDtJQUdrQjtJQUNkQyxRQUFRLEVBQUMsZUFKYjtJQUtJQyxXQUFXLEVBQUM7RUFMaEI7QUFGb0IsQ0FBeEIsRUFVQTtBQUNBOztBQUNBTixNQUFNLENBQUNTLGlCQUFQLEdBQTJCO0VBQ3ZCLGtCQUNBO0lBQ0lQLElBQUksRUFBQyxnQkFEVDtJQUVJQyxJQUFJLEVBQUMsS0FGVDtJQUdJQyxJQUFJLEVBQUMsSUFIVDtJQUdrQjtJQUNkQyxRQUFRLEVBQUMsZUFKYjtJQUtJQyxXQUFXLEVBQUM7RUFMaEI7QUFGdUIsQ0FBM0I7QUFXQU4sTUFBTSxDQUFDVSxLQUFQLEdBQWU7RUFDWCxZQUFZSCxjQUREO0VBRVgsYUFBWUM7QUFGRCxDQUFmIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuY2hwMV9zY2VuZTFfaXRlbXMgPSB7XG4gICAgXCJ3YXNoaW5nTWFjaGluZVwiOlxuICAgIHtcbiAgICAgICAgbmFtZTpcIndhc2hpbmdNYWNoaW5lXCIsXG4gICAgICAgIHVzZWQ6ZmFsc2UsXG4gICAgICAgIHRvb2w6XCLljbfovbRcIiwgICAgLy/lr7nlupTnmoTlupTor6Xkvb/nlKjnmoTlt6XlhbdcbiAgICAgICAgdXNlZEluZm86J+ivt+S9v+eUqOiDjOWMheS4reeahOW3peWFt+i/m+ihjOaTjeS9nCcsXG4gICAgICAgIG5vdFVzZWRJbmZvOlwi5rSX6KGj5py65bey57uP6KKr5L2/55So5LqGXCJcbiAgICB9LFxuICAgIFwibGFtcFwiOlxuICAgIHtcbiAgICAgICAgbmFtZTpcImxhbXBcIixcbiAgICAgICAgdXNlZDpmYWxzZSxcbiAgICAgICAgdG9vbDpcIuWNt+i9tFwiLCAgICAvL+WvueW6lOeahOW6lOivpeS9v+eUqOeahOW3peWFt1xuICAgICAgICB1c2VkSW5mbzon6K+35L2/55So6IOM5YyF5Lit55qE5bel5YW36L+b6KGM5pON5L2cJyxcbiAgICAgICAgbm90VXNlZEluZm86XCLmtJfooaPmnLrlt7Lnu4/ooqvkvb/nlKjkuoZcIlxuICAgIH1cbn1cblxubGV0IGNocDFfMzAyX2l0ZW1zID0ge1xuICAgIFwi6IOM5YyFXCI6XG4gICAge1xuICAgICAgICBuYW1lOlwi6IOM5YyFXCIsXG4gICAgICAgIHVzZWQ6ZmFsc2UsXG4gICAgICAgIHRvb2w6XCLljbfovbTmmb7ooaPmnYZcIiwgICAgLy/lr7nlupTnmoTlupTor6Xkvb/nlKjnmoTlt6XlhbdcbiAgICAgICAgdXNlZEluZm86J+ivt+S9v+eUqOiDjOWMheS4reeahOW3peWFt+i/m+ihjOaTjeS9nCcsXG4gICAgICAgIG5vdFVzZWRJbmZvOlwi5rSX6KGj5py65bey57uP6KKr5L2/55So5LqGXCJcbiAgICB9LFxufVxuXG5cbi8vIOesrOS4gOeroCDkuIDmpbzlpKfljoVcbmxldCBjaHAxX0hhbGxGMV9pdGVtcyA9IHtcbiAgICBcIkYx5a6/566h5oi/6ZeoXCI6XG4gICAge1xuICAgICAgICBuYW1lOlwiRjHlrr/nrqHmiL/pl6hcIixcbiAgICAgICAgdXNlZDpmYWxzZSxcbiAgICAgICAgdG9vbDpcIumSpeWMmVwiLCAgICAvL+WvueW6lOeahOW6lOivpeS9v+eUqOeahOW3peWFt1xuICAgICAgICB1c2VkSW5mbzon6K+35L2/55So6ZKl5YyZ5omT5byA5a6/566h5oi/6Ze055qE6ZeoJyxcbiAgICAgICAgbm90VXNlZEluZm86XCLlrr/nrqHmiL/pl7TnmoTpl6jlt7Lnu4/miZPlvIBcIlxuICAgIH0sXG59XG4vLyDnrKzkuoznq6DlnLrmma/nianlk4Fcbi8vIOesrOS6jOeroCDlnLrmma8xIOeJqeWTgVxud2luZG93LmNocDJfc2NlbmUxX2l0ZW1zID0ge1xuICAgIFwid2FzaGluZ01hY2hpbmVcIjpcbiAgICB7XG4gICAgICAgIG5hbWU6XCJ3YXNoaW5nTWFjaGluZVwiLFxuICAgICAgICB1c2VkOmZhbHNlLFxuICAgICAgICB0b29sOlwi5Y236L20XCIsICAgIC8v5a+55bqU55qE5bqU6K+l5L2/55So55qE5bel5YW3XG4gICAgICAgIHVzZWRJbmZvOifor7fkvb/nlKjog4zljIXkuK3nmoTlt6Xlhbfov5vooYzmk43kvZwnLFxuICAgICAgICBub3RVc2VkSW5mbzpcIua0l+iho+acuuW3sue7j+iiq+S9v+eUqOS6hlwiXG4gICAgfVxufVxuXG53aW5kb3cuSXRlbXMgPSB7XG4gICAgXCJjaHAxXzMwMlwiOiBjaHAxXzMwMl9pdGVtcyxcbiAgICBcImNocDFf5LiA5qW85aSn5Y6FXCI6Y2hwMV9IYWxsRjFfaXRlbXMsXG59XG4iXX0=