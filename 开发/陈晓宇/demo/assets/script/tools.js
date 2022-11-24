// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const TOOLS = [
    {
        id: 0,
        name: '电脑',
        intro: '一台平平无奇的电脑',
        picUrl: 'tools/电脑',
        connect: null,
        numOfCon: 0,
        inBag: false,
        isActive : false,
    },
    {
        id: 1,
        name: '画',
        intro: '一幅画得还可以的画',
        picUrl: 'tools/画',
        connect: null,
        numOfCon: 0,
        inBag: false,
        isActive : false,
    },
    {
        id: 2,
        name: '书架',
        intro: '放了很多书的书架',
        picUrl: 'tools/书架',
        connect: [0,1],
        numOfCon: 2,
        inBag: false,
        isActive : false,
    }
]

const toolMap = {
    computer : 0,
    picture : 1,
    bookrack: 2,
}

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});

module.exports = {
    TOOLS,
    toolMap,
}
