// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

let closeItem = {
    "卷轴":0,
    "心经" : 1,
    "火腿" : 2,
    "烈酒" : 3,
    "煎饺" : 4,
    "金钥匙": 5,
    "银钥匙":6,
    "黄石":7,
}
inarr = [0,0,0,0,0,0,0,0];
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        window.Items = {
            // InMap : Map,
            InArr:Array,
            CloseItem : Map,
            IsIn:null,
        }
        window.Bag = [];
    },

    start () {
        // let scene1Arr = [0,0,0,0,0,0,0,0];
        // let scene2Arr = [0,0,0,0,0,0,0,0];
        // let scene3Arr = [0,0,0,0,0,0,0,0];
        // let scene4Arr = [0,0,0,0,0,0,0,0];

        Items.IsIn = false;
        // Items.InMap = {
        //     "scene1":scene1Arr,
        //     "scene2":scene2Arr,
        //     "scene3":scene3Arr,
        //     "scene4":scene4Arr,
        // };
        Items.InArr = inarr;
        Items.CloseItem = closeItem;
    },

    update (dt) {
    
    },

});
