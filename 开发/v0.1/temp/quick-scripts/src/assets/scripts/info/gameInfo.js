"use strict";
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