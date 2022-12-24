
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/saveState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b745f5Q/xNFjqTUZsWwQ08a', 'saveState');
// scripts/controller/saveState.js

"use strict";

var POINTS = [{
  id: 0,
  version: '0.1',
  poName: 'lockOfSwitchInCP0',
  state: false,
  dataNum: 0,
  poData: [],
  poMap: {
    "origin": -1
  }
}];
var POMAP = {
  lockOfSwitchInCP0: 0
};

var pushData = function pushData(data, dataName, pointIndex) {
  POINTS[pointIndex].dataNum++;
  POINTS[pointIndex].poData.push(data);
  var dataIndexName = 'the' + dataName;
  POINTS[pointIndex].poMap[dataIndexName] = POINTS[pointIndex].dataNum - 1;
  console.log(POINTS[pointIndex].poData);
  console.log(POINTS[pointIndex].poMap);
};

var getData = function getData(dataName, pointIndex) {
  var dataIndexName = 'the' + dataName;
  var dataIndex = POINTS[pointIndex].poMap[dataIndexName];
  console.log(POINTS[pointIndex].poMap);
  var data = POINTS[pointIndex].poData[dataIndex];
  console.log(data);
  return data;
};

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {}
});
module.exports = {
  POINTS: POINTS,
  POMAP: POMAP,
  pushData: pushData,
  getData: getData
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvc2F2ZVN0YXRlLmpzIl0sIm5hbWVzIjpbIlBPSU5UUyIsImlkIiwidmVyc2lvbiIsInBvTmFtZSIsInN0YXRlIiwiZGF0YU51bSIsInBvRGF0YSIsInBvTWFwIiwiUE9NQVAiLCJsb2NrT2ZTd2l0Y2hJbkNQMCIsInB1c2hEYXRhIiwiZGF0YSIsImRhdGFOYW1lIiwicG9pbnRJbmRleCIsInB1c2giLCJkYXRhSW5kZXhOYW1lIiwiY29uc29sZSIsImxvZyIsImdldERhdGEiLCJkYXRhSW5kZXgiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUcsQ0FDVDtFQUNJQyxFQUFFLEVBQUcsQ0FEVDtFQUVJQyxPQUFPLEVBQUcsS0FGZDtFQUdJQyxNQUFNLEVBQUcsbUJBSGI7RUFJSUMsS0FBSyxFQUFHLEtBSlo7RUFLSUMsT0FBTyxFQUFHLENBTGQ7RUFNSUMsTUFBTSxFQUFHLEVBTmI7RUFPSUMsS0FBSyxFQUFHO0lBQ0osVUFBVyxDQUFDO0VBRFI7QUFQWixDQURTLENBQWI7QUFlQSxJQUFJQyxLQUFLLEdBQUc7RUFDUkMsaUJBQWlCLEVBQUc7QUFEWixDQUFaOztBQUtBLElBQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVVDLElBQVYsRUFBZ0JDLFFBQWhCLEVBQTBCQyxVQUExQixFQUFxQztFQUNoRGIsTUFBTSxDQUFDYSxVQUFELENBQU4sQ0FBbUJSLE9BQW5CO0VBQ0FMLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CUCxNQUFuQixDQUEwQlEsSUFBMUIsQ0FBK0JILElBQS9CO0VBQ0EsSUFBSUksYUFBYSxHQUFHLFFBQVFILFFBQTVCO0VBQ0FaLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CTixLQUFuQixDQUF5QlEsYUFBekIsSUFBMENmLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CUixPQUFuQixHQUEyQixDQUFyRTtFQUNBVyxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CUCxNQUEvQjtFQUNBVSxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CTixLQUEvQjtBQUNILENBUEQ7O0FBU0EsSUFBSVcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBVU4sUUFBVixFQUFvQkMsVUFBcEIsRUFBK0I7RUFDekMsSUFBSUUsYUFBYSxHQUFHLFFBQVFILFFBQTVCO0VBQ0EsSUFBSU8sU0FBUyxHQUFHbkIsTUFBTSxDQUFDYSxVQUFELENBQU4sQ0FBbUJOLEtBQW5CLENBQXlCUSxhQUF6QixDQUFoQjtFQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE1BQU0sQ0FBQ2EsVUFBRCxDQUFOLENBQW1CTixLQUEvQjtFQUNBLElBQUlJLElBQUksR0FBR1gsTUFBTSxDQUFDYSxVQUFELENBQU4sQ0FBbUJQLE1BQW5CLENBQTBCYSxTQUExQixDQUFYO0VBQ0FILE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaO0VBQ0EsT0FBT0EsSUFBUDtBQUNILENBUEQ7O0FBU0FTLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBT0xDLEtBUEssbUJBT0ksQ0FFUjtBQVRJLENBQVQ7QUFZQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0VBQ2IxQixNQUFNLEVBQU5BLE1BRGE7RUFFYlEsS0FBSyxFQUFMQSxLQUZhO0VBR2JFLFFBQVEsRUFBUkEsUUFIYTtFQUliUSxPQUFPLEVBQVBBO0FBSmEsQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQT0lOVFMgPSBbXG4gICAge1xuICAgICAgICBpZCA6IDAsXG4gICAgICAgIHZlcnNpb24gOiAnMC4xJyxcbiAgICAgICAgcG9OYW1lIDogJ2xvY2tPZlN3aXRjaEluQ1AwJyxcbiAgICAgICAgc3RhdGUgOiBmYWxzZSxcbiAgICAgICAgZGF0YU51bSA6IDAsXG4gICAgICAgIHBvRGF0YSA6IFtdLFxuICAgICAgICBwb01hcCA6IHtcbiAgICAgICAgICAgIFwib3JpZ2luXCIgOiAtMVxuICAgICAgICB9XG4gICAgfSxcbl1cblxuXG52YXIgUE9NQVAgPSB7XG4gICAgbG9ja09mU3dpdGNoSW5DUDAgOiAwLFxufTtcblxuXG52YXIgcHVzaERhdGEgPSBmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIHBvaW50SW5kZXgpe1xuICAgIFBPSU5UU1twb2ludEluZGV4XS5kYXRhTnVtKys7XG4gICAgUE9JTlRTW3BvaW50SW5kZXhdLnBvRGF0YS5wdXNoKGRhdGEpO1xuICAgIGxldCBkYXRhSW5kZXhOYW1lID0gJ3RoZScgKyBkYXRhTmFtZTtcbiAgICBQT0lOVFNbcG9pbnRJbmRleF0ucG9NYXBbZGF0YUluZGV4TmFtZV0gPSBQT0lOVFNbcG9pbnRJbmRleF0uZGF0YU51bS0xO1xuICAgIGNvbnNvbGUubG9nKFBPSU5UU1twb2ludEluZGV4XS5wb0RhdGEpO1xuICAgIGNvbnNvbGUubG9nKFBPSU5UU1twb2ludEluZGV4XS5wb01hcCk7XG59XG5cbnZhciBnZXREYXRhID0gZnVuY3Rpb24gKGRhdGFOYW1lLCBwb2ludEluZGV4KXtcbiAgICBsZXQgZGF0YUluZGV4TmFtZSA9ICd0aGUnICsgZGF0YU5hbWU7XG4gICAgbGV0IGRhdGFJbmRleCA9IFBPSU5UU1twb2ludEluZGV4XS5wb01hcFtkYXRhSW5kZXhOYW1lXTtcbiAgICBjb25zb2xlLmxvZyhQT0lOVFNbcG9pbnRJbmRleF0ucG9NYXApO1xuICAgIGxldCBkYXRhID0gUE9JTlRTW3BvaW50SW5kZXhdLnBvRGF0YVtkYXRhSW5kZXhdO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUE9JTlRTLFxuICAgIFBPTUFQLFxuICAgIHB1c2hEYXRhLFxuICAgIGdldERhdGEsXG59Il19