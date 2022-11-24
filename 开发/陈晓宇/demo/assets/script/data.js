// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var POINTS = [
    {
        id : 0,
        version : '0.1',
        name : 'lockOfSwitchInCP0',
        state : false,
        dataNum : 0,
        poData : [],
        poMap : {
            "0" : -1
        }
    },
]

var POMAP = {
    lockOfSwitchInCP0 : 0,
}

var pushData = function (data, dataName, pointIndex){
    POINTS[pointIndex].dataNum++;
    POINTS[pointIndex].poData.push(data);
    let dataIndexName = 'the' + dataName;
    POINTS[pointIndex].poMap[dataIndexName] = POINTS[pointIndex].dataNum-1;
    console.log(POINTS[pointIndex].poData);
    console.log(POINTS[pointIndex].poMap);
}

var getData = function (dataName, pointIndex){
    let dataIndexName = 'the' + dataName;
    let dataIndex = POINTS[pointIndex].poMap[dataIndexName];
    console.log(POINTS[pointIndex].poMap);
    let data = POINTS[pointIndex].poData[dataIndex];
    console.log(data);
    return data;
}

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});

module.exports = {
    POINTS,
    POMAP,
    pushData,
    getData
}
