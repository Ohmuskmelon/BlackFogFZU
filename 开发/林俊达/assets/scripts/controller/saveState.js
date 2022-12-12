var POINTS = [
    {
        id : 0,
        version : '0.1',
        poName : 'lockOfSwitchInCP0',
        state : false,
        dataNum : 0,
        poData : [],
        poMap : {
            "origin" : -1
        }
    },
]


var POMAP = {
    lockOfSwitchInCP0 : 0,
};


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

    },

    start () {

    },
});

module.exports = {
    POINTS,
    POMAP,
    pushData,
    getData,
}