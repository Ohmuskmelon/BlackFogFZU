// let text = [
//     { state: 'space', content: 'press SPACE to load another scene' },
//     { state: 'j', content: 'press j to talk to the ghost' },
//     { state: 'k', content: 'press k to take the tool' },
// ]

const text = new Map();
text.set("doors", "按下空格即可切换场景");
text.set("npcs", "按下J键查看内容");
text.set("tools", "按下K键拾取物品");
text.set("items", "按下R键使用所选物品");
text.set("games", "按下G键查看");

let Key = { space: 0, j: 1, k: 2 };

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
    this.textLable = this.node
      .getChildByName("textLabel")
      .getComponent(cc.Label);
  },

  onLoad() {
    this.init();
  },

  setTextData(textData) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.nowText = textData;
    this.textLable.string = "";
  },

  canShow() {
    return Global.itemType != " ";
  },

  showContext(dt) {
    this.tt += dt;
    if (!this.isShowed) {
      console.log("type:" + Global.itemType);

      if(window.Global.itemType == 'selfdialogs'){
        let currentscene = cc.director.getScene()._name;;
        let name = window.Global.itemName;
        let content = window.selfDialog[currentscene][name];
        this.setTextData(content);
      }else{
        this.setTextData(text.get(Global.itemType));
      }
      if (this.tt >= 0.05) {
        if (this.textLable.string.length < this.nowText.length) {
          this.textLable.string = this.nowText.slice(
            0,
            this.textLable.string.length + 1
          );
        } else {
          this.textEnd = true;
          this.isShowed = true;
        }
        this.tt = 0;
      }
    }
  },

  closeDialog() {
    this.node.active = false;
  },

  onDisable() {
    this.textLable.string = "";
    this.init();
  },

  start() {},

  update(dt) {
    this.showContext(dt);
  },
});
