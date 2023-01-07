"use strict";
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