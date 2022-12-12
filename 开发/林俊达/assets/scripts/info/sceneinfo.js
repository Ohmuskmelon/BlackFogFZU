// 第一章的门
let chp1_scene1_doors = {
    "door1" : "chp2_scene1",
    "door2" : "chp2_scene1"
};



let chp2_scene1_doors = {
    "door1" : "chp1_scene1"
};

window.scenes = {
    // chapter 1 scene1 
    "chp1_scene1" : chp1_scene1_doors,

    // chapter 2 scene1
    "chp2_scene1" : chp2_scene1_doors
}


window.player = {
    pos_X : 100.743,
    pos_Y : 90.511,
    enterGame:false,
}