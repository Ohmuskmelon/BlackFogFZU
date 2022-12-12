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
  caomeipaofu: number = 0;
  heisenlin: number = 0;
  tiantianquan: number = 0;
  sum: number = 0;

  @property(cc.Label)
  label: cc.Label = null;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  onLoad() {
    this.node.on("check", this.check, this);
  }

  check(below_node: below_node) {
    cc.log(below_node.name);
    if (below_node.name == "草莓泡芙<testbutton>") {
      if (below_node.isClick == false) {
        this.caomeipaofu += below_node.num;
        if (this.caomeipaofu == 10) this.caomeipaofu = 8;
      } else {
        if (this.caomeipaofu == 8) this.caomeipaofu = 5;
        else this.caomeipaofu = 0;
      }
      cc.log("草莓泡芙这么多块钱" + this.caomeipaofu);
    }

    if (below_node.name == "甜甜圈<testbutton>") {
      if (below_node.isClick == false) {
        this.tiantianquan += below_node.num;
      } else {
        this.tiantianquan -= below_node.num;
      }
      cc.log("甜甜圈这么多块钱" + this.tiantianquan);
    }

    if (below_node.name == "黑森林蛋糕<testbutton>") {
      if (below_node.isClick == false) {
        this.heisenlin += below_node.num;
      } else {
        this.heisenlin -= below_node.num;
      }
      cc.log("黑森林蛋糕这么多块钱" + this.heisenlin);
    }

    this.sum = this.caomeipaofu + this.tiantianquan + this.heisenlin;
    cc.log("总和是" + this.sum);
  }

  touchstart() {
    if (this.sum != 39) {
      this.label.string = "错误";
    } else {
      this.label.string = "正确";
    }
  }

  // update (dt) {}
}
