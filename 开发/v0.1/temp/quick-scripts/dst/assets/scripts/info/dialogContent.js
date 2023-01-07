
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
    // 纸条内容视为npc
    //chp1 三楼走廊的 纸条内容 
    var chp1_zoulangF3_d1_content = [{
      role: 2,
      content: "今天是2015年元旦，我和我的舍友们好像来到了传说中的黑雾福大，宿舍楼里好像就只有我和我的舍友们，听说在这里会看到以前学长的留言，那我也留下我的留言吧。"
    }, {
      role: 2,
      content: "如果现在正在看留言的你被某个密码锁困住了，别担心，可能这个锁的密码能够从某些墙上找到一些线索"
    }, {
      role: 1,
      content: "原来这里就是黑雾福大，以前听学姐提到过，听说黑雾福大会把学生和老师困在这里，我还以为是都市传说呢，没想到是真的。"
    }, {
      role: 1,
      content: "虽然不清楚具体是什么情况，总之先出宿舍楼吧。"
    }, {
      role: 1,
      content: "既然是黑雾福大，那也别怪我私闯宿舍了，我应该去其他宿舍找找线索。"
    } //当前的testData
    ];
    var contents_Chp1_Scene1 = new Map();
    contents_Chp1_Scene1['npc1'] = chp1_zoulangF3_d1_content;
    window.Dialog.contents['chp1_三楼走廊'] = contents_Chp1_Scene1;
    var chp1_301_paper1_content = [{
      role: 2,
      content: "如果有人看到的话，请记住这间宿舍的门会自己消失，但是也许是这间宿舍原来的成员有强迫症，将外面挂着的衣服按照一定的顺序来排序，门就能出现，真是神奇。"
    }, {
      role: 1,
      content: "看起来门的消失和外面挂着的衣服有关，虽然很扯蛋，但是我要去看看，也许我能找到什么线索"
    }];
    var chp1_301_paper2_content = [{
      role: 2,
      content: "我的强迫症实在太严重了，但是我的舍友老是会忘记我衣物的晾晒顺序"
    }, {
      role: 2,
      content: "「4231」，希望这样的方法能够让舍友记住"
    }, {
      role: 2,
      content: "为了防止舍友忘记这串数字代表什么，我就给个提示吧："
    }, {
      role: 2,
      content: "妈妈给小明买了一条破洞裤，这条裤子在膝盖处有一处破洞，但是小明却坚持声称这条裤子有4个洞，其实妈妈是对的，小明也是对的"
    }];
    var contents_Chp1_301 = new Map();
    contents_Chp1_301['npc1'] = chp1_301_paper1_content;
    contents_Chp1_301['npc2'] = chp1_301_paper2_content;
    window.Dialog.contents['chp1_301'] = contents_Chp1_301;
    var chp1_2Floor_paper1_content = [{
      role: 2,
      content: "真的是很震惊！没想到201和203在黑雾福大中竟如此诡异，它们是完全对称的！希望之后读到这个纸条的人一定要记住"
    }, {
      role: 1,
      content: "201和203是对称的？也许这是我能进入202宿舍的关键"
    }];
    var contents_Chp1_2Floor = new Map();
    contents_Chp1_2Floor['npc1'] = chp1_2Floor_paper1_content;
    window.Dialog.contents['chp1_二楼走廊'] = contents_Chp1_2Floor; //chp2 scene1 contents

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
    window.Dialog.contents['chp2_scene1'] = contents_Chp2_Scene1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2luZm8vZGlhbG9nQ29udGVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIndpbmRvdyIsIkRpYWxvZyIsImNvbnRlbnRzIiwiTWFwIiwic3RhcnQiLCJjaHAxX3pvdWxhbmdGM19kMV9jb250ZW50Iiwicm9sZSIsImNvbnRlbnQiLCJjb250ZW50c19DaHAxX1NjZW5lMSIsImNocDFfMzAxX3BhcGVyMV9jb250ZW50IiwiY2hwMV8zMDFfcGFwZXIyX2NvbnRlbnQiLCJjb250ZW50c19DaHAxXzMwMSIsImNocDFfMkZsb29yX3BhcGVyMV9jb250ZW50IiwiY29udGVudHNfQ2hwMV8yRmxvb3IiLCJjaHAyX3NjZW5lMV9ucGMxX2NvbnRlbnQiLCJjaHAyX3NjZW5lMV9ucGMyX2NvbnRlbnQiLCJjb250ZW50c19DaHAyX1NjZW5lMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLEVBSFA7RUFNTDtFQUVBQyxNQVJLLG9CQVFLO0lBQ05DLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQjtNQUNaQyxRQUFRLEVBQUNDO0lBREcsQ0FBaEI7RUFHSCxDQVpJO0VBY0xDLEtBZEssbUJBY0k7SUFHTDtJQUVBO0lBQ0EsSUFBSUMseUJBQXlCLEdBQUUsQ0FDM0I7TUFBQ0MsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRDJCLEVBRTNCO01BQUNELElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUYyQixFQUczQjtNQUFDRCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FIMkIsRUFJM0I7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBSjJCLEVBSzNCO01BQUNELElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUwyQixDQUs0QjtJQUw1QixDQUEvQjtJQVFBLElBQUlDLG9CQUFvQixHQUFHLElBQUlMLEdBQUosRUFBM0I7SUFDQUssb0JBQW9CLENBQUMsTUFBRCxDQUFwQixHQUErQkgseUJBQS9CO0lBRUFMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxRQUFkLENBQXVCLFdBQXZCLElBQXNDTSxvQkFBdEM7SUFHQSxJQUFJQyx1QkFBdUIsR0FBRSxDQUN6QjtNQUFDSCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FEeUIsRUFFekI7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRnlCLENBQTdCO0lBS0EsSUFBSUcsdUJBQXVCLEdBQUUsQ0FDekI7TUFBQ0osSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRHlCLEVBRXpCO01BQUNELElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUZ5QixFQUd6QjtNQUFDRCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FIeUIsRUFJekI7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBSnlCLENBQTdCO0lBT0EsSUFBSUksaUJBQWlCLEdBQUcsSUFBSVIsR0FBSixFQUF4QjtJQUNBUSxpQkFBaUIsQ0FBQyxNQUFELENBQWpCLEdBQTRCRix1QkFBNUI7SUFDQUUsaUJBQWlCLENBQUMsTUFBRCxDQUFqQixHQUE0QkQsdUJBQTVCO0lBR0FWLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxRQUFkLENBQXVCLFVBQXZCLElBQXFDUyxpQkFBckM7SUFHQSxJQUFJQywwQkFBMEIsR0FBRSxDQUM1QjtNQUFDTixJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FENEIsRUFFNUI7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRjRCLENBQWhDO0lBTUEsSUFBSU0sb0JBQW9CLEdBQUcsSUFBSVYsR0FBSixFQUEzQjtJQUNBVSxvQkFBb0IsQ0FBQyxNQUFELENBQXBCLEdBQStCRCwwQkFBL0I7SUFFQVosTUFBTSxDQUFDQyxNQUFQLENBQWNDLFFBQWQsQ0FBdUIsV0FBdkIsSUFBc0NXLG9CQUF0QyxDQWpESyxDQXNETDs7SUFFQSxJQUFJQyx3QkFBd0IsR0FBRSxDQUMxQjtNQUFDUixJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FEMEIsRUFFMUI7TUFBQ0QsSUFBSSxFQUFDLENBQU47TUFBU0MsT0FBTyxFQUFDO0lBQWpCLENBRjBCLENBRUs7SUFGTCxDQUE5QjtJQU9BLElBQUlRLHdCQUF3QixHQUFFLENBQzFCO01BQUNULElBQUksRUFBQyxDQUFOO01BQVNDLE9BQU8sRUFBQztJQUFqQixDQUQwQixFQUUxQjtNQUFDRCxJQUFJLEVBQUMsQ0FBTjtNQUFTQyxPQUFPLEVBQUM7SUFBakIsQ0FGMEIsQ0FFYTtJQUZiLENBQTlCO0lBTUEsSUFBSVMsb0JBQW9CLEdBQUcsSUFBSWIsR0FBSixFQUEzQjtJQUNBYSxvQkFBb0IsQ0FBQyxNQUFELENBQXBCLEdBQStCRix3QkFBL0I7SUFDQUUsb0JBQW9CLENBQUMsTUFBRCxDQUFwQixHQUErQkQsd0JBQS9CO0lBRUFmLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxRQUFkLENBQXVCLGFBQXZCLElBQXdDYyxvQkFBeEM7RUFDSCxDQXhGSSxDQTBGTDs7QUExRkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB3aW5kb3cuRGlhbG9nID0ge1xuICAgICAgICAgICAgY29udGVudHM6TWFwLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHsgXG5cblxuICAgICAgICAvLyDnurjmnaHlhoXlrrnop4bkuLpucGNcblxuICAgICAgICAvL2NocDEg5LiJ5qW86LWw5buK55qEIOe6uOadoeWGheWuuSBcbiAgICAgICAgbGV0IGNocDFfem91bGFuZ0YzX2QxX2NvbnRlbnQgPVtcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCLku4rlpKnmmK8yMDE15bm05YWD5pem77yM5oiR5ZKM5oiR55qE6IiN5Y+L5Lus5aW95YOP5p2l5Yiw5LqG5Lyg6K+05Lit55qE6buR6Zu+56aP5aSn77yM5a6/6IiN5qW86YeM5aW95YOP5bCx5Y+q5pyJ5oiR5ZKM5oiR55qE6IiN5Y+L5Lus77yM5ZCs6K+05Zyo6L+Z6YeM5Lya55yL5Yiw5Lul5YmN5a2m6ZW/55qE55WZ6KiA77yM6YKj5oiR5Lmf55WZ5LiL5oiR55qE55WZ6KiA5ZCn44CCXCJ9LFxuICAgICAgICAgICAge3JvbGU6MiwgY29udGVudDpcIuWmguaenOeOsOWcqOato+WcqOeci+eVmeiogOeahOS9oOiiq+afkOS4quWvhueggemUgeWbsOS9j+S6hu+8jOWIq+aLheW/g++8jOWPr+iDvei/meS4qumUgeeahOWvhueggeiDveWkn+S7juafkOS6m+WimeS4iuaJvuWIsOS4gOS6m+e6v+e0olwifSxcbiAgICAgICAgICAgIHtyb2xlOjEsIGNvbnRlbnQ6XCLljp/mnaXov5nph4zlsLHmmK/pu5Hpm77npo/lpKfvvIzku6XliY3lkKzlrablp5Dmj5DliLDov4fvvIzlkKzor7Tpu5Hpm77npo/lpKfkvJrmiorlrabnlJ/lkozogIHluIjlm7DlnKjov5nph4zvvIzmiJHov5jku6XkuLrmmK/pg73luILkvKDor7TlkaLvvIzmsqHmg7PliLDmmK/nnJ/nmoTjgIJcIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50Olwi6Jm954S25LiN5riF5qWa5YW35L2T5piv5LuA5LmI5oOF5Ya177yM5oC75LmL5YWI5Ye65a6/6IiN5qW85ZCn44CCXCJ9LFxuICAgICAgICAgICAge3JvbGU6MSwgY29udGVudDpcIuaXoueEtuaYr+m7kembvuemj+Wkp++8jOmCo+S5n+WIq+aAquaIkeengemXr+Wuv+iIjeS6hu+8jOaIkeW6lOivpeWOu+WFtuS7luWuv+iIjeaJvuaJvue6v+e0ouOAglwifSwgIC8v5b2T5YmN55qEdGVzdERhdGFcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb250ZW50c19DaHAxX1NjZW5lMSA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29udGVudHNfQ2hwMV9TY2VuZTFbJ25wYzEnXSA9IGNocDFfem91bGFuZ0YzX2QxX2NvbnRlbnQ7XG5cbiAgICAgICAgd2luZG93LkRpYWxvZy5jb250ZW50c1snY2hwMV/kuInmpbzotbDlu4onXSA9IGNvbnRlbnRzX0NocDFfU2NlbmUxO1xuXG5cbiAgICAgICAgbGV0IGNocDFfMzAxX3BhcGVyMV9jb250ZW50ID1bXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwi5aaC5p6c5pyJ5Lq655yL5Yiw55qE6K+d77yM6K+36K6w5L2P6L+Z6Ze05a6/6IiN55qE6Zeo5Lya6Ieq5bex5raI5aSx77yM5L2G5piv5Lmf6K645piv6L+Z6Ze05a6/6IiN5Y6f5p2l55qE5oiQ5ZGY5pyJ5by66L+r55eH77yM5bCG5aSW6Z2i5oyC552A55qE6KGj5pyN5oyJ54Wn5LiA5a6a55qE6aG65bqP5p2l5o6S5bqP77yM6Zeo5bCx6IO95Ye6546w77yM55yf5piv56We5aWH44CCXCJ9LFxuICAgICAgICAgICAge3JvbGU6MSwgY29udGVudDpcIueci+i1t+adpemXqOeahOa2iOWkseWSjOWklumdouaMguedgOeahOiho+acjeacieWFs++8jOiZveeEtuW+iOaJr+ibi++8jOS9huaYr+aIkeimgeWOu+eci+eci++8jOS5n+iuuOaIkeiDveaJvuWIsOS7gOS5iOe6v+e0olwifSxcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgY2hwMV8zMDFfcGFwZXIyX2NvbnRlbnQgPVtcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCLmiJHnmoTlvLrov6vnl4flrp7lnKjlpKrkuKXph43kuobvvIzkvYbmmK/miJHnmoToiI3lj4vogIHmmK/kvJrlv5jorrDmiJHooaPniannmoTmmb7mmZLpobrluo9cIn0sXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwi44CMNDIzMeOAje+8jOW4jOacm+i/meagt+eahOaWueazleiDveWkn+iuqeiIjeWPi+iusOS9j1wifSxcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCLkuLrkuobpmLLmraLoiI3lj4vlv5jorrDov5nkuLLmlbDlrZfku6Pooajku4DkuYjvvIzmiJHlsLHnu5nkuKrmj5DnpLrlkKfvvJpcIn0sXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwi5aaI5aaI57uZ5bCP5piO5Lmw5LqG5LiA5p2h56C05rSe6KOk77yM6L+Z5p2h6KOk5a2Q5Zyo6Iad55uW5aSE5pyJ5LiA5aSE56C05rSe77yM5L2G5piv5bCP5piO5Y205Z2a5oyB5aOw56ew6L+Z5p2h6KOk5a2Q5pyJNOS4qua0nu+8jOWFtuWunuWmiOWmiOaYr+WvueeahO+8jOWwj+aYjuS5n+aYr+WvueeahFwifSxcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb250ZW50c19DaHAxXzMwMSA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29udGVudHNfQ2hwMV8zMDFbJ25wYzEnXSA9IGNocDFfMzAxX3BhcGVyMV9jb250ZW50O1xuICAgICAgICBjb250ZW50c19DaHAxXzMwMVsnbnBjMiddID0gY2hwMV8zMDFfcGFwZXIyX2NvbnRlbnQ7XG5cblxuICAgICAgICB3aW5kb3cuRGlhbG9nLmNvbnRlbnRzWydjaHAxXzMwMSddID0gY29udGVudHNfQ2hwMV8zMDE7XG5cblxuICAgICAgICBsZXQgY2hwMV8yRmxvb3JfcGFwZXIxX2NvbnRlbnQgPVtcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCLnnJ/nmoTmmK/lvojpnIfmg4rvvIHmsqHmg7PliLAyMDHlkowyMDPlnKjpu5Hpm77npo/lpKfkuK3nq5/lpoLmraTor6HlvILvvIzlroPku6zmmK/lrozlhajlr7nnp7DnmoTvvIHluIzmnJvkuYvlkI7or7vliLDov5nkuKrnurjmnaHnmoTkurrkuIDlrpropoHorrDkvY9cIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50OlwiMjAx5ZKMMjAz5piv5a+556ew55qE77yf5Lmf6K646L+Z5piv5oiR6IO96L+b5YWlMjAy5a6/6IiN55qE5YWz6ZSuXCJ9LFxuICAgICAgICBdO1xuXG4gICAgICAgIFxuICAgICAgICBsZXQgY29udGVudHNfQ2hwMV8yRmxvb3IgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnRlbnRzX0NocDFfMkZsb29yWyducGMxJ10gPSBjaHAxXzJGbG9vcl9wYXBlcjFfY29udGVudDtcbiBcbiAgICAgICAgd2luZG93LkRpYWxvZy5jb250ZW50c1snY2hwMV/kuozmpbzotbDlu4onXSA9IGNvbnRlbnRzX0NocDFfMkZsb29yO1xuXG5cblxuXG4gICAgICAgIC8vY2hwMiBzY2VuZTEgY29udGVudHNcblxuICAgICAgICBsZXQgY2hwMl9zY2VuZTFfbnBjMV9jb250ZW50ID1bXG4gICAgICAgICAgICB7cm9sZToyLCBjb250ZW50Olwic2NlbmUgMiBucGMxXCJ9LFxuICAgICAgICAgICAge3JvbGU6MSwgY29udGVudDpcImFhYWFhYWFhXCJ9LCAgLy/lvZPliY3nmoR0ZXN0RGF0YVxuICAgICAgICBdO1xuXG5cbiAgICAgICAgXG4gICAgICAgIGxldCBjaHAyX3NjZW5lMV9ucGMyX2NvbnRlbnQgPVtcbiAgICAgICAgICAgIHtyb2xlOjIsIGNvbnRlbnQ6XCJzY2VuZSAyIG5wYzFcIn0sXG4gICAgICAgICAgICB7cm9sZToxLCBjb250ZW50OlwiYmJiYmJiYmJiYmJiYmJiYlwifSwgIC8v5b2T5YmN55qEdGVzdERhdGFcbiAgICAgICAgXTtcblxuXG4gICAgICAgIGxldCBjb250ZW50c19DaHAyX1NjZW5lMSA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29udGVudHNfQ2hwMl9TY2VuZTFbJ25wYzEnXSA9IGNocDJfc2NlbmUxX25wYzFfY29udGVudCA7XG4gICAgICAgIGNvbnRlbnRzX0NocDJfU2NlbmUxWyducGMyJ10gPSBjaHAyX3NjZW5lMV9ucGMyX2NvbnRlbnQgO1xuXG4gICAgICAgIHdpbmRvdy5EaWFsb2cuY29udGVudHNbJ2NocDJfc2NlbmUxJ10gPSBjb250ZW50c19DaHAyX1NjZW5lMTtcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==