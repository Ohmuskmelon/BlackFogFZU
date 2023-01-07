
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/selfdialog/selfdialogInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33c67TAGcBLP5mG2Wa2jaeh', 'selfdialogInfo');
// scripts/selfdialog/selfdialogInfo.js

"use strict";

// 自言自语内容
var chp1_303_dialogs = {
  d1: "舍友怎么都不在了，不会背着我在外面偷偷卷吧。",
  d2: "今天外面怎么一个人都没有。",
  d3: "怎么感觉宿舍楼和昨天不太一样，不会我一觉起来睡蒙了吧。"
};
var chp1_zoulang_dialogs = {
  d1: "奇怪，这楼梯间怎么被上了把锁？还是输入密码的。我怎么以前都没意识到"
};
var chp1_302_dialogs = {
  d1: "怎么墙上有个数字？实在是奇怪，也许我应该查看一下",
  d2: "这间宿舍还是挺温馨的，只可惜现在只有我一个人",
  d3: "怎么好像有手机的声音，好像是左边那张床的柜子发出来的，话说……我的手机也不见了，现在拥有一部手机对我的帮助的确很大"
};
var chp1_301_dialogs = {
  d1: "诶，门呢？怎么突然消失了？看来陷入黑雾福大果然会有各种奇异现象的发生，让我想想……学姐曾经说过，如果陷入了黑雾福大，一定要多观察周围，寻找一切可以利用的线索脱身。嗯……我这就去周围看看",
  d2: "怎么墙上有个数字？实在是奇怪，也许我应该查看一下" //d3:"果然门出现了，看来这个黑雾福大也不过如此嘛，我要继续查看其他房间的线索",

};
var chp1_203_dialogs = {
  d1: "这里的洗衣机好像是可以使用的，也许我把它发动起来事情就会有所转机？"
};
var chp1_201_dialogs = {
  d1: "这台洗衣机没办法启动，但是上面的图案却始终显示「暗亮暗暗亮」，同时我捡到一张纸条，上面写着「请不要乱动杯子的顺序」，我试了一下，居然真的完全动不了"
};
var chp1_202_dialogs = {
  d1: "这把钥匙上面有舍管房间的标签，一定是舍管房间的钥匙"
};
var chp1_1Floor_dialogs = {
  d1: "前面就是舍管的房间了，需要一把钥匙才能打开",
  d2: "可恶，这个大门被锁住了，似乎需要某种机关才能解开，也许我要去舍管的房间找找看有没有什么线索"
};
var chp1_managerRoom_dialogs = {
  d1: "看来舍管平日里还是很忙的"
};
window.selfDialog = {
  chp1_303: chp1_303_dialogs,
  chp1_三楼走廊: chp1_zoulang_dialogs,
  chp1_301: chp1_301_dialogs,
  chp1_302: chp1_302_dialogs,
  chp1_203: chp1_203_dialogs,
  chp1_201: chp1_201_dialogs,
  chp1_202: chp1_202_dialogs,
  chp1_一楼大厅: chp1_1Floor_dialogs,
  chp1_舍管房间: chp1_managerRoom_dialogs
}; // 长纸条内容

window.papers = {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NlbGZkaWFsb2cvc2VsZmRpYWxvZ0luZm8uanMiXSwibmFtZXMiOlsiY2hwMV8zMDNfZGlhbG9ncyIsImQxIiwiZDIiLCJkMyIsImNocDFfem91bGFuZ19kaWFsb2dzIiwiY2hwMV8zMDJfZGlhbG9ncyIsImNocDFfMzAxX2RpYWxvZ3MiLCJjaHAxXzIwM19kaWFsb2dzIiwiY2hwMV8yMDFfZGlhbG9ncyIsImNocDFfMjAyX2RpYWxvZ3MiLCJjaHAxXzFGbG9vcl9kaWFsb2dzIiwiY2hwMV9tYW5hZ2VyUm9vbV9kaWFsb2dzIiwid2luZG93Iiwic2VsZkRpYWxvZyIsImNocDFfMzAzIiwiY2hwMV/kuInmpbzotbDlu4oiLCJjaHAxXzMwMSIsImNocDFfMzAyIiwiY2hwMV8yMDMiLCJjaHAxXzIwMSIsImNocDFfMjAyIiwiY2hwMV/kuIDmpbzlpKfljoUiLCJjaHAxX+iIjeeuoeaIv+mXtCIsInBhcGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBLElBQUlBLGdCQUFnQixHQUFHO0VBQ25CQyxFQUFFLEVBQUMsd0JBRGdCO0VBRW5CQyxFQUFFLEVBQUMsZUFGZ0I7RUFHbkJDLEVBQUUsRUFBQztBQUhnQixDQUF2QjtBQU1BLElBQUlDLG9CQUFvQixHQUFHO0VBQ3ZCSCxFQUFFLEVBQUM7QUFEb0IsQ0FBM0I7QUFJQSxJQUFJSSxnQkFBZ0IsR0FBRztFQUNuQkosRUFBRSxFQUFDLDBCQURnQjtFQUVuQkMsRUFBRSxFQUFDLHdCQUZnQjtFQUduQkMsRUFBRSxFQUFDO0FBSGdCLENBQXZCO0FBTUEsSUFBSUcsZ0JBQWdCLEdBQUc7RUFDbkJMLEVBQUUsRUFBQyw4RkFEZ0I7RUFFbkJDLEVBQUUsRUFBQywwQkFGZ0IsQ0FHbkI7O0FBSG1CLENBQXZCO0FBTUEsSUFBSUssZ0JBQWdCLEdBQUc7RUFDbkJOLEVBQUUsRUFBQztBQURnQixDQUF2QjtBQUlBLElBQUlPLGdCQUFnQixHQUFHO0VBQ25CUCxFQUFFLEVBQUM7QUFEZ0IsQ0FBdkI7QUFJQSxJQUFJUSxnQkFBZ0IsR0FBRztFQUNuQlIsRUFBRSxFQUFDO0FBRGdCLENBQXZCO0FBSUEsSUFBSVMsbUJBQW1CLEdBQUc7RUFDdEJULEVBQUUsRUFBQyx1QkFEbUI7RUFFdEJDLEVBQUUsRUFBQztBQUZtQixDQUExQjtBQUtBLElBQUlTLHdCQUF3QixHQUFHO0VBQzNCVixFQUFFLEVBQUM7QUFEd0IsQ0FBL0I7QUFJQVcsTUFBTSxDQUFDQyxVQUFQLEdBQW9CO0VBQ2hCQyxRQUFRLEVBQUNkLGdCQURPO0VBRWhCZSxTQUFTLEVBQUNYLG9CQUZNO0VBR2hCWSxRQUFRLEVBQUNWLGdCQUhPO0VBSWhCVyxRQUFRLEVBQUNaLGdCQUpPO0VBS2hCYSxRQUFRLEVBQUNYLGdCQUxPO0VBTWhCWSxRQUFRLEVBQUNYLGdCQU5PO0VBT2hCWSxRQUFRLEVBQUNYLGdCQVBPO0VBUWhCWSxTQUFTLEVBQUNYLG1CQVJNO0VBU2hCWSxTQUFTLEVBQUNYO0FBVE0sQ0FBcEIsRUFhQTs7QUFJQUMsTUFBTSxDQUFDVyxNQUFQLEdBQWdCLEVBQWhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIOiHquiogOiHquivreWGheWuuVxubGV0IGNocDFfMzAzX2RpYWxvZ3MgPSB7XG4gICAgZDE6XCLoiI3lj4vmgI7kuYjpg73kuI3lnKjkuobvvIzkuI3kvJrog4znnYDmiJHlnKjlpJbpnaLlgbflgbfljbflkKfjgIJcIixcbiAgICBkMjpcIuS7iuWkqeWklumdouaAjuS5iOS4gOS4quS6uumDveayoeacieOAglwiLFxuICAgIGQzOlwi5oCO5LmI5oSf6KeJ5a6/6IiN5qW85ZKM5pio5aSp5LiN5aSq5LiA5qC377yM5LiN5Lya5oiR5LiA6KeJ6LW35p2l552h6JKZ5LqG5ZCn44CCXCIsXG59O1xuXG5sZXQgY2hwMV96b3VsYW5nX2RpYWxvZ3MgPSB7XG4gICAgZDE6XCLlpYfmgKrvvIzov5nmpbzmoq/pl7TmgI7kuYjooqvkuIrkuobmiorplIHvvJ/ov5jmmK/ovpPlhaXlr4bnoIHnmoTjgILmiJHmgI7kuYjku6XliY3pg73msqHmhI/or4bliLBcIixcbn1cblxubGV0IGNocDFfMzAyX2RpYWxvZ3MgPSB7XG4gICAgZDE6XCLmgI7kuYjlopnkuIrmnInkuKrmlbDlrZfvvJ/lrp7lnKjmmK/lpYfmgKrvvIzkuZ/orrjmiJHlupTor6Xmn6XnnIvkuIDkuItcIixcbiAgICBkMjpcIui/memXtOWuv+iIjei/mOaYr+aMuua4qemmqOeahO+8jOWPquWPr+aDnOeOsOWcqOWPquacieaIkeS4gOS4quS6ulwiLFxuICAgIGQzOlwi5oCO5LmI5aW95YOP5pyJ5omL5py655qE5aOw6Z+z77yM5aW95YOP5piv5bem6L656YKj5byg5bqK55qE5p+c5a2Q5Y+R5Ye65p2l55qE77yM6K+d6K+04oCm4oCm5oiR55qE5omL5py65Lmf5LiN6KeB5LqG77yM546w5Zyo5oul5pyJ5LiA6YOo5omL5py65a+55oiR55qE5biu5Yqp55qE56Gu5b6I5aSnXCJcbn1cblxubGV0IGNocDFfMzAxX2RpYWxvZ3MgPSB7XG4gICAgZDE6XCLor7bvvIzpl6jlkaLvvJ/mgI7kuYjnqoHnhLbmtojlpLHkuobvvJ/nnIvmnaXpmbflhaXpu5Hpm77npo/lpKfmnpznhLbkvJrmnInlkITnp43lpYflvILnjrDosaHnmoTlj5HnlJ/vvIzorqnmiJHmg7Pmg7PigKbigKblrablp5Dmm77nu4/or7Tov4fvvIzlpoLmnpzpmbflhaXkuobpu5Hpm77npo/lpKfvvIzkuIDlrpropoHlpJrop4Llr5/lkajlm7TvvIzlr7vmib7kuIDliIflj6/ku6XliKnnlKjnmoTnur/ntKLohLHouqvjgILll6/igKbigKbmiJHov5nlsLHljrvlkajlm7TnnIvnnItcIiwgIFxuICAgIGQyOlwi5oCO5LmI5aKZ5LiK5pyJ5Liq5pWw5a2X77yf5a6e5Zyo5piv5aWH5oCq77yM5Lmf6K645oiR5bqU6K+l5p+l55yL5LiA5LiLXCIsXG4gICAgLy9kMzpcIuaenOeEtumXqOWHuueOsOS6hu+8jOeci+adpei/meS4qum7kembvuemj+Wkp+S5n+S4jei/h+WmguatpOWYm++8jOaIkeimgee7p+e7reafpeeci+WFtuS7luaIv+mXtOeahOe6v+e0olwiLFxufVxuXG5sZXQgY2hwMV8yMDNfZGlhbG9ncyA9IHtcbiAgICBkMTpcIui/memHjOeahOa0l+iho+acuuWlveWDj+aYr+WPr+S7peS9v+eUqOeahO+8jOS5n+iuuOaIkeaKiuWug+WPkeWKqOi1t+adpeS6i+aDheWwseS8muacieaJgOi9rOacuu+8n1wiLCAgXG59XG5cbmxldCBjaHAxXzIwMV9kaWFsb2dzID0ge1xuICAgIGQxOlwi6L+Z5Y+w5rSX6KGj5py65rKh5Yqe5rOV5ZCv5Yqo77yM5L2G5piv5LiK6Z2i55qE5Zu+5qGI5Y205aeL57uI5pi+56S644CM5pqX5Lqu5pqX5pqX5Lqu44CN77yM5ZCM5pe25oiR5o2h5Yiw5LiA5byg57q45p2h77yM5LiK6Z2i5YaZ552A44CM6K+35LiN6KaB5Lmx5Yqo5p2v5a2Q55qE6aG65bqP44CN77yM5oiR6K+V5LqG5LiA5LiL77yM5bGF54S255yf55qE5a6M5YWo5Yqo5LiN5LqGXCIsICBcbn1cblxubGV0IGNocDFfMjAyX2RpYWxvZ3MgPSB7XG4gICAgZDE6XCLov5nmiorpkqXljJnkuIrpnaLmnInoiI3nrqHmiL/pl7TnmoTmoIfnrb7vvIzkuIDlrprmmK/oiI3nrqHmiL/pl7TnmoTpkqXljJlcIiwgIFxufVxuXG5sZXQgY2hwMV8xRmxvb3JfZGlhbG9ncyA9IHtcbiAgICBkMTpcIuWJjemdouWwseaYr+iIjeeuoeeahOaIv+mXtOS6hu+8jOmcgOimgeS4gOaKiumSpeWMmeaJjeiDveaJk+W8gFwiLCAgXG4gICAgZDI6XCLlj6/mgbbvvIzov5nkuKrlpKfpl6jooqvplIHkvY/kuobvvIzkvLzkuY7pnIDopoHmn5Dnp43mnLrlhbPmiY3og73op6PlvIDvvIzkuZ/orrjmiJHopoHljrvoiI3nrqHnmoTmiL/pl7Tmib7mib7nnIvmnInmsqHmnInku4DkuYjnur/ntKJcIlxufVxuXG5sZXQgY2hwMV9tYW5hZ2VyUm9vbV9kaWFsb2dzID0ge1xuICAgIGQxOlwi55yL5p2l6IiN566h5bmz5pel6YeM6L+Y5piv5b6I5b+Z55qEXCIsXG59XG5cbndpbmRvdy5zZWxmRGlhbG9nID0ge1xuICAgIGNocDFfMzAzOmNocDFfMzAzX2RpYWxvZ3MsXG4gICAgY2hwMV/kuInmpbzotbDlu4o6Y2hwMV96b3VsYW5nX2RpYWxvZ3MsXG4gICAgY2hwMV8zMDE6Y2hwMV8zMDFfZGlhbG9ncyxcbiAgICBjaHAxXzMwMjpjaHAxXzMwMl9kaWFsb2dzLFxuICAgIGNocDFfMjAzOmNocDFfMjAzX2RpYWxvZ3MsXG4gICAgY2hwMV8yMDE6Y2hwMV8yMDFfZGlhbG9ncyxcbiAgICBjaHAxXzIwMjpjaHAxXzIwMl9kaWFsb2dzLFxuICAgIGNocDFf5LiA5qW85aSn5Y6FOmNocDFfMUZsb29yX2RpYWxvZ3MsXG4gICAgY2hwMV/oiI3nrqHmiL/pl7Q6Y2hwMV9tYW5hZ2VyUm9vbV9kaWFsb2dzLFxufVxuXG5cbi8vIOmVv+e6uOadoeWGheWuuVxuXG5cblxud2luZG93LnBhcGVycyA9IHtcblxufVxuXG5cblxuXG4iXX0=