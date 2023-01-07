// 序章的门
// let chp1_xuzhang_doors = {
//   door1 : "chp1_舍管房间",
// };

// 第一章的门
let chp1_303_doors = {
  door1 : "chp1_三楼走廊",
};

let chp1_302_doors = {
  door1 : "chp1_三楼走廊",
};

let chp1_301_doors = {
  door1 : "chp1_三楼走廊",
};

let chp1_201_doors = {
  door1 : "chp1_二楼走廊",
};

let chp1_202_doors = {
  door1 : "chp1_二楼走廊",
};

let chp1_203_doors = {
  door1 : "chp1_二楼走廊",
};

let chp1_zoulangF3_doors = {
  door1 : "chp1_301",
  door2 : "chp1_302",
  door3 : "chp1_303",
  door4 : "chp1_二楼走廊"
};

let chp1_zoulangF2_doors = {
  door1: "chp1_201",
  door2: "chp1_202",
  door3: "chp1_203",
  door4: "F1orF2",
};

let chp1_hallF1doors = {
  door1: "chp1_舍管房间",
  door2: "chp2_scene1",
  door3: "chp1_二楼走廊",
}

let chp1_sheguanF1doors = {
  door1: "chp1_一楼大厅",
}



let chp2_scene1_doors = {};

window.scenes = {
  // 序章
  // chp1_序章:chp1_xuzhang_doors,
  // chapter 1 scene1
  chp1_303: chp1_303_doors,
  chp1_302: chp1_302_doors,
  chp1_301: chp1_301_doors,
  chp1_201: chp1_201_doors,
  chp1_202: chp1_202_doors,
  chp1_203: chp1_203_doors,
  chp1_三楼走廊: chp1_zoulangF3_doors,
  chp1_二楼走廊: chp1_zoulangF2_doors,
  chp1_一楼大厅: chp1_hallF1doors,
  chp1_舍管房间: chp1_sheguanF1doors,
};

window.player = {
  pos_X: 100.743,
  pos_Y: 90.511,
  enterGame: false,
  previousScene:"",
  previousDoor:"",
  rememerPosOfDoor:false,  

};



window.pos_chp1_三楼走廊 = {
	'301':cc.Vec2(600,200),
	'302':cc.Vec2(1100,200),
	'303':cc.Vec2(1500,200),
	'三楼走廊':cc.Vec2(2100,200),
};

// let pos_chp1_301 = {
// 	'301':cc.Vec2(1100,200),
// };

// let pos_chp1_302 = {
// 	'302':cc.Vec2(1100,200)
// };
// let pos_chp1_303 = {
// 	'303':cc.Vec2(1500,200)
// }

window.playerPosition = {
	// 当前的场景的门，对应的和下一个场景要主角出现的位置
  chp1_三楼走廊:null,
  
  chp1_301:null,

  chp1_302:null,
  
  chp1_302:null,

  chp1_303:null,
  
  chp1_203:null,

  chp1_202:null,

  chp1_201:null,

  chp1_二楼走廊:null,
  
  chp1_一楼大厅:null,

  chp1_宿管房间:null,


  // 后面还要补充一个大厅门口

}


