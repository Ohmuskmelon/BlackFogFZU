"use strict";
cc._RF.push(module, '6dea9PRR5VAsYO1qNNgHnRZ', 'sceneinfo');
// scripts/info/sceneinfo.js

"use strict";

// 第一章的门
var chp1_303_doors = {
  "door1": "chp1_一楼走廊",
  "door2": "chp1_一楼走廊"
};
var chp1_302_doors = {
  "door1": "chp1_一楼走廊"
};
var chp1_301_doors = {
  "door1": "chp1_一楼走廊"
};
var chp1_201_doors = {
  "door1": "chp1_二楼走廊"
};
var chp1_202_doors = {
  "door1": "chp1_二楼走廊"
};
var chp1_203_doors = {
  "door1": "chp1_二楼走廊"
};
var chp1_zoulangF1_doors = {
  "door1": "chp1_301",
  "door2": "chp1_302",
  "door3": "chp1_303"
};
var chp1_zoulangF2_doors = {
  "door1": "chp1_201",
  "door2": "chp1_202",
  "door3": "chp1_203"
};
var chp2_scene1_doors = {};
window.scenes = {
  // chapter 1 scene1 
  "chp1_303": chp1_303_doors,
  "chp1_302": chp1_302_doors,
  "chp1_301": chp1_301_doors,
  "chp1_一楼走廊": chp1_zoulangF1_doors,
  "chp1_二楼走廊": chp1_zoulangF2_doors
};
window.player = {
  pos_X: 100.743,
  pos_Y: 90.511,
  enterGame: false
};

cc._RF.pop();