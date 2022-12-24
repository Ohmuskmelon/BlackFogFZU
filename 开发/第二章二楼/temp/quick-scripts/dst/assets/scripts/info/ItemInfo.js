
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
  "chp1_scene1": chp1_scene1_items,
  "chp2_scene1": chp2_scene1_items
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vSXRlbUluZm8uanMiXSwibmFtZXMiOlsid2luZG93IiwiY2hwMV9zY2VuZTFfaXRlbXMiLCJuYW1lIiwidXNlZCIsInRvb2wiLCJ1c2VkSW5mbyIsIm5vdFVzZWRJbmZvIiwiY2hwMl9zY2VuZTFfaXRlbXMiLCJJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxpQkFBUCxHQUEyQjtFQUN2QixrQkFDQTtJQUNJQyxJQUFJLEVBQUMsZ0JBRFQ7SUFFSUMsSUFBSSxFQUFDLEtBRlQ7SUFHSUMsSUFBSSxFQUFDLElBSFQ7SUFHa0I7SUFDZEMsUUFBUSxFQUFDLGVBSmI7SUFLSUMsV0FBVyxFQUFDO0VBTGhCLENBRnVCO0VBU3ZCLFFBQ0E7SUFDSUosSUFBSSxFQUFDLE1BRFQ7SUFFSUMsSUFBSSxFQUFDLEtBRlQ7SUFHSUMsSUFBSSxFQUFDLElBSFQ7SUFHa0I7SUFDZEMsUUFBUSxFQUFDLGVBSmI7SUFLSUMsV0FBVyxFQUFDO0VBTGhCO0FBVnVCLENBQTNCLEVBbUJBO0FBQ0E7O0FBQ0FOLE1BQU0sQ0FBQ08saUJBQVAsR0FBMkI7RUFDdkIsa0JBQ0E7SUFDSUwsSUFBSSxFQUFDLGdCQURUO0lBRUlDLElBQUksRUFBQyxLQUZUO0lBR0lDLElBQUksRUFBQyxJQUhUO0lBR2tCO0lBQ2RDLFFBQVEsRUFBQyxlQUpiO0lBS0lDLFdBQVcsRUFBQztFQUxoQjtBQUZ1QixDQUEzQjtBQVdBTixNQUFNLENBQUNRLEtBQVAsR0FBZTtFQUNYLGVBQWNQLGlCQURIO0VBRVgsZUFBY007QUFGSCxDQUFmIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuY2hwMV9zY2VuZTFfaXRlbXMgPSB7XG4gICAgXCJ3YXNoaW5nTWFjaGluZVwiOlxuICAgIHtcbiAgICAgICAgbmFtZTpcIndhc2hpbmdNYWNoaW5lXCIsXG4gICAgICAgIHVzZWQ6ZmFsc2UsXG4gICAgICAgIHRvb2w6XCLljbfovbRcIiwgICAgLy/lr7nlupTnmoTlupTor6Xkvb/nlKjnmoTlt6XlhbdcbiAgICAgICAgdXNlZEluZm86J+ivt+S9v+eUqOiDjOWMheS4reeahOW3peWFt+i/m+ihjOaTjeS9nCcsXG4gICAgICAgIG5vdFVzZWRJbmZvOlwi5rSX6KGj5py65bey57uP6KKr5L2/55So5LqGXCJcbiAgICB9LFxuICAgIFwibGFtcFwiOlxuICAgIHtcbiAgICAgICAgbmFtZTpcImxhbXBcIixcbiAgICAgICAgdXNlZDpmYWxzZSxcbiAgICAgICAgdG9vbDpcIuWNt+i9tFwiLCAgICAvL+WvueW6lOeahOW6lOivpeS9v+eUqOeahOW3peWFt1xuICAgICAgICB1c2VkSW5mbzon6K+35L2/55So6IOM5YyF5Lit55qE5bel5YW36L+b6KGM5pON5L2cJyxcbiAgICAgICAgbm90VXNlZEluZm86XCLmtJfooaPmnLrlt7Lnu4/ooqvkvb/nlKjkuoZcIlxuICAgIH1cbn1cblxuLy8g56ys5LqM56ug5Zy65pmv54mp5ZOBXG4vLyDnrKzkuoznq6Ag5Zy65pmvMSDnianlk4FcbndpbmRvdy5jaHAyX3NjZW5lMV9pdGVtcyA9IHtcbiAgICBcIndhc2hpbmdNYWNoaW5lXCI6XG4gICAge1xuICAgICAgICBuYW1lOlwid2FzaGluZ01hY2hpbmVcIixcbiAgICAgICAgdXNlZDpmYWxzZSxcbiAgICAgICAgdG9vbDpcIuWNt+i9tFwiLCAgICAvL+WvueW6lOeahOW6lOivpeS9v+eUqOeahOW3peWFt1xuICAgICAgICB1c2VkSW5mbzon6K+35L2/55So6IOM5YyF5Lit55qE5bel5YW36L+b6KGM5pON5L2cJyxcbiAgICAgICAgbm90VXNlZEluZm86XCLmtJfooaPmnLrlt7Lnu4/ooqvkvb/nlKjkuoZcIlxuICAgIH1cbn1cblxud2luZG93Lkl0ZW1zID0ge1xuICAgIFwiY2hwMV9zY2VuZTFcIjpjaHAxX3NjZW5lMV9pdGVtcyxcbiAgICBcImNocDJfc2NlbmUxXCI6Y2hwMl9zY2VuZTFfaXRlbXMsXG59XG4iXX0=