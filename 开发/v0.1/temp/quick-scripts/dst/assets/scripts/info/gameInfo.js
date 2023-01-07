
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/info/gameInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4236dFiO7NIrrShdSdN3EZc', 'gameInfo');
// scripts/info/gameInfo.js

"use strict";

// 第一章游戏索引
window.games = {
  // 游戏索引格式 小游戏场景:原场景
  // 小游戏场景格式: e.g: "chp1_scene1_1_game1" 表示 chapter1的scene1的第1号游戏，名字叫做game1
  // 原场景格式: 章节号_场景名
  // 序章游戏
  chp1_序章电闸: "chp1_序章",
  // 第一章游戏索引
  chp1_302_1_lamp: "chp1_302",
  chp1_302_2_lock: "chp1_302",
  chp1_302_柜子大图: "chp1_302",
  chp1_302_数字大图: "chp1_302",
  chp1_301_大图数字: "chp1_301",
  chp1_301_1_cloth: "chp1_301",
  chp1_zoulang_1_lock: "chp1_zoulangF1",
  // 舍管房间
  chp1_舍管房间石头大图: "chp1_舍管房间",
  // 三楼走廊解锁场景
  chp1_三楼走廊解锁: "chp1_三楼走廊",
  chp1_203_1_cup: "chp1_203",
  chp1_203_1_washingMachine: "chp1_203",
  chp1_201_1_findout: "chp1_201",
  // 二楼走廊场景
  F1orF2: "chp1_二楼走廊" // 第二章游戏索引
  // 第三章游戏索引
  // 第四章游戏索引

}; // 楼梯间的锁

window.lockOfStairsInCP1F3 = false; // 衣柜的密码锁

window.lockOfClosetInCP1 = false;
window.lockOfSwitchInCP1 = false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vZ2FtZUluZm8uanMiXSwibmFtZXMiOlsid2luZG93IiwiZ2FtZXMiLCJjaHAxX+W6j+eroOeUtemXuCIsImNocDFfMzAyXzFfbGFtcCIsImNocDFfMzAyXzJfbG9jayIsImNocDFfMzAyX+afnOWtkOWkp+WbviIsImNocDFfMzAyX+aVsOWtl+Wkp+WbviIsImNocDFfMzAxX+Wkp+WbvuaVsOWtlyIsImNocDFfMzAxXzFfY2xvdGgiLCJjaHAxX3pvdWxhbmdfMV9sb2NrIiwiY2hwMV/oiI3nrqHmiL/pl7Tnn7PlpLTlpKflm74iLCJjaHAxX+S4iealvOi1sOW7iuino+mUgSIsImNocDFfMjAzXzFfY3VwIiwiY2hwMV8yMDNfMV93YXNoaW5nTWFjaGluZSIsImNocDFfMjAxXzFfZmluZG91dCIsIkYxb3JGMiIsImxvY2tPZlN0YWlyc0luQ1AxRjMiLCJsb2NrT2ZDbG9zZXRJbkNQMSIsImxvY2tPZlN3aXRjaEluQ1AxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlO0VBQ2I7RUFDQTtFQUNBO0VBRUE7RUFDQUMsU0FBUyxFQUFDLFNBTkc7RUFRYjtFQUNBQyxlQUFlLEVBQUUsVUFUSjtFQVdiQyxlQUFlLEVBQUUsVUFYSjtFQWFiQyxhQUFhLEVBQUMsVUFiRDtFQWViQyxhQUFhLEVBQUMsVUFmRDtFQWlCYkMsYUFBYSxFQUFDLFVBakJEO0VBbUJiQyxnQkFBZ0IsRUFBQyxVQW5CSjtFQXFCYkMsbUJBQW1CLEVBQUUsZ0JBckJSO0VBdUJiO0VBQ0FDLGFBQWEsRUFBQyxXQXhCRDtFQTBCYjtFQUNBQyxXQUFXLEVBQUMsV0EzQkM7RUE2QmJDLGNBQWMsRUFBRSxVQTdCSDtFQStCYkMseUJBQXlCLEVBQUUsVUEvQmQ7RUFpQ2JDLGtCQUFrQixFQUFFLFVBakNQO0VBbUNiO0VBQ0FDLE1BQU0sRUFBRyxXQXBDSSxDQXVDYjtFQUVBO0VBRUE7O0FBM0NhLENBQWYsRUErQ0E7O0FBQ0FmLE1BQU0sQ0FBQ2dCLG1CQUFQLEdBQTZCLEtBQTdCLEVBR0E7O0FBQ0FoQixNQUFNLENBQUNpQixpQkFBUCxHQUEyQixLQUEzQjtBQUVBakIsTUFBTSxDQUFDa0IsaUJBQVAsR0FBMkIsS0FBM0IiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOesrOS4gOeroOa4uOaIj+e0ouW8lVxyXG53aW5kb3cuZ2FtZXMgPSB7XHJcbiAgLy8g5ri45oiP57Si5byV5qC85byPIOWwj+a4uOaIj+WcuuaZrzrljp/lnLrmma9cclxuICAvLyDlsI/muLjmiI/lnLrmma/moLzlvI86IGUuZzogXCJjaHAxX3NjZW5lMV8xX2dhbWUxXCIg6KGo56S6IGNoYXB0ZXIx55qEc2NlbmUx55qE56ysMeWPt+a4uOaIj++8jOWQjeWtl+WPq+WBmmdhbWUxXHJcbiAgLy8g5Y6f5Zy65pmv5qC85byPOiDnq6DoioLlj7df5Zy65pmv5ZCNXHJcblxyXG4gIC8vIOW6j+eroOa4uOaIj1xyXG4gIGNocDFf5bqP56ug55S16Ze4OlwiY2hwMV/luo/nq6BcIixcclxuXHJcbiAgLy8g56ys5LiA56ug5ri45oiP57Si5byVXHJcbiAgY2hwMV8zMDJfMV9sYW1wOiBcImNocDFfMzAyXCIsXHJcblxyXG4gIGNocDFfMzAyXzJfbG9jazogXCJjaHAxXzMwMlwiLFxyXG5cclxuICBjaHAxXzMwMl/mn5zlrZDlpKflm746XCJjaHAxXzMwMlwiLFxyXG5cclxuICBjaHAxXzMwMl/mlbDlrZflpKflm746XCJjaHAxXzMwMlwiLFxyXG5cclxuICBjaHAxXzMwMV/lpKflm77mlbDlrZc6XCJjaHAxXzMwMVwiLFxyXG5cclxuICBjaHAxXzMwMV8xX2Nsb3RoOlwiY2hwMV8zMDFcIixcclxuXHJcbiAgY2hwMV96b3VsYW5nXzFfbG9jazogXCJjaHAxX3pvdWxhbmdGMVwiLFxyXG5cclxuICAvLyDoiI3nrqHmiL/pl7RcclxuICBjaHAxX+iIjeeuoeaIv+mXtOefs+WktOWkp+WbvjpcImNocDFf6IiN566h5oi/6Ze0XCIsXHJcblxyXG4gIC8vIOS4iealvOi1sOW7iuino+mUgeWcuuaZr1xyXG4gIGNocDFf5LiJ5qW86LWw5buK6Kej6ZSBOlwiY2hwMV/kuInmpbzotbDlu4pcIixcclxuXHJcbiAgY2hwMV8yMDNfMV9jdXA6IFwiY2hwMV8yMDNcIixcclxuXHJcbiAgY2hwMV8yMDNfMV93YXNoaW5nTWFjaGluZTogXCJjaHAxXzIwM1wiLFxyXG5cclxuICBjaHAxXzIwMV8xX2ZpbmRvdXQ6IFwiY2hwMV8yMDFcIixcclxuXHJcbiAgLy8g5LqM5qW86LWw5buK5Zy65pmvXHJcbiAgRjFvckYyIDogXCJjaHAxX+S6jOalvOi1sOW7ilwiXHJcblxyXG5cclxuICAvLyDnrKzkuoznq6DmuLjmiI/ntKLlvJVcclxuXHJcbiAgLy8g56ys5LiJ56ug5ri45oiP57Si5byVXHJcblxyXG4gIC8vIOesrOWbm+eroOa4uOaIj+e0ouW8lVxyXG59O1xyXG5cclxuXHJcbi8vIOalvOair+mXtOeahOmUgVxyXG53aW5kb3cubG9ja09mU3RhaXJzSW5DUDFGMyA9IGZhbHNlO1xyXG5cclxuXHJcbi8vIOiho+afnOeahOWvhueggemUgVxyXG53aW5kb3cubG9ja09mQ2xvc2V0SW5DUDEgPSBmYWxzZTtcclxuXHJcbndpbmRvdy5sb2NrT2ZTd2l0Y2hJbkNQMSA9IGZhbHNlOyJdfQ==