
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/bag/bagSetting');
require('./assets/scripts/bag/bagTool');
require('./assets/scripts/bag/useTool');
require('./assets/scripts/changeback');
require('./assets/scripts/chp1/F1ToF2');
require('./assets/scripts/chp1/F1orF2');
require('./assets/scripts/chp1/IsLockOfClosetIn302');
require('./assets/scripts/chp1/disableLock');
require('./assets/scripts/chp1/isLockOf301');
require('./assets/scripts/chp1/lockOf301');
require('./assets/scripts/chp1/openDoorOfManager');
require('./assets/scripts/comeBackToFirstPage');
require('./assets/scripts/controlUIInFirstPage');
require('./assets/scripts/controller/camera');
require('./assets/scripts/controller/changeScene');
require('./assets/scripts/controller/game - 001');
require('./assets/scripts/controller/loadState');
require('./assets/scripts/controller/player_ctrl_pc - 001');
require('./assets/scripts/controller/saveState');
require('./assets/scripts/dialog/dialog - 001');
require('./assets/scripts/game_chp1/cp1_301_wall/301_phone');
require('./assets/scripts/game_chp1/cp1_cloth/1_js');
require('./assets/scripts/game_chp1/cp1_cloth/2_js');
require('./assets/scripts/game_chp1/cp1_cloth/3_js');
require('./assets/scripts/game_chp1/cp1_cloth/4_js');
require('./assets/scripts/game_chp1/cp1_cup/1_java');
require('./assets/scripts/game_chp1/cp1_cup/2_java');
require('./assets/scripts/game_chp1/cp1_cup/3_java');
require('./assets/scripts/game_chp1/cp1_cup/4_java');
require('./assets/scripts/game_chp1/cp1_cup/5_java');
require('./assets/scripts/game_chp1/cp1_lamp/isClosetClosed');
require('./assets/scripts/game_chp1/cp1_lamp/setbuttom');
require('./assets/scripts/game_chp1/cp1_lamp/switchbutton');
require('./assets/scripts/game_chp1/cp1_lock_302/checkPhone');
require('./assets/scripts/game_chp1/cp1_lock_302/closet');
require('./assets/scripts/game_chp1/cp1_lock_302/getphone');
require('./assets/scripts/game_chp1/cp1_lock_sheguan/addStone');
require('./assets/scripts/game_chp1/cp1_lock_sheguan/gate');
require('./assets/scripts/game_chp1/cp1_lock_sheguan/getStone');
require('./assets/scripts/game_chp1/cp1_lock_sheguan/showStone');
require('./assets/scripts/game_chp1/cp1_lock_stair/lockOfStairsTip');
require('./assets/scripts/game_chp1/cp1_lock_stair/stairclock');
require('./assets/scripts/game_chp1/cp1_lock_stair/stairlock');
require('./assets/scripts/game_chp1/cp1_switch/showsuccess');
require('./assets/scripts/game_chp1/cp1_switch/switch');
require('./assets/scripts/game_chp1/cp1_washingMachine/button');
require('./assets/scripts/game_chp1/cp1_washingMachine/changcolor');
require('./assets/scripts/game_chp1/cp1_washingMachine/check');
require('./assets/scripts/game_chp1/cp1_washingMachine/check_out');
require('./assets/scripts/game_chp1/cp1_washingMachine/config');
require('./assets/scripts/games/gameController');
require('./assets/scripts/info/ItemInfo');
require('./assets/scripts/info/bagInfo');
require('./assets/scripts/info/dialogContent');
require('./assets/scripts/info/gameInfo');
require('./assets/scripts/info/sceneinfo');
require('./assets/scripts/item/item');
require('./assets/scripts/savestate');
require('./assets/scripts/selfdialog/selfdialog');
require('./assets/scripts/selfdialog/selfdialogInfo');
require('./assets/scripts/tip/tips');
require('./assets/scripts/tip/trigger');
require('./assets/scripts/tool/tool');

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