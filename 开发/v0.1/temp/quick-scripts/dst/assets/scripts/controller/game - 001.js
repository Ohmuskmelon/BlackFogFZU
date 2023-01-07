
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
    cc.director.getPhysicsManager().gravity = cc.v2(0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXIvZ2FtZSAtIDAwMS5qcyJdLCJuYW1lcyI6WyJpbkFyciIsImNsb3NlSXRlbSIsImRvb3IiLCJnaG9zdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWFwTm9kZXMiLCJOb2RlIiwidXNlSXRlbSIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiZGVidWdEcmF3RmxhZ3MiLCJncmF2aXR5IiwidjIiLCJ3aW5kb3ciLCJHbG9iYWwiLCJJc1Nob3dpbmciLCJJbkFyciIsIkNsb3NlSXRlbSIsImNvbnRhY3QiLCJpZCIsImN1cnJlbnRTY2VuZSIsIlN0cmluZyIsIml0ZW1UeXBlIiwiaXRlbU5hbWUiLCJucGNzTWFwIiwiTWFwIiwiZ2FtZUJnIiwiaXRlbXNNYXAiLCJkb29yc01hcCIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImdldFNjZW5lIiwiX25hbWUiLCJpbml0U2NlbmVzIiwiaW5pdEFsbE5vZGVzIiwiaW5pdFBhdGhzIiwiaW5pdFRpcHMiLCJpbml0TWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVo7QUFDQSxJQUFJQyxTQUFTLEdBQUc7RUFDWkMsSUFBSSxFQUFFLENBRE07RUFFWkMsS0FBSyxFQUFFO0FBRkssQ0FBaEI7QUFJQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxJQURMO0lBRVJDLE9BQU8sRUFBRU4sRUFBRSxDQUFDSztFQUZKLENBSFA7RUFRTDtFQUdBRSxNQVhLLG9CQVdJO0lBQ0xQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ0MsT0FBaEMsR0FBMEMsSUFBMUM7SUFDQVYsRUFBRSxDQUFDUSxRQUFILENBQVlDLGlCQUFaLEdBQWdDRSxjQUFoQyxHQUFpRCxDQUFqRDtJQUNBWCxFQUFFLENBQUNRLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NHLE9BQWhDLEdBQTBDWixFQUFFLENBQUNhLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVCxDQUExQztJQUNBQyxNQUFNLENBQUNDLE1BQVAsR0FBZ0I7TUFDWkMsU0FBUyxFQUFFLElBREM7TUFFWkMsS0FBSyxFQUFFLElBRks7TUFHWkMsU0FBUyxFQUFFLElBSEM7TUFJWkMsT0FBTyxFQUFFLElBSkc7TUFLWkMsRUFBRSxFQUFFLElBTFE7TUFNWkMsWUFBWSxFQUFDQyxNQU5EO01BT1pDLFFBQVEsRUFBQ0QsTUFQRztNQVFaRSxRQUFRLEVBQUNGLE1BUkc7TUFTWkcsT0FBTyxFQUFFQyxHQVRHO01BVVpDLE1BQU0sRUFBQzNCLEVBQUUsQ0FBQ0ssSUFWRTtNQVdadUIsUUFBUSxFQUFFRixHQVhFO01BWVpHLFFBQVEsRUFBRUg7SUFaRSxDQUFoQjtFQWNILENBN0JJO0VBK0JMSSxLQS9CSyxtQkErQkc7SUFDSkMsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtJQUNBakIsTUFBTSxDQUFDQyxTQUFQLEdBQW1CLEtBQW5CO0lBQ0FELE1BQU0sQ0FBQ0UsS0FBUCxHQUFlckIsS0FBZjtJQUNBbUIsTUFBTSxDQUFDRyxTQUFQLEdBQW1CckIsU0FBbkI7SUFDQWtCLE1BQU0sQ0FBQ0ksT0FBUCxHQUFpQixHQUFqQjtJQUNBSixNQUFNLENBQUNLLEVBQVAsR0FBWSxDQUFaO0lBQ0FMLE1BQU0sQ0FBQ1EsUUFBUCxHQUFpQixHQUFqQjtJQUNBUixNQUFNLENBQUNTLFFBQVAsR0FBaUIsR0FBakI7SUFDQVQsTUFBTSxDQUFDTSxZQUFQLEdBQXNCckIsRUFBRSxDQUFDUSxRQUFILENBQVl5QixRQUFaLEdBQXVCQyxLQUE3QztJQUNBSCxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE1BQU0sQ0FBQ00sWUFBbkI7SUFDQSxLQUFLYyxVQUFMO0lBQ0EsS0FBS0MsWUFBTDtJQUNBLEtBQUtDLFNBQUw7SUFDQSxLQUFLQyxRQUFMLEdBZEksQ0FlSjtFQUNILENBL0NJO0VBaURMO0VBQ0FILFVBbERLLHdCQWtETyxDQUNYLENBbkRJO0VBcURMO0VBQ0FDLFlBdERLLDBCQXNEVSxDQUNkLENBdkRJO0VBMERMO0VBQ0FDLFNBM0RLLHVCQTJETyxDQUVYLENBN0RJO0VBK0RMO0VBQ0FDLFFBaEVLLHNCQWdFTSxDQUNWLENBakVJO0VBbUVMQyxPQW5FSyxxQkFtRUssQ0FDVDtBQXBFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5sZXQgaW5BcnIgPSBbMCwgMF07XG5sZXQgY2xvc2VJdGVtID0ge1xuICAgIGRvb3I6IDAsXG4gICAgZ2hvc3Q6IDEsXG59XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtYXBOb2RlczogY2MuTm9kZSxcbiAgICAgICAgdXNlSXRlbTogY2MuTm9kZVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMDtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwgMCk7XG4gICAgICAgIHdpbmRvdy5HbG9iYWwgPSB7XG4gICAgICAgICAgICBJc1Nob3dpbmc6IG51bGwsXG4gICAgICAgICAgICBJbkFycjogbnVsbCxcbiAgICAgICAgICAgIENsb3NlSXRlbTogbnVsbCxcbiAgICAgICAgICAgIGNvbnRhY3Q6IG51bGwsXG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGN1cnJlbnRTY2VuZTpTdHJpbmcsXG4gICAgICAgICAgICBpdGVtVHlwZTpTdHJpbmcsXG4gICAgICAgICAgICBpdGVtTmFtZTpTdHJpbmcsXG4gICAgICAgICAgICBucGNzTWFwOiBNYXAsXG4gICAgICAgICAgICBnYW1lQmc6Y2MuTm9kZSxcbiAgICAgICAgICAgIGl0ZW1zTWFwOiBNYXAsXG4gICAgICAgICAgICBkb29yc01hcDogTWFwLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0XCIpO1xuICAgICAgICBHbG9iYWwuSXNTaG93aW5nID0gZmFsc2U7XG4gICAgICAgIEdsb2JhbC5JbkFyciA9IGluQXJyO1xuICAgICAgICBHbG9iYWwuQ2xvc2VJdGVtID0gY2xvc2VJdGVtO1xuICAgICAgICBHbG9iYWwuY29udGFjdCA9ICcgJztcbiAgICAgICAgR2xvYmFsLmlkID0gMDtcbiAgICAgICAgR2xvYmFsLml0ZW1UeXBlPSAnICc7XG4gICAgICAgIEdsb2JhbC5pdGVtTmFtZT0gJyAnO1xuICAgICAgICBHbG9iYWwuY3VycmVudFNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5fbmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coR2xvYmFsLmN1cnJlbnRTY2VuZSk7XG4gICAgICAgIHRoaXMuaW5pdFNjZW5lcygpO1xuICAgICAgICB0aGlzLmluaXRBbGxOb2RlcygpO1xuICAgICAgICB0aGlzLmluaXRQYXRocygpO1xuICAgICAgICB0aGlzLmluaXRUaXBzKCk7XG4gICAgICAgIC8vIHRoaXMuaW5pdE1hcCh0aGlzLm1hcE5vZGVzKTtcbiAgICB9LFxuXG4gICAgLy/liqDovb3lnLrmma/lkozpl6jkuYvpl7TnmoTlr7nlupTlhbPns7tcbiAgICBpbml0U2NlbmVzKCl7XG4gICAgfSxcblxuICAgIC8v6YeN5paw5Yqg6L295Zy65pmv77yM5oGi5aSN5Y6f5YWI55qE54mp5ZOB54q25oCBXG4gICAgaW5pdEFsbE5vZGVzKCkge1xuICAgIH0sXG4gICAgXG5cbiAgICAvL+iusOW9leaJgOacieeahOiKgueCuei3r+W+hO+8jOWPr+mAiVxuICAgIGluaXRQYXRocygpIHtcblxuICAgIH0sXG5cbiAgICAvL+WIneWni+WMluW8ueeql+eahOeKtuaAgVxuICAgIGluaXRUaXBzKCkge1xuICAgIH0sXG5cbiAgICBpbml0TWFwKCkge1xuICAgIH0sXG5cbn0pO1xuIl19