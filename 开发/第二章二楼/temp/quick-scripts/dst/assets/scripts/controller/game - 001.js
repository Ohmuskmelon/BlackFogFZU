
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/game - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c54c7nKsO9NjJ876O9hvrCX', 'game - 001');
// scripts/controller/game - 001.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var inArr = [0, 0];
var closeItem = {
  door: 0,
  ghost: 1
};
cc.Class({
  "extends": cc.Component,
  properties: {
    mapNodes: cc.Node,
    useItem: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getPhysicsManager().debugDrawFlags = 0;
    cc.director.getPhysicsManager().gravity = cc.v2(0, -640);
    window.Global = {
      IsShowing: null,
      InArr: null,
      CloseItem: null,
      contact: null,
      id: null,
      currentScene: String,
      itemType: String,
      itemName: String,
      npcsMap: Map,
      gameBg: cc.Node,
      itemsMap: Map,
      doorsMap: Map
    };
  },
  start: function start() {
    console.log("start");
    Global.IsShowing = false;
    Global.InArr = inArr;
    Global.CloseItem = closeItem;
    Global.contact = ' ';
    Global.id = 0;
    Global.itemType = ' ';
    Global.itemName = ' ';
    Global.currentScene = cc.director.getScene()._name;
    console.log(Global.currentScene);
    this.initScenes();
    this.initAllNodes();
    this.initPaths();
    this.initTips(); // this.initMap(this.mapNodes);
  },
  //加载场景和门之间的对应关系
  initScenes: function initScenes() {},
  //重新加载场景，恢复原先的物品状态
  initAllNodes: function initAllNodes() {},
  //记录所有的节点路径，可选
  initPaths: function initPaths() {},
  //初始化弹窗的状态
  initTips: function initTips() {},
  initMap: function initMap() {}
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvZ2FtZSAtIDAwMS5qcyJdLCJuYW1lcyI6WyJpbkFyciIsImNsb3NlSXRlbSIsImRvb3IiLCJnaG9zdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWFwTm9kZXMiLCJOb2RlIiwidXNlSXRlbSIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiZGVidWdEcmF3RmxhZ3MiLCJncmF2aXR5IiwidjIiLCJ3aW5kb3ciLCJHbG9iYWwiLCJJc1Nob3dpbmciLCJJbkFyciIsIkNsb3NlSXRlbSIsImNvbnRhY3QiLCJpZCIsImN1cnJlbnRTY2VuZSIsIlN0cmluZyIsIml0ZW1UeXBlIiwiaXRlbU5hbWUiLCJucGNzTWFwIiwiTWFwIiwiZ2FtZUJnIiwiaXRlbXNNYXAiLCJkb29yc01hcCIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImdldFNjZW5lIiwiX25hbWUiLCJpbml0U2NlbmVzIiwiaW5pdEFsbE5vZGVzIiwiaW5pdFBhdGhzIiwiaW5pdFRpcHMiLCJpbml0TWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVo7QUFDQSxJQUFJQyxTQUFTLEdBQUc7RUFDWkMsSUFBSSxFQUFFLENBRE07RUFFWkMsS0FBSyxFQUFFO0FBRkssQ0FBaEI7QUFJQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxJQURMO0lBRVJDLE9BQU8sRUFBRU4sRUFBRSxDQUFDSztFQUZKLENBSFA7RUFRTDtFQUdBRSxNQVhLLG9CQVdJO0lBQ0xQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ0MsT0FBaEMsR0FBMEMsSUFBMUM7SUFDQVYsRUFBRSxDQUFDUSxRQUFILENBQVlDLGlCQUFaLEdBQWdDRSxjQUFoQyxHQUFpRCxDQUFqRDtJQUNBWCxFQUFFLENBQUNRLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NHLE9BQWhDLEdBQTBDWixFQUFFLENBQUNhLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBQyxHQUFWLENBQTFDO0lBQ0FDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQjtNQUNaQyxTQUFTLEVBQUUsSUFEQztNQUVaQyxLQUFLLEVBQUUsSUFGSztNQUdaQyxTQUFTLEVBQUUsSUFIQztNQUlaQyxPQUFPLEVBQUUsSUFKRztNQUtaQyxFQUFFLEVBQUUsSUFMUTtNQU1aQyxZQUFZLEVBQUNDLE1BTkQ7TUFPWkMsUUFBUSxFQUFDRCxNQVBHO01BUVpFLFFBQVEsRUFBQ0YsTUFSRztNQVNaRyxPQUFPLEVBQUVDLEdBVEc7TUFVWkMsTUFBTSxFQUFDM0IsRUFBRSxDQUFDSyxJQVZFO01BV1p1QixRQUFRLEVBQUVGLEdBWEU7TUFZWkcsUUFBUSxFQUFFSDtJQVpFLENBQWhCO0VBY0gsQ0E3Qkk7RUErQkxJLEtBL0JLLG1CQStCRztJQUNKQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0lBQ0FqQixNQUFNLENBQUNDLFNBQVAsR0FBbUIsS0FBbkI7SUFDQUQsTUFBTSxDQUFDRSxLQUFQLEdBQWVyQixLQUFmO0lBQ0FtQixNQUFNLENBQUNHLFNBQVAsR0FBbUJyQixTQUFuQjtJQUNBa0IsTUFBTSxDQUFDSSxPQUFQLEdBQWlCLEdBQWpCO0lBQ0FKLE1BQU0sQ0FBQ0ssRUFBUCxHQUFZLENBQVo7SUFDQUwsTUFBTSxDQUFDUSxRQUFQLEdBQWlCLEdBQWpCO0lBQ0FSLE1BQU0sQ0FBQ1MsUUFBUCxHQUFpQixHQUFqQjtJQUNBVCxNQUFNLENBQUNNLFlBQVAsR0FBc0JyQixFQUFFLENBQUNRLFFBQUgsQ0FBWXlCLFFBQVosR0FBdUJDLEtBQTdDO0lBQ0FILE9BQU8sQ0FBQ0MsR0FBUixDQUFZakIsTUFBTSxDQUFDTSxZQUFuQjtJQUNBLEtBQUtjLFVBQUw7SUFDQSxLQUFLQyxZQUFMO0lBQ0EsS0FBS0MsU0FBTDtJQUNBLEtBQUtDLFFBQUwsR0FkSSxDQWVKO0VBQ0gsQ0EvQ0k7RUFpREw7RUFDQUgsVUFsREssd0JBa0RPLENBQ1gsQ0FuREk7RUFxREw7RUFDQUMsWUF0REssMEJBc0RVLENBQ2QsQ0F2REk7RUEwREw7RUFDQUMsU0EzREssdUJBMkRPLENBRVgsQ0E3REk7RUErREw7RUFDQUMsUUFoRUssc0JBZ0VNLENBQ1YsQ0FqRUk7RUFtRUxDLE9BbkVLLHFCQW1FSyxDQUNUO0FBcEVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmxldCBpbkFyciA9IFswLCAwXTtcbmxldCBjbG9zZUl0ZW0gPSB7XG4gICAgZG9vcjogMCxcbiAgICBnaG9zdDogMSxcbn1cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1hcE5vZGVzOiBjYy5Ob2RlLFxuICAgICAgICB1c2VJdGVtOiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSAwO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtNjQwKTtcbiAgICAgICAgd2luZG93Lkdsb2JhbCA9IHtcbiAgICAgICAgICAgIElzU2hvd2luZzogbnVsbCxcbiAgICAgICAgICAgIEluQXJyOiBudWxsLFxuICAgICAgICAgICAgQ2xvc2VJdGVtOiBudWxsLFxuICAgICAgICAgICAgY29udGFjdDogbnVsbCxcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgY3VycmVudFNjZW5lOlN0cmluZyxcbiAgICAgICAgICAgIGl0ZW1UeXBlOlN0cmluZyxcbiAgICAgICAgICAgIGl0ZW1OYW1lOlN0cmluZyxcbiAgICAgICAgICAgIG5wY3NNYXA6IE1hcCxcbiAgICAgICAgICAgIGdhbWVCZzpjYy5Ob2RlLFxuICAgICAgICAgICAgaXRlbXNNYXA6IE1hcCxcbiAgICAgICAgICAgIGRvb3JzTWFwOiBNYXAsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRcIik7XG4gICAgICAgIEdsb2JhbC5Jc1Nob3dpbmcgPSBmYWxzZTtcbiAgICAgICAgR2xvYmFsLkluQXJyID0gaW5BcnI7XG4gICAgICAgIEdsb2JhbC5DbG9zZUl0ZW0gPSBjbG9zZUl0ZW07XG4gICAgICAgIEdsb2JhbC5jb250YWN0ID0gJyAnO1xuICAgICAgICBHbG9iYWwuaWQgPSAwO1xuICAgICAgICBHbG9iYWwuaXRlbVR5cGU9ICcgJztcbiAgICAgICAgR2xvYmFsLml0ZW1OYW1lPSAnICc7XG4gICAgICAgIEdsb2JhbC5jdXJyZW50U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWwuY3VycmVudFNjZW5lKTtcbiAgICAgICAgdGhpcy5pbml0U2NlbmVzKCk7XG4gICAgICAgIHRoaXMuaW5pdEFsbE5vZGVzKCk7XG4gICAgICAgIHRoaXMuaW5pdFBhdGhzKCk7XG4gICAgICAgIHRoaXMuaW5pdFRpcHMoKTtcbiAgICAgICAgLy8gdGhpcy5pbml0TWFwKHRoaXMubWFwTm9kZXMpO1xuICAgIH0sXG5cbiAgICAvL+WKoOi9veWcuuaZr+WSjOmXqOS5i+mXtOeahOWvueW6lOWFs+ezu1xuICAgIGluaXRTY2VuZXMoKXtcbiAgICB9LFxuXG4gICAgLy/ph43mlrDliqDovb3lnLrmma/vvIzmgaLlpI3ljp/lhYjnmoTnianlk4HnirbmgIFcbiAgICBpbml0QWxsTm9kZXMoKSB7XG4gICAgfSxcbiAgICBcblxuICAgIC8v6K6w5b2V5omA5pyJ55qE6IqC54K56Lev5b6E77yM5Y+v6YCJXG4gICAgaW5pdFBhdGhzKCkge1xuXG4gICAgfSxcblxuICAgIC8v5Yid5aeL5YyW5by556qX55qE54q25oCBXG4gICAgaW5pdFRpcHMoKSB7XG4gICAgfSxcblxuICAgIGluaXRNYXAoKSB7XG4gICAgfSxcblxufSk7XG4iXX0=