
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vc2NlbmVpbmZvLmpzIl0sIm5hbWVzIjpbImNocDFfMzAzX2Rvb3JzIiwiY2hwMV8zMDJfZG9vcnMiLCJjaHAxXzMwMV9kb29ycyIsImNocDFfMjAxX2Rvb3JzIiwiY2hwMV8yMDJfZG9vcnMiLCJjaHAxXzIwM19kb29ycyIsImNocDFfem91bGFuZ0YxX2Rvb3JzIiwiY2hwMV96b3VsYW5nRjJfZG9vcnMiLCJjaHAyX3NjZW5lMV9kb29ycyIsIndpbmRvdyIsInNjZW5lcyIsInBsYXllciIsInBvc19YIiwicG9zX1kiLCJlbnRlckdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFJQSxjQUFjLEdBQUc7RUFDakIsU0FBVSxXQURPO0VBRWpCLFNBQVU7QUFGTyxDQUFyQjtBQUtBLElBQUlDLGNBQWMsR0FBRztFQUNqQixTQUFVO0FBRE8sQ0FBckI7QUFJQSxJQUFJQyxjQUFjLEdBQUc7RUFDakIsU0FBVTtBQURPLENBQXJCO0FBS0EsSUFBSUMsY0FBYyxHQUFHO0VBQ2pCLFNBQVU7QUFETyxDQUFyQjtBQUlBLElBQUlDLGNBQWMsR0FBRztFQUNqQixTQUFVO0FBRE8sQ0FBckI7QUFJQSxJQUFJQyxjQUFjLEdBQUc7RUFDakIsU0FBVTtBQURPLENBQXJCO0FBS0EsSUFBSUMsb0JBQW9CLEdBQUc7RUFDdkIsU0FBVSxVQURhO0VBRXZCLFNBQVUsVUFGYTtFQUd2QixTQUFVO0FBSGEsQ0FBM0I7QUFNQSxJQUFJQyxvQkFBb0IsR0FBRztFQUN2QixTQUFVLFVBRGE7RUFFdkIsU0FBVSxVQUZhO0VBR3ZCLFNBQVU7QUFIYSxDQUEzQjtBQU9BLElBQUlDLGlCQUFpQixHQUFHLEVBQXhCO0FBR0FDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQjtFQUNaO0VBQ0EsWUFBYVYsY0FGRDtFQUdaLFlBQWFDLGNBSEQ7RUFJWixZQUFhQyxjQUpEO0VBS1osYUFBY0ksb0JBTEY7RUFNWixhQUFjQztBQU5GLENBQWhCO0FBVUFFLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQjtFQUNaQyxLQUFLLEVBQUcsT0FESTtFQUVaQyxLQUFLLEVBQUcsTUFGSTtFQUdaQyxTQUFTLEVBQUM7QUFIRSxDQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g56ys5LiA56ug55qE6ZeoXG5sZXQgY2hwMV8zMDNfZG9vcnMgPSB7XG4gICAgXCJkb29yMVwiIDogXCJjaHAxX+S4gOalvOi1sOW7ilwiLFxuICAgIFwiZG9vcjJcIiA6IFwiY2hwMV/kuIDmpbzotbDlu4pcIixcbn07XG5cbmxldCBjaHAxXzMwMl9kb29ycyA9IHtcbiAgICBcImRvb3IxXCIgOiBcImNocDFf5LiA5qW86LWw5buKXCIsXG59XG5cbmxldCBjaHAxXzMwMV9kb29ycyA9IHtcbiAgICBcImRvb3IxXCIgOiBcImNocDFf5LiA5qW86LWw5buKXCIsXG59XG5cblxubGV0IGNocDFfMjAxX2Rvb3JzID0ge1xuICAgIFwiZG9vcjFcIiA6IFwiY2hwMV/kuozmpbzotbDlu4pcIixcbn07XG5cbmxldCBjaHAxXzIwMl9kb29ycyA9IHtcbiAgICBcImRvb3IxXCIgOiBcImNocDFf5LqM5qW86LWw5buKXCIsXG59XG5cbmxldCBjaHAxXzIwM19kb29ycyA9IHtcbiAgICBcImRvb3IxXCIgOiBcImNocDFf5LqM5qW86LWw5buKXCIsXG59XG5cblxubGV0IGNocDFfem91bGFuZ0YxX2Rvb3JzID0ge1xuICAgIFwiZG9vcjFcIiA6IFwiY2hwMV8zMDFcIixcbiAgICBcImRvb3IyXCIgOiBcImNocDFfMzAyXCIsXG4gICAgXCJkb29yM1wiIDogXCJjaHAxXzMwM1wiLFxufVxuXG5sZXQgY2hwMV96b3VsYW5nRjJfZG9vcnMgPSB7XG4gICAgXCJkb29yMVwiIDogXCJjaHAxXzIwMVwiLFxuICAgIFwiZG9vcjJcIiA6IFwiY2hwMV8yMDJcIixcbiAgICBcImRvb3IzXCIgOiBcImNocDFfMjAzXCIsXG59XG5cblxubGV0IGNocDJfc2NlbmUxX2Rvb3JzID0ge1xufTtcblxud2luZG93LnNjZW5lcyA9IHtcbiAgICAvLyBjaGFwdGVyIDEgc2NlbmUxIFxuICAgIFwiY2hwMV8zMDNcIiA6IGNocDFfMzAzX2Rvb3JzLFxuICAgIFwiY2hwMV8zMDJcIiA6IGNocDFfMzAyX2Rvb3JzLFxuICAgIFwiY2hwMV8zMDFcIiA6IGNocDFfMzAxX2Rvb3JzLFxuICAgIFwiY2hwMV/kuIDmpbzotbDlu4pcIiA6IGNocDFfem91bGFuZ0YxX2Rvb3JzLFxuICAgIFwiY2hwMV/kuozmpbzotbDlu4pcIiA6IGNocDFfem91bGFuZ0YyX2Rvb3JzLFxufVxuXG5cbndpbmRvdy5wbGF5ZXIgPSB7XG4gICAgcG9zX1ggOiAxMDAuNzQzLFxuICAgIHBvc19ZIDogOTAuNTExLFxuICAgIGVudGVyR2FtZTpmYWxzZSxcbn0iXX0=