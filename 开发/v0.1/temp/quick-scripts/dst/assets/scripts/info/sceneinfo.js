
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/info/sceneinfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6dea9PRR5VAsYO1qNNgHnRZ', 'sceneinfo');
// scripts/info/sceneinfo.js

"use strict";

var _window$playerPositio;

// 序章的门
// let chp1_xuzhang_doors = {
//   door1 : "chp1_舍管房间",
// };
// 第一章的门
var chp1_303_doors = {
  door1: "chp1_三楼走廊"
};
var chp1_302_doors = {
  door1: "chp1_三楼走廊"
};
var chp1_301_doors = {
  door1: "chp1_三楼走廊"
};
var chp1_201_doors = {
  door1: "chp1_二楼走廊"
};
var chp1_202_doors = {
  door1: "chp1_二楼走廊"
};
var chp1_203_doors = {
  door1: "chp1_二楼走廊"
};
var chp1_zoulangF3_doors = {
  door1: "chp1_301",
  door2: "chp1_302",
  door3: "chp1_303",
  door4: "chp1_二楼走廊"
};
var chp1_zoulangF2_doors = {
  door1: "chp1_201",
  door2: "chp1_202",
  door3: "chp1_203",
  door4: "F1orF2"
};
var chp1_hallF1doors = {
  door1: "chp1_舍管房间",
  door2: "chp2_scene1",
  door3: "chp1_二楼走廊"
};
var chp1_sheguanF1doors = {
  door1: "chp1_一楼大厅"
};
var chp2_scene1_doors = {};
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
  chp1_舍管房间: chp1_sheguanF1doors
};
window.player = {
  pos_X: 100.743,
  pos_Y: 90.511,
  enterGame: false,
  previousScene: "",
  previousDoor: "",
  rememerPosOfDoor: false
};
window.pos_chp1_三楼走廊 = {
  '301': cc.Vec2(600, 200),
  '302': cc.Vec2(1100, 200),
  '303': cc.Vec2(1500, 200),
  '三楼走廊': cc.Vec2(2100, 200)
}; // let pos_chp1_301 = {
// 	'301':cc.Vec2(1100,200),
// };
// let pos_chp1_302 = {
// 	'302':cc.Vec2(1100,200)
// };
// let pos_chp1_303 = {
// 	'303':cc.Vec2(1500,200)
// }

window.playerPosition = (_window$playerPositio = {
  // 当前的场景的门，对应的和下一个场景要主角出现的位置
  chp1_三楼走廊: null,
  chp1_301: null,
  chp1_302: null
}, _window$playerPositio["chp1_302"] = null, _window$playerPositio.chp1_303 = null, _window$playerPositio.chp1_203 = null, _window$playerPositio.chp1_202 = null, _window$playerPositio.chp1_201 = null, _window$playerPositio.chp1_二楼走廊 = null, _window$playerPositio.chp1_一楼大厅 = null, _window$playerPositio.chp1_宿管房间 = null, _window$playerPositio);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vc2NlbmVpbmZvLmpzIl0sIm5hbWVzIjpbImNocDFfMzAzX2Rvb3JzIiwiZG9vcjEiLCJjaHAxXzMwMl9kb29ycyIsImNocDFfMzAxX2Rvb3JzIiwiY2hwMV8yMDFfZG9vcnMiLCJjaHAxXzIwMl9kb29ycyIsImNocDFfMjAzX2Rvb3JzIiwiY2hwMV96b3VsYW5nRjNfZG9vcnMiLCJkb29yMiIsImRvb3IzIiwiZG9vcjQiLCJjaHAxX3pvdWxhbmdGMl9kb29ycyIsImNocDFfaGFsbEYxZG9vcnMiLCJjaHAxX3NoZWd1YW5GMWRvb3JzIiwiY2hwMl9zY2VuZTFfZG9vcnMiLCJ3aW5kb3ciLCJzY2VuZXMiLCJjaHAxXzMwMyIsImNocDFfMzAyIiwiY2hwMV8zMDEiLCJjaHAxXzIwMSIsImNocDFfMjAyIiwiY2hwMV8yMDMiLCJjaHAxX+S4iealvOi1sOW7iiIsImNocDFf5LqM5qW86LWw5buKIiwiY2hwMV/kuIDmpbzlpKfljoUiLCJjaHAxX+iIjeeuoeaIv+mXtCIsInBsYXllciIsInBvc19YIiwicG9zX1kiLCJlbnRlckdhbWUiLCJwcmV2aW91c1NjZW5lIiwicHJldmlvdXNEb29yIiwicmVtZW1lclBvc09mRG9vciIsInBvc19jaHAxX+S4iealvOi1sOW7iiIsImNjIiwiVmVjMiIsInBsYXllclBvc2l0aW9uIiwiY2hwMV/lrr/nrqHmiL/pl7QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBSUEsY0FBYyxHQUFHO0VBQ25CQyxLQUFLLEVBQUc7QUFEVyxDQUFyQjtBQUlBLElBQUlDLGNBQWMsR0FBRztFQUNuQkQsS0FBSyxFQUFHO0FBRFcsQ0FBckI7QUFJQSxJQUFJRSxjQUFjLEdBQUc7RUFDbkJGLEtBQUssRUFBRztBQURXLENBQXJCO0FBSUEsSUFBSUcsY0FBYyxHQUFHO0VBQ25CSCxLQUFLLEVBQUc7QUFEVyxDQUFyQjtBQUlBLElBQUlJLGNBQWMsR0FBRztFQUNuQkosS0FBSyxFQUFHO0FBRFcsQ0FBckI7QUFJQSxJQUFJSyxjQUFjLEdBQUc7RUFDbkJMLEtBQUssRUFBRztBQURXLENBQXJCO0FBSUEsSUFBSU0sb0JBQW9CLEdBQUc7RUFDekJOLEtBQUssRUFBRyxVQURpQjtFQUV6Qk8sS0FBSyxFQUFHLFVBRmlCO0VBR3pCQyxLQUFLLEVBQUcsVUFIaUI7RUFJekJDLEtBQUssRUFBRztBQUppQixDQUEzQjtBQU9BLElBQUlDLG9CQUFvQixHQUFHO0VBQ3pCVixLQUFLLEVBQUUsVUFEa0I7RUFFekJPLEtBQUssRUFBRSxVQUZrQjtFQUd6QkMsS0FBSyxFQUFFLFVBSGtCO0VBSXpCQyxLQUFLLEVBQUU7QUFKa0IsQ0FBM0I7QUFPQSxJQUFJRSxnQkFBZ0IsR0FBRztFQUNyQlgsS0FBSyxFQUFFLFdBRGM7RUFFckJPLEtBQUssRUFBRSxhQUZjO0VBR3JCQyxLQUFLLEVBQUU7QUFIYyxDQUF2QjtBQU1BLElBQUlJLG1CQUFtQixHQUFHO0VBQ3hCWixLQUFLLEVBQUU7QUFEaUIsQ0FBMUI7QUFNQSxJQUFJYSxpQkFBaUIsR0FBRyxFQUF4QjtBQUVBQyxNQUFNLENBQUNDLE1BQVAsR0FBZ0I7RUFDZDtFQUNBO0VBQ0E7RUFDQUMsUUFBUSxFQUFFakIsY0FKSTtFQUtka0IsUUFBUSxFQUFFaEIsY0FMSTtFQU1kaUIsUUFBUSxFQUFFaEIsY0FOSTtFQU9kaUIsUUFBUSxFQUFFaEIsY0FQSTtFQVFkaUIsUUFBUSxFQUFFaEIsY0FSSTtFQVNkaUIsUUFBUSxFQUFFaEIsY0FUSTtFQVVkaUIsU0FBUyxFQUFFaEIsb0JBVkc7RUFXZGlCLFNBQVMsRUFBRWIsb0JBWEc7RUFZZGMsU0FBUyxFQUFFYixnQkFaRztFQWFkYyxTQUFTLEVBQUViO0FBYkcsQ0FBaEI7QUFnQkFFLE1BQU0sQ0FBQ1ksTUFBUCxHQUFnQjtFQUNkQyxLQUFLLEVBQUUsT0FETztFQUVkQyxLQUFLLEVBQUUsTUFGTztFQUdkQyxTQUFTLEVBQUUsS0FIRztFQUlkQyxhQUFhLEVBQUMsRUFKQTtFQUtkQyxZQUFZLEVBQUMsRUFMQztFQU1kQyxnQkFBZ0IsRUFBQztBQU5ILENBQWhCO0FBWUFsQixNQUFNLENBQUNtQixhQUFQLEdBQXVCO0VBQ3RCLE9BQU1DLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLEdBQVIsRUFBWSxHQUFaLENBRGdCO0VBRXRCLE9BQU1ELEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLElBQVIsRUFBYSxHQUFiLENBRmdCO0VBR3RCLE9BQU1ELEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLElBQVIsRUFBYSxHQUFiLENBSGdCO0VBSXRCLFFBQU9ELEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLElBQVIsRUFBYSxHQUFiO0FBSmUsQ0FBdkIsRUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFyQixNQUFNLENBQUNzQixjQUFQO0VBQ0M7RUFDQ2QsU0FBUyxFQUFDLElBRlo7RUFJRUosUUFBUSxFQUFDLElBSlg7RUFNRUQsUUFBUSxFQUFDO0FBTlgsdUNBUVcsSUFSWCx3QkFVRUQsUUFWRixHQVVXLElBVlgsd0JBWUVLLFFBWkYsR0FZVyxJQVpYLHdCQWNFRCxRQWRGLEdBY1csSUFkWCx3QkFnQkVELFFBaEJGLEdBZ0JXLElBaEJYLHdCQWtCRUksU0FsQkYsR0FrQlksSUFsQlosd0JBb0JFQyxTQXBCRixHQW9CWSxJQXBCWix3QkFzQkVhLFNBdEJGLEdBc0JZLElBdEJaIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyDluo/nq6DnmoTpl6hcbi8vIGxldCBjaHAxX3h1emhhbmdfZG9vcnMgPSB7XG4vLyAgIGRvb3IxIDogXCJjaHAxX+iIjeeuoeaIv+mXtFwiLFxuLy8gfTtcblxuLy8g56ys5LiA56ug55qE6ZeoXG5sZXQgY2hwMV8zMDNfZG9vcnMgPSB7XG4gIGRvb3IxIDogXCJjaHAxX+S4iealvOi1sOW7ilwiLFxufTtcblxubGV0IGNocDFfMzAyX2Rvb3JzID0ge1xuICBkb29yMSA6IFwiY2hwMV/kuInmpbzotbDlu4pcIixcbn07XG5cbmxldCBjaHAxXzMwMV9kb29ycyA9IHtcbiAgZG9vcjEgOiBcImNocDFf5LiJ5qW86LWw5buKXCIsXG59O1xuXG5sZXQgY2hwMV8yMDFfZG9vcnMgPSB7XG4gIGRvb3IxIDogXCJjaHAxX+S6jOalvOi1sOW7ilwiLFxufTtcblxubGV0IGNocDFfMjAyX2Rvb3JzID0ge1xuICBkb29yMSA6IFwiY2hwMV/kuozmpbzotbDlu4pcIixcbn07XG5cbmxldCBjaHAxXzIwM19kb29ycyA9IHtcbiAgZG9vcjEgOiBcImNocDFf5LqM5qW86LWw5buKXCIsXG59O1xuXG5sZXQgY2hwMV96b3VsYW5nRjNfZG9vcnMgPSB7XG4gIGRvb3IxIDogXCJjaHAxXzMwMVwiLFxuICBkb29yMiA6IFwiY2hwMV8zMDJcIixcbiAgZG9vcjMgOiBcImNocDFfMzAzXCIsXG4gIGRvb3I0IDogXCJjaHAxX+S6jOalvOi1sOW7ilwiXG59O1xuXG5sZXQgY2hwMV96b3VsYW5nRjJfZG9vcnMgPSB7XG4gIGRvb3IxOiBcImNocDFfMjAxXCIsXG4gIGRvb3IyOiBcImNocDFfMjAyXCIsXG4gIGRvb3IzOiBcImNocDFfMjAzXCIsXG4gIGRvb3I0OiBcIkYxb3JGMlwiLFxufTtcblxubGV0IGNocDFfaGFsbEYxZG9vcnMgPSB7XG4gIGRvb3IxOiBcImNocDFf6IiN566h5oi/6Ze0XCIsXG4gIGRvb3IyOiBcImNocDJfc2NlbmUxXCIsXG4gIGRvb3IzOiBcImNocDFf5LqM5qW86LWw5buKXCIsXG59XG5cbmxldCBjaHAxX3NoZWd1YW5GMWRvb3JzID0ge1xuICBkb29yMTogXCJjaHAxX+S4gOalvOWkp+WOhVwiLFxufVxuXG5cblxubGV0IGNocDJfc2NlbmUxX2Rvb3JzID0ge307XG5cbndpbmRvdy5zY2VuZXMgPSB7XG4gIC8vIOW6j+eroFxuICAvLyBjaHAxX+W6j+eroDpjaHAxX3h1emhhbmdfZG9vcnMsXG4gIC8vIGNoYXB0ZXIgMSBzY2VuZTFcbiAgY2hwMV8zMDM6IGNocDFfMzAzX2Rvb3JzLFxuICBjaHAxXzMwMjogY2hwMV8zMDJfZG9vcnMsXG4gIGNocDFfMzAxOiBjaHAxXzMwMV9kb29ycyxcbiAgY2hwMV8yMDE6IGNocDFfMjAxX2Rvb3JzLFxuICBjaHAxXzIwMjogY2hwMV8yMDJfZG9vcnMsXG4gIGNocDFfMjAzOiBjaHAxXzIwM19kb29ycyxcbiAgY2hwMV/kuInmpbzotbDlu4o6IGNocDFfem91bGFuZ0YzX2Rvb3JzLFxuICBjaHAxX+S6jOalvOi1sOW7ijogY2hwMV96b3VsYW5nRjJfZG9vcnMsXG4gIGNocDFf5LiA5qW85aSn5Y6FOiBjaHAxX2hhbGxGMWRvb3JzLFxuICBjaHAxX+iIjeeuoeaIv+mXtDogY2hwMV9zaGVndWFuRjFkb29ycyxcbn07XG5cbndpbmRvdy5wbGF5ZXIgPSB7XG4gIHBvc19YOiAxMDAuNzQzLFxuICBwb3NfWTogOTAuNTExLFxuICBlbnRlckdhbWU6IGZhbHNlLFxuICBwcmV2aW91c1NjZW5lOlwiXCIsXG4gIHByZXZpb3VzRG9vcjpcIlwiLFxuICByZW1lbWVyUG9zT2ZEb29yOmZhbHNlLCAgXG5cbn07XG5cblxuXG53aW5kb3cucG9zX2NocDFf5LiJ5qW86LWw5buKID0ge1xuXHQnMzAxJzpjYy5WZWMyKDYwMCwyMDApLFxuXHQnMzAyJzpjYy5WZWMyKDExMDAsMjAwKSxcblx0JzMwMyc6Y2MuVmVjMigxNTAwLDIwMCksXG5cdCfkuInmpbzotbDlu4onOmNjLlZlYzIoMjEwMCwyMDApLFxufTtcblxuLy8gbGV0IHBvc19jaHAxXzMwMSA9IHtcbi8vIFx0JzMwMSc6Y2MuVmVjMigxMTAwLDIwMCksXG4vLyB9O1xuXG4vLyBsZXQgcG9zX2NocDFfMzAyID0ge1xuLy8gXHQnMzAyJzpjYy5WZWMyKDExMDAsMjAwKVxuLy8gfTtcbi8vIGxldCBwb3NfY2hwMV8zMDMgPSB7XG4vLyBcdCczMDMnOmNjLlZlYzIoMTUwMCwyMDApXG4vLyB9XG5cbndpbmRvdy5wbGF5ZXJQb3NpdGlvbiA9IHtcblx0Ly8g5b2T5YmN55qE5Zy65pmv55qE6Zeo77yM5a+55bqU55qE5ZKM5LiL5LiA5Liq5Zy65pmv6KaB5Li76KeS5Ye6546w55qE5L2N572uXG4gIGNocDFf5LiJ5qW86LWw5buKOm51bGwsXG4gIFxuICBjaHAxXzMwMTpudWxsLFxuXG4gIGNocDFfMzAyOm51bGwsXG4gIFxuICBjaHAxXzMwMjpudWxsLFxuXG4gIGNocDFfMzAzOm51bGwsXG4gIFxuICBjaHAxXzIwMzpudWxsLFxuXG4gIGNocDFfMjAyOm51bGwsXG5cbiAgY2hwMV8yMDE6bnVsbCxcblxuICBjaHAxX+S6jOalvOi1sOW7ijpudWxsLFxuICBcbiAgY2hwMV/kuIDmpbzlpKfljoU6bnVsbCxcblxuICBjaHAxX+Wuv+euoeaIv+mXtDpudWxsLFxuXG5cbiAgLy8g5ZCO6Z2i6L+Y6KaB6KGl5YWF5LiA5Liq5aSn5Y6F6Zeo5Y+jXG5cbn1cblxuXG4iXX0=