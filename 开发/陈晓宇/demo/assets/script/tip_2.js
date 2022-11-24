// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var Door = require("door_02");

let text = [
    { state: 'space', content: 'press SPACE to load another scene' },
    { state: 'j', content: 'press J to talk to the ghost' }
]

let Key = { space: 0, j: 1 };

cc.Class({
    extends: cc.Component,

    properties: {
        textLable: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    init() {
        this.nowText = null;
        this.textEnd = true;
        this.tt = 0;
        this.textIndex = -1;
        this.isShowed = false;
    },

    selectText() {
        if (Door.getDoorClosed()) {
            console.log('door is closed');
            this.textIndex = Key.space;
        } else {
            console.log('nothing closed');
            this.textIndex = -1;
        }
    },

    setTextData(textData) {
        if (!this.textEnd) return;
        this.textEnd = false;
        this.nowText = textData;
        this.textLable.string = '';
    },

    closeDialog() {
        this.node.active = false;
    },

    onLoad() {
        this.init();
        window.tip = this.node;
    },

    onDisable(){
        this.textLable.string = '';
        this.isShowed = false;
    },

    start() {
    },

    update(dt) {
        this.tt += dt;
        this.selectText();
        if (!this.isShowed) {
            if (this.textIndex != -1) {
                this.setTextData(text[this.textIndex].content);
                if (this.tt >= 0.05) {
                    if (this.textLable.string.length < this.nowText.length) {
                        this.textLable.string = this.nowText.slice(0, this.textLable.string.length + 1);
                    } else {
                        this.textEnd = true;
                        this.isShowed = true;
                    }
                    this.tt = 0;
                }
            }
        }
    },
});

