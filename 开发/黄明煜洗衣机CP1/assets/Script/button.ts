// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  value: number = 0;

  @property(cc.Node)
  upper_node: cc.Node = null;

  isClick: boolean = true;

  @property(cc.Label)
  button_name: cc.Label = null;

  onLoad() {
    cc.log(this.button_name.string);
    if (this.button_name.string == "button_1") this.value = 1;
    if (this.button_name.string == "button_2") this.value = 3;
    if (this.button_name.string == "button_3") this.value = 11;
    if (this.button_name.string == "button_4") this.value = 29;
    if (this.button_name.string == "button_5") this.value = 97;

    this.node.on(cc.Node.EventType.TOUCH_START, this.touchstart, this);
  }

  touchstart() {
    cc.log("start");
    if (this.isClick == true) {
      this.upper_node.emit("addSocre", this);
      this.isClick = false;
    } else {
      this.upper_node.emit("decraseScore", this);
      this.isClick = true;
    }
  }

  changcolor() {
    cc.log("changcolor");
    if (this.isClick == true) {
      this.node.color = cc.Color.YELLOW;
    } else {
      this.node.color = cc.Color.BLUE;
    }
  }
  // update (dt) {}
}
