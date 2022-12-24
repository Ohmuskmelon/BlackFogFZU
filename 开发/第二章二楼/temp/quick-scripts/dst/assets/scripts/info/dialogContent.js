
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/info/dialogContent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27d86vwvnRCfL1Wlmh2eoVl', 'dialogContent');
// scripts/info/dialogContent.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    window.Dialog = {
      contents: Map
    };
  },
  start: function start() {
    //chp1 scene 1 contents
    var chp1_scene1_npc1_content = [{
      role: 2,
      content: "你好，我是NPC.欢迎来到场景1"
    }, {
      role: 1,
      content: "dadadadada"
    } //当前的testData
    ];
    var chp1_scene1_npc2_content = [{
      role: 2,
      content: "This is scene1"
    }, {
      role: 1,
      content: "hhhhhhhhh"
    } //当前的testData
    ];
    var chp1_scene1_npc3_content = [{
      role: 2,
      content: "scene1 npc3"
    }, {
      role: 1,
      content: "jjjjjjjj"
    } //当前的testData
    ];
    var contents_Chp1_Scene1 = new Map();
    contents_Chp1_Scene1['npc1'] = chp1_scene1_npc1_content;
    contents_Chp1_Scene1['npc2'] = chp1_scene1_npc2_content;
    contents_Chp1_Scene1['npc3'] = chp1_scene1_npc3_content;
    Dialog.contents['chp1_scene1'] = contents_Chp1_Scene1; //chp2 scene1 contents

    var chp2_scene1_npc1_content = [{
      role: 2,
      content: "scene 2 npc1"
    }, {
      role: 1,
      content: "aaaaaaaa"
    } //当前的testData
    ];
    var chp2_scene1_npc2_content = [{
      role: 2,
      content: "scene 2 npc1"
    }, {
      role: 1,
      content: "bbbbbbbbbbbbbbbb"
    } //当前的testData
    ];
    var contents_Chp2_Scene1 = new Map();
    contents_Chp2_Scene1['npc1'] = chp2_scene1_npc1_content;
    contents_Chp2_Scene1['npc2'] = chp2_scene1_npc2_content;
    Dialog.contents['chp2_scene1'] = contents_Chp2_Scene1;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vZGlhbG9nQ29udGVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIndpbmRvdyIsIkRpYWxvZyIsImNvbnRlbnRzIiwiTWFwIiwic3RhcnQiLCJjaHAxX3NjZW5lMV9ucGMxX2NvbnRlbnQiLCJyb2xlIiwiY29udGVudCIsImNocDFfc2NlbmUxX25wYzJfY29udGVudCIsImNocDFfc2NlbmUxX25wYzNfY29udGVudCIsImNvbnRlbnRzX0NocDFfU2NlbmUxIiwiY2hwMl9zY2VuZTFfbnBjMV9jb250ZW50IiwiY2hwMl9zY2VuZTFfbnBjMl9jb250ZW50IiwiY29udGVudHNfQ2hwMl9TY2VuZTEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBTUw7RUFFQUMsTUFSSyxvQkFRSztJQUNOQyxNQUFNLENBQUNDLE1BQVAsR0FBZ0I7TUFDWkMsUUFBUSxFQUFDQztJQURHLENBQWhCO0VBR0gsQ0FaSTtFQWNMQyxLQWRLLG1CQWNJO0lBR0w7SUFDQSxJQUFJQyx3QkFBd0IsR0FBRSxDQUMxQjtNQUFDQyxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FEMEIsRUFFMUI7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRjBCLENBRU87SUFGUCxDQUE5QjtJQUlBLElBQUlDLHdCQUF3QixHQUFFLENBQzFCO01BQUNGLElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUQwQixFQUUxQjtNQUFDRCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FGMEIsQ0FFTTtJQUZOLENBQTlCO0lBS0EsSUFBSUUsd0JBQXdCLEdBQUUsQ0FDMUI7TUFBQ0gsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRDBCLEVBRTFCO01BQUNELElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUYwQixDQUVLO0lBRkwsQ0FBOUI7SUFLQSxJQUFJRyxvQkFBb0IsR0FBRyxJQUFJUCxHQUFKLEVBQTNCO0lBQ0FPLG9CQUFvQixDQUFDLE1BQUQsQ0FBcEIsR0FBK0JMLHdCQUEvQjtJQUNBSyxvQkFBb0IsQ0FBQyxNQUFELENBQXBCLEdBQStCRix3QkFBL0I7SUFDQUUsb0JBQW9CLENBQUMsTUFBRCxDQUFwQixHQUErQkQsd0JBQS9CO0lBRUFSLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixhQUFoQixJQUFpQ1Esb0JBQWpDLENBdkJLLENBNEJMOztJQUVBLElBQUlDLHdCQUF3QixHQUFFLENBQzFCO01BQUNMLElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUQwQixFQUUxQjtNQUFDRCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FGMEIsQ0FFSztJQUZMLENBQTlCO0lBT0EsSUFBSUssd0JBQXdCLEdBQUUsQ0FDMUI7TUFBQ04sSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRDBCLEVBRTFCO01BQUNELElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUYwQixDQUVhO0lBRmIsQ0FBOUI7SUFNQSxJQUFJTSxvQkFBb0IsR0FBRyxJQUFJVixHQUFKLEVBQTNCO0lBQ0FVLG9CQUFvQixDQUFDLE1BQUQsQ0FBcEIsR0FBK0JGLHdCQUEvQjtJQUNBRSxvQkFBb0IsQ0FBQyxNQUFELENBQXBCLEdBQStCRCx3QkFBL0I7SUFFQVgsTUFBTSxDQUFDQyxRQUFQLENBQWdCLGFBQWhCLElBQWlDVyxvQkFBakM7RUFDSCxDQTlESSxDQWdFTDs7QUFoRUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB3aW5kb3cuRGlhbG9nID0ge1xuICAgICAgICAgICAgY29udGVudHM6TWFwLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHsgXG5cblxuICAgICAgICAvL2NocDEgc2NlbmUgMSBjb250ZW50c1xuICAgICAgICBsZXQgY2hwMV9zY2VuZTFfbnBjMV9jb250ZW50ID1bXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwi5L2g5aW977yM5oiR5pivTlBDLuasoui/juadpeWIsOWcuuaZrzFcIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50OlwiZGFkYWRhZGFkYVwifSwgIC8v5b2T5YmN55qEdGVzdERhdGFcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IGNocDFfc2NlbmUxX25wYzJfY29udGVudCA9W1xuICAgICAgICAgICAge3JvbGU6MiwgY29udGVudDpcIlRoaXMgaXMgc2NlbmUxXCJ9LFxuICAgICAgICAgICAge3JvbGU6MSwgY29udGVudDpcImhoaGhoaGhoaFwifSwgIC8v5b2T5YmN55qEdGVzdERhdGFcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgY2hwMV9zY2VuZTFfbnBjM19jb250ZW50ID1bXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwic2NlbmUxIG5wYzNcIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50OlwiampqampqampcIn0sICAvL+W9k+WJjeeahHRlc3REYXRhXG4gICAgICAgIF07XG4gICAgICAgIFxuICAgICAgICBsZXQgY29udGVudHNfQ2hwMV9TY2VuZTEgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnRlbnRzX0NocDFfU2NlbmUxWyducGMxJ10gPSBjaHAxX3NjZW5lMV9ucGMxX2NvbnRlbnQgO1xuICAgICAgICBjb250ZW50c19DaHAxX1NjZW5lMVsnbnBjMiddID0gY2hwMV9zY2VuZTFfbnBjMl9jb250ZW50IDtcbiAgICAgICAgY29udGVudHNfQ2hwMV9TY2VuZTFbJ25wYzMnXSA9IGNocDFfc2NlbmUxX25wYzNfY29udGVudCA7XG5cbiAgICAgICAgRGlhbG9nLmNvbnRlbnRzWydjaHAxX3NjZW5lMSddID0gY29udGVudHNfQ2hwMV9TY2VuZTE7XG5cblxuXG5cbiAgICAgICAgLy9jaHAyIHNjZW5lMSBjb250ZW50c1xuXG4gICAgICAgIGxldCBjaHAyX3NjZW5lMV9ucGMxX2NvbnRlbnQgPVtcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCJzY2VuZSAyIG5wYzFcIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50OlwiYWFhYWFhYWFcIn0sICAvL+W9k+WJjeeahHRlc3REYXRhXG4gICAgICAgIF07XG5cblxuICAgICAgICBcbiAgICAgICAgbGV0IGNocDJfc2NlbmUxX25wYzJfY29udGVudCA9W1xuICAgICAgICAgICAge3JvbGU6MiwgY29udGVudDpcInNjZW5lIDIgbnBjMVwifSxcbiAgICAgICAgICAgIHtyb2xlOjEsIGNvbnRlbnQ6XCJiYmJiYmJiYmJiYmJiYmJiXCJ9LCAgLy/lvZPliY3nmoR0ZXN0RGF0YVxuICAgICAgICBdO1xuXG5cbiAgICAgICAgbGV0IGNvbnRlbnRzX0NocDJfU2NlbmUxID0gbmV3IE1hcCgpO1xuICAgICAgICBjb250ZW50c19DaHAyX1NjZW5lMVsnbnBjMSddID0gY2hwMl9zY2VuZTFfbnBjMV9jb250ZW50IDtcbiAgICAgICAgY29udGVudHNfQ2hwMl9TY2VuZTFbJ25wYzInXSA9IGNocDJfc2NlbmUxX25wYzJfY29udGVudCA7XG5cbiAgICAgICAgRGlhbG9nLmNvbnRlbnRzWydjaHAyX3NjZW5lMSddID0gY29udGVudHNfQ2hwMl9TY2VuZTE7XG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=