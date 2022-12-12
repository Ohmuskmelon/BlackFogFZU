// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import show_node from "./showbutton";
@ccclass
export default class NewClass extends cc.Component {
  isClick: boolean = true;
  @property(cc.Node)
  check_button: cc.Node = null;

  @property(cc.Node)
  show_button: cc.Node = null;

  @property(Number)
  num;
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  onLoad() {
    this.node.on("show", this.show, this);
  }
  touchart() {
    cc.log(this.num);

    if (this.isClick == true) {
      this.node.opacity = 0;
      this.isClick = false;
      this.show_button.emit("show", this);
      this.check_button.emit("check", this);
      cc.log("隐藏");
    }
    // else {
    //   this.node.opacity = 255;
    //   this.isClick = true;
    //   this.show_button.emit("show", this);
    //   this.check_button.emit("check", this);
    //   cc.log("显示");
    // }
  }
  show(show_node: show_node) {
    this.node.opacity = 255;
    this.isClick = true;
    this.show_button.emit("show", this);
    this.check_button.emit("check", this);
    cc.log("显示");
  }

  // update (dt) {}
}
