// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import below_node from "./testbutton";
@ccclass
export default class NewClass extends cc.Component {
  // LIFE-CYCLE CALLBACKS:
  @property(cc.Node)
  below_node: cc.Node = null;

  // onLoad () {}
  onLoad() {
    this.node.opacity = 0;
    this.node.on("show", this.show, this);
  }

  show(below_node: below_node) {
    if (below_node.node.opacity == 0) {
      this.node.opacity = 255;
      cc.log("show隐藏");
    }
    // else {
    //   this.node.opacity = 0;
    //   cc.log("show显示");
    // }
  }

  touchstart(below_node: below_node) {
    if (this.node.opacity == 255) {
      cc.log("将" + this.node.name + "取下货架");

      this.node.opacity = 0;
      this.below_node.emit("show", this);
    }
  }

  // update (dt) {}
}
