// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


let text = [
    { state: 'space', content: 'press SPACE to load another scene' },
    { state: 'j', content: 'press J to talk to the ghost' },
    { state: 't', content: 'press T to put it in bag' }
]

let Key = { space: 0, j: 1, t: 2 };

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
        if (!Global.IsIn) {
            console.log('not in');
            this.textIndex = -1;
        } else {
            if (Global.InArr[Global.CloseItem.door] == 1) {
                console.log('in door');
                this.textIndex = Key.space;
            } else if (Global.InArr[Global.CloseItem.ghost] == 1) {
                console.log('in ghost');
                this.textIndex = Key.j;
            } else if (Global.InArr[Global.CloseItem.computer] == 1) {
                console.log('in computer');
                this.textIndex = Key.t;
            } else if (Global.InArr[Global.CloseItem.picture] == 1) {
                console.log('in picture');
                this.textIndex = Key.t;
            }
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

    onDisable() {
        this.textLable.string = '';
        this.init();
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

