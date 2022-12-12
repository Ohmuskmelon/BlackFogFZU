// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import below_node from "./button";
@ccclass
export default class NewClass extends cc.Component {
  @property
  value: number = 0;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}
  onLoad() {
    this.node.on("addSocre", this.addSocre, this);
    this.node.on("decraseScore", this.decraseScore, this);
    this.node.on("check", this.check, this);
  }

  addSocre(below_node: below_node) {
    this.value = this.value + below_node.value;
    cc.log(this.value);
    cc.log(below_node.button_name.string + "按下");

    if (this.value == 141) cc.log("true");
  }
  decraseScore(below_node: below_node) {
    this.value = this.value - below_node.value;
    cc.log(this.value);
    cc.log(below_node.button_name.string + "按下");
    if (this.value == 141) cc.log("true");
  }

  check() {
    if (this.value == 111) {
      cc.log("true");
    } else cc.log("false");
  }

  // update (dt) {}
}
